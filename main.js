import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Tooltip } from 'bootstrap';
 // Import Bootstrap JavaScript bundle

 document.addEventListener('DOMContentLoaded', function() {
  
  document.querySelector('#app').innerHTML = `
    <div >
      <nav class="navbar navbar-expand-lg fw-semibold bg-info-subtle">
        <div class="container-fluid">
          <a class="navbar-brand fs-2 text-success " href="#">TaxAssist</a>
        </div>
      </nav>
      <div class='border d-flex justify-content-center align-items-center' style='height:90vh'>
        <div  class='border p-5 w-50 '>
          <form id='mainContainer' class='d-block'>

            <div  class="mb-3">
            <div class='d-flex gap-1 align-items-center '>

            <div class='pt-1'>
            <label for="grossIncome" class="form-label fw-semibold">Enter gross annual income</label>
            </div>
            
            <button  class="rounded-circle bg-light d-flex justify-content-center align-items-center" data-bs-toggle="tooltip" data-bs-placement="top" 
            data-bs-title="Gross annual income is your total salary in a year before any deductions" 
            style="width:15px;height:15px;font-size:10px;border:0.5px solid gray">
            ?
            </button>
            </div>

            <div class="input-group col-md-4">
  <input id='input1' class="form-control py-2 border-end-1 border"  placeholder="Enter gross annual income" id="example-search-input">
  <button id='error1' class="d-none" type="button">
    <i class="fas fa-exclamation-circle" data-bs-toggle="tooltip" data-bs-placement="top" 
    data-bs-title="Please enter numbers only"></i>
  </button>
</div>

          
            </div>

            <div  class="mb-3">
            <div class='d-flex gap-1 align-items-center '>

            <div class='pt-1'>
            <label for="grossIncome" class="form-label fw-semibold">Enter extra income</label>
            </div>
            
            <button  class="rounded-circle bg-light d-flex justify-content-center align-items-center" data-bs-toggle="tooltip" data-bs-placement="top" 
            data-bs-title="Extra income is the income you earned other than the primary source of income" 
            style="width:15px;height:15px;font-size:10px;border:0.5px solid gray">
            ?
            </button>
            </div>
            <div class="input-group col-md-4">
            <input id='input2' class="form-control py-2 border-end-1 border"  placeholder="Enter extra income from other sources" id="example-search-input">
            <button id='error2' class="d-none" type="button">
              <i class="fas fa-exclamation-circle" data-bs-toggle="tooltip" data-bs-placement="top" 
              data-bs-title="Please enter numbers only"></i>
            </button>
          </div>
              
            </div>

            <div  class="mb-3">
            <div class='d-flex gap-1 align-items-center '>

            <div class='pt-1'>
            <label for="grossIncome" class="form-label fw-semibold">Enter age group</label>
            </div>
            
            <button  class="rounded-circle bg-light d-flex justify-content-center align-items-center" data-bs-toggle="tooltip" data-bs-placement="top" 
            data-bs-title="Your age falls under which of the options" 
            style="width:15px;height:15px;font-size:10px;border:0.5px solid gray">
            ?
            </button>
            </div>

            <select id='input3' class="form-select" aria-label="Default select example">
            <option selected></option>
            <option value="below 40"><40 </option>
            <option value="40 to 59">≥ 40 & < 60</option>
            <option value="60 and above">≥ 60</option>
          </select>
            </div>

            <div  class="mb-3">
            <div class='d-flex gap-1 align-items-center '>

            <div class='pt-1'>
            <label for="grossIncome" class="form-label fw-semibold">Enter total applicable deductions</label>
            </div>
            
            <button  class="rounded-circle bg-light d-flex justify-content-center align-items-center" data-bs-toggle="tooltip" data-bs-placement="top" 
            data-bs-title="The expenses or investments exempted from tax" 
            style="width:15px;height:15px;font-size:10px;border:0.5px solid gray">
            ?
            </button>
            </div>

            <div class="input-group col-md-4">
            <input id='input4'.value class="form-control py-2 border-end-1 border"  placeholder="Enter total applicable deductions" id="example-search-input">
            <button id='error4' class="d-none" type="button">
              <i class="fas fa-exclamation-circle" data-bs-toggle="tooltip" data-bs-placement="top" 
              data-bs-title="Please enter numbers only"></i>
            </button>
          </div>
              
            </div>

            <button type="submit" id='submitbtn' class="btn btn-primary">Submit</button>

            <div id='errorDisplay' class='d-none'>
          <button id='error1' class="btn btn-outline-secondary border-0 " type="button">
  <i class="fas fa-exclamation-circle" data-bs-toggle="tooltip" data-bs-placement="top" 
  data-bs-title="Input field is mandatory"></i></div>

          </form>
          <div id='resultContainer' class='d-none'>
          <p class='text-center fw-bold fs-2'>Your overall income will be <br><span id='tax' class='fs-3 fw-semibold'></span><br><span class='fs-4 fw-medium'>after tax deduction </p>
          <button id='closebtn' type="button" class="btn btn-primary border-start-0 " >Close</button>
          </div>
          </div>
        
        

        </div>
    </div>
    
  `;

  // Call setupCounter after DOM content is loaded
  
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))


 document.getElementById('submitbtn').addEventListener('click',   
 (e)=>{
  e.preventDefault()
  
  let field1 = document.getElementById('input1').value;
  let field2 = document.getElementById('input2').value;
  let field3 = document.getElementById('input3').value;
  let field4 = document.getElementById('input4').value;


  if (field1.trim() === '' || field2.trim() === '' || field3.trim() === '' || field4.trim() === '') {
    document.getElementById('errorDisplay').className = 'd-block'
    //document.getElementById('errorDisplay').textContent ='Please fill in all fields.'; // Display an error message
     // Prevent further execution
     console.log('Please fill in');
}else{
  if (!isNaN(field1) && !isNaN(field2) && !isNaN(field4) ) {
    // If all input values are valid numbers
    // Hide main container and show result container
    var tax= 0;
    var grossTax = 0;
    grossTax = Number(field1) + Number(field2) - Number(field4)
    console.log(grossTax);

    if(grossTax >= 800000){

      if(field3 === "below 40"){
        tax = grossTax - ( (grossTax - 800000) * 0.3);
      }else if(field3 === "40 to 59"){
        tax = grossTax - ( (grossTax - 800000) * 0.4);
      }else if(field3 === "60 and above"){
        tax = grossTax - ( (grossTax - 800000) * 0.1);
      }
    }else{
      tax = grossTax
    }

    console.log(field1,field2,field3,field4);
    document.getElementById('mainContainer').className= 'd-none'
    document.getElementById('resultContainer').className = 'shadow d-flex flex-column align-items-center justify-content-center border p-5'

    let formattedTax = tax.toLocaleString('en-US',{
      style: 'currency',
      currency: 'INR'
    })

    document.getElementById('tax').textContent = `${formattedTax}`



  } else {
    // If any input value is not a valid number, display an error message or handle it as desired
    if(isNaN(field1)){
      document.getElementById('input1').className = 'form-control py-2 border-end-0 border'
      document.getElementById('error1').className = 'btn btn-outline-secondary border-start-0 border'
    }else if(isNaN(field2)){
      document.getElementById('input2').className = 'form-control py-2 border-end-0 border'
      document.getElementById('error2').className = 'btn btn-outline-secondary border-start-0 border'
    }else{
      document.getElementById('input4').className = 'form-control py-2 border-end-0 border'
      document.getElementById('error4').className = 'btn btn-outline-secondary border-start-0 border'
    }

    
    
    
    console.log(field1,field2,field3,field4);
    
  }
}
  
})

document.getElementById('closebtn').addEventListener('click',()=>{
  document.getElementById('resultContainer').className = 'd-none'
  document.getElementById('mainContainer').className = 'd-block'
  document.getElementById('error1').className = 'd-none'
  document.getElementById('error2').className = 'd-none'
  document.getElementById('error4').className = 'd-none'
  document.querySelector('form').reset()
})

 // setupCounter(document.querySelector('#counter'));
});
