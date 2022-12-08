import session from "express-session";
const MemoryStore = require('memorystore')(session);

export default session({
    name: "session-cookie",
    secret: "secreto123",
    store: new MemoryStore({
        checkPeriod: 10 * (60 * 1000)
    }),
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 10* (60 * 1000) },
  })
