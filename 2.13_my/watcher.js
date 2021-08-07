"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var watchDir = './2.13_my/watchDir';
var watcher = fs_1.watch(watchDir, { recursive: true }, function (eventType, filename) {
    console.log("event type is: " + eventType);
    if (filename) {
        console.log("filename provided: " + filename);
    }
    else {
        console.log('filename not provided');
    }
});
