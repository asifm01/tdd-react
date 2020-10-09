import path from 'path'
import express from 'express'

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World 2')
});

app.listen(8080, () => {
    console.log('listening on 8080')
})