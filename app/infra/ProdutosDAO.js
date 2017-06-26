function ProdutosDAO(connection) {
    this._connection = connection;
}

ProdutosDAO.prototype.listar = function (callback) {
    this._connection.query('select * from livro', callback);
};

ProdutosDAO.prototype.salvar = function (produto, callback) {
    this._connection.query('insert into livro set ?', produto, callback);
};

module.exports = function () {
    return ProdutosDAO;
};