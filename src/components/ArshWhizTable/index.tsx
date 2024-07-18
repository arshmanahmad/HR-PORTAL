import React from "react"

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
}) => {

    return (
        <>
            <div>
                <table>
                    <thead>
                        {!attributesToShow && !attributesNames ?
                            <>
                            </> :
                            <>
                                {attributesToShow ? attributesToShow.map((item) => {
                                    return <th>{item}</th>
                                })
                                    : <>
                                        {attributesNames.map((item) => {
                                            return <th>{item}</th>
                                        })}
                                    </>}
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