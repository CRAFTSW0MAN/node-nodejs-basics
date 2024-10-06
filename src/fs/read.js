import path from "node:path";
import fs from "node:fs/promises";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
    console.log(
        await fs
            .readFile(filePath, "utf-8")
            .catch((err) => console.error("FS operation failed:", err))
    );
};

await read();
