import express from  "express"

const app = express();


const PORT = process.env.PORT || 4000
app.listen(4001, () => {
    console.log('server run 4000');
})