const express = require('express')
const app = express()

const lightningPayReq = require('bolt11')

const { spawn } = require('child_process');


var chechInvoice = function(invoice_id) {
	return new Promise(function(success, nosuccess) {

	    const { spawn } = require('child_process');
	   const pyprog = spawn('python',["test.py", invoice_id]);

	    pyprog.stdout.on('data', function(data) {

		success(data);
	    });

	    pyprog.stderr.on('data', (data) => {

		nosuccess(data);
	    });
	});
};



const checkInvoiceState = function(invoice_id){
	const child = spawn('python',["test.py", invoice_id]);

child.stdout.on('data', (data) => {
	const response = JSON.parse(data.toString());
	const invoice = response.data.invoice;
	return invoice;

/*	const decoded = lightningPayReq.decode(invoice.description);
	console.log(decoded);*/
});

};


app.get('/api/invoice/:id', (req, res) => {

     chechInvoice(req.params.id).then(function(fromRunpy) {
        res.end(fromRunpy);
    });

})

app.listen(4000, () => console.log('Application listening on port 4000!'))
