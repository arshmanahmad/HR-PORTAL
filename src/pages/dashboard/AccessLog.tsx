import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import AccessLogsCards from "../../components/chart/AccessLogsCards";
import Table from "../../components/MainTable/Table";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useTranslation } from "react-i18next";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface UserStatus {
    status: string;
    count: number;
}

const userStatusData: UserStatus[] = [
    { status: 'Active', count: 150 },
    { status: 'Inactive', count: 50 }
];
const data = {
    labels: userStatusData.map(user => user.status),
    datasets: [
        {
            label: '# of Users',
            data: userStatusData.map(user => user.count),
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }
    ]
}
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Active vs Inactive Users'
        }
    }
};
const AccessLog: React.FC = () => {
    const { t } = useTranslation();
    interface UserAction {
        userId: number;
        userName: string;
        actionPerformed: string;
        timestamp: string;
        ipAddress: string;
        status: string;
    }

    const userActions: UserAction[] = [
        {
            userId: 1,
            userName: "JohnDoe",
            actionPerformed: "Logged in",
            timestamp: "2024-06-27 10:30:00",
            ipAddress: "192.168.1.1",
            status: "Success"
        },
        {
            userId: 2,
            userName: "JaneSmith",
            actionPerformed: "Logged out",
            timestamp: "2024-06-27 11:00:00",
            ipAddress: "192.168.1.2",
            status: "Success"
        },
        {
            userId: 3,
            userName: "AliceJohnson",
            actionPerformed: "Password Change",
            timestamp: "2024-06-27 11:30:00",
            ipAddress: "192.168.1.3",
            status: "Failed"
        },
        {
            userId: 4,
            userName: "BobBrown",
            actionPerformed: "Logged in",
            timestamp: "2024-06-27 12:00:00",
            ipAddress: "192.168.1.4",
            status: "Success"
        },
        {
            userId: 5,
            userName: "CharlieDavis",
            actionPerformed: "Logged in",
            timestamp: "2024-06-27 12:30:00",
            ipAddress: "192.168.1.5",
            status: "Success"
        },
        {
            userId: 6,
            userName: "DianaEvans",
            actionPerformed: "Account Update",
            timestamp: "2024-06-27 13:00:00",
            ipAddress: "192.168.1.6",
            status: "Success"
        },
        {
            userId: 7,
            userName: "FrankGreen",
            actionPerformed: "Logged out",
            timestamp: "2024-06-27 13:30:00",
            ipAddress: "192.168.1.7",
            status: "Success"
        },
        {
            userId: 8,
            userName: "GraceHarris",
            actionPerformed: "Logged in",
            timestamp: "2024-06-27 14:00:00",
            ipAddress: "192.168.1.8",
            status: "Success"
        },
        {
            userId: 9,
            userName: "HenryIverson",
            actionPerformed: "Logged out",
            timestamp: "2024-06-27 14:30:00",
            ipAddress: "192.168.1.9",
            status: "Success"
        },
        {
            userId: 10,
            userName: "IvyJackson",
            actionPerformed: "Password Reset",
            timestamp: "2024-06-27 15:00:00",
            ipAddress: "192.168.1.10",
            status: "Success"
        }
    ];


    return (
        <div>
            <HomeBredCurbs title={t("AccessLogs.AccessLogs")} />

            <div className="space-y-5">

                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12">
                        <Card
                            bodyClass="p-4"
                            subtitle={""}
                            headerslot={""}
                            noborder={false}
                            title=""
                        >

                            <div className="grid xl:grid-cols-4 lg:grid-cols-4 col-span-1 gap-3 flex justify-between">
                                <AccessLogsCards />
                            </div>
                        </Card>
                    </div>

                    <div className="col-span-12 flex flex-col gap-5">
                        <div className="col-span-4">
                            <Card
                                bodyClass="p-4"
                                subtitle={""}
                                headerslot={""}
                                noborder={false}
                                title=""
                            >
                                <div className="flex justify-between gap-5 items-center">
                                    <p>{t("AccessLogs.Users")}</p>
                                    <h3>27</h3>
                                </div>
                            </Card>
                        </div>
                        <div className="col-span-4">
                            <Card
                                bodyClass="p-4"
                                subtitle={""}
                                headerslot={""}
                                noborder={false}
                                title=""
                            >
                                <div className="flex justify-between gap-5 items-center">
                                    <p>{t("AccessLogs.ActiveUsers")}</p>
                                    <h3>27</h3>
                                </div>
                            </Card>
                        </div>
                        <div className="col-span-4">
                            <Card
                                bodyClass="p-4"
                                subtitle={""}
                                headerslot={""}
                                noborder={false}
                                title=""
                            >
                                <div className="flex justify-between gap-5 items-center">
                                    <p>{t("AccessLogs.InActiveUsers")}</p>
                                    <h3>0</h3>
                                </div>
                            </Card>
                        </div>
                    </div>
                    {/* <div className="col-span-12">
                        <Card
                            bodyClass="p-4"
                            subtitle={""}
                            headerslot={""}
                            noborder={false}
                            title=""
                        >
                            <div className="flex flex-col gap-5">
                                <label className="text-[1.2rem]">Choose your file</label>
                                <input type="file" />
                            </div>
                        </Card>
                    </div> */}
                    <div className="col-span-12">
                        <Card
                            bodyClass="p-4"
                            subtitle={""}
                            headerslot={""}
                            noborder={false}
                            title={t("AccessLogs.GraphicalVisualization")}
                        >
                            <div className="flex justify-center items-center h-full">
                                <Bar data={data} options={options} className=" w-full" />
                            </div>

                        </Card>

                    </div>
                    <div className="col-span-12">
                        <Card
                            bodyClass="p-4"
                            subtitle={""}
                            headerslot={""}
                            noborder={false}
                            title={t("AccessLogs.Staff Members")}
                        >
                            <Table
                                array={userActions}
                                search={"userName"}
                                keysToDisplay={["userId", "userName", "actionPerformed", "ipAddress", "status"]}
                                label={[
                                    "#",
                                    t("AccessLogs.table.UserName"),
                                    t("AccessLogs.table.Action"),
                                    t("AccessLogs.table.IPAddress"),
                                    t("AccessLogs.table.Status"),
                                ]}
                            // customBlocks={[
                            //     {
                            //         index: 4,
                            //         component: (isValid) => {
                            //             return isValid ? "Valid" : "Invalid"
                            //         }
                            //     }
                            // ]}
                            // extraColumns={[
                            //     () => {
                            //         return (
                            //             <MdEdit
                            //                 // onClick={() => navigate(`${"/admin/providers/"}${record.id}`)}
                            //                 className="text-[#ccccc] text-[1.3rem]" />
                            //         );
                            //     },
                            // ]}
                            />
                        </Card>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default AccessLog;
