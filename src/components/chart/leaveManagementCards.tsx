
import { useTranslation } from 'react-i18next';
import { FaBell, FaCheckCircle, FaTimesCircle, FaBabyCarriage } from 'react-icons/fa';


const leaveManagementCards = () => {
    const { t } = useTranslation()
    const statistics = [
        {
            title: t("LeaveManagement.Cards.PendingLeaveRequests"),
            count: "2",
            bg: "bg-yellow-300",
            text: "text-yellow-800",
            percent: "25.67% ",
            icon: <FaBell color="#FFA500" />,
            percentClass: "text-yellow-800",
        },
        {
            title: t("LeaveManagement.Cards.GrantedLeaveRequests"),
            count: "3",
            bg: "bg-green-300",
            text: "text-green-800",
            percent: "8.67%",
            icon: <FaCheckCircle color="#00FF00" />,
            percentClass: "text-green-800",
        },
        {
            title: t("LeaveManagement.Cards.RejectedLeaveRequests"),
            count: "2",
            bg: "bg-red-300",
            text: "text-red-800",
            percent: "1.67%  ",
            icon: <FaTimesCircle color="#FF0000" />,
            percentClass: "text-red-800",
        },
        {
            title: t("LeaveManagement.Cards.MaternityLeaveRequests"),
            count: "2",
            bg: "bg-blue-300",
            text: "text-blue-800",
            percent: "11.67%  ",
            icon: <FaBabyCarriage color="#0000FF" />,
            percentClass: "text-blue-800",
        },
    ];
    return (
        <>
            {statistics.map((item, i) => (
                <div
                    key={i}
                    className={`${item.bg} rounded-md p-4 bg-opacity-[0.15] dark:bg-opacity-25 relative z-[1]`}
                >

                    <span className="block mb-6 text-sm text-slate-900 dark:text-white font-medium">
                        {item.title}
                    </span>
                    <span className="block mb- text-2xl text-slate-900 dark:text-white font-medium mb-6">
                        {item.count}
                    </span>
                    <div className="flex space-x-2 rtl:space-x-reverse">
                        <div className={` flex-none text-xl  ${item.text} `}>
                            {item.icon}
                        </div>
                        <div className="flex-1 text-sm">
                            <span className={` block mb-[2px] ${item.percentClass} `}>
                                {item.percent}
                            </span>
                            <span className="block mb-1 text-slate-600 dark:text-slate-300">
                                {t("LeaveManagement.Cards.CurrentStatus")}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default leaveManagementCards;
