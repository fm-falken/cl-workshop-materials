const http = require("http");

const requestOptions = {
  hostname: "asdkljadasfsdlkjh.com", // Either a nonexistent domain or mess up your resolver
  port: 80,
  path: "/",
  method: "GET",
};

const req = http.request(requestOptions, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log(data);
  });
});

req.on("error", (error) => {
  // console.error("Error:", error.message);
  console.error(error);
});

req.end();
