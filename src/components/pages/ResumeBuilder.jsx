import React from 'react'
import { useState} from 'react';
import jsPDF from 'jspdf';
import Form from '../Form';
import Preview from '../Preview';
import Routing from '../Routing';


const ResumeBuilder = () => {
  const [formdata, setFormdata] = useState({
    fullname :"",
    email:"",
    phonenumber:"",
    addimage: "src/upload.png",
    website:"",
    headline:"",
    summary:"",
    address:"",
    city:"",
    linkedin:"",
    region:"",
    country:"",
    postalcode:"",
    collegename:"",
    stream:"",
    grade:"",
    startdate:"",
    enddate:"",
    companyname:"",
    designation:"",
    projectlink:"",
    jobstartdate:"",
    jobenddate:"",
    description:"",
    skills:"",
    });
    const [show, setShow] = useState(false); 
    const [buttondata, setButtondata] = useState(true); 
  
    
    console.log(formdata);
    
    const handleInput = (name, value)=>{
      // const name = e.target.name;
      // const value = e.target.value;
      setFormdata ((prev)=>{ 
          return {...prev, [name]:value}

      })
    }  
      const submitForm =(e)=>{
        e.preventDefault();
        setShow(true)
        setButtondata(false) 
        createPDF();        
    }

    const createPDF = () => {
      const pdf = new jsPDF("portrait","px","a4");
      let data =window.document.querySelector("#preview-comp");
      pdf.html(data).then(() => {
        pdf.save("resume.pdf");
      });
    };
     

  return (
    <div id="main">
      <Form handler={handleInput} submit={submitForm} formdata={formdata} buttondata={buttondata} />
      {show && <Preview formdata={formdata}/>}
    </div> 
    
  )
}


export default ResumeBuilder;
