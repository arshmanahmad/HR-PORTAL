
import { useTranslation } from 'react-i18next';
import { FaCheckCircle } from 'react-icons/fa';


const AccessLogsCards = () => {
    const { t } = useTranslation()
    const statistics = [
        {
            title: t("AccessLogs.LastHours"),
            count: "1",
            bg: "bg-yellow-300",
            text: "text-yellow-800",
            percent: t("AccessLogs.Users"),
            icon: <FaCheckCircle color="#00FF00" />,
            percentClass: "text-yellow-800",
        },
        {
            title: t("AccessLogs.LastDays"),
            count: "1",
            bg: "bg-green-300",
            text: "text-green-800",
            percent: t("AccessLogs.Users"),
            icon: <FaCheckCircle color="#00FF00" />,
            percentClass: "text-green-800",
        },
        {
            title: t("AccessLogs.MobileAppUsage"),
            count: "0%",
            bg: "bg-red-300",
            text: "text-red-800",
            percent: "",

            percentClass: "text-red-800",
        },
        {
            title: t("AccessLogs.NeverLoggedIn"),
            count: "10%",
            bg: "bg-blue-300",
            text: "text-blue-800",
            percent: t("AccessLogs.Employees"),
            icon: <FaCheckCircle color="#00FF00" />,
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

                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default AccessLogsCards;
