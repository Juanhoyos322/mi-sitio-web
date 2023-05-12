const n = document.querySelector("#datoNombre")
const l = document.querySelector("#datoLinea")
const a = document.querySelector("#datoAnteriores")
const t = document.querySelector("#datoActual")
const m = document.querySelector("#datoModulo")
const dp = document.querySelector("#datoDP")
const op = document.querySelector("#datoOP")
const ar = document.querySelector("#datoArquitectura")
const rf = document.querySelector("#datoRF")
const rl = document.querySelector("#datoRL")
const re = document.querySelector("#datoRE")
const rfmc = document.querySelector("#datoRFC")
const rlmc = document.querySelector("#datoRLC")
const rc = document.querySelector("#datoRC")
const fs = document.querySelector("#datoFS")
const ra = document.querySelector("#datoRA")
const cp = document.querySelector("#datoCP")


function almacenarData(){
    let nom, lin, ant, act, mod, dap, obp, arq, rfm, rln, rec, rfc, rlc, recc, f, rea, cip
    nom = document.getElementById("nombre").value
    lin = document.getElementById("linea").value
    ant = document.getElementById("anteriores").value
    act = document.getElementById("actual").value
    mod = document.getElementById("modulo").value
    dap = document.getElementById("dp").value
    obp = document.getElementById("op").value
    arq = document.getElementById("arquitectura").value
    rfm = document.getElementById("rf").value
    rln = document.getElementById("rl").value
    rec = document.getElementById("re").value
    rfc = document.getElementById("rfc").value
    rlc = document.getElementById("rlc").value
    recc = document.getElementById("rc").value
    f = document.getElementById("fs").value
    rea = document.getElementById("ra").value
    cip = document.getElementById("cp").value

    localStorage.setItem("Nombre del producto", nom)
    localStorage.setItem("Linea de produccion", lin)
    localStorage.setItem("Versiones anteriores del producto", ant)
    localStorage.setItem("Version actual del producto", act)
    localStorage.setItem("Modulo", mod)
    localStorage.setItem("Descripcion del producto", dap)
    localStorage.setItem("objetivo del producto", obp)
    localStorage.setItem("Arquitectura", arq)
    localStorage.setItem("Requerimientos fisicos minimos", rfm)
    localStorage.setItem("Requerimientos logicos necesarios", rln)
    localStorage.setItem("Recomendaciones", rec)
    localStorage.setItem("Requerimientos fisicos minimos cliente", rfc)
    localStorage.setItem("Requerimientos logicos necesarios cliente", rlc)
    localStorage.setItem("Recomendaciones cliente", recc)
    localStorage.setItem("Funciones del sistema", f)
    localStorage.setItem("Requerimientos adicionales", rea)
    localStorage.setItem("Clientes del producto", cip)

    document.getElementById("nombre").value = "";
    document.getElementById("linea").value = "";
    document.getElementById("anteriores").value = "";
    document.getElementById("actual").value = "";
    document.getElementById("modulo").value = "";
    document.getElementById("dp").value = "";
    document.getElementById("op").value = "";
    document.getElementById("arquitectura").value = "";
    document.getElementById("rf").value = "";
    document.getElementById("rl").value = "";
    document.getElementById("re").value = "";
    document.getElementById("rfc").value = "";
    document.getElementById("rlc").value = "";
    document.getElementById("rc").value = "";
    document.getElementById("fs").value = "";
    document.getElementById("ra").value = "";
    document.getElementById("cp").value = "";
}


function cargarData(){
    let nombre,linea,anteriores,actual,modulo,dap,obp,arquitectura,rfm,rln,rec,rfc,rlc,recc,f,rea,cip
    nombre = localStorage.getItem("Nombre del producto");
    linea = localStorage.getItem("Linea de produccion");
    anteriores = localStorage.getItem("Versiones anteriores del producto");
    actual = localStorage.getItem("Version actual del producto");
    modulo = localStorage.getItem("Modulo");
    dap = localStorage.getItem("Descripcion del producto");
    obp = localStorage.getItem("objetivos del producto");
    arquitectura = localStorage.getItem("Arquitectura");
    rfm = localStorage.getItem("Requerimientos fisicos minimos");
    rln = localStorage.getItem("Requerimientos logicos necesarios");
    rec = localStorage.getItem("Recomendaciones");
    rfc = localStorage.getItem("Requerimientos fisicos minimos cliente");
    rlc = localStorage.getItem("Requerimientos logicos necesarios cliente");
    recc = localStorage.getItem("Recomendaciones cliente");
    f = localStorage.getItem("Funciones del sistema");
    rea = localStorage.getItem("Requerimientos adicionales");
    cip = localStorage.getItem("Clientes del producto");


    n.innerHTML = "<b>"+nombre+"</b>";
    l.innerHTML = "<b>"+linea+"</b>";
    a.innerHTML = "<b>"+anteriores+"</b>";
    t.innerHTML = "<b>"+actual+"</b>";
    m.innerHTML = "<b>"+modulo+"</b>";
    dp.innerHTML = "<b>"+dap+"</b>";
    op.innerHTML = "<b>"+obp+"</b>";
    ar.innerHTML = "<b>"+arquitectura+"</b>";
    rf.innerHTML = "<b>"+rfm+"</b>";
    rl.innerHTML = "<b>"+rln+"</b>";
    re.innerHTML = "<b>"+rec+"</b>";
    rfmc.innerHTML = "<b>"+rfc+"</b>";
    rlmc.innerHTML = "<b>"+rlc+"</b>";
    rc.innerHTML = "<b>"+recc+"</b>";
    fs.innerHTML = "<b>"+f+"</b>";
    ra.innerHTML = "<b>"+rea+"</b>";
    cp.innerHTML = "<b>"+cip+"</b>";
}
function clearlocalstore(){
    localStorage.clear();
}


