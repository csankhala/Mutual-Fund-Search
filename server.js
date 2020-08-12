const express = require('express');

const app = express();

app.use(express.static('./dist/mf-angular-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/mf-angular-app/'}),
);

app.listen(process.env.PORT || 8080);
