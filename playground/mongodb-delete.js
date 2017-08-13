//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb') //equivalent to the code above

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to the server')
    } else {
        console.log('Connected to Mondo Db server')
    }


    db.collection('Users').findOneAndDelete({_id:new ObjectID("5990951cb7f2c815fca2da72")}).then((result)=>{
        console.log(result)
    }, ()=>{

    })






    //db.close()
})