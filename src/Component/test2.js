import React from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Test from './test'
function teste() {
    return (
        <div style={{marginTop:'15px',backgroundColor:'#fff'}}>
        <React.Fragment >
      <CssBaseline />
     <Container>
      <Grid container spacing={3}>
      <Grid item lg={12} xl={2} md={12} sm={12}>
          <h3>Kitchen</h3>
        <Test/></Grid>
        <Grid title= "this is title" item lg={5} xl={4} md={5} sm={12}>
          
        <img src="https://firebasestorage.googleapis.com/v0/b/nqt-theme.appspot.com/o/bn-cate2.jpg?alt=media&amp;token=e81bc62b-cea5-49e3-9e32-c1451b407114" className="" title="" alt="" style={{width:'100%',height:'auto',verticalAlign: 'middle',borderStyle:'none'}} />
       
    
		
        </Grid>
        <Grid item lg={7} xl={6} md={7} sm={12} >
        <Grid container spacing={2}>
        <Grid item lg={6}>
        <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/nqt-theme.appspot.com/o/bn-cate2-1.jpg?alt=media&amp;token=396f7aad-d9f1-4932-82a6-650b23278710" alt="Utensil &amp; Gadget" style={{width:'100%',height:'auto',verticalAlign: 'middle',borderStyle:'none'}}/>
        </Grid>
        <Grid item lg={6}>
        <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/nqt-theme.appspot.com/o/bn-cate2-1.jpg?alt=media&amp;token=396f7aad-d9f1-4932-82a6-650b23278710" alt="Utensil &amp; Gadget" style={{width:'100%',height:'auto',verticalAlign: 'middle',borderStyle:'none'}}/>
        </Grid>
        </Grid>
        <Grid container spacing={2}>
        <Grid item lg={6}>
        <img class="img-fluid" src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/lamborghini_660_140220101539.jpg" alt="Utensil &amp; Gadget" style={{width:'100%',height:'auto',verticalAlign: 'middle',borderStyle:'none'}}/>
        </Grid>
        <Grid item lg={6}>
        <img class="img-fluid" src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/lamborghini_660_140220101539.jpg" alt="Utensil &amp; Gadget" style={{width:'100%',height:'auto',verticalAlign: 'middle',borderStyle:'none'}}/>
        </Grid>
        
        </Grid>
          </Grid>
          </Grid>
          </Container>
      </React.Fragment>
      </div>
    )
}

export default teste
