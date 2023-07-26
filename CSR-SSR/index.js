const express = require('express');
const app = express();
const path = require('node:path');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}));

const Todos = ["Gym", "Read a book", "Learn Web", "Buy groceries"];

app.get('/todos', (req, res)=>{
    if (req.xhr) {
        res.json(Todos);
    }
    else {
        res.render('todos', {Todos});
    }
})

app.post('/todos', (req, res)=> {
   try {
        const { todo } = req.body
        Todos.push(todo);
        if (req.xhr) {
            res.status(200).json({msg: "Todo added successfully!"})
        }
        else {
            res.redirect('/todos');
        }
   }

   catch(e) {
        res.status(400).json({msg: "Something went wrong!"})
   }
})

app.listen('4000', ()=>{
    console.log("Listening to port 4000");
})

