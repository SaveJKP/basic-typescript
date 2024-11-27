// ฟังก์ชันคำนวณราคาสินค้าที่มี default parameters
function calculatePrice(price: number, discount: number = 10): number {
  // ถ้าไม่ระบุค่า discount จะใช้ค่า default คือ 10
  const discountAmount = price * (discount / 100);
  return price - discountAmount;
}

// ตัวอย่างการเรียกใช้
console.log(calculatePrice(1000)); // ใช้ discount default 10% = 900
console.log(calculatePrice(1000, 20)); // ระบุ discount 20% = 800
