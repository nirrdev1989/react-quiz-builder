export function filterObject(propertiesArray: any[], object: any) {
    return propertiesArray.map((property) => {
        return {
            property: property,
            value: object[property]
        }
    })
}