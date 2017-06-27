var app = require('../config/express')();
var request = require('supertest')(app);

describe('#ProdutosController', function() {

    it('#lista como json', function(finalizar) {
        request
            .get('/produtos')
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200, finalizar)
    })
});