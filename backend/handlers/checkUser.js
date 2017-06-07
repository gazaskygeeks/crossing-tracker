module.exports = (req, res) => {
  if (req.state) {
    res(req.state.sid.user_type)
  } else {
    res({
      msg: 'Not authorized'
    }).code(302)
  }
}
