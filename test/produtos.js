var app = require('../config/express')();
var request = require('supertest')(app);

describe('#ProdutosController', function () {

    it('#lista como json', function (done) {
        request
            .get('/produtos')
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200, done)
    });

    it('#cadastro de produtos com dados inválidos', function (done) {
        request
            .post('/produtos')
            .send({
                titulo: '',
                descricao: 'Teste',
                valor: 'aaa'
            })
            .expect(400, done);
    });

    it('#cadastro de produtos com dados válidos', function (done) {
        request
            .post('/produtos')
            .send({
                titulo: 'Cadastrado no teste',
                descricao: 'Teste',
                valor: '45.99'
            })
            .expect(302, done);
    });
});