import React from 'react'
import Badge from '@material-ui/core/Badge';
import DeleteIcon from '@material-ui/icons/Delete';

function AdsTable() {
    return (
        <div>
            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Date Starting to ending</th>
      <th scope="col">Status</th>
      <th scope="col">Proceed</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
          <img 
          width={100}
          height={100}
           src='https://foreveramber.co.uk/wp-content/uploads/2017/01/sell-used-clothes-for-cash-1200x675.jpg'/>
           </th>
      <td>Sell Used Clothes for cash</td>
      <td>11/10/2020 - 11/13/2020(3 days) </td>
      <td><Badge color="error" badgeContent={'pending'}/>
       </td>
      <td>Approve</td>
      <td><DeleteIcon color="secondary"/></td>
    </tr>
   
  </tbody>
</table>
        </div>
    )
}

export default AdsTable
