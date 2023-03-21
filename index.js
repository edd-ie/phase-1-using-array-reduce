const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries;

function reducer(arr){
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

totalBatteries = reducer(batteryBatches)