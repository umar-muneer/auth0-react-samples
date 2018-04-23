const ps = require('ps-node');
ps.lookup({
    command: /node/,
    arguments: /react-scripts\/scripts\/start.js/
}, (err, result = []) => {
    if (err) {
        throw err;
    }
    if (!result.length) {
      process.exit();
      return;
    }
    const { pid } = result[0];
    ps.kill(pid, (err) => {
        if (err) {
            throw err;
        }
        process.exit();
    });
})