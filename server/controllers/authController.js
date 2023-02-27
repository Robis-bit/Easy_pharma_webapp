const CLIENT_URL = "http://localhost:3000/";

exports.loginSuccess=(req,res)=>{
    if (req.user) {
        res.status(200).json({
          success: true,
          message: "successfull",
          user: req.user,
          //   cookies: req.cookies
        });
      }

}

exports.loginFailed=(req,res)=>{
    res.status(401).json({
        success: false,
        message: "failure",
      });
}


exports.logout=(req,res)=>{
    req.logout();
    res.redirect(CLIENT_URL);
}
