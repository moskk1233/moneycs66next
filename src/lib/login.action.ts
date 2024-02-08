"use server"

import { cookies } from "next/headers"
import { SignJWT } from "jose"
import secretKey from "./secretKey"
import { redirect } from "next/navigation"
import Swal from "sweetalert2"

export const login = async (formData: FormData) => {
  const username = formData.get("username")
  const password = formData.get("password")

  if (username === "66011212105" && password === "123456") {
    const payload = {
      username
    }
    
    const secretJWT = await secretKey()
    const jwtToken = await new SignJWT(payload)
      .setIssuedAt()
      .setExpirationTime("1h")
      .setProtectedHeader({ alg: "HS512" })
      .sign(secretJWT)

    cookies().set("_security", jwtToken)
    redirect("/profile")
  }
}