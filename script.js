
const mark={
    fullName:"Mark Miller",
    Mass:"82",
    height:"1.62",
    calcBMI:function(){
         this.bmi = this.Mass/(this.height*this.height)
        return this.bmi;
    }

}



const john={
    fullName:"John Smith",
    Mass:"92",
    height:"1.60",
    calcBMI:function(){
        this.bmi = this.Mass/(this.height*this.height)
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();


if(mark.bmi>john.bmi){
    console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s BMI of ${john.bmi}`)
}
else if(john.bmi>mark.bmi){

    console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s BMI of ${mark.bmi}`)

}

