import express from 'express';

const app = express();

app.use(express.static('build'));

app.use((req, res) => {
    const html = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8" />
                <title>React Hacking!</title>
            </head>
            <body>
                <div id="app"></div>
                <script src="bundle.js"></script>
            </body>
        </html>
        `;
        res.end(html);
});

export default app;