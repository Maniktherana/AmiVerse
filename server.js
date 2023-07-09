const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(
  "/api",
  createProxyMiddleware({
    target: "https://amizone.fly.dev",
    changeOrigin: true,
  })
);

app.listen(3000, () => {
  console.log("Proxy server is running on http://localhost:3000");
});
