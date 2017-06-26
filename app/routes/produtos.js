module.exports = function(app) {
    app.get('/produtos', function(req, res) {
        var conn = app.infra.connectionFactory();
        conn.query('select * from livro', function(err, result) {
            if (err) {
                console.log(err);
            }
            res.render('produtos/lista', {lista: result});
        });

        conn.end();
    });
};