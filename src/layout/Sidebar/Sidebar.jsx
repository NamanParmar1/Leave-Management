// Sidebar.jsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { personsImgs,iconsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import './Sidebar.css';
import { useContext } from 'react';
import { SidebarContext } from '../../context/sidebarContext';

const Sidebar = () => {
  const { pathname } = useLocation('/page/1');
  const [sidebarClass, setSidebarClass] = useState('');
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_one} alt="profile" />
        </div>
        <span className="info-name">TimeOff</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>

              <Link
                to={`${navigationLink.page}`}
                className={`nav-link ${pathname === `${navigationLink.page}` ? 'active' : ''
                  }`}
              >
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLink.title}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='logout-btn'>
        <img
          src={iconsImgs.logout}
          className="nav-link-icon"
          alt="logout"
        />
        <span >Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
