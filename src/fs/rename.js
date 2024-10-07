import path from "node:path";
import fs from "node:fs/promises";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "wrongFilename.txt");
const renameFilePath = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
    await fs
        .rename(filePath, renameFilePath)
        .catch((err) => console.error("FS operation failed:", err));
};

await rename();