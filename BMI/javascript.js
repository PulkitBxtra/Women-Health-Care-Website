function calculate(){
    
      var bmi;
      var result = document.getElementById("result");
    //The value of the height slider
      var height = parseInt(document.getElementById("height").value);
    //The value of the weight slider
      var weight = parseInt(document.getElementById("weight").value);
  
    //The value of height and width should be displayed in the webpage using "textContent".
      document.getElementById("weight-val").textContent = weight + " kg";
      document.getElementById("height-val").textContent = height + " cm";
  
  //Now I have added the formula for calculating BMI in "bmi"
      bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    //With the help of "textContent" we have arranged to display in the result page of BMI
      result.textContent = bmi;
  
  
    
  
  
    //conditions
      if(bmi < 18.5){
          category = "Underweight ";
          result.style.color = "#ffc44d";
      }
  
    //If BMI is >=18.5 and <=24.9
      else if( bmi >= 18.5 && bmi <= 24.9 ){
          category = "Normal Weight ";
          result.style.color = "#0be881";
      }
  
    //If BMI is >= 25 and <= 29.9 
      else if( bmi >= 25 && bmi <= 29.9 ){
          category = "Overweight ";
          result.style.color = "#ff884d";
      }
  
    //If BMI is <= 30
      else{
          category = "Obese ";
          result.style.color = "#ff5e57";
      }
    //All of the above text is stored in "category".
  
 
      document.getElementById("category").textContent = category;
  }
