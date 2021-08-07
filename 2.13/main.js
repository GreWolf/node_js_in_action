"use strict";
exports.__esModule = true;
var watcher_1 = require("./watcher");
var fs = require("fs");
var watchDir = './2.13/watchDir';
var processedDir = './2.13/processedDir';
var watcher = new watcher_1.Watcher(watchDir, processedDir);
watcher.on('process', function (file) {
    var watchFile = watchDir + "/" + file;
    var processedFile = processedDir + "/" + file.toLocaleLowerCase();
    fs.rename(watchFile, processedFile, function (err) {
        if (err)
            throw err;
    });
});
watcher.start();
