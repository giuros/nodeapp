var os = require('os');

var message = 'Queste sono alcune informazioni sul tuo sistema';

var arrayInfo = new Array('Tipo: '+os.type(),
						  'Versione Node: '+process.version,
						  'Piattaforma: '+os.platform(),
						  'Hostname: '+os.hostname(),
						  'Memoria totale: '+os.totalmem(),
						  'Memoria libera: '+os.freemem(),
						  'Uptime: '+os.uptime()
						 );
						 
console.log(message);

for (i=0; i<arrayInfo.length; i++) {
	console.log(arrayInfo[i]);
}