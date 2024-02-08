"use client"

import AllMoney from "@/components/AllMoney"
import { login } from "@/lib/login.action"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[80dvh]">
        <AllMoney />
        <div className="bg-primary-content p-3 rounded-md">
          <form action={login}>
            <h3 className="text-center">เข้าสู่ระบบ</h3>
            <div className="text-start">
              <label>Username</label>
              <input type="text" name="username" placeholder="กรอกรหัสนิสิต" className="input w-full max-w-xs" />
            </div>
            <div className="text-start">
              <label>Password</label>
              <input type="password" name="password" placeholder="กรอกรหัสผ่าน" className="input w-full max-w-xs" />
            </div>
            <div className="p-3 flex justify-between">
              <Link href="#" className="btn btn-outline">ลืมรหัสผ่าน</Link>
              <input className="btn btn-primary" type="submit" value="เข้าสู่ระบบ" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}