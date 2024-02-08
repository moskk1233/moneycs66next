import { importJWK } from "jose"

const secretJWK = {
  kty: "oct",
  k: process.env.JWTSECRETKEY
}

const secretKey = async () => {
  const key = await importJWK(secretJWK, "HS256")
  return key
}

export default secretKey