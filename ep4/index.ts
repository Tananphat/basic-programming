function sayHi(dayofWeek: number) {
    if (dayofWeek === 1 ) {
        console.log('สวัสดีวันอาทิตย์')
    }else if (dayofWeek === 2) {
        console.log('สวัสดีวันจันทร์')
    }else if (dayofWeek === 3) {
        console.log('สวัสดีวันอังคาร')
    }else if (dayofWeek === 4) {
        console.log('สวัสดีวันพุธ')
    }else if (dayofWeek === 5) {
        console.log('สวัสดีวันพฤหรัสดี')
    }else if (dayofWeek === 6) {
        console.log('สวัสดีวันศุกร์')
    }else if (dayofWeek === 7) {
        console.log('สวัสดีวันเสาร์')
    
        }
    }

sayHi(4)

function sayOi(dayOfWeek:number){
    switch(dayOfWeek){
        case 1 :
            console.log('สวัสดีวันอาทิตย์')
            break
        case 2 :
            console.log('สวัสดีวันจันทร์')
            break
        case 3 :
            console.log('สวัสดีวันอังคาร')
            break
        case 4 :
            console.log('สวัสดีวันพุธ')
            break
        case 5 :
            console.log('สวัสดีวันพฤหรัสดี')
            break
        case 6 :
            console.log('สวัสดีวันศุกร์')
            break
        case 7 :
            console.log('สวัสดีวันเสาร์')
            break
        default:
            console.log('มีแค่7วันนายใส่เกินและ')
            break

        }
    }

sayOi(5)


function shirt(shirtSize:string){
    switch(shirtSize) {
        case 's' :
            console.log('ผอม')
            break
        case 'm' :
            console.log('ผอม')
            break
        case 'l' :
            console.log('ท้วม')
            break
        case 'xl' :
            console.log('อ้วน')
            break
        case '2xl' :
            console.log('อ้วน')
            break
        default:
            console.log('มีแค้ไซล์แค่นี้อย่าเยอะ')
            break

        }
    }

shirt('2')

function fixedDecimal( n: number , digit: number ) {
    const x = n.toFixed(digit)
    return x 
}

console.log(fixedDecimal(404.546,1))

function toCurren ( a : number ) {
    return a . toLocaleString()
}

console.log(toCurren(10000))

const str : string = "Hello"

console.log (str.length)

const ste: string = "สวัสดีชาวโลก"

console.log (ste.charAt(3))

const sta: string = " ณเดชณ์ คุคิ งุงิ "

console.log (sta.trim())

const stq: string = "Tananphat"

console.log(stq.toLowerCase())


function checkStringLength (l:string){
    console.log(l.length)
}
checkStringLength("สวัสดีชาวโลกที่ใช้อากาศประเทศไทยหายใจ ")

function goToHome ( e:string , x:number ) {
    return e.charAt(x)
}

console.log(goToHome('ง่วงนอนจัด',3))


const str: string = 'อยากกลับบ้านจัด'

console.log(str.includes('ไม่ได้กลับ'))

function typeScript ( h: string , k :string ) {
    if (h.includes(k)) {
        console.log(h.indexOf(k))
        }else {
            console.log('ไม่พบคำที่ค้นหา')
        }
    }
typeScript('อยากกลับ Home','m')