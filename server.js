var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'Article-One' : {
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
},
    'Article-Two' : {
    title: 'Article Two|Jeethu T N Raj' ,
    heading: 'Article Two' ,
    date: 'Oct 4 2016' ,
    content: `
     <p>
        This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test.
     </p>
    
}
},
 'Article-Three' : {
    title: 'Article Three|Jeethu T N Raj' ,
    heading: 'Article Three' ,
    date: 'Oct 4 2016' ,
    content: `
       <p>
        This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test. This is an article.I just used to test.
        `</p>
} 
};

function createTemplate (data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;

var htmlTemplate =`
<html>
    <head>
        <title>
            ${title}
`</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
   
    </head>
    <body>
       <div class="contain">
            <div>
               <a href="/">Home</a>
    </div>
<hr/>
<h3>
   ${heading}
</h3>
<div>
    ${date}
</div>
<div>
   ${content}
</div>
</div>
</body>
</html>
`;
 return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:ArticleNamw',function(req,res) {
 //ArticleName==Article One
 //Articles[ArticleName] == {} content object for Article-One
 var ArticleName = req.params.ArticleName;
  res.send(createTemplate(Articles[ArticleName]));
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
