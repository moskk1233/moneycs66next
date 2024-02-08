export default function PaymentCard({ 
  textcolor,
  bgcolor,
  paymentFull,
  payment,
  month
}: {
  textcolor: "text-red-500" | "text-green-500",
  bgcolor: "bg-red-500" | "bg-green-500",
  paymentFull: number,
  payment: number,
  month: string
}) {
  return (
    <div className="flex shadow-xl justify-between rounded-lg p-5 relative">
      <span className="">{ month }</span>
      <span className={`${textcolor}`}>{ payment } / { paymentFull }</span>
      <span className={`${bgcolor} absolute rounded-r-lg h-full pl-2 right-0 top-0`}></span>
    </div>
  )
}