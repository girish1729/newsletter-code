const cliProgress = require('cli-progress');
const colors = require('ansi-colors');

const b1 = new cliProgress.SingleBar({
    format: 'CLI Progress |' + colors.red('{bar}') + '| {percentage}% || {value}/{total} Chunks || Speed: {speed}',
    barCompleteChar: '#',
    barIncompleteChar: '-',
    hideCursor: true
});

b1.start(2000, 0, {
    speed: "N/A"
});

count = 100;
setInterval(function() {
b1.update(count);
count += 100;
if(count >= 2000) {
	b1.update(count);
	b1.stop();
	process.exit();
	}
}, 200);


