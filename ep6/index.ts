console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

let sum: number = 0
let i : number = 1

while (i <= 31) {
    sum = sum + i 
    i++
}

console.log('Tota:',sum)

let count : number = 0

while (true) {
    console.log("โสดโว้ย")
    count++
    if (count === 10) {
        break
    }
}

for (let i = 1 ; i <= 19 ; i++) {
    console.log('ฉันอายุ' + i + 'ปี')
}


const cars : string[] = ['Toyota','Honda','Suzuki','Yamaha','Mazda','BYD']

for(let i = 0 ; i< cars.length ; i++) {
    console.log(cars[i])
}

const cars : string[] = ['Toyota','Honda','Suzuki','Yamaha','Mazda','BYD']

for(let i = 0 ; i< cars.length ; i++){
    if(cars[i] === 'Yamaha') {
        console.log('รถซื้อแกง จะแรงได้ไง')
    }
}

const str: string[] = ['ต้า' ,'พี','บัง', 'ว้า' ,'ฟิว' ,'อาร์ท']

for(let i =0 ; i< str.length ; i++ ){

    if(str[i] === 'พี') {
        console.log('ไปกินหมูทะกัน')
    }
}

const num:number[]= [1,2,3,4,5,6,7,8,9,10]

for(let i = 0 ; i<10 ; i++ ){
    console.log(num[i])

    if(num[i] === 3 || num[i]=== 5 ||num[i] ===  7){
        num[i]=0
    }
}

console.log(num)