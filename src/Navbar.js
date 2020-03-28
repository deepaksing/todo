import React from 'react';
import './css/Navbar.css';
class Navbar extends React.Component
{
    render()
    {
        return(
            <nav className="menu shadow-3">

            <header className="avatar shadow-3 grow">
                <img src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt="profile"/>
                <p>Deepak Singh</p>
            </header>

            <ul>
                <li>Dashboard</li>
                <li>Tasks</li>
                <li>Today</li>
                <li>Yesterday</li>
            </ul>
            </nav>
        )
    }
}
export default Navbar;