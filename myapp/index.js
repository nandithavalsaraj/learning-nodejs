const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '.')));

app.get('/',(req, res)=>{
	res.sendFile(path.join(__dirname, './loadpage.html'))
});

app.listen(8000, () => {
	console.log('Example app listening on port 8000!')
});
