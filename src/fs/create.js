import path from "node:path";
import fs from "node:fs/promises";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
    await fs.writeFile(filePath, "I am fresh and young", { flag: "wx" }, (err) =>
        console.error("FS operation failed:", err)
    );
};

await create();
