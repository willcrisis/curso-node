module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        var conn = app.infra.connectionFactory();

        var produtosBanco = app.infra.produtosBanco;
        produtosBanco.lista(conn, function (err, result) {
            if (err) {
                console.log(err);
            }
            res.render('produtos/lista', {lista: result});
        });

        conn.end();
    });

    app.get('/produtos/remove', function (req, res) {

    });
};