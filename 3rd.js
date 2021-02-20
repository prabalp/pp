function th(){
    console.log("working1.....")
    const ms= document.getElementById('th_ms').value
    const age= document.getElementById('th_age').value

    const m=0.4*ms
    const n= 12
    const i = 4
    const tu=1

    var num= (1+(i/(100*n)))**(n*tu) - 1
    var deno = i/(100*n)

    var X= (m*num)/deno;

    document.getElementById('int').innerHTML= "Saving account balance after one year: " + Math.round(X)

    // saving account
    var ia=X
    var mc_sav=0.06*ms
    var roi=4
    
    const t=[4,9,14,19]

    console.log("working2.....")



    // const n=12
    var expt = t.map(function(element){
        return element * n;
    });

    console.log("working3.....")

    var ans_sav = new Array(4);
    for(let j= 0; j< 4; j++){

        ans_sav[j]= ia*(((roi/(100*n))+1)**expt[j]) + mc_sav*(( ((roi/(100*n))+1)**expt[j] -1 )/(roi/(100*n)))
        console.log("loop working"+j)
    }
    // var ans= ia*(((roi/(100*n))+1)**expt) + mc_sav*(( ((roi/(100*n))+1)**expt -1 )/(roi/(100*n)))

    // var trm1= ((roi/(100*n))+1)**expt
    // var trm2n= trm1-1
    // var trm2d=(roi/(100*n))
    console.log("first loop ends")

    for(let k= 0; k< 4; k++){
        document.getElementById('sav_table').rows[k].cells[0].innerHTML='After '+(t[k] + 1*1)+' years : ';
        console.log("loop working"+k)
        document.getElementById('sav_table').rows[k].cells[1].innerHTML=Math.round(ans_sav[k]);}

    console.log("working4.....")    
    

    // sip
    var mc_sip=0.28*ms;
    var i_sip=15

    // var expt=n*tp;--done
    // var nterm1= ((1+(roi/(100*n)))**expt)-1;
    // var nterm2=(roi/(100*n))+1;
    
    // var deno= roi/(100*n);
    
    // var X= (mi*nterm1*nterm2)/deno;

    var ans_sip = new Array(4);
    for(let j= 0; j< 4; j++){

        ans_sip[j]= mc_sip*((( ((i_sip/(100*n))+1)**expt[j] -1) * ((i_sip/(100*n))+1))/(i_sip/(100*n)))
        console.log("loop working_sip"+j)
    }

    for(let k= 0; k< 4; k++){
        document.getElementById('sip_table').rows[k].cells[0].innerHTML='After '+(t[k] + 1*1) +' years : ';
        console.log("loop working_sip"+k)
        document.getElementById('sip_table').rows[k].cells[1].innerHTML=Math.round(ans_sip[k]);}





    // // nsp
    // var mc_nsp=0.06*ms;
    // var i_nsp=0.10;

    // var ans_nsp = new Array(4);
    // for(let j= 0; j< 4; j++){

    //     ans_nsp[j]= mc_nsp*(( ((i_nsp/(100*n))+1)**expt[j] -1 )/(i_nsp/(100*n)))
    //     console.log("loop working_nsp"+j)
    // }

    // for(let k= 0; k< 4; k++){
    //     document.getElementById('nsp_table').rows[k].cells[0].innerHTML='After '+t[k]+' years : ';
    //     console.log("loop working_sip"+k)
    //     document.getElementById('nsp_table').rows[k].cells[1].innerHTML=Math.round(ans_nsp[k]);}





    // nsp





}