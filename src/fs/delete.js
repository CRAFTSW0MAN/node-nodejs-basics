import path from "node:path";
import fs from "node:fs/promises";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
    await fs
        .rm(filePath, {
            force: false,
            recursive: true,
        })
        .catch((err) => console.error("FS operation failed:", err));
};

await remove();
