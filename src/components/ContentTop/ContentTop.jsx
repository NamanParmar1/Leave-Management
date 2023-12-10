import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { useLocation, useNavigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { userInfoData } from "../../data/data";


function setTitle(path){
    if(path === '/home'){
        return 'Team Members';
    }else if(path === '/page/2'){
        return 'Team Members';
    }else if(path === '/calendar/leave'){
        return 'Leave Calendar';
    }else if(path === '/calendar/holiday'){
        return 'Holiday Calendar';
    }else if(path === '/calendar/birthday'){
        return 'Birthday Calendar';
    }else if(path === '/applyleave'){
        return 'Apply Leaves';
    }else if(path === '/leavehistory'){
        return 'Leave History';
    }else if(path === '/notifications'){
        return 'Notifications';
    }else if(path === '/page/7'){
        return 'Profile';
    }else{
        return 'Home';
    }
}

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const { pathname } = useLocation();
  const title = setTitle(pathname);
  const navigate = useNavigate();



  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  
  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
        // When the user isn't authenticated, forget any user info
        setUserInfo(userInfoData);
      } else {
        setUserInfo(authState.idToken.claims);
        // Update userInfoData in data.js
        Object.assign(userInfoData, authState.idToken.claims);
      }
  }, [authState, oktaAuth]); 



  const navigateToAlerts = () => {
    navigate('/notifications');
  };

  



  console.log(userInfo);
  return (
    <>
    <div className="main-content-top">
        <div className="content-top-left">
            <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar() }>
                <img src={ iconsImgs.menu } alt="" />
            </button>
            <h3 className="content-top-title">{title}</h3>
            
           
        </div>
        
        <div className="content-top-btns">
            <button type="button" className="search-btn content-top-btn">
                <img src={ iconsImgs.search } alt="" />
            </button>
            <button className="notification-btn content-top-btn"   onClick={navigateToAlerts}>
                <img src={ iconsImgs.bell } />
                <span className="notification-btn-dot"></span>
            </button>
        </div>
    </div>
    <div>
    <h3 className="content-top-title">Welcome, {userInfo?.name}</h3>  
    </div>
    </>
  )
}

export default ContentTop
