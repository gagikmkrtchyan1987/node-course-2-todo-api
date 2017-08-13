//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb') //equivalent to the code above

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to the server')
    } else {
        console.log('Connected to Mondo Db server')
    }

db.collection('Users').findOneAndUpdate({
   _id: new  ObjectID("598db875b7f2c815c060b6a8")
}, { $inc:{age:2}, 
    $set:{ name:"Hendo"}
   },
   
   {returnOriginal:false}
).then((result)=>{
    console.log(result)
})
  





    db.close()
})