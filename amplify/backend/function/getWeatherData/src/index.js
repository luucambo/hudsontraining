var http =  require('http');
const querystring = require('querystring');

exports.handler = (event, context, callback) => {
    var city = querystring.escape(event.arguments.City);
    console.log(event)
    http.get({
      hostname: 'api.openweathermap.org',
      port: 80,
      //path: '/data/2.5/forecast?id=524901&appId=d7442491d0099b4496a5dfd09858792d',
      path:'/data/2.5/forecast?id='+ city +'&appid=d7442491d0099b4496a5dfd09858792d&cnt=3&units=imperial',
      agent: false  // create a new agent just for this one request
    }, (res) => {
       var body = '';
        res.on('data', function(d) {
            body += d;
        });
        
        res.on('end', function() {

            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
            console.log(body);
            
          
            
        });
    }); 
};