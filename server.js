const express = require('express')
const { send} = require('express/lib/response')
const app = express()
//middleware 
const requestTime = function (req, res, next) {
    const today =new Date(Date.now());
   hours = today.getHours()  
   day = today.getDay()

    if ( ((hours>=9)&&(hours<23)) ){
        console.log("Open")
        next()   
  }
    else {
        
        res.send(" WE ARE CLOSED COME BACK TOMORROW")
        }
       
 
        }
    



app.use(express.static(__dirname+'/public'))
//console.log(app)
//routes

app.get('/',requestTime, (req, res) => {
    res.sendFile(__dirname+'/public/Home.html')
})
app.get('/Contact', (req, res) => {
    res.sendFile(__dirname+'/public/Contact.html')
})
app.get('/Services', (rep, res) => {
    res.sendFile(__dirname+'/public/Services.html')
})




app.listen(5000, (err) => {
    if (err) throw err
    else console.log('running successfully on port 5000')
})
