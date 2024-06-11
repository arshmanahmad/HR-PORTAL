
"use client";

import Card from "../../components/ui/Card";
import SelectMonth from "../../components/chart/SelectMonth";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import Icon from "../../components/ui/Icon";
import LinearProgress from '@mui/material/LinearProgress';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const campaigns = [
    {
        start: "Start Date",
        end: "2 Feb,2024",
    },
    {
        start: "End Time",
        end: "6 June,2024",
    },
    {
        start: "Start time",
        end: "8:00 AM",
    },
    {
        start: "End Time",
        end: "2:00 PM",
    },

];
const dateAndTime = [
    {
        start: "Date",
        end: "2022-06-09",
    },
    {
        start: "Time",
        end: "09:00 AM",
    },


];
const localizer = momentLocalizer(moment);
const Profile = () => {
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
    return (
        <div>
            <HomeBredCurbs title="My Profile" />
            <div className="space-y-5">
                <div className="grid grid-cols-12 gap-5">
                    <div className="lg:col-span-8 col-span-12 space-y-5">
                        <Card
                            bodyClass="p-4"
                            subtitle=""
                            headerslot=""
                            noborder={false}
                            title="My absences & Holidays"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">Total Absents</p>
                                    <p className="text-2xl font-bold text-blue-500">354</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">Percentage</p>
                                    <p className="text-xl font-semibold text-blue-500">25.67%</p>
                                </div>
                            </div>
                        </Card>

                        <Card
                            bodyClass="p-4"
                            subtitle={""}
                            headerslot={""}
                            noborder={false}
                            title="Remaining leave"
                        >
                            {/* Add content related to vacations balance here */}
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold">Vacation Balance</span>
                                    <span className="text-gray-500">$86,954</span>
                                </div>
                                <div className="flex items-center">
                                    <Icon icon="heroicons:currency-dollar" className="w-6 h-6 text-gray-500 mr-2" />
                                    <span className="text-sm text-gray-500">View Details</span>
                                </div>
                            </div>
                        </Card>
                        <Card
                            bodyClass="p-4"
                            subtitle=""
                            headerslot=""
                            noborder={false}
                            title="Upcoming Leaves"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">Number of Leaves</p>
                                    <p className="text-2xl font-bold text-red-500">15%</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">Percentage</p>
                                    <p className="text-xl font-semibold text-red-500">1.67%</p>
                                </div>
                            </div>
                        </Card>

                        <Card
                            bodyClass="p-4"
                            subtitle={""}
                            headerslot={""}
                            noborder={false}
                            title="Leave Calendar"
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
                            <Card
                                bodyClass="p-4"
                                subtitle={""}
                                noborder={false}
                                title="Staff Schedule"
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
                                        <span className="text-lg font-bold mt-[1rem]">Next Shift</span>
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
                                title="My Appraisals"
                                headerslot={<SelectMonth />}
                            >
                                <LinearProgress sx={{ color: 'bg-yellow-900' }} variant="determinate" value={75} />

                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold mt-[1rem]">My Appraisals</span>
                                        <span className="text-gray-500">Status</span>
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
                                title="My Feedbacks"
                                headerslot={<SelectMonth />}
                            >
                                <LinearProgress sx={{ color: 'bg-yellow-900' }} variant="determinate" value={60} />

                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold mt-[1rem]">My Feedbacks</span>
                                        <span className="text-gray-500">Status</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Icon icon="heroicons:check-circle" className="w-6 h-6 text-gray-500 mr-2" />
                                        <span className="text-sm text-gray-500">5/3</span>
                                    </div>
                                </div>

                            </Card>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;


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
