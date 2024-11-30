const {Client} = require('pg')
const client = new Client ({

    host:"localhost",
    user :"postgres",
    port : 5432,
    password :"Sadasivan@7",
    database : "test_one"
})

client.connect();

client.query('select * from test_user',(err,res)=>{


    if(!err){
        console.log('hiiiiiii')
        console.log(res.rows)
    }
    else{
        console.log(err.message)
    }
    client.end();
});