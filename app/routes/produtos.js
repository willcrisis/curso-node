module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        var conn = app.infra.connectionFactory();

        var produtosDAO = new app.infra.ProdutosDAO(conn);
        produtosDAO.listar(function (err, result) {
            if (err) {
                console.log(err);
            }
            res.format({
                html: function() {
                    res.render('produtos/lista', {lista: result});
                },
                json: function() {
                    res.json(result);
                }
            });

        });

        conn.end();
    });

    app.get('/produtos/novo', function(req, res) {
        res.render('produtos/form');
    });

    app.post('/produtos', function(req, res) {
        var produto = req.body;

        var conn = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(conn);
        produtosDAO.salvar(produto, function(err, result) {
            if (err) {
                console.log(err);
            }
            res.redirect('/produtos');
        });
    })
};