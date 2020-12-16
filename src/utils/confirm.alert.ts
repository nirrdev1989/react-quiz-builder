export function confirmAlert(itemName: string): boolean {
    const con = window.confirm(`Sure you want to delete this ${itemName}`)
    return con
}