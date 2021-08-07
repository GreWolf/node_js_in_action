import {watch, FSWatcher} from 'fs';

const watchDir: string = './2.13_my/watchDir'

const watcher: FSWatcher = watch(watchDir, {recursive: true}, (eventType: "rename" | "change", filename: string) => {
    console.log(`event type is: ${eventType}`);
    if (filename) {
        console.log(`filename provided: ${filename}`);
    } else {
        console.log('filename not provided');
    }
});