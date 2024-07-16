
"use client";

import Card from "../../components/ui/Card";
import SelectMonth from "../../components/chart/SelectMonth";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import Icon from "../../components/ui/Icon";
import LinearProgress from '@mui/material/LinearProgress';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from "react";
import { useTranslation } from "react-i18next";



const localizer = momentLocalizer(moment);
const ProfileDetail = () => {
    const { t } = useTranslation();
    const campaigns = [
        {
            start: t("Overview.StaffScheduleChild.StartDate"),
            end: "2 Feb,2024",
        },
        {
            start: t("Overview.StaffScheduleChild.EndDate"),
            end: "6 June,2024",
        },
        {
            start: t("Overview.StaffScheduleChild.StartTime"),
            end: "8:00 AM",
        },
        {
            start: t("Overview.StaffScheduleChild.EndTime"),
            end: "2:00 PM",
        },

    ];
    const dateAndTime = [
        {
            start: t("Overview.StaffScheduleChild.NextShiftChild.Date"),
            end: "2022-06-09",
        },
        {
            start: t("Overview.StaffScheduleChild.NextShiftChild.Time"),
            end: "09:00 AM",
        },
    ];
    const events = [
        {
            title: 'Leave',
            start: new Date(),
            end: new Date(new Date().setHours(new Date().getHours() + 1)),
        },
        {
            // title: 'Manage',
            start: new Date(new Date().setHours(new Date().getHours() + 1)),
            end: new Date(new Date().setHours(new Date().getHours() + 2)),
        },
    ];
    const [publicServiceJoining, setPublicServiceJoining] = useState<string>('');
    const [joiningAtCHUDeCocody, setJoiningAtCHUDeCocody] = useState<string>('');
    return (
        <div>
            <HomeBredCurbs title={t("Overview.MyProfile")} />
            <div className="space-y-5">
                <div className="grid grid-cols-12 gap-5">
                    <div className="lg:col-span-8 col-span-12 space-y-5">
                        <Card
                            bodyClass="p-4"
                            subtitle=""
                            headerslot=""
                            noborder={false}
                            title={t("Overview.MyAbsencesAndHolidays")}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">{t("Overview.MyAbsencesAndHolidaysChild.TotalAbsents")}</p>
                                    <p className="text-2xl font-bold text-blue-500">354</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">{t("Overview.MyAbsencesAndHolidaysChild.Percentage")}</p>
                                    <p className="text-xl font-semibold text-blue-500">25.67%</p>
                                </div>
                            </div>
                        </Card>

                        <Card
                            bodyClass="p-4"
                            subtitle={""}
                            headerslot={""}
                            noborder={false}
                            title={t("Overview.RemainingLeave")}
                        >
                            {/* Add content related to vacations balance here */}
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold">{t("Overview.RemainingLeaveChild.VacationBalance")}</span>
                                    <span className="text-gray-500">24 days</span>
                                </div>
                                <div className="flex items-center">
                                    <Icon icon="heroicons:currency-dollar" className="w-6 h-6 text-gray-500 mr-2" />
                                    <span className="text-sm text-gray-500">{t("Overview.RemainingLeaveChild.ViewDetails")}</span>
                                </div>
                            </div>
                        </Card>
                        <Card
                            bodyClass="p-4"
                            subtitle=""
                            headerslot=""
                            noborder={false}
                            title={t("Overview.UpcomingLeaves")}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">{t("Overview.UpcomingLeavesChild.NumberOfLeaves")}</p>
                                    <p className="text-2xl font-bold text-red-500">15%</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">{t("Overview.UpcomingLeavesChild.Percentage")}</p>
                                    <p className="text-xl font-semibold text-red-500">1.67%</p>
                                </div>
                            </div>
                        </Card>

                        <Card
                            bodyClass="p-4"
                            subtitle={""}
                            headerslot={""}
                            noborder={false}
                            title={t("Overview.LeaveCalendar")}
                        >
                            <div style={{ height: 500 }}>
                                <Calendar
                                    localizer={localizer}
                                    events={events}
                                    startAccessor="start"
                                    endAccessor="end"
                                    style={{ flex: 1 }}
                                />
                            </div>
                        </Card>
                    </div>
                    <div className="lg:col-span-4 col-span-12 space-y-5">
                        <div className="lg:col-span-4 col-span-12 space-y-5">
                            {/* <Card
                                bodyClass="p-4"
                                subtitle={""}
                                noborder={false}
                                title="Profile Detail"
                                headerslot={""}
                            >
                                <button
                                    onClick={() => navigate("/dashboard/profile/editProfile")}
                                    style={{ cursor: "pointer" }}
                                    className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600 w-[60%] ">Edit Profile</button>
                            </Card> */}
                            <Card
                                bodyClass="p-4"
                                subtitle={""}
                                noborder={false}
                                title={t("Overview.StaffSchedule")}
                                headerslot={<SelectMonth />}
                            >
                                <ul className="divide-y divide-slate-100 dark:divide-slate-700">
                                    {campaigns.map((item, i) => (
                                        <li
                                            key={i}
                                            className="first:text-xs text-sm first:text-slate-600 text-slate-600 dark:text-slate-300 py-2 first:uppercase"
                                        >
                                            <div className="flex justify-between">
                                                <span>{item.start}</span>
                                                <span>{item.end}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex  flex-col justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold mt-[1rem]">{t("Overview.StaffScheduleChild.NextShift")}</span>
                                        {/* <span className="text-gray-500">Schedule</span> */}
                                    </div>
                                    <ul className="divide-y divide-slate-100 dark:divide-slate-700">
                                        {dateAndTime.map((item, i) => (
                                            <li
                                                key={i}
                                                className="first:text-xs text-sm first:text-slate-600 text-slate-600 dark:text-slate-300 py-2 first:uppercase"
                                            >
                                                <div className="flex justify-between">
                                                    <span>{item.start}</span>
                                                    <span>{item.end}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                            <Card
                                bodyClass="p-4"
                                subtitle={""}
                                noborder={false}
                                title={t("Overview.MyAppraisal")}
                                headerslot={<SelectMonth />}
                            >
                                <LinearProgress sx={{ color: 'bg-yellow-900' }} variant="determinate" value={75} />

                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold mt-[1rem]">{t("Overview.MyAppraisalChild.MyAppraisal")}</span>
                                        <span className="text-gray-500">{t("Overview.MyAppraisalChild.Status")}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Icon icon="heroicons:check-circle" className="w-6 h-6 text-gray-500 mr-2" />
                                        <span className="text-sm text-gray-500">5/4</span>
                                    </div>
                                </div>

                            </Card>
                            <Card
                                bodyClass="p-4"
                                subtitle={""}
                                noborder={false}
                                title={t("Overview.MyFeedback")}
                                headerslot={<SelectMonth />}
                            >
                                <LinearProgress sx={{ color: 'bg-yellow-900' }} variant="determinate" value={60} />

                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold mt-[1rem]">{t("Overview.MyFeedbackChild.MyFeedback")}</span>
                                        <span className="text-gray-500">{t("Overview.MyFeedbackChild.Status")}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Icon icon="heroicons:check-circle" className="w-6 h-6 text-gray-500 mr-2" />
                                        <span className="text-sm text-gray-500">5/3</span>
                                    </div>
                                </div>

                            </Card>
                            <Card
                                bodyClass="p-4"
                                subtitle={""}
                                noborder={false}
                                title=""
                                headerslot={""}
                            >
                                <form className="max-w-md mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
                                    <div className="mb-4">
                                        <label htmlFor="publicServiceJoining" className="block text-gray-700 font-bold mb-2">
                                            {t("Overview.CalendarFormChild.PublicServiceJoiningDate")}:
                                        </label>
                                        <input
                                            type="date"
                                            id="publicServiceJoining"
                                            value={publicServiceJoining}
                                            onChange={(e) => setPublicServiceJoining(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="joiningAtCHUDeCocody" className="block text-gray-700 font-bold mb-2">
                                            {t("Overview.CalendarFormChild.JoiningChuDeCocodyDate")}:
                                        </label>
                                        <input
                                            type="date"
                                            id="joiningAtCHUDeCocody"
                                            value={joiningAtCHUDeCocody}
                                            onChange={(e) => setJoiningAtCHUDeCocody(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                    <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                        Submit
                                    </button>
                                </form>

                            </Card>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfileDetail;


// "use client";
// import Icon from "../../components/ui/Icon";
// import Card from "../../components/ui/Card";
// import BasicArea from "@/components/partials/chart/appex-chart/BasicArea";

// const Profile: React.FC = () => {
//     return (
//         <div>
//             <div className="space-y-5 profile-page">
//                 <div className="profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]">
//                     <div className="bg-slate-900 dark:bg-slate-700 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg"></div>
//                     <div className="profile-box flex-none md:text-start text-center">
//                         <div className="md:flex items-end md:space-x-6 rtl:space-x-reverse">
//                             <div className="flex-none">
//                                 <div className="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative">
//                                     <img
//                                         src="/assets/images/users/user-1.jpg"
//                                         alt=""
//                                         className="w-full h-full object-cover rounded-full"
//                                     />
//                                     <div
//                                         // href="#"
//                                         className="absolute right-2 h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]"
//                                     >
//                                         <Icon icon="heroicons:pencil-square" />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="flex-1">
//                                 <div className="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]">
//                                     Albert Flores
//                                 </div>
//                                 <div className="text-sm font-light text-slate-600 dark:text-slate-400">
//                                     Front End Developer
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="profile-info-500 md:flex md:text-start text-center flex-1 max-w-[516px] md:space-y-0 space-y-4">
//                         <div className="flex-1">
//                             <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
//                                 $32,400
//                             </div>
//                             <div className="text-sm text-slate-600 font-light dark:text-slate-300">
//                                 Total Balance
//                             </div>
//                         </div>

//                         <div className="flex-1">
//                             <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
//                                 200
//                             </div>
//                             <div className="text-sm text-slate-600 font-light dark:text-slate-300">
//                                 Board Card
//                             </div>
//                         </div>

//                         <div className="flex-1">
//                             <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
//                                 3200
//                             </div>
//                             <div className="text-sm text-slate-600 font-light dark:text-slate-300">
//                                 Calender Events
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="grid grid-cols-12 gap-6">
//                     <div className="lg:col-span-4 col-span-12">
//                         <Card
//                             bodyClass="p-4"
//                             subtitle={""}
//                             headerslot={""}
//                             noborder={false}
//                             title="Info">
//                             <ul className="list space-y-8">
//                                 <li className="flex space-x-3 rtl:space-x-reverse">
//                                     <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
//                                         <Icon icon="heroicons:envelope" />
//                                     </div>
//                                     <div className="flex-1">
//                                         <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
//                                             EMAIL
//                                         </div>
//                                         <a
//                                             href="mailto:someone@example.com"
//                                             className="text-base text-slate-600 dark:text-slate-50"
//                                         >
//                                             info-500@dashcode.com
//                                         </a>
//                                     </div>
//                                 </li>

//                                 <li className="flex space-x-3 rtl:space-x-reverse">
//                                     <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
//                                         <Icon icon="heroicons:phone-arrow-up-right" />
//                                     </div>
//                                     <div className="flex-1">
//                                         <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
//                                             PHONE
//                                         </div>
//                                         <a
//                                             href="tel:0189749676767"
//                                             className="text-base text-slate-600 dark:text-slate-50"
//                                         >
//                                             +1-202-555-0151
//                                         </a>
//                                     </div>
//                                 </li>

//                                 <li className="flex space-x-3 rtl:space-x-reverse">
//                                     <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
//                                         <Icon icon="heroicons:map" />
//                                     </div>
//                                     <div className="flex-1">
//                                         <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
//                                             LOCATION
//                                         </div>
//                                         <div className="text-base text-slate-600 dark:text-slate-50">
//                                             Home# 320/N, Road# 71/B, Mohakhali, Dhaka-1207, Bangladesh
//                                         </div>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </Card>
//                     </div>
//                     <div className="lg:col-span-8 col-span-12">
{/* <Card
                            titleClass=""
                            bodyClass="p-4"
                            title={""}
                            subtitle={""}
                            headerslot={""}
                            noborder={false}
                        >
                            <BasicArea height={190} />
                        </Card> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Profile;
