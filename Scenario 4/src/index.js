function calculateTip(amount, rating) {
    if(rating == "Terrible"){
        return 0;
    }
    else if(rating == "Poor"){
        return Math.round((amount/100)*5);
    }
    else if(rating == "good"){
        return Math.round((amount/100)*10);
    }
    else if(rating == "great"){
        return Math.round((amount/100)*15);
    }
    else if(rating == "Excellent"){
        return Math.round((amount/100)*20);
    }
    else{
        return "Rating not recognised";
    }
}
  

//Use SpecRunner to check the Test Cases.