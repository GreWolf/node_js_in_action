import * as fs from 'fs'
import * as events from 'events'

class Watcher extends events.EventEmitter {
    watchDir: string
    processingDir: string

    constructor(watchDir: string, processingDir: string) {
        super();
        this.watchDir = watchDir;
        this.processingDir = processingDir;
    }

    watch(): void {
        fs.readdir(this.watchDir, (err: NodeJS.ErrnoException | null, files: string[]) => {
            if (err) throw err;
            for (let index in files) {
                this.emit('process', files[index])
            }
        })
    }

    start(): void {
        fs.watchFile(this.watchDir, () => {
            this.watch();
        })
    }
}

// module.exports = Watcher;

export {Watcher}