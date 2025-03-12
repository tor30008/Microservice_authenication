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
app.get('new');
app.listen(port, async() => {
  await initMySQL();
  console.log(`Server running at http://localhost:${port}/`)
})