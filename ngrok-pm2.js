const ngrok = require("ngrok");

(async function () {
  const url = await ngrok.connect({
    addr: 7980,
    region: "us",
  });

  console.log(`Ngrok Tunnel Started: ${url}`);
})();
