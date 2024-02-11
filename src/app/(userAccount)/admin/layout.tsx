import Link from "next/link"

function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathList = [
    { name: "โหลดสลิป", path: "/admin"},
    { name: "รายรับ - รายจ่ายเพิ่มเติม", path: "#"},
    { name: "ข้อมูลสมาชิก", path: "/admin/userlist"},

  ]

  return (
    <main className="w-[90%] mx-auto md:grid md:grid-cols-4 md:gap-5">
      {/* Sidebar */}
      <div className="md:col-span-1 [&>*]:mt-3">
        { pathList.map((path, index) => (
          <div key={index}>
            <Link href={path.path}>
              <button className="btn btn-primary w-full">{ path.name }</button>
            </Link>
          </div>
        )) }
        <div>
          <Link href="/admin/edit">
            <button className="btn btn-outline w-full">เปลี่ยนรหัสผ่าน</button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-10 md:mt-0 border border-black shadow-md p-5 md:col-span-3">
        { children }
      </div>
    </main>
  )
}

export default AdminLayout