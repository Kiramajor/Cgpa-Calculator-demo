let mthUnits = 4;
let phyUnits = 4;
let chmUnits = 4;
let blsUnits = 4;
let gstUnits = 3;

let button = document.querySelector('.btn');

button.addEventListener('click', function(){
     let score = function score(){
        a = parseInt(prompt('Enter score for MTH101'));
        b = parseInt(prompt('Enter score for PHY101'));
        c = parseInt(prompt('Enter score for CHM101'));
        d = parseInt(prompt('Enter score for BLS101'));
        e = parseInt(prompt('Enter score for GST101'));
   }
   score();

   function gradeCheck(score) {
    if (score >= 70) {
       return 5;  
    }else if(score >= 60) {
      return 4;   
    }else if(score >= 50){
       return 3;
    }else if (score >= 45){
       return 2; 
    }else{
      return 0;
    }
}
gradeCheck();


let totalGrade = gradeCheck(a) + gradeCheck(b) + gradeCheck(c) + gradeCheck(d) + gradeCheck(e);
let totalGradePoint = (gradeCheck(a) * mthUnits) +  (gradeCheck(b) * phyUnits) + (gradeCheck(c) * chmUnits) + (gradeCheck(d) * blsUnits + gradeCheck(e) * gstUnits);
let totalGradeUnits = mthUnits + chmUnits + phyUnits + blsUnits + gstUnits;
const cgpa = totalGradePoint / totalGradeUnits;

switch (true) {
    case cgpa >= 4.50:
        alert(`Congrats! your cgpa is ${cgpa.toFixed(2)}, you have a first class`)
        break;
    case cgpa >= 3.49:
        alert(`Congrats! your cgpa is ${cgpa.toFixed(2)}, you have a second class upper`)
        break;
    case cgpa >= 2.49:
        alert(`Your cgpa is ${cgpa.toFixed(2)}, you have a second class lower`)
        break;
    case cgpa >= 1.39:
        alert(`Your cgpa is ${cgpa.toFixed(2)}, you have a third class`)
        break;
    default:
        alert(`You failed`)
        break;
}
});


