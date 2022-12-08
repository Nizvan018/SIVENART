import session from "express-session";
const MemoryStore = require('memorystore')(session);

export default session({
    name: "session-cookie",
    store: new MemoryStore({
      checkPeriod: 86400000
    }),
    secret: "secreto123",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 10* (60 * 1000) },
  })