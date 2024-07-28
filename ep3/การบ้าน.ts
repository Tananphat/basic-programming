function BMI ( height:number , weight:number ){
    let BMI:number =height/weight **2
}
function criterion  (height:number , weight: number){
    let BMI : number = height / weight **2 
    if (BMI <18.5) {
        return ( 'น้ำหนักน้อย=ความเสี่ยงต่อโรคมากกว่าคนปกติ ' )
    }else if (BMI >18.5 && BMI >22.9){
        return ( 'ปกติ=เท่าคนปกติ' )
    }else if (BMI >23 && BMI >24.9){
        return ( 'ท้วม=อันตรายระดับ1' )
    }else if (BMI >25 && BMI <29.9){
        return ( 'อ้วน=อันตราย2' )
    }else if (BMI <30 ){
        return ( 'อ้วนมาก=อันตราย3')
    }
}

console.log (BMI(1.74,55))
console.log (criterion(55,1.74))