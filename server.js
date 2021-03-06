const express = require('express');
const port = 8080;
const app = express();

app.use(express.json());

const metodosRouter = require('./routes/metodos');
app.use('/api/metodos', metodosRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
