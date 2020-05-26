
// forEach
const num = [1, 5, 6, 8, 56];
Array.prototype.copyForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}
num.copyForEach((ithem, i, num) => {
  num[i] = ithem + i;
})
// Map copy i pahe im mtacelov sxala
let numMap = [];
Array.prototype.copyMap = function(callback){
   for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}
num.copyMap((item, i , num) =>{
numMap[i] = num[i] * 2;
})
// Concat