import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import study from '../images/study.png' 
import jobSearch from '../images/jobSearch.png'  
import gotAjob from '../images/gotAjob.png' 
import TypingEffect from '../TypingEffect';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Homepage({setShow}) {
  return (
    <div id="home">
      <Grid container spacing={2} >
          <Grid item lg={12} md={12} sm={12} xs={12} id="homeGrid" >
            <div id="home-cont">
            <img id="icon-study" src={study}/>
              <h1 id="home-head"><TypingEffect/></h1>
              <p id="home-para">Let's Get started🤘...</p>
              {/* <section id="quotes">
                <div className="quotes">

                </div>
              </section> */}
              <Button id="home-btn"><Link className='nav-text' to="/resumebuilder">Create Your Resume</Link></Button>
            </div>
            <div className="image-cont">
              <img className="img-job"  src={jobSearch}/>
              <img className="img-job" id="img-gotajob" src={gotAjob}/>
            </div>
          </Grid>
      </Grid> 
      <Footer/>   
    </div>
  )
}

export default Homepage