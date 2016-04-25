var express = require('express');

var bookRouter = express.Router();


var router = function (nav){
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


	bookRouter.route('/')
		.get(function(req,res){
			res.render('bookListView',
					{
						title: 'Hello from render', 
						nav: nav,
						books: books
					});
		});

	bookRouter.route('/:id')
		.get(function(req,res){
			var id = req.params.id
			res.render('bookView',
					{
						title: 'Hello from render', 
						nav: nav,
						book: books[id]
					});
		});

	return bookRouter;
}


module.exports = router;