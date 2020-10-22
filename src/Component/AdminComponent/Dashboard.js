import React from 'react'
import './Dashboard.css'
import AdminChart from './AdminChart'
function Dashboard() {
    return (
        <div>
      
      <div class="container">
    <div class="row">
    	
        <div class="col-md-12 flex-container">
        
            <div class="flex-item">
            	<div class="flex-item-inner">
                	                	<a href="#">
                        <div class="card-front bg-violet">
                            <i class="fa fa-pie-chart fa-3x tile-icon icon-white"></i>
                            <h4>Total UserAccount</h4>
                            <p class="detail">525</p>
                        </div>
                        <div class="card-back bg-violet">
                            <p class="title">This shows total no of people opening UserAccount till this date</p>
                            <p class="desc">Pellentesque magna nunc, fermentum nec ipsum non, consequat scelerisque dui.</p>
                           
                        </div>
                    </a>
                    
                </div>
            </div>
           
            
             
            <div class="flex-item">
            	<div class="flex-item-inner">
                	                    <a href="#">
                        <div class="card-front bg-magenta">
                            <i class="fa fa-heart fa-3x tile-icon icon-white"></i>
                            <h4>Total Sales Unit</h4>
                            <p class="detail">965</p>
                        </div>
                        <div class="card-back bg-magenta">
                            <p class="title">Praesent varius mi sem</p>
                            <p class="desc">Cras posuere consequat nisl, ut rhoncus odio finibus sit amet. Sed consectetur dapibus.</p>
                            
                        </div>
                    </a>
                    
                </div>
            </div>
            
            
           
            <div class="flex-item">
            	<div class="flex-item-inner">
                	
                	<a href="#">
                        <div class="card-front bg-blue">
                            <i class="fa fa-sun-o fa-3x tile-icon icon-white"></i>
                            <h4>Total Sale Price</h4>
                            <p class="detail">Rs. 8,95,600</p>
                        </div>
                        <div class="card-back bg-blue">
                            <p class="title">Vestibulum eget sem malesuada</p>
                            <p class="desc">Etiam imperdiet ullamcorper dolor sit amet molestie. Quisque eu nibh in ligula.</p>
                           
                        </div>
                    </a>
                    
                </div>
            </div>
           
            
          
            <div class="flex-item">
            	<div class="flex-item-inner">
                	
                    <a href="#">
                        <div class="card-front bg-green">
                            <i class="fa fa-bar-chart fa-3x tile-icon icon-white"></i>
                            <h4>Total Profit</h4>
                            <p class="detail">Rs.89,000</p>
                        </div>
                        <div class="card-back bg-green">
                            <p class="title">Curabitur elementum augue</p>
                            <p class="desc">Nullam porttitor dui quis commodo mattis. Fusce posuere, nisl id ultrices pellentesque.</p>
                           
                        </div>
                    </a>
                  
                </div>
            </div>
            
        </div>
       
    </div>
</div>

      
        <AdminChart/>
        </div>
    )
}

export default Dashboard
