import path from "node:path";
import fs from "node:fs/promises";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files");

const copy = async () => {
    await fs
        .cp(filePath, `${filePath}_copy`, {
            errorOnExist: true,
            recursive: true,
            force: false
        })
        .catch((err) => console.error("FS operation failed:", err));
};

await copy();
