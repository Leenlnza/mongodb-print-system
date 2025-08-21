# ระบบสั่งปริ้นด้วย MongoDB Atlas

## 🚀 การติดตั้งและใช้งาน

### 1. ติดตั้ง Dependencies
\`\`\`bash
npm install
\`\`\`

### 2. ตั้งค่า MongoDB Atlas
1. สร้างบัญชี MongoDB Atlas ที่ https://www.mongodb.com/atlas
2. สร้าง Cluster ใหม่ (เลือก Free Tier)
3. สร้าง Database User (Database Access)
4. เพิ่ม IP Address ใน Network Access (0.0.0.0/0 สำหรับทดสอบ)
5. คัดลอก Connection String

### 3. ตั้งค่า Environment Variables
แก้ไขไฟล์ `.env` และใส่ข้อมูลของคุณ:
\`\`\`env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/printdb
PORT=3000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
\`\`\`

### 4. รันโปรแกรม
\`\`\`bash
# สำหรับ Production
npm start

# สำหรับ Development (auto-reload)
npm run dev
\`\`\`

### 5. เข้าใช้งาน
- 🏠 หน้าแรก: http://localhost:3000
- 👤 หน้าผู้ใช้: http://localhost:3000/user.html
- 👨‍💼 หน้าแอดมิน: http://localhost:3000/admin.html

## ✨ คุณสมบัติ

### สำหรับผู้ใช้:
- ✅ กรอกข้อมูลส่วนตัว (ชื่อ, สาขา, เวลารับงาน)
- ✅ เลือกประเภทการปริ้น (สี 10 บาท/ขาวดำ 1 บาท)
- ✅ อัปโหลดไฟล์รูปภาพหรือ PDF
- ✅ คำนวณราคาอัตโนมัติ
- ✅ ส่งคำสั่งปริ้นเข้าฐานข้อมูล
- ✅ แสดงตัวอย่างรูปภาพ

### สำหรับแอดมิน:
- ✅ ดูรายการสั่งปริ้นทั้งหมด
- ✅ สถิติรายได้และจำนวนงาน
- ✅ ดาวน์โหลดไฟล์ที่ผู้ใช้อัปโหลด
- ✅ ลบรายการทีละรายการหรือทั้งหมด
- ✅ ดูข้อมูลรายละเอียดของแต่ละออเดอร์
- ✅ UI ที่สวยงามและใช้งานง่าย

## 🔧 API Endpoints

- `GET /api/orders` - ดูรายการสั่งปริ้นทั้งหมด
- `POST /api/orders` - สร้างคำสั่งปริ้นใหม่
- `DELETE /api/orders/:id` - ลบคำสั่งปริ้นตาม ID
- `DELETE /api/orders` - ลบคำสั่งปริ้นทั้งหมด
- `PATCH /api/orders/:id` - อัปเดตสถานะคำสั่งปริ้น

## 📁 โครงสร้างโปรเจค

\`\`\`
mongodb-print-system/
├── server.js              # Express server หลัก
├── package.json           # Dependencies และ scripts
├── .env                   # Environment variables
├── README.md             # คู่มือการใช้งาน
└── public/               # Static files
    ├── index.html        # หน้าแรก
    ├── user.html         # หน้าผู้ใช้
    └── admin.html        # หน้าแอดมิน
\`\`\`

## 🗄️ โครงสร้างฐานข้อมูล

### Collection: orders
\`\`\`javascript
{
  _id: ObjectId,
  name: String,           // ชื่อ-นามสกุล
  major: String,          // สาขาที่เรียน
  time: String,           // เวลารับงาน ("11:15" หรือ "12:15")
  color: String,          // ประเภทการปริ้น ("color" หรือ "bw")
  copies: Number,         // จำนวนแผ่น
  price: Number,          // ราคาต่อแผ่น
  totalPrice: Number,     // ราคารวม
  fileData: String,       // ไฟล์ในรูปแบบ base64
  fileType: String,       // ประเภทไฟล์ (MIME type)
  fileName: String,       // ชื่อไฟล์
  createdAt: Date        // วันที่สร้าง
}
\`\`\`

## 🛠️ การแก้ไขปัญหา

### ปัญหา PowerShell Execution Policy
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
