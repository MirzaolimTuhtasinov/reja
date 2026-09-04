const http = require("http");
const mongodb = require("mongodb");



let db;
const connectionString =
  "mongodb+srv://mirzaolimtoxtasinov8_db_user:IquZ6zIOqgYPjP6Y@cluster0.eg9hzcd.mongodb.net/REJA";




mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;  
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;

      server.listen(PORT, () => {
        console.log(
          `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);
