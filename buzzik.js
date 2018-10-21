//Controller for homepage.html

const Url = 'https://buzzik-cooperpellaton.c9users.io:8080/fetch_listening_history?id=spotify:user:genaricname';
$.ajax({
    url:Url,
    type:"GET",
    crossDomain: true,
    //dataType: "jsonp",
    success: function(result) {
        console.log(result)
    },
    error:function(error){
        console.log('Error ', error)
    }
});

var spotifyPull = [{"listening_date":1537134884326,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":202489,"explicit":false,"external_ids":{"isrc":"USNLR1300263"},"external_urls":{"spotify":"https://open.spotify.com/track/5AyZoinZOJH7vyH9Qay6bh"},"href":"https://api.spotify.com/v1/tracks/5AyZoinZOJH7vyH9Qay6bh","id":"5AyZoinZOJH7vyH9Qay6bh","name":"If You Love These People","popularity":37,"preview_url":"https://p.scdn.co/mp3-preview/19deb7dd66a0f84ad9f10c6a1a41a4d57df483ea?cid=44c03e1b60b9442ab6552938917f3b19","track_number":6,"type":"track","uri":"spotify:track:5AyZoinZOJH7vyH9Qay6bh"}},{"listening_date":1537134884327,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":202489,"explicit":false,"external_ids":{"isrc":"USNLR1300263"},"external_urls":{"spotify":"https://open.spotify.com/track/5AyZoinZOJH7vyH9Qay6bh"},"href":"https://api.spotify.com/v1/tracks/5AyZoinZOJH7vyH9Qay6bh","id":"5AyZoinZOJH7vyH9Qay6bh","name":"If You Love These People","popularity":37,"preview_url":"https://p.scdn.co/mp3-preview/19deb7dd66a0f84ad9f10c6a1a41a4d57df483ea?cid=44c03e1b60b9442ab6552938917f3b19","track_number":6,"type":"track","uri":"spotify:track:5AyZoinZOJH7vyH9Qay6bh"}},{"listening_date":1537135002674,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":118438,"explicit":false,"external_ids":{"isrc":"USNLR1300264"},"external_urls":{"spotify":"https://open.spotify.com/track/2da9wU6Osd6UoyZodzcgz1"},"href":"https://api.spotify.com/v1/tracks/2da9wU6Osd6UoyZodzcgz1","id":"2da9wU6Osd6UoyZodzcgz1","name":"Krypton's Last","popularity":34,"preview_url":"https://p.scdn.co/mp3-preview/92ce83596fe00dccb450d73924fde275f753235d?cid=44c03e1b60b9442ab6552938917f3b19","track_number":7,"type":"track","uri":"spotify:track:2da9wU6Osd6UoyZodzcgz1"}},{"listening_date":1537135592002,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":589548,"explicit":false,"external_ids":{"isrc":"USNLR1300265"},"external_urls":{"spotify":"https://open.spotify.com/track/1ShzEWg9kGAduVC7f7Sjl2"},"href":"https://api.spotify.com/v1/tracks/1ShzEWg9kGAduVC7f7Sjl2","id":"1ShzEWg9kGAduVC7f7Sjl2","name":"Terraforming","popularity":37,"preview_url":"https://p.scdn.co/mp3-preview/981f1c6ca8408594d61b4efebf3ae6a924965e7d?cid=44c03e1b60b9442ab6552938917f3b19","track_number":8,"type":"track","uri":"spotify:track:1ShzEWg9kGAduVC7f7Sjl2"}},{"listening_date":1537135767572,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":175036,"explicit":false,"external_ids":{"isrc":"USNLR1300266"},"external_urls":{"spotify":"https://open.spotify.com/track/6ffdNL410UPywBSVqJPEkw"},"href":"https://api.spotify.com/v1/tracks/6ffdNL410UPywBSVqJPEkw","id":"6ffdNL410UPywBSVqJPEkw","name":"Tornado","popularity":33,"preview_url":"https://p.scdn.co/mp3-preview/d786b9d61eab97456c516dbf6840a13d84e57231?cid=44c03e1b60b9442ab6552938917f3b19","track_number":9,"type":"track","uri":"spotify:track:6ffdNL410UPywBSVqJPEkw"}},{"listening_date":1537135959740,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":193125,"explicit":false,"external_ids":{"isrc":"USNLR1300267"},"external_urls":{"spotify":"https://open.spotify.com/track/0nlVkMP83sMo50B9hy2dSW"},"href":"https://api.spotify.com/v1/tracks/0nlVkMP83sMo50B9hy2dSW","id":"0nlVkMP83sMo50B9hy2dSW","name":"You Die or I Do","popularity":34,"preview_url":"https://p.scdn.co/mp3-preview/06069f6802c3f3b411be8dda54af658b56a82862?cid=44c03e1b60b9442ab6552938917f3b19","track_number":10,"type":"track","uri":"spotify:track:0nlVkMP83sMo50B9hy2dSW"}},{"listening_date":1537135960302,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":193125,"explicit":false,"external_ids":{"isrc":"USNLR1300267"},"external_urls":{"spotify":"https://open.spotify.com/track/0nlVkMP83sMo50B9hy2dSW"},"href":"https://api.spotify.com/v1/tracks/0nlVkMP83sMo50B9hy2dSW","id":"0nlVkMP83sMo50B9hy2dSW","name":"You Die or I Do","popularity":34,"preview_url":"https://p.scdn.co/mp3-preview/06069f6802c3f3b411be8dda54af658b56a82862?cid=44c03e1b60b9442ab6552938917f3b19","track_number":10,"type":"track","uri":"spotify:track:0nlVkMP83sMo50B9hy2dSW"}},{"listening_date":1537136115609,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":156011,"explicit":false,"external_ids":{"isrc":"USNLR1300268"},"external_urls":{"spotify":"https://open.spotify.com/track/1dvWl0B9CcKKYnj1NqQ5tx"},"href":"https://api.spotify.com/v1/tracks/1dvWl0B9CcKKYnj1NqQ5tx","id":"1dvWl0B9CcKKYnj1NqQ5tx","name":"Launch","popularity":35,"preview_url":"https://p.scdn.co/mp3-preview/a5d65d8358160697696e50ca7bb812fc63242a53?cid=44c03e1b60b9442ab6552938917f3b19","track_number":11,"type":"track","uri":"spotify:track:1dvWl0B9CcKKYnj1NqQ5tx"}},{"listening_date":1537136115625,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":156011,"explicit":false,"external_ids":{"isrc":"USNLR1300268"},"external_urls":{"spotify":"https://open.spotify.com/track/1dvWl0B9CcKKYnj1NqQ5tx"},"href":"https://api.spotify.com/v1/tracks/1dvWl0B9CcKKYnj1NqQ5tx","id":"1dvWl0B9CcKKYnj1NqQ5tx","name":"Launch","popularity":35,"preview_url":"https://p.scdn.co/mp3-preview/a5d65d8358160697696e50ca7bb812fc63242a53?cid=44c03e1b60b9442ab6552938917f3b19","track_number":11,"type":"track","uri":"spotify:track:1dvWl0B9CcKKYnj1NqQ5tx"}},{"listening_date":1537136195118,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":79498,"explicit":false,"external_ids":{"isrc":"USNLR1300269"},"external_urls":{"spotify":"https://open.spotify.com/track/4r6hJg7eq8WO3x6N37fA2J"},"href":"https://api.spotify.com/v1/tracks/4r6hJg7eq8WO3x6N37fA2J","id":"4r6hJg7eq8WO3x6N37fA2J","name":"Ignition","popularity":32,"preview_url":"https://p.scdn.co/mp3-preview/de185fd12de4549e76c71a276d614c93da27cfe6?cid=44c03e1b60b9442ab6552938917f3b19","track_number":12,"type":"track","uri":"spotify:track:4r6hJg7eq8WO3x6N37fA2J"}},{"listening_date":1537136372091,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":177115,"explicit":false,"external_ids":{"isrc":"USNLR1300270"},"external_urls":{"spotify":"https://open.spotify.com/track/45A9ZgZVMgXkjVfUe8VD2B"},"href":"https://api.spotify.com/v1/tracks/45A9ZgZVMgXkjVfUe8VD2B","id":"45A9ZgZVMgXkjVfUe8VD2B","name":"I Will Find Him","popularity":36,"preview_url":"https://p.scdn.co/mp3-preview/6027a2ca1c99abd83bb4f6a9c11bcfef81142b27?cid=44c03e1b60b9442ab6552938917f3b19","track_number":13,"type":"track","uri":"spotify:track:45A9ZgZVMgXkjVfUe8VD2B"}},{"listening_date":1537138705350,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":227346,"explicit":false,"external_ids":{"isrc":"USNLR1300271"},"external_urls":{"spotify":"https://open.spotify.com/track/2pawAJP4W7gxcO6UMPdiEN"},"href":"https://api.spotify.com/v1/tracks/2pawAJP4W7gxcO6UMPdiEN","id":"2pawAJP4W7gxcO6UMPdiEN","name":"This Is Clark Kent","popularity":35,"preview_url":"https://p.scdn.co/mp3-preview/25edb9d1bd15df89973870725a223a23fb1095bd?cid=44c03e1b60b9442ab6552938917f3b19","track_number":14,"type":"track","uri":"spotify:track:2pawAJP4W7gxcO6UMPdiEN"}},{"listening_date":1537140455726,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":227040,"explicit":false,"external_ids":{"isrc":"USNLR1300272"},"external_urls":{"spotify":"https://open.spotify.com/track/36JiSvWmuHrfMMk7JYXsHb"},"href":"https://api.spotify.com/v1/tracks/36JiSvWmuHrfMMk7JYXsHb","id":"36JiSvWmuHrfMMk7JYXsHb","name":"I Have So Many Questions","popularity":30,"preview_url":"https://p.scdn.co/mp3-preview/696a44e46389a68afcbd384a699325c170a012a0?cid=44c03e1b60b9442ab6552938917f3b19","track_number":15,"type":"track","uri":"spotify:track:36JiSvWmuHrfMMk7JYXsHb"}},{"listening_date":1537140713709,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":258148,"explicit":false,"external_ids":{"isrc":"USNLR1300273"},"external_urls":{"spotify":"https://open.spotify.com/track/1y2I51IqxWCd2rITDEYndo"},"href":"https://api.spotify.com/v1/tracks/1y2I51IqxWCd2rITDEYndo","id":"1y2I51IqxWCd2rITDEYndo","name":"Flight","popularity":46,"preview_url":"https://p.scdn.co/mp3-preview/eb68eb7952f61aa43c9df82ff7edcd2e5b8368bf?cid=44c03e1b60b9442ab6552938917f3b19","track_number":16,"type":"track","uri":"spotify:track:1y2I51IqxWCd2rITDEYndo"}},{"listening_date":1537141041086,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":327338,"explicit":false,"external_ids":{"isrc":"USNLR1300274"},"external_urls":{"spotify":"https://open.spotify.com/track/3g2tB9iQhbyiFPboJJDtgp"},"href":"https://api.spotify.com/v1/tracks/3g2tB9iQhbyiFPboJJDtgp","id":"3g2tB9iQhbyiFPboJJDtgp","name":"What Are You Going to Do When You Are Not Saving the World?","popularity":45,"preview_url":"https://p.scdn.co/mp3-preview/02a96132829c432ef38c59ba506dae02ea8591de?cid=44c03e1b60b9442ab6552938917f3b19","track_number":17,"type":"track","uri":"spotify:track:3g2tB9iQhbyiFPboJJDtgp"}},{"listening_date":1537141041089,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":327338,"explicit":false,"external_ids":{"isrc":"USNLR1300274"},"external_urls":{"spotify":"https://open.spotify.com/track/3g2tB9iQhbyiFPboJJDtgp"},"href":"https://api.spotify.com/v1/tracks/3g2tB9iQhbyiFPboJJDtgp","id":"3g2tB9iQhbyiFPboJJDtgp","name":"What Are You Going to Do When You Are Not Saving the World?","popularity":45,"preview_url":"https://p.scdn.co/mp3-preview/02a96132829c432ef38c59ba506dae02ea8591de?cid=44c03e1b60b9442ab6552938917f3b19","track_number":17,"type":"track","uri":"spotify:track:3g2tB9iQhbyiFPboJJDtgp"}},{"listening_date":1537142737753,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":1696810,"explicit":false,"external_ids":{"isrc":"USNLR1300275"},"external_urls":{"spotify":"https://open.spotify.com/track/7kTeXJhZZdK9Hwq8JJINq1"},"href":"https://api.spotify.com/v1/tracks/7kTeXJhZZdK9Hwq8JJINq1","id":"7kTeXJhZZdK9Hwq8JJINq1","name":"Man of Steel - Hans' Original Sketchbook","popularity":38,"preview_url":"https://p.scdn.co/mp3-preview/2cd2e15e0f8c8b327667a398bd30f904709630df?cid=44c03e1b60b9442ab6552938917f3b19","track_number":18,"type":"track","uri":"spotify:track:7kTeXJhZZdK9Hwq8JJINq1"}}];

var viewsEnum = Object.freeze({"day": 86400000, "week": 604800000, "month": 2592000000,"year":31540000000}), //Enum to help sort date based on current view
    viewComp = viewsEnum.day,
    numberSongsData = [],
    artistsBreakdown = [], //A breakdown consists of the four top results and the combined weight of all other categories.
    titlesBreakdown = [],
    defaultMin = null,
    defaultMax = null; //change these to start at the current academic year

var viewSwitchedOff = "select-day";
var chartSwitchedOff = "select-bar";
var filterSwitchedOff = "select-none";


function compareDay(date1, date2) {
    return (date1.getDate() == date2.getDate()) && (Math.abs(date1.valueOf() - date2.valueOf()) < viewsEnum.day);
}
function compareWeek(date1, date2) {
    // TODO
    return compareDay(date1, date2);
}
function compareMonth(date1, date2) {
    return (date1.getMonth() == date2.getMonth()) && (Math.abs(date1.valueOf() - date2.valueOf()) < viewsEnum.month);
}
function compareYear(date1, date2) {
    return date1.getFullYear() == date2.getFullYear();
}

function standardizeDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
function standardizeWeek(date) {
    // TODO
    return standardizeDay();
}
function standardizeMonth(date) {
    return new Date(date.getFullYear(), date.getMonth());
}
function standardizeYear(date) {
    return new Date(date.getFullYear(), 0);
}

function sortByTime() {
    numberSongsData = [];
    numberSongsDataDates = [];

    var comparatorFunc = function(date1, date2) { return false; };
    var standardizeFunc = function(date) { return Date.now(); };
    switch (viewComp) {
        case viewsEnum.day:
            comparatorFunc = compareDay;
            standardizeFunc = standardizeDay;
            break;
        case viewsEnum.week:
            comparatorFunc = compareWeek;
            standardizeFunc = standardizeWeek;
            break;
        case viewsEnum.month:
            comparatorFunc = compareMonth;
            standardizeFunc = standardizeMonth;
            break;
        case viewsEnum.year:
            comparatorFunc = compareYear;
            standardizeFunc = standardizeYear;
            break;
    }

    for (i=0; i < spotifyPull.length; i++) {
        var exists = false;
        var dateTime = spotifyPull[i].listening_date;

        var date = new Date(dateTime);
        var exists = false;
        for (var j = 0; j < numberSongsData.length; j++) {
            if (comparatorFunc(numberSongsDataDates[j], date)) {
                numberSongsData[j][1]++;
                exists = true;
                break;
            }
        }
        if (!exists) {
            var standardDate = standardizeFunc(date);

            numberSongsData.push([standardDate.valueOf(), 1]);
            numberSongsDataDates.push(standardDate);
        }

        /*
        date = Math.floor(dateTime / viewComp);
        for (j = 0; j < numberSongsData.length; j++) {
            if (Math.floor(numberSongsData[j][0] / viewComp) == date) {
                numberSongsData[j][1] = numberSongsData[j][1] + 1;
                exists = true;
            }
        }
        if (exists == false) {
            numberSongsData.push([dateTime, 1]);
        }
        */
    }
}


function sortByArtist() {
    artistsData = [];
    artistsInData = [];

    var comparatorFunc = function(artist1, artist2) {
        if (artist1 == artist2)
            {return true;}
        else
            {return false;}
    }


    for (i=0; i < spotifyPull.length; i++) {
        var exists = false;
        var artist = spotifyPull[i].track.artists.name;
        for (var j = 0; j < artistsData.length; j++) {
            if (comparatorFunc(artistsInData[j], artist)) {
                artistsData[j][1]++;
                exists = true;
                break;
            }
        }
        if (!exists) {
            artistsData.push([artist, 1]);
            artistsInData.push(artist);
        }
    }

    //var topFourArtists = []; //To prevent an unviewable amount of data this algo picks out the top four Artists
    // for(i=0;i<artistsInData.length;i++) {
    //     for (j=0;j<topFourArtists;j++) {
    //         if(topFourArtists[j][1] <
    //     }
    // }
    var compareArtists = function(a, b) {
        return a[1] - b[1];
    }
    artistsData.sort(compareArtists); //should sort the array by amount of listens to an artist

    var otherCount = 0;
    for (i=4;i<artistsData.length;i++) {
        otherCount += artistsData[i][1];
    }
    artistsBreakdown = [artistsData[0], artistsData[1], artistsData[2], artistsData[3], ["Other", otherCount]];
}

function sortByTitle() {return null;} //Implement

var sortMethod = function() {return null;};

sortMethod = sortByTime; //default value

sortByTime();
var rawData = numberSongsData;
var options = null;
var barOptions = {
    series: {
        bars: {
            show: true,
            fill: true,
            barWidth: viewComp,
            align: "left"
        },
    },
    legend: {
        show: false
    },
    xaxis: {
        mode: "time",
        timeformat: "%d/%m/%Y",
        ticks: rawData.length,
        minTickSize: [1, viewSwitchedOff.substring(7)]
    },
    yaxis: {
        tickDecimals: 0,
    }
};

var lineOptions = {
    series: {
        lines: {
            show: true,
            fill: true
        }
    },
    legend: {
        show: false
    },
    xaxis: {
        mode: "time",
        timeformat: "%d/%m/%Y",
        ticks: rawData.length,
        minTickSize: [1, viewSwitchedOff.substring(7)]
    },
    yaxis: {
        tickDecimals: 0,
    }
};

var pieOptions = {
    series: {
        pie: {
            show: true,
            radius: .8,
            InnerRadius: .5
        }
    },
    legend: {
        show: false
    }
};

options = barOptions;


function switchView(timeformat, toSwitchOff) {
    options.xaxis.timeformat = timeformat;
    document.getElementById(viewSwitchedOff).disabled = false;
    document.getElementById(toSwitchOff).disabled = true;
    viewSwitchedOff = toSwitchOff;
    if (toSwitchOff == "select-day") {
        viewComp = viewsEnum.day;
    } else if (toSwitchOff == "select-week") {
        viewComp = viewsEnum.week;
    } else if (toSwitchOff == "select-month") {
        viewComp = viewsEnum.month;
    } else if (toSwitchOff == "select-year") {
        viewComp = viewsEnum.year;
    }
}

function switchChart(chartType, toSwitchOff) {
    document.getElementById(chartSwitchedOff).disabled = false;
    document.getElementById(toSwitchOff).disabled = true;
    chartSwitchedOff = toSwitchOff;
    switch (chartType) {
        case 'bar':
            options = barOptions;
            break;
        case 'pie':
            options = pieOptions;
            break;
        case 'line':
            options = lineOptions;
            break;
    }
}

function switchFilter(filterType, toSwitchOff) {
    document.getElementById(filterSwitchedOff).disabled = false;
    document.getElementById(toSwitchOff).disabled = true;
    filterSwitchedOff = toSwitchOff;
    switch (filterType) {
        case 'none':
            sortMethod = sortByTime;
            rawData = numberSongsData;
            options.xaxis.mode = "time";
            options.xaxis.timeformat = "%d/%m/%Y";
            break;
        case 'artist':
            sortMethod = sortByArtist;
            rawData = artistsBreakdown;
            options.xaxis.mode = null;
            options.xaxis.timeformat = null;
            console.log("Sort by Artist Under Construction");
            break;
        case 'title':
            sortMethod = sortByTitle;
            rawData = titlesBreakdown;
            options.xaxis.mode = null;
            options.xaxis.timeformat = null;
            console.log("Sort by Song Title Under Construction");
            break;
    }
}

function convertDateToNumber(text) {
    // convert to standard format
    var date = new Date(text);
    var offset = date.getTimezoneOffset();
    if (offset > 0) {
        date.setDate(date.getDate() + 1);
    }
    date.setHours(0, 0, 0);
    return date.valueOf();
}


function visualizeDataset() {
    // construct raw data
    sortMethod();


    // fill in dataset and plot
    dataset = [
        {
            data: rawData
        }
    ];

    options.xaxis.min = defaultMin;
    options.xaxis.max = defaultMax;
    var fromDateField = document.getElementById("fromDateField");
    var toDateField = document.getElementById("toDateField");
    if (fromDateField) {
        if (fromDateField.value) {
            options.xaxis.min = convertDateToNumber(fromDateField.value);
        }
    }
    if (toDateField) {
        if (toDateField.value) {
            options.xaxis.max = convertDateToNumber(toDateField.value);
        }
    }

    options.xaxis.minTickSize = [1, viewSwitchedOff.substring(7)];
    options.series.bars.barWidth = viewComp;

    $.plot($("#graph-placeholder"), dataset, options);
}

$(document).ready(function () {
    document.getElementById(viewSwitchedOff).disabled = true;
    document.getElementById(chartSwitchedOff).disabled = true;
    document.getElementById(filterSwitchedOff).disabled = true;
    visualizeDataset();
});