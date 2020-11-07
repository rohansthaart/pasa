import React from 'react'
import Grid from '@material-ui/core/Grid';
import LocalShippingTwoToneIcon from '@material-ui/icons/LocalShippingTwoTone';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import SecurityIcon from '@material-ui/icons/Security';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';

import './test3.css'
function test3() {
    return (
        <div style={{background:'white'}}>
        <Grid container spacing={4}>

        <Grid item lg={3} xl={3} md={6} sm={12} xs={12}>
            <div >
          <div className='featBox'>      
        <LocalShippingTwoToneIcon fontSize="large" /></div>
        <div className=' featCenter'><h3 className='featTitle'>Express Delivery</h3><br/>
        <p className='featDes'>Express Delivery on orders over Nepal</p>
        
        </div>
        
        </div>
        </Grid>
        
        <Grid item lg={3} xl={3} md={6} sm={12} xs={12}>
            <div >
            <div className='featBox'>    
        <SecurityIcon fontSize="large"/></div>
        <div className='featCenter'><h3 className='featTitle'>Secure Shopping</h3><br/>
        <p className='featDes'>We are committed to protecting the security of your information</p>
        
        </div>
        
        </div>
        </Grid>

        <Grid item lg={3} xl={3} md={6} sm={12} xs={12}>
            <div >
            <div className='featBox'>      
        <SwapHorizIcon fontSize="large"/></div>
        <div className='featCenter'><h3 className='featTitle'>Easy Returns</h3><br/>
        <p className='featDes'>Easy returns on our products, Returns are free and easy!</p>
        
        </div>
        
        </div>
        </Grid>

        <Grid item lg={3} xl={3} md={6} sm={12} xs={12}>
            <div >
            <div className='featBox'>     
        <AssignmentTurnedInOutlinedIcon fontSize="large"/></div>
        <div className='featCenter'><h3 className='featTitle'>Quality Checked</h3><br/>
        <p className='featDes'>We are providing top quality products and service.</p>
        
        </div>
        
        </div>
        </Grid>



        </Grid> </div>
    )
}

export default test3
