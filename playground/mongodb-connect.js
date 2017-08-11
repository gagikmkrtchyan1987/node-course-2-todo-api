//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb') //equivalent to the code above
const test=require('assert')
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to the server')
    } else {
        console.log('Connected to Mondo Db server')
    }

    // db.collection('Todos').find({complete:false}).toArray().then((docs)=>{
 
    // 	console.log(JSON.stringify(docs), undefined, 2)
    // }, (err)=>{
    // 	console.log('Unable to find in Mongodb')
    // })
  db.collection('Users').find({location:"Portugal"}).toArray().then((docs)=>{
 
    	console.log(JSON.stringify(docs, undefined, 2))
    })

   //  db.collection('Todos').find().count().then((count)=>{
 		// console.log(`The count of items in  db is ${count}`)
    	
   //  }, (err)=>{
    	
   //  })



    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     complete: false
    // }, (err, res) => {
    //     if (err) {
    //         console.log('Unable to insert todo', err)
    //     } else {
    //         console.log(JSON.stringify(res.ops, undefined, 2))
    //     }
    // })

    // db.collection('Users').insertOne({
    //     name: 'Gagik',
    //     age: 30,
    //     location: 'Gyumri'
    // }, (err, res) => {
    //     if (err) {
    //         console.log('Unable to add data to the database', err)
    //     } else {
    //         console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2))
    //     }
    // })



    db.close()
})