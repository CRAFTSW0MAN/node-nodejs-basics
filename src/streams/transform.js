import {Transform} from 'stream';

const transform = async () => {
    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {
            const reversedText = chunk.toString().split('').reverse().join('');
            const transformedChunk = reversedText + '\n';
            callback(null, reversedText);
        },
    });

    process.stdin.pipe(reverseStream).pipe(process.stdout);

    reverseStream.on("error", (error) =>  console.log(` \nTransform operation failed`));
    process.stdin.on("error", (error) =>  console.log(` \nReading input operation failed`));
    process.stdout.on("error", (error) =>  console.log(` \nWriting output operation failed`));

    process.on('SIGINT', () => {
        exit();
    });

    const exit = () => {
        process.stdout.write(' \nTransform completed!');
        process.exit();
    };
};

await transform();
