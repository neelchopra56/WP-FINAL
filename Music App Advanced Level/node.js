const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

// Setting up express js API
const app = express()
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(bodyParser.json());

// MySQL Connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tunetown',
    port: 3306
});
conn.connect((err) => {
    if(err) {
        res.write(err);
    }
    console.log("Database connected");
});

// API Functions
app.post("/login", (req, res) => {
    const user = req.body;
    const query = "select * from users";
    conn.query(query, (err, result) => {
        if(err) {
            console.log('Error in Getting All');
            res.write(err);
        }
        if(Object.keys(result).length === 0) {
            res.write("<html>\
                <script>window.open('http://127.0.0.1:5501/Music%20App%20Advanced%20Level/login.html', '_self'); alert('No Registered User Found!');</script>\
            </html>");
        }
        else {
            for(const users in result) {
                if(result[users]["username"] == user["username"] && result[users]["password"] == user["password"]) {
                    res.write("\
                    <html>\
                        <script>window.open('http://127.0.0.1:5501/Music%20App%20Advanced%20Level/index.html', '_self'); alert('Login Successful!');</script>\
                    </html>\
                    ")
                    return;
                }
            }
            res.write("<html>\
                <script>window.open('http://127.0.0.1:5501/Music%20App%20Advanced%20Level/login.html', '_self'); alert('No Registered User Found!');</script>\
            </html>");
        }
    });
});

app.post("/register", (req, res) => {
    const user = req.body;
    if(user["password"] == user["confirm"]) {
        let query = "select * from users";
        conn.query(query, (err, result) => {
            if(err) {
                res.write(err);
            }
            if(Object.keys(result).length === 0) {
                query = "insert into users values('" + user["username"] + "', '" + user["email"] + "', '" + user["password"] + "')";
                conn.query(query, (err, result) => {
                    if(err) {
                        res.write(err);
                    }
                    res.write("\
                        <html>\
                            <script>window.open('http://127.0.0.1:5501/Music%20App%20Advanced%20Level/login.html', '_self'); alert('User Registered!');</script>\
                        </html>\
                    ")
                });
            }
            else {
                for(const users in result) {
                    if(result[users]["username"] == user["username"]) {
                        res.write("\
                        <html>\
                            <script>window.open('http://127.0.0.1:5501/Music%20App%20Advanced%20Level/signup.html', '_self'); alert('Username Taken!');</script>\
                        </html>\
                    ")
                        return;
                    }
                }
                query = "insert into users values('" + user["username"] + "', '" + user["email"] + "', '" + user["password"] + "')";
                    conn.query(query, (err, result) => {
                        if(err) {
                            throw err;
                        }
                        res.write("\
                            <html>\
                                <script>window.open('http://127.0.0.1:5501/Music%20App%20Advanced%20Level/login.html', '_self'); alert('User Registered!');</script>\
                            </html>\
                        ")
                    });
            }
        });
    }

});

// App listener
app.listen(3000, (err) => {
    if(err) {
        throw err;
    }
    console.log("Listening on port 3000");
});