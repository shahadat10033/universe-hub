const loadData =()=>{
    fetch("https://openapi.programming-hero.com/api/ai/tools")
     .then(response => response.json())
    .then(data => displayDAta(data.data.tools))
}
const displayDAta=(datas)=>{
    const cardContainer=document.getElementById("all-card-container")
    datas.forEach(data => {
        console.log(data)
        const div=document.createElement("div");
        div.classList.add("col-md-4");
        div.innerHTML=`
        <div class="border g-2 "> 
        <div class="m-3 ">  <img  class="img-fluid h-100"src="${data.image}" alt="" srcset=""></div>
        <div class=" m-3"><span class="fw-semibold">Features</span> 
        <br>
       
        <ol >
        <li>${data.features[0]}</li>
        <li>${data.features[1]}</li>
        <li>${data.features[2]}</li>
        </ol>
        
        </div>
        <hr>
        <div class="d-flex justify-content-between align-items-center">
          <section>

          </section>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
      
      </div></div>
        `
       
        cardContainer.appendChild(div);

     
      
      

    });
    

}




loadData()