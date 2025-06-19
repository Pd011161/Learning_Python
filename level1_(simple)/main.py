from student_data import *

def show_students():
    print("\n📋 รายชื่อนักเรียนทั้งหมด:")
    for s in students:
        print(f"ID: {s['id']} - {s['name']} (Age: {s['age']}, Grade: {s['grade']})")

def add_student():
    name = input("📌 ชื่อ: ")
    while True:
        try:
            age = int(input("📌 อายุ: "))
            break
        except ValueError:
            print("❌ กรุณากรอกอายุเป็นตัวเลข!")

    while True:
        try:
            grade = int(input("📌 ชั้นปี: "))
            break
        except ValueError:
            print("❌ กรุณากรอกอายุเป็นตัวเลข!")

    new_id = students[-1]['id'] + 1 if students else 1
    new_student = {"id": new_id, "name": name, "age": age, "grade": grade}
    students.append(new_student)
    print("✅ เพิ่มนักเรียนเรียบร้อยแล้ว")

def delete_student():
    while True:
        try:
            delete_id = int(input("🗑️ ลบด้วย ID: "))
        except ValueError:
            print("❌ ID ต้องเป็นตัวเลข")
            continue

        for s in students:
            if s['id'] == delete_id:
                students.remove(s)
                print(f"✅ ลบนักเรียน ID {delete_id} สำเร็จ")
                return
            
        print("❌ ไม่พบนักเรียน ID นี้ กรุณาลองใหม่อีกครั้ง")
        
def show_students_older_than():
    while True:
        try:
            age_limit = int(input("🔍 แสดงนักเรียนที่อายุมากกว่า: "))
            break
        except ValueError:
            print("❌ กรุณากรอกอายุเป็นตัวเลข")

    result = [s for s in students if s['age'] > age_limit]
    print("\n👦 นักเรียนที่อายุมากกว่า", age_limit)
    for s in result:
        print(f"{s['name']} - {s['age']} years")

def show_average_age():
    if not students:
        print("⚠️ ไม่มีข้อมูลนักเรียน")
        return
    total_age = sum(s['age'] for s in students)
    avg = total_age / len(students)
    print(f"\n📊 อายุเฉลี่ยของนักเรียน: {avg:.2f} ปี")

def menu():
    while True:
        print("\n====== Student Manager ======")
        print("1. แสดงนักเรียนทั้งหมด")
        print("2. เพิ่มนักเรียน")
        print("3. ลบนักเรียน")
        print("4. แสดงนักเรียนที่อายุมากกว่ากำหนด")
        print("5. แสดงอายุเฉลี่ย")
        print("6. ออกโปรแกรม")

        choice = input("➡️ เลือกเมนู: ")
        if choice == "1":
            show_students()
        elif choice == "2":
            add_student()
        elif choice == "3":
            delete_student()
        elif choice == "4":
            show_students_older_than()
        elif choice == "5":
            show_average_age()
        elif choice == "6":
            print("👋 ออกโปรแกรมแล้ว")
            break
        else:
            print("❌ กรุณาเลือกเมนูให้ถูกต้อง (1-6)")

if __name__ == "__main__":
    print("✅ เริ่มรัน main.py แล้ว")
    menu()
