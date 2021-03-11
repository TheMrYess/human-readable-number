module.exports = function toReadable (number) {
    var ones = new Array('', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen');
    var tens = new Array('', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety');
    var n_str=String(number),
    ans;
    if (number==0) return "zero";
    if (number<20)
    {
    return ones[number].slice(1);
    }
    else if(number<100)
    {
    ans=(tens[Number(n_str.charAt(0))]);
    ans+=(ones[Number(n_str.charAt(1))]);
    ans=ans.slice(1);
    return ans;
   // ans=tens[]
    } else if(number%100<20)
    {
   // console.log(n%100)
    ans=(ones[Number(n_str.charAt(0))])+" hundred";
    ans+=(ones[number%100]);
    ans=ans.slice(1);
    return ans;
    } 
    
    ans=(ones[Number(n_str.charAt(0))])+" hundred";
    ans+=(tens[Number(n_str.charAt(1))]);
    ans+=(ones[Number(n_str.charAt(2))]);
    ans=ans.slice(1);
    return ans;
    
}
