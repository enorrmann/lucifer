const { spawn } = require('child_process');
const child = spawn('python',["test.py", "L9x2z11vs8LuBzbuyPuz2m"]);

child.stdout.on('data', (data) => {
	const response = JSON.parse(`${data}`);
	const invoice = response.data.invoice;
	console.log(invoice);
});

