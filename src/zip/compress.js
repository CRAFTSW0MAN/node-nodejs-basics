import path from "node:path";
import fs from "node:fs";
import url from "node:url";
import { createGzip } from 'zlib';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToCompress.txt");
const destinationFilePath = path.join(__dirname, "files", "archive.gz");

const compress = async () => {
    const gZip = createGzip();
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(destinationFilePath);

    readStream.pipe(gZip).pipe(writeStream);
    readStream.on("error", (error) => console.log(`\nFile ${path.basename(filePath)} read operation failed`));
    writeStream.on("error", (error) => console.log(`\nFile ${path.basename(destinationFilePath)} write operation failed`));
};

await compress();