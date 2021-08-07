import * as chokidar from 'chokidar';

const watchDir: string = './2.13_chokidar/watchDir'
// One-liner for current directory
const watcher = chokidar.watch(watchDir, {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true,
})

// Something to use when events are received.
const log = console.log.bind(console);
// Add event listeners.
watcher
    .on('add', path => log(`${getCurrDateStr()} File ${path} has been added`))
    .on('unlink', path => log(`${getCurrDateStr()} File ${path} has been removed`));

// More possible events.
watcher
    .on('addDir', path => log(`${getCurrDateStr()} Directory ${path} has been added`))
    .on('unlinkDir', path => log(`${getCurrDateStr()} Directory ${path} has been removed`))
    .on('error', error => log(`${getCurrDateStr()} Watcher error: ${error}`))
    .on('ready', () => log(`${getCurrDateStr()} Initial scan complete. Ready for changes`))
    .on('raw', (event, path, details) => { // internal
        log(`${getCurrDateStr()} Raw event info:`, event, path, details);
    });

// 'add', 'addDir' and 'change' events also receive stat() results as second
// argument when available: https://nodejs.org/api/fs.html#fs_class_fs_stats
watcher.on('change', (path, stats) => {
    if (stats) {
        console.log(`${getCurrDateStr()} File ${path} changed size to ${stats.size}`)
    }
    else log(`${getCurrDateStr()} File ${path} has been changed`)

});


function getCurrDateStr(): string {
    return dateToString(new Date())
}

function dateToString(date: Date): string {
    let YY = date.getFullYear()
    let MM = String(date.getMonth() + 1).padStart(2, '0')
    let DD = String(date.getDay() + 1).padStart(2, '0')

    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    return `${YY}.${MM}.${DD} ${hh}.${mm}.${ss}`
}