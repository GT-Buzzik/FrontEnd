//Controller for homepage.html

const Url = 'https://buzzik-cooperpellaton.c9users.io:8080/api/';
const testUser = 'spotify:user:genaricname';


function getBackendData(endpoint, parms) {
    var tmp;
    $.ajax({
        url:Url + endpoint,
        type:"GET",
        async: false,
        crossDomain: true,
        data: parms,
        headers: {
            "Access-Control-Allow-Origin": Url
        },
        success: function(result) {
            console.log("Get request success: ", result);
            tmp = JSON.parse(result);
        },
        error:function(error){
            console.log('Error ', error);
            tmp = JSON.parse(error);
        }
    });
    return tmp;
}

function postToBackend(endpoint, parms, body) {
    var tmp;
    $.ajax({
        url: Url + endpoint + '?' + jQuery.param(parms),
        type: "POST",
        crossDomain: true,
        async: false,
        "headers": {
            'Access-Control-Allow-Origin': '*',
        },
        success: function(result) {
            console.log("Post request success: ", result);
            tmp = JSON.parse(result);
        },
        error: function(error) {
            console.error('Post request error: ', error);
            tmp = JSON.parse(error);
        }
    });
    return tmp;
}

function getListeningHistorySingleUser(user_id) {
    return getBackendData('get_listening_history', {id: user_id});
}

function getUserInfo(user_id) {
    return getBackendData('get_user', {id: user_id});
}

function getUserFacultyStatus(user_id) {
    return getBackendData('get_faculty_status', {id: user_id});
}

function getNotificationPeriod(user_id) {
    return getBackendData('get_user_notification_frequency', {id: user_id});
}

function getUserRawData(user_id) {
    return getBackendData('get_raw_data', {id: user_id});
}

// Pass in one of "day", "month", "week", "never"
function updateUserNotificationPeriod(user_id, period) {
    return postToBackend('store_user_notification_frequency', {id: user_id, notification_frequency: period});
}

function deleteUser(user_id) {
    return postToBackend('delete_user', {id: user_id});
}


function test1() {
    console.log(updateUserNotificationPeriod(testUser, "month"));
}

function test2() {
    console.log(getNotificationPeriod(testUser));
}




var spotifyPull = [{"listening_date":1537134884326,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":202489,"explicit":false,"external_ids":{"isrc":"USNLR1300263"},"external_urls":{"spotify":"https://open.spotify.com/track/5AyZoinZOJH7vyH9Qay6bh"},"href":"https://api.spotify.com/v1/tracks/5AyZoinZOJH7vyH9Qay6bh","id":"5AyZoinZOJH7vyH9Qay6bh","name":"If You Love These People","popularity":37,"preview_url":"https://p.scdn.co/mp3-preview/19deb7dd66a0f84ad9f10c6a1a41a4d57df483ea?cid=44c03e1b60b9442ab6552938917f3b19","track_number":6,"type":"track","uri":"spotify:track:5AyZoinZOJH7vyH9Qay6bh"}},{"listening_date":1537134884327,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":202489,"explicit":false,"external_ids":{"isrc":"USNLR1300263"},"external_urls":{"spotify":"https://open.spotify.com/track/5AyZoinZOJH7vyH9Qay6bh"},"href":"https://api.spotify.com/v1/tracks/5AyZoinZOJH7vyH9Qay6bh","id":"5AyZoinZOJH7vyH9Qay6bh","name":"If You Love These People","popularity":37,"preview_url":"https://p.scdn.co/mp3-preview/19deb7dd66a0f84ad9f10c6a1a41a4d57df483ea?cid=44c03e1b60b9442ab6552938917f3b19","track_number":6,"type":"track","uri":"spotify:track:5AyZoinZOJH7vyH9Qay6bh"}},{"listening_date":1537135002674,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":118438,"explicit":false,"external_ids":{"isrc":"USNLR1300264"},"external_urls":{"spotify":"https://open.spotify.com/track/2da9wU6Osd6UoyZodzcgz1"},"href":"https://api.spotify.com/v1/tracks/2da9wU6Osd6UoyZodzcgz1","id":"2da9wU6Osd6UoyZodzcgz1","name":"Krypton's Last","popularity":34,"preview_url":"https://p.scdn.co/mp3-preview/92ce83596fe00dccb450d73924fde275f753235d?cid=44c03e1b60b9442ab6552938917f3b19","track_number":7,"type":"track","uri":"spotify:track:2da9wU6Osd6UoyZodzcgz1"}},{"listening_date":1537135592002,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":589548,"explicit":false,"external_ids":{"isrc":"USNLR1300265"},"external_urls":{"spotify":"https://open.spotify.com/track/1ShzEWg9kGAduVC7f7Sjl2"},"href":"https://api.spotify.com/v1/tracks/1ShzEWg9kGAduVC7f7Sjl2","id":"1ShzEWg9kGAduVC7f7Sjl2","name":"Terraforming","popularity":37,"preview_url":"https://p.scdn.co/mp3-preview/981f1c6ca8408594d61b4efebf3ae6a924965e7d?cid=44c03e1b60b9442ab6552938917f3b19","track_number":8,"type":"track","uri":"spotify:track:1ShzEWg9kGAduVC7f7Sjl2"}},{"listening_date":1537135767572,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":175036,"explicit":false,"external_ids":{"isrc":"USNLR1300266"},"external_urls":{"spotify":"https://open.spotify.com/track/6ffdNL410UPywBSVqJPEkw"},"href":"https://api.spotify.com/v1/tracks/6ffdNL410UPywBSVqJPEkw","id":"6ffdNL410UPywBSVqJPEkw","name":"Tornado","popularity":33,"preview_url":"https://p.scdn.co/mp3-preview/d786b9d61eab97456c516dbf6840a13d84e57231?cid=44c03e1b60b9442ab6552938917f3b19","track_number":9,"type":"track","uri":"spotify:track:6ffdNL410UPywBSVqJPEkw"}},{"listening_date":1537135959740,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":193125,"explicit":false,"external_ids":{"isrc":"USNLR1300267"},"external_urls":{"spotify":"https://open.spotify.com/track/0nlVkMP83sMo50B9hy2dSW"},"href":"https://api.spotify.com/v1/tracks/0nlVkMP83sMo50B9hy2dSW","id":"0nlVkMP83sMo50B9hy2dSW","name":"You Die or I Do","popularity":34,"preview_url":"https://p.scdn.co/mp3-preview/06069f6802c3f3b411be8dda54af658b56a82862?cid=44c03e1b60b9442ab6552938917f3b19","track_number":10,"type":"track","uri":"spotify:track:0nlVkMP83sMo50B9hy2dSW"}},{"listening_date":1537135960302,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":193125,"explicit":false,"external_ids":{"isrc":"USNLR1300267"},"external_urls":{"spotify":"https://open.spotify.com/track/0nlVkMP83sMo50B9hy2dSW"},"href":"https://api.spotify.com/v1/tracks/0nlVkMP83sMo50B9hy2dSW","id":"0nlVkMP83sMo50B9hy2dSW","name":"You Die or I Do","popularity":34,"preview_url":"https://p.scdn.co/mp3-preview/06069f6802c3f3b411be8dda54af658b56a82862?cid=44c03e1b60b9442ab6552938917f3b19","track_number":10,"type":"track","uri":"spotify:track:0nlVkMP83sMo50B9hy2dSW"}},{"listening_date":1537136115609,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":156011,"explicit":false,"external_ids":{"isrc":"USNLR1300268"},"external_urls":{"spotify":"https://open.spotify.com/track/1dvWl0B9CcKKYnj1NqQ5tx"},"href":"https://api.spotify.com/v1/tracks/1dvWl0B9CcKKYnj1NqQ5tx","id":"1dvWl0B9CcKKYnj1NqQ5tx","name":"Launch","popularity":35,"preview_url":"https://p.scdn.co/mp3-preview/a5d65d8358160697696e50ca7bb812fc63242a53?cid=44c03e1b60b9442ab6552938917f3b19","track_number":11,"type":"track","uri":"spotify:track:1dvWl0B9CcKKYnj1NqQ5tx"}},{"listening_date":1537136115625,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":156011,"explicit":false,"external_ids":{"isrc":"USNLR1300268"},"external_urls":{"spotify":"https://open.spotify.com/track/1dvWl0B9CcKKYnj1NqQ5tx"},"href":"https://api.spotify.com/v1/tracks/1dvWl0B9CcKKYnj1NqQ5tx","id":"1dvWl0B9CcKKYnj1NqQ5tx","name":"Launch","popularity":35,"preview_url":"https://p.scdn.co/mp3-preview/a5d65d8358160697696e50ca7bb812fc63242a53?cid=44c03e1b60b9442ab6552938917f3b19","track_number":11,"type":"track","uri":"spotify:track:1dvWl0B9CcKKYnj1NqQ5tx"}},{"listening_date":1537136195118,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":79498,"explicit":false,"external_ids":{"isrc":"USNLR1300269"},"external_urls":{"spotify":"https://open.spotify.com/track/4r6hJg7eq8WO3x6N37fA2J"},"href":"https://api.spotify.com/v1/tracks/4r6hJg7eq8WO3x6N37fA2J","id":"4r6hJg7eq8WO3x6N37fA2J","name":"Ignition","popularity":32,"preview_url":"https://p.scdn.co/mp3-preview/de185fd12de4549e76c71a276d614c93da27cfe6?cid=44c03e1b60b9442ab6552938917f3b19","track_number":12,"type":"track","uri":"spotify:track:4r6hJg7eq8WO3x6N37fA2J"}},{"listening_date":1537136372091,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":177115,"explicit":false,"external_ids":{"isrc":"USNLR1300270"},"external_urls":{"spotify":"https://open.spotify.com/track/45A9ZgZVMgXkjVfUe8VD2B"},"href":"https://api.spotify.com/v1/tracks/45A9ZgZVMgXkjVfUe8VD2B","id":"45A9ZgZVMgXkjVfUe8VD2B","name":"I Will Find Him","popularity":36,"preview_url":"https://p.scdn.co/mp3-preview/6027a2ca1c99abd83bb4f6a9c11bcfef81142b27?cid=44c03e1b60b9442ab6552938917f3b19","track_number":13,"type":"track","uri":"spotify:track:45A9ZgZVMgXkjVfUe8VD2B"}},{"listening_date":1537138705350,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":227346,"explicit":false,"external_ids":{"isrc":"USNLR1300271"},"external_urls":{"spotify":"https://open.spotify.com/track/2pawAJP4W7gxcO6UMPdiEN"},"href":"https://api.spotify.com/v1/tracks/2pawAJP4W7gxcO6UMPdiEN","id":"2pawAJP4W7gxcO6UMPdiEN","name":"This Is Clark Kent","popularity":35,"preview_url":"https://p.scdn.co/mp3-preview/25edb9d1bd15df89973870725a223a23fb1095bd?cid=44c03e1b60b9442ab6552938917f3b19","track_number":14,"type":"track","uri":"spotify:track:2pawAJP4W7gxcO6UMPdiEN"}},{"listening_date":1537140455726,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":227040,"explicit":false,"external_ids":{"isrc":"USNLR1300272"},"external_urls":{"spotify":"https://open.spotify.com/track/36JiSvWmuHrfMMk7JYXsHb"},"href":"https://api.spotify.com/v1/tracks/36JiSvWmuHrfMMk7JYXsHb","id":"36JiSvWmuHrfMMk7JYXsHb","name":"I Have So Many Questions","popularity":30,"preview_url":"https://p.scdn.co/mp3-preview/696a44e46389a68afcbd384a699325c170a012a0?cid=44c03e1b60b9442ab6552938917f3b19","track_number":15,"type":"track","uri":"spotify:track:36JiSvWmuHrfMMk7JYXsHb"}},{"listening_date":1537140713709,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":258148,"explicit":false,"external_ids":{"isrc":"USNLR1300273"},"external_urls":{"spotify":"https://open.spotify.com/track/1y2I51IqxWCd2rITDEYndo"},"href":"https://api.spotify.com/v1/tracks/1y2I51IqxWCd2rITDEYndo","id":"1y2I51IqxWCd2rITDEYndo","name":"Flight","popularity":46,"preview_url":"https://p.scdn.co/mp3-preview/eb68eb7952f61aa43c9df82ff7edcd2e5b8368bf?cid=44c03e1b60b9442ab6552938917f3b19","track_number":16,"type":"track","uri":"spotify:track:1y2I51IqxWCd2rITDEYndo"}},{"listening_date":1537141041086,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":327338,"explicit":false,"external_ids":{"isrc":"USNLR1300274"},"external_urls":{"spotify":"https://open.spotify.com/track/3g2tB9iQhbyiFPboJJDtgp"},"href":"https://api.spotify.com/v1/tracks/3g2tB9iQhbyiFPboJJDtgp","id":"3g2tB9iQhbyiFPboJJDtgp","name":"What Are You Going to Do When You Are Not Saving the World?","popularity":45,"preview_url":"https://p.scdn.co/mp3-preview/02a96132829c432ef38c59ba506dae02ea8591de?cid=44c03e1b60b9442ab6552938917f3b19","track_number":17,"type":"track","uri":"spotify:track:3g2tB9iQhbyiFPboJJDtgp"}},{"listening_date":1538141041089,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":327338,"explicit":false,"external_ids":{"isrc":"USNLR1300274"},"external_urls":{"spotify":"https://open.spotify.com/track/3g2tB9iQhbyiFPboJJDtgp"},"href":"https://api.spotify.com/v1/tracks/3g2tB9iQhbyiFPboJJDtgp","id":"3g2tB9iQhbyiFPboJJDtgp","name":"What Are You Going to Do When You Are Not Saving the World?","popularity":45,"preview_url":"https://p.scdn.co/mp3-preview/02a96132829c432ef38c59ba506dae02ea8591de?cid=44c03e1b60b9442ab6552938917f3b19","track_number":17,"type":"track","uri":"spotify:track:3g2tB9iQhbyiFPboJJDtgp"}},{"listening_date":1537142737753,"track":{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2U9on5I3tFaZCFT9DKMPbV"},"href":"https://api.spotify.com/v1/albums/2U9on5I3tFaZCFT9DKMPbV","id":"2U9on5I3tFaZCFT9DKMPbV","images":[{"height":640,"url":"https://i.scdn.co/image/602215ddecdc6686bcb9999e5091241a916136ba","width":640},{"height":300,"url":"https://i.scdn.co/image/53a9bea8b908f39b0aa793cf1e7e1d38cd79623a","width":300},{"height":64,"url":"https://i.scdn.co/image/cbbcbc9182dfb4163155afec644f0bb27c0a3b0f","width":64}],"name":"Man of Steel (Original Motion Picture Soundtrack)","type":"album","uri":"spotify:album:2U9on5I3tFaZCFT9DKMPbV"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ"},"href":"https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ","id":"0YC192cP3KPCRWx8zr8MfZ","name":"Hans Zimmer","type":"artist","uri":"spotify:artist:0YC192cP3KPCRWx8zr8MfZ"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":1696810,"explicit":false,"external_ids":{"isrc":"USNLR1300275"},"external_urls":{"spotify":"https://open.spotify.com/track/7kTeXJhZZdK9Hwq8JJINq1"},"href":"https://api.spotify.com/v1/tracks/7kTeXJhZZdK9Hwq8JJINq1","id":"7kTeXJhZZdK9Hwq8JJINq1","name":"Man of Steel - Hans' Original Sketchbook","popularity":38,"preview_url":"https://p.scdn.co/mp3-preview/2cd2e15e0f8c8b327667a398bd30f904709630df?cid=44c03e1b60b9442ab6552938917f3b19","track_number":18,"type":"track","uri":"spotify:track:7kTeXJhZZdK9Hwq8JJINq1"}}];


spotifyPull = [
    {"track_duration":147.45,"track_explicit":false,"listening_date":1540250973629,"track_name":"Our Song"},{"track_duration":147.45,"track_explicit":false,"listening_date":1540250973631,"track_name":"Our Song"},{"track_duration":182.373,"track_explicit":false,"listening_date":1540251156117,"track_name":"Deep Breaths"},{"track_duration":242.333,"track_explicit":false,"listening_date":1540251398618,"track_name":"FAKE LOVE"},{"track_duration":242.333,"track_explicit":false,"listening_date":1540251398620,"track_name":"FAKE LOVE"},{"track_duration":207.959,"track_explicit":false,"listening_date":1540251606810,"track_name":"Cut To The Feeling"},{"track_duration":218.613,"track_explicit":false,"listening_date":1540428292915,"track_name":"Save The Last Dance For Me"},{"track_duration":216.637,"track_explicit":false,"listening_date":1540428510038,"track_name":"Kids Again"},{"track_duration":147.373,"track_explicit":false,"listening_date":1540428657893,"track_name":"Perfidia (For \"Rumba\")"},{"track_duration":199.253,"track_explicit":false,"listening_date":1540428981746,"track_name":"Why Worry"},{"track_duration":179.995,"track_explicit":false,"listening_date":1540429162251,"track_name":"Rändajad"},{"track_duration":208.506,"track_explicit":false,"listening_date":1540429371221,"track_name":"It’s a Ruse"},{"track_duration":187.848,"track_explicit":false,"listening_date":1540429559577,"track_name":"I'm Sticking With You Baby"},{"track_duration":267.64,"track_explicit":false,"listening_date":1540429828779,"track_name":"Musetta's Waltz"},{"track_duration":200.666,"track_explicit":false,"listening_date":1540430029864,"track_name":"Pulmon"},{"track_duration":255.588,"track_explicit":false,"listening_date":1540430285982,"track_name":"Make Me Feel"},{"track_duration":230.666,"track_explicit":false,"listening_date":1540430517014,"track_name":"Anticipation"},{"track_duration":132.64,"track_explicit":false,"listening_date":1540430650165,"track_name":"If I Knew"},{"track_duration":191.25,"track_explicit":false,"listening_date":1540431564956,"track_name":"The Vampire Masquerade"},{"track_duration":197.253,"track_explicit":false,"listening_date":1541617723363,"track_name":"Where Do We Go"},{"track_duration":193.293,"track_explicit":false,"listening_date":1541617926017,"track_name":"Personal"},{"track_duration":195,"track_explicit":false,"listening_date":1541618121234,"track_name":"Who You Are (feat. MIO)"},{"track_duration":195,"track_explicit":false,"listening_date":1541618121316,"track_name":"Who You Are (feat. MIO)"},{"track_duration":200.386,"track_explicit":false,"listening_date":1541618321959,"track_name":"Wild Heart"},{"track_duration":200.386,"track_explicit":false,"listening_date":1541618321961,"track_name":"Wild Heart"},{"track_duration":206.373,"track_explicit":false,"listening_date":1541618528502,"track_name":"Memorized"},{"track_duration":206.373,"track_explicit":false,"listening_date":1541618528532,"track_name":"Memorized"},{"track_duration":160.95,"track_explicit":false,"listening_date":1541618688802,"track_name":"Carousel"},{"track_duration":208.493,"track_explicit":false,"listening_date":1541618897948,"track_name":"Speakerphone"},{"track_duration":211.236,"track_explicit":false,"listening_date":1541619109472,"track_name":"Starry Night"},{"track_duration":221.093,"track_explicit":false,"listening_date":1541619330652,"track_name":"Dancing Queen"},{"track_duration":221.093,"track_explicit":false,"listening_date":1541619330666,"track_name":"Dancing Queen"},{"track_duration":254.246,"track_explicit":false,"listening_date":1541704242427,"track_name":"Dragon (feat. Skybourne)"}
];

// Use this call to get data from api.
// spotifyPull = getListeningHistorySingleUser(testUser).Items;

var viewsEnum = Object.freeze({"day": 86400000, "week": 604800000, "month": 2419200000,"year":31536000000}), //Enum to help sort date based on current view
    viewComp = viewsEnum.day,
    modeEnum = Object.freeze({"line": "line", "pie": "pie", "bar": "bar"}),
    mode = modeEnum.bar,
    numberSongsData = [],
    artistsBreakdown = [], //A breakdown consists of the four top results and the combined weight of all other categories.
    titlesBreakdown = [],
    defaultMin = null,
    defaultMax = null; //change these to start at the current academic year

var viewSwitchedOff = "select-day";
var chartSwitchedOff = "select-bar";
var filterSwitchedOff = "select-none";


var options = null;
var filters = {
    range: {
        min: null,
        max: null
    }
};

function filterData(data) {
	if (filters.range.min) {
		if (data.listening_date < filters.range.min) {
			return false;
		}
	}
	if (filters.range.max) {
		if (data.listening_date > filters.range.max) {
			return false;
		}
	}

	return true;
}



function compareDay(date1, date2) {
    return (date1.getDate() == date2.getDate()) && (Math.abs(date1.valueOf() - date2.valueOf()) < viewsEnum.day);
}
function compareWeek(date1, date2) {
    // TODO
    return compareDay(date1, date2);
}
function compareMonth(date1, date2) {
    return (date1.getMonth() == date2.getMonth()) && (date1.getFullYear() == date2.getFullYear());
}
function compareYear(date1, date2) {
    return date1.getFullYear() == date2.getFullYear();
}

var dateCompareFunc = compareDay;


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

var dateStandardizeFunc = standardizeDay;


function sortByTime() {
	numberSongsData = [];
    numberSongsDataDates = [];

    for (i=0; i < spotifyPull.length; i++) {
        if (filterData(spotifyPull[i])) {

			var exists = false;
			var dateTime = spotifyPull[i].listening_date;

			var date = new Date(dateTime);
			var exists = false;
			for (var j = 0; j < numberSongsData.length; j++) {
				if (dateCompareFunc(numberSongsDataDates[j], date)) {
					numberSongsData[j][1]++;
					exists = true;
					break;
				}
			}
			if (!exists) {
				var standardDate = dateStandardizeFunc(date);

				numberSongsData.push([standardDate.valueOf(), 1]);
				numberSongsDataDates.push(standardDate);
			}

		}
    }

    return numberSongsData;
}


function sortByArtist() {
    var artistsData = [];
    var artistsInData = [];

    var comparatorFunc = function(artist1, artist2) {
        if (artist1 == artist2)
            {return true;}
        else
            {return false;}
    }


    for (i=0; i < spotifyPull.length; i++) {
        var exists = false;
        var artist = spotifyPull[i].artist;
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
        return b[1] - a[1];
    }
    artistsData.sort(compareArtists); //should sort the array by amount of listens to an artist

    var otherCount = 0;
    for (i=4;i<artistsData.length;i++) {
        otherCount += artistsData[i][1];
    }
    artistsBreakdown = [artistsData[0], artistsData[1], artistsData[2], artistsData[3], ["Other", otherCount]];
    return artistsBreakdown;
}

function sortByTitle() {
    var titleData = [];
    var titleInData = [];

    var comparatorFunc = function(title1, title2) {
        if (title1 == title2)
            {return true;}
        else
            {return false;}
    }


    for (i=0; i < spotifyPull.length; i++) {
		if (filterData(spotifyPull[i])) {

			var exists = false;
			var title = spotifyPull[i].track_name;
			for (var j = 0; j < titleData.length; j++) {
				if (comparatorFunc(titleInData[j], title)) {
					titleData[j][1]++;
					exists = true;
					break;
				}
			}
			if (!exists) {
				titleData.push([title, 1]);
				titleInData.push(title);
			}

		}
    }

    var compareTitles = function(a, b) {
        return b[1] - a[1];
    }
    titleData.sort(compareTitles); //should sort the array by amount of listens to a song
    titlesBreakdown = titleData;
    // var otherCount = 0;
    // for (i=4;i<titleData.length;i++) {
    //     otherCount += titleData[i][1];
    // }
    // titlesBreakdown = [titleData[0], titleData[1], titleData[2], titleData[3], ["Other", otherCount]];
    return titlesBreakdown;
} //Implement

var sortMethod = function() {return null;};

sortMethod = sortByTime; //default value


/* Generates the ticks for the x-axis, because the auto-generated ones do it wrong */
function generateTicks(axis) {

	// estimate number of possible ticks between start and end
	var noTicks = Math.floor((axis.max - axis.min) / viewComp) - 1;
	var mag = Math.ceil(noTicks / 10);

	var ticks = [],
		v = dateStandardizeFunc(new Date(axis.max));

	do {
		switch (viewComp) {
			case viewsEnum.day:
				v.setDate(v.getDate() - mag);
				break;
			case viewsEnum.month:
				v.setMonth(v.getMonth() - mag);
				break;
			case viewsEnum.year:
				v.setFullYear(v.getFullYear() - mag);
				break;
		}
		ticks.push(v.valueOf());
	} while (v.valueOf() > axis.min);

	ticks.pop();

	if (ticks.length == 0) {
		ticks.push(axis.min);
		ticks.push(axis.max);
	}

	return ticks;
}


var rawData = sortMethod();

var barOptions = {
    series: {
        bars: {
            show: true,
            fill: true,
            barWidth: viewComp,
            align: "left"
        },
        lines: {
            show: false,
            fill: true
        },
        pie: {
            show: false,
            radius: .8,
            innerRadius: .5
        }
    },
    legend: {
        show: false
    },
    xaxis: {
        mode: "time",
        timeformat: "%m/%d/%Y",
        ticks: generateTicks,
        minTickSize: [1, viewSwitchedOff.substring(7)],
        tickColor: "#ababab"
    },
    yaxis: {
        min: 0,
        tickDecimals: 0,
        tickColor: "#ababab"
    }
};

var lineOptions = {
    series: {
        lines: {
            show: true,
            fill: true
        },
        bars: {
            show: false,
            fill: true,
            barWidth: viewComp,
            align: "left"
        },
        pie: {
            show: false,
            radius: .8,
            innerRadius: .5
        }
    },
    legend: {
        show: false
    },
    xaxis: {
        mode: "time",
        timeformat: "%m/%d/%Y",
        ticks: rawData.length,
        minTickSize: [1, viewSwitchedOff.substring(7)],
        tickColor: "#ababab"
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
            innerRadius: .5
        },
        lines: {
            show: false,
            fill: true
        },
        bars: {
            show: false,
            fill: true,
            barWidth: viewComp,
            align: "left"
        }
    },
    legend: {
        show: false
    }
};

options = barOptions;


function switchView(timeformat, toSwitchOff) {
    if (mode != 'pie') {
        options.xaxis.timeformat = timeformat;
    }
    document.getElementById(viewSwitchedOff).disabled = false;
    document.getElementById(toSwitchOff).disabled = true;
    viewSwitchedOff = toSwitchOff;
    if (toSwitchOff == "select-day") {
        viewComp = viewsEnum.day;
		dateCompareFunc = compareDay;
		dateStandardizeFunc = standardizeDay;
    } else if (toSwitchOff == "select-week") {
        viewComp = viewsEnum.week;
    } else if (toSwitchOff == "select-month") {
        viewComp = viewsEnum.month;
		dateCompareFunc = compareMonth;
		dateStandardizeFunc = standardizeMonth;
    } else if (toSwitchOff == "select-year") {
        viewComp = viewsEnum.year;
		dateCompareFunc = compareYear;
		dateStandardizeFunc = standardizeYear;
    }
}

function switchChart(chartType, toSwitchOff) {
    document.getElementById(chartSwitchedOff).disabled = false;
    document.getElementById(toSwitchOff).disabled = true;
    chartSwitchedOff = toSwitchOff;
    switch (chartType) {
        case 'bar':
            options = barOptions;
            mode = modeEnum.bar;
            break;
        case 'pie':
            options = pieOptions;
            mode = modeEnum.pie;
            break;
        case 'line':
            options = lineOptions;
            mode = modeEnum.line;
            break;
    }
}


function convertTextToDate(text, dateOffset) {
    var date = new Date(text);
    var offset = date.getTimezoneOffset();
    if (offset > 0) {
        date.setDate(date.getDate() + dateOffset + 1);
    }
    date.setHours(0, 0, 0, 0);
    return date;
}

function incrementDateWithView(date, increment) {
    var newDate = new Date(date);
    switch (viewComp) {
        case viewsEnum.day:
            newDate.setDate(newDate.getDate() + increment);
            break;
        case viewsEnum.month:
            newDate.setMonth(newDate.getMonth() + increment);
            newDate.setDate(1);
            break;
        case viewsEnum.year:
            newDate.setFullYear(newDate.getFullYear() + increment);
            newDate.setMonth(0);
            newDate.setDate(1);
            break;
    }
    return newDate;
}

function findRange() {
    tempRange = {
        min: null,
        max: null
    };

    var fromDateField = document.getElementById("fromDateField");
    var toDateField = document.getElementById("toDateField");
    if (fromDateField) {
        if (fromDateField.value) {
            var fromDate = convertTextToDate(fromDateField.value, 0);
            tempRange.min = fromDate.valueOf();
            tempRange.max = incrementDateWithView(fromDate, 1).valueOf();

            if (defaultMax != null) {
                if (defaultMax > tempRange.max) {
                    tempRange.max = defaultMax;
                }
            }
        }
    }
    if (toDateField) {
        if (toDateField.value) {
            var toDate = convertTextToDate(toDateField.value, 1);
            tempRange.max = toDate.valueOf();
            if (tempRange.min == null) {
                tempRange.min = incrementDateWithView(toDate, -1).valueOf();

                if (defaultMin != null) {
                    if (defaultMin < tempRange.min) {
                        tempRange.min = defaultMin;
                    }
                }
            }
        }
    }

    var errorMessage = document.getElementById("graph-control-range-error");
    errorMessage.innerHTML = "";
    if (tempRange.min != null && tempRange.max != null) {
        // check to make sure the range is large enough
        var diff = tempRange.max - tempRange.min;
        if (diff <= 0) {
            errorMessage.innerHTML = "&#9888 &#9888 &#9888 <br /> <i>From</i> date must come before <i>to</i> date.";
            tempRange.min = null;
            tempRange.max = null;
        } /*else if (diff <= viewComp) {
            errorMessage.innerHTML = "&#9888 &#9888 &#9888 <br /> Date range cannot be smaller than histogram bar width.";
            tempRange.min = null;
            tempRange.max = null;
        }*/
    }

    if (tempRange.min == null && tempRange.max == null) {
        // insert default values
        if (defaultMin != null && defaultMax != null) {
            if (defaultMax - defaultMin > viewComp) {
                tempRange.min = defaultMin;
                tempRange.max = defaultMax;
            } else {
                tempRange.min = incrementDateWithView(defaultMax, -1).valueOf();
                tempRange.max = incrementDateWithView(tempRange.min, 2).valueOf();
            }
        } else {
            // this case should never happen, because defaultMin and defaultMax are set when the document loads
            // at least, that's what i hope
        }
    } else if (tempRange.min == null || tempRange.max == null) {
        // case where only one is non-null
        // this shouldn't happen?? but just in case...
    }

    filters.range = tempRange;
}


function switchFilter(filterType, toSwitchOff) {
    document.getElementById(filterSwitchedOff).disabled = false;
    document.getElementById(toSwitchOff).disabled = true;
    filterSwitchedOff = toSwitchOff;
    switch (filterType) {
        case 'none':
            sortMethod = sortByTime;
            if (mode != 'pie') {
                options.xaxis.mode = "time";
                switch (viewComp) {
                    case viewsEnum.day:
                        options.xaxis.timeformat = "%m/%d/%Y";
                        break;
                    case viewsEnum.month:
                        options.xaxis.timeformat = "%m/%Y";
                        break;
                    case viewsEnum.year:
                        options.xaxis.timeformat = "%Y";
                        break;
                }
			}
            break;
        case 'artist':
            sortMethod = sortByArtist;
            if (mode != 'pie') {
                options.xaxis.mode = null;
                options.xaxis.timeformat = null;
            }
            break;
        case 'title':
            sortMethod = sortByTitle;
            if (mode != 'pie') {
                options.xaxis.mode = null;
                options.xaxis.timeformat = null;
            }
            break;
    }
}


function convertDateToLabel(dateAsNumber) {
    var labelOptions = {
        weekday: 'short',
        year: 'numeric'
    };
    if (viewComp <= viewsEnum.month) {
        labelOptions.month = 'long';
    }
    if (viewComp <= viewsEnum.day) {
        labelOptions.day = 'numeric';
    }

    var date = new Date(1970, 0, 1, 0, 0, 0, dateAsNumber);
    return date.toLocaleDateString('en-US', labelOptions);
}


var visualizationStatus = {
    value: "50",
    message: "adjkfhskfg"
};

function showVisualizationStatus() {
    document.getElementById("graph-status-progress").value = visualizationStatus.value;
    document.getElementById("graph-status-message").innerText = visualizationStatus.message;

    if (document.getElementById("graph-status").style.display != 'none') {
        window.setTimeout(showVisualizationStatus, 100);
    }
}

function visualizeDataset() {
    // collect date range
    visualizationStatus = {
        value: "0",
        message: "Filtering..."
    };
    findRange();

    // construct raw data
    visualizationStatus = {
        value: "20",
        message: "Sorting..."
    };
    rawData = sortMethod();

    // fill in dataset and plot
    visualizationStatus = {
        value: "40",
        message: "Setting visualization options..."
    };
    if (mode != "pie") {
        options.xaxis.min = incrementDateWithView(filters.range.min, 0).valueOf();
        options.xaxis.max = incrementDateWithView(filters.range.max, 1).valueOf();

        if (options.xaxis.max - options.xaxis.min <= viewComp) {
            options.xaxis.min = incrementDateWithView(options.xaxis.min, -1).valueOf();
        }

        options.xaxis.minTickSize = [1, viewSwitchedOff.substring(7)];
        dataset = [
			{
				data: rawData
			}
		];
    } else {
        dataset = [];
        for (i=0;i<rawData.length;i++) {
            if (rawData[i] != null) {
                var dataLabel = rawData[i][0];
                if (sortMethod == sortByTime) {
                    dataLabel = convertDateToLabel(dataLabel);
                }

                dataset.push(
                    {
                        label: dataLabel,
                        data: rawData[i][1]
                    }
                );
            }
        }
    }

    visualizationStatus = {
        value: "60",
        message: "Setting histogram options..."
    };
	if (mode == "bar") {
		if (options.xaxis.mode != 'time') {
			var ticks = [];
			for (i=0; i<rawData.length;i++) {
				if (rawData[i] != null) {
					ticks.push([i, rawData[i][0]]);
				}
			}
			console.log(ticks);
			options.xaxis.ticks = ticks;
		} else {
			switch (viewComp) {
				case viewsEnum.day:
					options.xaxis.timeformat = "%m/%d/%Y";
					break;
				case viewsEnum.month:
					options.xaxis.timeformat = "%m/%Y";
					break;
				case viewsEnum.year:
					options.xaxis.timeformat = "%Y";
					break;
			}
			options.series.bars.barWidth = viewComp;
		}
    }

    //document.getElementById("graph-status-message").innerHTML = JSON.stringify(options);

    visualizationStatus = {
        value: "80",
        message: "Visualizing..."
    };
    $.plot($("#graph-placeholder"), dataset, options);

    var graphStatus = document.getElementById("graph-status");
    if (graphStatus) {
        graphStatus.style.display = 'none';
    }
}


function openImportCalendar() {
    var fileInput = document.getElementById('csv-ics-calendar-upload');

    fileInput.onchange = function(e) {
        for (var i = 0; i < e.target.files.length; i++) {
            var file = e.target.files[i];
            var reader = new FileReader();

            reader.onloadend = (function(f) {
                var extension = f.name.slice(f.name.length - 4, f.name.length);
                if (extension == '.csv'){
                    return function(e) {
                        var data = $.csv.toObjects(e.target.result);
                        //document.write(JSON.stringify(data));
                         /*data is an array of objects, where each element in the array represents
                            a line in the csv file, and each parameter in the object represents
                            an element in the line

                            EXAMPLE

                            file.csv

                                Header1,Header2,Header3
                                1,2,3
                                4,5,6

                            data = [
                                {
                                    "Header1": "1",
                                    "Header2": "2",
                                    "Header3": "3"
                                },
                                {
                                    "Header1": "4",
                                    "Header2": "5",
                                    "Header3": "6"
                                }
                            ];*/

                    };
                } else if (extension == '.ics'){
                    return function(e) {
                        var data = ICAL.parse(e.target.result);
                        // data = data.toJSON();
                        //document.write(JSON.stringify(data));

                        var values = [];
                        data[2].forEach((e) => {
                            values = values.concat([{
                                summary: e[1][10][3],
                                time: new Date(e[1][0][3])
                            }]);
                        })
                        console.log("calendar: ", values);
                    };
                }
            })(file);

            reader.readAsText(file);
        }
    }

    fileInput.click();

}

function openHelp() {
  var helpModal = document.getElementById("helpModal");
  var closeBtn = document.getElementById("closeBtn");
  helpModal.style.display = "block";
  closeBtn.onclick = function() {
    helpModal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == helpModal) {
        helpModal.style.display = "none";
    }
  }
}

//Accordion Help Menu
var acc = document.getElementsByClassName("accordion");

function expandPanel(id) {
        var element = document.getElementById(id);
        element.classList.toggle("active");
        console.log("working");
        var panel = element.nextElementSibling;
        if (panel.style.display ==="block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
}

//Raw data downloader
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function exportBtn() {
	download(JSON.stringify(spotifyPull), 'rawData.json', 'application/json');
}


//Night mode
function nightMode() {
  var mode = document.documentElement;
  mode.classList.add("theme-transition");
  if (mode.getAttribute("data-theme") != "night") {
    mode.setAttribute("data-theme","night");
  } else {
    mode.removeAttribute("data-theme");
  }
  window.setTimeout(function() {
  document.documentElement.classList.remove('theme-transition')
}, 1000);
}



$(document).ready(function () {

    // set defaultMin for (approximately) the start of the school year, defaultMax to current date
    var defaultMaxDate = new Date(1970, 0, 1, 0, 0, 0, Date.now());
    defaultMaxDate.setDate(defaultMaxDate.getDate() + 1);
    defaultMaxDate.setHours(0, 0, 0, 0);
    defaultMax = defaultMaxDate.valueOf();
    var defaultMinDate = new Date(defaultMaxDate.getFullYear(), 7, 25, 0, 0, 0, 0);
    defaultMinDate.setDate(defaultMinDate.getDate() - ((defaultMinDate.getDay() + 6) % 7));
    defaultMin = defaultMinDate.valueOf();

    filters.range = {
        min: defaultMin,
        max: defaultMax
    };


    //Event listeners:
    document.getElementById("exportBtn").addEventListener("click", exportBtn);
    document.getElementById("night-mode").addEventListener("click", nightMode);
    document.getElementById("helpBtn").addEventListener("click", openHelp);
    document.getElementById("select-day").addEventListener("click", () => {switchView("%m/%d/%Y", "select-day"); findRange();});
    // document.getElementById("select-week").addEventListener("click", () => {switchView("%m/%d/%Y", "select-week");});
    document.getElementById("select-month").addEventListener("click", () => {switchView("%m/%d/%Y", "select-month"); findRange();});
    document.getElementById("select-year").addEventListener("click", () => {switchView("%m/%d/%Y", "select-year"); findRange();});
    document.getElementById("select-bar").addEventListener("click", () => {switchChart("bar", "select-bar");});
    document.getElementById("select-pie").addEventListener("click", () => {switchChart("pie", "select-pie");});
    document.getElementById("select-line").addEventListener("click", () => {switchChart("line", "select-line");});
    document.getElementById("select-none").addEventListener("click", () => {switchFilter("none", "select-none");});
    document.getElementById("select-artist").addEventListener("click", () => {switchFilter("artist", "select-artist");});
    document.getElementById("select-title").addEventListener("click", () => {switchFilter("title", "select-title");});
    document.getElementById("fromDateField").onchange = findRange;
    document.getElementById("toDateField").onchange = findRange;
    document.getElementById("graph-control-refine-btn").addEventListener("click", () => {
        document.getElementById("graph-status").style.display = 'grid';
        //window.setTimeout(showVisualizationStatus, 100);
        window.setTimeout(visualizeDataset, 100);
    });
    document.getElementById("open-calendar").addEventListener("click", openImportCalendar);
    document.getElementById("opt1").addEventListener("click", () => {expandPanel("opt1");});
    document.getElementById("opt2").addEventListener("click", () => {expandPanel("opt2");});
    document.getElementById("opt3").addEventListener("click", () => {expandPanel("opt3");});
    document.getElementById("opt4").addEventListener("click", () => {expandPanel("opt4");});
    document.getElementById("opt5").addEventListener("click", () => {expandPanel("opt5");});
    window.onresize = () => {
        document.getElementById("graph-status").style.display = 'grid';
        //window.setTimeout(showVisualizationStatus, 100);
        visualizeDataset();
        // window.setTimeout(visualizeDataset, 100);
    };

    document.getElementById(viewSwitchedOff).disabled = true;
    document.getElementById(chartSwitchedOff).disabled = true;
    document.getElementById(filterSwitchedOff).disabled = true;
    visualizeDataset();
});
