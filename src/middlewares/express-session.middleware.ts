import session from "express-session";

export default session({
    name: "session-cookie",
    secret: "secreto123",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: true, maxAge: 1000* (60 * 1000) },
  })