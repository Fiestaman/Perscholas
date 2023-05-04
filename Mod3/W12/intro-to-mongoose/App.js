// add env variables to process.env
require("dotenv").config();

// Dependencies
const mongoose = require("mongoose");
const Tweet = require("./tweet.js");
const manyTweets = require("./data");

// Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// setTimeout(() => {
//   db.close();
// }, 5000);

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected"));
db.on("close", () => console.log("mongo disconnected"));

/* // My First Tweet/Creating a document
const myFirstTweet = {
  title: "Deep Thoughts",
  body: "Friends, I am the realest coder alive",
  author: "Annson",
};

// Operation Methods

// Create
Tweet.create(myFirstTweet)
  // if database transaction succeeds
  .then((tweet) => {
    console.log(tweet);
  })
  // if database transaction fails
  .catch((error) => {
    console.log(error);
  })
  // close db connection either way
  .finally(() => {
    db.close();
  }); */

/* // Insert many documents at once
Tweet.insertMany(manyTweets)
  // if database transaction succeeds
  .then((tweets) => {
    console.log(tweets);
  })
  // if database transaction fails
  .catch((error) => {
    console.log(error);
  })
  // close db connection either way
  .finally(() => {
    db.close();
  }); */

// Finding

// find - generic
// findById - finds by ID - great for Show routes!
// findOne - limits the search to the first document found
// where - allows you to build queries, we won't cover this today

// Find all
// Tweet.find({})
//   // if database transaction succeeds
//   .then((tweets) => {
//     console.log(tweets);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

// Find all but return only title and body fields
// Tweet.find({}, "title body")
//   // if database transaction succeeds
//   .then((tweets) => {
//     console.log(tweets);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

// Find specific tweet
// Tweet.find({ title: "Water" })
//   // if database transaction succeeds
//   .then((tweet) => {
//     console.log(tweet);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

// Find tweets with 20 or more likes
// Tweet.find({ author: "Arthur", likes: { $gte: 20 } })
//   // if database transaction succeeds
//   .then((tweets) => {
//     console.log(tweets);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

// Removing

// remove() danger! Will remove all instances
// findOneAndRemove() - this seems like a great choice
// .findByIdAndRemove() - finds by ID - great for delete routes in an express app!

// Tweet.findOneAndRemove({ title: "Deep Thoughts" })
//   // if database transaction succeeds
//   .then((tweet) => {
//     console.log(tweet);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

// Updating

// update() - the most generic one
// findOneAndUpdate() - Let's us find one and update it
// findByIdAndUpdate() - Let's us find by ID and update - great for update/put routes in an express app!

// Tweet.findOneAndUpdate(
//   { title: "Vespa" },
//   {
//     sponsored: true,
//     body: "this is the body that just got updated",
//   },
//   { new: true }
// )
//   // if database transaction succeeds
//   .then((tweet) => {
//     console.log(tweet);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

// CREATE
// /*
//   .create(data, callback function(error, new doc){})
//   .insertMany([data], callback function(error, new docs){})
// */
// READ
// /*
//   .find({filter}, callback function(err, docs){})
//   .findOne({filter}, callback function(err, doc){})
//   .findById("id", callback function(err, doc){})
// */
// UPDATE
// // filter _> id, data, { new:true }  , callback
// /*
//   .findByIdAndUpdate("id", data, {new:true}, callback function)
//   .updateOne({filter}, data, {new:true, multi: true}, callback function)
// */

// // findByIdAndUpdate
// // restful route update
// DELETE
// /*
//   // this is the method you should use when delete
//     .findByIdAndDelete("id", callback function(error, deleted doc){})
//   // another one you COULD use
//     .deleteOne({filter}, callback function(error, deleted doc){})
//   // only use this IF you know exactly what you are doing
//     .deleteMany({filter}, callback function(error, deleted docs){})
// */

// // restful route delete

/* 
URL                 HTTP Verb   Action  Used For	                            Mongoose Function
/things/	        GET	        index	Displaying a list of all things	        .find
/things/new	        GET	        new	    Display HTML form for creating a        N/A
                                        new thing	
/things	            POST	    create	Create a new thing	                    .create
/things/:id     	GET	        show	Display a specific thing	            .findById
/things/:id/edit	GET	        edit	Return an HTML form for editing     	.findById
                                        a thing
/things/:id	        PATCH/PUT	update	Update a specific thing	                .findByIdAndUpdate
/things/:id	        DELETE	    destroy	Delete a specific thing	                .findByIdAndDelete 
*/
