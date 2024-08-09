const str:string= 'นายธนภัทร แตงอ่อน'

console.log(str.slice(str.indexOf('แตงอ่อน'), str.indexOf('แตงอ่อน') + "แต่งอ่อน".length))

const ste:string= 'นายณัฐกานต์ เด็กติดเกม Roblox aka ทิวคุง'

console.log(ste.split(" "))

const stm: string = 'ยายแล่ม เมื่อตอนสาวๆ ผิวขา ตาคม ยายแล่ม'

console.log(stm.replace('ยายแล่ม' , 'โรนัลโด'))

const stt: string ='นายทดสอบ สุดหล่อ'


function getPrefix(palm:string) {
    if (palm.includes('นาย')){
         return 'นาย'
    } else if (palm.includes('นางสาว')) {
            return 'นางสาว'
    } else {
        return '_'
    }
}

console.log(getPrefix('นายธนภัทร แตงออ่น'))

const x: number =5 

let y: string = 'Hi'

var t: boolean = true

y = 'hello'

t = false

var t :boolean =false

function getName1(name: string){
    return name
}

function getName2(){
    return ''
}

function getName3(name:string){
    console.log(name)
}

function getName4(){
    console.log("MAX")
}