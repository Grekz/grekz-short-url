"use server"

import prisma from "@/lib/prisma"
import { MAX_ATTEMPTS } from "../_constants/configs"
import { generateRandomStr } from "../_utils/strings"

export const shortUrl = async (formData: FormData) => {
  const link = formData.get("link")?.toString() || ""
  let attempts = 0
  let candidate
  while (attempts < MAX_ATTEMPTS) {
    ++attempts
    candidate = generateRandomStr()
    const data = { long: link, short: candidate }
    console.log({ data })
    try {
      await prisma.shortUrl.create({ data })
      break
    } catch (error) {
      console.log({ error })
    }
  }
  if (attempts == MAX_ATTEMPTS) {
    throw new Error("Cannot create url!")
  }
  return { candidate }
}
