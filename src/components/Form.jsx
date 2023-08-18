import React, {useState} from 'react'
import  TextField  from '@material-ui/core/TextField'

import Button from '@material-ui/core/Button';
import {Icon}  from '@material-ui/core';



function Form(props) {
  
    const handleInput = props.handler;
        
    const submitForm = props.submit;
    const buttondata = props.buttondata;

    
  return (
        <div id="form-component">
           
            
            <form onSubmit={submitForm} id='form'>
                <div id='form1'>
                
                
                <h1 id="heading">Resume-Builder</h1>
                    <div container spacing={2}  >
                        <div>
                              <h1>Basics</h1>
                        </div>
                        <div>
                            <img id="img" src={props.formdata.addimage}  />
                        </div>
                        <div id="abc">
                             <input  type="text" id="fullname" name="fullname" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='inputs' width="100%" placeholder="Full Name"     />
                             <TextField   type="file"  name="addimage" id='add-image' class="profile-img" onChange={async(e)=>handleInput(e.target.name, URL.createObjectURL(e.target.files[0]))}><Icon color="primary">add_circle</Icon>Add-Image</TextField>
                              <label htmlFor="add-image" className='btn-label'>Add Image...</label>
                        </div>
                        <div>
                             <input  type="email"  id="email" name="email" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' placeholder="Email Address" />
                        </div>
                        <div>
                             <input  type="number" id="phoneNumber" name="phonenumber" onChange={(e)=>handleInput(e.target.name, e.target.value)} className="small-input" placeholder="Phone Number"     />
                        </div>
                        <div>
                             <input  type="url" id="website" name="website" onChange={(e)=>handleInput(e.target.name, e.target.value)} className="small-input" placeholder="Website"     />
                        </div>
                        <div>
                             <input  type="text" id="headline" name="headline" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' placeholder="Headline"     />
                        </div>
                        <div>
                             <input  type="text" id="summary" name="summary" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' placeholder="Summary"     />
                        </div>

                        <div>
                            <h1>Location</h1>
                           

                        </div>
                        <div>
                             <input  type="text" id="address" name="address" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' placeholder="Address"     />
                        </div>
                        <div>
                             <input  type="url" id="linkedIn" name="linkedin" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' placeholder="Address-Url"     />
                        </div>
                        <div>
                             <input  type="text" id="city" name="city" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' placeholder="City"     />
                        </div>
                        <div>
                             <input  type="text" id="reagion" name="region" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' placeholder="Reagion"     />
                        </div>
                        <div>
                             <input  type="text" id="country" name="country" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' placeholder="Country"     />
                        </div>
                        <div>
                         <input  type="number" id="postalCode" name="postalcode" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input'  placeholder="Postal Code"     />
                        </div>
                    </div>
                </div>    

                <div className="form2">
                    <div>
                        <div>
                            <h1>Education</h1>
                            {/* <Button onClick={handleEducation}><Icon color="primary">add_circle</Icon></Button> */}
                        </div>
                        <div>
                             <input  type="text" id="college-Name" name="collegename" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' placeholder="School/College Name"     />
                        </div>
                        <div>
                             <input  type="text" id="stream" name="stream" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' placeholder="Stream"     />
                        </div >
                        <div>
                         <input  type="text" id="grade" name="grade" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input'  placeholder="Grade"     />
                        </div>
                        <div>
                             <input   id="startDate" name="startdate" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' placeholder="Start Date"     />
                        </div>
                        <div>
                             <input  id="endDate" name="enddate" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' placeholder="End Date"     />
                        </div>
                    </div>
                </div> 

                <div  id="form3">
                    <div>
                        <div>
                            <h1>Work Experience</h1>
                            {/* <Button onClick={handleExperience}><Icon color="primary">add_circle</Icon></Button> */}
                        </div>
                        <div>
                             <input  type="text" id="company-Name" name="companyname" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' placeholder="Company Name"     />
                        </div>
                        <div>
                             <input  type="text" id="designation" name="designation" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' placeholder="Designation"     />
                        </div >
                        <div>
                         <input  type="url" id="projectlink" name="projectlink" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input'  placeholder="ProjctLink"     />
                        </div>
                        <div>
                             <input   id="startDate"  name="jobstartdate" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' placeholder="Start Date"     />
                        </div>
                        <div>
                             <input   id="endDate" name="jobenddate" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' placeholder="End Date"     />
                        </div>
                        <div>
                             <input  type="text" id="description" name="description" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' placeholder="Description"    />
                        </div>
                        
                    </div>
                </div>

                <div  id="form4" >
                    <div>
                        <div>
                                <h1>Skills</h1>
                        </div>
                        <div>
                             <input  type="text" id="skill" name="skills" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input'  placeholder="Add Skills"     />
                        </div>
                    </div>
                </div>
                
                <div>
                    <div>
                        <Button id="button" type='submit' variant="contained" ><span></span>{buttondata?"Preview":"Download"}</Button>
                    </div>
                </div>
                

            </form>
        </div>
  )
}

export default Form