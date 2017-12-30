
var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://rooterbuster:root1999@cluster0-shard-00-00-gleoi.mongodb.net:27017,cluster0-shard-00-01-gleoi.mongodb.net:27017,cluster0-shard-00-02-gleoi.mongodb.net:27017/TestDB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

MongoClient.connect(uri, function(err, client) {
  if (err) throw err;
  var db = client.db('genome_compass');

//  db.collection('articles').insertMany([
//    {
//      "title": "Western Sahara",
//      "date": "Sat Dec 13 1997 10:18:10 GMT-0800 (Pacific Standard Time)",
//      "content": "Pariatur pariatur commodo in proident laborum amet voluptate reprehenderit. Laborum laboris occaecat cupidatat voluptate dolor aliquip pariatur esse voluptate dolor laboris laborum. Occaecat officia est incididunt aliqua esse occaecat adipisicing esse."
//    },
//    {
//      "title": "El Salvador",
//      "date": "Mon Apr 16 1984 17:19:16 GMT-0700 (Pacific Daylight Time)",
//      "content": "Ex Lorem laborum velit qui laboris commodo qui cillum. Fugiat fugiat occaecat adipisicing et officia Lorem dolor amet irure do do eu reprehenderit. Aute ut veniam pariatur incididunt veniam."
//    },
//    {
//      "title": "Taiwan",
//      "date": "Sun Jan 14 2007 03:25:05 GMT-0800 (Pacific Standard Time)",
//      "content": "Adipisicing veniam ea exercitation labore deserunt. Nostrud nostrud reprehenderit veniam anim voluptate nisi cupidatat. Consequat ea occaecat aliqua ad ex sit dolore dolore aliquip elit exercitation cillum adipisicing et."
//    },
//    {
//      "title": "Niger",
//      "date": "Tue May 18 1982 06:44:01 GMT-0700 (Pacific Daylight Time)",
//      "content": "Pariatur culpa sunt est cupidatat eiusmod minim quis ipsum. Pariatur eiusmod ad nostrud deserunt esse fugiat aute aliquip voluptate exercitation magna. Veniam irure commodo velit tempor occaecat ipsum sit commodo elit."
//    },
//    {
//      "title": "Uzbekistan",
//      "date": "Sat Nov 23 1991 11:22:23 GMT-0800 (Pacific Standard Time)",
//      "content": "Commodo laborum proident eiusmod labore reprehenderit mollit dolor id id sit dolore culpa. Eu labore officia id pariatur exercitation sint in proident voluptate incididunt aute ad. Velit est quis ad enim occaecat sunt exercitation aute incididunt laborum deserunt aliquip mollit."
//    }
//  ])
//    .then(function(result) {
//    console.log(result);
//  })

  db.collection('articles').find({
    title: "Taiwan"
  }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });







  client.close();
});