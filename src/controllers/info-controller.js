const info = (req, res) => {
  res.json({
    success: true,
    message: " api is alive",
    error: {},
    data: {},
  });
};

module.exports = {
  info,
};