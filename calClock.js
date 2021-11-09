var readlineSync = require('readline-sync')
var hour = readlineSync.question('Hour?')
var min = readlineSync.question('Minute?')

console.log(hour + '시' + min + '분')

//const hour = 4
//const min = 47

//시침의 각도
let hourD = (360 / 12) * hour

//분침의 각도
const minD = (360 / 60) * min

console.log('시침 ' + hourD + '도', '분침 ' + minD + '도')

//분에 따른 시침의 추가적인 이동
const extra = (30 / 60) * min

hourD += extra

console.log('시침 추가이동 ' + hourD+ '도', '분침 ' + minD + '도')

let gap = hourD - minD

if(minD>hourD){
    gap = minD - hourD
}
if(gap>180){
    gap = 360 - gap
}

console.log(gap)