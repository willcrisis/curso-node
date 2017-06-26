module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        var conn = app.infra.connectionFactory();

        var produtosDAO = new app.infra.ProdutosDAO(conn);
        produtosDAO.listar(function (err, result) {
            if (err) {
                console.log(err);
            }
            res.render('produtos/lista', {lista: result});
        });

        conn.end();
    });

    app.get('/produtos/novo', function(req, res) {
        res.render('produtos/form');
    });

    app.post('/produtos/salvar', function(req, res) {
        var produto = req.body;

        var conn = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(conn);
        produtosDAO.salvar(produto, function(err, result) {
            if (err) {
                console.log(err);
            }
            res.render('produtos/lista');
        });
    })
};