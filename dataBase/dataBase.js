const {Pool} = require("pg");

const pool = new Pool({
    user: "jloeyjft",
    host: "rogue.db.elephantsql.com",
    database: "jloeyjft",
    password: "qCKr3uItuTEIkTE06NqqfKKVENEBBXhb",
    port: 5432
});

module.exports = pool;