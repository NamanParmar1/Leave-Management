import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1,page:'/home', title: 'Dashboard', image: iconsImgs.home },
    // { id: 2, title: 'Members', image: iconsImgs.budget },
    { id: 3,page:"/calendar", title: 'Calendar', image: iconsImgs.calender },
    { id: 4,page:"/applyleave", title: 'Apply Leave', image: iconsImgs.applyleave },
    { id: 5,page:"/leavehistory", title: 'Leave History', image: iconsImgs.history },
    { id: 6,page:"/notifications", title: 'Notifications', image: iconsImgs.bell }
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
        location: "Chennai - TN IND CLT"
    },
    {
        id: 8,
        image: personsImgs.naman,
        title: "Parmar, Naman (2273715)",
        designation: "Programmer Analyst Trainee-GE",
        team: "ADM AVM HC Delivery",
        location: "Technocomplex (TCX) STPI"
    },
    {
        id: 9,
        image: personsImgs.sunny,
        title: "Chakraborty, Sunny (2273720)",
        designation: "Programmer Analyst Trainee-GE",
        team: "ADM AVM HC Delivery",
        location: "Technocomplex (TCX) STPI"
    },
    {
        id: 10,
        image: personsImgs.harshit,
        title: "Raj, Harshit (2273605)",
        designation: "Programmer Analyst Trainee-GE",
        team: "ADM AVM HC Delivery",
        location: "Technocomplex (TCX) STPI"
    },
    {
        id: 11,
        image: personsImgs.munirahul,
        title: "Desetty, Munirahul (Cognizant)",
        designation: "Software Engineer",
        team: "ADM AVM HC Delivery",
        location: "CHN - TBM"
    },
    {
        id: 12,
        image: personsImgs.swathi,
        title: "Malineni, Swathi (Cognizant)",
        designation: "Software Engineer",
        team: "ADM AVM HC Delivery",
        location: "Madhapur Bld 12A (MDH) SEZ"
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
  