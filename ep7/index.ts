const score:number[]= [10,23,26,30,33]

let sum:number = 0

for (let i = 0 ; i < score.length ; i++) {
    sum = sum + score[i]
}

let avg = sum/score.length

console.log("Total:",sum)
console.log("avg:",avg)

const myStudents: string = "แซน,แทน,เวฟ,รุ้ง,เท็ก,สร"

const myStudentsArray: string[] = myStudents.split(',')

console.log(myStudents)
console.log(myStudentsArray[1])

const fullName: string = 'สุดสวย สวยสุด'

console.log(fullName.split(' ')[0])

console.log(fullName.slice(0, fullName.indexOf(' ')))

const animal: string = "ปลา*หมา*งู*มังกร"

const animalArray: string[] = animal.split('*')

console.log(animal)
console.log(animalArray[1])

animalArray.pop() //เอาตัวสุดท้ายออก

console.log("เอาตัวสุดท้ายออก:",animalArray)

animalArray.push('ปลาตีน') //ใส่ต่อท้าย

console.log("ใส่ต่อท้าย:",animalArray)

animalArray.shift() //เอาตัวหน้าออก

console.log("เอาตัวหน้าออก:",animalArray)

animalArray.unshift('สิงโต') //ใส่ต่อหน้า

console.log("ใส่ต่อหน้า:",animalArray)

const palm: string = "ต้า,อาร์ท,พี,ฟิว"

const palmArray: string[] = palm.split(',')

palmArray.sort()
palmArray.reverse()

console.log(palm)
console.log(palmArray)

const me = {
    firstName:'Tananphat',
    lastName:'TanegOn',
    age:19
}

//ประวัติส่วนตัว

//ชื่อ:Tananphat
//นามสกุล:TanegOn
//อายุ:19