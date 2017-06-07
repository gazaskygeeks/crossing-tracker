const trip = require('../../database/tripHelpers');
module.exports = (req, res) => {
  var details = [];
  if (!req.payload) {
    return res().code(400)

  }
  const from = req.payload.from;
  const to = req.payload.to;
  const date = req.payload.date;
  if (!from && !to) {
    trip.getAllTrips((error, result) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log('get Trip By Date Error :', error)
        return res().code(500)

      }
      trip.getTripByDate(date, (error, result1) => {
        if (error) {
          // eslint-disable-next-line no-console
          console.log('get Trip By Date Error :', error)
          return res().code(500)
        }
        res({
          filter: result.rows,
          details: result1.rows
        })
      })

    })
  }
  //*********************************************************************
  else if (from && to) {
    trip.getTripFromTo([from, to], (error, result) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log('get Trip From To Error :', error)
        return res().code(500)
      }
      if (result.rowCount > 0) {
        result.rows.map((item) => {
          trip.getTripByDate(item.date, (error, result1) => {
            if (error) {
              // eslint-disable-next-line no-console
              console.log('get Trip By Date Error :', error)
              return res().code(500)
            }
            details = details.concat(result1.rows[0])
            result.rowCount--;
            if (result.rowCount === 0) {
              res({
                filter: result.rows,
                details: details
              });
            }
          })
        }) // end map
      } else {
        res({
          filter: [],
          details: []
        });
      }
    })
  } //end else if (from&&to)
  //*************************************************
  else if (from) {
    trip.getTripFrom([from], (error, result) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log('get Trip From  Error :', error)
        return res().code(500)
      }
      result.rows.map((item) => {
        trip.getTripByDate(item.date, (error, result1) => {
          if (error) {
            // eslint-disable-next-line no-console
            console.log('get Trip By Date Error :', error)
            return res().code(500)
          }
          details = details.concat(result1.rows[0])
          result.rowCount--;
          if (result.rowCount === 0) {
            res({
              filter: result.rows,
              details: details
            });
          }
        })
      }) // end map
    })

  } //**********************************************************************
  else if (to) {
    trip.getTripTo([to], (error, result) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log('get Trip To Error :', error)
        return res().code(500)
      }
      result.rows.map((item) => {
        trip.getTripByDate(item.date, (error, result1) => {
          if (error) {
            // eslint-disable-next-line no-console
            console.log('get Trip By Date Error :', error)
            return res().code(500)
          }
          details = details.concat(result1.rows[0])
          result.rowCount--;
          if (result.rowCount === 0) {
            res({
              filter: result.rows,
              details: details
            });
          }
        })
      }) // end map
    })
  }
}
