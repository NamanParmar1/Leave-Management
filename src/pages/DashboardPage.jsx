import React, { useState, useEffect } from "react";
import ContentTop from "../components/ContentTop/ContentTop";
import { toast } from "react-toastify";
import Card from "../components/Card/Card";
import MemberDetails from "../components/MemberDetails/MemberDetails"; // Adjust the path accordingly
import { members, userInfoData, holidays } from "../data/data";
import "./DashboardPage.css";
import Sidebar from "../layout/Sidebar/Sidebar";
import { useOktaAuth } from "@okta/okta-react";
import bellGif from "../assets/images/bellanimation.gif";
import cake from "../assets/images/cakeanimation.gif";
import firebaseApp from "../Firebase/Firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { useLeaveContext } from "../context/LeaveContext";
import leaveIcon from "../assets/images/leaveanimation.gif";

const DashboardPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  const { leaveData, setLeaveData } = useLeaveContext();
  const [toastCount, setToastCount] = useState(0);

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

  useEffect(() => {
    const database = getDatabase(firebaseApp);
    const leaveRef = ref(database, "leave");

    // Listen for changes in the "leave" node
    const unsubscribe = onValue(leaveRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const leaveArray = Object.values(data);
        setLeaveData(leaveArray);
        handleLeaveToast(leaveArray);
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [setLeaveData]);

  const handleLeaveToast = (leaveArray) => {
    const isAdmin = userInfoData?.email?.endsWith("@cigna.com");
    const hasLeaveToastShown = localStorage.getItem("hasLeaveToastShown");

    // console.log("isAdmin: ", {isAdmin});
    // console.log("leaveArray: ",leaveArray);

    if (!hasLeaveToastShown && isAdmin) {
      const today = new Date();
      const todayDate = today.toISOString().split("T")[0];

      const twoDaysFromNow = new Date(today);
      twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 2);
      const formattedTwoDaysFromNow = twoDaysFromNow
        .toISOString()
        .split("T")[0];

      const tommorrow = new Date(today);
      tommorrow.setDate(tommorrow.getDate() + 1);
      const formattedTommorrow = tommorrow.toISOString().split("T")[0];

      const upcomingLeaves = leaveArray.filter((leave) => {
        const startDate = leave.startDate;
        // const formattedStartDate = startDate.toISOString().split('T')[0];
        const endDate = leave.endDate;
        // const formattedEndDate = endDate.toISOString().split('T')[0];

        return (
          startDate === formattedTwoDaysFromNow ||
          startDate === formattedTommorrow ||
          (todayDate >= startDate && todayDate <= endDate)
        );
      });
      // console.log("today: ", todayDate);
      // console.log("formattedTwoDaysFromNow: ", formattedTwoDaysFromNow);
      // console.log("formattedTommorrow: ", formattedTommorrow);

      // console.log("upcomming leaves: ",upcomingLeaves);

      if (upcomingLeaves.length > 0) {
        upcomingLeaves.forEach((leave) => {
          const startDate = new Date(leave.startDate);
          const endDate = new Date(leave.endDate);
          const leaveStartDateFormatted = startDate.toISOString().split("T")[0];
          const leaveEndDateFormatted = endDate.toISOString().split("T")[0];

          if (today < startDate) {
            let toastMessage1 = `${leave.Name} will be on ${leave.leaveType} leave! On: ${leaveStartDateFormatted} due to ${leave.reason}`;

            if (leaveStartDateFormatted !== leaveEndDateFormatted) {
              toastMessage1 = `${leave.Name} will be on ${leave.leaveType} leave! From: ${leaveStartDateFormatted} To: ${leaveEndDateFormatted} due to ${leave.reason}`;
            }
            // Show toast 2 days prior to leave start
            setToastCount((prevCount) => prevCount + 1);
            toast(
              <div className="toast-content">
                <div className="toast-icon">
                  {/* Use a suitable leave-related icon here */}
                  <img src={bellGif} alt="Leave Icon" className="icon" />
                </div>
                <div>
                  <p className="toast-username">{toastMessage1}</p>
                  {/* <p>{`From: ${leaveStartDateFormatted} To: ${leaveEndDateFormatted}`}</p> */}
                </div>
              </div>,
              {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-message",
                autoClose: 10000,
                closeButton: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                onClose: () => setToastCount((prevCount) => prevCount - 1),
              }
            );
          } else {
            let toastMessage1 = `${leave.Name} is on ${leave.leaveType} leave! due to ${leave.reason}`;

            if (leaveStartDateFormatted !== leaveEndDateFormatted) {
              toastMessage1 = `${leave.Name} is on ${leave.leaveType} leave! till: ${leaveEndDateFormatted} due to ${leave.reason}`;
            }
            // Show toast during leave period
            setToastCount((prevCount) => prevCount + 1);
            toast(
              <div className="toast-content">
                <div className="toast-icon">
                  {/* Use a suitable leave-related icon here */}
                  <img src={bellGif} alt="Leave Icon" className="icon" />
                </div>
                <div>
                  <p className="toast-username">{toastMessage1}</p>
                  {/* <p>{``}</p> */}
                </div>
              </div>,
              {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-message",
                autoClose: 10000,
                closeButton: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                onClose: () => setToastCount((prevCount) => prevCount - 1),
              }
            );
          }
        });
      }
    }
    localStorage.setItem("hasLeaveToastShown", "true");
  };

  // console.log(leaveData);

  useEffect(() => {
    const hasToastShown = localStorage.getItem("hasToastShown");

    if (!hasToastShown) {
      if (1) {
        setToastCount((prevCount) => prevCount + 1);
        toast(
          <div className="toast-content">
            <div className="toast-icon">
              <img src={bellGif} alt="Bell" className="icon" />
            </div>
            <div>
              <p className="toast-username">Welcome, {userInfoData?.name}</p>
            </div>
          </div>,
          {
            position: toast.POSITION.TOP_CENTER,
            className: "toast-message",
            autoClose: 10000,
            closeButton: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            onClose: () => setToastCount((prevCount) => prevCount - 1),
          }
        );
      }
      //setToastCount(0);
      const today = new Date().toISOString().split("T")[0];
      const formattedToday = today.substring(5);
      const nextWeek = new Date(today);
      nextWeek.setDate(nextWeek.getDate() + 7);
      const formattedNextWeek = nextWeek.toISOString().split("T")[0];
      // Format: 'YYYY-MM-DD'

      const todayHolidays = holidays.filter(
        (holiday) => holiday.date.substring(5) === formattedToday
      );

      const todayBirthdays = members.filter(
        (member) => member.birthday.substring(5) === formattedToday
      );

      const thisWeekBirthdays = members.filter(
        (member) =>
          isInWeek(member.birthday, today, formattedNextWeek) &&
          !todayBirthdays.includes(member)
      );
      const thisWeekHolidays = holidays.filter(
        (holiday) =>
          isInWeek(holiday.date, today, formattedNextWeek) &&
          !todayHolidays.includes(holiday)
      );

      let hasHolidayToastShown = false;
      let hasBirthdayToastShown = false;

      if (
        todayHolidays.length > 0 ||
        thisWeekHolidays.length > 0 ||
        todayBirthdays.length > 0 ||
        thisWeekBirthdays.length > 0
      ) {
        if (
          (todayHolidays.length > 0 || thisWeekHolidays.length > 0) &&
          !hasHolidayToastShown
        ) {
          setToastCount((prevCount) => prevCount + 1);
          toast(
            <div className="toast-content">
              <div className="toast-icon">
                <img src={bellGif} alt="Notification Bell" className="icon" />
              </div>
              <div>
                <ul>
                  {todayHolidays.map((holiday, index) => (
                    <li
                      key={index}
                    >{`Happy ${holiday.holidayDescription}!!! 🎆🎇`}</li>
                  ))}
                  {thisWeekHolidays.length > 0 && (
                    <li key="thisWeekHolidays">
                      {thisWeekHolidays.length === 1
                        ? `Upcoming holiday this week: ${thisWeekHolidays[0].holidayDescription}`
                        : `Upcoming holidays this week: ${thisWeekHolidays
                            .map((holiday) => holiday.holidayDescription)
                            .join(", ")} !!! 🎆🎇`}
                    </li>
                  )}
                </ul>
              </div>
            </div>,
            {
              position: toast.POSITION.TOP_CENTER,
              className: "toast-message",
              autoClose: 10000,
              closeButton: true,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              onClose: () => setToastCount((prevCount) => prevCount - 1),
            }
          );
          hasHolidayToastShown = true;
        }

        if (
          (todayBirthdays.length > 0 || thisWeekBirthdays.length > 0) &&
          !hasBirthdayToastShown
        ) {
          //console.log("thisweekbd", thisWeekBirthdays);
          setToastCount((prevCount) => prevCount + 1);
          toast(
            <div className="toast-content">
              <div className="toast-icon">
                <img src={cake} alt="Birthday Cake" className="icon" />
              </div>
              <div>
                <ul>
                  {todayBirthdays.map((birthday, index) => (
                    <li key={index}>
                      {((birthday.title.split(",")[1] || "")
                        .trim()
                        .split(" ")[0] || "") ===
                      userInfoData?.name?.split(" ")[0]
                        ? `Happy Birthday, ${
                            userInfoData?.name?.split(" ")[0]
                          }! 🎉🎉`
                        : `Today is ${
                            (birthday.title.split(",")[1] || "")
                              .trim()
                              .split(" ")[0] || ""
                          }'s Birthday! 🎉🎉`}
                    </li>
                  ))}
                  {thisWeekBirthdays.length > 0 && (
                    <li key="thisWeekBirthdays">
                      {thisWeekBirthdays.length === 1
                        ? `${
                            (thisWeekBirthdays[0].title.split(",")[1] || "")
                              .trim()
                              .split(" ")[0] || ""
                          }'s birthday is in this week! 🎉🎉`
                        : `Birthdays in this week: ${thisWeekBirthdays
                            .map(
                              (member) =>
                                (member.title.split(",")[1] || "")
                                  .trim()
                                  .split(" ")[0] || ""
                            )
                            .join(", ")}! 🎉🎉`}
                    </li>
                  )}
                </ul>
              </div>
            </div>,
            {
              position: toast.POSITION.TOP_CENTER,
              className: "toast-message",
              autoClose: 10000,
              closeButton: true,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              onClose: () => setToastCount((prevCount) => prevCount - 1),
            }
          );
          hasBirthdayToastShown = true;
        }

        //localStorage.setItem("hasToastShown", "true");
      }
      localStorage.setItem("hasToastShown", "true");
    }
  }, [userInfoData]);

  const isInWeek = (date, startOfWeek, endOfWeek) => {
    const date1 = new Date(date);
    return date1 > new Date(startOfWeek) && date1 <= new Date(endOfWeek);
  };
  const handleToastClose = () => {
    setIsToastVisible(false);
  };

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseDetails = () => {
    setSelectedMember(null);
  };

  return (
    <>
      <Sidebar />
      <div className={`main-content ${toastCount > 0 ? "blurred" : ""}`}>
        <ContentTop />
        <div className="card-container">
          {members.map((member) => (
            <div
              className="card-wrapper"
              key={member.id}
              onClick={() => handleCardClick(member)}
            >
              <Card member={member} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default DashboardPage;
