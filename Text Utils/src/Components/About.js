import React,{useState} from 'react'

export default function About(props) { 
 

  return (
    <div className="container my-3" >
    <div className="accordion" id="accordionExample">
    <h1 style={{color:props.mode==="light"?"black":"white"}}>About Us</h1>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">

      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style= {{backgroundColor: props.mode==='dark'?'#17253a':'white',color:props.mode==='dark'?'white':'black'}}>
        My Self
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style= {{backgroundColor: props.mode==='dark'?'#17253a':'white',color:props.mode==='dark'?'white':'black'}}>
        <strong>I am Pankaj Jaiswal,I have completed my Diploma from Government Polytechnic Mumbai and Very soon will take admission in Engineering </strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style= {{backgroundColor: props.mode==='dark'?'#17253a':'white',color:props.mode==='dark'?'white':'black'}}>
        Motive of Website 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style= {{backgroundColor: props.mode==='dark'?'#17253a':'white',color:props.mode==='dark'?'white':'black'}}>
        <strong>This Website will help the business to manage their text as per their need like Converting to Upper Case,Copy Text Etc </strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style= {{backgroundColor: props.mode==='dark'?'#17253a':'white',color:props.mode==='dark'?'white':'black'}}>
       Technology used 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style= {{backgroundColor: props.mode==='dark'?'#17253a':'white',color:props.mode==='dark'?'white':'black'}}>
        <strong>This Website is created with React Js Framework which is Managed by Facebook! Now Meta </strong>      
      </div>
    </div>
  </div>
  
</div>
</div>
  )
}