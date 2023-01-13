let frba12 = document.querySelector('input#ffat')
let fmes = document.querySelector('input#fmes')
let res = document.querySelector('div#res')

function calcular() {
let mes = Number(fmes.value)
let rba12 = Number(frba12.value)
if(rba12 <= 180000){
    //declaração anual até r$ 180.000
    let porcento = mes * 0.06
    res.innerHTML =`<p> Este mês, sua DAS será no valor de R$ ${porcento},00.<\p>`
} else if (rba12 <=360000){
    //declaraçao anual entre r$ 180.000 até r$ 360.000
    let aliq = rba12 * 0.112
    let pd = 9360
    let porcento= (aliq - pd)/rba12 * 100
    let impostoMensal = mes * (aliq - pd)/rba12
    res.innerHTML = `<p> O faturamento anual de sua empresa é ${rba12.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <\p>`
    res.innerHTML +=`<p> Sua empresa declarará este mês ${mes.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <\p>`
    res.innerHTML +=`<p>Pelo seu faturamento anual, sua empresa pagará o total de ${porcento.toFixed(2)}% de imposto nesse mes.<\p>`
    res.innerHTML +=`<p>O que equivale a ${impostoMensal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} de impostos no DAS.<\p>`
} else if (rba12 <= 720000){
    //de r$ 360.000 até r$ 720.000
    let aliq = rba12 * 0.135
    let pd = 17640
    let porcento = (aliq - pd)/rba12 *100
    let impostoMensal = mes * (aliq - pd)/rba12
    res.innerHTML = `<p> O faturamento anual de sua empresa é ${rba12.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <\p>`
    res.innerHTML +=`<p> Sua empresa declarará este mês ${mes.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <\p>`
    res.innerHTML +=`<p>Pelo seu faturamento anual, sua empresa pagará o total de ${porcento.toFixed(2)}% de imposto nesse mes.<\p>`
    res.innerHTML +=`<p>O que equivale a ${impostoMensal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} de impostos no DAS.<\p>`
} else if ( rba12<= 1800000){
    //de r$ 720.000 até r$ 1.800.000
    let aliq = rba12 * 0.160
    let pd = 35640
    let porcento = (aliq - pd)/rba12 *100
    let impostoMensal = mes * (aliq - pd)/ rba12
    res.innerHTML = `<p> O faturamento anual de sua empresa é ${rba12.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <\p>`
    res.innerHTML +=`<p> Sua empresa declarará este mês ${mes.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <\p>`
    res.innerHTML +=`<p>Pelo seu faturamento anual, sua empresa pagará o total de ${porcento.toFixed(2)}% de imposto nesse mes.<\p>`
    res.innerHTML +=`<p>O que equivale a ${impostoMensal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} de impostos no DAS.<\p>`
} else if ( rba12<=3600000) {
    //de r$ 1.800.000 até r$ 3.600.000
    let aliq = rba12 * 0.210
    let pd = 125640
    let porcento = (aliq - pd)/rba12 * 100
    let impostoMensal = mes * (aliq - pd)/ rba12
    res.innerHTML = `<p> O faturamento anual de sua empresa é ${rba12.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <\p>`
    res.innerHTML +=`<p> Sua empresa declarará este mês ${mes.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <\p>`
    res.innerHTML +=`<p>Pelo seu faturamento anual, sua empresa pagará o total de ${porcento.toFixed(2)}% de imposto nesse mes.<\p>`
    res.innerHTML +=`<p>O que equivale a ${impostoMensal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} de impostos no DAS.<\p>`
}else if(rba12<=4800000){
    //de r$ 3.600.000 até r$ 4.800.000
    let aliq = rba12 * 0.330
    let pd = 648000
    let porcento = (aliq - pd)/rba *100
    let impostoMensal = mes * (aliq -pd)/rba12
    res.innerHTML = `<p> O faturamento anual de sua empresa é ${rba12.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <\p>`
    res.innerHTML +=`<p> Sua empresa declarará este mês ${mes.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <\p>`
    res.innerHTML +=`<p>Pelo seu faturamento anual, sua empresa pagará o total de ${porcento.toFixed(2)}% de imposto nesse mes.<\p>`
    res.innerHTML +=`<p>O que equivale a ${impostoMensal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} de impostos no DAS.<\p>`
}
}
