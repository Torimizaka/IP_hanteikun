
window.onload = function onLoad() {
    target = document.getElementById("output");
    target.innerHTML = "Ver1.6d 公式垢のプロフに書いてあるバージョンと異なる際は更新してください";
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
    demekari = [];
    kid = "";
    rogt = [];

    conc = [];
    conc2 = [];
    conc3 = 0;

    //幻想体用
    t990 = 0;
    seiti990 = 15;
    keikenti990 = 0;
    jou990 = 0;
    kari801 = 0;
    kari116 = 3;
    con116 = [];

    gtA = [001,"018", "031", "063", 125, 201, 317,365,464, 614,710, 722,752, 901, 915,118,521,"042",623,330,"019",725,849,"002","021",106,361,818];
    gtB = ["023", "091", 142, 192, 214, 371, 528, 620, 810, 821, 829, 903, "013", "072", 403, 707, 971, "003", 110, 194, "005", "012", "022", 209, 413, 920, 982];
    gtC = ["061", "095", 199, 235, 243, 354, 451, 898, 923, 999, "032", "079", 108, 124, 137, 571, 581, 610, 126, 135, 291, "033", 213, 523, 625, 888, 997];
    gtD = ["008", 601, 666, 777, 972, 185, 335, 880, "010", "039", "064", 311, 360, 469, 990, "047", "089", 302, 369, 385, 409, 554, 570, 612, 801, 988, "034", 119, 609, 906];
    gtE = ["006","016","030","062",116,155,170,188,255,299,537,555,890,907,975,976,"054",246,294,437,486,650,977,"088","093",100,113];
    gtTA = [432, 566, 703, 635, 020, 310, 007, 071, 540,422];
    gtTB = [422, "049", 524, "048", 102, 314, 905, 554, 541, 704];
    gtTC = ["050","051"];

    genra1 = [];
    genra2 = [];
    genra3 = [];
    genra4 = [001, "002","003","005","006","008","010","012", "013","016", "018","019", "021","022", "023","030", "031","032","033" ,"034","039","042","047","054","061","062", "063","064", "072","079","088","089", "091","093","095",100, 106,108,110,113,116, 118,119,124, 125,126,135,137, 142,155,170,185,188, 192,194,199, 201,209,213, 214,235,243,246,255,291,294,299,302,311, 317, 330,335,354,360, 361, 365,369, 371,385, 403,409,413,437,451, 464,469, 486,521,523, 528,537,555,570,571,581,601,609,610,612, 614, 620, 623,625,650,666,707, 710, 722, 725, 752,777,801, 810, 818, 821, 829, 849,880,888,890,898, 901, 903,906,907, 915,920,923,971,972,975,976,977,982,988,990,997,999];
    genra5 = [007,"020","048","049","050","051", "071","099",102, 310,314, 422,432,524,  540,541,554, 566,  635, 703,704,905];
    genra6 = [];

    con = [["001", 0], ["018", 2], ["031", 0], ["063", 0], ["125", 2], ["201", 1], ["317", 1], ["365", 0], ["464", 1], ["614", 2], ["710", 2], ["722", 2], ["752", 3], ["901", 0], ["915", 0], ["118", 0], ["521", 3], ["042", 1], ["330", 2], ["623", 0], ["019", 0], ["725", 2], ["849", 0], ["002", 2], ["021", 3], ["106", 3], ["361", 0], ["818", 3], ["023", 0], ["091", 3], ["142", 0], ["192", 0], ["214", 2], ["371", 2], ["528", 0], ["620", 1], ["810", 2], ["821", 3], ["829", 1], ["903", 3], ["013", 0], ["072", 2], ["403", 2], ["707", 3], ["971", 1], ["003", 3], ["110", 1], ["194", 1], ["005", 3], ["012", 4], ["022", 4], ["209", 2], ["413", 1], ["920", 0], ["982", 0], ["018", 2], ["061", 0], ["095", 0], ["199", 3], ["235", 2], ["243", 0], ["354", 2], ["451", 3], ["898", 0], ["923", 0], ["999", 4], ["032", 5], ["079", 0], ["108", 2], ["124", 0], ["137", 3], ["571", 3], ["581", 1], ["610", 4], ["126", 2], ["135", 2], ["291", 2], ["033", 3], ["213", 3], ["523", 3], ["625", 2], ["888", 3], ["997", 0], ["008", 3], ["601", 0], ["666", 0], ["777", 4], ["972", 0], ["185", 0], ["335", 2], ["880", 0], ["010", 0], ["039", 0], ["064", 5], ["311", 0], ["360", 2], ["469", 0], ["990", "?"], ["047", 2], ["089", 2], ["302", 2], ["369", 0], ["385", 3], ["409", 3], ["554", 3], ["570", 3], ["612", 3], ["801", 0], ["988", 3], ["034", 3], ["119", 0], ["609", 1], ["906", 1], ["006", 0], ["016", 4], ["030", 3], ["062", 3], ["116", 5], ["155", 3], ["170", 1], ["188", 1], ["255", 2], ["299", 0], ["537", 3], ["555", 0], ["890", 1], ["907", 0], ["975", 3], ["976", 3], ["054", 0], ["246", 0], ["294", 4], ["437", 0], ["486", 0], ["650", 3], ["977", 3], ["088", 2], ["093", 1], ["100", 0], ["113", 5]];

    //リザルト計算用
    reco = 1;
    rog = ["自動でリザルトツールに加算されます、消去でログが消えます（リザルトツールからも引かれます）"];

    sentakuti = [];

}


function li_log() {

    for (i = 1; i < rogcount; i++) {
        if (rog[i] == null) {
           
            rog[i] = "<li id=\"li" + i + "\">" + i + ":ID," + kekka[2] + ":" + name + ":" + kekka[3] + ":" + seitxt + ":" + keitxt + ":PE" + peti + "  <input type=\"button\" value=\"計算\" onclick=\"kesi("+i+","+peti+");\"></li>";
            
        }
    }
    rogt = rog;
    var result = rogt.filter(function (item) {

        return item !== 'miss';

    });
    rogtext = result.join("");
    target = document.getElementById("comelog");
    target.innerHTML = rogtext;
    rogcount += 1;
}

function kesi(kno,pet) {
    rog[kno] = "miss";
    kid = "li" + kno;
    kdoc = document.getElementById(kid);
    kdoc.remove();
    pp = pet;
    petiplus(pp);
}

function petiplus(ppp) {
    sagyo_ZZ = parseInt(document.rizalt['sagyo_Z'].value);
    ppp2 = ppp * 10;
    ppti = sagyo_ZZ - ppp2;
    document.rizalt['sagyo_Z'].value =ppti;
}

function textset(){
    ketext ="@IdeaPolisCo\n#IPCo_作業\n幻想体ID:" + tt1 + "\n作業:" + tt2 + "\n出目:" + tt3 + "\n名前:" + tt4 + "\n性別:" + tt5 + "\nランク:" + tt6 + "\n勇気:" + tt7 + "\n慎重:" + tt8 + "\n自制:" + tt9 + "\n正義:" + tt10 + "\n加護:"+tt12+"\n現在カウント:"+tt11;
    document.hanteisuru['kekka'].value = ketext;
    document.getElementById("zisei2").value = tt9;
}

function counte() {
    if (tt1 == 432 || tt1 == 566 || tt1 == 703 || tt1 == 635 || tt1 == 020 || tt1 == 310 || tt1 == 099 || tt1 == 007 || tt1 == 071 || tt1 == 540 || tt1 == 422 || tt1 == 049 || tt1 == 524 || tt1 == 048 || tt1 == 102 || tt1 == 314 || tt1 == 905 || tt1 == 541 || tt1==704 ||tt1=="050" || tt1=="051") {
        tt11 = 0;
    }else {
    conc = con.map(function (value, index) { return value[0]; });
    conc2 = con.map(function (value, index) { return value[1]; });
    conc3 = conc.indexOf(tt1);
    tt11 = conc2[conc3];
    }
    if (tt1 == "016") {
        tt11 = 4;
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
    if (checkbox[3].checked) {
        genra1 = genra1.concat(gtD);
        genra3 = genra3.concat(gtD);
    }
    if (checkbox[4].checked) {
        genra1 = genra1.concat(gtE);
        genra3 = genra3.concat(gtE);
    }
    if (checkbox[5].checked) {
    genra3 = genra3.concat(gtTA);
    genra2 = genra2.concat(gtTA);
    }
    if (checkbox[6].checked) {
        genra3 = genra3.concat(gtTB);
        genra2 = genra2.concat(gtTB);
    }
    if (checkbox[7].checked) {
        genra3 = genra3.concat(gtTC);
        genra2 = genra2.concat(gtTC);
    }
    

    var arr = [];
    var arr2 = [];
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

        randam = Math.floor(Math.random() * genra2.length);
        if (!arr2.includes(genra2[randam])) {
            check = genra2[randam];
            arr2.push(check);
            kensa = genra5.indexOf(genra2[randam]);
            select.options[kensa].selected = true;

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
        dememe = Math.floor(Math.random() * tdaisu)+1;
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


    if (tdaisu == 6) {
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
    tdaisu = parseInt(document.tinatusuru['daisu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 0;
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
    tdaisu = parseInt(document.tinatusuru2['daisu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 0;
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
    tdaisu = parseInt(document.tinatusuru3['daisu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 0;
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
    tdaisu = parseInt(document.tinatusuru4['daisu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 0;
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
    tdaisu = parseInt(document.tinatusuru5['daisu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 0;
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
    tdaisu = parseInt(document.tinatusuru6['daisu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 0;
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
    tdaisu = parseInt(document.tinatusuru7['daisu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 0;
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
    tdaisu = parseInt(document.tinatusuru8['daisu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 0;
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
    tdaisu = parseInt(document.tinatusuru9['daisu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 0;
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
    tdaisu = parseInt(document.tinatusuru10['daisu'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 0;
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
    deme = 0;
    nemax = 5;

    rogcount = rog.length + 1;

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
    deme = kekka[4];

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

    kensaku093 = kekka[12].indexOf('093');
    kensaku0931 = kekka[12].indexOf('1913');

    if (kekka[2] != 093 && sagyona == 2) {
        kensaku093 = kekka[12].indexOf('093');
        if (kensaku093 != -1 && sibou !== 0) {
            text += "▼狐の声が聞こえる。\n『はぁ？アンタはおれのモノや。" + name + "。』\n";
            text += "百火は脱走した。加護093を持った職員は即座に殺人性パニックとなる。\n";

        } else {
            if (kensaku093 != -1 && sibou == 0) {
                text += "▼狐の声が聞こえる。\n『なぁ、誰が" + name + "を殺したん？』\n";
                text += "百火は脱走した。093系統の加護を消去してください。\n";

            }

        }
    }

    if (kekka[2] != 093 && sagyona !== 2) {

        kensaku1933 = kekka[12].indexOf('1933');
        if (kensaku1933 != -1) {
            text += "▼狐の声が聞こえる。\n『" + name + "、おれのとこに帰ってこい。』\n";
            text += "百火は脱走した。加護093を持った職員は即座に殺人性パニックとなる。\n加護1931,1933を削除。\n";

        } else {

            kensaku1932 = kekka[12].indexOf('1932');
            if (kensaku1932 != -1) {
                text += "部門全体に炎の雨が降り注ぐ。部門内の職員全員にRED・特殊距離の15ダメージ。\n";
                kagohuti = "1933";
                kagohuyo();

            } else {



                kensaku093 = kekka[12].indexOf('093');
                if (kensaku093 != -1) {
                    text += "部門全体に炎の雨が降り注ぐ。部門内の職員全員にRED・特殊距離の15ダメージ。\n";
                    kagohuti = "1932";
                    kagohuyo();
                } else {
                    kensaku093 = kekka[12].indexOf('093');
                    if (kensaku093 != -1 && sibou == 0) {
                        text += "▼狐の声が聞こえる。\n『誰に殺された、" + name + "……』\n";
                        text += "百火は脱走した。093系統の加護を消去してください。\n";

                    }
                }
            }
        }
    }


    if (kensaku093 != -1) {
        if (pani == 1) {
            text += "▼狐の声が聞こえる。\n『かわいそうに。今迎えに行くからなぁ、" + name + "。』\n";
            text += "百火は脱走した。職員" + name + "のパニックは殺人性となる。\n";

        }
    }

    kensaku100 = kekka[12].indexOf('100');
    if (kensaku100 != -1) {
        if (kekka[2] == 100) {
            text += "▼不気味なアナウンスと電車の警笛が聞こえる…\n「ご乗車有難うございます、" + name + "様。」\n";
            text += "職員" + name + "は異界電車に引きずり込まれてしまった。\n";
            sibou = 0;
        } else {
            text += "手動で100の加護を消去して下さい。\n";

        }
    }

    kensaku1001 = kekka[12].indexOf('1001');
    if (kensaku1001 != -1) {
        if (kekka[2] != 100) {
            text += "▼不気味なアナウンスと電車の警笛が聞こえる…\n「逃がさないと言ったでしょう、" + name + "様。次の停車駅は私の収容室以外なのですから。」\n";
            text += "職員" + name + "は異界電車に引きずり込まれてしまった。\n";
            sibou = 0;
        } else {
            text += "手動で1001の加護を消去して下さい。\n";

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

    if (kekka[2] != 311) {
        kensaku311 = kekka[12].indexOf('311');
        if (kensaku311 != -1) {
            text += "職員" + name + "の最大HPが10減少\nこの効果は重複する\n最大HPが0以下になると眷属「豊穣の子」となり鎮圧後死亡する\n";
        }
    }

    kensaku0611 = kekka[12].indexOf('0611');
    if (kensaku0611 != -1) {
        if (kekka[2] != "061" && seihi == 1) {
            sibou = 0;
            text += "職員" + name + "は水槽に引きずりこまれた\nこの職員のステータスがこの日の間初期値になる\n";

        }
    }


    kensaku451 = kekka[12].indexOf('451');
    if (kensaku451 != -1 && sagyona == 3) {
        sibou = 0;
        text += "職員" + name + "は作業前に即座に死亡したためこの作業で発動した能力などは無効\n";
    }

    kensaku047 = kekka[12].indexOf('047');
    if (kensaku047 != -1 && kekka[2] != "047") {
        text += "あなたのナンバーワンのカウンターが減少した\n";
        con[97] -= 1;
        if (con[97] <= 0) {
            text += "あなたのナンバーワンは脱走した\nあなたのナンバーワンのカウンター0→2\n";
            con[97] = 2;
        }
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
        }
    }
    if (nefi >= nemax) {
        nefi = 5;
    }
    kensaku9762 = kekka[12].indexOf('9762');
    if (kensaku9762 != -1 && kekka[2] != "976") {
        text += "加護欄から「9762」を消去する（手動）\n";
    }

    kensaku976 = kekka[12].indexOf('976');
    kensaku9752 = kekka[12].indexOf('9752');
    if (kensaku9752 != -1 && kensaku976 == -1 && kekka[2] != "975") {
        text += "加護欄から「9752」を消去する（手動）\n";

    }

    kensaku246 = kekka[12].indexOf('246');
    if (kensaku246 != -1 && pani==1) {
        sibou = 0;
        text += "殺人性パニックと同じ動きをする、詳細は鬼教官のページ参照\n";

    }

    kekka[13] = nefi;
    con[conc3][1] = nefi;

    tt11 = nefi;
    textset();

    if (peti <= 0) {
        peti = 0;
    }
    twetext = gene + "\n" + name + "　" + kekka[3] + "\n\n" + seitxt + kuritxt + text + sitxt + dametxt + "\n獲得PE-BOX：" + peti + "\n獲得経験値　" + keitxt ;
    document.hanteisuru['del'].value = twetext;
    li_log();
     sagyo_ZZZ = parseInt(document.rizalt['sagyo_Z'].value);
    document.rizalt['sagyo_Z'].value = sagyo_ZZZ+ peti;
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

        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "狂人の抜け殻は脱走した。\nカウンター0→2\n";
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

function g006() {
    gene = "006 愛しのめろんぱん";
    sase = [[2, 2, 2, 2, 2], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1.5, 1.5, 1.5, 1.5, 1.5]];
    rankk = 2;
    rank();
    seihihan();

    if (sagyona == 0) {
        text += "職員" + name + "はめろんぱんを食べた\nHPSPの最大値+5\n重複しない\n";

    }

    if (sagyona == 0 || sagyona == 2) {
        ransu = Math.floor(Math.random() * 10 + 1);
        if ((ransu % 2) == 0) {
            text += "夕張メロンを投げつけられた\n";
            sibou = 0;
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
    if (kekka[7] >= 4) {
        sibou = 0;
    } else {

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

    }

    } else {
        text = "ツール型の作業は「使用」か「返却」です\n";

    }

}

function g008() {
    gene = "008 詰められた猫";
    sulo = 82;
    sase = [[0, 0, 0, 0, 0], [0.5, 1, 1, 1.5, 1.5], [0.5, 0.5, 0.5, 1, 1], [2, 2, 2, 2, 2]];
    rankk = 2;
    rank();
    seihihan();

    if (nefi <= 0) {
        text = "SP8ダメージ\n同部門に狂人の抜け殻がいる場合は狂人の抜け殻が脱走する\nカウンター0→3\n";
        nefi = 3;
    }

    if (sagyona == 1 && seihi == 1) {
        if (nefi <= 2) {
            text += "中身が片付けられ、猫に詰められた\nカウンター1回復\n";
            nefi += 1;
        }
    }
    if (sagyona == 0 || sagyona == 3) {
        text += "中身が飛び散った\nカウンター1減少\n";
        nefi -= 1;
    }

}

function g010() {
    gene = "010 誰でもない日";
    sulo = 90;
    sase = [[0, 0, 0, 0, 0], [1, 1, 0.5, 0.5, 0.5], [1, 1, 1, 1, 1], [1.5, 1.5, 1.5, 2, 2]];

    rankk = 1;
    rank();
    seihihan();

    if (sagyona == 2) {
        text += "職員" + name + "の名前が消失\n『誰か』になる\n";
    }

    if (sagyona == 0 && seihi == 1) {
        daideme1 = 2;
        daideme2 = 3;
        daisu();
        text += "ケーキが用意された\nHP" + daideme4 + "回復\n";
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

function g016() {
    gene = "016 虚ろの正義";
    sase = [[0.5, 1, 1, 0.5, 0.5], [2, 2, 2, 2, 2], [1.5, 1.5, 1.5, 1, 1], [1, 1, 1, 0.5, 0]];
    rankk = 4;
    rank();
    seihihan();

    if (sagyona == 1) {
        text = "この作業は依頼に置き換わっています\n";
    }
    if (irai == 1) {
        text += "任意の相手に対して青50ダメージ\n対価は依頼職員の最大HPの半分\nカウンターが減少した\n";
        nefi -= 1;
    }
    if (seihi == 0) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }

    if (nefi <= 0) {
        text += "虚ろの正義は脱走した\nカウンター0→4\n";
        nefi = 4;
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

function g030() {
    gene = "030 終焉の歌唄い";
    sase = [[1.5, 1.5, 1.5, 1.5, 2], [0, 0, 1, 0.5, 0.5], [0.5, 0.5, 0, 0, 0], [1.5, 1.5, 2, 2, 2]];
    rankk = 4;
    rank();
    seihihan();

    if (seihi == 1 && sagyona == 1) {
        text += "歌を聴いた\n慎重+20、自制-20、一日限り\n";
        kagohuti = "030";
        kagohuyo();
    }
    if (seihi == 1 && sagyona == 2) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        sibou = 0;
        text += "終焉の歌唄いは脱走した\nカウンター0→3\n";
        nefi = 3;
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

function g034() {
    gene = "034 影買いの悪魔";
    sulo = 108;
    sase = [[1, 1, 1, 0.5, 0.5], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1]];
    rankk = 2;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('034');
    if (kensaku == -1) {
        if (kekka[10] <= 2) {
            text += "加護を得た\n自制-10、勇気+10\n";
            kagohuti = "034";
            kagohuyo();
            text += "カウンターが減少した\n";
            nefi -= 1;
        }
    }
    if (nefi <= 0) {
        text += "影が収容違反した\nカウンター0→3\n";
        nefi = 3;
    }
}


function g039() {
    gene = "039 ちびのお城";
    sulo = 91;
    sase = [[0, 0, 0.5, 0.5, 0.5], [0.5, 0.5, 1, 1, 1], [0, 0, 0.5, 0.5, 0.5], [1, 1, 1.5, 1.5, 1.5]];
    rankk = 1;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('039');
    kensaku2 = kekka[12].indexOf('0391');

    if (sagyona == 0 || sagyona == 2) {
        if (seihi == 1) {
            if (kensaku2 != -1) {
                text += "▼職員" + name + "の体が縮んだ\n";
                sibou = 0;
            } else {
                if (kensaku != -1) {
                    text += "▼職員" + name + "の体が縮んだ\n追加で勇気-5、1d3→1で攻撃回避\n";
                    kagohuti = "0391";
                    kagohuyo();
                } else {
                    text += "▼職員" + name + "の体が縮んだ\n勇気-5、1d4→1で攻撃回避\n";
                    kagohuti = "039";
                    kagohuyo();

                }
            }

        }
    }

    if (sagyona == 1 && seihi == 1) {
        if (kensaku2 != -1) {
            text += "職員の体やステータスが元に戻った\n加護欄から039系を全て消す\n";
        } else {
            if (kensaku != -1) {
                text += "職員の体やステータスが元に戻った\n加護欄から039系を全て消す\n";
            }
        }

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

function g047() {
    gene = "047 あなたのナンバーワン";
    sulo = 97;
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 0.5, 0.5], [0, 0, 0, 0, 0], [1.5, 1.5, 1.5, 2, 2]];
    rankk = 5;
    rank();
    seihihan();

    if (sagyona == 2 && seihi == 1) {
        kagohuti = "047";
        kagohuyo();
        text += "SP回復量+10\n重複しない\nあなたのナンバーワンの脱走時、眷属になる\n";
    }
    if (nefi <= 0) {
        text += "あなたのナンバーワンは脱走した\nカウンター0→2\n";
        nefi = 2;
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

function g050() {
    gene = "050 未来の私へ";
    peti = 0;

    if (sagyona == 4) {
        if (kekka[7] <= 3) {
            ransu = Math.floor(Math.random() * 8 + 1);
            if (ransu == 1) {
                pani = 1;
                text += "▼職員" + name + "はパニックに陥った\n";
            }
        }
        kensaku = kekka[12].indexOf('050');
        kensaku2 = kekka[12].indexOf('0502');
        kensaku3 = kekka[12].indexOf('0503');
        kensaku4 = kekka[12].indexOf('0504');
        if (kensaku4 != -1) {
            text += "職員の能力値と保有加護を前回記録した物に上書きする\n蘇生時慎重-10\n";
            sibou = 0;
        } else {
            if (kensaku3 != -1) {
                text += "能力値、保有加護を記録する\n職員の能力値と保有加護を前回記録した物に上書きする\n";
                kagohuti = "0504";
                kagohuyo();
            } else {
                if (kensaku2 != -1) {
                    text += "能力値、保有加護を記録する\n職員の能力値と保有加護を前回記録した物に上書きする\n";
                    kagohuti = "0503";
                    kagohuyo();
                } else {
                    if (kensaku != -1) {
                        text += "能力値、保有加護を記録する\n職員の能力値と保有加護を前回記録した物に上書きする\n";
                        kagohuti = "0502";
                        kagohuyo();
                    } else {
                        text += "能力値、保有加護を記録する\n";
                        kagohuti = "050";
                        kagohuyo();
                    }
                }
            }
        }

    } else {
        text += "ツール型の作業は「使用」です\n";
    }

}

function g051() {
    gene = "051 子ヤギの郵便屋さん";
    peti = 0;

    if (sagyona == 4) {
        ransu = Math.floor(Math.random() * 4 + 1);
        if (ransu == 1) {
            text += "職員" + name + "の勇気ランクが1下がる代わりに配属されている任意の職員1名の勇気ランクが1上昇（他部門職員も選択可能）\nランク5より上には上がらない\n";
            if (kurike == 1) {
                daideme1 = 2;
                daideme2 = 6;
                daisu();
                text += "さらに譲渡先職員のSPが" + daideme4 + "回復\n";
            }
            if (kekka[8] == 1) {
                ransu = Math.floor(Math.random() * 3 + 1);
                if (ransu == 1) {
                    sibou = 0;
                }
            }
        }
        if (ransu == 2) {
            text += "職員" + name + "の慎重ランクが1下がる代わりに配属されている任意の職員1名の慎重ランクが1上昇（他部門職員も選択可能）\nランク5より上には上がらない\n";
            if (kurike == 1) {
                daideme1 = 2;
                daideme2 = 6;
                daisu();
                text += "さらに譲渡先職員のSPが" + daideme4 + "回復\n";
            }
            if (kekka[9] == 1) {
                ransu = Math.floor(Math.random() * 3 + 1);
                if (ransu == 1) {
                    sibou = 0;
                }
            }
        }
        if (ransu == 3) {
            text += "職員" + name + "の自制ランクが1下がる代わりに配属されている任意の職員1名の自制ランクが1上昇（他部門職員も選択可能）\nランク5より上には上がらない\n";
            if (kurike == 1) {
                daideme1 = 2;
                daideme2 = 6;
                daisu();
                text += "さらに譲渡先職員のSPが" + daideme4 + "回復\n";
            }
            if (kekka[10] == 1) {
                ransu = Math.floor(Math.random() * 3 + 1);
                if (ransu == 1) {
                    sibou = 0;
                }
            }
        }
        if (ransu == 4) {
            text += "職員" + name + "の正義ランクが1下がる代わりに配属されている任意の職員1名の正義ランクが1上昇（他部門職員も選択可能）\nランク5より上には上がらない\n";
            if (kurike == 1) {
                daideme1 = 2;
                daideme2 = 6;
                daisu();
                text += "さらに譲渡先職員のSPが" + daideme4 + "回復\n";
            }
            if (kekka[11] == 1) {
                ransu = Math.floor(Math.random() * 3 + 1);
                if (ransu == 1) {
                    sibou = 0;
                }
            }
        }
    } else {
        text += "ツール型の作業は「使用」です\n";
    }

}

function g054() {
    gene = "054 受難告知";
    sase = [[2, 2, 2, 2, 2], [0.5, 0.5, 1, 1, 0.5], [1, 1, 1, 1, 1], [1.5, 1.5, 1.5, 1.5, 1.5]];
    rankk = 5;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('054');
    kensaku2 = kekka[12].indexOf('0542');
    kensaku3 = kekka[12].indexOf('0543');
    if (seihi == 1) {
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu <= kekka[7]) {
            daideme1 = 1;
            daideme2 = 4;
            daisu();
            if (daideme4 == 1) {
                kari = "勇気";
                if (kekka[8] == 1) {
                    sibou = 0;
                }
                if (kekka[8] >= 6 && kekka[9] >= 6 && kekka[10] >= 6 && kekka[11] >= 6) {
                    sibou = 0;
                }
            } else {
                if (daideme4 == 2) {
                    kari = "慎重";
                    if (kekka[9] == 1) {
                        sibou = 0;
                    }
                    if (kekka[8] >= 6 && kekka[9] >= 6 && kekka[10] >= 6 && kekka[11] >= 6) {
                        sibou = 0;
                    }
                } else {
                    if (daideme4 == 3) {
                        kari = "自制";
                        if (kekka[10] == 1) {
                            sibou = 0;
                        }
                        if (kekka[8] >= 6 && kekka[9] >= 6 && kekka[10] >= 6 && kekka[11] >= 6) {
                            sibou = 0;
                        }
                    } else {
                        if (daideme4 == 4) {
                            kari = "正義";
                            if (kekka[11] == 1) {
                                sibou = 0;
                            }
                            if (kekka[8] >= 6 && kekka[9] >= 6 && kekka[10] >= 6 && kekka[11] >= 6) {
                                sibou = 0;
                            }
                        } else {

                        }
                    }
                }
            }
            text += "職員" + name + "は「受難」を得た\n" + kari + "ランクが1下降\n死亡で消失\nパニックになると死亡する\n下降したステータスに対応した作業を成功させることで該当ランクの下降が解除され、さらに元のランクから+1される（受難は消失しない）\n";
            kagohuti = "054";
            kagohuyo();
            if (kensaku3 != -1) {
                sibou = 0;
            } else {
                if (kensaku2 != -1) {
                    kagohuti = "0543";
                    kagohuyo();
                } else {
                    if (kensaku != -1) {
                        kagohuti = "0542";
                        kagohuyo();
                    }
                }
            }




        }
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

function g062() {
    gene = "062 項垂れ柳";
    sase = [[2, 2, 0, 0, 0], [2, 2, 1.5, 1.5, 1.5], [2, 2, 2, 2, 2], [2, 2, 0, 0, 0]];
    rankk = 5;
    rank();
    seihihan();
    nemax = 3;

    if (kekka[7] <= 2) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (kekka[7] >= 3) {
        text += "カウンターが1増加した\n";
        nefi += 1;
    }
    if (nefi <= 0) {
        text += "項垂れ柳は脱走した\nカウンター0→" + nemax + "\n";
        nefi = nemax;
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

function g064() {
    gene = "064 虚ろな×望";
    sulo = 92;
    sase = [[0.5, 1, 1, 1.5, 1.5], [0, 0, 0.5, 0.5, 1], [0, 0, 0, 0.5, 1], [0.5, 0.5, 0.5, 1, 1]];
    rankk = 5;
    rank();
    seihihan();
    text += "作業中にパニックになる、あるいは死亡するとカウンター減少\nパニックになった場合は作業失敗\nカウンター0の時の挙動はエンサイクロペディア1ページ目の「能力詳細」のページを参照\n";

    if (kekka[7] <= 4) {
        text += "恐怖ダメージを受けた\n最大SPの100％のSPダメージ\n";
    } else {
        text += "恐怖ダメージを受けた\n最大SPの75％のSPダメージ\n";
    }



}

function g095() {
    gene = "095 Please kill me!";
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

function g089() {
    gene = "089 留め具を千切り復讐せよ";
    sulo = 98;
    sase = [[1, 1, 0.5, 0.5, 0.5], [1, 1, 1, 1.5, 1.5], [1.5, 1.5, 1, 1, 1.5], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();

    if (kekka[7] <= 2) {
        text += "▼職員" + name + "はパニックに陥った\n";
        pani = 1;
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "ランダムに一人職員が選ばれ、収容室に向かい死亡する\n留め具を千切り復讐せよは脱走した\nカウンター0→2\n";
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

function g088() {
    gene = "088 Null-Void-White";
    sase = [[2, 2, 2, 2, 2], [0, 0, 0.5, 0.5, 0.5], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();

    k0881 = document.hanteisuru['se18'].value;
    k0882 = document.hanteisuru['se28'].value;
    k0883 = document.hanteisuru['se38'].value;
    k0884 = document.hanteisuru['se48'].value;
    k0885 = document.hanteisuru['se58'].value;

    kensaku = k0881.indexOf('088');
    kensaku2 = k0882.indexOf('088');
    kensaku3 = k0883.indexOf('088');
    kensaku4 = k0884.indexOf('088');
    kensaku5 = k0885.indexOf('088');



    if (seihi == 0) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            text += "カウンターが減少した\n";
            nefi -= 1;
        }
    } else {
        if (kensaku != -1 || kensaku2 != -1 || kensaku3 != -1 || kensaku4 != -1 || kensaku5 != -1) {

        } else {
            ransu = Math.floor(Math.random() * 10 + 1);
            if (ransu <= 3) {
                text += "職員" + name + "は飲み込まれ、生還した\n「虚構」状態になった\nHPSPが0で固定され、即死、パニック、眷属化、バフデバフ、回復無効\nダメージを受ける度に浸食+1、45分後に死亡（蘇生時の浸食は+3になり、ギフト入手）\n";
                nefi -= 1;
                kagohuti = "088";
                kagohuyo();

            }

        }
    }
    if (nefi <= 0) {
        text += "Null-Void-Whiteは脱走した\nカウンター0→2\n";
        nefi = 2;
    }

}

function g093() {
    gene = "093 百火";
    sase = [[0.5, 0.5, 1, 1, 1], [1, 1, 1, 1.5, 1.5], [0, 0, 0.5, 0.5, 0.5], [1.5, 1.5, 1.5, 2, 2]];
    rankk = 5;
    rank();
    seihihan();

    if (seihi == 1) {
        kensaku = kekka[12].indexOf('093');
        kensaku2 = kekka[12].indexOf('1931');

        if (kensaku == -1 && kensaku2 == -1) {

            text += "職員" + name + "の周りに炎の花びらが舞い踊る。加護欄に「093」を記入。\n職員" + name + "以外の部門内職員全員の加護欄に「1931」を記入。\n";

            tt12 += ",093";
            for (i = 0; i < 5; i++) {
                kensaku3 = namera[i].indexOf(name);
                if (kensaku3 != -1) {
                    nana2 = i + 1;
                    nana = "se" + nana2 + "8";
                    document.hanteisuru[nana].value += ",093";
                } else {
                    nana2 = i + 1;
                    nana = "se" + nana2 + "8";
                    document.hanteisuru[nana].value += ",1931";
                }
            }
        }
    }

    kensaku = kekka[12].indexOf('093');
    if (kensaku != -1) {
        seihi = 1;
        text += "職員" + name + "のHP/SPが全回復した。\n";
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

function g100() {
    gene = "100 夢路の異界電車";
    sase = [[0, 0, 0.5, 2, 2], [0, 0, 0.5, 1.5, 1.5], [0, 0, 0.5, 1.5, 1.5], [0.5, 0.5, 1, 1.5, 2]];
    rankk = 5;
    rank();
    seihihan();

    ransu = Math.floor(Math.random() * 3 + 1);
    if (ransu == 1) {
        text = "RED\n";
        if (ransu == 1 && seihi == 1) {
            text += "HPが20回復した。\n"
        }
        if (ransu == 1 && seihi == 0) {
            text += "『次は挽肉、挽肉でございます』\n"
        }
    } else {
        if (ransu == 2) {
            text = "BLACK\n";
            if (ransu == 2 && seihi == 1) {
                text += "HP/SPが10回復した。\n"
            }
            if (ransu == 2 && seihi == 0) {
                text += "『次は抉り出し、抉り出しでございます』\n"
            }

        } else {
            if (ransu == 3) {
                text = "PALE\n";
                if (ransu == 3 && seihi == 1) {
                    text += "最大HPの半分が回復した。\n"
                }
                if (ransu == 3 && seihi == 0) {
                    text += "『次は活け造り、活け造りでございます』\n"
                }

            }
        }
    }


    if (seihi == 0) {
        text += "▼夢路の異界電車は悪夢の極刑列車に姿を変えた\n";
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu <= 4) {
            daideme1 = 10;
            daideme2 = 30;
            daisu();
            text += "職員" + name + "は駅員たちに捕まり「" + daideme4 + "」の属性ダメージを受けた。EGOの属性耐性を適用可能。免疫は貫通し「半減」扱いとなる。\n";
        } else {
            text += "職員" + name + "は駅員たちを振り払い下車することに成功した。\n";
        }
    }

    if (seihi == 1) {
        ransu = Math.floor(Math.random() * 10 + 1);

        if (ransu == 7) {
            text += "不気味なアナウンスが鳴り響く。\n"
            text += "「間もなく電車が参ります。ご乗車のお客様は収容室内でお待ちください」\n"
            kagohuti = "100";
            kagohuyo();

        } else {

            if (ransu == 8) {
                text += "不気味なアナウンスが鳴り響く。\n"
                text += "「間もなく電車が参ります。……逃がさない」\n"
                kagohuti = "1001";
                kagohuyo();

            }
        }

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

function g113() {
    gene = "113 死命の男爵『ゲーテ』";
    sase = [[1, 1, 1, 1, 1], [1.5, 1.5, 1.5, 1.5, 1.5], [0.5, 0.5, 0.5, 0.5, 0.5], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();
    if (sagyona == 3) {
        text += "この作業は生贄作業に置き換わっています\n";
    }

    if (kekka[8] <= 3 || kekka[11] <= 3) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            text += "カウンターが減少した\n";
            nefi -= 1;
        }
    }
    if (seihi == 0) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (irai == 1) {
        text += "職員" + name + "以外の職員からランダムに1名選ばれ死亡する。\nカウンター全回復\n職員" + name + "に「死精の聖杯」を付与（与ダメ+10、作業成功率+10）\n";
        nefi = 5;
        kagohuti = "113";
        kagohuyo();

    }
    if (nefi <= 0) {
        text += "死命の男爵『ゲーテ』は脱走した\nカウンター0→5\n";
        nefi = 5;
    }

}

function g116() {
    gene = "116 災厄のバベル";
    sase = [[2, 2, 2, 2, 2], [2, 1.5, 1.5, 1.5, 1], [2, 2, 2, 1.5, 1.5], [2, 1.5, 1.5, 1, 1]];
    rankk = 5;
    rank();
    seihihan();
    if (kari116 == 3) {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 1) {
            text += "災厄のバベルは正位置になった\n部門内全職員に「災厄」が付与\n1日全ステ-30、移動ターン+1、3時間毎に10黒ダメ、パニック時50分後に死亡のデバフ\n";
            kari116 = 1;

        } else {
            text += "災厄のバベルは逆位置になった\nカウントダウンが始まった\n";
            kari116 = 2;
        }
    } else {
        if (kari116 == 1) {
            text += "正位置\n";
        } else {
            text += "逆位置\n";
        }
    }
    if (kari116 == 1) {
        text += "職員" + name + "に「災厄」の付与\n";
    }
    if (kari116 == 2) {
        if (seihi == 0) {
            text += "カウンターが減少した\n";
            nefi -= 1;

        }
        con116.push(sagyona);
        if (con116.length >= 11) {
            var consa = 0;
            for (var i = 0; i < con116.length; i++) {
                if (con116[i] == 3) {
                    consa++;
                }
            }
            if (consa <= 7) {
                text += "カウンターが0になった\n";
                nefi = 0;
            }
            con116 = [];
        }
        if (nefi <= 0) {
            text += "災厄のバベルは脱走した\nカウンター0→5\n";
            nefi = 5;
        }
        c116 = con116.length;
        if (c116 <= 10) {
            cc116 = 10 - c116;
            text += "残りカウント" + cc116 + "\n";
        }
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

function g119() {
    gene = "119 環獄";
    sase = [[1, 1, 1, 1, 1], [0, 0, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0, 0], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();

    if (seihi == 0) {
        sibou = 0;
    }
    kensaku = kekka[12].indexOf('106');
    if (kensaku != -1 && sagyona!=0) {
        text += "職員" + name + "は肉も残らず骨になった\n";
        sibou = 0;
    }
    if (sibou == 0) {

        text += "環獄は脱走した\n";
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

function g155() {
    gene = "155 JOSHUA:2";
    sase = [[0, 0, 0, 0, 0], [1, 1, 0.5, 1.5, 2], [1, 1, 0.5, 0.5, 0], [1.5, 2, 2, 2, 2]];
    rankk = 3;
    rank();
    seihihan();

    if (seihi == 0) {
        text += "追加で5白ダメージ\nカウンターが減少した\n";
        nefi -= 1;

    }

    if (nefi <= 0) {
        text += "JOSHUA:2は脱走した\nカウンター0→3\n";
        nefi = 3;
    }
}

function g170() {
    gene = "170 延々と巡る旅人";
    sase = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
    rankk = 1;
    rank();
    seihihan();
    text += "この幻想体に作業した職員の行動によって「タロット系幻想体」の特殊能力は発動しない（カウンター減少と脱走は除く）\nエンサイクロペディア1ページ目にある「能力詳細ページ」を読むこと\n";



}

function g185() {
    gene = "185 月の魔女";
    sulo = 87;
    sase = [[0.5, 1, 1, 1, 1], [1.5, 1.5, 1.5, 0.5, 0.5], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1]];
    rankk = 4;
    rank();
    seihihan();

    if (sagyona == 2 && seihi == 1) {
        text += "▼職員" + name + "は月に囚われた\nこのまま業務終了、あるいは3回救出失敗で死亡\n任意で救出作業に向かえる\n救出は「特殊作業」で出目の欄に職員" + name + "の正義ランクを記入して行う\n";
    }
    if (irai == 1) {
        daideme1 = kekka[11];
        daideme2 = 6;
        daisu();
        kari = daideme4;
        daideme1 = deme;
        daideme2 = 6;
        daisu();
        kari2 = daideme4;
    if (kari >= kari2) {
        if (kekka[9] >= 4) {
            text += "救出職員正義vs囚われ職員正義\n自分出目：" + kari + "\n相手出目：" + kari2 + "\n救出成功\n両者ギフト入手\n";
        } else {
            text += "救出職員正義vs囚われ職員正義\n自分出目：" + kari + "\n相手出目：" + kari2 + "\n囚われていた職員は死亡した\n";
        }
    } else {
        text += "救出職員正義vs囚われ職員正義\n自分出目：" + kari + "\n相手出目：" + kari2 + "\n救出失敗\n";
        sibou = 0;
    }

    }

}

function g188() {
    gene = "188 絨毯";
    sase = [[2, 2, 2, 2, 2], [1.5, 1.5, 1.5, 1.5, 1.5], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0]];
    rankk = 2;
    rank();
    seihihan();

    if (seihi == 0 && sagyona != 3) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (kekka[10] >= 3 || kekka[11] <= 2) {
        if (sagyona != 3) {
            ransu = Math.floor(Math.random() * 5 + 1);
            if (ransu == 1) {
                nefi -= 1;
            }
        }
    }
    if (nefi <= 0) {
        text += "絨毯脱走した\nカウンター0→1\n";
        nefi = 1;
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
        text += "職員" + name + "は凍傷状態になった\n慎重、正義ランク1低下\n４時間で消える\n";
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

function g246() {
    gene = "246 鬼教官";
    sase = [[1, 1, 1, 0.5, 0.5], [1, 1, 1, 1, 0.5], [2, 2, 2, 1.5, 1.5], [1, 1, 0.5, 0.5, 0]];
    rankk = 5;
    rank();
    seihihan();

    if (seihi == 1) {
        daideme1 = 5;
        daideme2 = 6;
        daisu();
        text += "耐性貫通の" + daideme4 + "赤ダメージ\nHP上限+20\n一日限り、このダメージとバフは一人一回\n詳細は能力詳細ページ参照\n";
        kagohuti = "246";
        kagohuyo();
    }


}

function g255() {
    gene = "255 わんぱくかいじゅう";
    sase = [[1, 1, 0.5, 0.5, 0.5], [2, 2, 2, 2, 2], [1, 1, 1, 0.5, 0.5], [1, 1, 1, 1, 1]];
    rankk = 4;
    rank();
    seihihan();
    text += "作業中にパニックになった場合はカウンターが減少する（手動でお願いします）\n";
    if (kekka[10] == 1) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }

    if (nefi <= 0) {
        text += "わんぱくかいじゅうは脱走した\nカウンター0→2\n";
        nefi = 2;
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

    ransu = Math.floor(Math.random() * 5 + 1);
    if (kekka[7] == 1) {
   if (ransu == 1) {
        sibou = 0;
    }
    }
 

}

function g294() {
    gene = "294 イカロスの火葬";
    sase = [[1, 1, 0.5, 0.5, 0.5], [2, 2, 2, 2, 1.5], [1, 1, 1, 1, 1], [1.5, 1.5, 1.5, 1.5, 1.5]];
    rankk = 5;
    rank();
    seihihan();
    nemax = 4;
    if (sagyona == 1) {
        if (seihi == 1) {
            text += "カウンターが1増加した\n";
            nefi += 1;
        }
    } else {
        if (sagyona == 0 || sagyona == 2 || sagyona == 3) {
            text += "カウンターが減少した\n";
            nefi -= 1;
        }
    }

    if (nefi <= 0) {
        sibou = 0;
        text += "イカロスの火葬は脱走した\nカウンター0→4\n";
        nefi = 4;
    }

    kari = 6 - nefi;
    daideme1 = kari;
    daideme2 = 6;
    daisu();
    text += "追加" + daideme4 + "白ダメージ\nこれでパニックになると死亡しカウンターも減少する\n";
}

function g299() {
    gene = "299 MACRO";
    sase = [[0.5, 0.5, 0, 0, 0], [0, 0, 0, 0.5, 0.5], [0, 0, 0, 0, 01], [0.5, 0.5, 0.5, 0.5, 0.5]];
    rankk = 1;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('000');
    if (kensaku != -1) {
        if (kekka[12].length >= 2) {
            text += "職員" + name + "の加護をひとつ受け取った\n加護欄の右に並んでいるものから順に手動で消去する\n";
        }
    } else {
        if (kekka[12].length >= 1) {
            text += "職員" + name + "の加護をひとつ受け取った\n加護欄の右に並んでいるものから順に手動で消去する\n";
        }
    }
    if (kekka[8] >= 6 || kekka[9] >= 6 || kekka[10] >= 6 || kekka[11] >= 6) {
        if (kurike == 1) {
            text += "ギフトと加護を入手\nその日一日他の幻想体から加護を受け取れなくなる\n";
            kagohuti = "299";
            kagohuyo();
        }
    }

}

function g302() {


    gene = "302　朱殷";

    sulo = 99;


    sase = [[1, 0.5, 0.5, 1, 0], [2, 1.5, 1, 1, 1], [0.5, 1, 1, 0.5, 0.5], [0.5, 1, 1, 1.5, 2]];


    rankk = 5;

    rank();
    seihihan();


    if (sagyona == 0 && seihi == 1) {
        text += "カウンターが減少した\n";
        nefi -= 1;

    }

    if (sagyona == 2 && seihi == 1) {
        text += "カウンターが減少した\n";
        nefi -= 1;

    }

    if (nefi <= 0) {
        text += "朱殷は脱走した。\nカウンター0→2\n";
        nefi = 2;
        daideme1 = 1;
        daideme2 = 80;
        daisu();
        text += daideme4 + "赤ダメージ\n";
        text += "部門内に青藍が収容されている場合、青藍も同時に脱走する。\n青藍は部門にいる職員を1人選び憑依し脱走、憑依された職員は死亡する。\n";
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

function g311() {
    gene = "311 甘美なる女帝";
    sulo = 93;
    sase = [[1.5, 1.5, 1, 1, 0.5], [1.5, 1.5, 2, 2, 2], [1.5, 2, 2, 1.5, 1.5], [1.5, 1.5, 1.5, 1.5, 1.5]];
    rankk = 4;
    rank();
    seihihan();

    if (sagyona == 0 && kurike == 1) {
        daideme1 = 2;
        daideme2 = 10;
        daisu();
        text += "任意の部門の職員のHPを" + daideme4 + "回復させる\n";
    }
    if (seihi == 1 && deme >= 20) {
        text += "部門内職員の最大HPが5減少\nこの効果は重複する\n最大HPが0以下になると眷属「豊穣の子」となり鎮圧後死亡する\n";
    }
    if (seihi == 0) {
        text += "部門内職員の最大HPが5減少\nこの効果は重複する\n最大HPが0以下になると眷属「豊穣の子」となり鎮圧後死亡する\n";
    }
    if (sagyona == 0) {
        kensaku = kekka[12].indexOf('311');
        if (kensaku == -1) {
        kagohuti = "311";
        kagohuyo();
        }

    }
}

function g314() {
    gene = "314 金の太陽";
    peti = 0;

    if (sagyona == 4) {
        text += "金の太陽を装着した\n10分毎にHPSP20回復、RED半減（元々半減だと免疫）\n銀の暴風のいる部門に立ち入ると脱走する（職員は死ぬ）\n";
        kagohuti = "314";
        kagohuyo();
    } else {
        if (sagyona == 5) {
            text += "返却した\n加護欄から「314」を消去\n";
        }
        text += "ツール型の作業は「使用」です\n";
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

function g335() {
    gene = "335 艶然なる三日月";
    sulo = 88;
    sase = [[2, 2, 2, 2, 2], [0, 0, 0, 0, 0], [1.5, 1.5, 1.5, 1.5, 1.5], [1.5, 1.5, 1.5, 1, 1]];
    rankk = 5;
    rank();
    seihihan();
    if (kekka[10] <= 4) {
        text += "▼職員" + name + "は魅了され刀を手にした（脱走）\n鎮圧完了時、HPSPが最大値の50％減少した状態で生還\nHPかSPが半分以下の状態で脱走していた場合は死亡する\n";
    }
    if (sagyona == 1 || seihi == 1) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "部門内で最も自制の低い職員1名が魅了される\n収容室にたどり着くと脱走\n魅了処理参照\nカウンター0→2\n";
        nefi = 2;
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

function g360() {
    gene = "360 伝染鳩";
    sulo = 94;
    sase = [[0, 1.5, 0.5, 2, 1.5], [1, 1.5, 1, 1.5, 2], [0, 0.5, 0.5, 1, 1], [1, 1, 2, 1.5, 0.5]];

    rankk = 4;
    rank();


    seihihan();
    //愛着以外の処理。加護欄が空白かどうかで判断しています。//

    if (sagyona !== 2 && seihi == 0) {

        if (kekka[12][0] == null || kekka[12][1] == null) {
            text += "カウンターが減少した\n";
            nefi -= 1;

        } else {

            text += "職員" + name + "に付与されている共存可能な加護・マーキングが古い順で部門内の1人に伝染する。手動で加護欄に記入して下さい。\n";
        }
    }

    //ここまで//

    //愛着作業時の挙動//

    if (sagyona == 2) {
        text += "職員" + name + "に付与されている共存可能な加護・マーキングが古い順で部門内すべての職員に伝染する。手動で加護欄に記入して下さい。\nカウンターが回復した\n";
        nefi += 1;
    }

    //ここまで//

    //クリファン時のカウンター処理など//

    if (kurike == 1 || fanke == 1) {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 2) {
            text += "カウンターが減少した\n";
            nefi -= 1;
        }
    }



    if (nefi <= 0) {
        text += "伝染鳩は脱走した\nカウンター0→2\n";
        nefi = 2;
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

function g369() {
    gene = "369 白の羊膜";
    sulo = 100;
    sase = [[1.5, 1.5, 1.5, 1, 1], [1, 1, 1, 1, 1], [0.5, 0.5, 0.5, 0.5, 0.5], [2, 2, 2, 2, 2]];
    rankk = 4;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('385');
    if (seihi == 0) {
        text += "追加で5黒ダメージ\n";
        if (kensaku == -1) {
            text += "加護を得た\n1d10のダメージカット\n重複しない\n一度に20以上のダメージを受けると眷属になる（ダメカ含まず）\n";
        }
        kagohuti = "369";
        kagohuyo();
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

function g385() {
    gene = "385 カテドラルの後継者";
    sulo = 101;
    sase = [[1, 1, 1, 1.5, 1.5], [1, 1, 0.5, 0.5, 0.5], [2, 2, 2, 1.5, 1.5], [0.5, 0.5, 1, 1, 1]];
    rankk = 4;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('385');

    if (seihi == 1 && kensaku == -1) {
        text += "職員" + name + "は加護を得た\nHP+10\n";
        kagohuti = "385";
        kagohuyo();

    }
    if (sagyona == 2) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (kekka[7] <= 2 && seihi == 0) {
        sibou = 1;
    }
    if (nefi <= 0) {
        text += "カテドラルの後継者は脱走した\nカウンター0→3\n";
        nefi = 3;
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

function g409() {
    gene = "409 青藍";
    sulo = 102;
    sase = [[1, 1, 1, 1, 1], [0.5, 0.5, 0.5, 1, 1], [0.5, 0.5, 0, 0, 0], [1, 1, 1.5, 1.5, 2]];

    rankk = 5;

    rank();
    seihihan();

    if (sagyona == 1 && seihi == 1) {
        text += "カウンターが減少した\n";
        nefi -= 1;

    }

    if (sagyona == 3 && seihi == 1) {
        text += "カウンターが減少した\n";
        nefi -= 1;

    }

    if (nefi <= 0) {
        text += "青藍は職員に憑依した。青藍は脱走した。同部門に朱殷が収容されている場合、朱殷も誘発脱走した。\nカウンター0→3\n";
        nefi = 3;
        sibou = 0;

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

function g437() {
    gene = "437 庇愛の揺らぎ火";
    sase = [[1.5, 1.5, 1.5, 2, 2], [1.5, 1.5, 1, 1, 1], [1, 0.5, 0.5, 0.5, 0], [0, 0, 0.5, 0.5, 0.5]];
    rankk = 5;
    rank();
    seihihan();

    if (sagyona == 3) {
        text += "職員" + name + "のSPが全回復した\n1時間行動不能\n";
    }
    if (seihi == 1) {
        text += "職員" + name + "は「懐かしい温もり」を受け取った\nダメージカット10\n死亡、パニック時に暖かい温もりを持つ職員全員が「火柱」となる\n";
        kagohuti = "437";
        kagohuyo();
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


function g486() {
    gene = "486 熾天使";
    sase = [[2, 1.5, 1, 0.5, 0], [0, 0.5, 1, 1.5, 2], [1, 1, 1, 1, 1], [2, 0, 1, 0.5, 1.5]];
    rankk = 5;
    rank();
    seihihan();


    if (sagyona == 2 || seihi == 0) {
        pani = 1;
        text += "▼職員" + name + "はパニックに陥った\n";
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

function g469() {
    gene = "469 エガオ";
    sulo = 95;
    sase = [[0.5, 0.5, 1, 1, 1], [0.5, 0.5, 0.5, 0.5, 0.5], [1, 1, 1, 1, 1], [1.5, 1.5, 1.5, 1.5, 1.5]];
    rankk = 5;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('469');
    if (sagyona == 0) {
        if (kensaku == -1) {
            kagohuti = "469";
            kagohuyo();
        } else {
            sibou = 0;
        }
    }
    if (sagyona == 1) {
        text += "次の作業は本能で固定\n";
    }
    if (fanke == 1) {
        text += "職員" + name + "のこの日一日の作業先はエガオのみ可能となる\n";
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

function g537() {
    gene = "537 神の番人";
    sase = [[0.5, 1, 1, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5], [0, 0, 0, 0, 0], [1.5, 1.5, 1.5, 2, 2]];
    rankk = 2;
    rank();
    seihihan();

    if (sagyona == 2 && seihi == 1) {
        kagohuti = "537";
        kagohuyo();
        text += "作業成功率+3\n加護持ちが死亡するとカウンターが減少する\n";
    }
    if (sagyona == 3) {
        text += "カウンターが減少した\n";
        nefi -= 1;

    }
    if (nefi <= 0) {
        text += "神の番人は脱走した\nカウンター0→2\n";
        nefi = 2;
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

function g541() {
    gene = "541 働き者の妖精";
    peti = 0;

    if (sagyona == 4) {
        text += "妖精が幻想体の作業を1度だけ代行する\nステータスは使用職員のランク + 1の範囲で任意の数値を設定\n作業後、妖精は消失する\n";
        sibou = 0;
    } else {
        text += "ツール型の作業は「使用」です\n";
    }

}

function g555() {
    gene = "555 熱烈応援団";
    sase = [[0.5, 0.5, 1, 1, 1], [0, 0, 0.5, 0.5, 0.5], [1, 1, 1, 1, 1.5], [0, 0.5, 0.5, 1, 1.5]];
    rankk = 2;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('555');
    kensaku2 = kekka[12].indexOf('5552');
    kensaku3 = kekka[12].indexOf('5553');
    kensaku4 = kekka[12].indexOf('5554');
    if (sagyona == 1) {
        if (kensaku4 != -1) {

        } else {
            if (kensaku3 != -1) {
                text += "熱烈応援団は職員" + name + "にエールを送った\n";
                kagohuti = "5554";
                kagohuyo();
            } else {
                if (kensaku2 != -1) {
                    ransu = Math.floor(Math.random() * 5 )+ 1;
                    text += "熱烈応援団は職員" + name + "にエールを送った\n勇気と正義が" + ransu + "上昇\n";
                    kagohuti = "5553";
                    kagohuyo();
                } else {
                    if (kensaku != -1) {
                        ransu = Math.floor(Math.random() * 5 )+ 1;
                        text += "熱烈応援団は職員" + name + "にエールを送った\n勇気と正義が" + ransu + "上昇\n";
                        kagohuti = "5552";
                        kagohuyo();
                    } else {
                        ransu = Math.floor(Math.random() * 5 )+ 1;
                        text += "熱烈応援団は職員" + name + "にエールを送った\n勇気と正義が" + ransu + "上昇\n";
                        kagohuti = "555";
                        kagohuyo();
                    }
                }
            }
        }

    }
    if (sagyona == 1 || sagyona == 2) {
        if (kensaku4 != -1) {

        } else {
            if (kensaku3 != -1) {
                ransu = Math.floor(Math.random() * 10 + 1);
                text += "追加で" + ransu + "白ダメージ";
            } else {
                if (kensaku2 != -1) {
                    ransu = Math.floor(Math.random() * 10 + 1);
                    text += "追加で" + ransu + "白ダメージ";
                } else {
                    if (kensaku != -1) {
                        ransu = Math.floor(Math.random() * 10 + 1);
                        text += "追加で" + ransu + "白ダメージ";
                    }
                }
            }
        }

    }
    if (kensaku4 != -1) {
        text += "熱烈応援団は職員" + name + "にエールを送った\n";
        text += "職員" + name + "は呼吸困難に陥った\n";
        sibou = 0;
    }

}

function g554() {
    gene = "554 安堵の篝火";
    peti = 0;
    sulo = 103;
    if (sagyona == 4) {
        text += "最初に使用した職員のみ白黒免疫\nHPSP20回復\n作業5回するまでにこのツールを仕様しなかった場合、部門内全職員殺人性パニック\n詳しくは「能力詳細」ページ参照\n";
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

function g570() {
    gene = "570　想別花";
    sulo = 104;
    sase = [[2, 2, 2, 2, 2], [1, 1, 1, 0.5, 0.5], [1, 1, 1, 1, 1], [2, 1.5, 1, 1, 1]];

    rankk = 5;

    rank();
    seihihan();

    //写真判定
    kensaku = kekka[12].indexOf('570');

    //写真なし、成功で写真付与
    if (kensaku == -1) {
        if (seihi == 1) {
            kagohuti = "570";
            text += "職員" + name + "は写真を撮られた。\n";
            kagohuyo();
            text += "慎重+10\n";
        }
        //ここから写真あり
    } else {
        //写真あり、洞察か愛着成功で死亡、カウンター減少
        if (sagyona == 1 || sagyona == 2) {
            if (seihi == 1) {
                text += "職員" + name + "は写真となって想い出に残る。\n";
                sibou = 0;
                text += "カウンターが減少した\n";
                nefi -= 1;
            }
            //写真あり、抑圧作業で写真破棄、カウンター減少
        } else if (sagyona == 3) {
            text += "職員" + name + "は写真を破り捨てた。\n";
            text += "加護570を手動で削除してください。\n";
            text += "カウンターが減少した\n";
            nefi -= 1;
        }
        //写真処理完了
    }

    //脱走処理
    if (nefi <= 0) {
        text += "想別花は脱走したnカウンター0→3\n";
        nefi = 3;
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

function g601() {
    gene = "601 倖せの意味";
    sulo = 83;
    sase = [[1, 1, 1, 1, 1], [0.5, 0.5, 0.5, 0.5, 0.5], [1.5, 1.5, 1.5, 1.5, 1.5], [1.5, 1.5, 1.5, 1.5, 1.5]];
    rankk = 1;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('666');
    kensaku2 = kekka[12].indexOf('601');
    if (kensaku == -1) {
        if (seihi == 1) {
            if (kensaku2 == -1) {
            text += "職員に加護『ささやかな願い』を与えた\nHPSP+5\n";
            kagohuti = "601";
            kagohuyo();

            }
        }
    }

}

function g609() {
    gene = "609 潜伏する者";
    sase = [[2, 2, 2, 1.5, 1.5], [1.5, 1.5, 1.5, 1, 0.5], [2, 2, 2, 2, 2], [1, 1, 1, 0, 0]];
    rankk = 5;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('609');
    if (kensaku == -1) {
        kagohuti = "609";
        kagohuyo();
    }

    if (sagyona == 2) {
        sibou = 0;
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    kensaku = kekka[12].indexOf('906');
    if (kensaku != -1) {
        text += "潜伏する者は脱走した\n";
    }

    if (nefi <= 0) {
        text += "潜伏する者は脱走した\nカウンター0→1\n";
        nefi = 1;
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

function g612() {
    gene = "612 盲目な恋の味";
    sulo = 105;
    sase = [[0, 0, 0, 0, 0], [2, 2, 2, 2, 2], [0, 0, 0.5, 1, 1.5], [0, 0, 0.5, 1, 1.5]];
    rankk = 4;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('612');
    if (kensaku == -1) {
    text += "一番最初の作業の場合職員にマーキング「初恋」を付与\nダメージ5軽減\n加護欄に「612」を手動で付与してください\n二人目の場合は無視してください\n";

    }
    if (kensaku != -1) {
        seihi = 1;
    } else {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (seihi == 0) {
        kari = kekka[7] * 5;
        text += "最大HPが" + kari + "減少\n0以下になると死亡\n";
    }
    if (nefi <= 0) {
        text += "「初恋」を持つ職員が収容室に呼び出され死亡する\n初恋職員がいない場合なにも起きない\nカウンター0→3\n";
        nefi = 3;
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

function g650() {
    gene = "650 プラニダーナ";
    sase = [[2, 2, 2, 2, 2], [0, 0, 0, 0.5, 1], [0.5, 0.5, 0.5, 1, 1.5], [1, 1, 1.5, 1.5, 1.5]];
    rankk = 5;
    rank();
    seihihan();
    nemax = 3;
    kensaku = kekka[12].indexOf('650');
    if (kensaku == -1) {
        text += "カウンターが減少した\n";
        nefi -= 1;
        if (seihi == 1) {
            text += "職員" + name + "は加護を得た\n被ダメ-5（プラニダーナからのダメージはカットできない）\n";
            kagohuti = "650";
            kagohuyo();
        }
    } else {
        if (seihi == 1) {
        sibou = 0;
        text += "カウンターが1増加した\n";
        nefi += 1;
        }

    }
    if (kekka[7] >= 5) {
        sibou = 0;
        text += "カウンターが1増加した\n";
        nefi += 1;
    }
    if (nefi <= 0) {
        text += "プラニダーナは脱走した\nカウンター0→3\n";
        nefi = 3;
    }
}

function g666() {
    gene = "666 微睡む極夜";
    sulo = 84;
    sase = [[0, 1.5, 1.5, 1.5, 1.5], [1.5, 1.5, 0.5, 1, 1], [0, 0, 0, 0, 0], [1.5, 0.5, 1.5, 1, 1]];
    rankk = 5;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('601');
    kensaku2 = kekka[12].indexOf('666');
    if (kensaku == -1) {
        if (seihi == 1) {
            if (kensaku2 == -1) {
                text += "職員に加護『夜天の導き』を与えた\n自制正義+25\nHPSPを合計30減らすと職員は眷属《覚醒切望せし信仰者》に変化する。\n";
                kagohuti = "666";
                kagohuyo();

            }
        }
    } else {
        if (seihi == 1) {
        text += "『ささやかな願い』と『夜天の導き』は相殺され、対消滅した\n加護欄から「601」を消去する\n";

            

        }
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

function g704() {
    gene = "704 歪な切り札";
    peti = 0;

    if (sagyona == 4) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            text += "スペードのA\n作業成功率+10、与ダメ+10\nエンサイクロペディア1ページ目の詳細ページ参照\nこのツールは返却が可能\n";
        }
        if (ransu == 2) {
            text += "スペードのAでもQでもないカード\n作業成功率+5、与ダメ+5\nエンサイクロペディア1ページ目の詳細ページ参照\nこのツールは返却が可能\n";
        }
        if (ransu == 3) {
            text += "スペードのQ\n▼職員" + name + "はパニックに陥った\n";
            pani = 1;
        }
    } else {
        if (sagyona == 5) {
            text += "ツールを返却した\n";
        } else {
            text += "ツール型の作業は「使用」です\n";

        }
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
   


    seihihan();
    if (sagyona == 2) {
        text = "観測レベルが１の場合80黒ダメージ\nこの幻想体の愛着は依頼に置き換わっているので特殊能力等で強制的に愛着を選んだ場合を除き作業を決め直してください。\n";
    }
    if (irai == 1) {
        text += "依頼の対価は依頼職員に80黒ダメージ\n依頼前に発砲宣言をしていない場合は不発\n5回目の依頼でランダムな幻想体のカウンター減少\n";
    } else {
    if (seihi == 0) {
        text += "カウンター減少\n";
        if (nefi == 1) {
            text += "部門内のランダムな職員1名に80黒ダメージ\n";
        }
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

function g777() {
    gene = "777 堕天道様";
    sulo = 85;
    sase = [[2, 1.5, 1, 0.5, 0], [0, 0.5, 1, 1.5, 2], [2, 1.5, 1, 0.5, 0], [0, 0.5, 1, 1.5, 2]];
    rankk = 5;
    rank();
    seihihan();

    if (kekka[10] == 1) {
        kari = 2;
        kari2 = 4;
    }
    if (kekka[10] == 2) {
        kari = 4;
        kari2 = 8;
    }
    if (kekka[10] == 3) {
        kari = 6;
        kari2 = 12;
    }
    if (kekka[10] == 4) {
        kari = 8;
        kari2 = 16;
    }
    if (kekka[10] == 5) {
        kari = 10;
        kari2 = 20;
    }
    if (kekka[10] == 6) {
        kari = 12;
        kari2 = 24;
    }

    if (deme <= kari) {
        text += "次の作業の作業成功率-10\nカウンター1減少\n";
        nefi -= 1;
    }
    if (deme >= kari2) {
        text += "次の作業の作業成功率+10\n";
        if (nefi <= 3) {
            text += "\nカウンター1増加\n";
            nefi += 1;
        }
    }

    if (nefi <= 0) {
        text += "堕天道様は脱走した\nカウンター0→4\n";
        nefi = 4;
    }

}

function g801() {
    gene = "801 欲望の凄い収容室";
    sulo = 106;
    sase = [[1.5, 1.5, 1, 1, 0.5], [1.5, 1, 1, 1, 0], [0, 0, 0.5, 1, 1], [2, 2, 2, 2, 2]];
    rankk = 4;
    rank();
    seihihan();

    if (kari801 == 1 || irai == 1) {
        kari801 = 0;
        kekka[3] = "救出";
        daideme1 = kekka[10];
        daideme2 = 6;
        daisu();
        if (kekka[10] == 1) {
            kari = 3;
        }
        if (kekka[10] == 2) {
            kari = 6;
        }
        if (kekka[10] == 3) {
            kari = 9;
        }
        if (kekka[10] == 4) {
            kari = 12;
        }
        if (kekka[10] == 5) {
            kari = 15;
        }
        if (kekka[10] == 6) {
            kari = 18;
        }
        if (kekka[10] == 7) {
            kari = 21;
        }
        if (kekka[10] == 8) {
            kari = 24;
        }
        if (kekka[10] == 9) {
            kari = 27;
        }
        if (kekka[10] == 10) {
            kari = 30;
        }
        text += "出目：" + daideme4 + "\n";
        if (daideme4 >= kari) {
            text += "救出成功\n救出した側が「攻」救出された側が「受」となる\n互いに「番」になりギフト入手\n二人の作業成功率+15\n他に番がいる者が救出した場合は番にならない\n";
        } else {
            text += "救出失敗\n囚われた職員、救出しに来た職員共に部屋から出ず消失する\n";
            sibou = 0;
        }
    } else {
    if (seihi == 0) {
        text += "▼職員" + name + "は魅了され収容室から出られなくなった\n全ての作業が「救出」になる\n";
        kari801 = 1;
    }
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

function g880() {
    gene = "880 銀の暴風";
    sulo = 89;
    sase = [[1.5, 1.5, 1.5, 1.5, 1.5], [1.5, 1.5, 1, 1, 1], [2, 2, 2, 2, 2], [1, 1, 1, 1.5, 2]];
    rankk = 4;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('314');

    if (seihi == 0) {
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu == 1) {
            text += "カウンターが減少した\n";
            nefi -= 1;
        }
    }


    if (kensaku != -1) {
        text += "金の太陽は脱走した\n";
        nefi = 0;
        sibou = 0;
    }
    if (nefi <= 0) {
        text += "銀の暴風は脱走した\n金の太陽を装着している職員がいる場合はこちらも脱走する\nカウンター0→2\n";
        if (kensaku != -1) {
            text += "『大災害』が発生した\n部門内全職員パニック\n銀の暴風と金の太陽は収容室に戻った\n";
        }
        nefi = 2;
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
    if (nefi <= 0) {
        text += "想起の卵眼は脱走した\n「瞳」を持つ職員は全員死亡し「イデアの雛」に変化した\nカウンター0→3\n";
        nefi = 3;
    }


}

function g890() {
    gene = "890 愛";
    sase = [[2, 2, 2, 2, 2], [0, 1, 1, 0.5, 1], [0.5, 0.5, 1, 1, 1], [1.5, 1.5, 1.5, 1.5, 1.5]];
    rankk = 5;
    rank();
    seihihan();

    if (seihi == 0) {
        text += "職員" + name + "が15分以内に再入室しなかった場合、職員" + name + "は死亡し、愛は脱走する\n";
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

function g905() {
    gene = "905 アブノーマリティブロイラー";
    peti = 0;

    kensaku = kekka[12].indexOf('905');
    if (sagyona == 4) {
        if (kensaku == -1) {
            text += "この日一日『何が起こったとしても』死亡しない\n一日の終わりにエンサイクロペディア1ページ目にある「能力詳細ページ」を読むこと\n";
            kagohuti = "905";
            kagohuyo();
        } else {
            text += "この日1日、ステータス全ランクEX\n";
        }

    } else {
        text += "ツール型の作業は「使用」です\n";
    }

}

function g906() {
    gene = "906 星を歩く者";
    sase = [[1, 1, 1, 0.5, 0.5], [0.5, 1, 1, 1, 1.5], [2, 2, 2, 1.5, 1.5], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('906');
    if (kensaku == -1) {
        kagohuti = "906";
        kagohuyo();
    }

    if (sagyona == 3) {
        sibou = 0;
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    kensaku = kekka[12].indexOf('609');
    if (kensaku != -1) {
        text += "星を歩く者は脱走した\n";
    }
    if (nefi <= 0) {
        text += "星を歩く者は脱走した\nカウンター0→1\n";
        nefi = 1;
    }


}

function g907() {
    gene = "907 少年の日の思い出";
    sase = [[1, 1, 1, 0.5, 0.5], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 0.5, 0.5]];
    rankk = 2;
    rank();
    seihihan();

    text += "エンサイクロペディア1ページ目にある「能力詳細ページ」を読むこと\nまた、作業職員が部門内で最もステータスの低い職員の場合はギフト入手\n";


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

function g972() {
    gene = "972 うしまけた？";
    sulo = 86;
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 0.5, 0], [1, 0.5, 0, 0, 0], [2, 2, 2, 2, 2]];
    rankk = 4;
    rank();
    seihihan();

    if (sagyona == 3) {
        text += "職員" + name + "は解体・加工された\n";
        sibou = 0;
    }
    if (sagyona == 0) {
        text += "何かの肉の入ったパックを渡された\n任意で食べられる\n食べると1日HP+25\n重複不可\n";
    }

}

function g975() {
    gene = "975 蛇焦がれの龍";
    sase = [[1, 1, 0.5, 0.5, 0.5], [2, 2, 1.5, 1.5, 1], [2, 2, 2, 2, 2], [1.5, 1, 1, 1, 1]];
    rankk = 4;
    rank();
    seihihan();

    kagohuti = "9752";
    kagohuyo();

    if (seihi == 0) {
        ransu = Math.floor(Math.random() * 5 + 1);
        if (ransu == 1) {
            text += "カウンターが減少した\n";
            nefi -= 1;
        }
    }
    kensaku = kekka[12].indexOf('9762');
    if (kensaku != -1) {
        text += "カウンターが2減少した\n";
        nefi -= 2;
    }

    if (nefi <= 0) {
        sibou = 0;
        text += "蛇焦がれの龍は脱走した\nカウンター0→3\n";
        nefi = 3;
    } else {
        if (fanke == 1) {
            sibou = 0;
            text += "蛇焦がれの龍は脱走した\n";
        }
    }
}


function g976() {
    gene = "976 鳥居に住まう大蛇";
    sase = [[2, 2, 2, 2, 2], [2, 1.5, 1, 1, 1], [0.5, 0.5, 0.5, 0, 0], [2, 1.5, 1, 0.5 ,0.5]];
    rankk = 4;
    rank();
    seihihan();

    kagohuti = "9762";
    kagohuyo();

    if (seihi == 0) {
        ransu = Math.floor(Math.random() * 5 + 1);
        if (ransu == 1) {
            text += "カウンターが減少した\n";
            nefi -= 1;
        }
    }
    if (sagyona == 2 && seihi == 1) {
        kagohuti = "976";
        kagohuyo();
        text += "SP-10、正義+15\n";
    }
    kensaku = kekka[12].indexOf('9752');
    kensaku2 = kekka[12].indexOf('976');
    if (kensaku != -1) {
        text += "カウンターが2減少した\n";
        nefi -= 2;
        if (nefi >= 1 && kensaku2 != -1) {
            sibou = 0;
            text += "鳥居に住まう大蛇は脱走した\n";
        }
    }
    if (nefi <= 0) {
        text += "鳥居に住まう大蛇は脱走した\nカウンター0→3\n";
        nefi = 3;
    }
}

function g977() {
    gene = "977 地獄を駆ける駿馬";
    sase = [[1.5, 1, 1, 0.5, 0.5], [1, 1, 1, 0.5, 0], [2, 1.5, 1.5, 1, 1], [2, 1.5, 1, 1, 1]];
    rankk = 3;
    rank();
    seihihan();

    if (sagyona == 2 && seihi == 0) {
        sibou = 0;
    }
    if (seihi == 0) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "地獄を駆ける駿馬は脱走した\nカウンター0→3\n";
        nefi = 3;
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

function g988() {
    gene = "988 貴方のバロット";
    sulo = 107;
    sase = [[0.5, 0.5, 0.5, 1, 1], [0.5, 0.5, 0.5, 0.5, 0.5], [0, 0, 0, 0.5, 0.5], [1, 1, 1, 1, 1]];
    rankk = 3;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('988');
    if (seihi == 1) {
        if (kensaku == -1) {
            text += "職員" + name + "はバロットを手にした\n";
            if (kekka[8] <= 2) {
                text += "しかし何もできなかった\n";
            } else {
                text += "バロットを口にした\nただし二回目以降だった場合は口にしない\nHPSP20回復\nHP上限+10\n鎮圧時SP-10、与ダメ×1.25、移動ターン+1\n鎮圧後30分行動不能\n";
                kagohuti = "988";
                kagohuyo();
            }
        }
    }
    if (fanke == 1) {
        text += "カウンターが減少した\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "貴方のバロットは脱走した\nカウンター0→3\n";
        nefi = 3;
    }
}

function g990() {
    gene = "990 概要";
    sulo = 96;
    sase = [[0.5, 0.5, 1, 0.5, 0.5], [0, 0.5, 1, 1.5, 2], [0, 0.5, 0.5, 1, 1], [1, 1, 1.5, 1.5, 1.5]];
    rankk = 5;
    if (t990 == 0) {
        t990 = 1;
        seiti990 = 15;
        if (kekka[7] >= 5) {
            text += "概要のランクがZAYINに変化した\nこのランクではカウンターは存在しない\n";
            keikenti990 = 2;
            jou990 = 6;
            nefi = 0;
        }
        if (kekka[7] == 4) {
            text += "概要のランクがTETHに変化した\nこのランクではカウンターは存在しない\n";
            keikenti990 = 4;
            jou990 = 12;
            nefi = 0;
        }
        if (kekka[7] == 3) {
            text += "概要のランクがHEに変化した\nこのランクではカウンターは存在しない\n";
            keikenti990 = 6;
            jou990 = 18;
            nefi = 0;
        }
        if (kekka[7] == 2) {
            text += "概要のランクがWAWに変化した\n";
            keikenti990 = 8;
            jou990 = 24;
            nefi = 3;
        }
        if (kekka[7] == 1) {
            text += "概要のランクがALEPHに変化した\n";
            keikenti990 = 10;
            jou990 = 30;
            nefi = 3;
        }
    }
    seiti = seiti990;
    keikenti = keikenti990;
    jou = jou990;
    seihihan();

    if (jou == 24 || jou == 30) {
        if (kurike == 1 || fanke == 1) {
            text += "カウンターが減少した\n";
            nefi -= 1;
        }
        if (nefi <= 0) {
            text += "概要は脱走した\nカウンター0→3\n";
            nefi = 3;
        }
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



