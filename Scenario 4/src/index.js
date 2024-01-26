function calculateTip(amount, rating) {
    //your code here
    switch(rating.toLowerCase()){
      case "terrible":
        return Math.ceil(0 * amount);

      case "poor":
        return Math.ceil(0.05 * amount);

      case "good":
        return Math.ceil(0.1 * amount);

      case "great":
        return Math.ceil(0.15 * amount);

      case "excellent":
        return Math.ceil(0.2 * amount);
    default:
      return "Rating not recognised";
    }
  }

//Use SpecRunner to check the Test Cases.