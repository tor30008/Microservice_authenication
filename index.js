const express = require('express')
const mysql = require('mysql2/promise');
const app = express()
const port = 8000
let conn = null;

const initMySQL = async () => {
    conn = await mysql.createConnection({
      host: 'db', // หรือใส่เป็น localhost ก็ได้
      user: 'root',
      password: 'root',
      database: 'Authenication'
    })
  }


app.get('/hello-world', (req, res) => {
  res.send('hello world')
})

app.get('/get',async (req,res) => {
    let [result] = await conn.query("select * from testname");
    res.json(result);
})

app.get('/testget',async(req,res) => {
    let [result] = await conn.query("select * from testname where id = 1");
    res.json(result);
})
app.get('/testdocker',(req,res) => {
  res.json("OK");
})
app.get('/test',(req,res) => {
  res.json('testja');
})

app.get('/testddd',(req,res) => {
  res.json('testtest');
})

app.get('/testdoc',(req,res) => {
  console.log('testdoc');
})

app.get('/test',(req,res) => {
  console.log('test');
})

app.get('/armtest',(req,res) => {
  res.json("arm Test")
})

app.get('/tortest',(req,res) => {
  res.json('docker hot reload');
})

app.get('/test001',(req,res) => {
  res.json('This is test 001 man');
})

app.get('/tlv', (req,res) => {
  res.json('tor new version');
});

app.get('/torbrachupdate',(req,res)=> {
  res.json('torbrach');
})
app.get('/armtest22',(req,res) => {
  res.json("arm Test222")
})



app.listen(port, async() => {
  await initMySQL();
  console.log(`Server running at http://localhost:${port}/`)
})