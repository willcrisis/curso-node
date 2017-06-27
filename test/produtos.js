var http = require('http');

describe('#ProdutosController', function() {

    it('#lista como json', function(finalizar) {
        var config = {
            hostname: 'localhost',
            port:3000,
            path:'/produtos',
            headers: {
                'Accept':'application/json'
            }
        };

        http.get(config,function(res){
            if (res.statusCode == 200) {
                console.log("Status correto");
            }
            if (res.headers['content-type'] == 'application/json; charset=utf-8') {
                console.log('content type correto');
            }

            finalizar()
        });
    })
});