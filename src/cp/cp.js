import path from "node:path";
import url from "node:url";
import {spawn} from 'child_process';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
    const child = spawn('node', [filePath, ...args]);

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
// spawnChildProcess([true, false, '']);
// spawnChildProcess(['1', 2, '3']);

