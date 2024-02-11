import UserSlip from "@/components/UserSlip";
export default function AdminPage() {
  return (
    <>
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
    </>
  )
}