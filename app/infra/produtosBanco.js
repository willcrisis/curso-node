module.exports = function() {
    this.lista = function(connection, callback) {
        connection.query('select * from livro', callback);
    };
    return this;
};