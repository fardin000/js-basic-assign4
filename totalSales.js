/////////////////////////////////////////////////////////////////
///////                problem -2                            ////
////////////////////////////////////////////////////////////////

function totalSales(shirtQuantity, pantQuantity, shoeQuantity){
    //error handling conditions
    if(typeof shirtQuantity == 'string'){
        return "Don't use string, We need shirt delivery quantity in numbers";
    } 
    if(shirtQuantity < 1){
        return "Please enter a positive number greater than 0 . You have to order for at least a shirt.";
    } 
    if(typeof shirtQuantity == 'object'){
        return " You have to put it for one shirt one by one and in numbers. ";
    }
    if(typeof pantQuantity == 'string'){
        return "Don't use string, We need pant delivery quantity in numbers";
    } 
    if(pantQuantity < 1){
        return "Please enter a positive number greater than 0 . You have to order for at least a pant.";
    } 
    if(typeof pantQuantity == 'object'){
        return " You have to put it for pant one by one and in numbers. ";
    }
    if(typeof shoeQuantity == 'string'){
        return "Don't use string, We need shoe delivery quantity in numbers";
    } 
    if(shoeQuantity < 1){
        return "Please enter a positive number greater than 0 . You have to order for at least a shoe.";
    } 
    if(typeof shoeQuantity == 'object'){
        return " You have to put it for shoe one by one and in numbers. ";
    }
    const perShirt = 100;
    const perPant = 200;
    const perShoe = 500;
    const shirtSold = shirtQuantity * perShirt;
    const pantSold = pantQuantity * perPant;
    const shoeSold = shoeQuantity * perShoe;
    const totalCost = shirtSold + pantSold + shoeSold;
    return totalCost; 
 }
const salesReturn = totalSales( 0, 1, 1);
console.log(salesReturn);
