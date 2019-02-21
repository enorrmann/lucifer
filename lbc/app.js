const express = require('express')
const app = express()

const lightningPayReq = require('bolt11')

const { spawn } = require('child_process');


var getInvoice = function(invoice_id) {
	return new Promise(function(success, nosuccess) {

	    const { spawn } = require('child_process');
	   const pyprog = spawn('python',["test.py", invoice_id]);

	    pyprog.stdout.on('data', function(data) {
		var invoice = JSON.parse(data.toString()).data.invoice;
		success(JSON.stringify(invoice));
	    });

	    pyprog.stderr.on('data', (data) => {

		nosuccess(data);
	    });
	});
};

app.get('/api/invoice/:id', (req, res) => {

     getInvoice(req.params.id).then(function(invoice) {
        res.end(invoice);
    });

});

app.get('/api/payreq/:id', (req, res) => {

     getInvoice(req.params.id).then(function(invoice) {
        res.end(invoice);
    });

});

app.listen(4000, () => console.log('Application listening on port 4000!'))
