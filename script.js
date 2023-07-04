const students = [
     { id: 1, 
    name: 'Alice',
    grade: 'A'
     },
     { id: 2,
       name: 'Bob',
       grade: 'C'
     },
     { id: 3,
       name: 'Charlie',
       grade: 'B' 
     },
     { id: 4,
       name: 'Dave',
       grade: 'A' 
     },
    { id: 5,
      name: 'Eve',
      grade: 'B' 
    }, 
];

const input = document.querySelector('.input'),
      btn = document.querySelector('.btn'),
      studentAbout = document.querySelector('.student-about');

btn.addEventListener( 'click', (e)=>{
    e.preventDefault();
   
     const id = +input.value


     const selectBook = students.find((sear) =>{
        return sear.id === id;
     });
      
     if(selectBook){
        studentAbout.innerHTML =  `<h2> Book: ${selectBook.name} </h2> <span>Year: ${selectBook.grade} </span>`
     }
     else{
        studentAbout.innerHTML = `<h3> Bunday oquvchi yoq</h3>`
     }

     input.value = '';

})