// Given an array of cities, return an array with the first letter of each city’s name capitalized.
// You can use ES5 or ES6 syntax, whichever you feel more comfortable with at this point.

// array of cities:
const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];
//const cities = [1,2,3];
const newCities = cities.map(a => {
  let temp = a.charAt(0).toUpperCase() + a.substring(1).toLocaleLowerCase(); // primer caracter en mayusculas y lo demas en minusculas
  return temp;
});
//console.log(newCities);

// Imagine you are a math teacher and you have to grade our students based on their performance on two projects
// (40% of final grade) and their final exam (60% of final grade). We have the info for each student in an object that looks like this:

const students = [
    {
      name: 'Tony Parker',
      firstProject: 80,
      secondProject: 75,
      finalExam: 90
    },
    {
      name: 'Marc Barchini',
      firstProject: 84,
      secondProject: 65,
      finalExam: 65
    },
    {
      name: 'Claudia Lopez',
      firstProject: 45,
      secondProject: 95,
      finalExam: 99
    },
    {
      name: 'Alvaro Briattore',
      firstProject: 82,
      secondProject: 92,
      finalExam: 70
    },
    {
      name: 'Isabel Ortega',
      firstProject: 90,
      secondProject: 32,
      finalExam: 85
    },
    {
      name: 'Francisco Martinez',
      firstProject: 90,
      secondProject: 55,
      finalExam: 78
    },
    {
      name: 'Jorge Carrillo',
      firstProject: 83,
      secondProject: 77,
      finalExam: 90
    },
    {
      name: 'Miguel López',
      firstProject: 80,
      secondProject: 75,
      finalExam: 75
    },
    {
      name: 'Carolina Perez',
      firstProject: 85,
      secondProject: 72,
      finalExam: 67
    },
    {
      name: 'Ruben Pardo',
      firstProject: 89,
      secondProject: 72,
      finalExam: 65
    }
  ];
  
  const finalGrade = students.map(student => {
    const projectNote =  ((student.firstProject + student.secondProject) / 2)* 0.4;
    const Examn = student.finalExam* 0.6;
    //return projectNote; 
    //return Examn; 
    return {
        name: student.name,
        //finalNote: projectNote + Examn
        finalNote: Math.round(projectNote + Examn)
    }
  });    
  //console.log(finalGrade);

  //Review the code below and calculate the average number of calories for the entire list:
  const menu = [
    { name: 'Carrots', calories: 150 },
    { name: 'Steak', calories: 350 },
    { name: 'Broccoli', calories: 120 },
    { name: 'Chicken', calories: 250 },
    { name: 'Pizza', calories: 520 }
  ];
  const avg = menu.reduce((total, element) => { 
    let result = 0;
    total = total + element.calories;// 1390    
    result =  total / menu.length;  // 278
    return result;
  }, 0);  
  // your code:  
  //console.log(avg); // 278
  