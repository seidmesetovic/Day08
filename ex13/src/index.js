function randomRangeNumber(minNumber,maxNumber){
    var a = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    console.log(a);
}
randomRangeNumber(13,20);
module.exports = randomRangeNumber;