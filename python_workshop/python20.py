# Exception คือ ข้อผิดพลาดที่เกิดขึ้นในโปรแกรมขณะทำงาน
# Exception Handling การจัดการข้อผิดพลาด
# Python ใช้ try-except (ภาษาอื่นๆใช้ try-catch)

try :
    num1 = 10
    num2 = 5 # แก้ไขเป็น 0 เพื่อทดสอบข้อผิดพลาด

    result = num1 / num2

    print("ผลลัพธ์ : ", result)
except :
    print('มีข้อผิดพลาดในการทำงาน ลองใหม่อีกครั้ง หรือ ติดต่อ IT Support')
else : 
    print('คำนวณสำเร็จ ไม่มีข้อผิดพลาดเกิดขึ้น')
finally :
    print('Thank you...')