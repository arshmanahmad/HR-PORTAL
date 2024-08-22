import React from "react";
import { TableHeadingFilter } from "./service";
type ButtonType = {
    label: string;
    onPress: () => void;
};

type ExtraAttributeValue = {
    value: string | number | ButtonType | JSX.Element | any;
    columnIndex: number;
};

interface TableProps {
    arrayOfData: { [key: string]: any }[],  // Define the type for arrayOfData
    attributesToShow?: string[],
    attributesNames?: string[],
    title?: string,
    showButton?: boolean,
    onRecordClick?: (record: { [key: string]: any }) => void, // Define as a function
    onButtonClick?: () => void,
    extraAttributeValueColumns?: ExtraAttributeValue[],
}

const Table: React.FC<TableProps> = ({
    attributesToShow = [],
    attributesNames = [],
    arrayOfData = [],
    extraAttributeValueColumns = [],
    onRecordClick
}) => {
    const keys = arrayOfData.length > 0 ? Object.keys(arrayOfData[0]) : [];
    console.log(keys);
    const filteredKeys = attributesToShow.length > 0 ? keys.filter(item => attributesToShow.includes(item)) : keys;
    const tableHeadings = TableHeadingFilter(filteredKeys, attributesNames);

    // Determine the total number of columns, including extra columns
    const totalColumns = filteredKeys.length + extraAttributeValueColumns.length;
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

                    {arrayOfData.map((item, rowIndex) => (
                        <tr key={rowIndex} onClick={onRecordClick}>
                            {Array.from({ length: totalColumns }, (_, colIndex) => {
                                const extraItem = extraAttributeValueColumns.find(extra => extra.columnIndex === colIndex);
                                return (
                                    <td key={colIndex}>
                                        {extraItem
                                            ? typeof extraItem.value === "function"
                                                ? extraItem.value(item)
                                                : extraItem.value
                                            : item[filteredKeys[colIndex]]}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default Table;

{/* {arrayOfData.map((item, index) => (
    <tr key={index}>
        {filteredKeys.map((header) => (
            <td key={header}>{item[header]}</td>
        ))}
    </tr>
))} */}

{/* {arrayOfData.map((item, index) => (
    <tr key={index}>
        {filteredKeys.map((header) => (
            <td key={header}>{item[header]}</td>
        ))}
        {extraAttributeValueColumns.length > 0 && (
            <td>
                {extraAttributeValueColumns.map((extraItem, extraIndex) => (
                    <div key={extraIndex}>
                        {typeof extraItem === "function"
                            ? extraItem(item) // If extraItem is a function, call it with the item
                            : extraItem}
                    </div>
                ))}
            </td>
        )}
    </tr>
))} */}