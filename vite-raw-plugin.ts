import fs from 'fs';

export default function rawPlugin() {
    return {
        name: 'vite-raw-plugin',
        transform(code: any, id: any) {
            if (id.endsWith('?raw')) {
                const filePath = id.slice(0, -4);
                const fileContent = fs.readFileSync(filePath, 'utf-8');
                return `export default ${JSON.stringify(fileContent)}`;
            }
        },
    };
}
