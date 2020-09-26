module.exports = {
    NewCarMidleware: (req, res, next) => {
        try {
  const obj = req.body

            if (obj.price < 120) {
                throw new Error('your price < 120')
            }
          if (obj.year < 1854 || obj.year > 2021) {
              throw new Error('you enter UNcurrent year')
          }

          next();
        }
        catch (e) {
            return res.status(400).end(e.message)
        }
    }
}
