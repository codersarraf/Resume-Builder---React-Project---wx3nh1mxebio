import React from 'react'

function Preview(props) {

  return (
    <div className='previewContainer'>
        <div id="preview-comp">
            <div className='name-container'>
                <img id='img-preview' src={props.formdata.addimage} alt="Upload Your Image"  />
                <h2 id="name">{props.formdata.fullname}</h2>
                <div className="lighter-text">{props.formdata.headline}</div>
                <br />
                
            </div>
            <hr />

            <div className='contacts-container'>
                <div className="light-text">{props.formdata.email}</div>
                <div className="light-text">{props.formdata.phonenumber}</div>
                <div className="light-text">{props.formdata.website}</div>
            </div>
            <hr />
            <br />

            <div className='add-container'>
                <div className="light-text">{props.formdata.address}, {props.formdata.city}, {props.formdata.region}, {props.formdata.country}, {props.formdata.postalcode}</div>
                <div className="light-text">{props.formdata.linkedin}</div>
            </div>
            <br />
            <hr />
            <div className="light-text" id="summ-container">
                <div>{props.formdata.summary}</div>
            </div>
            <hr/>
            <div className='exp-container'>
                <div  id='exp-heading'>Work Experience</div>
            <div className="exp">
            <div className="bold-text" >{props.formdata.companyname}</div>
                <div className="light-text">{props.formdata.designation}</div>
                <div className="lighter-text">{props.formdata.jobenddate}</div>
            </div>
                <div className="light-text" id='work-desc'>
                    {props.formdata.description}
                </div>
            </div>
            <hr />

            <div className='edu-container'>
                
                <div id='edu-heading'>Education</div>
            <div className="edu">
            <div className="bold-text">{props.formdata.collegename}</div>
                <div className="light-text">{props.formdata.stream}</div>
                <div className="light-text">{props.formdata.grade}</div>
                <div className="lighter-text">{props.formdata.enddate}</div>
            </div>
                
            </div>
            <hr />

            <div className='skills-container'>
            <div  id='skills-heading'>Skills</div>
               
                <div id="list">
                        {
                            
                        props.formdata.skills.split(",").map(e =><div className="light-text" id='list-items'>{e}</div>)
                        
                        }
                       
                    </div>      
            </div>
        </div>
    </div>
    
  )
}

export default Preview