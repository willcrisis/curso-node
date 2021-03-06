module.exports = function (app) {
    app.get('/', function(req, res) {
        var conn = app.infra.connectionFactory();

        var produtosDAO = new app.infra.ProdutosDAO(conn);
        produtosDAO.listar(function (err, result) {
            res.render('home/index', {livros: result});
        });
        conn.end();
    });

    app.get('/produtos', function (req, res, next) {
        var conn = app.infra.connectionFactory();

        var produtosDAO = new app.infra.ProdutosDAO(conn);
        produtosDAO.listar(function (err, result) {
            if (err) {
                console.log(err);
                return next(err);
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
        res.render('produtos/form', {errosValidacao: {}, produto: {}});
    });

    app.post('/produtos', function(req, res) {
        var produto = req.body;

        req.assert('titulo', 'O Título é obrigatório').notEmpty();
        req.assert('valor', 'O Valor está em formato inválido').isFloat();

        var errors = req.validationErrors();
        if (errors) {
            res.format({
                html: function() {
                    res.status(400).render('produtos/form', {errosValidacao: errors, produto: produto});
                },
                json: function() {
                    res.status(400).json(errors);
                }
            });

            return;
        }

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