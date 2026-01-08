use("ecommerce")

// db.contacts.deleteOne({name:'Alice'})

// db.orders.deleteMany({status:'Delivered'})

// db.products.createIndex({name:1})

// db.products.getIndexes()

// db.products.find({ price: { $gt: 5000 } }).explain("executionStats")


// db.orders.aggregate([
//     { $group: { _id: null, totalRevenue: { $sum: "$total" } } }
//     ])

// db.orders.aggregate([
//     { $group: { _id: "$status", totalOrders: { $sum: 1 } } }
//     ])

db.orders.aggregate([
    {
    $lookup: {
    from: "products",
    localField: "products.name",
    foreignField: "name",
    as: "productDetails"
    }
    }
    ])