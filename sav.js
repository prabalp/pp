function sav(){


const ia=document.getElementById('ia_sav').value
const mc=document.getElementById('mc_sav').value
const roi=document.getElementById('roi_sav').value
const toc=document.getElementById('toc_sav').value
const t=document.getElementById('d_sav').value


const n=12
var expt = (n*t)
var trm1= ((roi/(100*n))+1)**expt
var trm2n= trm1-1
var trm2d=(roi/(100*n))

if(toc == 'a'){
    var Xa= ia*trm1 + (mc*(trm2n/trm2d))

    var totalInvest=ia + (mc*n*t);
    var intEarned= Xa-totalInvest;
    var totalValue=Xa;


}else if(toc == 'b'){
    var Xb= ia*trm1 + (mc*(trm2n/trm2d)*(1+trm2d))

    var totalInvest=ia+(mc*n*t);
    var intEarned= Xb-totalInvest;
    var totalValue=Xb;

}

    document.getElementById('totalInvest_sav').innerHTML="Total Investment: " + Math.round(totalInvest)
    document.getElementById('intEarned_sav').innerHTML="Intrest Earned: " + Math.round(intEarned)
    document.getElementById('totalValue_sav').innerHTML="Total Value: " + Math.round(totalValue)
}