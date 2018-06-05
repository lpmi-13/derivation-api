import keySearch from './lib/keySearch';

module.exports = function(app) {
  app.get('/derivations', function(req, res) {
    const term = req.query.word;
    const results = keySearch({ term });
    res.setHeader('Content-Type', 'application/json');
    res.send(results);
  });
}
