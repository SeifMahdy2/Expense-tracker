const { MongoClient } = require('mongodb')


let dbConnection
let URi = process.env.MONGO_URL

//Database connection
module.exports = { 
      connecttoDb : (cb) =>{
          MongoClient.connect(URi,{serverSelectionTimeoutMS: 5000,})
          .then((client) => {
              dbConnection= client.db()
              console.log('Database Connected')
              return cb()
          })
          .catch(err => {
              console.log('Database Connection Failure')
              return cb(err)
          })
      },
      getDb:() => dbConnection
};