"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Watcher = void 0;
var fs = require("fs");
var events = require("events");
var Watcher = /** @class */ (function (_super) {
    __extends(Watcher, _super);
    function Watcher(watchDir, processingDir) {
        var _this = _super.call(this) || this;
        _this.watchDir = watchDir;
        _this.processingDir = processingDir;
        return _this;
    }
    Watcher.prototype.watch = function () {
        var _this = this;
        fs.readdir(this.watchDir, function (err, files) {
            if (err)
                throw err;
            for (var index in files) {
                _this.emit('process', files[index]);
            }
        });
    };
    Watcher.prototype.start = function () {
        var _this = this;
        fs.watchFile(this.watchDir, function () {
            _this.watch();
        });
    };
    return Watcher;
}(events.EventEmitter));
exports.Watcher = Watcher;
