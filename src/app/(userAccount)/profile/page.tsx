"use client"

import PaymentCard from "@/components/PaymentCard"
import Image from "next/image"
import { Link as ScrollLink } from "react-scroll"
import { ChangeEvent, useState } from "react"
import { logout } from "@/lib/logout.action"

function SlipImage({ url }: { url: string }) {
  return (
    <Image src={url} alt="" width={250} height={1}/>
  )
}

export default function ProfilePage() {
  
  const [isCopy, setIsCopy] = useState(false)
  const [slipImage, setSlipImage] = useState("")

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0]

    if (file) {
      const blob = new Blob([file], { type: file.type })
      const url = URL.createObjectURL(blob)
  
      setSlipImage(url)
    } else {
      setSlipImage("")
    }

  }
  
  const copyToClip = () => {
    setIsCopy(true)
    window.navigator.clipboard.writeText("5104594090")
  }

  const paymentHistory = [
    { month: "ม.ค. 2567", paymentFull: 50, payment: 0 },
    { month: "ธ.ค. 2566", paymentFull: 50, payment: 0 },
    { month: "พ.ย. 2566", paymentFull: 50, payment: 0 },
    { month: "ต.ค. 2566", paymentFull: 100, payment: 0 },
    { month: "ก.ย. 2566", paymentFull: 100, payment: 100 },
    { month: "ส.ค. 2566", paymentFull: 100, payment: 100 }
  ]
  
  return (
    <main className="grid gap-10">
      <div className="grid gap-5 justify-center">
        <ScrollLink 
          to="slipInput" 
          className="scroll-smooth"
          smooth={true}
          duration={500}
        >
          <button className="btn btn-primary">
              ส่งสลิปโอนเงิน
          </button>
        </ScrollLink>
        <button className="btn btn-error" onClick={async() => await logout()}>ออกจากระบบ</button>
      </div>

      <div className="min-w-96 shadow-md mx-auto p-5">
        <div>
          <h1 className="text-2xl">ข้อมูลส่วนตัว</h1>
        </div>
        <div className="grid">
          <span>ชื่อ: นนท์ปวิธ โพธิ์นิล</span>
          <span>รหัสนิสิต: 66011212105</span>
          <span>เงินในระบบ: 100/450 บาท</span>
          <span className="border rounded-lg p-1 text-center bg-error text-white">ยอดค้างจ่าย: 350 บาท</span>
          <button className="btn btn-info max-w-40 mx-auto mt-5">เปลี่ยนรหัสผ่าน</button>
        </div>
      </div>

      <div className="grid justify-center">
        <div>
          <p className="text-center text-2xl font-bold">
            ประวัติการเงิน
          </p>
        </div>
        <div className="grid gap-5 min-w-96">
          { paymentHistory.map((payment, index) => (
            <PaymentCard key={index} 
              textcolor={
                payment.payment !== payment.paymentFull
                ? "text-red-500"
                : "text-green-500"
              }
              bgcolor={ 
                payment.payment !== payment.paymentFull
                ? "bg-red-500"
                : "bg-green-500"
              }
              month={payment.month}
              payment={payment.payment}
              paymentFull={payment.paymentFull}
            />
          )) }
        </div>
      </div>

      <div className="grid justify-center">
        <div>
          <p className="text-center text-2xl">แบบฟอร์มชำระเงิน</p>
        </div>
        <div>
          <Image src="/scb.jpg" alt="" width={400} height={1} />
        </div>
        <div className="grid gap-5 justify-center my-5">
          <button className={`btn ${isCopy ? "btn-active" : "btn-primary"} w-full`} onClick={copyToClip}>
            { isCopy
            ? "ก็อปสำเร็จ!"
            : "ก็อปปี้เลขบัญชี"
            }
          </button>
          <input type="file" className="file-input file-input-bordered w-full max-w-xs" id="slipInput" accept="image/png, image/jpeg" onChange={handleInputChange}/>

          <div className="flex justify-center">
            { slipImage
              ? <SlipImage url={slipImage}/>
              : null
            }
          </div>

          <div className="justify-self-center">
            <button className="btn btn-success">ยืนยันการโอน</button>
          </div>
        </div>
      </div>
    </main>
  )
}