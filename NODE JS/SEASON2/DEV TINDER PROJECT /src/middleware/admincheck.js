const admincheck = (req ,res , next) => {
  const token = "abcde" ; 
  const pass = "abcde" ; 
  if(token != pass){
    res.send(" try again , enter the correct pass ")
  }
  else{
    next() ; 
  }
}

module.exports = {
  admincheck,
}