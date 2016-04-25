var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
	var books = [
			{
				title: 'War and Peace',
				genre: 'Historical Fiction',
				author: 'Lev Nikolayevich Tolstoy',
				read: false
			},
			{
				title: 'Three body',
				genre: 'Sifi',
				author: 'Liu Cixin',
				read: true
			},
			{
				title: 'Harry Potter',
				genre: 'Fiction',
				author: 'JK Rowling',
				read: true
			}];
var router = function (nav) {
	adminRouter.route('/addBooks')
		.get(function(req,res) {
			var url = 'mongodb://localhost:27017/libraryApp';
			mongodb.connect(url, function(err, db){
				var collection = db.collection('books');
				collection.insertMany(books, 
					function(err,results){
						res.send(results);
						db.close();
					});
			});
		});
	return adminRouter;
};


module.exports = router;