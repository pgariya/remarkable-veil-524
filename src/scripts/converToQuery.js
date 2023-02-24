export default function ConvertToQuery(obj){
    let str = ""
    let count =0
    for(let x in obj){
        if(count==0){
            str+=`&${x}=${obj[x]}&`
            count++

        }else{
            str+=`${x}=${obj[x]}&`
            count++

        }
    }
    
    return str
}