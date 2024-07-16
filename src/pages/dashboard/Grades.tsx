import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit } from "react-icons/md";
import Table from '../../components/MainTable/Table'
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { useTranslation } from "react-i18next";
interface Grade {
    grade_id: number;
    grade_name: string;
    grade_level: number;
    created_at: string;
    updated_at: string;
}

const gradeData: Grade[] = [
    {
        grade_id: 1,
        grade_name: "Junior",
        grade_level: 1,
        created_at: "01 Jan, 2023",
        updated_at: "23 May, 2024"
    },
    {
        grade_id: 2,
        grade_name: "Mid",
        grade_level: 2,
        created_at: "15 Jan, 2023",
        updated_at: "23 May, 2024"
    },
    {
        grade_id: 3,
        grade_name: "Senior",
        grade_level: 3,
        created_at: "01 Feb, 2023",
        updated_at: "23 May, 2024"
    },
    {
        grade_id: 4,
        grade_name: "Lead",
        grade_level: 4,
        created_at: "15 Feb, 2023",
        updated_at: "23 May, 2024"
    },
    {
        grade_id: 5,
        grade_name: "Principal",
        grade_level: 5,
        created_at: "01 Mar, 2023",
        updated_at: "23 May, 2024"
    },
    {
        grade_id: 6,
        grade_name: "Director",
        grade_level: 6,
        created_at: "15 Mar, 2023",
        updated_at: "23 May, 2024"
    },
    {
        grade_id: 7,
        grade_name: "Vice President",
        grade_level: 7,
        created_at: "01 Apr, 2023",
        updated_at: "23 May, 2024"
    },
    {
        grade_id: 8,
        grade_name: "President",
        grade_level: 8,
        created_at: "15 Apr, 2023",
        updated_at: "23 May, 2024"
    },
    {
        grade_id: 9,
        grade_name: "CEO",
        grade_level: 9,
        created_at: "01 May, 2023",
        updated_at: "23 May, 2024"
    },
    {
        grade_id: 10,
        grade_name: "Founder",
        grade_level: 10,
        created_at: "15 May, 2023",
        updated_at: "23 May, 2024"
    }
];


const Grades: React.FC = () => {
    const { t } = useTranslation();
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    const [formData, setFormData] = useState<Grade>({
        grade_id: 0,
        grade_name: '',
        grade_level: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., send the formData to a server
        console.log(formData);
        toggleModal();
    };



    return (
        <div>

            {modal && (
                <Modal toggleModal={toggleModal}>
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-4">Add Grade Details</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Grade ID</label>
                                <input
                                    type="number"
                                    name="grade_id"
                                    value={formData.grade_id}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">{t("Grade.table.GradeName")}</label>
                                <input
                                    type="text"
                                    name="grade_name"
                                    value={formData.grade_name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">{t("Grade.table.GradeLevel")}</label>
                                <input
                                    type="number"
                                    name="grade_level"
                                    value={formData.grade_level}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">{t("Grade.table.CreatedAt")}</label>
                                <input
                                    type="datetime-local"
                                    name="created_at"
                                    value={formData.created_at}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">{t("Grade.table.Updated At")}</label>
                                <input
                                    type="datetime-local"
                                    name="updated_at"
                                    value={formData.updated_at}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                                    onClick={toggleModal}
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}
            <HomeBredCurbs title="Grades" />
            <div className="space-y-5">
                <Card
                    bodyClass="p-4"
                    subtitle={""}
                    headerslot={<button
                        onClick={toggleModal}
                        style={{ cursor: "pointer" }}
                        className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600">{t("Grade.AddGrade")}</button>}
                    noborder={false}
                    title={t("Grade.GradeDetails")}
                >
                    <Table
                        array={gradeData}
                        search={"grade_name"}
                        keysToDisplay={["grade_id", "grade_name", "grade_level", "created_at", "updated_at",]}
                        label={[
                            "#",
                            t("Grade.table.GradeName"),
                            t("Grade.table.GradeLevel"),
                            t("Grade.table.CreatedAt"),
                            t("Grade.table.Updated At"),
                            t("Grade.table.Actions"),
                        ]}
                        // customBlocks={[
                        //     {
                        //         index: 4,
                        //         component: (isValid) => {
                        //             return isValid ? "Valid" : "Invalid"
                        //         }
                        //     }
                        // ]}
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
        </div>
    );
};

export default Grades;
