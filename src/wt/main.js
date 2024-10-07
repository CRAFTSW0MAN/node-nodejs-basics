import path from "node:path";
import url from "node:url";
import os from 'os';
import { Worker } from 'worker_threads';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "worker.js");

const createWorkerPromise = (workerData) => {
    return new Promise((resolve, reject) => {
        const workerServer = new Worker(path.join(filePath), { workerData });
        workerServer.on("message", (result) =>resolve({ status: "resolved", data: result }));
        workerServer.on("error", () => resolve({ status: "error", data: null }));
    });
};

const performCalculations = async () => {
    const currentWorkers = os.cpus().length;
    const resultsPromise = [];

    for (let i = 0; i < currentWorkers; i++) {
        const resultOnePromise = await createWorkerPromise(10 + i);
        resultsPromise.push(resultOnePromise);
    }

    const workerResults = await Promise.all(resultsPromise);
    console.log(workerResults);
};

await performCalculations();