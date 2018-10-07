const Word = require('./models/word');
import word_keys from './keys';

module.exports = function(app) {
  app.get('/', function(req, res) {
    Word.findOne({ word: req.query.word }, function(err, obj) {
      res.setHeader('Content-Type', 'application/json');
      if (obj) {
        res.send(obj.word_list);
      } else {
        res.send({ message: 'nothing found' });
      }
    });
  });

  app.get('/list', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(word_keys);
  });
};
