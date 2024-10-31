function calculateTip(amount, rating) {
      switch(rating.toLowerCase()){
        case "excellent":
          return Math.ceil(amount*0.20);
        case "great":
          return Math.ceil(amount*0.15);
        case "good":
          return Math.ceil(amount*0.10);
        case "poor":
          return Math.ceil(amount*0.05);
        case "terrible":
          return 0;
        default:
          return "Rating not recognised";
      }
  }

//Use SpecRunner to check the Test Cases.