# python OOP (Object Oriented Programming)
# class คือ แม่แบบ ของ object
# object คือ สิ่งที่สร้างจาก class หรืออาจจะเรียกว่าตัวแทนของคลาส instance of class
# -------------------------------
class IoTSAU : 
    pass

class car : 
    #data member
    brand = ''
    model = ''
    whell = 0
    #method member
    def letGo(self) :
        print('ไปกันเลย...')

    def carStop(self) :
        print('จอดแล้ว...')

obA = car()
obB = car()
wowA = car()

obA.brand = "Toyota"
print(obB.whell + obA.whell)

obA.letGo()
wowA.letGo()
obA.carStop()