function ppf(){
    const mi=document.getElementById('mi_ppf').value;
    const tp=document.getElementById('tp_ppf').value;

    const roi=0.071
    const n=12

    var expt=n*tp;


    var num= (((roi/(100*n))+1)**expt)-1 
    var deno= roi/(100*n);

    var X= (mi*num)/deno

    var totalInvest=mi*tp*12;
    var intEarned= X-totalInvest;
    var totalValue=X;

    document.getElementById('totalInvest_ppf').innerHTML="Total Investment: " + Math.round(totalInvest)
    document.getElementById('intEarned_ppf').innerHTML="Intrest Earned: " + Math.round(intEarned)
    document.getElementById('totalValue_ppf').innerHTML="Total Value: " + Math.round(totalValue)

}