// const fs = require('fs');
// const zlib = require('zlib');

import * as fs from 'fs';
import * as zlib from 'zlib';

const gzip: zlib.Gzip = zlib.createGzip();

const outStream: fs.WriteStream = fs.createWriteStream('./1.1/output-ts.js.gz');

const filename: string = './1.1/fs_zlib_gzip.js';

fs.createReadStream(filename)
    .pipe(gzip)
    .pipe(outStream)