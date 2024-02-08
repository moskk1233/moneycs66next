import Link from "next/link"

export default function Footer() {
  const version: string = process.env.npm_package_version!
  const reasonList = ["เอาไว้ใช้ในกิจกรรม", "ทัศนศึกษา", "รายการอื่นๆที่จำเป็น"]
  const followList = ["เงินจะเก็บไว้ที่เหรัญญิก ไนท์ และ พล", "จะมีการแจ้งยอดเงินทุกครั้ง ในแต่ละเดือน", "จะมีการแจ้งยอดรายจ่ายและรายรับต่างๆทุกครั้ง"]
  const treasurers = [
    { name: "พล", link: "https://www.facebook.com/timganez/" },
    { name: "ไนท์", link: "https://www.facebook.com/profile.php?id=100016270031169" }
  ]
  const developers = [
    { name: "พล", link: "https://www.facebook.com/timganez/" },
    { name: "มอส", link: "https://www.facebook.com/Nonpawit.Mos" }
  ]
  
  return (
    <footer className="max-w-[80%] mx-auto gap-8 grid">

      <div className="flex justify-center">
        <p>
          แบบฟอร์มบันทึกการเก็บเงิน รายบุคคลคณะวิทยาการสารสนเทศ สาขาวิทยาการคอมพิวเตอร์ปีการศึกษา 2566
        </p>
      </div>

      <div>
        <div className="mx-auto md:flex md:justify-between max-w-[80%]"> 
          <div>
            <div className="text-lg font-bold">
              ทำไมถึงเก็บตัง ?
            </div>
            <div>
              <ul>
                { reasonList.map((reason, index) => (
                  <li key={index} className="list-disc">{ reason }</li>
                )) }
              </ul>
            </div>
          </div>

          <div>
            <div className="text-lg font-bold">
              จะติดตามยอดเงินยังไง ?
            </div>
            <div>
              <ul>
                { followList.map((follow, index) => (
                  <li key={index} className="list-disc">{ follow }</li>
                )) }
              </ul>
            </div>
          </div>    
        </div>
      </div>

      <div className="grid justify-center gap-3">
        <div>
          <p className="text-center">เหรัญญิก</p>
          <p>หากลืมรหัสผ่านหรืออื่นๆ ติดต่อได้ที่</p>
        </div>
        <div className="flex gap-6 justify-center">
          { treasurers.map((treasurer, index) => (
            <button key={index} className="btn btn-primary">
              <Link href={treasurer.link} target="_blank">{ treasurer.name }</Link>
            </button>
          )) }
        </div>
        <div className="text-center">
          เว็บนี้อยู่ในเวอร์ชั่น: <span className="font-bold">{ version }</span>
        </div>
        <div className="text-center">
          <p>ติดต่อผู้พัฒนาได้ที่</p>
          <div className="flex gap-5 justify-center">
            { developers.map((developer, index) => (
              <button key={index} className="btn btn-outline">
                <Link href={developer.link}>{ developer.name }</Link>
              </button>
            )) }
          </div>
        </div>
      </div>

    </footer>
  )
}