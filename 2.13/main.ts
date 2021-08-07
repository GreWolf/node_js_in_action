import {Watcher} from './watcher'
import * as fs from "fs";

const watchDir = './2.13/watchDir'
const processedDir = './2.13/processedDir'

const watcher: Watcher = new Watcher(watchDir, processedDir)

watcher.on('process', (file: string) => {
    const watchFile: string = `${watchDir}/${file}`
    const processedFile: string = `${processedDir}/${file.toLocaleLowerCase()}`
    fs.rename(watchFile, processedFile, (err: NodeJS.ErrnoException | null): void => {
        if (err) throw err;
    })
})

watcher.start()