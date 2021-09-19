/////////////////////////////////////////////////////////////////
///////                problem -3                            ////
//////////////////////////////////////////////////////////////// 

function deliveryCost(quantity){
//error handling conditions
    if(typeof quantity == 'string'){
        return "Don't use string, We need delivery quantity in numbers";
    } 
    if(quantity < 1){
        return "Please enter a positive number greater than 0 . You have to order for at least a product.";
    } 
    if(typeof quantity == 'object'){
        return " You have to put it one by one and in numbers. ";
    }
    // assigning the cost of a certain amout of t-shirt shipping
    const withIn100ShipmentCost = 100;
    const from101To200ShipmentCost = 80; 
    const over200TshirtShipmentCost = 50;
    //if customer shipping less or equal 100 t-shirts
    if( quantity <= 100){
        const shippingCost = quantity * withIn100ShipmentCost;  
        return shippingCost;
    }
    //if customer shipping less or equal 200 t-shirts
    else if (quantity <= 200){
        const first100TshirtCost = 100 * withIn100ShipmentCost;
        const restOver100Tshirt = quantity - 100;
        const over100to200TshirtCost = restOver100Tshirt * from101To200ShipmentCost;
        const total200TshirtCost = first100TshirtCost + over100to200TshirtCost;
        return total200TshirtCost;
    }
    //if customer shipping more than 200 t-shirts  
    else{
        const first100TshirtCost = 100 * withIn100ShipmentCost;
        const over100to200TshirtCost = 100 * from101To200ShipmentCost;
        const restOver200Tshirt = quantity - 200;
        const over200TshirtCost = restOver200Tshirt * over200TshirtShipmentCost;
        const totalCostOver200Tshirt = first100TshirtCost + over100to200TshirtCost + over200TshirtCost;
        return totalCostOver200Tshirt;
    }
}
//calling deliveryCost function form outside the scope for user to input
const totalTshirtCost = deliveryCost(-555);
console.log(totalTshirtCost);