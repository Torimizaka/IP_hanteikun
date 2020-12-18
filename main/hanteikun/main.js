
window.onload = function onLoad() {
    target = document.getElementById("output");
    target.innerHTML = "Ver1.5c 公式垢のプロフに書いてあるバージョンと異なる際は更新してください";
    kuriti = [0, 6, 10, 15, 19, 23, 26];
    fanti = [0, 1, 2, 3, 4, 5, 6];
    tt1 = "000";
    tt2 = "本能";
    tt3 = 1;
    tt4 = "name";
    tt5 = "none";
    tt6 = 1;
    tt7 = 1;
    tt8 = 1;
    tt9 = 1;
    tt10 = 1;
    tt11 = 1;
    tt12 = "000";
    tt13 = 0;
    ketext = document.hanteisuru['kekka'].value;
    daidai = 1;
    daidai2 = 6;
    co1 = [];
    co2 = [];
    co3 = [];
    co4 = [];
    co5 = [];

    gtA = [001,"018", "031", "063", 125, 201, 317,365,464, 614,710, 722,752, 901, 915,118,521,"042",623,330,"019",725,849,"002","021",106,361,818];
    gtB = ["023", "091", 142, 192, 214, 371, 528, 620, 810, 821, 829, 903, "013", "072", 403, 707, 971, "003", 110, 194, "005", "012", "022", 209, 413, 920, 982];
    gtC = ["061","070",199,235,243,354,451,898,923,999,"032","079",108,124,137,571,581,610,126,135,291,"033",213,523,625,888,997];
    gtTA = [432, 566, 703, 635, 020, 623, 330, 007, 071, 540,422];
    gtTB = [422,049,524,"048",102];


    genra1 = [];
    genra2 = [];
    genra3 = [];
    genra4 = [001, "002","003","005","012", "013", "018","019", "021","022", "023", "031","032","033" ,"042","061", "063","070", "072","079", "091", 106,108,110, 118,124, 125,126,135,137, 142, 192,194,199, 201,209,213, 214,235,243,291, 317, 330,354, 361, 365, 371, 403,413,451, 464, 521,523, 528,571,581,610, 614, 620, 623,625,707, 710, 722, 725, 752, 810, 818, 821, 829, 849,888,898, 901, 903, 915,920,923,971,982,997,999];
    genra5 = [007,"020","048","049", "071",102, 330, 422,432,524,  540, 566,  623, 635, 703];
    genra6 = [];

    con = [0, 2, 0, 0, 2, 1, 1, 0, 1, 2, 2, 2, 3, 0, 0,0,3,1,2,0,0,2,0,2,3,3,0,3,0,3,0,0,2,2,0,1,2,3,1,3,0,2,2,3,1,3,1,1,3,4,4,2,1,0,0,0,0,3,2,0,2,3,0,0,4,5,0,2,0,3,3,1,4,2,2,2,3,3,3,2,3,0];
}
function textset(){
    ketext = "@IdeaPolisCo\n#IPCo_作業\n幻想体ID:" + tt1 + "\n作業:" + tt2 + "\n出目:" + tt3 + "\n名前:" + tt4 + "\n性別:" + tt5 + "\nランク:" + tt6 + "\n勇気:" + tt7 + "\n慎重:" + tt8 + "\n自制:" + tt9 + "\n正義:" + tt10 + "\n加護:"+tt12+"\n現在カウント:"+tt11;
    document.hanteisuru['kekka'].value = ketext;
    document.getElementById("zisei2").value = tt9;
}

function counte() {
    if (tt1 == 001 || tt1 == "001") {
        tt11 = con[0];
    }
    if (tt1 == 018 || tt1 == "018" ||tt1==18) {
        tt11 = con[1];
    }
    if (tt1 == 031 || tt1 == "031") {
        tt11 = con[2];
    }
    if (tt1 == 063 || tt1 == "063") {
        tt11 = con[3];
    }
    if (tt1 == 125) {
        tt11 = con[4];
    }
    if (tt1 == 201) {
        tt11 = con[5];
    }
    if (tt1 == 317) {
        tt11 = con[6];
    }
    if (tt1 == 365) {
        tt11 = con[7];
    }
    if (tt1 == 464) {
        tt11 = con[8];
    }
    if (tt1 == 614) {
        tt11 = con[9];
    }
    if (tt1 == 710) {
        tt11 = con[10];
    }
    if (tt1 == 722) {
        tt11 = con[11];
    }
    if (tt1 == 752) {
        tt11 = con[12];
    }
    if (tt1 == 901) {
        tt11 = con[13];
    }
    if (tt1 == 915) {
        tt11 = con[14];
    }
    if (tt1 == 118) {
        tt11 = con[15];
    }
    if (tt1 == 521) {
        tt11 = con[16];
    }
    if (tt1 == 042 || tt1 == "042") {
        tt11 = con[17];
    }
    if (tt1 == 330) {
        tt11 = con[18];
    }
    if (tt1 == 623) {
        tt11 = con[19];
    }
    if (tt1 == 019 || tt1 == "019") {
        tt11 = con[20];
    }
    if (tt1 == 725) {
        tt11 = con[21];
    }
    if (tt1 == 849) {
        tt11 = con[22];
    }
    if (tt1 == 002 || tt1 == "002") {
        tt11 = con[23];
    }
    if (tt1 == 021 || tt1 == "021") {
        tt11 = con[24];
    }
    if (tt1 == 106) {
        tt11 = con[25];
    }
    if (tt1 == 361) {
        tt11 = con[26];
    }
    if (tt1 == 818) {
        tt11 = con[27];
    }
    if (tt1 == 023 || tt1 == "023") {
        tt11 = con[28];
    }
    if (tt1 == 091 || tt1 == "091") {
        tt11 = con[29];
    }
    if (tt1 == 142) {
        tt11 = con[30];
    }
    if (tt1 == 192) {
        tt11 = con[31];
    }
    if (tt1 == 214) {
        tt11 = con[32];
    }
    if (tt1 == 371) {
        tt11 = con[33];
    }
    if (tt1 == 528) {
        tt11 = con[34];
    }
    if (tt1 == 620) {
        tt11 = con[35];
    }
    if (tt1 == 810) {
        tt11 = con[36];
    }
    if (tt1 == 821) {
        tt11 = con[37];
    }
    if (tt1 == 829) {
        tt11 = con[38];
    }
    if (tt1 == 903) {
        tt11 = con[39];
    }
    if (tt1 == 013 || tt1 == "013") {
        tt11 = con[40];
    }
    if (tt1 == 072 || tt1 == "072") {
        tt11 = con[41];
    }
    if (tt1 == 403) {
        tt11 = con[42];
    }
    if (tt1 == 707) {
        tt11 = con[43];
    }
    if (tt1 == 971) {
        tt11 = con[44];
    }
    if (tt1 == 003 || tt1=="003") {
        tt11 = con[45];
    }
    if (tt1 == 110) {
        tt11 = con[46];
    }
    if (tt1 == 194) {
        tt11 = con[47];
    }
    if (tt1 == 005 || tt1 == "005") {
        tt11 = con[48];
    }
    if (tt1 == 012 || tt1 == "012") {
        tt11 = con[49];
    }
    if (tt1 == 022 || tt1 == "022" ) {
        tt11 = con[50];
    }
    if (tt1 == 209) {
        tt11 = con[51];
    }
    if (tt1 == 413) {
        tt11 = con[52];
    }
    if (tt1 == 920) {
        tt11 = con[53];
    }
    if (tt1 == 982 ) {
        tt11 = con[54];
    }
    if (tt1 == 018 || tt1 == "018" || tt1 == 18) {
        tt11 = con[1];
    }
    if (tt1 == 061 || tt1 == "061" || tt1 == 61) {
        tt11 = con[55];
    }
    if (tt1 == 070 || tt1 == "070" || tt1 == 70) {
        tt11 = con[56];
    }
    if (tt1 == 199) {
        tt11 = con[57];
    }
    if (tt1 == 235) {
        tt11 = con[58];
    }
    if (tt1 == 243) {
        tt11 = con[59];
    }
    if (tt1 == 354) {
        tt11 = con[60];
    }
    if (tt1 == 451) {
        tt11 = con[61];
    }
    if (tt1 == 898) {
        tt11 = con[62];
    }
    if (tt1 == 923) {
        tt11 = con[63];
    }
    if (tt1 == 999) {
        tt11 = con[64];
    }
    if (tt1 == 032 || tt1 == "032" || tt1 == 32) {
        tt11 = con[65];
    }
    if (tt1 == 079 || tt1 == "079" || tt1 == 79) {
        tt11 = con[66];
    }
    if (tt1 == 108) {
        tt11 = con[67];
    }
    if (tt1 == 124) {
        tt11 = con[68];
    }
    if (tt1 == 137) {
        tt11 = con[69];
    }
    if (tt1 == 571) {
        tt11 = con[70];
    }
    if (tt1 == 581) {
        tt11 = con[71];
    }
    if (tt1 == 610) {
        tt11 = con[72];
    }
    if (tt1 == 126) {
        tt11 = con[73];
    }
    if (tt1 == 135) {
        tt11 = con[74];
    }
    if (tt1 == 291) {
        tt11 = con[75];
    }
    if (tt1 == 033 || tt1 == "033" || tt1 == 33) {
        tt11 = con[76];
    }
    if (tt1 == 213) {
        tt11 = con[77];
    }
    if (tt1 == 523) {
        tt11 = con[78];
    }
    if (tt1 == 625) {
        tt11 = con[79];
    }
    if (tt1 == 888) {
        tt11 = con[80];
    }
    if (tt1 == 997) {
        tt11 = con[81];
    }
    if (tt1 == 432 || tt1 == 566 || tt1 == 703 ||tt1==635 ||tt1==020 || tt1==310 || tt1==099 ||tt1==007 ||tt1==071 ||tt1==540 || tt1==422 || tt1==049 || tt1==524 || tt1==048 || tt1==102) {
        tt11 = 0;
    }
}

function set1() {
    tt1 = document.hanteisuru['gen1'].value;
    counte();
    textset();
}
function set2() {
    tt1 = document.hanteisuru['gen2'].value;
    counte();
    textset();
}
function set3() {
    tt1 = document.hanteisuru['gen3'].value;
    counte();
    textset();
}
function set4() {
    tt1 = document.hanteisuru['gen4'].value;
    counte();
    textset();
}
function set5() {
    tt1 = document.hanteisuru['gen5'].value;
    counte();
    textset();
}
function set6() {
    tt1 = document.hanteisuru['gen6'].value;
    counte();
    textset();
}
function set7() {
    tt4 = document.hanteisuru['se11'].value;
    tt5 = document.hanteisuru['se12'].value;
    tt6 = document.hanteisuru['se13'].value;
    tt7 = document.hanteisuru['se14'].value;
    tt8 = document.hanteisuru['se15'].value;
    tt9 = document.hanteisuru['se16'].value;
    tt10 = document.hanteisuru['se17'].value;
    tt12 = document.hanteisuru['se18'].value;
    tt13 = parseInt(document.hanteisuru['se19'].value);
    textset();
    document.hanteisuru['bahu'].value = tt13;
}
function set8() {
    tt4 = document.hanteisuru['se21'].value;
    tt5 = document.hanteisuru['se22'].value;
    tt6 = document.hanteisuru['se23'].value;
    tt7 = document.hanteisuru['se24'].value;
    tt8 = document.hanteisuru['se25'].value;
    tt9 = document.hanteisuru['se26'].value;
    tt10 = document.hanteisuru['se27'].value;
    tt12 = document.hanteisuru['se28'].value;
    tt13 = parseInt(document.hanteisuru['se29'].value);
    textset();
    document.hanteisuru['bahu'].value = tt13;
}
function set9() {
    tt4 = document.hanteisuru['se31'].value;
    tt5 = document.hanteisuru['se32'].value;
    tt6 = document.hanteisuru['se33'].value;
    tt7 = document.hanteisuru['se34'].value;
    tt8 = document.hanteisuru['se35'].value;
    tt9 = document.hanteisuru['se36'].value;
    tt10 = document.hanteisuru['se37'].value;
    tt12 = document.hanteisuru['se38'].value;
    tt13 = parseInt(document.hanteisuru['se39'].value);
    textset();
    document.hanteisuru['bahu'].value = tt13;
}
function set10() {
    tt4 = document.hanteisuru['se41'].value;
    tt5 = document.hanteisuru['se42'].value;
    tt6 = document.hanteisuru['se43'].value;
    tt7 = document.hanteisuru['se44'].value;
    tt8 = document.hanteisuru['se45'].value;
    tt9 = document.hanteisuru['se46'].value;
    tt10 = document.hanteisuru['se47'].value;
    tt12 = document.hanteisuru['se48'].value;
    tt13 = parseInt(document.hanteisuru['se49'].value);
    textset();
    document.hanteisuru['bahu'].value = tt13;
}
function set11() {
    tt4 = document.hanteisuru['se51'].value;
    tt5 = document.hanteisuru['se52'].value;
    tt6 = document.hanteisuru['se53'].value;
    tt7 = document.hanteisuru['se54'].value;
    tt8 = document.hanteisuru['se55'].value;
    tt9 = document.hanteisuru['se56'].value;
    tt10 = document.hanteisuru['se57'].value;
    tt12 = document.hanteisuru['se58'].value;
    tt13 = parseInt(document.hanteisuru['se59'].value);
    textset();
    document.hanteisuru['bahu'].value = tt13;
}
function set12() {
    tt2 = document.hanteisuru['sagyoukei'].value;
    textset();
}

function sagyodai() {
    daidai = document.hanteisuru['zisei2'].value;
    daidai2 = document.hanteisuru['daisu2'].value;
    deme1 = 0;
    deme2 = 0;

    for (i = 0; i < daidai; i++) {
        deme1 = Math.floor(Math.random() * daidai2)+1;
        deme2 = deme2 + deme1;
    }
    tt3 = deme2;
    textset();
}

function gatya() {
    genra1 = [];
    genra2 = [];
    genra3 = [];
    genra6 = [];

    let checkbox = document.querySelectorAll('input[type="checkbox"]');
    if (checkbox[0].checked) {
        genra1 = genra1.concat(gtA);
        genra3 = genra3.concat(gtA);
    }
    if (checkbox[1].checked) {
        genra1 = genra1.concat(gtB);
        genra3 = genra3.concat(gtB);
    }
    if (checkbox[2].checked) {
        genra1 = genra1.concat(gtC);
        genra3 = genra3.concat(gtC);
    }
    genra3 = genra3.concat(gtTA);
    genra2 = genra2.concat(gtTA);
    

    var arr = [];
    randam = 0;
    check = "";
var select = document.getElementById("gen1");
    randam = Math.floor(Math.random() * genra1.length);
    check = genra1[randam];
    arr.push(check);
    kensa = genra4.indexOf(genra1[randam]);
    select.options[kensa].selected = true;
    

    var select = document.getElementById("gen2");
    while (true) {
        randam = Math.floor(Math.random() * genra1.length);
        if (! arr.includes(genra1[randam])) {
            check = genra1[randam];
            arr.push(check);
            kensa = genra4.indexOf(genra1[randam]);
            select.options[kensa].selected = true;
            break;
        }
        }

    var select = document.getElementById("gen3");
    while (true) {
        randam = Math.floor(Math.random() * genra1.length);
        if (!arr.includes(genra1[randam])) {
            check = genra1[randam];
            arr.push(check);
            kensa = genra4.indexOf(genra1[randam]);
            select.options[kensa].selected = true;
            break;
        }
    }

    var select = document.getElementById("gen4");
    while (true) {
        randam = Math.floor(Math.random() * genra1.length);
        if (!arr.includes(genra1[randam])) {
            check = genra1[randam];
            arr.push(check);
            kensa = genra4.indexOf(genra1[randam]);
            select.options[kensa].selected = true;
            break;
        }
    }

    var select = document.getElementById("gen5");
    while (true) {
        randam = Math.floor(Math.random() * genra2.length);
        if (!arr.includes(genra2[randam])) {
            check = genra2[randam];
            arr.push(check);
            kensa = genra2.indexOf(genra2[randam]);
            select.options[kensa].selected = true;
            break;
        }
    }
    
}

function gatya2() {
    mara =  document.hanteisuru['gen6'].value;
    ddd = 5;
    ddd2 = 1;
    if (mara == 432 || mara == 566 || mara == 703 || mara == 635 || mara == 020 || mara == 310 || mara == 099) {
        ddd = 4;
    }
    ddd2 = Math.floor(Math.random() * ddd)+1 ;
    if (ddd2 == 5) {
        ddd2 = 6;
    }
    document.getElementById("satti").value = ddd2;
}

function rizarutotyu() {
    sagyo_Z = parseInt(document.rizalt['sagyo_Z'].value);

    tin_Z = parseInt(document.rizalt['tin_Z'].value);
    tin_T = parseInt(document.rizalt['tin_T'].value);
    tin_H = parseInt(document.rizalt['tin_H'].value);
    tin_W = parseInt(document.rizalt['tin_W'].value);
    tin_A = parseInt(document.rizalt['tin_A'].value);

    gen_Z = parseInt(document.rizalt['gen_Z'].value);
    gen_T = parseInt(document.rizalt['gen_T'].value);
    gen_H = parseInt(document.rizalt['gen_H'].value);
    gen_W = parseInt(document.rizalt['gen_W'].value);
    gen_A = parseInt(document.rizalt['gen_A'].value);

    yokusei = parseInt(document.rizalt['yokusei'].value);

    sagyo1 = sagyo_Z;

    sagyopo = sagyo1 * 10;

    ZApo = 30*tin_Z;
    TEpo = 60 * tin_T;
    HEpo = 90 * tin_H;
    WApo = 120 * tin_W;
    ALpo = 150 * tin_A;

    tinp = ZApo+TEpo+HEpo+WApo+ALpo;

    gen1 = 320 * gen_Z;
    gen2 = 440 * gen_T;
    gen3 = 560 * gen_H;
    gen4 = 880 * gen_W;
    gen5 = 1000 * gen_A;

    genpo = gen1 + gen2 + gen3 + gen4 + gen5;
    yokupo = "";
    yokupp = 0;
    if (yokusei == 1) {
        yokupo = "抑制ポイント：2000\n";
        yokupp = 2000;
    }

    summ = sagyopo + tinp + genpo + yokupp;

    document.rizalt['rizalt2'].value = "作業ポイント：" + sagyopo + "\n鎮圧ポイント：" + tinp + "\n幻想体化：" + genpo + "\n" + yokupo + "合計ポイント：" + summ;

}

function moto() {

    for (i = 0; i < seigi; i++) {
        dememe = Math.floor(Math.random() * 6);
        demememe = demememe + dememe;
    }
    if (taisei == 1) {
        katasa = 1.5;
    }
    if (taisei == 2) {
        katasa = 1.25;
    }
    if (taisei == 3) {
        katasa = 1;
    }
    if (taisei == 4) {
        katasa = 0.75;
    }
    if (taisei == 5) {
        katasa = 0.5;
    }
    if (taisei == 6) {
        katasa = 0;
    }

    if (kyori == 1) {
        if (kyori2 == 1) {
            kyoridame = 1;
        }
        if (kyori2 == 2) {
            kyoridame = 0.75;
        }
        if (kyori2 == 3) {
            kyoridame = 1.25;
        }
    }
    if (kyori == 2) {
        if (kyori2 == 1) {
            kyoridame = 1.25;
        }
        if (kyori2 == 2) {
            kyoridame = 1;
        }
        if (kyori2 == 3) {
            kyoridame = 0.75;
        }
    }
    if (kyori == 3) {
        if (kyori2 == 1) {
            kyoridame = 0.75;
        }
        if (kyori2 == 2) {
            kyoridame = 1.25;
        }
        if (kyori2 == 3) {
            kyoridame = 1;
        }
    }
    kuritxt = "";


    hanketu = Math.floor(demememe * kyoridame * katasa);
    kuri = Math.floor(hanketu * 1.25);
    fan = Math.floor(hanketu * 0.75);

    for (var i = 1; i < 6; ++i) {
        if (seigi == i) {
            if (demememe >= kuriti[i]) {

                kuritxt = "：ｸﾘﾃｨｶﾙ";
                hanketu = kuri;
            }
            if (demememe == fanti[i]) {
                kuritxt = "：ﾌｧﾝﾌﾞﾙ";
                hanketu = fan;
            }
        }
    }

    if (kakeru != 0) {
        hanketu = hanketu * kakeru;
    }

    if (tasu != 0) {
        hanketu = hanketu + tasu;
    }

    if (hanketu <= 0) {
        hanketu = 0;
    }

    battle = "出目" + demememe + kuritxt + "：与ダメージ" + hanketu;

}

function keisantyu() {
    seigi = parseInt(document.tinatusuru['seigi'].value);
    kyori = parseInt(document.tinatusuru['kyori'].value);
    kyori2 = parseInt(document.tinatusuru['kyori2'].value);
    taisei = parseInt(document.tinatusuru['taisei'].value);
    kakeru = parseInt(document.tinatusuru['kakeru'].value);
    tasu = parseInt(document.tinatusuru['tasu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 1;
    katasa = 1;
    battle = "";
    moto();
    document.tinatusuru['hanketu'].value =battle ;
}

function keisantyu2() {
    seigi = parseInt(document.tinatusuru2['seigi'].value);
    kyori = parseInt(document.tinatusuru2['kyori'].value);
    kyori2 = parseInt(document.tinatusuru2['kyori2'].value);
    taisei = parseInt(document.tinatusuru2['taisei'].value);
    kakeru = parseInt(document.tinatusuru2['kakeru'].value);
    tasu = parseInt(document.tinatusuru2['tasu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 1;
    katasa = 1;

    battle = "";
    moto();
    document.tinatusuru2['hanketu'].value = battle;

}

function keisantyu3() {
    seigi = parseInt(document.tinatusuru3['seigi'].value);
    kyori = parseInt(document.tinatusuru3['kyori'].value);
    kyori2 = parseInt(document.tinatusuru3['kyori2'].value);
    taisei = parseInt(document.tinatusuru3['taisei'].value);
    kakeru = parseInt(document.tinatusuru3['kakeru'].value);
    tasu = parseInt(document.tinatusuru3['tasu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 1;
    katasa = 1;
    battle = "";
    moto();
    document.tinatusuru3['hanketu'].value = battle;
}

function keisantyu4() {
    seigi = parseInt(document.tinatusuru4['seigi'].value);
    kyori = parseInt(document.tinatusuru4['kyori'].value);
    kyori2 = parseInt(document.tinatusuru4['kyori2'].value);
    taisei = parseInt(document.tinatusuru4['taisei'].value);
    kakeru = parseInt(document.tinatusuru4['kakeru'].value);
    tasu = parseInt(document.tinatusuru4['tasu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 1;
    katasa = 1;

    battle = "";
    moto();
    document.tinatusuru4['hanketu'].value = battle;

}

function keisantyu5() {
    seigi = parseInt(document.tinatusuru5['seigi'].value);
    kyori = parseInt(document.tinatusuru5['kyori'].value);
    kyori2 = parseInt(document.tinatusuru5['kyori2'].value);
    taisei = parseInt(document.tinatusuru5['taisei'].value);
    kakeru = parseInt(document.tinatusuru5['kakeru'].value);
    tasu = parseInt(document.tinatusuru5['tasu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 1;
    katasa = 1;
    battle = "";
    moto();
    document.tinatusuru5['hanketu'].value = battle;
}

function keisantyu6() {
    seigi = parseInt(document.tinatusuru6['seigi'].value);
    kyori = parseInt(document.tinatusuru6['kyori'].value);
    kyori2 = parseInt(document.tinatusuru6['kyori2'].value);
    taisei = parseInt(document.tinatusuru6['taisei'].value);
    kakeru = parseInt(document.tinatusuru6['kakeru'].value);
    tasu = parseInt(document.tinatusuru6['tasu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 1;
    katasa = 1;

    battle = "";
    moto();
    document.tinatusuru6['hanketu'].value = battle;

}

function keisantyu7() {
    seigi = parseInt(document.tinatusuru7['seigi'].value);
    kyori = parseInt(document.tinatusuru7['kyori'].value);
    kyori2 = parseInt(document.tinatusuru7['kyori2'].value);
    taisei = parseInt(document.tinatusuru7['taisei'].value);
    kakeru = parseInt(document.tinatusuru7['kakeru'].value);
    tasu = parseInt(document.tinatusuru7['tasu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 1;
    katasa = 1;
    battle = "";
    moto();
    document.tinatusuru7['hanketu'].value = battle;
}

function keisantyu8() {
    seigi = parseInt(document.tinatusuru8['seigi'].value);
    kyori = parseInt(document.tinatusuru8['kyori'].value);
    kyori2 = parseInt(document.tinatusuru8['kyori2'].value);
    taisei = parseInt(document.tinatusuru8['taisei'].value);
    kakeru = parseInt(document.tinatusuru8['kakeru'].value);
    tasu = parseInt(document.tinatusuru8['tasu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 1;
    katasa = 1;

    battle = "";
    moto();
    document.tinatusuru8['hanketu'].value = battle;

}

function keisantyu9() {
    seigi = parseInt(document.tinatusuru9['seigi'].value);
    kyori = parseInt(document.tinatusuru9['kyori'].value);
    kyori2 = parseInt(document.tinatusuru9['kyori2'].value);
    taisei = parseInt(document.tinatusuru9['taisei'].value);
    kakeru = parseInt(document.tinatusuru9['kakeru'].value);
    tasu = parseInt(document.tinatusuru9['tasu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 1;
    katasa = 1;
    battle = "";
    moto();
    document.tinatusuru9['hanketu'].value = battle;
}

function keisantyu10() {
    seigi = parseInt(document.tinatusuru10['seigi'].value);
    kyori = parseInt(document.tinatusuru10['kyori'].value);
    kyori2 = parseInt(document.tinatusuru10['kyori2'].value);
    taisei = parseInt(document.tinatusuru10['taisei'].value);
    kakeru = parseInt(document.tinatusuru10['kakeru'].value);
    tasu = parseInt(document.tinatusuru10['tasu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 1;
    katasa = 1;

    battle = "";
    moto();
    document.tinatusuru10['hanketu'].value = battle;

}
function hanteityu() {
    irai=0;
    rankk = 1;
    gene = "";
    name = "noname";
    seihi = 0;
    seiti = 0;
    sitxt = "";
    seitxt = "";
    sibou = 1;
    kekka = document.hanteisuru['kekka'].value.split(/\n/);
    bahu = parseInt(document.hanteisuru['bahu'].value);
    kazu = kekka.length;
    text = "";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
    sagyona = 0;
    sagyose1 = 0;
    sagyose2 = 0;
    sagyose3 = 0;
    ransu = 0;
    ransu2 = 0;
    kensaku = 0;
    kensaku2 = 0;
    PE = 0;
    pani = 0;
    nuid = [001, 031, 063, 125, 201, 317, 432, 566, 614, 703, 722,901,915];
    kenti = "";
    jougen = 6;
    dame = 0;
    dametxt = "";
    kuritxt = "";
    peti = 0;
    keikenti = 0;
    keina = "";
    jou = 0;
    daideme1 = 1;
    daideme2 = 1;
    daideme3 = 1;
    daideme4 = 1;
    namera = [document.hanteisuru['se11'].value, document.hanteisuru['se21'].value, document.hanteisuru['se31'].value, document.hanteisuru['se41'].value, document.hanteisuru['se51'].value];
    pale = 0;
    sulo = 0;
    nefi = 0;
    kagohuti = 000;
    kari = 0;
    kari2 = 0;
    kari3 = 0;
    katit = "";

    for (var i = 0; i < kazu; ++i) {
        tete1 = kekka[i].split(/\s\s+/).join('');
        tete = tete1.split(':');
        if (i >= 1 || i == 3 || i == 5 || i == 6 || i == 12) {
            if (tete[1] == "EX"|| tete[1]=="ex") {
                tete[1] = 6;
            }
            kekka[i] = tete[1];
        } else {
            if (tete[1] == "EX" || tete[1]== "ex" ) {
                tete[1] = 6;
            }
            kekka[i] = parseInt(tete[1]);
        }

    }
    tt12 = kekka[12];
    kagoti = kekka[12].split(/,/);
    kekka[12] = kagoti;

    for (var i = 0; i < kazu; ++i) {
        if (kekka[i] == null) {
            if (i >= 2) {
                alert(i + 1 + "行目入力エラー");
            }
        } else {
        }
    }


    if (kekka[3] == "本能") {
        irai = 0;
        sagyona = 0;
        keina = "勇気：";
    } else {
        if (kekka[3] == "洞察") {
            irai = 0;
            sagyona = 1;
            keina = "慎重：";
        } else {
            if (kekka[3] == "愛着") {
                irai = 0;
                sagyona = 2;
                keina = "自制：";
            } else {
                if (kekka[3] == "抑圧") {
                    irai = 0;
                    sagyona = 3;
                    keina = "正義：";
                } else {
                    if (kekka[3] == "返却") {
                        irai = 0;
                        sagyona = 5;
                    } else { sagyona = 4; }}
            }
}
    }
    if (kekka[3] == "特殊") {
        irai = 1;
        sagyona = 1;
        keina = "特殊：";
    } 

    kurike = 0;
    fanke = 0;

    for (var i = 1; i < 7; ++i) {
        if (kekka[10] == i) {
            if (kekka[4] >= kuriti[i]) {
                kuritxt = "クリティカル、ギフト入手\n";
                kurike = 1;
            }
            if (kekka[4] == fanti[i]) {
                kuritxt = "ファンブル、観測上昇なし\n";
                fanke = 1;
            }
        }
    }

    tt3 = kekka[4];
    tt1 = kekka[2];
    tt2 = kekka[3];
    tt4 = kekka[5];
    tt5 = kekka[6];
    tt6 = kekka[7];
    tt7 = kekka[8];
    tt8 = kekka[9];
    tt9 = kekka[10];
    tt10 = kekka[11];
    tt11 = kekka[13];


    peti = Number(kekka[4]) + Number(bahu);
    kekka[4] = peti;
    if (kekka[4] <= 0) {
        kekka[4] = 0;
    }


    nefi = parseInt(kekka[13]);

    sagyose1 = sagyona + 8;
    sagyose2 = kekka[sagyose1];
    sagyose3 = sagyose2 - 1;

    name = kekka[5];



    namae = "g";
    namae += kekka[2];
    hantei = namae;
    funcName = hantei;
    strngCall = "return " + funcName + "()";
    f = new Function(strngCall);
    f();

    if (pani == 1) {
        kensaku = kekka[12].indexOf('915');
        if (kensaku != -1) {
            sibou = 0;
            text = "";
            
        }

    }

    kensaku10 = kekka[12].indexOf('019');
    kensaku11 = kekka[12].indexOf('106');
    kensaku12 = kekka[12].indexOf('829');

    kensaku524 = kekka[12].indexOf('524');
    kensaku5242 = kekka[12].indexOf('5241');
    kensaku5243 = kekka[12].indexOf('5242');

        if (kensaku10 != -1) {
            if (kekka[2] !=019 ) {
        text += "職員"+name+"は音となって消えた\n";
                sibou = 0;
            }
        }
    if (kensaku11 != -1 && sagyona == 0) {
        text += "職員"+name+"は体が急激に腐敗した\n";
        sibou = 0;
    }

    if (kekka[2] != 524) {
    if (kensaku5243 != -1) {
        sibou = 0;
        text += "▼職員" + name + "はストーブに引き込まれ、空っぽのストーブと共に消失した\n次の作業時には空っぽのストーブのみ戻ってくる\n";
    } else {
        if (kensaku5242 != -1) {
            text += "職員" + name + "の加護欄に「5242」を追加\n";
            tt12 += ",5242";
            for (i = 0; i < 5; i++) {
                kensaku3 = namera[i].indexOf(name);
                if (kensaku3 != -1) {
                    nana2 = i + 1;
                    nana = "se" + nana2 + "8";
                    document.hanteisuru[nana].value += ",5242";
                }
            }
        } else {
            if (kensaku524 != -1) {
                text += "職員" + name + "の加護欄に「5241」を追加\n";
                tt12 += ",5241";
                for (i = 0; i < 5; i++) {
                    kensaku3 = namera[i].indexOf(name);
                    if (kensaku3 != -1) {
                        nana2 = i + 1;
                        nana = "se" + nana2 + "8";
                        document.hanteisuru[nana].value += ",5241";
                    }
                }
            }
        }
    }
    }


    kensaku0611 = kekka[12].indexOf('0611');
    if (kensaku0611 != -1) {
        if (kekka[2] != 061 && seihi == 1) {
            sibou = 0;
            text += "職員" + name + "は水槽に引きずりこまれた\nこの職員のステータスがこの日の間初期値になる\n";

        }
    }


    kensaku451 = kekka[12].indexOf('451');
    if (kensaku451 != -1 && sagyona == 3) {
        sibou = 0;
        text += "職員" + name + "は作業前に即座に死亡したためこの作業で発動した能力などは無効\n";
    }


    if (kensaku12 != -1 && pani == 1) {
        
        text += "部門内の加護829職員は全員星巡りとなり、飛び立つ流星が脱走した\n星巡りは鎮圧後死亡する\n";
    }

    if (seihi == 0) {
        seitxt = "作業失敗\n";

    } else {
        seitxt = "作業成功\n";

    }
    if (sibou == 0) {
        sitxt = "▼職員" + name + "は死んでいる。\n";
        tt12 = "";
        for (i = 0; i < 5; i++) {
            kensaku3 = namera[i].indexOf(name);
            if (kensaku3 != -1) {
                nana2 = i + 1;
                nana = "se" + nana2 + "8";
                document.hanteisuru[nana].value = "000";
            }
        }

    } else {
        sitxt = "生還\n";

    }
 if (sagyona == 4 || sagyona == 5) {
        seitxt = "";
        
    } 
    

    if (seihi == 0) {
        
        jougen = seiti;
        if (pale == 0) {
            dame = jougen - kekka[4];
            if (dame >= 1) {
                dametxt = "\n" + dame + "ダメージ";
                if (kekka[2] == "003") {
                    dametxt = "1ダメージ";
                }
            }
        } else {
            dame = (rankk - kekka[4]) * 5;
            if (dame >= 1) {
dametxt = "\n" + dame + "%ダメージ";
            }
            
        }

        if (kekka[2] == 110) {
            dametxt = "";
        }

        
    }
    keitxt = 0;
    if (seihi == 1) {
        keitxt = keina + keikenti;

    } else {
        keitxt = 0;
    }

    if (peti >= jou) {
        peti = jou;
    }

    kensaku022 = kekka[12].indexOf('022');
    if (kensaku022 != -1) {
        if (dame >= 1) {
            text += "灯の保護のカウンターが減少した\n";
            con[50] -= 1;
        }
    }
    if (nefi >= 5) {
        nefi = 5;
    }


    kekka[13] = nefi;
    con[sulo] = kekka[13];

    tt11 = kekka[13];
    textset();

    if (peti <= 0) {
        peti = 0;
    }
    twetext = gene + "\n" + name + "　" + kekka[3] + "\n\n" + seitxt + kuritxt+text + sitxt+dametxt+"\n獲得PE-BOX："+peti+"\n獲得経験値　"+keitxt;
    document.hanteisuru['del'].value = twetext;
}

function daisu() {
    daideme3 = 0;
    daideme4 = 0;
    for (i = 0; i < daideme1; i++) {
        daideme3 = Math.floor(Math.random() * daideme2+1);
        daideme4 = daideme4 + daideme3;
    }

}

function rank() {
    if (rankk == 1) {
        seiti = 3;
        keikenti = 2;
        jou = 6;
    }
    if (rankk == 2) {
        seiti = 6;
        keikenti = 4;
        jou = 12;
    }
    if (rankk == 3) {
        seiti = 9;
        keikenti = 6;
        jou = 18;
    }
    if (rankk == 4) {
        seiti = 12;
        keikenti = 8;
        jou = 24;
    }
    if (rankk == 5) {
        seiti = 15;
        keikenti = 10;
        jou = 30;
    }

    }

function kagohuyo() {
    text += "職員" + name + "の加護欄に「"+kagohuti+"」を追加\n";
    tt12 += ","+kagohuti;
    for (i = 0; i < 5; i++) {
        kensakuk = namera[i].indexOf(name);
        if (kensakuk != -1) {
            nana2 = i + 1;
            nana = "se" + nana2 + "8";
            document.hanteisuru[nana].value += tt12;
        }
    }
}

function seihihan() {
    seikou = seiti * sase[sagyona][sagyose3];
    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }
    kensaku213 = kekka[12].indexOf('213');
    if (kensaku213 != -1) {
        if (kekka[2] != 213 && seihi == 1) {
            sibou = 0;
            text += "作業自動失敗\n加護欄から「213」を消去\n";
            seihi = 0;
        }
    }

}

function g001() {
    gene = "001 あまたの善とひとつ分の愛";
    sulo = 0;
    sase = [[1, 1, 1, 1, 1], [0.5, 0.5, 0.5, 1, 1], [0.5, 0.5, 0, 0, 0], [1, 1, 1.5, 1.5, 2]];
    rankk = 1;
    rank();
    seihihan();
    if (seihi == 1) {
        daideme1 = 2;
        daideme2 = 6;
        daisu();
        text = "SP" + daideme4 + "回復\n";
    }

    if (peti <= 0) {
        text = "職員の自制-5\n";
    }
}

function g002() {
    gene = "002 狂人の抜け殻";
    sulo = 23;
    sase = [[0, 0, 0, 0.5, 0.5], [1, 1, 1.5, 1.5, 1.5], [2, 2, 2, 2, 2], [1, 1, 1, 1, 1]];


    rankk = 3;
    rank();
   

    seihihan();

    if (seihi == 0) {
        text += "カウンター減少\n";
        if (nefi == 1) {
            text += "狂人の抜け殻は脱走した。\n";
        }
        nefi -= 1;
    }
    if (nefi == 0) {
        text += "カウンター0→2\n";
        nefi = 2;
    }

}

function g003() {
    gene = "003 ぽにーてーるのおまんじゅう";
    sulo = 45;
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
    rankk = 1;
    rank();

   

    seihihan();

    if (seihi == 0) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "部門内のランダムな幻想体のカウンターが下がった\n003のカウンター0→3\n";
        nefi = 3;
    }

}

function g005() {
    gene = "005 太陽の後悔";
    sulo = 48;
    sase = [[1, 1, 0.5, 0.5, 0], [0.5, 0.5, 1, 1, 1], [1, 1, 1, 1, 1], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();

   

    seihihan();

    if (sagyona == 2) {
        text += "保護作業に置き換わっているため作業成否、経験値、PE-BOX、ダメージ無効\n作業職員1名を30分保護\n全耐性強いになる（元から強い以上の耐性はそのまま）\n保護職員は鎮圧時2回攻撃可能\n保護職員が死亡・パニックになると太陽の後悔は脱走する\n";
    } else {
        if (seihi == 0) {
            text += "カウンターが減少した\n";
            nefi -= 1;

            if (nefi == 0) {
                text += "太陽の後悔は脱走した\nカウンター0→3\n";
                nefi = 3;
            }
        }
    }


}

function g007() {
    gene = "007 合わせ鏡";
    peti = 0;
    eee = document.hanteisuru['se18'].value + document.hanteisuru['se28'].value + document.hanteisuru['se38'].value + document.hanteisuru['se48'].value + document.hanteisuru['se58'].value;
    kensaku = kekka[12].indexOf('007');
    kensaku2 = kekka[12].indexOf('0071');


    if (sagyona == 4) {

        kensaku4 = eee.indexOf('007');
        if (kensaku4 == -1) {
            text += "職員" + name + "の加護欄に「007」を記入\n";
            tt12 += ",007";
            for (i = 0; i < 5; i++) {
                kensaku3 = namera[i].indexOf(name);
                if (kensaku3 != -1) {
                    nana2 = i + 1;
                    nana = "se" + nana2 + "8";
                    document.hanteisuru[nana].value += ",007";
                }
            }
        } else {
            if (kensaku == -1) {
                if (kensaku2 == -1) {
                    kensaku4 = eee.indexOf('0071');
                    kensaku5 = eee.indexOf('007');
                    if (kensaku5 != -1 && kensaku4 != -1) {
                        if (kensaku == -1 && kensaku2 == -1) {
                            text = "加護0071職員は死亡した\n";

                        }
                    } else {
                        text += "職員" + name + "のステータスが加護007職員と同じになるまでバフデバフが付与された\n職員" + name + "の加護欄に「0071」を記入\n";
                        tt12 += ",0071";
                        for (i = 0; i < 5; i++) {
                            kensaku3 = namera[i].indexOf(name);
                            if (kensaku3 != -1) {
                                nana2 = i + 1;
                                nana = "se" + nana2 + "8";
                                document.hanteisuru[nana].value += ",0071";
                            }
                        }
                    }

                } else {
                    text += "何も起きなかった\n";
                }

            } else {
                text += "何も起きなかった\n";
            }

        }


    } else {
        text = "ツール型の作業は「使用」か「返却」です\n";

    }

}

function g012() {
    gene = "012 私のティザー";
    sulo = 49;
    sase = [[1.5, 1.5, 2, 2, 2], [0.5, 0.5, 1, 1, 1], [0, 0, 0, 0, 0], [2, 2, 1.5, 1.5, 1.5]];
    rankk = 5;
    rank();

   

    seihihan();
    if (kekka[11] <= 2 && seihi == 0) {
        daideme1 = 3;
        daideme2 = 6;
        daisu();

        text += "▼職員" + name + "のHPSPが" + daideme4 + "回復した\n";
    }
    if (seihi == 1) {
        text += "カウンターが減少した\n";
        nefi -= 1;

        if (nefi == 0) {
            text += "私のティザーは脱走した\nカウンター0→4\n";
            nefi = 4;
        }
    }
    if (kekka[7] >= 3) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            sibou = 0;
            text += "カウンターが全回復した\n";
            nefi = 4;
        }
    }
    if (seihi == 0) {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 1) {
            text += "『とっても弱い子。そこが好きよ？』\n";
        }
        if (ransu == 2) {
            text += "『ふふふ、私の好みはどれでしょう？』\n";
        }
    }
    if (seihi == 1) {
        text += "『すごいわ！好み通りよ！』\n";
    }
    if (sibou == 0) {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 1) {
            text += "『貴方のせいよ。貴方が構ってくれないから。』\n";
        }
        if (ransu == 2) {
            text += "『私の方が愛されるべきよ。』\n";
        }
    }

}

function g013() {
    gene = "013 蒼穹に綻ぶ日輪草";
    sulo = 40;
    sase = [[0.5, 0.5, 0, 0, 0], [1.5, 1.5, 1.5, 1.5, 1.5], [0.5, 0.5, 0.5, 0, 0], [1.5, 1.5, 1.5, 2, 2]];
    rankk = 4;
    rank();

   

    kensaku = kekka[12].indexOf('013');

    seihihan();

    if (seihi == 1) {
        text += "職員" + name + "のHPが全回復した\n自制+10、加護欄に「013」追加、死亡時リセット\n";
        tt12 += ",013";
        for (i = 0; i < 5; i++) {
            kensaku3 = namera[i].indexOf(name);
            if (kensaku3 != -1) {
                nana2 = i + 1;
                nana = "se" + nana2 + "8";
                document.hanteisuru[nana].value += ",013";
            }
        }
    }
    if (kurike == 1) {
        text += "部門内のランダムな幻想体のカウンター1回復\n";
    }
    if (fanke == 1) {
        text += "部門内のランダムな幻想体のカウンター1減少\n";
    }

    if (kensaku != -1 && seihi == 1) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            text += "職員" + name + "は花に囲まれている\n";
            sibou = 0;
        }
    }

}

function g018() {
    gene = "018 鬱々たる胞子";
    sulo = 1;
    sase = [[1, 1, 1, 1.5, 1.5], [0.5, 0.5, 0, 0, 0], [1, 1, 0.5, 0.5, 0.5], [1.5, 1.5, 2, 2, 2]];


    rankk = 1;
    rank();
   

    seihihan();

    if (seihi == 1) {
        text += "▼職員" + name + "の頭に青白いキノコが生えた\n5分毎にSP1d6回復\n20分後に消失\n";
    }

    if (kekka[11] >= 3) {
        if (nefi <= 1) {
            text += "カウンター減少\n部門内全域に紫色のキノコが生える\n5分毎に部門内の職員のSPが1d6減少\n再度鬱々たる胞子に作業するまで続く\n";
            nefi = 2;
        } else {
            text += "カウンター減少\n";
            nefi -= 1;
        }

    }
}

function g020() {
    gene = "020 キャットＴＶ";
    peti = 0;

    if (sagyona == 4) {
        ransu = Math.floor(Math.random() * 6 + 1);
        daideme1 = 3;
        daideme2 = 6;
        daisu();
        if (ransu == 5 || ransu == 6) {
            text += "5,6\n▼職員" + name + "のSP最大値が" + daideme4 + "上昇した。\n慎重も上昇する。\n";

        }
        if (ransu == 4) {
            text += "4\n何も起こらなかった\n";
        }
        if (ransu == 3 || ransu == 2) {
            if (kekka[9] <= 3) {
                pani = 1;
                text += "3,2\n▼職員" + name + "のSP最大値が" + daideme4 + "上昇した。\n慎重も上昇する。\n";
                text += "▼職員" + name + "はパニックに陥った\n";
            } else {
                text += "3,2\n何も起こらなかった\n";
            }
        }
        if (ransu == 1) {
            text += "1\n部門内にモスキート音が鳴り響いた。\n部門内全職員の自制が1になった\n再度キャットTVで5以上の数値を出すと収まる\n";
        }

    } else {
        text = "ツール型の作業は「使用」か「返却」です\n";

    }



}

function g021() {
    gene = "021 旭";
    sulo = 24;
    sase = [[1.5, 1.5, 1, 1.5, 1.5], [0, 2, 2, 2, 2], [2, 2, 2, 0.5, 2], [1.5, 1, 1.5, 1.5, 1.5]];


    rankk = 4;
    rank();
   
    seihihan();

    if (seihi == 0) {
        text += "カウンター減少\n";
        if (nefi == 1) {
            text += "旭は脱走した。\n";
        }
        nefi -= 1;
    }
    if (nefi == 0) {
        text += "カウンター0→3\n";
        nefi = 3;
    }
}

function g022() {
    gene = "022 灯の保護";
    sulo = 50;
    sase = [[1.5, 1.5, 1, 1, 1], [1, 1, 1, 1, 0.5], [0.5, 0, 0, 0, 0], [1, 2, 2, 2, 2]];
    rankk = 2;
    rank();

   

    seihihan();

    if (sagyona == 2) {
        text += "この職員の加護欄に「022」を追加\n加護職員は本能に+5の補正を受け、作業を行う度にHPが5～10回復\n加護職員がダメージを受けるとカウンター減少\n"

        tt12 += ",022";
        for (i = 0; i < 5; i++) {
            kensaku3 = namera[i].indexOf(name);
            if (kensaku3 != -1) {
                nana2 = i + 1;
                nana = "se" + nana2 + "8";
                document.hanteisuru[nana].value += ",022";
            }
        }
    }

    if (nefi == 0) {
        text += "灯の保護は脱走した\nカウンター0→2\n";
        nefi = 2;
    }

}

function g023() {
    gene = "023 とっておきのハーブティー";
    sulo = 28;
    sase = [[0.5, 0.5, 0.5, 0.5, 0.5], [1, 1, 1.5, 1.5, 1.5], [1, 1, 0.5, 0.5, 0], [2, 2, 2, 2, 2]];

    rankk = 3;
    rank();
   
    seihihan();

    if (seihi == 1) {
        daideme1 = 2;
        daideme2 = 6;
        daisu();
        text += "▼職員" + name + "のHPが" + daideme4 + "回復した\n";
        if (kurike == 1) {
            text = "▼職員" + name + "のHPが全回復した\n";
        }
    } else {
        pani = 1;
        text += "職員" + name + "は殺人性パニックに陥った\n";
    }

    if (sagyona == 3) {
        sibou = 0;
        daideme1 = 3;
        daideme2 = 6;
        daisu();
        text += "この次に入室した職員はSPが" + daideme4 + "減少する\n";
    }

}

function g031() {
    gene = "031 溶け出す夜";
    sulo = 2;
    sase = [[1, 1, 1, 1.5, 1.5], [0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 1, 1], [1.5, 1.5, 1.5, 2, 2]];
    
    rankk = 2;

    rank();
    seihihan();

    kensaku = kekka[12].indexOf('031');

    if (kekka[10] == 1) {
        sibou = 0;
    }

    if (kekka[10] >= 2 && sagyona == 1) {
        text = "中の人物が消失する。\nこれ以降この部門の職員は加護の欄に「031」と記入して作業する\n";
        if (kensaku == -1) {
            tt12 += ",031";
            document.hanteisuru['se18'].value += ",031";
            document.hanteisuru['se28'].value += ",031";
            document.hanteisuru['se38'].value += ",031";
            document.hanteisuru['se48'].value += ",031";
            document.hanteisuru['se58'].value += ",031";
        }

    }

    if (kensaku != -1 && sagyona == 1) {
        sibou = 0;
        text = "これ以降この部門の職員は加護の欄から031を消去する\n";
    }
}

function g032() {
    gene = "032 八重の檻";
    sulo = 65;
    sase = [[0, 0, 0, 0, 0], [2, 1.5, 1.5, 1.5, 0], [0, 0, 0, 0, 0], [2, 2, 0, 0, 0]];
    rankk = 5;
    rank();
    kensaku = kekka[12].indexOf('0321');

   

    seihihan();
    kensaku2 = kekka[12].indexOf('032');
    if (kensaku == -1) {
        text += "職員" + name + "の加護欄に「0321」を追加\n\この職員の他に「0321」を持っている職員がいた場合はその職員の加護欄から0321を消す\n";
        tt12 += ",0321";
        for (i = 0; i < 5; i++) {
            kensaku3 = namera[i].indexOf(name);
            if (kensaku3 != -1) {
                nana2 = i + 1;
                nana = "se" + nana2 + "8";
                document.hanteisuru[nana].value += ",0321";
            }
        }
    } else {

        text += "カウンターが減少した\n";
        nefi -= 1;

        if (kensaku2 == -1) {
            sibou = 0;
        }
    }

    if (sagyona != 3 && sagyona != 4) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (sagyona == 3) {
        text += "カウンターが1増加した\n";
        nefi += 1;
        text += "マーキング付与\n職員" + name + "の加護欄に「032」を追加\n";
        if (kensaku2 == -1) {
            tt12 += ",032";
            for (i = 0; i < 5; i++) {
                kensaku3 = namera[i].indexOf(name);
                if (kensaku3 != -1) {
                    nana2 = i + 1;
                    nana = "se" + nana2 + "8";
                    document.hanteisuru[nana].value += ",032";
                }
            }
        }
    }

    if (nefi <= 0) {
        text += "八重の檻は脱走した\nカウンター0→5\n";
        nefi = 5;
    }
    if (kensaku != -1 && kensaku2 != -1) {
        text += "カウンターが1増加した\n";
        nefi += 1;
    }
    
}

function g033() {
    gene = "033 『トルネンブラ』";
    sulo = 76;
    sase = [[0.5, 1.5, 1, 1, 2], [0, 1, 1, 0.5, 0.5], [0, 0, 0, 0, 0], [0.5, 1, 1, 0.5, 0.5]];
    rankk = 5;
    rank();
    seihihan();

    if (irai == 1) {
        text += "奏者のHPSPの50％を失う\n部門内の任意の職員の任意のステータスを+30\nカウンター減少\n3回目の演奏は確定で0になる\n";
        nefi -= 1;
    }
    if (sagyona == 2) {
        text += "愛着作業は演奏作業に置き換わっています\n";
    }
    if (kurike == 1) {
        text += "カウンターが1増加した\nクリファンアップは含まない\n";
        nefi += 1;
    }
    ransu = Math.floor(Math.random() * 6 + 1);
    if (seihi == 0 && ransu == 1) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }

    if (nefi <= 0) {
        text += "『トルネンブラ』は脱走した\nカウンター0→3\n";
        nefi = 3;
    }
}

function g042() {
    gene = "042 ヘベルチカ";
    sulo = 17;
    sase = [[2, 2, 2, 2, 2], [0, 0, 0, 0, 0], [1.5, 1.5, 1.5, 1.5, 1], [2, 1.5, 1.5, 1, 1]];


    rankk = 3;
    rank();
   
    kensaku = kekka[12].indexOf('042');
    kensaku2 = kekka[12].indexOf('0421');


    seihihan();
    if (kensaku == -1) {
        if (kensaku2 != -1) {
            sibou = 0;
            text = "▼職員" + name + "はIP-T-05-042-1となり、脱走した。\n";
        } else {
            text = "職員" + name + "の加護欄に「042」を記入\n職員" + name + "以外の部門内職員全員の加護欄に「0421」を記入\n042と0421は蘇生後も残る、翌日には消える\n";

            tt12 += ",042";
            for (i = 0; i < 5; i++) {
                kensaku3 = namera[i].indexOf(name);
                if (kensaku3 != -1) {
                    nana2 = i + 1;
                    nana = "se" + nana2 + "8";
                    document.hanteisuru[nana].value += ",042";
                } else {
                    nana2 = i + 1;
                    nana = "se" + nana2 + "8";
                    document.hanteisuru[nana].value += ",0421";
                }
            }
        }
    } else {

    }

    if (nefi == 0) {
        if (sagyona == 1) {
            pani = 1;
            text += "\n▼職員" + name + "はパニックに陥った\n";

            text += "カウンター0→1\n";
            nefi = 1;
        }
    } else {
        if (seihi == 0) {
            text += "\nカウンター減少\n";
            nefi -= 1;

        }
    }
}

function g048() {
    gene = "048 心壊人形";
    peti = 0;

    if (sagyona == 4) {
        text += "心壊人形が職員" + name + "に同行した\n細かい挙動はエンサイクロペディア参照\n";
    } else {
        if (sagyona == 5) {
            text += "鎮圧を行っていない場合はエンサイクロペディア参照\n鎮圧を行っていた場合は充電を開始し、30分間使用不可\n";
        } else {
            text += "ツール型の作業は「使用」です\n";
        }

    }

}

function g049() {
    gene = "049 異界の扉";
    peti = 0;

    if (sagyona == 4) {
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu == 1) {
            text = "何かの箱を手に入れた\n全ステータス+10\n同じ効果のバフ、デバフは重複しない\n1日で効果が消滅する\n";
        }
        if (ransu == 2) {
            text = "何かの果実を手に入れた\n本能+10\n同じ効果のバフ、デバフは重複しない\n1日で効果が消滅する\n";
        }
        if (ransu == 3) {
            text = "小さな花を手に入れた\n洞察+10\n同じ効果のバフ、デバフは重複しない\n1日で効果が消滅する\n";
        }
        if (ransu == 4) {
            text = "綺麗な石を手に入れた\n自制+10\n同じ効果のバフ、デバフは重複しない\n1日で効果が消滅する\n";
        }
        if (ransu == 5) {
            text = "何かの羽根を手に入れた\n正義+10\n同じ効果のバフ、デバフは重複しない\n1日で効果が消滅する\n";
        }
        if (ransu == 6) {
            text = "何かの目玉を手に入れた\n全ステータス-25\n同じ効果のバフ、デバフは重複しない\n1日で効果が消滅する\n";
        }
    } else {
        text += "ツール型の作業は「使用」です\n";
    }

}

function g061() {
    gene = "061 こどもべやのすいそう";
    sulo = 55;
    sase = [[0, 1, 1.5, 1.5, 2], [0, 0.5, 1, 1.5, 1.5], [0, 0.5, 1.5, 1.5, 1.5], [0, 0.5, 1.5, 1.5, 21]];
    rankk = 5;
    rank();

   

    seihihan();

    if (sagyona == 1) {
        text += "この職員の加護欄に「061」を記入\nこの日一日獲得経験値1.5倍\n";
        kensaku = kekka[12].indexOf('061');
        if (kensaku == -1) {
            tt12 += ",061";
            for (i = 0; i < 5; i++) {
                kensaku3 = namera[i].indexOf(name);
                if (kensaku3 != -1) {
                    nana2 = i + 1;
                    nana = "se" + nana2 + "8";
                    document.hanteisuru[nana].value += ",061";
                }
            }
        }
    }

    if (seihi == 0) {
        text += "この職員の加護欄に「0611」を記入\n";
        kensaku = kekka[12].indexOf('0611');
        if (kensaku == -1) {
            tt12 += ",0611";
            for (i = 0; i < 5; i++) {
                kensaku3 = namera[i].indexOf(name);
                if (kensaku3 != -1) {
                    nana2 = i + 1;
                    nana = "se" + nana2 + "8";
                    document.hanteisuru[nana].value += ",0611";
                }
            }
        }
    }

}

function g063() {
    gene = "063 人間の貪欲さを表した何か";
    sulo = 3;
    sase = [[1, 1, 1, 1.5, 1.5], [1.5, 1.5, 1, 0.5, 0.5], [2, 2, 2, 2, 2], [0.5, 0.5, 0.5, 0, 0]];

    rankk = 1;

    rank();
    seihihan();

    kensaku = kekka[12].indexOf('063');
    kensaku2 = kekka[12].indexOf('0631');
   
    if (kensaku2 != -1) {
        sibou = 0;
    } else {

        if (seihi == 0) {

            if (kensaku != -1) {
                kagohuti = "0631";
                kagohuyo();
            } else {
                kagohuti = "063";
                kagohuyo();
            }

            if (sagyona == 0) {
                text += "HP回復\n";
            }
            if (sagyona == 1) {
                text += "SP回復\n";
            }
            if (sagyona == 2) {
                text += "HPSP回復\n";
            }
        }
    }
}

function g070() {
    gene = "070 Please kill me!";
    sulo = 56;
    sase = [[1, 1, 1, 1.5, 1.5], [0.5, 0.5, 1, 1, 1], [1.5, 1.5, 1.5, 2, 2], [0.5, 0.5, 0.5, 0.5, 0]];
    rankk = 2;
    rank();

   
    seihihan();

    if (fanke == 1) {
        text += "ファンブルによるダメージや情報開示などの影響を受けない\n";
    }
    if (sagyona == 3) {
        text += "▼職員" + name + "のHPSPが10回復\n";
    }

    if (kurike == 1 && sagyona == 2) {
        sibou = 0;
    }

}

function g072() {
    gene = "072 しゅうふくトッペ";
    sulo = 41;
    sase = [[1.5, 1.5, 1, 1, 1], [1, 1, 1, 1, 1], [2, 2, 2, 2, 1.5], [1, 1, 0.5, 0.5, 0.5]];
    rankk = 3;
    rank();

   
    seihihan();

    if (seihi == 0) {
        text += "カウンターが減少した\n";
        nefi -= 1;

    }
    if (sagyona == 3) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        psni = 1;
        text += "▼職員" + name + "は自殺性パニックに陥った\nこのパニックの鎮圧にはSP+15のダメージが必要\nカウンター0→2\n";
        nefi = 2;
    }

}

function g091() {
    gene = "091 火猿の壺";
    sulo = 29;
    sase = [[0, 0, 0, 0, 0], [0.5, 0.5, 0.5, 0, 0], [2, 2, 2, 2, 2], [1.5, 1.5, 1, 1, 1]];

    rankk = 1;
    rank();
   
    seihihan();

    if (sagyona == 0) {
        daideme1 = 1;
        daideme2 = 6;
        daisu();
        text += "▼職員" + name + "のHPが" + daideme4 + "回復した\nカウンターが下がった\n";
        nefi -= 1;
    }

    if (sagyona == 2) {
        text = "カウンターが0になった\n";
        nefi = 0;
    }

    if (nefi == 0) {
        sibou = 0;
        text += "カウンター0→3\n";
        nefi = 3;
    }
}


function g019() {
    gene = "019 離別の音";
    sulo = 20;
    sase = [[1, 1.5, 1.5, 2, 2], [0, 0, 0.5, 2, 2], [0, 1.5, 1.5, 0, 0], [0, 0.5, 1, 1, 1.5]];


    rankk = 3;
    rank();
    kensaku = kekka[12].indexOf('019');
   
    seihihan();
    if (seihi == 1) {
        text += "職員" + name + "に音が付与された。\nこの職員の加護欄に「019」を追加\n";
        if (kensaku == -1) {
            tt12 += ",019";
            for (i = 0; i < 5; i++) {
                kensaku3 = namera[i].indexOf(name);
                if (kensaku3 != -1) {
                    nana2 = i + 1;
                    nana = "se" + nana2 + "8";
                    document.hanteisuru[nana].value += ",019";
                }
            }
        }
    }

}

function g071() {
    gene = "071 反転する化粧台";
    peti = 0;
    kensaku = kekka[12].indexOf('071');
    kensaku2 = kekka[12].indexOf('0711');
    kensaku3 = kekka[12].indexOf('0712');
    kensaku4 = kekka[12].indexOf('0713');

    if (sagyona == 4) {
        text = "職員" + name + "は性転換した。\nHPSPの上限+10\n二回目以降はHPSP上昇のみ\n";

        if (kensaku4 != -1) {
            sibou = 0;
            text += "加護欄から0713を消去\n";
        } else {
            if (kensaku3 != -1) {
                text += "使用職員の加護欄に0713を記入\n";
                tt12 += ",0713";
                for (i = 0; i < 5; i++) {
                    kensaku3 = namera[i].indexOf(name);
                    if (kensaku3 != -1) {
                        nana2 = i + 1;
                        nana = "se" + nana2 + "8";
                        document.hanteisuru[nana].value += ",0713";
                    }
                }
            } else {
                if (kensaku2 != -1) {
                    text += "使用職員の加護欄に0712を記入\n";
                    tt12 += ",0712";
                    for (i = 0; i < 5; i++) {
                        kensaku3 = namera[i].indexOf(name);
                        if (kensaku3 != -1) {
                            nana2 = i + 1;
                            nana = "se" + nana2 + "8";
                            document.hanteisuru[nana].value += ",0712";
                        }
                    }
                } else {
                    if (kensaku == -1) {
                        text += "使用職員の加護欄に071を記入\n";
                        tt12 += ",071";
                        for (i = 0; i < 5; i++) {
                            kensaku3 = namera[i].indexOf(name);
                            if (kensaku3 != -1) {
                                nana2 = i + 1;
                                nana = "se" + nana2 + "8";
                                document.hanteisuru[nana].value += ",071";
                            }
                        }
                    } else {
                        text += "使用職員の加護欄に0711を記入\n";
                        tt12 += ",0711";
                        for (i = 0; i < 5; i++) {
                            kensaku3 = namera[i].indexOf(name);
                            if (kensaku3 != -1) {
                                nana2 = i + 1;
                                nana = "se" + nana2 + "8";
                                document.hanteisuru[nana].value += ",0711";
                            }
                        }
                    }

                }

            }
        }



    } else {
        text += "ツール型の作業は「使用」です\n";
    }

}

function g079() {
    gene = "079 泣きたがり";
    sulo = 66;
    sase = [[0, 0, 0, 0, 0.5], [1.5, 1.5, 1.5, 1.5, 1.5], [0.5, 0.5, 0.5, 0.5, 0.5], [1, 1, 1, 0.5, 0.5]];

    rankk = 1;
    rank();
   

    seihihan();
    if (sagyona == 0) {
        daideme1 = 3;
        daideme2 = 3;
        daisu();
        text += "HP" + daideme4 + "回復\n";
    }

    if (sagyona == 3 && seihi == 0) {
        text += "泣きたがりに噛み付かれた\n赤2ダメージ\n";
    }
}

function g099() {
    gene = "099 ワンゲーム";
    peti = 0;

    if (sagyona == 4) {
        ransu = Math.floor(Math.random() * 5 + 1);
        if (ransu == 1) {
            text += "シングル\n何も起こらなかった\n";
        }
        if (ransu == 2) {
            text += "ダブル\n▼職員" + name + "のSPが5回復した。\n";
        }
        if (ransu == 3) {
            text += "トリプル\n▼職員" + name + "のHPが5回復した。\n";
        }
        if (ransu == 4) {
            text += "ブル\n部門内全員のHPSPが10回復した。\n";
        }
        if (ransu == 5) {
            ransu = Math.floor(Math.random() * 5 + 1);
            text += "ダーツはダーツボードから離れた位置に飛んで行った\n";
            if (ransu == 3) {
                sibou = 0;
            }
        }

    } else {
        text = "ツール型の作業は「使用」か「返却」です\n";

    }


}

function g102() {
    gene = "102 幻想四次元列車";
    peti = 0;

    if (sagyona == 4) {
        text += "部門内の職員のHPSPが（前回の暴走発生からの作業数）×10回復\nツールの作業数は含まれない\n";
    } else {
        text += "ツール型の作業は「使用」です\n";
    }

}

function g106() {
    gene = "106 肉喰む灰狼";
    sulo = 25;
    sase = [[0, 0, 0, 0, 0], [2, 2, 1.5, 1.5, 1.5], [1, 1, 1, 1.5, 1.5], [1, 1, 1.5, 1.5, 1.5]];


    rankk = 4;
    rank();
   

    seihihan();

    if (sagyona == 1 && seihi == 0) {
        sibou = 0;
    } else {

        if (seihi == 0 || sagyona == 0) {
            text += "職員" + name + "に腐肉の証が付与された。正義+20\nHP10ダメージ\n";
            kagohuti = 106;
            kagohuyo();
        }
    }
}

function g108() {
    gene = "108 月白戦闘鬼姫";
    sulo = 67;
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
    rankk = 5;
    rank();
    pale = 1;
   

    seihihan();
    if (seihi == 0) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "月白戦闘鬼姫は脱走した\nカウンター0→2\n";
        nefi = 2;
    }

}

function g110() {
    gene = "110 ［削除済］の悪夢";
    sulo = 46;
    sase = [[2, 2, 1, 0.5, 0.5], [0.5, 0.5, 0.5, 0, 0], [0, 0, 0, 0, 0], [1, 1, 0.5, 0.5, 0.5]];
    rankk = 5;
    rank();

   

    kensaku = kekka[12].indexOf('110');

    seihihan();

    if (seihi == 1) {
        if (kekka[7] <= 3) {
            pani = 1;
            text += "▼職員" + name + "はパニックに陥った\n";
        } else {
            ransu = Math.floor(Math.random() * 5 + 1);
            if (ransu == 1) {
                text += "悲惨な殺人現場を目撃\n職員" + name + "のMPが40％減少した\n";

            }
        }
    }

    if (kensaku != -1 && sagyona == 3) {
        sibou = 0;
        text += "カウンターが減少した\n部門内に大きな悲鳴が響き、同時に部門全体がIP-T-04-110の死体と血で染まった\n部門内の職員は1d4を振る\n1→MP25％減少　2→MP50％減少\n3→MP75％減少　4→MP100％減少\nカウンター0→1\n";
    }

}

function g118() {
    gene = "118 親愛なる貴方へ";
    sulo = 15;
    sase = [[0, 0, 0.5, 0.5, 0.5], [0.5, 0.5, 1, 1, 1], [0, 0, 0, 0, 0], [2, 2, 2, 2, 2]];


    rankk = 2;
    rank();
   
    kensaku = kekka[12].indexOf('118');
    kensaku2 = kekka[12].indexOf('1181');

    seihihan();

    if (seihi == 1) {
        text += "職員" + name + "のHPとSPが10回復した。\n";
    } else {
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu <= 4) {
            sibou = 0;
        }
    }
    if (sagyona == 2) {

        if (kensaku2 != -1) {
            sibou = 0;
            text += "加護欄から1181を消去\n";
        } else {
            if (kensaku == -1) {
                text += "作業職員の加護欄に118を記入\n";
                tt12 += ",118";
                for (i = 0; i < 5; i++) {
                    kensaku3 = namera[i].indexOf(name);
                    if (kensaku3 != -1) {
                        nana2 = i + 1;
                        nana = "se" + nana2 + "8";
                        document.hanteisuru[nana].value += ",118";
                    }
                }
            } else {
                text += "作業職員の加護欄に1181を記入\n";
                tt12 += ",1181";
                for (i = 0; i < 5; i++) {
                    kensaku3 = namera[i].indexOf(name);
                    if (kensaku3 != -1) {
                        nana2 = i + 1;
                        nana = "se" + nana2 + "8";
                        document.hanteisuru[nana].value += ",1181";
                    }
                }
            }

        }

    }
}

function g124() {
    gene = "124　花乙女";
    sulo = 68;
    sase = [[1.5, 1.5, 1, 1, 0.5], [2, 2, 2, 1.5, 1.5], [0.5, 0.5, 0.5, 0.5, 0.5], [1, 1, 1, 1, 0.5]];

    rankk = 5;
    rank();
   

    seihihan();
    if (sagyona == 2) {
        daideme1 = 1;
        daideme2 = 6;
        daisu();
        text = "職員" + name + "のHP" + daideme4 + "+1回復\n";
    }

    ransu = Math.floor(Math.random() * 3 + 1);
    if (sagyona == 2 && ransu == 3) {
        sibou = 0;
        text += "職員" + name + "のステータスが初期化。これは次の死亡まで続く。\n";
        text += "他の同部門職員に恐怖ダメージ5。\n";
    }
}

function g125() {
    gene = "125 灼けつく金星";
    sulo = 4;
    sase = [[1, 1, 1, 0.5, 0.5], [2, 2, 2, 2, 2], [0.5, 0.5, 0, 0, 0], [0.5, 0.5, 1, 1.5, 1.5]];

    rankk = 2;

    rank();
    seihihan();

    if (seihi == 0 || kekka[11] >= 2) {
        text += "カウンターが減少した。\n";
        nefi -= 1;
    }

    if (kekka[9] <= 3) {
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu == 6) {
            text += "灼けつく金星は脱走した。\n";
        }
    }

    if (nefi <= 0) {
        text += "なんか起きるテキスト\nカウンター0→2\n";
        nefi = 2;
    }
}

function g126() {
    gene = "126 蒼天の霹靂";
    sulo = 73;
    sase = [[0.5, 0.5, 1, 1, 1.5], [1, 0.5, 0.5, 0, 0], [2, 2, 2, 1.5, 1.5], [1.5, 1, 1, 1, 0.5]];
    rankk = 3;
    rank();

   

    seihihan();

    if (seihi == 0) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (seihi == 1) {
        text += "カウンターが1増加した\n";
        nefi += 1;
    }

    if (nefi <= 0) {
        text += "部門内に雨が降った\n部門内での作業及び鎮圧の出目-15\n１時間で消える\nカウンター0→2\n";
        nefi = 2;
    }

}

function g135() {
    gene = "135 錆吐き";
    sulo = 74;
    sase = [[0.5, 0.5, 0.5, 1, 1], [0.5, 0.5, 0.5, 1, 1], [0, 0, 0.5, 0.5, 0.5], [2, 2, 1.5, 1.5, 1]];

    rankk = 5;
    rank();
   
    kensaku = kekka[12].indexOf('135');
    kensaku2 = kekka[12].indexOf('1351');

    //ここからはノータッチ

    seihihan();
    //ここまでノータッチ

    //錆付与の処理です//

    if (seihi == 1) {
        if (kensaku == -1) {
            ransu = Math.floor(Math.random() * 2 + 1);
            if (ransu == 2) {
                text += "職員" + name + "に錆の涙が付着した。あらゆる被ダメージが-10。\nこの職員の加護欄に135を記入\n";
                tt12 += ",135";
                for (i = 0; i < 5; i++) {
                    kensaku3 = namera[i].indexOf(name);
                    if (kensaku3 != -1) {
                        nana2 = i + 1;
                        nana = "se" + nana2 + "8";
                        document.hanteisuru[nana].value += ",135";
                    }
                }
            }
        }
    }

    //ここまで//

    //錆状態での挙動です//

    if (sagyona !== 1 && sagyona != 4) {

        if (kensaku2 != -1) {
            sibou = 0;
            text += "職員<name>の体が朽ち果て、錆尽に変化した。\n";

        } else {
            if (kensaku != -1) {
                text += "職員<name>の体が錆びついていく。\nこの職員の加護欄に1351を記入\n";
                tt12 += ",1351";
                for (i = 0; i < 5; i++) {
                    kensaku3 = namera[i].indexOf(name);
                    if (kensaku3 != -1) {
                        nana2 = i + 1;
                        nana = "se" + nana2 + "8";
                        document.hanteisuru[nana].value += ",1351";
                    }
                }
            }
        }
    }

    //ここまで//

    //洞察作業を行って消去した時の動作です//
    if (sagyona == 1) {
        if (kensaku != -1) {

            text += "135系の加護を手動で消去してください\n";
        } else {
            if (kensaku2 != -1)
                text += "135系の加護を手動で消去してください\n";
        }
    }
    //ここまで//            

    //抑圧作業のカウンターの処理です//

    if (sagyona == 3) {
        if (kurike == 1) {
            text += "カウンターが即座に0になった\n";
            nefi = 0;
        } else {
            text += "カウンターが減少した\n";
            nefi -= 1;
        }
    }


    if (nefi == 0) {
        text += "▼錆が付与されている部門内全ての職員が錆尽となった。\nカウンター0→2\n";
        nefi = 2;
    }

    //ここまで//


}

function g137() {
    gene = "137 漆黒の戦術人形";
    sulo = 69;
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
    rankk = 4;
    rank();

   

    seihihan();
    if (seihi == 0) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "漆黒の戦術人形は脱走した\nカウンター0→3\n";
        nefi = 3;
    }


}

function g142() {
    gene = "142 待ち人帰らず";
    sulo = 30;
    sase = [[1, 1, 1, 1, 1], [0, 0, 0.5, 0.5, 0.5], [0.5, 0.5, 1, 1, 1], [2, 2, 2, 2, 2]];

    rankk = 4;
    rank();
   
    seihihan();

    if (sagyona == 1 && seihi == 1) {
        sibou = 0;
        text = "収容室内の扉が全て開いた\n";
    }

    if (sagyona == 0 && kurike == 1) {
        daideme1 = 1;
        daideme2 = 6;
        daisu();
        tet1 = daideme4;
        daideme1 = 1;
        daideme2 = 6;
        daisu();
        text += "飴玉を貰った\n▼職員" + name + "のHPが" + tet1 + "回復し、SPが" + daideme4 + "減少した\n";
    }

}

function g192() {
    gene = "192 からの揺りかご";
    sulo = 31;
    sase = [[0.5, 0.5, 0.5, 1, 1], [0, 0, 0.5, 0.5, 1], [0, 0.5, 0.5, 0.5, 1], [1, 1.5, 1.5, 2, 2]];

    rankk = 2;
    rank();
   
    seihihan();
    daideme1 = 1;
    daideme2 = 4;
    daisu();
    text = "「最高に幸福な晩餐を！」のEGO、ギフトいずれかを装備している場合HPSP" + daideme4 + "回復\n";
    if (seihi == 0) {
        if (sagyona == 0 || sagyona == 2) {
            sibou = 0;
        }
    }

}

function g194() {
    gene = "194 歌い去る夢";
    sulo = 47;
    sase = [[1.5, 1, 1, 0, 0], [2, 2, 2, 2, 2], [0, 0, 1, 1, 1.5], [1.5, 1.5, 1.5, 1.5, 1.5]];
    rankk = 5;
    rank();

   

    seihihan();

    if (kekka[8] >= 4 || kekka[10] <= 2) {
        if (kekka[10] >= 4) {
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 3) {
                sibou = 0;
                text += "▼職員" + name + "は電動ノコギリに自ら飛び込んだ\n30分間、5分おきに部門内の職員全員に5白ダメージ\nこの幻想体による死者が3名になるとカウンター0になり脱走する\n";
            }
        } else {
            sibou = 0;
            text += "▼職員" + name + "は電動ノコギリに自ら飛び込んだ\n30分間、5分おきに部門内の職員全員に5白ダメージ\nこの幻想体による死者が3名になるとカウンター0になり脱走する\n";
        }

    }

}

function g199() {
    gene = "199 ギブミーレッドエンディング";
    sulo = 57;
    sase = [[1, 1, 1, 1, 1], [0.5, 0.5, 0.5, 0, 0], [1.5, 1.5, 2, 2, 2], [0.5, 0.5, 0, 0, 0]];
    rankk = 4;
    rank();

   

    seihihan();

    if (seihi == 0) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }

    if (sagyona == 3 && seihi == 1) {
        text += "「出演者」が付与された\nこの職員の加護欄に「199」を記入\nHP+20SP-10\nパニックになると殺人性になる\nパニック中SP+20、赤近距離\n";
        kensaku = kekka[12].indexOf('199');
        if (kensaku == -1) {
            tt12 += ",199";
            for (i = 0; i < 5; i++) {
                kensaku3 = namera[i].indexOf(name);
                if (kensaku3 != -1) {
                    nana2 = i + 1;
                    nana = "se" + nana2 + "8";
                    document.hanteisuru[nana].value += ",199";
                }
            }
        }
    }
    if (nefi == 0) {
        pani = 1;
        text += "▼職員" + name + "は殺人性パニックに陥った\nパニック中SP+20、赤近距離\nカウンター0→3\n";
        nefi = 3;
    }

}

function g201() {
    gene = "201 柔らかい妖精";
    sulo = 5;
    sase = [[1, 1, 1, 1.5, 1.5], [1, 1, 0.5, 0.5, 0.5], [0.5, 0.5, 0, 0, 0], [2, 2, 2, 1.5, 1.5]];


    rankk = 2;

    rank();
    seihihan();

    if (sagyona == 2) {
        ransu = Math.floor(Math.random() * 4 + 1);
        if (ransu == 1) {
            karit = "本能";
        } else {
            if (ransu == 2) {
                karit = "洞察";
            } else {
                if (ransu == 3) {
                    karit = "愛着";
                } else {
                    if (ransu == 4) {
                        karit = "抑圧";
                    } else {

                    }
                }
            }
        }

        ransu = Math.floor(Math.random() * 5 + 1);

        text += karit + "の作業に" + ransu + "のバフ\n柔らかい妖精脱走までの猶予リセット\n";
    }
    if (sagyona == 3) {
        text = "柔らかい妖精は脱走した。\n";
        text += "カウンター0→1\n";
    }

}

function g209() {
    gene = "209 愛詰めの箱";
    sulo = 51;
    sase = [[1.5, 1, 1, 0.5, 0.5], [0, 0.5, 1, 1, 1], [0.5, 0.5, 1, 1, 1.5], [1, 1, 1.5, 1.5, 1.5]];
    rankk = 3;
    rank();

   
    seihihan();
    if (seihi == 0) {
        text += "▼職員" + name + "のHPが10回復した\nカウンターが減少した\n";
        nefi -= 1;
    }
    if (nefi == 0) {
        text += "愛詰めの箱は誤作動を起こした\n15分毎に部門内の全ての幻想体のカウンターを1ずつ下げ、部門内の職員に10赤ダメージ\n全ての作業が「粉砕作業」に置き換わる\n粉砕作業では判定ツールを使用しない\n粉砕作業では部門内の職員からランダムに1名選ばれ死亡する。カウンターは全回復する\n";

    }

}

function g213() {
    gene = "213 囚われの氷王女";
    sulo = 77;
    sase = [[0, 0, 1, 1, 1], [0.5, 0.5, 1.5, 1.5, 1.5], [0, 0, 1, 1, 1], [1, 1, 1, 0.5, 0.5]];
    rankk = 5;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('2131');
    kensaku2 = kekka[12].indexOf('2132');
    kensaku3 = kekka[12].indexOf('2133');

    kari = kekka[7];
    daideme1 = kari;
    daideme2 = 3;
    daisu();
    text += daideme4 + "黒ダメージ\n";


    if (kekka[8] <= 2 || kekka[11] <= 2) {
        sibou = 0;
    }
    if (kekka[9] <= 2 || kekka[10] <= 2) {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 1) {
            text += "マーキング付与\n";
            kagohuti = 213;
            kagohuyo();
        }
    }

    if (kensaku2 != -1) {
        text += "職員" + name + "は凍傷状態になった\n正義ランク1低下\n４時間で消える\n";
        kagohuti = 2133;
        kagohuyo();
    } else {
        if (kensaku != -1) {
            kagohuti = 2132;
            kagohuyo();
        } else {
            kagohuti = 2131;
            kagohuyo();
        }
    }

    if (kensaku3 != -1) {
        sibou = 0;
    }

    if (sibou == 0) {
        text += "カウンターが減少した\n";
        nefi -= 1;

    }

    ransu = Math.floor(Math.random() * 3 + 1);
    if (seihi == 0 && ransu == 1) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }

    if (nefi <= 0) {
        text += "囚われの氷王女は脱走した\nカウンター0→3\n";
        nefi = 3;
    }

}

function g214() {
    gene = "214 ちょっとおかしなショコラティエ";
    sulo = 32;
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];

    rankk = 3;
    rank();
   

    seihihan();
    if (seihi == 1) {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 1) {
            text += "ミルクチョコを貰った\n任意のタイミングでHP15開封、一日限り\n他の職員にも渡せる\n"
        } else {
            text += "ホワイトチョコを貰った\n任意のタイミングでSP15開封、一日限り\n他の職員にも渡せる\n"
        }
    } else {
        ransu = Math.floor(Math.random() * 5 + 1);
        if (ransu == 1) {
            text += "カウンターが減少した\n"
            nefi -= 1;
            if (nefi == 0) {
                text += "ちょっとおかしなショコラティエは脱走した\nカウンター0→2\n";
                nefi = 2;
            }
        }
    }

    if (kekka[8] >= 5 || kekka[10] <= 2) {
        sibou = 0;
    }

}

function g235() {
    gene = "235 もこもこあひる";
    sulo = 58;
    sase = [[1, 1, 1, 0.5, 0.5], [1.5, 1.5, 1, 1, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5], [2, 2, 1.5, 1.5, 1.5]];
    rankk = 4;
    rank();
    seihihan();

    if (seihi == 0) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }

    if (nefi == 0) {
        text += "もこもこあひるは脱走した\nカウンター0→2\n";
        nefi = 2;
    }

}

function g243() {
    gene = "243 2人の思い出の場所";
    sulo = 59;
    sase = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
    rankk = 1;
    rank();

   

    seihihan();

    if (sagyona == 2 && seihi == 1) {
        text += "「思い出の欠片」追従\nこの職員の加護欄に「243」を記入\n任意のステータス+5\n";
        kensaku = kekka[12].indexOf('243');
        if (kensaku == -1) {
            tt12 += ",243";
            for (i = 0; i < 5; i++) {
                kensaku3 = namera[i].indexOf(name);
                if (kensaku3 != -1) {
                    nana2 = i + 1;
                    nana = "se" + nana2 + "8";
                    document.hanteisuru[nana].value += ",243";
                }
            }
        }
    }

}

function g291() {
    gene = "291 復讐の猫";
    sulo = 75;
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1.5], [0.5, 0.5, 1, 1, 1], [2, 2, 1.5, 1.5, 1.5]];
    rankk = 2;
    rank();

   

    seihihan();

    if (sagyona == 3) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (sagyona == 2) {
        daideme1 = 1;
        daideme2 = 6;
        daisu();
        text += "職員" + name + "のHP" + daideme4 + "回復\n";
    }

    ransu = Math.floor(Math.random() * 6 + 1);
    if (ransu == 1) {
        sibou = 0;
    }

}

function g310() {
    gene = "310 氷飴";
    peti = 0;

    if (sagyona == 4) {
        ransu = Math.floor(Math.random() * 100 + 1);
        if (ransu <= 10) {
            pani = 1;
            text += "▼職員" + name + "は徘徊性パニックに陥った\n";

        } else {
            text = "▼職員" + name + "のSPが5回復した。\n";
        }


    } else {
        text = "ツール型の作業は「使用」か「返却」です\n";

    }

}

function g317() {
    gene = "317 JOSHUA";
    sulo = 6;
    sase = [[1, 1, 1, 1, 1], [0, 0, 0.5, 1, 2], [1, 1, 1, 0.5, 1], [0.5, 1, 1, 1, 1]];
    
    rankk = 1;
    rank();
    seihihan();

    ransu = Math.floor(Math.random() * 4 + 1);
    if (ransu == 1) {
        text += "カウンター減少\n0になった場合職員に「印」が付く\n印職員は3分毎にSP1d3回復、ジョシュアとなる\n30分で印は消える";
        text += "カウンター0→1\n";
    }
    
}

function g330() {
    gene = "330 最高に幸福な晩餐を！";
    sulo = 18;
    sase = [[1, 1, 1, 1, 1], [2, 2, 1.5, 1.5, 1.5], [0.5, 0.5, 0.5, 0, 0], [1, 1, 1, 1, 0.5]];


    rankk = 3;
    rank();
   
    seihihan();
    if (seihi == 1) {
        text += "SPが満タンの場合、職員" + name + "の最大HPが+10\n一日一回、翌日には消える\n";
    }
    if (sagyona == 3) {
        text += "カウンターが減少した\n最高に幸福な晩餐を！は変化した\n";
        if (nefi == 1) {
            sibou = 0;
            text += "最高に幸福な晩餐を！は脱走した\n";
        }
        nefi -= 1;
        if (nefi == 0) {
            text += "カウンター0→2\n";
            nefi = 2;
        }
    } else {
        if (nefi == 1) {
            text += "カウンターが増加した\n元の姿に戻った\n";
            nefi = 2;
        }

    }

}

function g354() {
    gene = "354 賞金稼ぎの男";
    sulo = 60;
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
    rankk = 4;
    rank();

   

    seihihan();

    if (irai == 1) {
        text += "抑圧は依頼に置き換わっている\n対価：対象の危険度×3のPE-BOX、他部門の場合危険度×5\n指定した対象を全て撃破あるいは賞金稼ぎの男が倒れるまで続く\n鎮圧が20分以上経過、あるいは賞金稼ぎの男が倒れた場合カウンター減少\n0になると脱走\n";
    }

}

function g361() {
    gene = "361 不可視の花";
    sulo = 26;
    sase = [[1, 1, 1, 0.5, 0.5], [1.5, 1.5, 0.5, 0.5, 0], [0.5, 0.5, 1, 1, 1.5], [0.5, 1, 1.5, 1.5, 1.5]];


    rankk = 3;
    rank();
   
    kensaku = kekka[12].indexOf('361');

    seihihan();

    if (sagyona == 2) {
        text += "職員" + name + "はイチジクの実を食べた\n鎮圧時、与ダメージ+3\n一度に20以上のHPダメージを受けると死亡\nこの職員の加護欄に「361」を記入\n";
        tt12 += ",361";
        for (i = 0; i < 5; i++) {
            kensaku3 = namera[i].indexOf(name);
            if (kensaku3 != -1) {
                nana2 = i + 1;
                nana = "se" + nana2 + "8";
                document.hanteisuru[nana].value += ",361";
            }
        }
    }
    if (seihi == 0 && kensaku != -1) {
        text = "加護欄から「361」を消去\n";
    }

}

function g365() {
    gene = "365 ぼうりょくぐるみ";
    sulo = 7;
    sase = [[1, 1, 1, 1, 1], [0, 0, 0.5, 1, 2], [1, 1, 1, 0.5, 1], [0.5, 1, 1, 1, 1]];


    rankk = 1;
    rank();
   
    kensaku = kekka[12].indexOf('365');
    kensaku2 = kekka[12].indexOf('3651');
    kensaku3 = kekka[12].indexOf('3652');
    kensaku4 = kekka[12].indexOf('3653');


    seihihan();

    if (sagyona == 3) {
        if (seihi == 1) {
            daideme1 = 1;
            daideme2 = 6;
            daisu();
            text = "▼職員" + name + "のSPが" + daideme4 + "回復した\n";
        }

        if (kensaku4 != -1) {
            sibou = 0;
            text += "365系の加護を全て消去\n";
        } else {
            if (kensaku3 != -1) {
                text += "この部門内で加護欄に3653を記入\n";
                tt12 += ",3653";
                document.hanteisuru['se18'].value += ",3653";
                document.hanteisuru['se28'].value += ",3653";
                document.hanteisuru['se38'].value += ",3653";
                document.hanteisuru['se48'].value += ",3653";
                document.hanteisuru['se58'].value += ",3653";
            } else {
                if (kensaku2 != -1) {
                    text += "この部門内で加護欄に3652を記入\n";
                    tt12 += ",3652";
                    document.hanteisuru['se18'].value += ",3652";
                    document.hanteisuru['se28'].value += ",3652";
                    document.hanteisuru['se38'].value += ",3652";
                    document.hanteisuru['se48'].value += ",3652";
                    document.hanteisuru['se58'].value += ",3652";
                } else {
                    if (kensaku == -1) {
                        text += "この部門内で加護欄に365を記入\n";
                        tt12 += ",365";
                        document.hanteisuru['se18'].value += ",365";
                        document.hanteisuru['se28'].value += ",365";
                        document.hanteisuru['se38'].value += ",365";
                        document.hanteisuru['se48'].value += ",365";
                        document.hanteisuru['se58'].value += ",365";
                    } else {
                        text += "この部門内で加護欄に3651を記入\n";
                        tt12 += ",3651";
                        document.hanteisuru['se18'].value += ",3651";
                        document.hanteisuru['se28'].value += ",3651";
                        document.hanteisuru['se38'].value += ",3651";
                        document.hanteisuru['se48'].value += ",3651";
                        document.hanteisuru['se58'].value += ",3651";
                    }

                }

            }
        }
    } else {
        if (kensaku != -1) {
            text += "加護欄から365を消去\n";
        }
        if (kensaku2 != -1) {
            text += "加護欄から3651を消去\n";
        }
        if (kensaku3 != -1) {
            text += "加護欄から3652を消去\n";
        }
        if (kensaku4 != -1) {
            text += "加護欄から3653を消去\n";
        }


    }



}

function g371() {
    gene = "371 恒";
    sulo = 33;
    sase = [[1, 1, 1.5, 1.5, 1.5], [2, 2, 2, 2, 2], [2, 2, 1.5, 1.5, 1.5], [0, 0, 0.5, 0.5, 0.5]];

    rankk = 4;
    rank();
   

    seihihan();

    if (seihi == 0) {
        text += "カウンターが減少した\n";
        nefi -= 1;
        if (nefi == 0) {
            text += "恒は脱走した\nカウンター0→2\n";
            nefi = 2;
        }
    }

}

function g403() {
    gene = "403 誘いの鏡";
    sulo = 42;
    sase = [[1, 1, 1, 0.5, 0.5], [1, 1, 1, 1, 1], [1, 1, 0.5, 0, 0], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();

   


    kensaku = kekka[12].indexOf('403');
    kensaku2 = kekka[12].indexOf('4031');

    seihihan();

    if (sagyona == 1) {
        pani = 1;
        text += "▼職員" + name + "は自殺性パニックに陥った\n制限時間10分\n";
        if (kekka[10] <= 3) {
            pani = 1;
            text += "カウンター減少\n";
            nefi -= 1;

        }
    } else {
        if (kekka[10] <= 3) {
            pani = 1;
            text += "▼職員" + name + "はパニックに陥った\nカウンター減少\n";
            nefi -= 1;

        }
    }
    if (sagyona == 2) {
        if (kensaku == -1) {
            text += "作業職員の加護欄に403を記入\n";
            tt12 += ",403";
            for (i = 0; i < 5; i++) {
                kensaku3 = namera[i].indexOf(name);
                if (kensaku3 != -1) {
                    nana2 = i + 1;
                    nana = "se" + nana2 + "8";
                    document.hanteisuru[nana].value += ",403";
                }
            }
        } else {
            text += "カウンター減少\n";
            nefi -= 1;
        }
    } else {
        if (kensaku != -1) {
            text += "作業職員の加護欄から403を消去\n";
        }
    }

    if (nefi <= 0) {
        text += "誘いの鏡は脱走した\nカウンター0→2\n";
        nefi = 2;
    }

}

function g413() {
    gene = "413 海月少女";
    sulo = 52;
    sase = [[1, 1, 0.5, 0.5, 0], [0.5, 0.5, 1.5, 2, 2], [1, 1, 1, 1.5, 1.5], [1.5, 1.5, 1.5, 1.5, 1.5]];
    rankk = 3;
    rank();

   

    seihihan();
    if (nefi == 0) {
        sibou = 0;
        text += "海月少女は脱走した\nカウンター0→1\n";
        nefi = 1;
    }
    if (sagyona == 0) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 2) {
            text += "カウンターが減少した\n";
            nefi -= 1;
        }
    } else {
        if (kekka[8] >= 5 || kekka[9] <= 2) {
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 2) {
                text += "カウンターが減少した\n";
                nefi -= 1;
            }
        }
    }

}

function g422() {
    gene = "422 明るいだけの照明";
    peti = 0;
    kensaku = kekka[12].indexOf('422');
    kensaku2 = kekka[12].indexOf('4221');
    kensaku3 = kekka[12].indexOf('4222');
    kensaku4 = kekka[12].indexOf('4223');


    ransu = Math.floor(Math.random() * 4 + 1);

    if (sagyona == 4) {
        text = "HPSP15回復\n";

        if (kensaku4 != -1) {
            sibou = 0;
            text += "加護欄から422系を消去\n";
        } else {
            if (kensaku3 != -1) {
                if (ransu == 1) {
                    text += "この職員の次の作業は明るいだけの照明になる\n";
                }
                text += "使用職員の加護欄に4223を記入\n";
                tt12 += ",4223";
                for (i = 0; i < 5; i++) {
                    kensaku3 = namera[i].indexOf(name);
                    if (kensaku3 != -1) {
                        nana2 = i + 1;
                        nana = "se" + nana2 + "8";
                        document.hanteisuru[nana].value += ",4223";
                    }
                }
            } else {
                if (kensaku2 != -1) {
                    if (ransu == 1) {
                        text += "この職員の次の作業は明るいだけの照明になる\n";
                    }
                    text += "使用職員の加護欄に4222を記入\n";
                    tt12 += ",4222";
                    for (i = 0; i < 5; i++) {
                        kensaku3 = namera[i].indexOf(name);
                        if (kensaku3 != -1) {
                            nana2 = i + 1;
                            nana = "se" + nana2 + "8";
                            document.hanteisuru[nana].value += ",4222";
                        }
                    }
                } else {
                    if (kensaku == -1) {
                        if (ransu == 1) {
                            text += "この職員の次の作業は明るいだけの照明になる\n";
                        }
                        text += "使用職員の加護欄に422を記入\n";
                        tt12 += ",422";
                        for (i = 0; i < 5; i++) {
                            kensaku3 = namera[i].indexOf(name);
                            if (kensaku3 != -1) {
                                nana2 = i + 1;
                                nana = "se" + nana2 + "8";
                                document.hanteisuru[nana].value += ",422";
                            }
                        }
                    } else {
                        if (ransu == 1) {
                            text += "この職員の次の作業は明るいだけの照明になる\n";
                        }
                        text += "使用職員の加護欄に4221を記入\n";
                        tt12 += ",4221";
                        for (i = 0; i < 5; i++) {
                            kensaku3 = namera[i].indexOf(name);
                            if (kensaku3 != -1) {
                                nana2 = i + 1;
                                nana = "se" + nana2 + "8";
                                document.hanteisuru[nana].value += ",4221";
                            }
                        }
                    }

                }

            }
        }





    } else {
        text += "ツール型の作業は「使用」です\n";
    }
}

function g432() {
    gene = "432 温もりのこころ";
    peti = 0;

    if (sagyona == 4) {
        text = "勇気と正義が２倍\n自制慎重が勇気正義より低いなら勇気正義+30\nこのツールは任意のタイミングで返却が可能\n";

    } else {
        if (sagyona == 5) {
            text = "作業または鎮圧をしていない場合自殺性以外のパニック\n";

        } else {
            text = "ツール型の作業は「使用」か「返却」です\n";
        }

    }

}


function g451() {
    gene = "451 季節の時の王";
    sulo = 61;
    sase = [[1, 1, 1, 1, 0.5], [1, 1, 0.5, 0, 0], [1, 1, 0.5, 0.5, 0], [2, 2, 2, 1.5, 1]];
    rankk = 4;
    rank();

   

    seihihan();
    ransu = Math.floor(Math.random() * 4 + 1);
    if (ransu == 1) {
        text = "赤の姿\n";
    } else {
        if (ransu == 2) {
            text = "白の姿\n";
        } else {
            if (ransu == 3) {
                text = "黒の姿\n";
            } else {
                if (ransu == 4) {
                    text = "青の姿\n";
                }
            }
        }
    }
    if (kekka[9] <= 3) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }

    if (sagyona == 1 && seihi == 1) {
        text += "加護を受け取った\n鎮圧時、最初の1度だけダメージを0にする\n再度洞察をするか死亡するまで加護は残る\nこの職員の加護欄に「451」を記入\n";
        kensaku = kekka[12].indexOf('451');
        if (kensaku == -1) {
            tt12 += ",451";
            for (i = 0; i < 5; i++) {
                kensaku3 = namera[i].indexOf(name);
                if (kensaku3 != -1) {
                    nana2 = i + 1;
                    nana = "se" + nana2 + "8";
                    document.hanteisuru[nana].value += ",451";
                }
            }
        }
    }

    if (nefi == 0) {
        text += "季節の時の王は脱走した\nカウンター0→3\n";
        nefi = 3;
        ransu = Math.floor(Math.random() * 4 + 1);
        if (ransu == 1) {
            text += "脱走時赤の姿\n";
        } else {
            if (ransu == 2) {
                text += "脱走時白の姿\n";
            } else {
                if (ransu == 3) {
                    text += "脱走時黒の姿\n";
                } else {
                    if (ransu == 4) {
                        text += "脱走時青の姿\n";
                    }
                }
            }
        }
    }

}

function g464() {
    gene = "464 蛹の紳士";
    sulo = 8;
    sase = [[1.5, 1.5, 1.5, 1.5, 1.5], [0.5, 1, 0.5, 0.5, 0.5], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0]];

    rankk = 2;
    rank();
   


    seihihan();

    if (sagyona == 3) {
        text += "蛹の紳士は脱走した。\n";
    }

}


function g521() {
    gene = "521 はらぺこな田舎者";
    sulo = 16;
    sase = [[0.5, 0.5, 0, 0, 0], [1, 1, 1, 1, 1], [1, 1, 0.5, 0.5, 0], [1.5, 2, 2, 2, 2]];


    rankk = 2;
    rank();
   
    seihihan();

    if (sagyona == 3) {
        text = "カウンターが減少した\n";
        if (nefi == 1) {
            text += "はらぺこな田舎者は脱走した。\n";
        }
        nefi -= 1;
        if (nefi == 0) {
            text += "カウンター0→3\n";
            nefi = 3;
        }
    }
}

function g523() {
    gene = "523　ありふれた野草";
    sulo = 78;
    sase = [[0.5, 0.5, 0.5, 0.5, 0], [1, 1, 1.5, 1.5, 2], [1, 1, 1, 1, 1], [1, 1, 1, 0.5, 0.5]];

    rankk = 3;
    rank();
    seihihan();

    if (kekka[9] <= 2 && sagyona == 1 && seihi == 0) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (kekka[10] >= 5 && sagyona == 0 && kurike == 1) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }

    if (sagyona == 1 && kurike == 1 && kekka[4] == 25) {
        text += "IP-O-04-523は綿毛に変化し種を撒き散らした\n種の付いた職員は1時間後に死亡する\nまた、部門全体攻撃を1度だけ無効にする\nツールによるダメージは適用外\n"
    }

    if (nefi <= 0) {
        text += "ありふれた野草は脱走した\nカウンター0→3\n";
        nefi = 3;
    }

}

function g524() {
    gene = "524 空っぽのストーブ";
    peti = 0;

    kensaku = kekka[12].indexOf('540');
    if (sagyona == 4) {
        text += "▼職員" + name + "は鉄の約束を得た\n鎮圧時のダメージ+15\nこのツールは返却可能\n部門内に1人のみ、返却するまで他の職員は手に入らない\nこの職員の加護欄に「524」を追加\n";
        tt12 += ",524";
        for (i = 0; i < 5; i++) {
            kensaku3 = namera[i].indexOf(name);
            if (kensaku3 != -1) {
                nana2 = i + 1;
                nana = "se" + nana2 + "8";
                document.hanteisuru[nana].value += ",524";
            }
        }
        if (kekka[8] == 3 || kekka[9] == 3 || kekka[10] == 3 || kekka[11] == 3) {
            sibou = 0;
            text = "職員" + name + "はストーブに引き込まれ、空っぽのストーブと共に消失した\n次の作業時には空っぽのストーブのみ戻ってくる\n";
        }

    } else {
        if (sagyona == 5) {
            text += "鉄の約束を返却した\n加護欄から「524」を手動で消去してください\n";
        } else {
            text += "ツール型の作業は「使用」です\n";
        }


    }

}

function g528() {
    gene = "528 狐憑かせ";
    sulo = 34;
    sase = [[1, 1, 1, 0.5, 0.5], [1, 1, 1.5, 1.5, 2], [0.5, 0.5, 1, 1, 1], [2, 2, 2, 1.5, 1.5]];

    rankk = 3;
    rank();
   

    seihihan();

    if (sagyona == 0 || sagyona == 2) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            text += "▼職員" + name + "に野狐が憑いた\n作業成功率-5\n作業開始時にHPが減っていた場合死亡\nパニックになった際殺人性になる\nすでに狐が憑いている場合、成功率とパニックはこちらに上書きされる\n";
        }
        if (ransu == 2) {
            text = "▼職員" + name + "に善狐が憑いた\n作業成功率+5\n加護全て消失\nパニックになった際自殺性になる\nすでに狐が憑いている場合、成功率とパニックはこちらに上書きされる\n";
        }
    }

}

function g540() {
    gene = "540 地雷原";
    peti = 0;
    kensaku = kekka[12].indexOf('540');
    kensaku2 = kekka[12].indexOf('5401');

    if (sagyona == 4) {




        if (kensaku2 != -1) {
            text += "部門内全職員死亡\n";

        } else {
            if (kensaku == -1) {
                text = "部門内に限り再挑戦システムが起動\n今日獲得したギフト、装備、エネルギーが初期化\n職員の死亡と浸食ゲージ（本日分）も初期化\nこの幻想体による死亡分の浸食ゲージはリセットされない\n";
                text += "部門内の加護欄に540を記入\n";
                tt12 += ",540";
                document.hanteisuru['se18'].value += ",540";
                document.hanteisuru['se28'].value += ",540";
                document.hanteisuru['se38'].value += ",540";
                document.hanteisuru['se48'].value += ",540";
                document.hanteisuru['se58'].value += ",540";
            } else {
                text = "部門内に限り再挑戦システムが起動\n今日獲得したギフト、装備、エネルギーが初期化\n職員の死亡と浸食ゲージ（本日分）も初期化\nこの幻想体による死亡分の浸食ゲージはリセットされない\n";
                text += "部門内の加護欄に5401を記入\n";
                tt12 += ",5401";
                document.hanteisuru['se18'].value += ",5401";
                document.hanteisuru['se28'].value += ",5401";
                document.hanteisuru['se38'].value += ",5401";
                document.hanteisuru['se48'].value += ",5401";
                document.hanteisuru['se58'].value += ",5401";
            }

        }




    } else {
        text += "ツール型の作業は「使用」です\n";
    }

}

function g566() {
    gene = "566 「■の融解」";
    peti = 0;

    for (var i = 1; i < 6; ++i) {
        if (kekka[10] == i) {
            if (kekka[4] >= kuriti[i]) {
                kuritxt = "";
            }
            if (kekka[4] == fanti[i]) {
                kuritxt = "";
            }
        }
    }

    if (sagyona == 4) {

        daideme1 = 1;
        daideme2 = 6;
        daisu();

        text += "出目の欄に任意使用時間を記入します\n\n";

        kari = 5 * daideme4 * kekka[4];
        kari2 = kekka[4] * 30;

        text += "任意の部門の職員のSPを" + kari + "回復\n使用職員は" + kari2 + "分の間行動不能\n";
        if (kekka[4] == 2) {
            ransu = Math.floor(Math.random() * 6 + 1);
            if (ransu >= 4) {
                text += "▼職員" + name + "はパニックに陥った。\n";
                pani = 1;
            }
        }
        if (kekka[4] == 3 || kekka[4] == 4) {
            ransu = Math.floor(Math.random() * 10 + 1);
            if (ransu >= 4) {
                text += "▼職員" + name + "はパニックに陥った。\n";
                pani = 1;
            }
        }
        if (kekka[4] >= 5) {
            text = "▼職員" + name + "はパニックに陥った。\n";
            pani = 1;

        }
    } else {
        text += "ツール型の作業は「使用」です\n";
    }

}

function g571() {
    gene = "571 Pulse Power Printer";
    sulo = 70;
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
    rankk = 3;
    rank();

   

    kensaku1 = kekka[12].indexOf('5711');
    kensaku2 = kekka[12].indexOf('5712');
    kensaku3 = kekka[12].indexOf('5713');
    kensaku4 = kekka[12].indexOf('5714');

    seihihan();

    if (kensaku1 != -1 && kensaku2 != -1 && kensaku3 != -1 && kensaku4 != -1) {
        text += "カウンターが全回復した\n5711,5712,5713,5714を消去\n";
        nefi = 3;
    } else {
        if (kurike == 1) {
            text += "カウンターが全回復した\n";
            nefi = 3;
        } else {
            if (seihi == 0) {
                text += "カウンターが減少した\n";
                nefi -= 1;
            }
        }
        ransu = Math.floor(Math.random() * 4 + 1);
        if (ransu == 1) {
            text += "マゼンタを得た\nHP3ダメージ\n職員" + name + "の加護欄に「5711」を追加\n死亡、業務終了、特殊能力発動で消える\n";
            kensaku = kekka[12].indexOf('5711');
            if (kensaku == -1) {
                tt12 += ",5711";
                for (i = 0; i < 5; i++) {
                    kensaku3 = namera[i].indexOf(name);
                    if (kensaku3 != -1) {
                        nana2 = i + 1;
                        nana = "se" + nana2 + "8";
                        document.hanteisuru[nana].value += ",5711";
                    }
                }
            }
        }
        if (ransu == 2) {
            text += "シアンを得た\nSP3ダメージ\n職員" + name + "の加護欄に「5712」を追加\n死亡、業務終了、特殊能力発動で消える\n";
            kensaku = kekka[12].indexOf('5712');
            if (kensaku == -1) {
                tt12 += ",5712";
                for (i = 0; i < 5; i++) {
                    kensaku3 = namera[i].indexOf(name);
                    if (kensaku3 != -1) {
                        nana2 = i + 1;
                        nana = "se" + nana2 + "8";
                        document.hanteisuru[nana].value += ",5712";
                    }
                }
            }
        }
        if (ransu == 3) {
            text += "イエローを得た\nHPSP8回復\n職員" + name + "の加護欄に「5713」を追加\n死亡、業務終了、特殊能力発動で消える\n";
            kensaku = kekka[12].indexOf('5713');
            if (kensaku == -1) {
                tt12 += ",5713";
                for (i = 0; i < 5; i++) {
                    kensaku3 = namera[i].indexOf(name);
                    if (kensaku3 != -1) {
                        nana2 = i + 1;
                        nana = "se" + nana2 + "8";
                        document.hanteisuru[nana].value += ",5713";
                    }
                }
            }
        }
        if (ransu == 4) {
            text += "ブラックを得た\n黒10ダメージ\n職員" + name + "の加護欄に「5714」を追加\n死亡、業務終了、特殊能力発動で消える\n";
            kensaku = kekka[12].indexOf('5714');
            if (kensaku == -1) {
                tt12 += ",5714";
                for (i = 0; i < 5; i++) {
                    kensaku3 = namera[i].indexOf(name);
                    if (kensaku3 != -1) {
                        nana2 = i + 1;
                        nana = "se" + nana2 + "8";
                        document.hanteisuru[nana].value += ",5714";
                    }
                }
            }
        }




    }


    if (nefi <= 0) {
        text += "部門内にシアン・マゼンタ・イエローの３体が出現した（脱走）\nカウンター0→3\n";
        nefi = 3;
    }


}

function g581() {
    gene = "581 啼泣の叫び";
    sulo = 71;
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
    rankk = 4;
    rank();

   
    seihihan();
    if (nefi == 0) {
        daideme1 = 4;
        daideme2 = 6;
        daisu();
        text += "啼泣の叫びは絶叫した\n部門内の全職員に" + daideme4 + "黒ダメージ\nカウンター0→1\n";
        nefi = 1;
    }
    if (sagyona == 3) {
        text += "黒10ダメージ\n";
    }

    if (seihi == 0) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }

}

function g610() {
    gene = "610 ファイアーフィッシュ";
    sulo = 72;
    sase = [[1, 1, 1, 0.5, 0.5], [1, 1, 1, 1.5, 1.5], [2, 2, 2, 2, 2], [0, 0, 0, 0.5, 0.5]];

    rankk = 2;
    rank();
   

    seihihan();
    if (sagyona == 1) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }

    if (nefi == 0) {
        text += "ファイアーフィッシュは脱走した\nカウンター0→4\n";
        nefi = 4;
    }
}

function g614() {
    gene = "614 魔法のランプ";
    sulo = 9;
    sase = [[1, 0.5, 1, 1, 1], [0, 0, 1, 1, 1.5], [1, 1, 1, 1, 0.5], [2, 2, 2, 2, 2]];
    
    rankk = 3;
    rank();
    seihihan();

    if (kekka[6] == "男" || kekka[6] == "男性") {
        text = "▼職員" + name + "は魔人となりました。直ちに鎮圧してください。\n";
    } else {
        if (kekka[6] == "女" || kekka[6] == "女性") {
            text = "";
        } else {
            ransu = Math.floor(Math.random() * 2 + 1);
            if (ransu == 2) {
                text = "▼職員" + name + "は魔人となりました。直ちに鎮圧してください。\n";
            }

        }
    }
    if (seihi == 0) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            text += "カウンター減少\n";
            if (nefi == 1) {
                text += "部門内の男性職員1名（自制の低い者）が魅了される。\n呼びかけに失敗した場合魔人となる。\n";
            }
            nefi -= 1;
            if (nefi == 0) {
                text += "カウンター0→2\n";
                nefi = 2;
            }
        }
    }
}

function g620() {
    gene = "620 ノマ化したので人生イージーモード";
    sulo = 35;
    sase = [[1, 1, 1, 1, 0.5], [2, 2, 2, 2, 1.5], [0, 0, 0, 0.5, 0.5], [2, 2, 1.5, 1.5, 1.5]];

    rankk = 5;
    rank();
   

    kensaku = kekka[12].indexOf('620');

    seihihan();

    if (seihi == 0) {
        daideme1 = 2;
        daideme2 = 6;
        daisu();
        text += "自制-" + daideme4 + "\nこの職員の加護欄に「620」を記入";
        tt12 += ",620";
        for (i = 0; i < 5; i++) {
            kensaku3 = namera[i].indexOf(name);
            if (kensaku3 != -1) {
                nana2 = i + 1;
                nana = "se" + nana2 + "8";
                document.hanteisuru[nana].value += ",620";
            }
        }
    }

    if (sagyona == 2 && seihi == 1) {
        if (kensaku == -1) {
            text += "▼職員" + name + "は壁から抜けなくなった\n抜けられるまで行動不能\n職員は(正義)d6を振りIP-O-05-620は3d6を振る。相手より出目が高いと脱出\n失敗した場合30分後に再挑戦可能\n";
        } else {
            text += "▼職員" + name + "は壁から抜けなくなった\nカウンターが減少した\nIP-O-05-620は脱走した\nカウンタ－0→1\n";
            sibou = 0;
        }
    }

}

function g623() {
    gene = "623 目立ちたくない黒子";
    sulo = 19;
    sase = [[0.5, 0.5, 0.5, 0, 0], [1.5, 1.5, 1.5, 2, 2], [1.5, 1.5, 1, 1.5, 1], [1, 1, 1, 0.5, 0.5]];


    rankk = 2;
    rank();
   
    seihihan();
    if (seihi == 0) {
        text = "作業ダメージに追加で赤2ダメージ\n";
        if (sagyona == 1) {
            text = "作業ダメージに追加で赤5ダメージ\n";
            if (kurike == 1) {
                text = "作業ダメージに追加で赤6ダメージ\n";
            }
        }
    } else {
        if (sagyona == 1) {
            text = "作業ダメージに追加で赤3ダメージ\n";
            if (kurike == 1) {
                text = "作業ダメージに追加で赤6ダメージ\n";
            }
        }
    }
}

function g625() {
    gene = "625　天の孔";
    sulo = 79;
    sase = [[2, 1.5, 1, 1.5, 1.5], [2, 1.5, 1.5, 1.5, 1.5], [2, 2, 2, 2, 2], [1.5, 1.5, 1.5, 1.5, 1]];
    rankk = 5;
    rank();
    seihihan();

    if (seihi == 0) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (seihi == 1) {
        text += "カウンターが1増加した\n";
        nefi += 1;
    }
    if (nefi <= 0) {
        text += "天の孔は脱走した\nカウンター0→2\n";
        nefi = 2;
    }

}

function g635() {
    gene = "635 万能薬箱";
    peti = 0;
    kensaku = kekka[12].indexOf('635');
    kensaku2 = kekka[12].indexOf('6351');
    kensaku3 = kekka[12].indexOf('6352');

    if (sagyona == 4) {
        text = "使用者の最大HPの半分の値の分、使用者のHPSP回復\nHPが満タンだった場合は死亡する\n";


        if (kensaku3 != -1) {
            sibou = 0;
            text += "加護欄から6352を消去\n";
        } else {
            if (kensaku2 != -1) {
                text += "使用職員の加護欄に6352を記入\n";
                tt12 += ",6352";
                for (i = 0; i < 5; i++) {
                    kensaku3 = namera[i].indexOf(name);
                    if (kensaku3 != -1) {
                        nana2 = i + 1;
                        nana = "se" + nana2 + "8";
                        document.hanteisuru[nana].value += ",6352";
                    }
                }
            } else {
                if (kensaku == -1) {
                    text += "使用職員の加護欄に635を記入\n";
                    tt12 += ",635";
                    for (i = 0; i < 5; i++) {
                        kensaku3 = namera[i].indexOf(name);
                        if (kensaku3 != -1) {
                            nana2 = i + 1;
                            nana = "se" + nana2 + "8";
                            document.hanteisuru[nana].value += ",635";
                        }
                    }
                } else {
                    text += "使用職員の加護欄に6351を記入\n";
                    tt12 += ",6351";
                    for (i = 0; i < 5; i++) {
                        kensaku3 = namera[i].indexOf(name);
                        if (kensaku3 != -1) {
                            nana2 = i + 1;
                            nana = "se" + nana2 + "8";
                            document.hanteisuru[nana].value += ",6351";
                        }
                    }
                }

            }

        }


    } else {
        text += "ツール型の作業は「使用」です\n";
    }

}

function g703() {
    gene = "703 E・M・E・Lオプティマイザー";
    peti = 0;

    if (sagyona == 4) {
        text = "任意のステータス1つ選択\n";
        ransu = Math.floor(Math.random() * 30 + 1);
        if (ransu <= 28) {
            ransu = Math.floor(Math.random() * 20 + 1);
            if (ransu <= 14) {
                text += ransu + "上昇\n";
            } else {
                text += ransu + "下降\n";
            }
        } else {
            ransu = Math.floor(Math.random() * 255 + 1);
            if (ransu == 29) {
                text += ransu + "上昇\n";
                if (ransu >= 130) {
                    text += "一時間後に死亡\n";
                }
            } else {
                text += ransu + "下降\n";
                if (ransu >= 130) {
                    sibou = 0;
                }
            }
        }

    } else {
        text += "ツール型の作業は「使用」です\n";
    }

}

function g707() {
    gene = "707 甘菓子人形狙撃兵";
    sulo = 43;
    sase = [[1.5, 1.5, 1.5, 2, 2], [2, 2, 2, 2, 2], [0.5, 0.5, 1, 1, 1], [0.5, 1, 0.5, 1, 0.5]];
    rankk = 3;
    rank();

   

    seihihan();

    if (seihi == 0) {
        ransu = Math.floor(Math.random() * 7 + 1);
        if (ransu >= 5) {
            text += "▼職員" + name + "は甘菓子人形狙撃兵にかじりついた\nHPSP20回復\nカウンターが減少した\n";
            nefi -= 1;

        }
    }

    if (nefi <= 0) {
        text += "甘菓子人形狙撃兵は脱走した\nカウンター0→3\n";
        nefi = 3;
    }

}

function g710() {
    gene = "710 過去を穿つ狙撃手";
    sulo = 10;
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [0.5, 1, 1, 0.5, 0.5]];


    rankk = 3;
    rank();
   
    if (kekka[3] == "依頼" || kekka[3] == "特殊") {
        sagyona = 6;
    }

    seihihan();
    if (sagyona == 2) {
        text = "観測レベルが１の場合80黒ダメージ\nこの幻想体の愛着は依頼に置き換わっているので特殊能力等で強制的に愛着を選んだ場合を除き作業を決め直してください。\n";
    }
    if (irai == 1) {
        text += "依頼の対価は依頼職員に80黒ダメージ\n依頼前に発砲宣言をしていない場合は不発\n";
    }
    if (seihi == 0) {
        text += "カウンター減少\n";
        if (nefi == 1) {
            text += "部門内のランダムな職員1名に80黒ダメージ\n";
        }
        nefi -= 1;
        if (nefi == 0) {
            text += "カウンター0→2\n";
            nefi = 2;
        }
    }

}


function g722() {
    gene = "722 泥龍";
    sulo = 11;
    sase = [[2, 2, 2, 1.5, 1.5], [1, 1, 1, 1, 1], [0.5, 0.5, 0.5, 0, 0], [1.5, 1.5, 1.5, 1, 1]];

    rankk = 2;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('722');

    if (seihi == 0) {
        text += "カウンターが減少した。\n";
        nefi -= 1;
    }
    if (sagyona == 0) {
        if (kensaku != -1) {
            pani = 1;
            text += "▼職員" + name + "は自殺性パニックに陥った\n加護欄の722は消去\n";
        } else {
            kagohuti = "722";
            kagohuyo();
        }
    }
        if (nefi <= 0) {
            text += "泥龍は脱走した。\n泥龍の作業に成功することでのみ鎮圧が可能\nカウンター0→2\n";
            nefi = 2;
        }
}

function g725() {
    gene = "725 星海渡る氷精";
    sulo = 21;
    sase = [[0.5, 0.5, 1, 1, 1], [1.5, 1, 1, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5], [2, 2, 1.5, 1, 1]];


    rankk = 4;
    rank();
   
    seihihan();

    pale = 1;

    if (seihi == 0) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            text += "カウンターが減少した。\n";
            if (nefi == 1) {
                text += "星海渡る氷精は脱走した。\n▼職員" + name + "は氷漬けにされた。\n氷精が鎮圧されるまで行動不能";
            }
            nefi -= 1;
            if (nefi == 0) {
                nefi = 2;
            }
        }
    } else {
        if (sagyona == 1 || sagyona == 3) {
            ransu = Math.floor(Math.random() * 10 + 1);
            if (ransu == 1) {
                text += "カウンターが減少した。\n";
                if (nefi == 1) {
                    text += "星海渡る氷精は脱走した。\n▼職員" + name + "は氷漬けにされた。\n氷精が鎮圧されるまで行動不能";
                }
                nefi -= 1;
                if (nefi == 0) {
                    text += "カウンター0→2\n";
                    nefi = 2;
                }
            }
        }

    }
}


function g752() {
    gene = "752 秋色葉";
    sulo = 12;
    sase = [[0.5, 0.5, 1, 1, 1], [1, 1, 1, 1, 1], [0.5, 0.5, 0.5, 0.5, 0.5], [1.5, 1.5, 1.5, 1.5, 1.5]];


    rankk = 2;
    rank();
   
    seihihan();
    if (nefi == 0) {
        sibou = 0;
        text = "カウンターが３まで回復\n部門内の全職員のHPSP全回復\n";
        nefi = 3;
    } else {
        if (sagyona != 3) {
            if (seihi == 1) {
                text += "カウンター減少\n";
                if (nefi == 1) {
                    text += "カウンター0、葉が赤く色付き光始める\n";
                }
                nefi -= 1;
            }

        }
        text += "作業中にパニックになった場合さらにカウンター減少\n";
    }


}

function g810() {
    gene = "810 熊猫師範";
    sulo = 36;
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];

    rankk = 4;
    rank();
   

    seihihan();

    if (seihi == 0) {
        if (kekka[7] <= 2) {
            sibou = 0;
        }
        text += "カウンターが減少した\n";
        nefi -= 1;
        if (nefi == 0) {
            text += "熊猫師範は脱走した\nカウンター0→2\n";
            nefi = 2;
        }
    }

}

function g818() {
    gene = "818 虚勢の才覚";
    sulo = 37;
    sase = [[0.5, 0.5, 0.5, 1, 1], [0, 0.5, 1, 1.5, 2], [1.5, 1, 1, 0.5, 0.5], [1, 1, 0, 0.5, 0.5]];


    rankk = 5;
    rank();
   
    kensaku = kekka[12].indexOf('818');


    seihihan();


    if (kensaku != -1) {
        text = "カウンター減少\n";
        if (nefi == 1) {
            text += "虚勢の才覚は脱走した。\n";
        }
        nefi -= 1;
        if (nefi == 0) {
            text += "カウンター0→3\n";
            nefi = 3;
        }

    } else {
        text += "職員" + name + "の加護欄に「818」を記入\nこの職員以外の職員の加護欄から「818」を消去\nカウンター回復\n";
        nefi = 3;
        tt12 += ",818";
        for (i = 0; i < 5; i++) {
            kensaku3 = namera[i].indexOf(name);
            if (kensaku3 != -1) {
                nana2 = i + 1;
                nana = "se" + nana2 + "8";
                document.hanteisuru[nana].value += ",818";
            }
        }
    }

}

function g821() {
    gene = "821 夢見がちなうさちゃん";
    sulo = 37;
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1.5, 1.5], [0.5, 0.5, 0.5, 0.5, 0.5], [2, 2, 2, 2, 2]];

    rankk = 5;
    rank();
   

    seihihan();

    if (seihi == 1) {
        text += "部門内の職員のHPSPが40回復\n";
    } else {
        if (sagyona != 2) {
            ransu = Math.floor(Math.random() * 2 + 1);
            if (ransu == 1) {
                text = "カウンターが減少した\n";
                nefi -= 1;
                if (nefi == 0) {
                    daideme1 = 1;
                    daideme2 = 6;
                    daisu();
                    text += "夢見がちなうさちゃんは脱走した\nカウンター0→3\n6体脱走した内の" + daideme4 + "体は自動鎮圧された、ただし6の場合は全て鎮圧失敗\n";
                    nefi = 3;
                }
            }
        }
    }



}

function g829() {
    gene = "829 飛び立つ流星";
    sulo = 38;
    sase = [[0, 0.5, 0.5, 0.5, 0.5], [0, 0.5, 0.5, 1, 1.5], [0, 0.5, 0.5, 0.5, 0], [0.5, 0.5, 1, 1, 1.5]];

    rankk = 5;
    rank();
   

    seihihan();

    if (seihi == 1) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            text = "職員" + name + "はながれぼしの欠片を付与された\nこの職員の加護欄に「829」を追加\n作業、鎮圧の出目+7\n";

            kensaku = kekka[12].indexOf('829');
            if (kensaku == -1) {
                tt12 += ",829";
                for (i = 0; i < 5; i++) {
                    kensaku3 = namera[i].indexOf(name);
                    if (kensaku3 != -1) {
                        nana2 = i + 1;
                        nana = "se" + nana2 + "8";
                        document.hanteisuru[nana].value += ",829";
                    }
                }
            }

        }
    }

}

function g849() {
    gene = "849 楽園の永緑樹";
    sulo = 22;
    sase = [[0.5, 0.5, 0, 0.5, 1], [2, 1.5, 1, 1.5, 1.5], [0, 0, 0.5, 0.5, 0.5], [0.5, 1, 1, 1, 1.5]];


    rankk = 3;
    rank();
   
    eee = document.hanteisuru['se18'].value + document.hanteisuru['se28'].value + document.hanteisuru['se38'].value + document.hanteisuru['se48'].value + document.hanteisuru['se58'].value;
    kensaku = kekka[12].indexOf('849');
    kensaku2 = kekka[12].indexOf('8491');


    seihihan();
    if (sagyona == 2) {
        if (seihi == 1) {
            kensaku4 = eee.indexOf('849');
            if (kensaku4 == -1) {
                text += "職員" + name + "は果実を食べた。HPSP15回復\nこの職員の加護欄に「849」を記入\n";
                tt12 += ",849";
                for (i = 0; i < 5; i++) {
                    kensaku3 = namera[i].indexOf(name);
                    if (kensaku3 != -1) {
                        nana2 = i + 1;
                        nana = "se" + nana2 + "8";
                        document.hanteisuru[nana].value += ",849";
                    }
                }
            } else {
                if (kensaku == -1) {
                    text += "職員" + name + "と加護849の職員は最大HPの30％ダメージを受けた。\n加護欄から849を消去\n";
                }

            }



        }
    }

    if (sagyona == 3) {
        text += "職員" + name + "は蛇に噛まれた。\n現在かかっている幻想体から受けたバフデバフの一つを消す\n";
    }


}


function g888() {
    gene = "888　想起の卵眼";
    sulo = 80;
    sase = [[2, 2, 2, 2, 2], [2, 2, 1, 0, 0.5], [2, 1.5, 1, 1, 0.5], [1.5, 1.5, 1, 0.5, 1]];
    rankk = 5;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('888');


    if (seihi == 1) {
        if (kensaku == -1) {
            text += "▼職員" + name + "に「瞳」が付与された\nSP-25自制-30\n瞳を持つ職員の死亡時カウンター減少\n";
            kagohuti = 888;
            kagohuyo();
            text += "カウンターが減少した\n";
            nefi -= 1;
        }

    }

    if (kekka[10] <= 4 && seihi == 0) {
        sibou = 0;
        if (kensaku != -1) {
            text += "カウンターが減少した\n";
            nefi -= 1;
        }
    }

}

function g898() {
    gene = "898 ƎΛO˥YOU";
    sulo = 62;
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
    rankk = 4;
    rank();

   

    seihihan();

    if (irai == 1) {
        text += "依頼　対価：PE-BOX5\n指定した部門内の全職員と脱走中の全ての幻想体にWAW相当の赤ダメージ\n";
    } else {
        if (sagyona == 2 && seihi == 1) {
            text += "▼職員" + name + "のHPが5回復\n";
        }
        if (seihi == 0) {
            text += "閃光弾が爆発し職員" + name + "は失明した\n30分間洞察作業自動失敗\n";
        }
    }


}

function g901() {
    gene = "901 ホームラン!!";
    sulo = 13;
    sase = [[0.5, 0.5, 0.5, 0.5, 0.5], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0.5, 0.5, 0, 0, 0]];


    rankk = 1;
    rank();
   
    seihihan();
    if (sagyona == 2) {
        text += "職員" + name + "はバッタースタンドに立った\n";
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu == 1) {
            daideme1 = 1;
            daideme2 = 6;
            daisu();
            text += "バッターアウト\n部門内職員に" + daideme4 + "のSPダメージ\n";
        } else {
            text += "が、何も起きなかった";
        }
    }
    if (sagyona == 3) {
        text += "職員" + name + "はバッタースタンドに立った\n";
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu == 6) {
            text += "ホームラン\n部門内職員のSP全回復\n";
        } else {
            text += "が、何も起きなかった";
        }
    }
}

function g903() {
    gene = "903 イマジナリーラバー";
    sulo = 39;
    sase = [[0.5, 0.5, 1, 1, 1], [0, 0, 0.5, 2, 2], [0, 0.5, 1, 1.5, 2], [2, 2, 2, 2, 2]];

    rankk = 3;
    rank();
   
    seihihan();

    if (seihi == 1) {
        text += "カウンターが減少した\n";
        nefi -= 1;
        if (nefi == 0) {
            text += "イマジナリーラバーは脱走した\nカウンター0→3\n";
            nefi = 3;
        }
    }

}

function g915() {
    gene = "915 美食家";
    sulo = 14;
    sase = [[0, 0, 0, 0, 0], [1.5, 1.5, 1, 1, 1], [0.5, 0.5, 1, 1, 1], [1.5, 1.5, 1.5, 1.5, 1.5]];

    rankk = 1;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('915');

    text = "職員に加護が付与される。\n3分毎に1d6HP回復、15分後に消去\n";

    if (kensaku == -1) {
        kagohuti = "915";
        kagohuyo();
    }

    //美食家さんの加護の即死は個別の処理には組み込めないのでここには入れないです
}

function g920() {
    gene = "920 刃金のイリュージョナー";
    sulo = 53;
    sase = [[0, 0, 0.5, 0.5, 0.5], [1.5, 1.5, 1.5, 2, 2], [0.5, 0.5, 1, 1, 1], [1, 1, 1, 1.5, 1.5]];
    rankk = 3;
    rank();

   

    seihihan();

    if (kekka[10] >= 4) {
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu == 1 || ransu == 2) {
            text += "人体切断マジックショーを披露した\n";
            sibou = 0;
        } else {
            text += "人体切断マジックショーを披露した\n職員" + name + "のHPSPが30回復\n";
        }
    } else {
        if (seihi == 1) {
            ransu = Math.floor(Math.random() * 6 + 1);
            if (ransu == 1 || ransu == 2) {
                text += "メンタルマジックを披露した\n職員" + name + "のSPが15回復\n";
            }
            if (ransu == 3 || ransu == 4) {
                text += "コインマジックを披露した\n職員" + name + "の作業成功率が+3\n";
            }
            if (ransu == 5 || ransu == 6) {
                text += "トランプマジックを披露した\n職員" + name + "の自制+5\n";
            }
        }
        if (seihi == 0) {
            ransu = Math.floor(Math.random() * 6 + 1);
            if (ransu == 3) {
                text += "人体切断マジックショーを披露した\n";
                sibou = 0;
            } else {
                text += "人体切断マジックショーを披露した\n職員" + name + "のHPSPが30回復\n";
            }
        }
    }



}

function g923() {
    gene = "923 超自我";
    sulo = 63;
    sase = [[1.5, 1.5, 1.5, 1.5, 1.5], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0.5, 0.5, 1, 1, 1]];
    rankk = 5;
    rank();

   

    seihihan();
    kurike = 0;


    if (irai == 1) {
        daideme1 = kekka[11];
        daideme2 = 6;
        daisu();
        text += "決闘\n出目：" + daideme4 + "\n";
        if (kekka[11] == 1) {
            if (daideme4 >= 4) {
                text += "救出成功\nギフト入手\n";
            } else {
                text += "救出失敗\n両者死亡\n職員" + name + "の肉体に獣が憑依し「エス」が脱走した(ALEPH)\n";
            }
        } else {
            if (kekka[11] == 2) {
                if (daideme4 >= 7) {
                    text += "救出成功\nギフト入手\n";
                } else {
                    text += "救出失敗\n両者死亡\n職員" + name + "の肉体に獣が憑依し「エス」が脱走した(ALEPH)\n";
                }
            } else {
                if (kekka[11] == 3) {
                    if (daideme4 >= 10) {
                        text += "救出成功\nギフト入手\n";
                    } else {
                        text += "救出失敗\n両者死亡\n職員" + name + "の肉体に獣が憑依し「エス」が脱走した(ALEPH)\n";
                    }
                } else {
                    if (kekka[11] == 4) {
                        if (daideme4 >= 13) {
                            text += "救出成功\nギフト入手\n";
                        } else {
                            text += "救出失敗\n両者死亡\n職員" + name + "の肉体に獣が憑依し「エス」が脱走した(ALEPH)\n";
                        }
                    } else {
                        if (kekka[11] == 5) {
                            if (daideme4 >= 16) {
                                text += "救出成功\nギフト入手\n";
                            } else {
                                text += "救出失敗\n両者死亡\n職員" + name + "の肉体に獣が憑依し「エス」が脱走した(ALEPH)\n";
                            }
                        } else {
                            if (kekka[11] >= 6) {
                                if (daideme4 >= 19) {
                                    text += "救出成功\nギフト入手\n";
                                } else {
                                    text += "救出失敗\n両者死亡\n職員" + name + "の肉体に獣が憑依し「エス」が脱走した(ALEPH)\n";
                                }
                            } else {

                            }
                        }
                    }
                }
            }
        }
    } else {
        if (seihi == 0) {
            ransu = Math.floor(Math.random() * 2 + 1);
            if (ransu == 2) {
                text += "▼職員" + name + "は魅了され収容室に囚われた\nそのまま業務終了した場合は死亡する\n次の作業が全て決闘になる（特殊作業を選択する）\n";
            }
        }

    }

}

function g971() {
    gene = "971 ダンスパーティー";
    sulo = 44;
    sase = [[1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [1.5, 1.5, 1, 1, 1]];
    rankk = 5;
    rank();

   

    seihihan();


    if (sagyona == 1) {
        text += "▼職員" + name + "はチラシを受け取った。\nカウンターが減少した\nダンスパーティーは脱走した\nカウンター0→1\n職員は死んでいるため眷属にはならない\n";
        sibou = 0;
    }
    if (sagyona == 0 || sagyona == 2) {
        if (seihi == 1) {
            text += "▼職員" + name + "はチラシを受け取った。\n職員がメインルームに戻った後ダンスパーティーは脱走する\n職員" + name + "は眷属になる\n";
        }
    }

}

function g982() {
    gene = "982 遼東之豕";
    sulo = 54;
    sase = [[0, 0, 0, 0, 0], [1, 1, 1, 1.5, 1.5], [0.5, 0.5, 1, 1, 1], [2, 2, 2, 2, 2]];
    rankk = 2;
    rank();

   

    seihihan();

    if (sagyona == 0) {
        sibou = 0;
        text += "職員" + name + "は捕食された\即死した場合と作業ダメージで死亡した場合、遼東之豕の腹が膨れ、次の作業での獲得PE-BOXが2倍になる\nこのPE-BOXの上限は24、発動したら腹は戻る\n#IPCo_982 のタグを用いて職員が死亡したことを報告する\n";
    }

}

function g997() {
    gene = "997　擽る土星";
    sulo = 81;
    sase = [[1.5, 1.5, 1, 0.5, 0.5], [0.5, 0.5, 1, 1, 1], [0, 0, 1.5, 1.5, 1], [1, 1, 1.5, 2, 2]];
    rankk = 1;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('997');


    if (kensaku != -1) {
        if (seihi == 0) {
            text += "▼職員" + name + "はくしゃみが止まらなくなった\n失敗する度にSP2ダメージ\n";
        }
    } else {
        if (seihi == 0 || kekka[9] >= 4) {
            text += "▼職員" + name + "の全ステータス-1\n死亡、業務終了、2時間経過で戻る（加護欄から997を消す）\n重複しない\n";
            kagohuti = 997;
            kagohuyo();
        }

    }

}

function g999() {
    gene = "999 蝕みの魔王";
    sulo = 64;
    sase = [[1.5, 1.5, 1, 0.5, 0.5], [1, 1, 1, 1, 1], [1, 1, 0.5, 0.5, 0], [2, 2, 1.5, 1, 1]];
    rankk = 5;
    rank();

   

    seihihan();
    if (sagyona == 3 && seihi == 0) {
        text += "カウンターが減少した\n2回連続だった場合眷属になる\n";
        nefi -= 1;
    }


    if (nefi == 0) {
        text += "蝕みの魔王は脱走した\nカウンター0→4\n";
        nefi = 4;
    }
}

function g9999() {

    seihihan();

    if (kekka[10] >= 2) {
        sibou = 0;
    } else {

        sibou = 1;
    }
}

function g99999() {

    text = "無効";

}



