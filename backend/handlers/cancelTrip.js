const trip = require('../../database/tripHelpers')
module.exports = (req, res) => {
  const data = Object.assign(req.payload, {user_id :req.state.sid.user_id} )
  trip.gettripbytime(data, (error, result) => {
    if (error)
    {
    // eslint-disable-next-line no-console
      console.log('get Trip by time Error :',error)
      return res().code(500)

    }
    if (result.rows.length > 0) {
      res({
        msg: 'You already Created trip before',
        statusCode:409
      })
    } else {
      trip.createtrip(data, (error, result) => {
        if (error)
          {
            // eslint-disable-next-line no-console
          console.log('createtrip Error :',error)
          return res().code(500)
        }
        res({
          msg: 'Your Trip Created Successfully',
          statusCode: 200
        })
      })
    }
  })
}
