import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { SidebarProvider } from './context/sidebarContext.jsx';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LeaveProvider } from './context/LeaveContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <LeaveProvider>
    <SidebarProvider>
      <Router>
        <App />
      </Router>
    </SidebarProvider>
  </LeaveProvider>
)
