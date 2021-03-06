const express = require('express')
const path = require('path');
const PORT = 3000


const app = express()
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'))
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

