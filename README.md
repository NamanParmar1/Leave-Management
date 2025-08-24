# Leave Management System

A comprehensive, modern web application for managing employee leaves, holidays, and organizational events. Built with React and Firebase, featuring secure authentication and real-time data synchronization.

## 🚀 Features

### Core Functionality
- **Leave Management**: Apply, track, and manage employee leave requests
- **Calendar Integration**: Multiple calendar views for leaves, holidays, and birthdays
- **Role-based Access Control**: Different permissions for admins and employees
- **Real-time Updates**: Live data synchronization using Firebase
- **Secure Authentication**: Okta SSO integration for enterprise-grade security

### User Experience
- **Responsive Design**: Modern, intuitive interface with sidebar navigation
- **Interactive Calendars**: Visual representation of leave schedules and events
- **Toast Notifications**: Real-time alerts for leave updates and reminders
- **Member Directory**: Employee profiles with team and location information

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Authentication**: Okta SSO
- **Database**: Firebase Realtime Database
- **State Management**: React Context API
- **Routing**: React Router v6
- **UI Components**: Custom CSS + Semantic UI React
- **Calendar Libraries**: React Calendar, FullCalendar, React Big Calendar
- **Styling**: Custom CSS with modern design principles

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Calendar/       # Calendar-related components
│   ├── Leave/          # Leave management components
│   ├── Login/          # Authentication components
│   └── ...
├── context/            # React Context for state management
├── data/               # Static data and configurations
├── Firebase/           # Firebase configuration and setup
├── layout/             # Layout components (Sidebar, Content)
├── pages/              # Main application pages
├── reducer/            # State reducers
└── utils/              # Utility functions and helpers
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Steps
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Leave-Management-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Update Firebase configuration in `src/Firebase/Firebase.jsx`
   - Set up Firebase Realtime Database rules

4. **Configure Okta Authentication**
   - Update Okta configuration in `src/components/OktaConfig/oktaAuth.js`
   - Set up Okta application and user groups

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## 🔐 Authentication & Security

- **Okta SSO**: Enterprise-grade single sign-on authentication
- **Protected Routes**: Authentication-based access control
- **Role-based Permissions**: Different access levels for admins and employees
- **Secure API**: Firebase security rules for data protection

## 📊 Key Components

### Dashboard
- Overview of leave statistics
- Team member information
- Quick access to main features
- Real-time notifications

### Leave Management
- **Apply Leave**: Submit leave requests with date validation
- **Leave Calendar**: Visual representation of team leave schedules
- **Leave History**: Track all leave requests and approvals
- **Conflict Detection**: Prevent overlapping leave requests

### Calendar Views
- **Leave Calendar**: Team leave schedule visualization
- **Holiday Calendar**: Company holiday tracking
- **Birthday Calendar**: Team member birthday celebrations

### Admin Features
- View all employee leave requests
- Manage team leave schedules
- Access to comprehensive leave data
- Team member management

## 🌐 Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build

## 🔄 State Management

The application uses React Context API for centralized state management:

- **LeaveContext**: Manages leave data across components
- **SidebarContext**: Handles sidebar navigation state
- **Real-time Updates**: Firebase listeners for live data synchronization

## 📱 Responsive Design

- Mobile-first approach
- Adaptive sidebar navigation
- Responsive calendar layouts
- Touch-friendly interface elements

## 🚀 Deployment

The application is built with Vite and can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI for deployment
- **AWS S3**: Upload the `dist` folder to S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🆘 Support

For technical support or questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ using React, Firebase, and modern web technologies**
 
