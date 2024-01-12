import fs from 'node:fs';

export async function readFile(fileName: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}