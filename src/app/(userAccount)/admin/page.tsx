import UserSlip from "@/components/UserSlip";
import Image from "next/image";

export default function AdminPage() {
  return (
    <main className="w-[90%] mx-auto md:grid md:grid-cols-4 md:gap-5">
      {/* Sidebar */}
      <div className="md:col-span-1 [&>*]:mt-3">
        <div className="">
          <button className="btn btn-primary w-full">โหลดสลิป</button>
        </div>
        <div>
          <button className="btn btn-primary w-full">รายรับ - รายจ่ายเพิ่มเติม</button>
        </div>
        <div>
          <button className="btn btn-primary w-full">ข้อมูลสมาชิก</button>
        </div>
        <div>
          <button className="btn btn-outline w-full">เปลี่ยนรหัสผ่าน</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-10 md:mt-0 border border-black shadow-md p-5 md:col-span-3">
        <div className="flex gap-1">
          <button className="btn btn-primary">โหลดสลิปใหม่</button>
          <button className="btn btn-warning">สลิปที่รอการยืนยัน</button>
        </div>

        <div className="mt-5 grid gap-3">
          <UserSlip 
            imgSrc="/slips/1.png"
            name="นนท์ปวิธ โพธิ์นิล"
            id="66011212105"
          />
          <UserSlip 
            imgSrc="/slips/1.png"
            name="นนท์ปวิธ โพธิ์นิล"
            id="66011212105"
          />
          <UserSlip 
            imgSrc="/slips/1.png"
            name="นนท์ปวิธ โพธิ์นิล"
            id="66011212105"
          />
          <UserSlip 
            imgSrc="/slips/1.png"
            name="นนท์ปวิธ โพธิ์นิล"
            id="66011212105"
          />
        </div>
      </div>
    </main>
  )
}