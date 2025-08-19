module.exports = {
  apps: [{
    name: "portal",
    script: "npm",
    args: "start",
    env: {
      "NODE_ENV": "development",
      "HTTPS": "true",
      "PORT": 7980,
      "HOST": "0.0.0.0"  // <-- Add this line
    }
  }]
};