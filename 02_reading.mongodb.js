use("ecommerce");

// db.products.find({"name" : "Wireless Mouse"})
// db.products.find({"category" : "Electronics"})

// db.products.find({price : {$lt:1000}})
// db.products.find({price : {$gt:1000}})

// db.products.find({price : {$gte:1000,$lte:50000}})

// db.products.find()

// db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })

// db.products.find({}, { name: 1, price: 1, _id: 0 })

// db.products.find().sort({ price: -1 }).skip(1).limit(1)

// we can skip 0 limit 10 then skip 10 limit 10 and skip 20 limit 10
// to store 10 per page