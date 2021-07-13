const express = require('express');
const app = express();
const PORT = 1000;

app.use(express.json());


var Qustion = {
    'Qustion': 'what do you like the most'
}
var Options = [
    {id: 1, optionText: 'Sing'},
    {id: 2, optionText: 'Chess'},
    {id: 3, optionText: 'Ludo'},
    {id: 4, optionText: 'Code'}
]

var AnswersFromClients = [
    {name: 'Bien Client', answer: 1},
    {name: 'Bien Client', answer: 2},
    {name: 'Bien Client', answer: 4},
    {name: 'Bien Client', answer: 3},
    {name: 'Bien Client', answer: 2},
]


app.get('/get-answers',
    (req, res) => {
        res.status(200).send(AnswersFromClients)
    }
)
app.get('/get-qustion',
    (req, res) => {
        res.status(200).send(Qustion)
    }
)
app.get('/get-Options',
    (req, res) => {
        res.status(200).send(Options)
    }
)

app.post('/submitans',
    (req, res) => {
        
        AddAnswer(req);
        res.status(201).send('your amswer in recorded')
}
)

app.delete(
    '/deletanswers',
    (req, res) => {
        ClearAnsewrs()
        res.status(201).send('All answers are Deleted')
    }
)
app.delete(
    '/deletoptions',
    (req, res) => {
        ClearAnsewrs()
        res.status(201).send('All answers are Deleted')
    }
)



app.listen(PORT,
    () => console.log(`I am alive at http://localhost:${PORT}/`)
)



function ClearAnsewrs() {
    AnswersFromClients = [];
}
function ClearOptions() {
    Options = [];
}
function AddAnswer(req) {
    console.log("new answer added "+req.body)
    AnswersFromClients.push(req.body);
}
function ChangeQustion(req) {
    Qustion= req.body;
}