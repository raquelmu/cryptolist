export function prettyNumber(num){
    try{
        return parseFloat(num.toFixed(2)).toLocaleString();
    }catch(e){
        return num;
    }
}