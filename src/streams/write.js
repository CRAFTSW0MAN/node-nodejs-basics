import path from "node:path";
import fs from "node:fs";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
    const readStream = fs.createWriteStream(filePath, 'utf-8');
    process.stdin.pipe(readStream);
    process.on('SIGINT', () => {
        exit();
    });

    readStream.on("error", (error) => console.log(`\nFile ${path.basename(filePath)} write operation failed`));
    const exit = () => {
        process.stdout.write(`\nRecording in the file ${path.basename(filePath)} is complete!`);
        process.exit();
    };
};

await write();