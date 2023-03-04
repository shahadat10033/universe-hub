const loadData =()=>{
    fetch("https://openapi.programming-hero.com/api/ai/tools")
     .then(response => response.json())
    .then(data => displayData(data.data.tools.slice(0,6) ));
}


const openModal =(id)=>{ 
  if(id<10){ 
   fetch(`https://openapi.programming-hero.com/api/ai/tool/0${id}`)
.then(response => response.json())
.then(singleData => displaySingleData(singleData.data))}
else{ 
   fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
.then(response => response.json())
.then(singleData => displaySingleData(singleData.data))}

}
displaySingleData=(singleData)=>{
  console.log(singleData)
  const description=document.getElementById("description");
  description.innerHTML=`${singleData.description}`
  
    

const cardText=document.getElementById("card-text");
cardText.innerHTML=`
<div class="text-primary " style="width:45px">${singleData.pricing[0].price}<br>${singleData.pricing[0].plan}</div>
<div class="text-danger "style="width:45px">${singleData.pricing[1].price}<br>${singleData.pricing[1].plan}</div>
<div class="text-success "style="width:45px">${singleData.pricing[2].price}<br>${singleData.pricing[2].plan}</div>`
 
const featureUl=document.getElementById("featureUl")
featureUl.innerHTML=`
<li>${singleData.features[1].feature_name}</li>
<li>${singleData.features[2].feature_name}</li>
<li>${singleData.features[3].feature_name}</li>
`

const integrations=document.getElementById("integrations")
integrations.innerHTML=`
<li>${singleData.integrations[0]}</li>
<li>${singleData.integrations[1]}</li>
<li>${singleData.integrations[2]}</li>

`

const imgCard=document.getElementById("imgCard")
imgCard.innerHTML=`
<img src="${singleData.image_link[0]?singleData.image_link[0]:singleData.logo}" class="card-img-top" alt="...">

`

const cardSpeechTitle=document.getElementById("cardSpeechTitle")
cardSpeechTitle.innerHTML=`

<h5 class="card-title text-center">${singleData.input_output_examples[0].input}</h5>

`


console.log(`${singleData.input_output_examples[0].input}`)


const cardSpeechDescription=document.getElementById("cardSpeechDescription")
cardSpeechDescription.innerHTML=`

<p>${singleData.input_output_examples[0].output}</p>



`


const  accuracy=document.getElementById("accuracy")
const intNumber=parseFloat(singleData.accuracy.score)  *100
accuracy.innerHTML=`
<button class="btn btn-danger">${intNumber} % accuracy</button>

`

console.log(parseFloat(singleData.accuracy.score))

}  



const displayData=(datas) =>{
    const cardContainer=document.getElementById("all-card-container")
    const spinnerContainer=document.getElementById("spinnerContainer")
    spinnerContainer.classList.add("d-none")





    cardContainer.innerHTML="";
    datas.forEach(data => {
    
      
        const div=document.createElement("div");
        
        div.classList.add("col-md-4");
        div.innerHTML=`
        <div class="border g-2 my-3 shadow-lg p-3 mb-5"style="height:550px ">
        
        <div class=" container mt-3 ">  <img   class="img-fluid rounded-4"src="${data.image}" alt="" srcset=""></div>
        <div class=" m-3"><span class="fw-semibold">Features</span> 
        <br>
       
        <ol id="feature">
        <li>"${data.features[0]}"</li>
         <li>"${data.features[1]}"</li>
         <li>"${data.features[2]}"</li>
        </ol>
         
        </div>
        <hr>
        <div class="d-flex justify-content-between align-items-center container">
          <section>
          <p>${data.name}</p>
          <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-week" viewBox="0 0 16 16">
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
          <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
         </svg> <span> ${data.published_in}</span></p>
          </section>
          <section onclick="openModal(${parseFloat(data.id)})" class="rounded-5 btn btn-danger "   data-bs-toggle="modal" data-bs-target="#exampleModal">
          <svg class=" text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
      
          </section>

          <!-- modal-->

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content" style="position:absolute;">
        <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close" style="background:red;color:white;border-radius:50%; padding:0 8px 13px ; position:absolute; top:-11px; right:-11px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg></button>
      <div class="modal-body">
        
      <div class="row">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"id="description"></h5>
            <div class="card-text d-flex justify-content-between container  my-5"  id="card-text">
                
            </div>
            <div class="d-flex justify-content-between container">
    <div>
      <h5 >Feature</h5>
      <ul id="featureUl"></ul>
    </div>
    <div>
      <h5>Integrations</h5>
      <ul id="integrations"></ul>
    </div>
    
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card " >

        <div style="position:absolute;">
        <div id="imgCard"></div>
        <div id="accuracy" style="position:absolute; top:30px; right:20px;"></div>
        </div>
        

        <div id="cardSpeechTitle" class="my-5">
        </div>

       <div id="cardSpeechDescription" class="my-5 container"></div>



      </div>
    
      </div>
      </div>

      </div>
      
    </div>
  </div>
</div>
          
      </div>
        
        </div>


        `
        
        cardContainer.appendChild(div);
        
        
      
        
        
        
        
        
      
      

    });
    

}





const loadAllData=()=>{

  fetch("https://openapi.programming-hero.com/api/ai/tools")
  .then(response => response.json())
 .then(data => displayData(data.data.tools))

 const seeMore=document.getElementById("see-more");
 seeMore.classList.add("d-none")

}

loadData()



 
