const Word = require('./models/word');

module.exports = function(app) {
  app.get('/', function(req, res) {
    Word.findOne({ word: req.query.word}, function(err, obj) {
      res.setHeader('Content-Type', 'application/json');
      if (obj) { 
        res.send(obj.word_list);
      } else {
        res.send({'message': 'nothing found'}); 
      }
    });
  });
}
