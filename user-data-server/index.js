const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user_data'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

app.post('/api/users', (req, res) => {
  const user = req.body;
  const sql = 'INSERT INTO users SET ?';
  db.query(sql, user, (err, result) => {
    if (err) throw err;
    res.send('User data added');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
