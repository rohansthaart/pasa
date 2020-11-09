import React from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import './test2.css'
function teste() {
    return (
        <div style={{marginTop:'15px', display:'flex',alignItems:'center'}}>
        
     
      <Grid container spacing={3}>
      <Grid item lg={4} xl={4} md={4} >
        <div className='thumbnaill'>
        <img src='https://firebasestorage.googleapis.com/v0/b/nqt-theme.appspot.com/o/h2-bn-4.jpg?alt=media&token=dea76b40-1653-4350-9807-bb5eb5ee7c23' style={{width:'100%',height:'100%'}}/>
        <div className='caption'>
        <h7>ELECTRONICS</h7>
        <h3>Be movie <br/> night ready.</h3><br/>
        <p>Starting at</p>
        <h4>Rs.59,500</h4>
        </div>
        </div> 
        </Grid>
        <Grid item lg={4} xl={4} md={4} >
        <div className='thumbnaill'>
        <img src='https://firebasestorage.googleapis.com/v0/b/nqt-theme.appspot.com/o/h2-bn-5.jpg?alt=media&token=7f1b9cdf-3123-41f2-9d94-d69c5e890e59' style={{width:'100%',height:'100%'}}/>
        <div className='caption'>
        <h7>BEST SELLER</h7>
        <h3>Luxury<br/>Watches</h3><br/>
        <p>Starting at</p>
        <h4>Rs.19,999</h4>
        </div>
        </div> 
        </Grid>
        <Grid item lg={4} xl={4} md={4} >
        <div className='thumbnaill'>
        <img src='https://firebasestorage.googleapis.com/v0/b/nqt-theme.appspot.com/o/h2-bn-6.jpg?alt=media&token=87e06709-8c5b-4713-a4d4-1e692daffe79' style={{width:'100%',height:'100%'}}/>
        <div className='caption'>
        <h7>NEW STEP</h7>
        <h3>Apple <br/> iPhone</h3><br/>
        <p>Starting at</p>
        <h4>Rs.80,000</h4>
        </div>
        </div> 
        </Grid>
          </Grid>
        
      </div>
    )
}

export default teste
