function sip(){
    const mi=document.getElementById('mi').value;
    const roi=document.getElementById('roi').value;
    const tp=document.getElementById('tp').value;
    
    const n=12;
    
    var expt=n*tp;
    var nterm1= ((1+(roi/(100*n)))**expt)-1;
    var nterm2=(roi/(100*n))+1;
    
    var deno= roi/(100*n);
    
    var X= (mi*nterm1*nterm2)/deno;
    
    var totalInvest=mi*tp*12;
    var intEarned= X-totalInvest;
    var totalValue=X;
    
    document.getElementById('totalInvest').innerHTML="Total Investment: " + totalInvest
    document.getElementById('intEarned').innerHTML="Intrest Earned: " + intEarned
    document.getElementById('totalValue').innerHTML="Total Value: " + totalValue
    
    
    }
    