// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;

  // ตรวจสอบบัญชีผู้ใช้
  if(username === 'admin' && password === 'admin123') {
    res.json({ success: true, token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ success: false, message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
