## Info
 Node.js, express.js, MongoDB, server for sign up and logins with Mongoose and bcrypt.
 
## Run
1. Clone repository
2. Open in terminal
3. npm install
4. Connect Mongodb Cluster from Atlas
5. node server.js
 
 ## Sign up
To sign up in another terminal send POST request:  curl -d "email=email1@isa.utm.md&username=user1&password=pasword111" -X POST http://localhost:8080/signup/

 
 ## Login
To login in another terminal send POST request: curl -d "username=user1&password=pasword111" -X POST http://localhost:8080/signup/
