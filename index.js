const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const debug = require('debug')('app:cluster');

if (cluster.isMaster) {
	debug(`Master ${process.pid} is running`);

	for (let int = 0; int < numCPUs; int += 1) {
		cluster.fork();
	}

	cluster.on('exit', (worker, code) => {
		if (code !== 0) {
			debug(`Worker ${worker.process.pid} crashed. Spawning replacement worker.`);
			cluster.fork();
		}
	});

	process.on('SIGUSR2', () => {
		debug('SIGUSR2 received. Reloading workers.');

		delete require.cache[require.resolve('./bin/server')];

		const workers = Object.keys(cluster.workers);
		let int = 0;

		const workerRestart = function () {
			if (int === workers.length) return;

			debug(`Killing worker ${workers[int]}`);

			cluster.workers[workers[int]].disconnect();
			cluster.workers[workers[int]].on('disconnect', () => {
				debug('Shutdown complete.');
			});

			const newWorker = cluster.fork();
			newWorker.on('listening', () => {
				debug('Replacement worker online.');
				int += 1;
				workerRestart();
			});
		};
		workerRestart();
	});
} else {
	require('./bin/server');
}