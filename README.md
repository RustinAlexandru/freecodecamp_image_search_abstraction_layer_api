# Freecodecamp Image Search Abstraction Layer Api

## User stories:

  1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
  2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
  3. I can get a list of the most recently submitted search strings.

## Example query usage:

    https://img-sal.herokuapp.com/lolcats%20funny?offset=10
    https://img-sal.herokuapp.com/latest

## Example query output:
    [{
        "url":"https://i.ytimg.com/vi/A0jvbCdwWAg/hqdefault.jpg",
        "altText":"FUNNY CATS LOL!!! (try not to laugh) - YouTube",
        "pageUrl":"https://www.youtube.com/watch?v=A0jvbCdwWAg"
    },
    {
        "url":"http://images4.fanpop.com/image/photos/18000000/lol-funny-cat-cats-18081863-500-333.jpg",
        "altText":"Panzerkampfwagen VIII Maus - Page 5 - Implemented Suggestions ...",
        "pageUrl":"https://forum.warthunder.com/index.php?/topic/136287-panzerkampfwagen-viii-maus/&page=5"
    },
      {
        "url":"http://fc02.deviantart.net/fs40/f/2009/014/c/3/Funny_cats_lol_by_BrandonCates.jpg",
        "altText":"Meet Lol Cat... | Kingdom Hearts Forum",
        "pageUrl":"http://www.khplanet.com/forum/threads/meet-lol-cat.7153/"
    },
      {
        "url":"http://images5.fanpop.com/image/photos/31800000/lol-cat-funny-cat-pictures-31842322-640-480.jpg",
        "altText":"Scenery & Spring Pictures: Funny Pictures Lol",
        "pageUrl":"http://seasdasceneryspringpswa.blogspot.com/2015/07/funny-pictures-lol.html"
    },
      {
        "url":"http://gatoteca.com.br/wp-content/uploads/2014/03/funny_cats_lol_cats_wat.gif",
        "altText":"Robocast - Play the Web",
        "pageUrl":"http://robocast.com/roboshows/1466-lol-cat-gifz-to-brighten-your-day/play"
    },
      {
        "url":"http://iliketowastemytime.com/sites/default/files/imagecache/blog_image/funny_cats_lol_cats_drugs.jpg",
        "altText":"Hilarious Cat Compilation... # 9 OMG | Hilarify",
        "pageUrl":"http://hilarify.com/hilarious-cat-compilation-9-omg/"
    },
      {
        "url":"http://cutecatshq.com/wp-content/uploads/2013/04/lol...-Cats..jpg",
        "altText":"lol… Cats. | Cute cats HQ Free pictures of funny cats and photo of ...",
        "pageUrl":"https://cutecatshq.com/cats/lol-cats/"
    },
      {
        "url":"http://iliketowastemytime.com/sites/default/files/funny_cats_lol_cats_cant_go_when_u_watch.jpg",
        "altText":"Hilarious Cat Compilation... # 9 OMG | Hilarify",
        "pageUrl":"http://hilarify.com/hilarious-cat-compilation-9-omg/"
    },
      {
        "url":"http://www.dumpaday.com/wp-content/uploads/2013/01/6-lazy-cat-lol-cat-funny-pictures.jpg",
        "altText":"Pictures Of Funny Animals: Funny Pictures Black Cats",
        "pageUrl":"http://sasoffunnyniswa.blogspot.com/2016/01/funny-pictures-black-cats.html"
    },
      {
        "url":"http://iliketowastemytime.com/sites/default/files/funny_cats_lol_cats_sup_bro.jpg",
        "altText":"Hilarious Cat Compilation... # 9 OMG | Hilarify",
        "pageUrl":"http://hilarify.com/hilarious-cat-compilation-9-omg/"
    }]

### Example latest output:
	[{
		"query": "boring query",
		"when": "6/10/2017, 6:38:57 PM"
	},
	{
		"query": "history meh",
		"when": "6/10/2017, 6:38:50 PM"
	},
	{
		"query": "example query",
		"when": "6/10/2017, 6:38:44 PM"
	},
	{
		"query": "lol funny cats",
		"when": "6/10/2017, 6:37:16 PM"
	},
	{
		"query": "lol funny cats",
		"when": "6/10/2017, 6:36:54 PM"
	},
	{
		"query": "latest",
		"when": "6/10/2017, 6:09:54 PM"
	},
	{
		"query": "funny cats",
		"when": "6/10/2017, 6:00:15 PM"
	},
	{
		"query": "rsdmax beard",
		"when": "6/10/2017, 5:59:51 PM"
	},
	{
		"query": "rsdmax beard",
		"when": "6/10/2017, 5:59:47 PM"
	},
	{
		"query": "rsdmax beard",
		"when": "6/10/2017, 5:59:36 PM"
	},
	{
		"query": "rsdmax beard",
		"when": "6/10/2017, 5:59:31 PM"
	},
	{
		"query": "rsdmax beard",
		"when": "6/10/2017, 5:59:27 PM"
	},
	{
		"query": "rsdmax beard",
		"when": "6/10/2017, 2:14:42 PM"
	},
	{
		"query": "rsdmax beard",
		"when": "6/10/2017, 2:14:14 PM"
	}]
