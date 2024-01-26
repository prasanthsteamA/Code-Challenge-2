    function calculateTip(amount, rating) {

        switch(rating) {
        case  "Terrible":
            return 0;
        case "Poor": 
            return Math.round((amount/100)*5);
        case "good": 
            return Math.round((amount/100)*10);
        case "great": 
            return Math.round((amount/100)*15);
        case "Excellent": 
            return Math.round((amount/100)*20);
        default: return "Rating not recognised";
    }
    
}
  

//Use SpecRunner to check the Test Cases.