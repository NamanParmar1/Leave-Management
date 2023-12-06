import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { useLocation, useNavigate } from 'react-router-dom';


function setTitle(path){
    if(path === '/page/1'){
        return 'Team Members';
    }else if(path === '/page/2'){
        return 'Team Members';
    }else if(path === '/page/3'){
        return 'Calendars';
    }else if(path === '/page/4'){
        return 'Apply Leaves';
    }else if(path === '/page/5'){
        return 'Leave History';
    }else if(path === '/page/6'){
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

//   const navigateToAlerts = () => {
//     navigate('/page/6');
//   };





  return (
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
            <button className="notification-btn content-top-btn"   >
                <img src={ iconsImgs.bell } />
                <span className="notification-btn-dot"></span>
            </button>
        </div>
    </div>
  )
}

export default ContentTop
