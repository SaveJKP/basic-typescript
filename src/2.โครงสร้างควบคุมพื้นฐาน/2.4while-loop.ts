//while loop กับ array
const fruits = ["แอปเปิ้ล", "กล้วย", "ส้ม", "มะม่วง"];
let index = 0;
while (index < fruits.length) {
  console.log(`ผลไม้ชิ้นที่ ${index + 1}: ${fruits[index]}`);
  index++;
}

//do...while loop (ทำงานอย่างน้อย 1 ครั้ง)
let userInput = 0;
do {
  console.log("รอบที่: " + userInput);
  userInput++;
} while (userInput < 3);
