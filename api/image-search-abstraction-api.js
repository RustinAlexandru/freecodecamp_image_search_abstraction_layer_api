"use strict";

module.exports = function(app, db) {

    app.get('/search/:searchQuery(*)', handleSearch);
    app.get('/latest/search/', getLatestHistory);
  
    
    const GoogleImages = require('google-images');
    const client = new GoogleImages('010959022817838420848:sft8fxexruw', 'AIzaSyCGrjxnhaMHT1dkiEzXdec1j_PTiNg6kQY')
    
    function getLatestHistory(req, res) {
        const queries = db.collection("queries");
        queries.find().sort({"when": -1}).toArray().then(results => {
                    const latestQueries = results.map(result => {return {query: result.query, when: result.when};});
                    res.send(latestQueries)
                })
                .catch(err => res.send({error: "Couldn't retrieve latest queries"}));
    }
    
    function handleSearch(req, res) {
        const search = req.params.searchQuery;
        const page = req.query.offset || 1
        
        const query = {query: search, when: new Date().toLocaleString()};
        
        if (query !== "favicon.ico") {
            saveToDb(query, res);
        }
        
        client.search(search, {page: page})
                    .then(images => {
                        
                     const imgObjs = images.map(x => {
                            return {url: x.url, 
                                altText: x.description, 
                                pageUrl: x.parentPage
                               };
                            });
                            
                    res.send(JSON.stringify(imgObjs, null, 3));
                    }
                    )
                    .catch(err => res.send({error: err}));
    };
    
    function saveToDb(objToSave, res) {
        
        const queries = db.collection("queries");
        
        queries.save(objToSave, (err, result) => {
            if (err) res.send({error: "Cant save query to database"});
        });
        
        
    }
};
