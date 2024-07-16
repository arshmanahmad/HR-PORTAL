import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Table from '../../components/MainTable/Table';
import Modal from "../../components/Modal/Modal";
import { MdEdit } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

interface Contract {
    contract_id: number;
    contract_name: string;
    contract_description: string;
    start_date: string;
    end_date: string;
}

const NatureOfContract: React.FC = () => {
    const { t } = useTranslation();
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const [contractData, setContractData] = useState<Contract[]>([
        {
            contract_id: 1,
            contract_name: 'Service Level Agreement',
            contract_description: 'Defines service standards and expectations.',
            start_date: '01 Jan, 2023',
            end_date: '31 Dec, 2023',
        },
        {
            contract_id: 2,
            contract_name: 'Employment Contract',
            contract_description: 'Details terms of employment for staff members.',
            start_date: '01 Feb, 2023',
            end_date: '31 Jan, 2024',
        },
        // Add more contracts as needed
    ]);

    const [formData, setFormData] = useState<Contract>({
        contract_id: 0,
        contract_name: '',
        contract_description: '',
        start_date: '',
        end_date: '',
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
        const newContract: Contract = {
            ...formData,
            contract_id: contractData.length + 1, // Generate a unique ID (replace with actual logic)
        };
        setContractData([...contractData, newContract]);
        setFormData({
            contract_id: 0,
            contract_name: '',
            contract_description: '',
            start_date: '',
            end_date: '',
        });
        toggleModal();
    };

    return (
        <div>
            {modal && (
                <Modal toggleModal={toggleModal}>
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-4">Add Contract Details</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Contract Name</label>
                                <input
                                    type="text"
                                    name="contract_name"
                                    value={formData.contract_name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Contract Description</label>
                                <textarea
                                    name="contract_description"
                                    value={formData.contract_description}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Start Date</label>
                                <input
                                    type="date"
                                    name="start_date"
                                    value={formData.start_date}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">End Date</label>
                                <input
                                    type="date"
                                    name="end_date"
                                    value={formData.end_date}
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

            <Card
                bodyClass="p-4"
                subtitle=""
                headerslot={
                    <button
                        onClick={toggleModal}
                        style={{ cursor: "pointer" }}
                        className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                    >
                        {t("NatureofContract.AddNatureofContract")}
                    </button>
                }
                noborder={false}
                title={t("NatureofContract.NatureofContract")}
            >
                <Table
                    array={contractData}
                    search={"contract_name"}
                    keysToDisplay={[
                        "contract_id",
                        "contract_name",
                        "contract_description",
                        "start_date",
                    ]}
                    label={[
                        "#",
                        t("NatureofContract.table.ContractName"),
                        t("NatureofContract.table.Description"),
                        t("NatureofContract.table.CreatedAt"),
                        t("NatureofContract.table.Actions"),
                    ]}
                    extraColumns={[
                        () => (
                            <MdEdit className="text-[#ccccc] text-[1.3rem]" />
                        ),
                    ]}
                />
            </Card>
        </div>
    );
};

export default NatureOfContract;
