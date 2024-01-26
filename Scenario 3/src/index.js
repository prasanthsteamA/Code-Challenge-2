
const quarterOf = (month) => {
    //your code here
    if(month>=1 && month<=3){
      return 1;
    }
    else if(month>=4 && month<=6){
      return 2;
    }
    else if(month>=7 && month<=9){
      return 3;
    }
    else if(month>=9 && month<=12){
      return 4;
    }
    else{
      return "Invalid month";
    }
  }

//Use SpecRunner to check the Test Cases.