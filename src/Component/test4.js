import React from 'react'



function test4() {
 
return(
  <div className="treeview w-20 border">
  <h6 className="pt-3 pl-3">Folders</h6>
  <hr/>
  <ul className="mb-1 pl-3 pb-2">
    <li><i className="fas fa-angle-right rotate"></i>
      <span><i className="far fa-envelope-open ic-w mx-1"></i>Mail</span>
      <ul className="nested">
        <li><i className="far fa-bell ic-w mr-1"></i>Offers</li>
        <li><i className="far fa-address-book ic-w mr-1"></i>Contacts</li>
        <li><i className="fas fa-angle-right rotate"></i>
          <span><i className="far fa-calendar-alt ic-w mx-1"></i>Calendar</span>
          <ul className="nested">
            <li><i className="far fa-clock ic-w mr-1"></i>Deadlines</li>
            <li><i className="fas fa-users ic-w mr-1"></i>Meetings</li>
            <li><i className="fas fa-basketball-ball ic-w mr-1"></i>Workouts</li>
            <li><i className="fas fa-mug-hot ic-w mr-1"></i>Events</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><i className="fas fa-angle-right rotate"></i>
      <span><i className="far fa-folder-open ic-w mx-1"></i>Inbox</span>
      <ul className="nested">
        <li><i className="far fa-folder-open ic-w mr-1"></i>Admin</li>
        <li><i className="far fa-folder-open ic-w mr-1"></i>Corporate</li>
        <li><i className="far fa-folder-open ic-w mr-1"></i>Finance</li>
        <li><i className="far fa-folder-open ic-w mr-1"></i>Other</li>
      </ul>
    </li>
    <li><i className="fas fa-angle-right rotate"></i>
      <span><i className="far fa-gem ic-w mx-1"></i>Favourites</span>
      <ul className="nested">
          <li><i className="fas fa-pepper-hot ic-w mr-1"></i>Restaurants</li>
          <li><i className="far fa-eye ic-w mr-1"></i>Places</li>
          <li><i className="fas fa-gamepad ic-w mr-1"></i>Games</li>
          <li><i className="fas fa-cocktail ic-w mr-1"></i>Coctails</li>
          <li><i className="fas fa-pizza-slice ic-w mr-1"></i>Food</li>
        </ul>
    </li>
    <li><i className="far fa-comment ic-w mr-1"></i>Notes</li>
    <li><i className="fas fa-cogs ic-w mr-1"></i>Settings</li>
    <li><i className="fas fa-desktop ic-w mr-1"></i>Devices</li>
    <li><i className="fas fa-trash-alt ic-w mr-1"></i>Deleted Items</li>
  </ul>
</div>
    )
}

export default test4
