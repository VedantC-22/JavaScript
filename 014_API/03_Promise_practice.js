let cart = [
    {
        name: "Samsung Galaxy",
        price: 52000,
        category: "Electornics"
    },
    {
        name: "Phone Cover",
        price: 500,
        category: "Accessories"
    },
    {
        name: "USB cable",
        price: 200,
        category: "Electornics"
    }
]


createOrder(cart)
.then(function (orderDetails) {
    console.log(`Order Id: ${orderDetails.orderId} Total: ${orderDetails.expense}`)
    return proceedToPayment(orderDetails);
})
.catch(function (error) {
    console.log(error)
})
.then(function (paymentDetails) {
    console.log(`Payment status: ${paymentDetails.paymentStatus}`)
    return showOrderSummary(paymentDetails);
})
.catch(function (error) {
    console.log(error)
})
.then(function (summary) {
    console.log(`${summary}`)
})


function createOrder(cart){
    let pr = new Promise(function (resolved, rejected){
        console.log("Order creating...");
        setTimeout(() => {
            if(cart.length == 0){
                rejected("Cart is empty, order can't be proceed.");
            }else{
                let orderId = Math.round(Math.random() * 10000 + 1);

                let total = 0;
                cart.forEach(element => {
                    total += element.price;
                });
                resolved({"orderId": orderId, expense: total});
            }
        }, 1000);
    });

    return pr;
}

 function proceedToPayment(order){
    console.log("Processing payment....");
    return  new Promise(function (resolved, rejected){
       setTimeout(() => {
        if(order){
            resolved({paymentStatus: "success", order: order})
        }else{
            rejected("Order id is missing.")
        }
       }, 2000);
    });
}

function showOrderSummary(paymentDetails){
    console.log("Order receipt");
    return new Promise(function (resolved, rejected){
        if (paymentDetails) {
            resolved(`OrderId: ${paymentDetails["order"].orderId} Payment Status: ${paymentDetails["paymentStatus"]}`)
        }
    });
}