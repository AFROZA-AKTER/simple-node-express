const express = require('express');
const app =express();


const cors = require('cors');
const port = 3000;

app.use(cors())
app.use(express.json())

app.get('/' , (req , res) => {
    res.send('WOw i am excited learning node.js from my first node');
});

const users = [
    {id:0 , name:'popy' , email:'popy@gmail.com' , phone:'213434' },
    {id:1 , name:'purnima' , email:'popy@gmail.com' , phone:'213434'},
    {id:2 , name:'sabnoor' , email:'popy@gmail.com' , phone:'213434'},
    {id:3 , name:'mousumi' , email:'popy@gmail.com' , phone:'213434'},
    {id:4 , name:'opu' , email:'popy@gmail.com' , phone:'213434'},
    {id:5 , name:'mukta' , email:'popy@gmail.com' , phone:'213434'}
]


// use query parameter
app.get('/users' , (req , res) =>{
    const search = req.query.search;

    if(search){
      const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
      res.send(searchResult)
    }
    else{
        res.send(users)
    }
})

app.post('/users' ,(req , res ) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    // console.log('hitting the post' , req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})


// dynamic api
app.get('/users/:id' , (req , res) =>{
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})


app.listen(port , () =>{
    console.log('listening to port' , port)
})
