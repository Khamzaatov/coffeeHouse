const Cofe = require('../models/Cofe.model')

module.exports.cofeController = {
 cofePost: (req, res) => {
    Cofe.create({
        name: req.body.name,
        price: req.body.price,
        inStock: req.body.inStock,
        isThereCaffeine: req.body.isThereCaffeine,
        volume: req.body.volume,
        description: req.body.description})
        .then((data) => {
            res.json(data)
        })
 },
 cofeAllGet : (req, res) => {
  Cofe.find({}).select("_id name price").then((data) => {
    res.json(data)
  })
},
 cofeDelete : (req, res) => {
   Cofe.findByIdAndRemove(req.params.id)
   .then(() => {
    res.json('Кофе удалён')
   })
 },
 cofePatch : async (req, res) => {
    try {
      const data = await Cofe.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        inStock: req.body.inStock,
        isThereCaffeine: req.body.isThereCaffeine,
        volume: req.body.volume,
        description: req.body.description
      })
       res.json(data)
    } catch (error) {
      res.json({ error: error.toString()})
    }
  },
  cofeGetId : (req, res) => {
    Cofe.findById(req.params.id)
    .then((data) => {
      res.json(data)
    }) 
  },
  cofeGetInstock : (req, res) => {
    Cofe.find({
      inStock : true
    }).then((data) => {
      res.json(data)
    })
  }
}
