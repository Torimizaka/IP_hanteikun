
window.onload = function onLoad() {
    target = document.getElementById("output");
    target.innerHTML = "Ver1.4cfix 公式垢のプロフに書いてあるバージョンと異なる際は更新してください";
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
    tt12 = "";
    ketext = document.hanteisuru['kekka'].value;
    daidai = 1;
    daidai2 = 6;
    co1 = [];
    co2 = [];
    co3 = [];
    co4 = [];
    co5 = [];

    gtA = [001,018, 031, 063, 125, 201, 317,365,464, 614,710, 722,752, 901, 915,118,521,042,623,330,019,725,849,002,021,106,361,818];
    gtB = ["023",091,142,192,214,371,528,620,810,821,829,903];
    gtTA = [432, 566, 703,635,020,623,330,007,071,540];


    genra1 = [];
    genra2 = [];
    genra3 = [];
    genra4 = [001,002,018,019,021,"023", 031,042, 063,091,106, 118,125,142,192, 201,214, 317,330,361,365,371,464,521,528, 614,620,623,710, 722,725,752,810,818,821,829,849, 901,903, 915];

    con = [0, 2, 0, 0, 2, 1, 1, 0, 1, 2, 2, 2, 3, 0, 0,0,3,1,2,0,0,2,0,2,3,3,0,3,0,3,0,0,2,2,0,1,2,3,1,3];
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
    if (tt1 == 018 || tt1 == "018") {
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
    if (tt1 == 019) {
        tt11 = con[20];
    }
    if (tt1 == 725) {
        tt11 = con[21];
    }
    if (tt1 == 849) {
        tt11 = con[22];
    }
    if (tt1 == 002) {
        tt11 = con[23];
    }
    if (tt1 == 021) {
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
    if (tt1 == 091) {
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
    if (tt1 == 432 || tt1 == 566 || tt1 == 703 ||tt1==635 ||tt1==020 || tt1==310 || tt1==099 ||tt1==007 ||tt1==071 ||tt1==540) {
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
    textset();
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
    textset();
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
    textset();
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
    textset();
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
    textset();
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

    let checkbox = document.querySelectorAll('input[type="checkbox"]');
    if (checkbox[0].checked) {
        genra1 = genra1.concat(gtA);
        genra3 = genra3.concat(gtA);
    }
    if (checkbox[1].checked) {
        genra1 = genra1.concat(gtB);
        genra3 = genra3.concat(gtB);
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

    tinp = (tin_Z + tin_T + tin_H + tin_W + tin_A) * 30;

    gen1 = 320 * gen_Z;
    gen2 = 440 * gen_T;
    gen3 = 560 * gen_H;
    gen4 = 880 * gen_W;
    gen5 = 1000 * gen_A;

    genpo = gen1 + gen2 + gen3 + gen4 + gen5;
    yokupo = "";
    yokupp = 0;
    if (yokusei == 1) {
        yokupo = "抑制ポイント：1000\n";
        yokupp = 1000;
    }

    summ = sagyopo + tinp + genpo + yokupp;

    document.rizalt['rizalt2'].value = "作業ポイント：" + sagyopo + "\n鎮圧ポイント：" + tinp + "\n幻想体化：" + genpo + "\n" + yokupo + "合計ポイント：" + summ;

}

function keisantyu() {
    seigi = parseInt(document.tinatusuru['seigi'].value);
    kyori = parseInt(document.tinatusuru['kyori'].value);
    kyori2 = parseInt(document.tinatusuru['kyori2'].value);
    taisei = parseInt(document.tinatusuru['taisei'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 1;
    katasa = 1;
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
    kuri = Math.floor(hanketu*1.25);
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

    document.tinatusuru['hanketu'].value = "出目" + demememe + kuritxt+ "：与ダメージ" + hanketu ;

}

function keisantyu2() {
    seigi = parseInt(document.tinatusuru2['seigi'].value);
    kyori = parseInt(document.tinatusuru2['kyori'].value);
    kyori2 = parseInt(document.tinatusuru2['kyori2'].value);
    taisei = parseInt(document.tinatusuru2['taisei'].value);
    kyoridame = 1;
    hanketu = 1;
    dememe = 1;
    demememe = 1;
    katasa = 1;
    for (i = 0; i < seigi; i++) {
        dememe = Math.floor(Math.random() * 6 );
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

    document.tinatusuru2['hanketu'].value = "出目" + demememe + kuritxt + "：与ダメージ" + hanketu;

}

function hanteityu() {
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
            kekka[i] = Number(tete[1]);
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
        sagyona = 0;
        keina = "勇気：";
    } else {
        if (kekka[3] == "洞察") {
            sagyona = 1;
            keina = "慎重：";
        } else {
            if (kekka[3] == "愛着") {
                sagyona = 2;
                keina = "自制：";
            } else {
                if (kekka[3] == "抑圧") {
                    sagyona = 3;
                    keina = "正義：";
                } else {
                    if (kekka[3] == "返却") {
                        sagyona = 5;
                    } else { sagyona = 4; }}
            }
}
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
                fanke = 0;
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
                document.hanteisuru[nana].value = "";
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
            }
        } else {
            dame = (rankk - kekka[4]) * 5;
            if (dame >= 1) {
dametxt = "\n" + dame + "%ダメージ";
            }
            
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

    tt11 = kekka[13];
    textset();

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


function g001() {
    gene = "001 あまたの善とひとつ分の愛";
    sase = [[1, 1, 1, 1, 1], [0.5, 0.5, 0.5, 1, 1], [0.5, 0.5, 0, 0, 0], [1, 1, 1.5, 1.5, 2]];

    rankk = 1;
    rank();
        seikou = seiti * sase[sagyona][sagyose3];

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }
    if (seihi == 1) {
        daideme1 = 2;
        daideme2 = 6;
        daisu();
        text = "SP"+daideme4+"回復\n";
    }

    if (sase[sagyona][sagyose3] ==2) {
        text = "職員の自制-5\n";
    }
    con[0] = kekka[13];
}

function g002() {
    gene = "002 狂人の抜け殻";
    sase = [[0, 0, 0, 0.5, 0.5], [1, 1, 1.5, 1.5, 1.5], [2, 2, 2, 2, 2], [1, 1, 1, 1, 1]];
 

    rankk = 3;
    rank();
   seikou = seiti * sase[sagyona][sagyose3];

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    if (seihi == 0) {
        text += "カウンター減少\n";
        if (kekka[13] == 1) {
            text += "狂人の抜け殻は脱走した。\n";
        }
        kekka[13] -= 1;
    }
    if (kekka[13] == 0) {
        text += "カウンター0→2\n";
        kekka[13] = 2;
    }

    con[23] = kekka[13];
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

function g018() {
    gene = "018 鬱々たる胞子";
    sase = [[1, 1, 1, 1.5, 1.5], [0.5, 0.5, 0, 0,0], [1, 1,0.5,0.5, 0.5], [1.5, 1.5, 2, 2, 2]];


    rankk = 1;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    if (seihi == 1) {
        text += "▼職員"+name+"の頭に青白いキノコが生えた\n5分毎にSP1d6回復\n20分後に消失\n";
    }

    if (kekka[11] >= 3) {
        if (kekka[13] == 1) {
            text += "カウンター減少\n部門内全域に紫色のキノコが生える\n5分毎に部門内の職員のSPが1d6減少\n再度鬱々たる胞子に作業するまで続く\n";
            kekka[13] -= 1;
        } else {
            text += "カウンター減少\n";
            kekka[13] -= 1;
        }
        
    }
    con[1] = kekka[13];
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
        if (ransu == 3 || ransu==2) {
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
    sase = [[1.5, 1.5, 1, 1.5, 1.5], [0, 2, 2, 2, 2], [2, 2, 2, 0.5, 2], [1.5, 1, 1.5, 1.5, 1.5]];


    rankk = 4;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    if (seihi == 0) {
        text += "カウンター減少\n";
        if (kekka[13] == 1) {
            text += "旭は脱走した。\n";
        }
        kekka[13] -= 1;
    }
    if (kekka[13] == 0) {
        text += "カウンター0→3\n";
        kekka[13] = 3;
    }
    con[24] = kekka[13];
}

function g023() {
    gene = "023 とっておきのハーブティー";
    sase = [[0.5, 0.5, 0.5, 0.5, 0.5], [1, 1, 1.5, 1.5, 1.5], [1, 1, 0.5, 0.5, 0], [2, 2, 2, 2, 2]];

    rankk = 3;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

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
        text += "この次に入室した職員はSPが" + daideme4 + "回復する\n";
    }

    con[28] = kekka[13];
}

function g031() {
    gene = "031 溶け出す夜";
    sase = [[1, 1, 1, 1.5, 1.5], [0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 1, 1], [1.5, 1.5, 1.5, 2, 2]];


    rankk = 2;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    kensaku = kekka[12].indexOf('031');
    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }
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
    con[2] = kekka[13];
}

function g042() {
    gene = "042 ヘベルチカ";
    sase = [[2, 2, 2, 2, 2], [0, 0, 0, 0, 0], [1.5, 1.5, 1.5, 1.5, 1], [2, 1.5, 1.5, 1, 1]];


    rankk = 3;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    kensaku = kekka[12].indexOf('042');
    kensaku2 = kekka[12].indexOf('0421');


    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }
    if (kensaku == -1) {
        if (kensaku2 != -1) {
            sibou = 0;
            text = "▼職員" + name + "はIP-T-05-042-1となり、脱走した。\n";
        } else {
            text = "職員" + name + "の加護欄に「042」を記入\n職員" + name +"以外の部門内職員全員の加護欄に「0421」を記入\n042と0421は蘇生後も残る、翌日には消える\n";

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

    if (kekka[13] == 0) {
        if (sagyona == 1) {
            pani = 1;
            text += "\n▼職員" + name + "はパニックに陥った\n";

            text += "カウンター0→1\n";
            kekka[13] = 1;
        }
    } else {
    if (seihi == 0) {
        text += "\nカウンター減少\n";
        kekka[13] -= 1;
 
    }
    }
    con[17] = kekka[13];
}

function g063() {
   
    gene = "063 人間の貪欲さを表した何か";
    sase = [[1, 1, 1, 1.5, 1.5], [1.5, 1.5, 1, 0.5, 0.5], [2, 2, 2, 2, 2], [0.5, 0.5, 0.5, 0, 0]];

    kensaku = kekka[12].indexOf('063');
    kensaku2 = kekka[12].indexOf('0631');

    rankk = 1;
    rank();
    
    seikou = seiti * sase[sagyona][sagyose3];
    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }
    if (kensaku2 != -1) {
        sibou = 0;
    } else {

        if (seihi == 0) {

            if (kensaku != -1) {
                text += "加護に0631を入れる\n";
                tt12 += ",0631";
                for (i = 0; i < 5; i++) {
                    kensaku3 = namera[i].indexOf(name);
                    if (kensaku3 != -1) {
                        nana2 = i + 1;
                        nana = "se" + nana2 + "8";
                        document.hanteisuru[nana].value += ",0631";
                    }
                }
            } else {
                text += "加護に063を入れる\n";
                tt12 += ",063";
                for (i = 0; i < 5; i++) {
                    kensaku3 = namera[i].indexOf(name);
                    if (kensaku3 != -1) {
                        nana2 = i + 1;
                        nana = "se" + nana2 + "8";
                        document.hanteisuru[nana].value += ",063";
                    }
                }
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
    con[3] = kekka[13];
}

function g091() {
    gene = "091 火猿の壺";
    sase = [[0, 0, 0, 0, 0], [0.5, 0.5, 0.5, 0, 0], [2, 2, 2, 2, 2], [1.5, 1.5, 1, 1, 1]];

    rankk = 1;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    if (sagyona == 0) {
        daideme1 = 1;
        daideme2 = 6;
        daisu();
        text += "▼職員" + name + "のHPが" + daideme4 + "回復した\nカウンターが下がった\n";
        kekka[13] -= 1;
    }

    if (sagyona == 2) {
        text = "カウンターが0になった\n";
        kekka[13] = 0;
    }

    if (kekka[13] == 0) {
        sibou = 0;
        text += "カウンター0→3\n";
        kekka[13] = 3;
    }
    con[29] = kekka[13];
}


function g019() {
    gene = "019 離別の音";
    sase = [[1, 1.5, 1.5, 2, 2], [0, 0, 0.5, 2, 2], [0, 1.5, 1.5, 0, 0], [0, 0.5, 1, 1, 1.5]];


    rankk = 3;
    rank();
    kensaku = kekka[12].indexOf('019');
    seikou = seiti * sase[sagyona][sagyose3];
    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }
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

    con[20] = kekka[13];
}

function g071() {
    gene = "071 反転する化粧台";
    peti = 0;
    kensaku = kekka[12].indexOf('071');
    kensaku2 = kekka[12].indexOf('0711');
    kensaku3 = kekka[12].indexOf('0712');
    kensaku4 = kekka[12].indexOf('0713');

    if (sagyona == 4) {
        text = "職員"+name+"は性転換した。\nHPSPの上限+10\n二回目以降はHPSP上昇のみ\n";

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

function g099() {
    gene = "099 ワンゲーム";
    peti = 0;

    if (sagyona == 4) {
        ransu = Math.floor(Math.random() * 5 + 1);
        if (ransu ==1) {
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


function g106() {
    gene = "106 肉喰む灰狼";
    sase = [[0, 0, 0, 0, 0], [2, 2, 1.5, 1.5, 1.5], [1, 1, 1, 1.5, 1.5], [1, 1, 1.5, 1.5, 1.5]];


    rankk = 4;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    if (sagyona == 1 && seihi == 0) {
        sibou = 0;
    } else {

    if (seihi == 0 || sagyona == 0) {
        text += "職員"+name+"に腐肉の証が付与された。正義+20\nこの職員の加護欄に「106」を記入\nHP10ダメージ\n";
        tt12 += ",106";
        for (i = 0; i < 5; i++) {
            kensaku3 = namera[i].indexOf(name);
            if (kensaku3 != -1) {
                nana2 = i + 1;
                nana = "se" + nana2 + "8";
                document.hanteisuru[nana].value += ",106";
            }
        }
    }
    }
    con[25] = kekka[13];
}

function g118() {
    gene = "118 親愛なる貴方へ";
    sase = [[0, 0, 0.5, 0.5, 0.5], [0.5, 0.5, 1, 1, 1], [0, 0, 0, 0, 0], [2, 2, 2, 2, 2]];


    rankk = 2;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    kensaku = kekka[12].indexOf('118');
    kensaku2 = kekka[12].indexOf('1181');

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    if (seihi == 1) {
        text += "職員" + name + "のHPとSPが10回復した。\n";
    } else {
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu <=4) {
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
    con[15] = kekka[13];
}


function g125() {
    gene = "125 灼けつく金星";
    sase = [[1, 1, 1, 0.5, 0.5], [2, 2, 2, 2, 2], [0.5, 0.5, 0, 0, 0], [0.5, 0.5, 1, 1.5, 1.5]];

    rankk = 2;
    rank();

     seikou = seiti * sase[sagyona][sagyose3];
   

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }
    if (seihi == 0 || kekka[11] >= 2) {

        text += "カウンターが減少した。\n";
        
        if (kekka[13] == 1) {
            text += "灼けつく金星は脱走した。\n";
        }
        kekka[13] -= 1;
        if (kekka[13] == 0) {
            text += "カウンター0→2\n";
            kekka[13] = 2;
        }
    }
    if (kekka[9] <= 3) {
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu == 6) {
            text += "灼けつく金星は脱走した。\n";
        }

    }
    con[4] = kekka[13];
}

function g142() {
    gene = "142 待ち人帰らず";
    sase = [[1, 1, 1, 1, 1], [0, 0, 0.5, 0.5, 0.5], [0.5, 0.5, 1, 1, 1], [2, 2, 2, 2, 2]];

    rankk = 4;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

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
        text += "飴玉を貰った\n▼職員"+name+"のHPが"+tet1+"回復し、SPが"+daideme4+"減少した\n";
    }

    con[30] = kekka[13];
}

function g192() {
    gene = "192 からの揺りかご";
    sase = [[0.5, 0.5, 0.5, 1, 1], [0, 0, 0.5, 0.5, 1], [0, 0.5, 0.5, 0.5, 1], [1, 1.5, 1.5, 2, 2]];

    rankk = 2;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }
    daideme1 = 1;
    daideme2 = 4;
    daisu();
    text = "「最高に幸福な晩餐を！」のEGO、ギフトいずれかを装備している場合HPSP"+daideme4+"回復\n";
    if (seihi == 0) {
        if (sagyona == 0 || sagyona==2) {
            sibou = 0;
        }
    }

    con[31] = kekka[13];
}

function g201() {
    gene = "201 柔らかい妖精";
    sase = [[1, 1, 1, 1.5, 1.5], [1, 1, 0.5, 0.5, 0.5], [0.5, 0.5,0, 0, 0], [2, 2, 2, 1.5, 1.5]];


    rankk = 2;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];


    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }
    if (sagyona == 2) {
        daideme1 = 1;
        daideme2 = 4;
        daisu();
        if (daideme4 == 1) {
            ttt = "本能";
        } else {
            if (daideme4 == 2) {
                ttt = "洞察";
            } else {
                if (daideme4 == 3) {
                    ttt = "愛着";
                } else {
                    if (daideme4 == 4) {
                        ttt = "抑圧";
                    } else {

                    }
                }
            }
        }
        daideme1 = 1;
        daideme2 = 5;
        daisu();

        text += ttt+"の作業に"+daideme4+"のバフ\n柔らかい妖精脱走までの猶予リセット\n";
    }
    if (sagyona == 3) {
        text = "柔らかい妖精は脱走した。\n";
    }

    con[5] = kekka[13];
}

function g214() {
    gene = "214 ちょっとおかしなショコラティエ";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];

    rankk = 3;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }
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
            kekka[13] -= 1;
            if (kekka[13] == 0) {
                text += "ちょっとおかしなショコラティエは脱走した\nカウンター0→2\n";
                kekka[13] = 2;
            }
        }
    }

    if (kekka[8] >= 5 || kekka[10] <= 2) {
        sibou = 0;
    }

    con[32] = kekka[13];
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
        text = "▼職員"+name+"のSPが5回復した。\n";
        }


    } else {
        text = "ツール型の作業は「使用」か「返却」です\n"; 

    }

}

function g317() {
    gene = "317 JOSHUA";
    sase = [[1, 1, 1, 1, 1], [0, 0, 0.5, 1, 2], [1, 1, 1, 0.5, 1], [0.5, 1, 1, 1, 1]];


    rankk = 1;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];

    ransu = Math.floor(Math.random() * 4 + 1);
    if (ransu == 1) {
        text += "カウンター減少\n0になった場合職員に「印」が付く\n印職員は3分毎にSP1d3回復、ジョシュアとなる\n30分で印は消える";

        text += "カウンター0→1\n";
    }

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    con[6] = kekka[13];
}

function g330() {
    gene = "330 最高に幸福な晩餐を！";
    sase = [[1, 1, 1, 1, 1], [2, 2, 1.5, 1.5, 1.5], [0.5, 0.5, 0.5, 0, 0], [1, 1, 1, 1, 0.5]];


    rankk = 3;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }
    if (seihi == 1) {
        text += "SPが満タンの場合、職員"+name+"の最大HPが+10\n一日一回、翌日には消える\n";
    }
    if (sagyona == 3) {
        text += "カウンターが減少した\n最高に幸福な晩餐を！は変化した\n";
        if (kekka[13] == 1) {
            sibou = 0;
            text += "最高に幸福な晩餐を！は脱走した\n";
        }
        kekka[13] -= 1;
        if (kekka[13] == 0) {
            text += "カウンター0→2\n";
            kekka[13] = 2;
        }
    } else {
        if (kekka[13] == 1) {
            text += "カウンターが増加した\n元の姿に戻った\n";
            kekka[13] = 2;
        }
        
    }
    
    con[18] = kekka[13];
}

function g361() {
    gene = "361 不可視の花";
    sase = [[1, 1, 1, 0.5, 0.5], [1.5, 1.5, 0.5, 0.5, 0], [0.5, 0.5, 1, 1, 1.5], [0.5, 1, 1.5, 1.5, 1.5]];


    rankk = 3;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    kensaku = kekka[12].indexOf('361');

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    if (sagyona == 2) {
        text += "職員"+name+"はイチジクの実を食べた\n鎮圧時、与ダメージ+3\n一度に20以上のHPダメージを受けると死亡\nこの職員の加護欄に「361」を記入\n";
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

    con[26] = kekka[13];
}

function g365() {
    gene = "365 ぼうりょくぐるみ";
    sase = [[1, 1, 1, 1, 1], [0, 0, 0.5, 1, 2], [1, 1, 1, 0.5, 1], [0.5, 1, 1, 1, 1]];


    rankk = 1;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    kensaku = kekka[12].indexOf('365');
    kensaku2 = kekka[12].indexOf('3651');
    kensaku3 = kekka[12].indexOf('3652');
    kensaku4 = kekka[12].indexOf('3653');


    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

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


    con[7] = kekka[13];

}

function g371() {
    gene = "371 恒";
    sase = [[1, 1, 1.5, 1.5, 1.5], [2, 2, 2, 2, 2], [2, 2, 1.5, 1.5, 1.5], [0, 0, 0.5, 0.5, 0.5]];

    rankk = 4;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    if (seihi == 0) {
        text += "カウンターが減少した\n";
        kekka[13] -= 1;
        if (kekka[13] == 0) {
            text += "恒は脱走した\nカウンター0→2\n";
            kekka[13] = 2;
        }
    }

    con[33] = kekka[13];
}

function g432() {
    gene = "432 温もりのこころ";
    peti = 0;

    if (sagyona == 4) {
        text = "勇気と正義が２倍\n自制慎重が勇気正義より低いなら勇気正義+30\nこのツールは任意のタイミングで返却が可能\n";

    } else {
        if (sagyona == 5) {
            text = "作業または鎮圧をしていない場合自殺性以外のパニック\n";

        } else { text = "ツール型の作業は「使用」か「返却」です\n";}
        
    }
    
}

function g464() {
    gene = "464 蛹の紳士";
    sase = [[1.5, 1.5, 1.5, 1.5, 1.5], [0.5, 1, 0.5, 0.5, 0.5], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0]];

    rankk = 2;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];

    
    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    if (sagyona == 3) {
        text += "蛹の紳士は脱走した。\n";
    }

    con[8] = kekka[13];
}


function g521() {
    gene = "521 はらぺこな田舎者";
    sase = [[0.5, 0.5, 0, 0, 0], [1, 1, 1, 1, 1], [1, 1, 0.5, 0.5, 0], [1.5, 2, 2, 2, 2]];


    rankk =2;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    if (sagyona == 3) {
        text = "カウンターが減少した\n";
        if (kekka[13] == 1) {
            text += "はらぺこな田舎者は脱走した。\n";
        }
        kekka[13] -= 1;
        if (kekka[13] == 0) {
            text += "カウンター0→3\n";
            kekka[13] = 3;
        }
    }
    con[16] = kekka[13];
}

function g528() {
    gene = "528 狐憑かせ";
    sase = [[1, 1, 1, 0.5, 0.5], [1, 1, 1.5, 1.5, 2], [0.5, 0.5, 1, 1, 1], [2, 2, 2, 1.5, 1.5]];

    rankk = 3;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    if (sagyona == 0 || sagyona == 2) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            text += "▼職員"+name+"に野狐が憑いた\n作業成功率-5\n作業開始時にHPが減っていた場合死亡\nパニックになった際殺人性になる\nすでに狐が憑いている場合、成功率とパニックはこちらに上書きされる\n";
        }
        if (ransu == 2) {
            text = "▼職員" + name +"に善狐が憑いた\n作業成功率+5\n加護全て消失\nパニックになった際自殺性になる\nすでに狐が憑いている場合、成功率とパニックはこちらに上書きされる\n";
        }
    }

    con[34] = kekka[13];
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
        kaihuku = 5 * daideme4 * kekka[4];
        kaizi = kekka[4] * 30;

        text += "任意の部門の職員のSPを"+kaihuku+"回復\n使用職員は"+kaizi+"分の間行動不能\n";
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

function g614() {
    gene = "614 魔法のランプ";
    sase = [[1, 0.5, 1, 1, 1], [0, 0, 1, 1, 1.5], [1, 1, 1, 1, 0.5], [2, 2, 2, 2, 2]];


    rankk = 3;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

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
            if (kekka[13] == 1) {
                text += "部門内の男性職員1名（自制の低い者）が魅了される。\n呼びかけに失敗した場合魔人となる。\n";
            }
            kekka[13] -= 1;
            if (kekka[13] == 0) {
                text += "カウンター0→2\n";
                kekka[13] = 2;
            }
        }
    }
    con[9] = kekka[13];
}

function g620() {
    gene = "620 ノマ化したので人生イージーモード";
    sase = [[1, 1, 1, 1, 0.5], [2,2, 2, 2, 1.5], [0, 0, 0, 0.5, 0.5], [2, 2, 1.5, 1.5, 1.5]];

    rankk = 5;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];

    kensaku = kekka[12].indexOf('620');

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

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

    con[35] = kekka[13];
}

function g623() {
    gene = "623 目立ちたくない黒子";
    sase = [[0.5, 0.5, 0.5, 0, 0], [1.5, 1.5, 1.5, 2, 2], [1.5, 1.5, 1, 1.5, 1], [1, 1, 1, 0.5, 0.5]];


    rankk = 2;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }
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
    con[19] = kekka[13];
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
            ransu2 = Math.floor(Math.random() * 20 + 1);
            if (ransu <= 14) {
                text += ransu2 + "上昇\n";
            } else {
                text += ransu2 + "下降\n";
            }
        } else {
            ransu2 = Math.floor(Math.random() * 255 + 1);
            if (ransu == 29) {
                text += ransu2 + "上昇\n";
                if (ransu2 >= 130) {
                    text += "一時間後に死亡\n";
                }
            } else {
                text += ransu2 + "下降\n";
                if (ransu2 >= 130) {
                    sibou = 0;
                }
            }
        }

    } else {
        text += "ツール型の作業は「使用」です\n";
    }

}

function g710() {
    gene = "710 過去を穿つ狙撃手";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [0.5, 1, 1, 0.5, 0.5]];


    rankk = 3;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    if (kekka[3] == "依頼" || kekka[3] == "特殊") {
        sagyona = 6;
    }
    
    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }
    if (sagyona == 2) {
        text = "観測レベルが１の場合80黒ダメージ\nこの幻想体の愛着は依頼に置き換わっているので特殊能力等で強制的に愛着を選んだ場合を除き作業を決め直してください。\n";
    }
    if (sagyona == 6) {
        text += "依頼の対価は依頼職員に80黒ダメージ\n依頼前に発砲宣言をしていない場合は不発\n";
    }
    if (seihi == 0) {
        text += "カウンター減少\n";
        if (kekka[13] == 1) {
            text += "部門内のランダムな職員1名に80黒ダメージ\n";
        }
        kekka[13] -= 1;
        if (kekka[13] == 0) {
            text += "カウンター0→2\n";
            kekka[13] = 2;
        }
    }

    con[10] = kekka[13];
}


function g722() {
    gene = "722 泥龍";
    sase = [[2, 2, 2, 1.5, 1.5], [1, 1, 1, 1, 1], [0.5, 0.5, 0.5, 0, 0], [1.5, 1.5, 1.5, 1, 1]];

    kensaku = kekka[12].indexOf('722');

    rankk = 2;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }
    if (seihi == 0) {
        text += "カウンターが減少した。\n";
        if (kekka[13] == 1) {
            text += "泥龍は脱走した。\n泥龍の作業に成功することでのみ鎮圧が可能\n";
        }
        kekka[13] -= 1;
        if (kekka[13] == 0) {
            text += "カウンター0→2\n";
            kekka[13] = 2;
        }
    }
    if (sagyona == 0) {
        if (kensaku != -1) {
            pani = 1;
            text += "▼職員" + name + "は自殺性パニックに陥った\n加護欄の722は消去\n";
        } else {
            text += "これ以降加護欄に「722」と記入して作業する\n";
            tt12 += ",722";
            for (i = 0; i < 5; i++) {
                kensaku3 = namera[i].indexOf(name);
                if (kensaku3 != -1) {
                    nana2 = i + 1;
                    nana = "se" + nana2 + "8";
                    document.hanteisuru[nana].value += ",722";
                }
            }
        }
    }
    con[11] = kekka[13];
}

function g725() {
    gene = "725 星海渡る氷精";
    sase = [[0.5, 0.5, 1, 1, 1], [1.5, 1, 1, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5], [2, 2, 1.5, 1, 1]];


    rankk = 4;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    pale = 1;

    if (seihi == 0) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            text += "カウンターが減少した。\n";
            if (kekka[13] == 1) {
                text += "星海渡る氷精は脱走した。\n▼職員" + name + "は氷漬けにされた。\n氷精が鎮圧されるまで行動不能";
            }
            kekka[13] -= 1;
            if (kekka[13] == 0) {
                kekka[13] = 2;
            }
        }
    } else {
        if (sagyona == 1 || sagyona == 3) {
            ransu = Math.floor(Math.random() * 10 + 1);
            if (ransu == 1) {
                text += "カウンターが減少した。\n";
                if (kekka[13] == 1) {
                    text += "星海渡る氷精は脱走した。\n▼職員" + name + "は氷漬けにされた。\n氷精が鎮圧されるまで行動不能";
                }
                kekka[13] -= 1;
                if (kekka[13] == 0) {
                    text += "カウンター0→2\n";
                    kekka[13] = 2;
                }
            }
        }

    }
    con[21] = kekka[13];
}


function g752() {
    gene = "752 秋色葉";
    sase = [[0.5, 0.5, 1, 1, 1], [1, 1, 1, 1, 1], [0.5, 0.5, 0.5, 0.5, 0.5], [1.5, 1.5, 1.5, 1.5, 1.5]];


    rankk = 2;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }
    if (kekka[13] == 0) {
        sibou = 0;
        text = "カウンターが３まで回復\n部門内の全職員のHPSP全回復\n";
        kekka[13] = 3;
    } else {
    if (sagyona != 3) {
        if (seihi == 1) {
        text += "カウンター減少\n";
        if (kekka[13] == 1) {
            text += "カウンター0、葉が赤く色付き光始める\n";
        }
            kekka[13] -= 1;
        }

    }
    text += "作業中にパニックになった場合さらにカウンター減少\n";
    }


    con[12] = kekka[13];
}

function g810() {
    gene = "810 熊猫師範";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];

    rankk = 4;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    if (seihi == 0) {
        if (kekka[7] <= 2) {
            sibou = 0;
        }
        text += "カウンターが減少した\n";
        kekka[13] -= 1;
        if (kekka[13] == 0) {
            text += "熊猫師範は脱走した\nカウンター0→2\n";
            kekka[13] = 2;
        }
    }

    con[36] = kekka[13];
}

function g818() {
    gene = "818 虚勢の才覚";
    sase = [[0.5, 0.5, 0.5, 1, 1], [0, 0.5, 1, 1.5, 2], [1.5, 1, 1, 0.5, 0.5], [1, 1, 0, 0.5, 0.5]];


    rankk = 5;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    kensaku = kekka[12].indexOf('818');


    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }


    if (kensaku != -1) {
        text = "カウンター減少\n";
            if (kekka[13] == 1) {
                text += "虚勢の才覚は脱走した。\n";
            }
            kekka[13] -= 1;
        if (kekka[13] == 0) {
            text += "カウンター0→3\n";
            kekka[13] = 3;
        }

    } else {
        text += "職員" + name + "の加護欄に「818」を記入\nこの職員以外の職員の加護欄から「818」を消去\nカウンター回復\n";
        kekka[13] = 3;
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

    con[37] = kekka[13];
}

function g821() {
    gene = "821 夢見がちなうさちゃん";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1.5, 1.5], [0.5, 0.5, 0.5, 0.5, 0.5], [2, 2, 2, 2, 2]];

    rankk = 5;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    if (seihi == 1) {
        text += "部門内の職員のHPSPが40回復\n";
    } else {
        if (sagyona != 2) {
            ransu = Math.floor(Math.random() * 2 + 1);
            if (ransu == 1) {
                text = "カウンターが減少した\n";
                kekka[13] -= 1;
                if (kekka[13] == 0) {
                    daideme1 = 1;
                    daideme2 = 6;
                    daisu();
                    text += "夢見がちなうさちゃんは脱走した\nカウンター0→3\n6体脱走した内の" + daideme4 + "体は自動鎮圧された、ただし6の場合は全て鎮圧失敗\n";
                    kekka[13] = 3;
                }
            }
        }
    }
    


    con[37] = kekka[13];
}

function g829() {
    gene = "829 飛び立つ流星";
    sase = [[0, 0.5, 0.5, 0.5, 0.5], [0, 0.5, 0.5, 1, 1.5], [0, 0.5, 0.5, 0.5, 0], [0.5, 0.5, 1, 1, 1.5]];

    rankk = 5;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    if (seihi == 1) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            text = "職員"+name+"はながれぼしの欠片を付与された\nこの職員の加護欄に「829」を追加\n作業、鎮圧の出目+7\n";
        }
    }

    con[38] = kekka[13];
}

function g849() {
    gene = "849 楽園の永緑樹";
    sase = [[0.5, 0.5, 0, 0.5, 1], [2, 1.5, 1, 1.5, 1.5], [0, 0, 0.5, 0.5, 0.5], [0.5, 1, 1, 1, 1.5]];


    rankk = 3;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    eee = document.hanteisuru['se18'].value+ document.hanteisuru['se28'].value+document.hanteisuru['se38'].value+ document.hanteisuru['se48'].value+document.hanteisuru['se58'].value;
      kensaku = kekka[12].indexOf('849');
    kensaku2 = kekka[12].indexOf('8491');



    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }
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
text += "職員"+name+"と加護849の職員は最大HPの30％ダメージを受けた。\n加護欄から849を消去\n";
                }
                
            }



        }
    }

    if (sagyona == 3) {
        text += "職員"+name+"は蛇に噛まれた。\n現在かかっている幻想体から受けたバフデバフの一つを消す\n";
    }

    con[22] = kekka[13];

}

function g901() {
    gene = "901 ホームラン!!";
    sase = [[0.5, 0.5, 0.5, 0.5, 0.5], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0.5, 0.5, 0, 0, 0]];


    rankk = 1;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }
    if (sagyona == 2) {
        text += "職員" + name +"はバッタースタンドに立った\n";
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu == 1) {
            daideme1 = 1;
            daideme2 = 6;
            daisu();
            text += "バッターアウト\n部門内職員に"+daideme4+"のSPダメージ\n";
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
    con[13] = kekka[13];
}

function g903() {
    gene = "903 イマジナリーラバー";
    sase = [[0.5, 0.5, 1, 1, 1], [0, 0, 0.5, 2, 2], [0, 0.5, 1, 1.5, 2], [2, 2, 2, 2, 2]];

    rankk = 3;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];

    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    if (seihi == 1) {
        text += "カウンターが減少した\n";
        kekka[13] -= 1;
        if (kekka[13] == 0) {
            text += "イマジナリーラバーは脱走した\nカウンター0→3\n";
            kekka[13] = 3;
        }
    }

    con[39] = kekka[13];
}

function g915() {
    gene = "915 美食家";
    sase = [[0, 0, 0, 0, 0], [1.5, 1.5, 1, 1, 1], [0.5, 0.5, 1, 1, 1], [1.5, 1.5, 1.5, 1.5, 1.5]];


    rankk = 1;
    rank();
    seikou = seiti * sase[sagyona][sagyose3];
    kensaku = kekka[12].indexOf('915');

    text = "職員に加護が付与される。\n3分毎に1d6HP回復、15分後に消去\n加護の付いている間、加護欄に「915」と入力";

    if (kensaku == -1) {
    tt12 += ",915";
    for (i = 0; i < 5; i++) {
        kensaku3 = namera[i].indexOf(name);
        if (kensaku3 != -1) {
            nana2 = i + 1;
            nana = "se" + nana2 + "8";
            document.hanteisuru[nana].value += ",915";
        }
    }
    }



    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    con[14] = kekka[13];
}

function g9999() {

    seikou = 6;
    if (kekka[4] < seikou) {
        seihi = 0;
    } else {
        seihi += 1;
    }

    if (kekka[10] >= 2) {
        sibou = 0;
    } else {

        sibou = 1;
    }
}

function g99999() {

text = "無効";
    
}
