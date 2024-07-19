import React from "react";
import { TableHeadingFilter } from "./service";

interface TableProps {
    arrayOfData: { [key: string]: any }[],  // Define the type for arrayOfData
    attributesToShow?: string[],
    attributesNames?: string[],
    title?: string,
    showButton?: boolean,
    onRecordClick?: (record: { [key: string]: any }) => void, // Define as a function
    onButtonClick?: () => void,
}

const Table: React.FC<TableProps> = ({
    attributesToShow = [],
    attributesNames = [],
    arrayOfData = [],
}) => {
    const keys = arrayOfData.length > 0 ? Object.keys(arrayOfData[0]) : [];
    console.log(keys);
    const filteredKeys = attributesToShow.length > 0 ? keys.filter(item => attributesToShow.includes(item)) : keys;
    const tableHeadings = TableHeadingFilter(filteredKeys, attributesNames);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {tableHeadings.map((item) => (
                            <th key={item}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {arrayOfData.map((item, index) => (
                        <tr key={index}>
                            {tableHeadings.map((header) => (
                                <td key={header}>{item[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
