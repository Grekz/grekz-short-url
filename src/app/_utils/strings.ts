const POOL = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
export const generateRandomStr = (length: number = 6) => {
  let res = ""
  for (let i = 0; i < length; ++i) {
    res += POOL[getRandomInt()]
  }
  return res
}

export const getRandomInt = (max: number = 62) => Math.floor(Math.random() * max)
