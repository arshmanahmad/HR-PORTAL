import { useTranslation } from "react-i18next";

const GroupChart3 = () => {
    const { t } = useTranslation();
    const statistics = [
        {
            title: t("Evaluation.EvaluationRequests"),
            count: "7",
            bg: "bg-warning-500",
            text: "text-primary-500",
            percentClass: "text-primary-500",
        },
        {
            title: t("Evaluation.OngoingEvaluations"),
            count: "6",

            bg: "bg-info-500",
            text: "text-primary-500",

            percentClass: "text-primary-500",
        },
        {
            title: t("Evaluation.EvaluatedEmployees"),
            count: "21",
            bg: "bg-primary-500",
            text: "text-danger-500",
            percentClass: "text-danger-500",
        },
        {
            title: t("Evaluation.NonEvaluated"),
            count: "2",
            bg: "bg-primary-500",
            text: "text-danger-500",
            percentClass: "text-danger-500",
        },

    ];
    return (
        <>
            {statistics.map((item, i) => (
                <div
                    key={i}
                    className={`${item.bg} rounded-md p-4 bg-opacity-[0.15] dark:bg-opacity-25 relative z-[1]`}
                >
                    <div className="overlay absolute left-0 top-0 w-full h-full z-[-1]">
                        <img
                            alt=""
                            draggable="false"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <span className="block mb-6 text-sm text-slate-900 dark:text-white font-medium">
                        {item.title}
                    </span>
                    <span className="block mb- text-2xl text-slate-900 dark:text-white font-medium mb-6">
                        {item.count}
                    </span>
                    <div className="flex space-x-2 rtl:space-x-reverse">
                        <div className={` flex-none text-xl  ${item.text} `}>
                        </div>
                        <div className="flex-1 text-sm">
                            <span className={` block mb-[2px] ${item.percentClass} `}>
                            </span>
                            <span className="block mb-1 text-slate-600 dark:text-slate-300">
                                {t("Evaluation.CurrentUpadate")}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default GroupChart3;
