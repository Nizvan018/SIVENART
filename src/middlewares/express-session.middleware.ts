import session from "express-session";

export default session({
    name: "session-cookie",
    secret: "secreto123",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 1000* (60 * 1000) },
  })
