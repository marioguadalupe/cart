var React = require('react');
var Total = require('./Total')

function totalAdd(price){
    var value = Total.totalPrice + price
    return Total.totalPrice = value
}

module.exports = totalAdd;