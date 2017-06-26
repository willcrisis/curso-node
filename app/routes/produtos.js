module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        var conn = app.infra.connectionFactory();

        var produtosBanco = new app.infra.ProdutosDAO(conn);
        produtosBanco.lista(function (err, result) {
            if (err) {
                console.log(err);
            }
            res.render('produtos/lista', {lista: result});
        });

        conn.end();
    });
};