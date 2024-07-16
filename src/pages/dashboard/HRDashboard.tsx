
"use client";

import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Table from "../../components/MainTable/Table";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useTranslation } from "react-i18next";
ChartJS.register(ArcElement, Tooltip, Legend);
interface Agent {
    id: number;                   // Changed from index to id
    name: string;
    position: string;
    department: string;
    employment: string;           // Added this key
    subdivision: string;
    directorate: string;          // Added this key
    SUS: string;                  // Added this key
    departmentHead: string;
    director: string;             // Added this key
    service: string;
}



const HRDashboard = () => {
    const { t } = useTranslation()


    const agentsData: Agent[] = [
        {
            id: 1,
            name: "John Doe",
            position: "Software Engineer",
            department: "IT",
            employment: "Full-time",            // Added value
            subdivision: "Development",
            directorate: "Technology Services", // Added value
            SUS: "Jane Smith", // Added value
            departmentHead: "Jane Smith / Department Chief",
            director: "Jane Smith",             // Added value
            service: "Web Development"
        },
        {
            id: 2,
            name: "Alice Johnson",
            position: "Product Manager",
            department: "Product",
            employment: "Full-time",            // Added value
            subdivision: "Product Development",
            directorate: "Innovation and Strategy", // Added value
            SUS: "Bob Brown", // Added value
            departmentHead: "Bob Brown / Department Chief",
            director: "Bob Brown",              // Added value
            service: "Product Management"
        },
        {
            id: 3,
            name: "Sophia Moore",
            position: "Operations Manager",
            department: "Operations",
            employment: "Full-time",            // Added value
            subdivision: "Logistics",
            directorate: "Operational Services", // Added value
            SUS: "Isabella Thompson", // Added value
            departmentHead: "Isabella Thompson / Department Chief",
            director: "Isabella Thompson",      // Added value
            service: "Operations Management"
        },
        {
            id: 4,
            name: "Alexander Thomas",
            position: "Financial Analyst",
            department: "Finance",
            employment: "Full-time",            // Added value
            subdivision: "Financial Planning",
            directorate: "Financial Services",  // Added value
            SUS: "Mason White", // Added value
            departmentHead: "Mason White / Department Chief",
            director: "Mason White",            // Added value
            service: "Financial Analysis"
        },
        {
            id: 5,
            name: "Charlotte Martinez",
            position: "Legal Advisor",
            department: "Legal",
            employment: "Full-time",            // Added value
            subdivision: "Corporate Law",
            directorate: "Legal Services",      // Added value
            SUS: "Ethan Garcia", // Added value
            departmentHead: "Ethan Garcia / Department Chief",
            director: "Ethan Garcia",           // Added value
            service: "Legal Advisory"
        }
    ];
    interface WorkforceByGender {
        gender: string;
        number: number;
        percentage: string;
    }

    const workforceData: WorkforceByGender[] = [
        { gender: 'Women', number: 60, percentage: "60%" },
        { gender: 'Men', number: 40, percentage: "40%" },
    ];

    const pieData = {
        labels: workforceData.map(data => data.gender),
        datasets: [
            {
                label: '# of Votes',
                data: workforceData.map(data => data.number),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div>
            <HomeBredCurbs title={t("HRDash.ReportingAnalysis")} />
            <div className="space-y-5">
                <div className="grid grid-cols-12 gap-5">
                    <div className="lg:col-span-8 col-span-12 space-y-5">
                        <Card
                            bodyClass="p-4"
                            subtitle={""}
                            headerslot={""}
                            noborder={false}
                            title={t("HRDash.NewAgents")}
                            className="bg-[#fff] max-h-[30rem] flex  flex-col p-0"
                        >
                            <div className="w-full flex items-center justify-center">   <Pie className="max-h-[22rem] " data={pieData} /></div>
                        </Card>

                        <Card
                            bodyClass="p-4"
                            subtitle={""}
                            headerslot={""}
                            noborder={false}
                            title={t("HRDash.WorkforceGender")}
                        >
                            <Table
                                array={agentsData}

                                keysToDisplay={["id", "name", "employment", "SUS", "directorate",]}
                                label={[
                                    "#",
                                    t("HRDash.table.Name"),
                                    t("HRDash.table.Employment"),
                                    t("HRDash.table.SUS"),
                                    t("HRDash.table.Subdivision"),
                                ]}


                            />
                        </Card>
                        <Card
                            bodyClass="p-4"
                            subtitle=""
                            headerslot=""
                            noborder={false}
                            title={t("HRDash.RetirementsCurrentYear")}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">{t("HRDash.NumberOfRetirements")}</p>
                                    <p className="text-2xl font-bold text-blue-500">209</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">{t("HRDash.TimeSpan")}</p>
                                    <p className="text-xl font-semibold text-blue-500">Current Year</p>
                                </div>
                            </div>
                        </Card>


                        <Card
                            bodyClass="p-4"
                            subtitle=""
                            headerslot=""
                            noborder={false}
                            title={t("HRDash.NumberLaborHired")}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">{t("HRDash.NumberOfLabor")}</p>
                                    <p className="text-2xl font-bold text-red-500">24</p>
                                </div>
                                {/* <div>
                                    <p className="text-lg font-semibold text-gray-700">Percentage</p>
                                    <p className="text-xl font-semibold text-red-500">1.67%</p>
                                </div> */}
                            </div>
                        </Card>


                    </div>
                    <div className="lg:col-span-4 col-span-12 space-y-5">
                        <div className="lg:col-span-4 col-span-12 space-y-5">
                            <Card
                                bodyClass="p-4"
                                subtitle={""}
                                headerslot={""}
                                noborder={false}
                                title={t("HRDash.NumberDepartures")}
                            >
                                {/* Add content related to vacations balance here */}
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold">{t("HRDash.Number")}</span>
                                        <span className="text-gray-500">50</span>
                                    </div>
                                    <div className="flex flex-col">

                                        <span className="text-lg font-bold">{t("HRDash.Reason")}</span>
                                        <span className="text-sm text-gray-500">Business Advertisement</span>
                                    </div>
                                </div>
                            </Card>
                            <Card
                                bodyClass="p-4"
                                subtitle={""}
                                headerslot={""}
                                noborder={false}
                                title={t("HRDash.NumberAgentsTraining")}
                            >
                                {/* Add content related to vacations balance here */}
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold">{t("HRDash.Number")}</span>
                                        <span className="text-gray-500">80</span>
                                    </div>
                                    <div className="flex flex-col">

                                        <span className="text-lg font-bold">{t("HRDash.TimeSpan")}</span>
                                        <span className="text-sm text-gray-500">Last 30 days</span>
                                    </div>
                                </div>
                            </Card>

                            <Card
                                bodyClass="p-4"
                                subtitle={""}
                                headerslot={""}
                                noborder={false}
                                title={t("HRDash.NumberAgentsAssigned")}
                            >
                                {/* Add content related to vacations balance here */}
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold">{t("HRDash.Number")}</span>
                                        <span className="text-gray-500">25</span>
                                    </div>
                                    <div className="flex flex-col">

                                        <span className="text-lg font-bold">{t("HRDash.TimeSpan")}</span>
                                        <span className="text-sm text-gray-500">Last 30 days</span>
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

export default HRDashboard;


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
