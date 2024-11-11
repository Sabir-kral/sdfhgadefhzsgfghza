let a = prompt("adin nedir")
let b = prompt("yasin necedir")
let c = prompt("en sevdiyin reng")
let d = prompt("en sevdiyin fealiyyet")
let mesaj = `salam senin adin ${a} sen ${b} yasindasan senin en sevdiyin reng ${c} ve en sevdiyin fealiyyet ${d}-dir...`


let pas = prompt("futbolda oyuncuya topu vermek ne adlanir")
let sut = prompt("futbolda topu qapiya uzaqdan vurmaqa ne demekdir")
let calim = prompt("oyuncu diger oyuncuyu kecmek ucun neden istifade edirler")
let penalti = prompt("futbolda oyuncunun topa eli deyende ne edilir")
let faul = prompt("futbolda oyuncunu yere yixanda nolur")
if (pas.toLowerCase()=== "pas") {
    document.write("sual bir duzdur.")
} else {
    document.write("sual bir sehvdir.")
}
if (sut.toLowerCase()=== "sut") {
    document.write("sual iki duzdur.")
} else {
    document.write("sual iki sehvdir.")
}
if (calim.toLowerCase()=== "calim") {
    document.write("sual uc duzdur..")
} else {
    document.write("sual uc sehvdir..")
}
if (penalti.toLowerCase()=== "penalti") {
    document.write("sual dord duzdur..")
} else {
    document.write("sual dord sehvdir..")
}
if (faul.toLowerCase()=== "faul") {
    document.write("sual bes duzdur.")
} else {
    document.write("sual bes sehvdir.")
}
document.write(mesaj)