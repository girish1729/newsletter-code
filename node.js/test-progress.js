const cliProgress = require('cli-progress');
const bar1 = new cliProgress.SingleBar({
    barCompleteChar: '#',
}, cliProgress.Presets.shades_classic);

bar1.start(200, 0);

bar1.update(100);

bar1.stop();
