import Image from "next/image";

export default function UserSlip({
  imgSrc,
  id,
  name
} : {
  imgSrc: string,
  id: string,
  name: string
}) {
  return (
    <div className="border border-primary shadow-lg p-5 grid md:grid-cols-2 justify-center">
      <div>
        <Image src={imgSrc} alt="" width={200} height={1}/>
      </div>

      <div className="mt-5 md:mt-0">
        <p>ID: { id }</p>
        <p>Name: { name }</p>
        <p>จำนวนเงิน <input type="number" defaultValue={0} className="border border-black p-1" /></p>
        
        <div className="flex gap-5 mt-4">
          <button className="btn btn-success">ยืนยันสลิป</button>
          <button className="btn btn-error">ลบสลิป</button>
        </div>
      </div>
    </div>
  )
}