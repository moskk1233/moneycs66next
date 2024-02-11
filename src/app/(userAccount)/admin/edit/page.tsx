function EditPage() {
  return (
    <div className="md:w-[50%]">
      <div className="mb-3">เปลี่ยนรหัสผ่าน Admin</div>
      <div className="[&>div]:mb-4">
        <div className="flex flex-col">
          <label htmlFor="oldPwd">รหัสผ่านเดิม</label>
          <input id="oldPwd" type="password" className="border shadow-md rounded-lg px-2 py-1" />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="newPwd">รหัสผ่านใหม่</label>  
          <input id="newPwd" type="password" className="border shadow-md rounded-lg px-2 py-1" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="confirmNewPwd">ยืนยันรหัสผ่าน</label>
          <input id="confirmNewPwd" type="password" className="border shadow-md rounded-lg px-2 py-1" />
        </div>
      </div>
      <button className="btn btn-success">ยืนยัน</button>
    </div>
  )
}

export default EditPage