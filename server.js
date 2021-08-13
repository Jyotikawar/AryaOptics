const express = require('express')
const mongoose = require('mongoose')

const Eyeglasses = require('./models/eyeglasses')
const Sunglasses = require('./models/sunglasses')
const Lenses = require('./models/lenses')
const app = express()


//ENTER db LINK HERE
const dbURI = "mongodb+srv://ved:ved123@store-cluster.wsjkp.mongodb.net/products?retryWrites=true&w=majority"

app.set('view engine','ejs');
app.use(express.static('static'))
app.use(express.urlencoded({extended:true}))


mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true})
.then((result)=>{
  console.log("connected to db");
  //console.log(result);
  app.listen(3000,()=>{
    console.log("Listening on port 3000");
  })
})
.catch((err)=>{
  console.log("Error in  db connection")
  console.log(err)
})

//HOME
app.get('/home',(req,res)=>{
  res.render('home')
})


//EYEGLASSES
app.get('/eyeglasses',(req,res)=>{
  Eyeglasses.find()
  .then((result)=>{
    res.render('eyeglasses',{items:result})
  })
  .catch((err)=>{
    console.log(err)
  })
})

app.get('/eyeglasses/:id',(req,res)=>{
  Eyeglasses.findById(req.params.id)
  .then((result)=>{
    res.render('eglass',{item:result})
  })
  .catch((err)=>{
    console.log(err)
  })
})



//SUNGLASSES
app.get('/sunglasses',(req,res)=>{
  Sunglasses.find()
  .then((result)=>{
    res.render('sunglasses',{items:result})
  })
  .catch((err)=>{
    console.log(err)
  })
})

app.get('/sunglasses/:id',(req,res)=>{
  Sunglasses.findById(req.params.id)
  .then((result)=>{
    res.render('sglass',{item:result})
  })
  .catch((err)=>{
    console.log(err)
  })
})


//LENSES
app.get('/lenses',(req,res)=>{
  Lenses.find()
  .then((result)=>{
    res.render('lenses',{items:result})
  })
  .catch((err)=>{
    console.log(err)
  })

})

app.get('/lenses/:id',(req,res)=>{
  Lenses.findById(req.params.id)
  .then((result)=>{
    res.render('lens',{item:result})
  })
  .catch((err)=>{
    console.log(err)
  })
})



//CONTACT
app.get('/contact',(req,res)=>{
  res.render('contact')
})

// register
app.get('/register',(req,res)=>{
  res.render('register')
})

// login
app.get('/login',(req,res)=>{
  res.render('login')
})
