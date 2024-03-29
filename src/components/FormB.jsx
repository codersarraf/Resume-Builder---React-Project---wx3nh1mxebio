import React, {useState} from 'react'
import  TextField  from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
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
                    <Grid container spacing={2}  >
                        <Grid item lg={12} md={12} sm={12} xs={12} >
                              <h1>Basics</h1>
                        </Grid>
                        <Grid item lg={1} md={2}>
                            <img id="img" src={props.formdata.addimage}  />
                        </Grid>
                        <Grid item lg={10} md={12} sm={12} xs={12}  id="abc">
                             <TextField  type="text" id="fullname" name="fullname" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='inputs' width="100%" label="Full Name" variant="outlined"    />
                             <TextField   type="file" component="label" name="addimage" id='add-image' onChange={async(e)=>handleInput(e.target.name, URL.createObjectURL(e.target.files[0]))}><Icon color="primary">add_circle</Icon>Add-Image</TextField>
          
                        </Grid>
                        <Grid item lg={12}md={12} sm={12} xs={12} >
                             <TextField  type="email"  id="email" name="email" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' label="Email Address" variant="outlined"   />
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12}  >
                             <TextField  type="number" id="phoneNumber" name="phonenumber" onChange={(e)=>handleInput(e.target.name, e.target.value)} className="small-input" label="Phone Number" variant="outlined"    />
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12}  >
                             <TextField  type="url" id="website" name="website" onChange={(e)=>handleInput(e.target.name, e.target.value)} className="small-input" label="Website" variant="outlined"    />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}  >
                             <TextField  type="text" id="headline" name="headline" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' label="Headline" variant="outlined"    />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}  >
                             <TextField  type="text" id="summary" name="summary" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' label="Summary" variant="outlined"    />
                        </Grid>

                        <Grid item lg={12} md={12} sm={12} xs={12} >
                            <h1>Location</h1>
                           

                        </Grid>
                        <Grid item  lg={12} md={12} sm={12} xs={12} >
                             <TextField  type="text" id="address" name="address" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' label="Address" variant="outlined"    />
                        </Grid>
                        <Grid item  lg={12} md={12} sm={12} xs={12} >
                             <TextField  type="url" id="linkedIn" name="linkedin" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' label="Address-Url" variant="outlined"    />
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12} >
                             <TextField  type="text" id="city" name="city" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' label="City" variant="outlined"    />
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12} >
                             <TextField  type="text" id="reagion" name="region" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' label="Reagion" variant="outlined"    />
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12} >
                             <TextField  type="text" id="country" name="country" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' label="Country" variant="outlined"    />
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12} >
                         <TextField  type="number" id="postalCode" name="postalcode" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input'  label="Postal Code" variant="outlined"    />
                        </Grid>
                    </Grid>
                </div>    

                <div className="form2">
                    <Grid container spacing={2} justify-content='center' alignItems='center' >
                        <Grid item lg={12} md={12}>
                            <h1>Education</h1>
                            {/* <Button onClick={handleEducation}><Icon color="primary">add_circle</Icon></Button> */}
                        </Grid>
                        <Grid item lg={12} md={12}>
                             <TextField  type="text" id="college-Name" name="collegename" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' label="School/College Name" variant="outlined"    />
                        </Grid>
                        <Grid item lg={6} md={12}>
                             <TextField  type="text" id="stream" name="stream" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' label="Stream" variant="outlined"    />
                        </Grid >
                        <Grid item lg={6} md={12}>
                         <TextField  type="text" id="grade" name="grade" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input'  label="Grade" variant="outlined"    />
                        </Grid>
                        <Grid item lg={6} md={12}>
                             <TextField   id="startDate" name="startdate" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' label="Start Date" variant="outlined"    />
                        </Grid>
                        <Grid item lg={6} md={12}>
                             <TextField  id="endDate" name="enddate" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' label="End Date" variant="outlined"    />
                        </Grid>
                    </Grid>
                </div> 

                <div  id="form3">
                    <Grid container spacing={2} justify-content='center' alignItems='center' >
                        <Grid item lg={12} md={12}>
                            <h1>Work Experience</h1>
                            {/* <Button onClick={handleExperience}><Icon color="primary">add_circle</Icon></Button> */}
                        </Grid>
                        <Grid item lg={12} md={12}>
                             <TextField  type="text" id="company-Name" name="companyname" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' label="Company Name" variant="outlined"    />
                        </Grid>
                        <Grid item lg={6} md={12}>
                             <TextField  type="text" id="designation" name="designation" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' label="Designation" variant="outlined"    />
                        </Grid >
                        <Grid item lg={6} md={12}>
                         <TextField  type="url" id="projectlink" name="projectlink" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input'  label="ProjctLink" variant="outlined"    />
                        </Grid>
                        <Grid item lg={6} md={12}>
                             <TextField   id="startDate"  name="jobstartdate" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' label="Start Date" variant="outlined"    />
                        </Grid>
                        <Grid item lg={6} md={12}>
                             <TextField   id="endDate" name="jobenddate" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='small-input' label="End Date" variant="outlined"    />
                        </Grid>
                        <Grid item>
                             <TextField  type="text" id="description" name="description" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input' label="Description" variant="outlined"   />
                        </Grid>
                        
                    </Grid>
                </div>

                <div  id="form4" >
                    <Grid container spacing={2} justify-content='center' alignItems='center' >
                        <Grid item lg={12} md={12}>
                                <h1>Skills</h1>
                        </Grid>
                        <Grid item lg={12} md={12}>
                             <TextField  type="text" id="skill" name="skills" onChange={(e)=>handleInput(e.target.name, e.target.value)} className='input'  label="Add Skills" variant="outlined"    />
                        </Grid>
                    </Grid>
                </div>
                
                <Grid container spacing={2} justify-content='center' alignItems='center' >
                    <Grid id="btn" item lg={12} md={12} sm={12} xs={12}>
                        <Button id="button" type='submit' variant="contained" ><span></span>{buttondata?"Preview":"Download"}</Button>
                    </Grid>
                </Grid>
                

            </form>
        </div>
  )
}

export default Form