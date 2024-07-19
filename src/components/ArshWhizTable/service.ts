export const TableHeadingFilter = (arrayOfData: string[], customizedName: string[]): string[] => {
    const preNames: string[] = [];
    const postNames: string[] = [];

    for (let i = 0; i < customizedName.length; i++) {
        preNames.push(customizedName[i]);
    }
    for (let j = customizedName.length; j < arrayOfData.length; j++) {

        postNames.push(arrayOfData[j]);

    }

    return [...preNames, ...postNames];
};