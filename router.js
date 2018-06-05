const Word = require('./models/word');

module.exports = function(app) {
  app.get('/derivations', function(req, res) {
    const term = req.query.word;
    Word.findOne({ word: term}, function(err, obj) {
      if (obj === null) {
        res.send({"message": 'nothing found'}); 
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.send(obj.word_list);
      }
    });
  });
}
