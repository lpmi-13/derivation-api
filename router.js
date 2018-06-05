const Word = require('./models/word');

module.exports = function(app) {
  app.get('/derivations', function(req, res) {
    const term = req.query.word;
    const results = Word.findOne({ word: term}, function(err, obj) {
      if (err) {
        return next(err);
      }
    console.log(obj);
    res.setHeader('Content-Type', 'application/json');
    res.send(obj.word_list);
    });
  });
}
