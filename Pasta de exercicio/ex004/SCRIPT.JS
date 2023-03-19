function tabuada() {

    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
        if(num.value.length == 0){
             window.alert('[ERRO]- valor não inserido')
                                 } 
    else {
  let n = Number(num.value)
  tab.innerHTML = ''
  for ( let cont = 1 ; cont <= 10 ; cont++){
    let item = window.document.createElement('option')
    item.text = ` ${n} x ${cont} = ${n*cont}`
    tab.appendChild(item)
   
    
}
    }
}