
"use client";

import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from "react";
import Table from "../../components/MainTable/Table";
import { MdEdit } from "react-icons/md";
import Modal from "../../components/Modal/Modal";
import { useTranslation } from "react-i18next";
const workSchedules = [
    {
        id: 1,
        teamCode: 'A',
        shift: 'Morning',
        starting: '08:00 AM',
        ending: '04:00 PM',
        leaveConflicts: 3,
        service: 'Regular'
    },
    {
        id: 2,
        teamCode: 'B',
        shift: 'Evening',
        starting: '04:00 PM',
        ending: '12:00 AM',
        leaveConflicts: 1,
        service: 'Regular'
    },
    {
        id: 3,
        teamCode: 'C',
        shift: 'Night',
        starting: '12:00 AM',
        ending: '08:00 AM',
        leaveConflicts: 0,
        service: 'Regular'
    }
];
interface FormData {
    unit_id: number;
    unit_name: string;
    unit_description: string;
    service_id: number;
}



const localizer = momentLocalizer(moment);
const WorkSchedule = () => {
    const { t } = useTranslation();
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

    interface Team {
        id: number;
        name: string;
    }

    const teams: Team[] = [
        { id: 1, name: 'Team A' },
        { id: 2, name: 'Team B' },
        { id: 3, name: 'Team C' }
    ];
    const [selectedTeam, setSelectedTeam] = useState<number | undefined>(undefined);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTeam(Number(event.target.value));
    };
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }
    const [formData, setFormData] = useState<FormData>({
        unit_id: 0,
        unit_name: '',
        unit_description: '',
        service_id: 0
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toggleModal();
    };
    return (
        <div>
            {modal && (
                <Modal toggleModal={toggleModal}>
                    <div className="p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <h5 className="mb-6">Add</h5>
                                <label className="block text-gray-700">Leave Conflicts</label>
                                <input
                                    type="number"
                                    name="unit_id"
                                    value={formData.unit_id}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Shift</label>
                                <input
                                    type="text"
                                    name="unit_name"
                                    value={formData.unit_name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Note</label>
                                <textarea
                                    name="unit_description"
                                    value={formData.unit_description}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Service ID</label>
                                <input
                                    type="number"
                                    name="service_id"
                                    value={formData.service_id}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={toggleModal}
                                    type="button"
                                    className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-500">
                                    Close
                                </button>
                                <button
                                    onClick={() => handleSubmit}
                                    type="button"
                                    className="mr-2 px-4 py-2 bg-blue-500 text-[white] rounded-md hover:bg-blue-700  ">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}
            <HomeBredCurbs title={t("WorkSchedule.WorkSchedule")} />
            <div className="space-y-5">
                <div className="grid grid-cols-12 gap-5">
                    <div className="lg:col-span-8 col-span-12 space-y-5">
                        <Card
                            bodyClass="p-4"
                            subtitle={""}
                            headerslot={""}
                            noborder={false}
                            title={t("WorkSchedule.SelectDaysCalender")}
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
                        <Card
                            bodyClass="p-4"
                            subtitle=""
                            headerslot=""
                            noborder={false}
                            title="Select Team"
                        >
                            <label htmlFor="team-select">{t("WorkSchedule.SelectTeam")}</label>
                            <select
                                id="team-select"
                                value={selectedTeam}
                                onChange={handleSelectChange}
                            >
                                <option value="" disabled>{t("WorkSchedule.SelectTeam")}</option>
                                {teams.map((team) => (
                                    <option key={team.id} value={team.id}>
                                        {team.name}
                                    </option>
                                ))}
                            </select>
                            {selectedTeam !== undefined && (
                                <p>Selected Team: {teams.find(team => team.id === selectedTeam)?.name}</p>
                            )}
                        </Card>
                        <Card
                            bodyClass="p-4"
                            subtitle=""
                            headerslot=""
                            noborder={false}
                            title={t("WorkSchedule.Total Days")}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">Number</p>
                                    <p className="text-2xl font-bold text-blue-500">30</p>
                                </div>
                                {/* <div>
                                    <p className="text-lg font-semibold text-gray-700">Percentage</p>
                                    <p className="text-xl font-semibold text-blue-500">25.67%</p>
                                </div> */}
                            </div>
                        </Card>

                        <Card
                            bodyClass="p-4"
                            subtitle={""}
                            headerslot={""}
                            noborder={false}
                            title={t("WorkSchedule.Shifts")}
                        >
                            {/* Add content related to vacations balance here */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">{t("WorkSchedule.Morning")}</p>
                                    <p className="text-2xl font-bold text-blue-500">9AM-12AM</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">{t("WorkSchedule.Evening")}</p>
                                    <p className="text-xl font-semibold text-blue-500">1PM-5PM</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">{t("WorkSchedule.Night")}</p>
                                    <p className="text-xl font-semibold text-blue-500">6PM-12AM</p>
                                </div>
                            </div>
                        </Card>
                        <Card
                            bodyClass="p-4"
                            subtitle=""
                            headerslot=""
                            noborder={false}
                            title={t("WorkSchedule.Upcoming Leaves")}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">Number of Leaves</p>
                                    <p className="text-2xl font-bold text-red-500">15%</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">{t("WorkSchedule.Percentage")}</p>
                                    <p className="text-xl font-semibold text-red-500">1.67%</p>
                                </div>
                            </div>
                        </Card>
                        <Card
                            bodyClass="p-4"
                            subtitle=""
                            headerslot=""
                            noborder={false}
                            title="Work Schedules"
                        >
                            <Table
                                array={workSchedules}
                                search={"teamCode"}
                                keysToDisplay={["id", "teamCode", "shift", "starting", "ending", "leaveConflicts", "service"]}
                                label={[
                                    "#",
                                    t("WorkSchedule.table.TeamCode"),
                                    t("WorkSchedule.table.Shift"),
                                    t("WorkSchedule.table.Starting"),
                                    t("WorkSchedule.table.Ending"),
                                    t("WorkSchedule.table.Leave Conflicts"),
                                    t("WorkSchedule.table.Service"),
                                    t("WorkSchedule.table.Actions"),
                                ]}

                                extraColumns={[
                                    () => {
                                        return (
                                            <MdEdit

                                                className="text-[#ccccc] text-[1.3rem]" />
                                        );
                                    },
                                ]}
                            />
                        </Card>


                    </div>
                    <div className="lg:col-span-4 col-span-12 space-y-5">
                        <div className="lg:col-span-4 col-span-12 space-y-5">
                            <Card
                                bodyClass="p-4"
                                subtitle={""}
                                noborder={false}
                                title={t("WorkSchedule.AddWorkSchedule")}
                                headerslot={""}
                            >
                                <button
                                    onClick={() => toggleModal()}
                                    style={{ cursor: "pointer" }}
                                    className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600 w-[60%] ">{t("WorkSchedule.AddWorkSchedule")}</button>
                            </Card>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WorkSchedule;


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
