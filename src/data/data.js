import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, page: '/home', title: 'Dashboard', image: iconsImgs.home },
    // { id: 2, title: 'Members', image: iconsImgs.budget },
    { id: 3, page: "/calendar", title: 'Calendar', image: iconsImgs.calender },
    { id: 4, page: "/applyleave", title: 'Apply Leave', image: iconsImgs.applyleave },
    { id: 5, page: "/leavehistory", title: 'Leave History', image: iconsImgs.history }
    // { id: 6, page: "/notifications", title: 'Notifications', image: iconsImgs.bell }
    // { id: 7, title: 'Account', image: iconsImgs.user },
    // { id: 8, title: 'Settings', image: iconsImgs.gears }
];

export const members = [
    {
        id: 7,
        image: personsImgs.maheswari,
        title: "Ganesan, Maheswari (663928)",
        designation: "Technical Lead",
        team: "ADM AVM HC Delivery",
        location: "Chennai - TN IND CLT",
        birthday:"2024-12-16",
        city : 'Chennai'
    },
    {
        id: 8,
        image: personsImgs.naman,
        title: "Parmar, Naman (2273715)",
        designation: "Programmer Analyst Trainee-GE",
        team: "ADM AVM HC Delivery",
        location: "Technocomplex (TCX) STPI",
        birthday:"2023-12-26",
        city : "kolkata"
    },
    {
        id: 9,
        image: personsImgs.sunny,
        title: "Chakraborty, Sunny (2273720)",
        designation: "Programmer Analyst Trainee-GE",
        team: "ADM AVM HC Delivery",
        location: "Technocomplex (TCX) STPI",
        birthday:"2023-12-29",
        city:'Kolkata'
    },
    {
        id: 10,
        image: personsImgs.harshit,
        title: "Raj, Harshit (2273605)",
        designation: "Programmer Analyst Trainee-GE",
        team: "ADM AVM HC Delivery",
        location: "Technocomplex (TCX) STPI",
        birthday:"2024-01-05",
        city:'Kolkata'
    },
    {
        id: 11,
        image: personsImgs.munirahul,
        title: "Desetty, Munirahul (Cognizant)",
        designation: "Software Engineer",
        team: "ADM AVM HC Delivery",
        location: "CHN - TBM",
        birthday:"2024-12-15",
        city:'Chennai'
    },
    {
        id: 12,
        image: personsImgs.swathi,
        title: "Malineni, Swathi (Cognizant)",
        designation: "Software Engineer",
        team: "ADM AVM HC Delivery",
        location: "Madhapur Bld 12A (MDH) SEZ",
        birthday:"2024-12-19",
        city:'Hyderabad'
    }
];
export const userInfoData = {};

export const employeeDetails = [
    { name: 'Sunny Chakraborty', color: 'red' },
    { name: 'Naman Parmar', color: 'blue' },
    { name: 'Harshit Raj', color: 'purple' },
    { name: 'Maheswari Ganesan', color: 'orange' },
    { name: 'Munirahul Desetty', color: 'violet' },
    { name: 'Swathi Malineni', color: 'pink' },
    
  ];



  export const holidays = [
    {
      holidayDescription: "New Year",
      date: "2024-01-01",
      day: "Sunday",
      type:"NH",
      locations: {
        Chennai: "NH",
        Coimbatore: "NH",
        Bengaluru: "NH",
        Mangalore: "NH",
        Noida: "NH",
        Kolkata: "NH",
        Ahmedabad: "NH",
        Mumbai: "NH",
        Pune: "NH",
        Hyderabad: "NH",
        Kochi: "NH"
      }
    },
    {
      holidayDescription: "Pongal ( Makar Sankrati )",
      date: "2024-01-15",
      day: "Sunday",
      type:"NH",
      locations: {
        Chennai: "NH",
        Coimbatore: "NH",
        Bengaluru: "NH",
        Mangalore: "NH"
      }
    },
    {
      holidayDescription: "Nethaji Birthday",
      date: "2024-01-23",
      day: "Monday",
      type:"RH",
      locations: {
        Gurgaon: "RH"
      }
    },
    {
      holidayDescription: "Republic Day",
      date: "2024-01-26",
      day: "Thursday",
      type:"NH",
      locations: {
        Chennai: "NH",
        Coimbatore: "NH",
        Bengaluru: "NH",
        Mangalore: "NH",
        Gurgaon: "NH",
        Noida: "NH",
        Ahmedabad: "NH",
        Kolkata: "NH",
        Mumbai: "NH",
        Pune: "NH",
        Hyderabad: "NH",
        Kochi: "NH"
      }
    },
    {
      holidayDescription: "Holi",
      date: "2024-03-07",
      day: "Tuesday",
      type:"RH",
      locations: {
        Gurgaon: "RH",
        Noida: "RH",
        Ahmedabad: "RH",
        Kolkata: "RH"
      }
    },
    {
      holidayDescription: "Ugadi / Gudhi Padwa",
      date: "2024-03-22",
      day: "Wednesday",
      type:"RH",
      locations: {
        Bengaluru: "RH",
        Mangalore: "RH",
        Hyderabad: "RH",
        Kochi: "RH",
        Pune: "RH"
      }
    },
    {
      holidayDescription: "Good Friday",
      date: "2024-04-07",
      day: "Friday",
      type:"RH",
      locations: {
        Noida: "RH"
      }
    },
    {
      holidayDescription: "Tamil New year",
      date: "2024-04-14",
      day: "Friday",
      type:"RH",
      locations: {
        Chennai: "RH",
        Coimbatore: "RH"
      }
    },
    {
      holidayDescription: "Ramzan ( Id - ul - Fitr )",
      date: "2024-04-21",
      day: "Friday",
      type:"RH",
      locations: {
        Chennai: "RH",
        Coimbatore: "RH",
        Bengaluru: "RH",
        Mangalore: "RH",
        Gurgaon: "RH",
        Noida: "RH",
        Ahmedabad: "RH",
        Kolkata: "RH",
        Mumbai: "RH",
        Pune: "RH",
        Hyderabad: "RH",
        Kochi: "RH"
      }
    },
    {
      holidayDescription: "May Day",
      date: "2024-05-01",
      day: "Monday",
      type:"NH",
      locations: {
        Chennai: "NH",
        Coimbatore: "NH",
        Bengaluru: "NH",
        Mangalore: "NH",
        Gurgaon: "NH",
        Noida: "NH",
        Ahmedabad: "NH",
        Kolkata: "NH",
        Mumbai: "NH",
        Pune: "NH",
        Hyderabad: "NH",
        Kochi: "NH"
      }
    },
    {
      holidayDescription: "Telangana Formation Day",
      date: "2024-06-02",
      day: "Friday",
      type:"RH",
      locations: {
        Hyderabad: "RH"
      }
    },
    {
      holidayDescription: "Independence Day",
      date: "2024-08-15",
      day: "Tuesday",
      type:"NH",
      locations: {
        Chennai: "NH",
        Gurgaon: "NH",
        Noida: "NH",
        Ahmedabad: "NH",
        Kolkata: "NH",
        Mumbai: "NH",
        Pune: "NH",
        Hyderabad: "NH",
        Kochi: "NH"
      }
    },
    {
      holidayDescription: "First Onam",
      date: "2024-08-28",
      day: "Monday",
      type:"RH",
      locations: {
        Kochi: "RH"
      }
    },
    {
      holidayDescription: "Thiruvonam",
      date: "2024-08-29",
      day: "Tuesday",
      type:"RH",
      locations: {
        Chennai: "RH",
        Coimbatore: "RH",
        Hyderabad: "RH",
        Kochi: "RH"
      }
    },
    {
      holidayDescription: "Ganesh Chaturthi",
      date: "2024-09-18",
      day: "Monday",
      type:"RH",
      locations: {
        Bengaluru: "RH",
        Mangalore: "RH",
        Hyderabad: "RH",
        Pune: "RH"
      }
    },
    {
      holidayDescription: "Gandhi Jayanti",
      date: "2024-10-02",
      day: "Monday",
      type:"NH",
      locations: {
        Chennai: "NH",
        Coimbatore: "NH",
        Bengaluru: "NH",
        Mangalore: "NH",
        Gurgaon: "NH",
        Noida: "NH",
        Ahmedabad: "NH",
        Kolkata: "NH",
        Mumbai: "NH",
        Pune: "NH",
        Hyderabad: "NH",
        Kochi: "NH"
      }
    },
    {
      holidayDescription: "Astami ( Durga Puja )",
      date: "2024-10-22",
      day: "Sunday",
      type:"NH",
      locations: {
        Kolkata: "NH"
      }
    },
    {
      holidayDescription: "Mahanavami ( Durga Puja )",
      date: "2024-10-23",
      day: "Monday",
      type:"RH",
      locations: {
        Gurgaon: "RH"
      }
    },
    {
      holidayDescription: "Dussehra ( Vijaya Dashami )",
      date: "2024-10-24",
      day: "Tuesday",
      type:"RH",
      locations: {
        Chennai: "RH",
        Coimbatore: "RH",
        Bengaluru: "RH",
        Mangalore: "RH",
        Gurgaon: "RH",
        Noida: "RH",
        Ahmedabad: "RH",
        Kolkata: "RH",
        Mumbai: "RH",
        Pune: "RH",
        Hyderabad: "RH",
        Kochi: "RH"
      }
    },
    {
      holidayDescription: "Kannada Rajyotsav",
      date: "2024-11-01",
      day: "Wednesday",
      type:"RH",
      locations: {
        Bengaluru: "RH",
        Mangalore: "RH"
      }
    },
    {
      holidayDescription: "Diwali / Kali Puja",
      date: "2024-11-12",
      day: "Sunday",
      type:"NH",
      locations: {
        Kolkata: "NH"
      }
    },
    {
      holidayDescription: "Post Deepavali",
      date: "2024-11-13",
      day: "Monday",
      type:"RH",
      locations: {
        Chennai: "RH",
        Coimbatore: "RH",
        Bengaluru: "RH",
        Mangalore: "RH",
        Gurgaon: "RH",
        Noida: "RH",
        Ahmedabad: "RH",
        Kolkata: "RH",
        Mumbai: "RH",
        Pune: "RH",
        Hyderabad: "RH",
        Kochi: "RH"
      }
    },
    {
      holidayDescription: "Christmas",
      date: "2023-12-26",
      day: "Monday",
      type:"RH",
      locations: {
        Chennai: "RH",
        Coimbatore: "RH",
        Bengaluru: "RH",
        Mangalore: "RH",
        Gurgaon: "RH",
        Noida: "RH",
        Ahmedabad: "RH",
        Kolkata: "RH",
        Mumbai: "RH",
        Pune: "RH",
        Hyderabad: "RH",
        Kochi: "RH"
      }
    }
  ];

  
  

