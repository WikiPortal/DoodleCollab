const rateLimit = require("express-rate-limit");

const registerLimiter = rateLimit({
  // 15 minutes
  windowMs: 15 * 60 * 1000,
  // maximum 20 requests per 15 minutes
  max: 20,
});

module.exports = { registerLimiter };
