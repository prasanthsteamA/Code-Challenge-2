function calculateTip(amount, rating) {
  //your code here
  switch (rating) {
    case "Terrible":
      return 0;
    case "Poor":
      return Math.ceil((amount * 5) / 100);
    case "good":
      return Math.ceil((amount * 10) / 100);
    case "great":
      return Math.ceil((amount * 15) / 100);
    case "Excellent":
      return Math.ceil((amount * 20) / 100);
    default:
      return "Rating not recognised";
  }
}
//Use SpecRunner to check the Test Cases.
