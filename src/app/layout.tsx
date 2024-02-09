import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "เว็บเก็บเงิน CS จามรี 13",
  description: "เว็บนี้เป็นเว็บเกี่ยวกับการเก็บเงินของคณะวิทยาการสารสนเทศ สาขาวิทยาการคอมพิวเตอร์ ของรุ่นจามรี 13"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
