
const rot = (req, res) => { 
    // res.send("ROOT")
    console.log("Host 접속")
    res.status(200).json({statusCode: 200,data:{token:"TODO"}});
}
  
  module.exports = { rot }; // signUp 함수를 module 로 내보낸다.