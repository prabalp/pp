function nps(){
    const mi=document.getElementById('mi_nps').value;
    const roi=document.getElementById('roi_nps').value;
    const tp=document.getElementById('tp_nps').value;
    

    const n=12

    var expt=n*tp;
    var num = (roi/(100*n)+1)**expt
    var deno= roi/(100*n);

    var X= (mi*num)/deno

    var totalInvest=mi*tp*12;
    var intEarned= X-totalInvest;
    var maturityAmount=0.6*X;
    var aInvest=0.4*X;

    document.getElementById('totalInvest_nps').innerHTML="Total Investment: " + Math.round(totalInvest)
    document.getElementById('intEarned_nps').innerHTML="Intrest Earned: " + Math.round(intEarned)
    document.getElementById('maturityAmount').innerHTML="Maturity Amount: " + Math.round(maturityAmount)
    document.getElementById('ex').innerHTML="Annuity Investment: " + Math.round(aInvest)

    
    
    
}
