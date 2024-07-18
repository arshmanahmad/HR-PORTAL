import React from "react"
import { TableHeadingFilter } from "./service";

interface TableProps {
    arrayOfData: { [key: string]: any }[],  // Define the type for arrayOfData
    attributesToShow: string[],
    attributesNames: string[],
    title?: string,
    showButton?: boolean,
    onRecordClick?: (record: { [key: string]: any }) => void, // Define as a function
    onButtonClick?: () => void,
}

const Table: React.FC<TableProps> = ({
    attributesToShow,
    attributesNames,
    arrayOfData,
}) => {
    const keys = Object.keys(arrayOfData[0]);
    console.log(keys);
    return (
        <>
            <div>
                <table>
                    <thead>
                        {!attributesToShow ?
                            <>
                                {TableHeadingFilter(keys, attributesNames).map((item) => {
                                    return <th>{item}</th>
                                })}
                            </> :
                            <>
                                {TableHeadingFilter(attributesToShow, attributesNames).map((item) => {

                                })}
                            </>
                        }
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Table