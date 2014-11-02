process.on('message', function(o) {
    var path = require('path');
    var speakSync = require(path.join(__dirname,"winsay.js")).speakSync;
    speakSync(o.voice, o.input, function(error, result) {
        process.send({ error: error, result: result });
    });
});
