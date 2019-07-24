var express = require('express');
var restify = require("restify-clients");
var assert = require("assert");
var router = express.Router();

var client = restify.createJsonClient({
  url:"http://localhost:4000"
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  client.get("/users", function (error, request, response, obj) {
    assert.ifError(error);

    res.json(obj);
  })
  
});

router.get('/:id', function (req, res, next) {
  client.get(`/users/${req.params.id}`, function (error, request, response, obj) {
    assert.ifError(error);

    res.json(obj);
  })
});

router.put('/:id', function (req, res, next) {
  client.put(`/users/${req.params.id}`, req.body, function (error, request, response, obj) {
    assert.ifError(error);

    res.json(obj);
  });
});

router.delete('/:id', function (req, res, next) {
  client.del(`/users/${req.params.id}`, function (error, request, response, obj) {
    assert.ifError(error);

    res.json(obj);
  })
});

router.post('/', function (req, res, next) {
  client.post(`/users/`, req.body, function (error, request, response, obj) {
    assert.ifError(error);

    res.json(obj);
  })
});

module.exports = router;
