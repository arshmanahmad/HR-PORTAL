export const TableHeadingFilter = (arrayOfData: string[], customizedName: string[]): string[] => {
    const preNames: string[] = [];
    const postNames: string[] = [];

    for (let i = 0; i < customizedName.length; i++) {
        preNames.push(customizedName[i]);
    }
    for (let j = 0; j < arrayOfData.length; j++) {
        if (j >= customizedName.length) {
            postNames.push(arrayOfData[j]);
        }
    }

    return [...preNames, ...postNames];
};