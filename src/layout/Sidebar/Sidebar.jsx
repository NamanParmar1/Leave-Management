// Sidebar.jsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { personsImgs, iconsImgs } from '../../utils/images';
import { navigationLinks, userInfoData } from '../../data/data';
import './Sidebar.css';
import { useContext } from 'react';
import { SidebarContext } from '../../context/sidebarContext';
import { useOktaAuth } from '@okta/okta-react';
import { set } from 'firebase/database';




const Sidebar = () => {
  const { pathname } = useLocation();
  //const [isCalendarMenuOpen, setCalendarMenuOpen] = useState(pathname.startsWith('/calendar')? true:false);
  const [calendarMenuClass, setCalendarMenuClass] = useState(pathname.startsWith('/calendar')?'open':'');
  const [sidebarClass, setSidebarClass] = useState('');
  // const [name, setName] = useState(userInfoData?.name);
  const { isSidebarOpen } = useContext(SidebarContext);
  const navigate = useNavigate();

const { oktaAuth } = useOktaAuth();

const handleLogout = async () => {
  localStorage.removeItem('hasToastShown');
  localStorage.removeItem('hasLeaveToastShown');
  await oktaAuth.signOut()
};
  // useEffect(() => {
  //   setName(userInfoData?.name)
  // }, [userInfoData]);

  // useEffect(() => {
  //   if (pathname.startsWith('/calendar')) {
  //     setCalendarMenuClass('open');
  //   } else {
  //     setCalendarMenuClass('');
  //   }
  // }, [pathname]);

  



  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  const handleCalendarClick = () => {
    //setCalendarMenuOpen((isCalendarMenuOpen)=>!isCalendarMenuOpen);
    if(!pathname.startsWith('/calendar')){
      navigate('/calendar/leave');
      setCalendarMenuClass('open');
    }else{
      if(calendarMenuClass === 'open'){
        setCalendarMenuClass('');
      }else{
        setCalendarMenuClass('open');
      }

    }
    

  };



  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_one} alt="profile" />
        </div>
        <span className="info-name">{userInfoData?.name}</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>

              {navigationLink.id === 3 ? (
                <div
                  className={`nav-link ${pathname.startsWith('/calendar') ? 'active' : ''}`}
                  onClick={handleCalendarClick}
                >
                  <img
                    src={navigationLink.image}
                    className="nav-link-icon"
                    alt={navigationLink.title}
                  />
                  <span className="nav-link-text">{navigationLink.title}</span>
                </div>
              ) : (
                <Link
                  to={`${navigationLink.page}`}
                  className={`nav-link ${pathname === `${navigationLink.page}` ? 'active' : ''}`}
                >
                  <img
                    src={navigationLink.image}
                    className="nav-link-icon"
                    alt={navigationLink.title}
                  />
                  <span className="nav-link-text">{navigationLink.title}</span>
                </Link>
              )}
              {(pathname.startsWith('/calendar') && navigationLink.id === 3) && (
                <ul className={`sub-links ${calendarMenuClass}`}>
                  <li className="sub-link-item">
                    <Link to ={'/calendar/leave'}
                    className={`sub-link-item-link ${pathname === '/calendar/leave' ? 'active' : ''}`}>
                      <img
                        src={iconsImgs.leave}
                        className="nav-link-icon"
                        alt={navigationLink.title}
                      />
                      <span className="nav-link-text">Leave Calendar</span>

                    </Link>
                  </li>
                  <li className="sub-link-item">
                  <Link to ={'/calendar/holiday'}
                    className={`sub-link-item-link ${pathname === '/calendar/holiday' ? 'active' : ''}`}>
                    <img
                      src={iconsImgs.holiday}
                      className="nav-link-icon"
                      alt={navigationLink.title}
                    />
                      <span className="nav-link-text">Holiday Calendar</span>
                    </Link>
                  </li>
                  <li className="sub-link-item">
                  <Link to ={'/calendar/birthday'}
                    className={`sub-link-item-link ${pathname === '/calendar/birthday' ? 'active' : ''}`}>
                    <img
                      src={iconsImgs.birthday}
                      className="nav-link-icon"
                      alt={navigationLink.title}
                    />
                      <span className="nav-link-text">Birthday Calendar</span></Link>
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className='logout-btn'  onClick={handleLogout}>
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
