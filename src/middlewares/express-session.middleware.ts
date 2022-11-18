import session from "express-session";

export default session({
    
    secret: "secreto123",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: false, maxAge: 1000 * 60 * 60 },
  })