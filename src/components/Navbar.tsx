import Link from "next/link"

export default function Navbar() {
  return (
    <>
      <div className="flex justify-center p-4 shadow shadow-white">
        <Link href="/" className="font-bold text-xl">
          IT CS Money
        </Link>
      </div>
    </>
  )
}