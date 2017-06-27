module.exports = function(app) {
    app.get('/promocoes/novo', function(req, res) {
        var conn = app.infra.connectionFactory();

        var produtosDAO = new app.infra.ProdutosDAO(conn);
        produtosDAO.listar(function (err, result) {
            res.render('promocoes/novo', {lista: result});
        });
        conn.end();
    });

    app.post('/promocoes', function(req, res) {
        var promocao = req.body;
        console.log(promocao);
        res.redirect('/promocoes/novo');
    });
};