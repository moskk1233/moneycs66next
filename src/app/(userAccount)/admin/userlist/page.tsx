function UserListPage() {
  const buttonList = [
    { name: "ทั้งหมด", type: "btn-primary" },
    { name: "จ่ายครบ", type: "btn-success" },
    { name: "ยังไม่ครบ", type: "btn-neutral" },
    { name: "ยังไม่จ่าย", type: "btn-error" },
  ]

  const nisitList = [
    {
      name: "นนท์ปวิธ โพธิ์นิล",
      id: "66011212105",
      balance: 200,
      email: "66011212105@msu.ac.th",
      social: "",
      tell: ""
    },
    {
      name: "นนท์ปวิธ โพธิ์นิล",
      id: "66011212105",
      balance: 200,
      email: "66011212105@msu.ac.th",
      social: "",
      tell: ""
    },
    {
      name: "นนท์ปวิธ โพธิ์นิล",
      id: "66011212105",
      balance: 200,
      email: "66011212105@msu.ac.th",
      social: "",
      tell: ""
    },
    {
      name: "นนท์ปวิธ โพธิ์นิล",
      id: "66011212105",
      balance: 200,
      email: "66011212105@msu.ac.th",
      social: "",
      tell: ""
    },
    {
      name: "นนท์ปวิธ โพธิ์นิล",
      id: "66011212105",
      balance: 200,
      email: "66011212105@msu.ac.th",
      social: "",
      tell: ""
    },
    {
      name: "นนท์ปวิธ โพธิ์นิล",
      id: "66011212105",
      balance: 200,
      email: "66011212105@msu.ac.th",
      social: "",
      tell: ""
    },
  ]
  
  return (
    <>
      <h1 className="text-2xl mb-3">ข้อมูลสมาชิก</h1>
      <div className="flex gap-3 flex-wrap">
        { buttonList.map((button, index) => (
          <button key={index} className={`btn ${button.type}`}>{ button.name }</button>
        )) }
      </div>
      <div className="flex flex-col gap-5 mt-5">
        { nisitList.map((nisit, index) => (
          <div key={index} className="border border-black p-2">
            <p>ชื่อ: { nisit.name }</p>
            <p>รหัสนิสิต: { nisit.id }</p>
            <p>เงินในระบบทั้งหมด: { nisit.balance }</p>
            <p>อีเมล: { nisit.email }</p>
            <p>เฟสบุ๊ค: { nisit.social }</p>
            <p>เบอร์โทร: { nisit.tell }</p>
          </div>
        )) }
      </div>
    </>
  )
}

export default UserListPage