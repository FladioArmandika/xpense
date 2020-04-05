
const Transaction   = require('../models/transaction')


exports.getTransaction = async (req,res,next) => {

    var request = {
        id: req.params.id
    }

    Transaction.findById({_id: request.id})
        .then((result) => {
            res.json(result)
        })
        .catch(e => console.log(err))

}


