# 3.ชนิดข้อมูลแบบ dictionary
# ประกอบด้วยข้อมูลหลายข้อมูล
# ต้องเขียนใน {????}
# ข้อมูลแบบ dectionary จะอยู่ในรูปแบบ key : value
# โดย key จะต้องไม่ซ้ํากัน และเป็นได้แค่ string หรือ integer
# โดย value สามารถซ้ํากันได้ และเป็นข้อมูลอะไรก็ได้
# ทุก value สามารถเปลี่ยนค่าได้

listData1 = [10, 20, 30, 40, 10]
tupleData1 = (10, 20, 30, 40, 10)
setData1 = {10, 20, 30, 40, 10} # จะถือว่ามี 4 ข้อมูล
dictData1 = {'name': 'สมชาย',
            'age ' : 30,
            'is_student' : True,
            'score' : [80, 90, 100],
              111 : 'wow wow wow'}

print(dictData1['name'])
print(dictData1[111])
print(dictData1['score'][1])
dictData1['name'] = 'สมหญิง'
print(dictData1['name'])