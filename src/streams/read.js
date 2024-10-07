import path from "node:path";
import fs from "node:fs";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
    const readStream = fs.createReadStream(filePath);
    readStream.on("data", (text) => process.stdout.write(`${text}\n`));
    readStream.on("error", (error) => console.log(`File ${path.basename(filePath)} read operation failed`));
};

await read();
