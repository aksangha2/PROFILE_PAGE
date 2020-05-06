const route=require('express').Router()
const nodemailer=require('nodemailer')

route.get("/",(req,res)=>{
    res.sendStatus(200)
})

route.post("/",(req,res)=>{
    console.log(req.body.name)
    
    const transporter=nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'aksangha2.as@gmail.com',
            pass:'shinchan@1997'
        }
    });

    const mailOptions={
        from:'aksangha2.as@gmail.com',
        to:'aksangha2@gmail.com',
        subject:'sending email using nodejs',
        html:`
        <h1>Name: ${req.body.name}</h1>
        <p>Email: ${req.body.email}</p>
        <p>Message: ${req.body.message}</p>`
    };

    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error)
        }
        else{
            console.log("email sent:"+ info.response);
        }
    });
})


exports=module.exports={route};


/*Go to : https://www.google.com/settings/security/lesssecureapps

set the Access for less secure apps setting to Enable*/