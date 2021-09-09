
const arrayOfSections = Array.from(document.querySelectorAll('section')); // store Sections in an array 

const navContent = document.querySelector('#navbar__list') ;  // access UL using its id

const mainPart =document.querySelector('main');


// creating navigation content 
function creatNavegatin() {
    for (var section of arrayOfSections) {
        sectionName = section.getAttribute('data-nav') ;
        sectionId = section.getAttribute('id') ;
        list_item= document.createElement('li') ;
        list_item.innerHTML=`<a href="#${sectionId}" class="link"  id="${sectionId} " > ${sectionName}  </a> `;
        navContent.appendChild(list_item);
       
    }
    
}


function addSection(sectionName, sectionId,sectionContent) {
   
   // creating elements of the section 
    const newSection = document.createElement('section');
    newSection.setAttribute('id' , sectionId );
    newSection.setAttribute('data-nav' , sectionName);
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class' , 'landing__container');
    let newHeading = document.createElement('h2');
    newHeading.innerText= `${sectionName}`;
    let newParagraph = document.createElement('p');
    newParagraph.innerText= `${sectionContent}` ; 

   // appending children to parents 
   newSection .appendChild(newDiv);
   newDiv.appendChild(newHeading);
   newDiv.appendChild(newParagraph);
   arrayOfSections.push(newSection);  // push the new section to the Array of arrayOfSections
   mainPart.appendChild(newSection);
   
   // add the new section to the navegatin bar 
   list_item= document.createElement('li') ;
   list_item.innerHTML=`<a href="#${sectionId}" class="link"  id="${sectionId} " > ${sectionName}  </a> `;
   navContent.appendChild(list_item);
   
}
 
 // highlight the active section only   
function highLightActiveSection() {
  
  let section ;
  let view ;
    for (section of arrayOfSections) {
      let pos = section.getBoundingClientRect();
      // this conditional statement is to check the view port   
      if ( pos.top >=-1 && ( pos.bottom <= window.innerHeight || pos.bottom <= window.innerHeight + 350 || pos.bottom <= window.innerHeight + 400) ) {
         let viewId = section.getAttribute('id');
          view = document.getElementById(viewId);
            for (section of arrayOfSections)  {
      section.classList.remove('your-active-class');
      }  
         view.classList.add('your-active-class');
          
      }
      
         }
   
}

//call the function to creat the nav list
creatNavegatin(); 
////////////////////////////////////////////////////////////////////////////


// adding two new Sections
for (let  i= 5 ; i <=6;i++) {
addSection(`Section ${i}` , `section${i}` , "new section");
}
////////////////////////////////////////////////////////////////////////////////


// add the event listener to scroll event and call the function ' highLightActiveSection' 
document.addEventListener( "scroll" , highLightActiveSection);


///////////////////////////////////////////////////////////////////////////////////


//  control move-Up button
const moveUpBtn = document.querySelector("#up");
moveUpBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,  // scroll to top of the page
        behavior: "smooth"
    });
});

