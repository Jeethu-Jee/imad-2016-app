var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var Article One = {
    title: 'Article One|Jeethu T N Raj' ,
    heading: 'Article One' ,
    date: 'Oct 4 2016' ,
    content: `
     <p>
        This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test.
     </p>
     <p1>
         This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test.
      </p1>`
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Article-One',function(req,res){
      res.sendFile(path.join(__dirname, 'ui', 'Article One.html'));
});

app.get('/Article-Two',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'Article Two.html'));  
});

app.get('/Article-Three',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'Article Three.html')); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
