export function formatExpirationDate(date:string):string{
    const[years,month,day] = date.split("-");
    return `Vence em ${day}/${month}/${years}`
}

export function formatProductsStatus(status:string,date?:string):string{
    if(status === "Data de vencimento" && date){
        return formatExpirationDate(date)
    }
    return status;
}