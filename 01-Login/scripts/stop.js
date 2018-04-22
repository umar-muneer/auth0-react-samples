const ps = require('ps-node');
ps.lookup({
    command: /node/,
    arguments: /react-scripts\/scripts\/start.js/
}, (err, result) => {
    if (err) {
        throw err;
    }
    const { pid } = result[0];
    ps.kill(pid, (err) => {
        if (err) {
            throw err;
        }
        process.exit();
    });
})