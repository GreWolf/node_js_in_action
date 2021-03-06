"use strict";
exports.__esModule = true;
var chokidar = require("chokidar");
var watchDir = './2.13_chokidar/watchDir';
// One-liner for current directory
var watcher = chokidar.watch(watchDir, {
    ignored: /(^|[\/\\])\../,
    persistent: true
});
// Something to use when events are received.
var log = console.log.bind(console);
// Add event listeners.
watcher
    .on('add', function (path) { return log(getCurrDateStr() + " File " + path + " has been added"); })
    .on('unlink', function (path) { return log(getCurrDateStr() + " File " + path + " has been removed"); });
// More possible events.
watcher
    .on('addDir', function (path) { return log(getCurrDateStr() + " Directory " + path + " has been added"); })
    .on('unlinkDir', function (path) { return log(getCurrDateStr() + " Directory " + path + " has been removed"); })
    .on('error', function (error) { return log(getCurrDateStr() + " Watcher error: " + error); })
    .on('ready', function () { return log(getCurrDateStr() + " Initial scan complete. Ready for changes"); })
    .on('raw', function (event, path, details) {
    log(getCurrDateStr() + " Raw event info:", event, path, details);
});
// 'add', 'addDir' and 'change' events also receive stat() results as second
// argument when available: https://nodejs.org/api/fs.html#fs_class_fs_stats
watcher.on('change', function (path, stats) {
    if (stats) {
        console.log(getCurrDateStr() + " File " + path + " changed size to " + stats.size);
    }
    else
        log(getCurrDateStr() + " File " + path + " has been changed");
});
function getCurrDateStr() {
    return dateToString(new Date());
}
function dateToString(date) {
    var YY = date.getFullYear();
    var MM = String(date.getMonth() + 1).padStart(2, '0');
    var DD = String(date.getDay() + 1).padStart(2, '0');
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    return YY + "." + MM + "." + DD + " " + hh + "." + mm + "." + ss;
}
