const express = require('express');

const app = express();

app.get('/', (req,res) =>{
    res.send( 'Finally, you did it!');
});

app.listen(7777, () => console.log('server is runing..'));