import path from "node:path";
import fs from "node:fs";
import { createHash } from 'crypto';
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
    const hash = createHash('sha256');
    const stream = fs.createReadStream(filePath);

    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('end', () => console.log(hash.digest('hex')));
};

await calculateHash();