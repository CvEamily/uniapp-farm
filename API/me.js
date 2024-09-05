export const  registerFun = (host,userAccount, userPassword,checkPassword) => {
  return uni.$http.post(host, {userAccount, userPassword,checkPassword})
}
export const  loginFun = (host,userAccount, userPassword,checkPassword) => {
  return uni.$http.post(host, {userAccount, userPassword,checkPassword})
}
