const express = require('express');
const app = express();
const PORT = 5500;

app.use(express.json());

var AllShirts = [
    {tshirt: 'Super T-shitr',size: 'Mega Large'},
    {tshirt: 'Small T-shit',size: 'Small'},
    {tshirt: 'Useless T-shitr',size: 'Medium'}
]
app.get(
    '/tshirt',
    (req, res) => {
        // console.log(req);
        res.status(200).send(AllShirts)
    }
)

app.post(
    '/addtshits',
    (req, res) => {
        console.log(req.body)
        AllShirts.push(req.body);
        res.status(201).send('T-shit '+req.body+' is added to the database')
}
)

app.delete(
    '/delets-all-tshits',
    (req, res) => {
        // console.log(req.body)
        AllShirts = [];
        res.status(201).send('T-shit '+req.body+' is added to the database')
}
)
    
app.listen(PORT,
    () => console.log(`I am alive at http://localhost:${PORT}/`)
)