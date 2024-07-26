function grade(homeWork: number,midterm: number,final:number){
    let score:number = homeWork + midterm + final
    if (score<60) {
        return 'เกรด D'
    }else if (score<70) {
        return 'เกรด C'    
    }else if (score<80) {
        return 'เกรด B'
    }else{
        return'เกรด A'
    }
}


console.log(grade(100,100,100))

function helloWorld() {
    console.log("สวัสดี")
}

helloWorld()

function helloName(name:string) {
    console.log(name)
}
helloName('Max')

function getPi() {
    return 3.14
}

console.log(getPi())


function st(fname: string, sname:string) {
    
    if (fname === 'six' && sname === 'zane') {
        console.log('เริ่มสอน')
    }else{
        console.log('ไม่สอน')
    }
}
st('mix','zame')


function sr(fname:string,sname:string,nameG:string){
    if(fname === 'six' && sname === 'zane'|| nameG ==='forth' ){
        console.log('พร้อมเรียน')
    }else{
        console.log('ยังไม่พร้อม')
    }
}
sr('mix','zane','forth')


function er(sex:string,height:number,weight:number){
    if(sex === 'ชาย' && (height  > 170 || weight > 50  && weight <= 110))  {
        console.log("จับใบดำใบแดง")
    }else{
        console.log("ไม่เข้าเกณฑ์")
    }
}
er('sex',170,50)

function ps(age:number , salary:number , deposit:number ){
    if(age >= 16 && (salary < 70000 && deposit < 500000)) {
        console.log(" รับ10000บาท ")
    }else{
        console.log("อด.....")
    }
}
ps(16,70000,500000)