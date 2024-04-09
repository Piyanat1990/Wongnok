// ชื่อ รูป วัตถุดิบ ขั้นตอน ระยะเวลา ความยากง่าย

const Manus = [{
        id: 1,
        title: `ต้มยำกุ้ง`,
        image_url: "https://media.istockphoto.com/id/1038952330/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%95%E0%B9%89%E0%B8%A1%E0%B8%A2%E0%B9%8D%E0%B8%B2%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%8B%E0%B8%B8%E0%B8%9B%E0%B9%83%E0%B8%AA%E0%B8%A3%E0%B8%AA%E0%B9%80%E0%B8%9C%E0%B9%87%E0%B8%94%E0%B8%97%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%84%E0%B8%9B%E0%B9%83%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B9%84%E0%B8%97%E0%B8%A2.jpg?s=612x612&w=0&k=20&c=Cn7iG9Qsmrq7cXrYZxONzchgdxsmfR03LIdP0xm01us=",
        ingredients: `กุ้งแม่น้ำ 3 ตัว
        เห็ดฟาง 100 กรัม
        ตะไคร้หั่นบาง 10 กรัม
        ตะไคร้หั่นท่อนบุบ 16 กรัม
        รากผักชี 2 กรัม
        ใบมะกรูดฉีก 3 ใบ
        น้ำต้มกระดูก 300 กรัม
        พริกขี้หนูสวนบุบ 10 กรัม
        น้ำปลา 3 ช้อนโต๊ะ
        น้ำมะนาว 3 ช้อนโต๊ะ
        นมข้นจืด 120 กรัม
        น้ำพริกเผา 2 ช้อนโต๊ะ
        ผักชี`,
        instructions: `1. ต้มน้ำต้มกระดูกโดยใส่เปลือกกุ้ง ตะไคร้หั่นท่อน และรากผักชี เมื่อเดือดยกลง
        กรองเอาแต่น้ำเป็นน้ำสต็อก
        2. นำน้ำสต็อกตั้งไฟ ใส่ตะไคร้ เห็ดฟาง พอน้ำเดือดใส่กุ้งรอจนเดือดแล้วใส่น้ำปลา ฉีกใบมะกรูดใส่ลงไป
        3. ละลายน้ำพริกเผากับนมข้นจืดในชามเสิร์ฟ คนให้เข้ากัน เติมน้ำมะนาว พริกขี้หนูบุบ
        4. ตักต้มยำใส่ชามเสิร์ฟ โรยหน้าด้วยผักชี`,
        cooking_time: `20`,
        difficulty_level: `ปานกลาง`
    },
    {
        id: 2,
        title: `แกงเขียวหวาน`,
        image_url: "https://media.istockphoto.com/id/1038952330/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%95%E0%B9%89%E0%B8%A1%E0%B8%A2%E0%B9%8D%E0%B8%B2%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%8B%E0%B8%B8%E0%B8%9B%E0%B9%83%E0%B8%AA%E0%B8%A3%E0%B8%AA%E0%B9%80%E0%B8%9C%E0%B9%87%E0%B8%94%E0%B8%97%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%84%E0%B8%9B%E0%B9%83%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B9%84%E0%B8%97%E0%B8%A2.jpg?s=612x612&w=0&k=20&c=Cn7iG9Qsmrq7cXrYZxONzchgdxsmfR03LIdP0xm01us=",
        ingredients: `ไก่ 1 ชิ้น
        กะทิ 1 ถ้วย
        น้ำพริกแกงเขียวหวาน 2 ช้อนโต๊ะ
        ใบมะกรูด 4 ใบ
        พริกชี้ฟ้าแดง 1 เม็ด
        มะเขือเปราะ 2 ลูก
        น้ำปลา 1 ช้อนโต๊ะ
        น้ำตาลทราย 1 ช้อนชา`,
        instructions: `ตั้งกระทะ ใส่น้ำมันพืช ใส่ไก่ลงไปผัดจนสุก
        ใส่พริกแกงเขียวหวานลงไปผัดจนหอม
        ใส่กะทิลงไปจนเดือด
        ใส่ใบมะกรูด พริกชี้ฟ้าแดง และมะเขือเปราะลงไป
        ปรุงรสด้วยน้ำปลา และน้ำตาลทราย
        จนน้ำแกงข้น ปิดไฟ และเสิร์ฟ`,
        cooking_time: `30`,
        difficulty_level: `ปานกลาง`
    },
    {
        id: 3,
        title: `แกงเขียวหวาน`,
        image_url: "https://media.istockphoto.com/id/1038952330/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%95%E0%B9%89%E0%B8%A1%E0%B8%A2%E0%B9%8D%E0%B8%B2%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%8B%E0%B8%B8%E0%B8%9B%E0%B9%83%E0%B8%AA%E0%B8%A3%E0%B8%AA%E0%B9%80%E0%B8%9C%E0%B9%87%E0%B8%94%E0%B8%97%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%84%E0%B8%9B%E0%B9%83%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B9%84%E0%B8%97%E0%B8%A2.jpg?s=612x612&w=0&k=20&c=Cn7iG9Qsmrq7cXrYZxONzchgdxsmfR03LIdP0xm01us=",
        ingredients: `ไก่ 1 ชิ้น
        กะทิ 1 ถ้วย
        น้ำพริกแกงเขียวหวาน 2 ช้อนโต๊ะ
        ใบมะกรูด 4 ใบ
        พริกชี้ฟ้าแดง 1 เม็ด
        มะเขือเปราะ 2 ลูก
        น้ำปลา 1 ช้อนโต๊ะ
        น้ำตาลทราย 1 ช้อนชา`,
        instructions: `ตั้งกระทะ ใส่น้ำมันพืช ใส่ไก่ลงไปผัดจนสุก
        ใส่พริกแกงเขียวหวานลงไปผัดจนหอม
        ใส่กะทิลงไปจนเดือด
        ใส่ใบมะกรูด พริกชี้ฟ้าแดง และมะเขือเปราะลงไป
        ปรุงรสด้วยน้ำปลา และน้ำตาลทราย
        จนน้ำแกงข้น ปิดไฟ และเสิร์ฟ`,
        cooking_time: `30`,
        difficulty_level: `ปานกลาง`
    },

]
export default Manus;