/////////////////////////////////////////////////////////////////
///////                problem -1                           ////
////////////////////////////////////////////////////////////////

function seerToMon(seer){
    //error handling conditions
    if(typeof seer != 'number'){
        return "Please enter a number";
    } 
    if( seer < 1){
        return "Please enter a positive number greater than 0 .";
    } 
    //unit convertion 
    const monUnit = 40;
    let  monProvided = seer / monUnit;
    return monProvided;
}
//assigning to a varible and calling the function
let gotCalcMon = seerToMon([44]);
console.log(gotCalcMon);