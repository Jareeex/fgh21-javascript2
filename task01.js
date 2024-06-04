function data() {
    const testNum = ['1','2','3']; 
    return testNum;
}
let data2 = data();
console.log(typeof data2); 
console.log(data2.includes('1')); 
const total = 10 + data2;
console.log (total); 
console.log (data2.indexOf('1')); 
let data3 = data();
data3.push('4');
console.log(data3);
let data4 = data();
data4.pop();
console.log(data4);
let data5 = data();
data5.shift();
console.log(data5);
let data6 = data();
data6.unshift('0');
console.log(data6);
const data7 = data();
data7.slice(0,1);
console.log(data7);
const data8 = data();
data8.splice(1,1);
console.log(data8); 