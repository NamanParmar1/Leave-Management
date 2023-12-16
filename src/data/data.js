import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, page: '/home', title: 'Dashboard', image: iconsImgs.home },
    // { id: 2, title: 'Members', image: iconsImgs.budget },
    { id: 3, page: "/calendar", title: 'Calendar', image: iconsImgs.calender },
    { id: 4, page: "/applyleave", title: 'Apply Leave', image: iconsImgs.applyleave },
    { id: 5, page: "/leavehistory", title: 'Leave History', image: iconsImgs.history },
    { id: 6, page: "/notifications", title: 'Notifications', image: iconsImgs.bell }
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
        birthday:"2024-12-16"
    },
    {
        id: 8,
        image: personsImgs.naman,
        title: "Parmar, Naman (2273715)",
        designation: "Programmer Analyst Trainee-GE",
        team: "ADM AVM HC Delivery",
        location: "Technocomplex (TCX) STPI",
        birthday:"2024-12-16"
    },
    {
        id: 9,
        image: personsImgs.sunny,
        title: "Chakraborty, Sunny (2273720)",
        designation: "Programmer Analyst Trainee-GE",
        team: "ADM AVM HC Delivery",
        location: "Technocomplex (TCX) STPI",
        birthday:"2024-12-15"
    },
    {
        id: 10,
        image: personsImgs.harshit,
        title: "Raj, Harshit (2273605)",
        designation: "Programmer Analyst Trainee-GE",
        team: "ADM AVM HC Delivery",
        location: "Technocomplex (TCX) STPI",
        birthday:"2024-12-15"
    },
    {
        id: 11,
        image: personsImgs.munirahul,
        title: "Desetty, Munirahul (Cognizant)",
        designation: "Software Engineer",
        team: "ADM AVM HC Delivery",
        location: "CHN - TBM",
        birthday:"2024-12-15"
    },
    {
        id: 12,
        image: personsImgs.swathi,
        title: "Malineni, Swathi (Cognizant)",
        designation: "Software Engineer",
        team: "ADM AVM HC Delivery",
        location: "Madhapur Bld 12A (MDH) SEZ",
        birthday:"2024-12-16"
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
      date: "2023-01-01",
      day: "Sunday",
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
      date: "2023-01-15",
      day: "Sunday",
      locations: {
        Chennai: "NH",
        Coimbatore: "NH",
        Bengaluru: "NH",
        Mangalore: "NH"
      }
    },
    {
      holidayDescription: "Nethaji Birthday",
      date: "2023-01-23",
      day: "Monday",
      locations: {
        Gurgaon: "RH"
      }
    },
    {
      holidayDescription: "Republic Day",
      date: "2023-01-26",
      day: "Thursday",
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
      date: "2023-03-07",
      day: "Tuesday",
      locations: {
        Gurgaon: "RH",
        Noida: "RH",
        Ahmedabad: "RH",
        Kolkata: "RH"
      }
    },
    {
      holidayDescription: "Ugadi / Gudhi Padwa",
      date: "2023-03-22",
      day: "Wednesday",
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
      date: "2023-04-07",
      day: "Friday",
      locations: {
        Noida: "RH"
      }
    },
    {
      holidayDescription: "Tamil New year",
      date: "2023-04-14",
      day: "Friday",
      locations: {
        Chennai: "RH",
        Coimbatore: "RH"
      }
    },
    {
      holidayDescription: "Ramzan ( Id - ul - Fitr )",
      date: "2023-04-21",
      day: "Friday",
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
      date: "2023-05-01",
      day: "Monday",
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
      date: "2023-06-02",
      day: "Friday",
      locations: {
        Hyderabad: "RH"
      }
    },
    {
      holidayDescription: "Independence Day",
      date: "2023-08-15",
      day: "Tuesday",
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
      date: "2023-08-28",
      day: "Monday",
      locations: {
        Kochi: "RH"
      }
    },
    {
      holidayDescription: "Thiruvonam",
      date: "2023-08-29",
      day: "Tuesday",
      locations: {
        Chennai: "RH",
        Coimbatore: "RH",
        Hyderabad: "RH",
        Kochi: "RH"
      }
    },
    {
      holidayDescription: "Ganesh Chaturthi",
      date: "2023-09-18",
      day: "Monday",
      locations: {
        Bengaluru: "RH",
        Mangalore: "RH",
        Hyderabad: "RH",
        Pune: "RH"
      }
    },
    {
      holidayDescription: "Gandhi Jayanti",
      date: "2023-10-02",
      day: "Monday",
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
      date: "2023-10-22",
      day: "Sunday",
      locations: {
        Kolkata: "NH"
      }
    },
    {
      holidayDescription: "Mahanavami ( Durga Puja )",
      date: "2023-10-23",
      day: "Monday",
      locations: {
        Gurgaon: "RH"
      }
    },
    {
      holidayDescription: "Dussehra ( Vijaya Dashami )",
      date: "2023-10-24",
      day: "Tuesday",
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
      date: "2023-11-01",
      day: "Wednesday",
      locations: {
        Bengaluru: "RH",
        Mangalore: "RH"
      }
    },
    {
      holidayDescription: "Diwali / Kali Puja",
      date: "2023-11-12",
      day: "Sunday",
      locations: {
        Kolkata: "NH"
      }
    },
    {
      holidayDescription: "Post Deepavali",
      date: "2023-11-13",
      day: "Monday",
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
      date: "2023-12-16",
      day: "Monday",
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

  
  

