
window.onload = function onLoad() {
    target = document.getElementById("output");
    target.innerHTML = "Ver1.9α 公式垢のプロフに書いてあるバージョンと異なる際は更新してください <input style=\"margin: 0px 0px 10px 10px; \" type=\"button\" value=\"口調変更\" onclick=\"openFile();\">";
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
    tt13 = 999;
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

    serogt = [];
    setrog = [];
    setrogcount = 1;

    tire = "";


    syid = -1;
    sykari = 0;
    conc = [];
    conc2 = [];
    conc3 = 0;
    sycon = [];
    syconk = [];
    syisg = [];
    sych = [];
    keiti = [];
    keilog = [];
    nunba = [];

    gnid = [0, 0, 0, 0, 0, 0];
    //幻想体用
    t990 = 0;
    seiti990 = 15;
    keikenti990 = 0;
    jou990 = 0;
    kari801 = 0;
    kari116 = 3;
    con116 = [];
    t530 = 0;
    t708 = 0;
    tt708 = 0;
    t065 = 0;
    t701 = 0;
    t804 = 0;
    t828 = 0;
    t067 = 0;
    t604 = 0;
    t092 = 0;
    t0922 = 0;
    t0923 = 0;
    t0924 = 0;
    t0925 = [];
    t0926 = [];
    t153 = -1;
    t980 = 0;
    t216 = [[0, 0], [0, 1], [0, 2], [0, 3]];
    t2161 = [[0, 0], [0, 1], [0, 2], [0, 3]];
    t2162 = [0, 0, 0, 0];
    t696 = 0;
    t902 = 0;
    t826 = 0;
    t877 = "";
    t8772 = 0;
    t603 = 0;
    t6032 = "";
    t228 = 0;
    t2281 = 0;
    t304 = 0;
    t305 = 0;
    t534 = 0;
    t5341 = -1;
    t535 = 0;
    t709 = -1;
    t152 = -1;
    t886 = 0;
    t8862 = "";
    t8863 = 0;
    t904 = 0;
    t979 = 0;
    t9792 = 0;
    t151 = "";
    t712 = 0;
    t7122 = 0;
    t7123 = "";
    t7124 = 0;
    t995 = 0;
    t427 = -1;
    t542 = -1;
    t5420 = 0;
    t5421 = 0;
    t5423 = 0;
    t5424 = 0;
    t704 = -1;
    t352 = 0;
    t590 = -1;
    t5902 = "";
    t616 = -1;
    t925 = "";
    t145 = 0;
    t462 = 0;
    t932 = 0;
    t9322 = "";
    t200 = 0;
    t007 = -1;
    t0072 = [];
    t0073 = -1;
    t0074 = "";
    t491 = 0;
    t053 = 0;
    t318 = -1;
    t3182 = [];
    t375 = 0;
    t912 = "";
    //t9999 = 0;
    t085 = 0;
    t183 = 0;
    t241 = 0;
    t2412 = 0;
    t702 = 0;
    t315 = 0;
    t460 = 0;
    t289 = 0;
    t202 = -1;
    t439 = 0;
    t588 = 0;
    t831 = "";
    t8312 = -1;
    t872 = 0;

    zenkai = [];
    serogtext = "";
    loche = 0;
    save = [];

    irana = "";
    irana2 = "";



    gtA = ["001", "018", "031", "063", 125, 201, 317, 365, 464, 614, 710, 722, 752, 901, 915, 118, 521, "042", 623, 330, "019", 725, 849, "002", "021", 106, 361, 818];
    gtB = ["023", "091", 142, 192, 214, 371, 528, 620, 810, 821, 829, 903, "013", "072", 403, 707, 971, "003", 110, 194, "005", "012", "022", 209, 413, 920, 982];
    gtC = ["061", "095", 199, 235, 243, 354, 451, 898, 923, 999, "032", "079", 108, 124, 137, 571, 581, 610, 126, 135, 291, "033", 213, 523, 625, 888, 997];
    gtD = ["008", 601, 666, 777, 972, 185, 335, 880, "010", "039", "064", 311, 360, 469, 990, "047", "089", 302, 369, 385, 409, 570, 612, 801, 988, "034", 119, 609, 906];
    gtE = ["006", "016", "030", "062", 116, 155, 170, 188, 255, 299, 537, 555, 890, 907, 975, 976, "054", 246, 294, 437, 486, 650, 977, "088", "093", 100, 113];
    gtF = [312, 329, 628, 874, 683, 908, 140, 526, 530, 708, 839, "065", 161, 320, 525, 701, 804, 828, 966, "067", 173, 404, 532, "029", 452, 453, 809, 914, 918, 941, 604];
    gtG = [721, 964, "036", "040", "092", 974, 215, 264, 423, 887, 916, 212, 499, "035", 153, 323, 429, 480, 529, 567, 800, 978, "094", 217, 378, 417, 536, 802, 917, 980];
    gtH = [216, 502, 720, 963, 467, 696, 718, 767, 772, 803, 259, 959, 333, 826, 228, 304, 305, 709, 152, 303, 444, 731, 886, 904, 933, 979];
    gtI = [128, 223, 425, 712, 922, 995, "015", 219, 272, 321, 427, 159, 347, 352, 542, 875, 891, 935, 450, 545, 838, 150, 367, 616, 830, 894, 931, 945];
    gtJ = ["027", 462, 776, 932, 973, 993, "037", 139, 200, 308, 600, 822, 952, 955, 171, 642, 717, 775, 981, "053", 375, 396, 491, 715, "045", "083", 262, 263, 390, 406, 430, 808];
    gtK = ["087",205,359,364,440,514,672,820,913,"085",183,204,218,268,289,315,460,517,702,202,439,588,656,831,872,919,936,940,948,983];
    gtTA = [432, 566, 703, 635, "020", 310, "007", "071", 540, "099"];
    gtTB = [422, "049", 524, "048", 102, 314, 905, 554, 541, 704];
    gtTC = ["050", "051", 225, 897, 408, 912, 531, 160, 230, 415];
    gtTD = [527, 603, 877, 534, 535, 996, 151, 911, 590, 925];
    gtTE = [145,318,598,984,910,241,"060",900,987];

    allno = [];

    allno  = allno .concat(gtA);
    allno  = allno .concat(gtB);
    allno  = allno .concat(gtC);
        allno  = allno .concat(gtD);
        allno  = allno .concat(gtE);
        allno  = allno .concat(gtF);
        allno  = allno .concat(gtG);
        allno  = allno .concat(gtH);
        allno  = allno .concat(gtI);
    allno  = allno .concat(gtJ);
    allno  = allno .concat(gtK);
    allno2 = allno.length-1;

    genra1 = [];
    genra2 = [];
    genra3 = [];
    genra4 = ["001", "002","003","005","006","008","010","012", "013","015","016", "018","019", "021","022", "023","027","029","030", "031","032","033" ,"034","035","036","037","039","040","042","045","047","053","054","061","062", "063","064","065","067", "072","079","083","085","087","088","089", "091","092","093","094","095",100, 106,108,110,113,116, 118,119,124, 125,126,128,135,137,139,140, 142,150,152,153,155,159,161,170,171,173,183,185,188, 192,194,199,200, 201,202,204,205,209,212,213, 214,215,216,217,218,219,223,228,235,243,246,255,259,262,263,264,268,272,289,291,294,299,302,303,304,305,308,311,312,315, 317,320,321,323,329, 330,333,335,347,352,354,359,360, 361,364, 365,367,369, 371,375,378,385,390,396, 403,404,406,409,413,417,423,425,427,429,430,437,439,440,444,450,451,452,453, 460,462,464,467,469,480, 486,491,499,502,514,517,521,523,525,526, 528,529,530,532,536,537,542,545,555,567,570,571,581,588,600,601,604,609,610,612, 614,616, 620, 623,625,628,642,650,656,666,672,683,696,701,702,707,708,709, 710,712,715,717,718,720,721, 722, 725, 731,752,767,772,775,776,777,800,801,802,803,804,808,809, 810, 818, 820,821,822,826,828, 829,830,831,838,839, 849,872,874,875,880,886,887,888,890,891,894,898, 901,902, 903,904,906,907,908,913,914, 915,916,917,918,919,920,922,923,931,932,933,935,936,940,941,945,948,952,955,959,963,964,966,971,972,973,974,975,976,977,978,979,980,981,982,983,988,990,993,995,997,999];
    genra5 = ["007","020","048","049","050","051","060", "071","099",102,145,151,160,225,230,241, 310,314,318,408,415, 422,432,524,527,531,534,535,540,541,554, 566,590,598,603,  635, 703,704,877,897,900,905,910,911,912,925,984,987,996];
    genra6 = [];

    con = [["001", 0, "https://privatter.net/p/6703366"], ["018", 2, "https://privatter.net/p/6748615"], ["031", 0, "https://privatter.net/p/6703466"], ["063", 0, "https://privatter.net/p/6695438"], ["125", 2, "https://privatter.net/p/6703511"], ["201", 1, "https://privatter.net/p/6695568"], ["317", 1, "https://privatter.net/p/6702502"], ["365", 0, "https://privatter.net/p/6746799"], ["464", 1, "https://privatter.net/p/6745119"], ["614", 2, "https://privatter.net/p/6695815"], ["710", 2, "https://privatter.net/p/6744563"], ["722", 2, "https://privatter.net/p/6695983"], ["752", 3, "https://privatter.net/p/6744635"], ["901", 0, "https://privatter.net/p/6738147"], ["915", 0, "https://privatter.net/p/6696047"], ["118", 0, "https://privatter.net/p/6755338"], ["521", 3, "https://privatter.net/p/6755379"], ["042", 1, "https://privatter.net/p/6758917"], ["330", 2, "https://privatter.net/p/6762214"], ["623", 0, "https://privatter.net/p/6758874"], ["019", 0, "https://privatter.net/p/6766679"], ["725", 2, "https://privatter.net/p/6766770"], ["849", 0, "https://privatter.net/p/6766399"], ["002", 2, "https://privatter.net/p/6771383"], ["021", 3, "https://privatter.net/p/6771524"], ["106", 3, "https://privatter.net/p/6771635"], ["361", 0, "https://privatter.net/p/6771670"], ["818", 3, "https://privatter.net/p/6771782"], ["023", 0, "https://privatter.net/p/6778268"], ["091", 3, "https://privatter.net/p/6778286"], ["142", 0, "https://privatter.net/p/6778302"], ["192", 0, "https://privatter.net/p/6778314"], ["214", 2, "https://privatter.net/p/6778327"], ["371", 2, "https://privatter.net/p/6778343"], ["528", 0, "https://privatter.net/p/6778352"], ["620", 1, "https://privatter.net/p/6778375"], ["810", 2, "https://privatter.net/p/6778395"], ["821", 3, "https://privatter.net/p/6778448"], ["829", 1, "https://privatter.net/p/6778582"], ["903", 3, "https://privatter.net/p/6778632"], ["013", 0, "https://privatter.net/p/6782727"], ["072", 2, "https://privatter.net/p/6782754"], ["403", 2, "https://privatter.net/p/6782810"], ["707", 3, "https://privatter.net/p/6786497"], ["971", 1, "https://privatter.net/p/6786446"], ["003", 3, "https://privatter.net/p/6789998"], ["110", 1, "https://privatter.net/p/6790048"], ["194", 1, "https://privatter.net/p/6790092"], ["005", 3, "https://privatter.net/p/6798989"], ["012", 4, "https://privatter.net/p/6799118"], ["022", 4, "https://privatter.net/p/6799176"], ["209", 2, "https://privatter.net/p/6799263"], ["413", 1, "https://privatter.net/p/6799346"], ["920", 0, "https://privatter.net/p/6799416"], ["982", 0, "https://privatter.net/p/6799505"], ["9999", 2, "https://privatter.net/p/6748615"], ["061", 0, "kari"], ["095", 0, "kari"], ["199", 3, "kari"], ["235", 2, "kari"], ["243", 0, "kari"], ["354", 2, "kari"], ["451", 3, "kari"], ["898", 0, "kari"], ["923", 0, "kari"], ["999", 4, "kari"], ["032", 5, "kari"], ["079", 0, "kari"], ["108", 2, "kari"], ["124", 0, "kari"], ["137", 3, "kari"], ["571", 3, "kari"], ["581", 1, "kari"], ["610", 4, "kari"], ["126", 2, "kari"], ["135", 2, "kari"], ["291", 2, "kari"], ["033", 3, "kari"], ["213", 3, "kari"], ["523", 3, "kari"], ["625", 2, "kari"], ["888", 3, "kari"], ["997", 0, "kari"], ["008", 3, "kari"], ["601", 0, "kari"], ["666", 0, "kari"], ["777", 4, "kari"], ["972", 0, "kari"], ["185", 0, "kari"], ["335", 2, "kari"], ["880", 2, "kari"], ["010", 0, "kari"], ["039", 0, "kari"], ["064", 5, "kari"], ["311", 0, "kari"], ["360", 2, "kari"], ["469", 0, "kari"], ["990", "?", "kari"], ["047", 2, "kari"], ["089", 2, "kari"], ["302", 2, "kari"], ["369", 0, "kari"], ["385", 3, "kari"], ["409", 3, "kari"], ["554", 3, "kari"], ["570", 3, "kari"], ["612", 3, "kari"], ["801", 0, "kari"], ["988", 3, "kari"], ["034", 3, "kari"], ["119", 0, "kari"], ["609", 1, "kari"], ["906", 1, "kari"], ["006", 0, "kari"], ["016", 4, "kari"], ["030", 3, "kari"], ["062", 3, "kari"], ["116", 5, "kari"], ["155", 3, "kari"], ["170", 1, "kari"], ["188", 1, "kari"], ["255", 2, "kari"], ["299", 0, "kari"], ["537", 3, "kari"], ["555", 0, "kari"], ["890", 1, "kari"], ["907", 0, "kari"], ["975", 3, "kari"], ["976", 3, "kari"], ["054", 0, "kari"], ["246", 0, "kari"], ["294", 4, "kari"], ["437", 0, "kari"], ["486", 0, "kari"], ["650", 3, "kari"], ["977", 3, "kari"], ["088", 2, "kari"], ["093", 1, "kari"], ["100", 0, "kari"], ["113", 5, "kari"], ["312", 3, "kari"], ["329", 0, "kari"], ["628", 0, "kari"], ["874", 3, "kari"], ["683", 3, "kari"], ["908", 1, "kari"], ["140", 1, "kari"], ["526", 3, "kari"], ["530", 5, "kari"], ["708", 0, "kari"], ["839", 2, "kari"], ["432", 0, "kari"], ["566", 0, "kari"], ["703", 0, "kari"], ["635", 0, "kari"], ["020", 0, "kari"], ["310", 0, "kari"], ["099", 0, "kari"], ["007", 0, "kari"], ["071", 0, "kari"], ["540", 0, "kari"], ["422", 0, "kari"], ["049", 0, "kari"], ["524", 0, "kari"], ["048", 0, "kari"], ["102", 0, "kari"], ["314", 0, "kari"], ["905", 0, "kari"], ["541", 0, "kari"], ["704", 0, "https://privatter.net/p/7070394"], ["050", 0, "kari"], ["051", 0, "kari"], ["225", 0, "kari"], ["897", 0, "kari"], ["408", 0, "kari"], ["912", 0, "kari"], ["531", 0, "kari"], ["065", 2, "kari"], ["160", 0, "kari"], ["161", 1, "kari"], ["320", 2, "kari"], ["525", 2, "kari"], ["701", 3, "kari"], ["804", 3, "kari"], ["828", 0, "kari"], ["966", 0, "kari"], ["067", 2, "kari"], ["173", 3, "kari"], ["230", 0, "kari"], ["404", 2, "kari"], ["532", 1, "kari"], ["029", 3, "kari"], ["452", 3, "kari"], ["453", 3, "kari"], ["604", 0, "kari"], ["809", 5, "kari"], ["914", 0, "kari"], ["918", 2, "kari"], ["941", 0, "kari"], ["415", 0, "kari"], ["721", 2, "kari"], ["964", 5, "kari"], ["036", 0, "kari"], ["040", 3, "kari"], ["092", 0, "kari"], ["974", 3, "kari"], ["215", 3, "https://privatter.net/p/6983390"], ["264", 3, "https://privatter.net/p/6983461"], ["423", 0, "https://privatter.net/p/6983502"], ["887", 2, "https://privatter.net/p/6983575"], ["916", 1, "https://privatter.net/p/6983642"], ["212", 0, "https://privatter.net/p/6986596"], ["499", 0, "https://privatter.net/p/6983930"], ["035", 0, "https://privatter.net/p/6990990"], ["153", 5, "https://privatter.net/p/6983692"], ["323", 5, "https://privatter.net/p/6992461"], ["429", 0, "https://privatter.net/p/6987429"], ["480", 3, "https://privatter.net/p/6994956"], ["529", 2, "https://privatter.net/p/6989966"], ["567", 2, "https://privatter.net/p/6993378"], ["800", 2, "https://privatter.net/p/6995043"], ["978", 0, "https://privatter.net/p/6995150"], ["094", 0, "https://privatter.net/p/6998708"], ["217", 2, "https://privatter.net/p/6994838"], ["378", 3, "https://privatter.net/p/6989284"], ["417", 2, "https://privatter.net/p/6994485"], ["527", 0, "https://privatter.net/p/6997663"], ["536", 3, "https://privatter.net/p/6997713"], ["802", 3, "https://privatter.net/p/6994890"], ["917", 2, "https://privatter.net/p/6998742"], ["980", 1, "https://privatter.net/p/6998793"], ["216", 5, "https://privatter.net/p/7002768"], ["502", 0, "https://privatter.net/p/7002974"], ["720", 2, "https://privatter.net/p/7003006"], ["963", 0, "https://privatter.net/p/7002115"], ["467", 4, "https://privatter.net/p/7013131"], ["696", 0, "https://privatter.net/p/7011051"], ["718", 2, "https://privatter.net/p/7013189"], ["767", 3, "https://privatter.net/p/7011558"], ["772", 1, "https://privatter.net/p/7013235"], ["803", 3, "https://privatter.net/p/7011786"], ["902", 0, "https://privatter.net/p/7013276"], ["259", 2, "https://privatter.net/p/7011507"], ["959", 3, "https://privatter.net/p/7011506"], ["333", 3, "https://privatter.net/p/7020799"], ["603", 0, "https://privatter.net/p/7020028"], ["826", 4, "https://privatter.net/p/7020422"], ["877", 0, "https://privatter.net/p/7020870"], ["228", 0, "https://privatter.net/p/7026403"], ["304", 3, "https://privatter.net/p/7028333"], ["305", 3, "https://privatter.net/p/6995786"], ["534", 0, "https://privatter.net/p/7022790"], ["535", 0, "https://privatter.net/p/7022697"], ["709", 4, "https://privatter.net/p/7013612"], ["152", 0, "https://privatter.net/p/7029879"], ["303", 3, "https://privatter.net/p/6986577"], ["444", 2, "https://privatter.net/p/7032510"], ["731", 2, "https://privatter.net/p/7029596"], ["886", 3, "https://privatter.net/p/7021856"], ["904", 3, "https://privatter.net/p/7028636"], ["933", 3, "https://privatter.net/p/7030278"], ["979", 0, "https://privatter.net/p/7028241"], ["996", 0, "https://privatter.net/p/7031786"], ["128", 3, "https://privatter.net/p/7021177"], ["151", 0, "https://privatter.net/p/7046298"], ["223", 0, "https://privatter.net/p/7045757"], ["425", 3, "https://privatter.net/p/7044858"], ["712", 0, "https://privatter.net/p/7046348"], ["922", 0, "https://privatter.net/p/7046375"], ["995", 1, "https://privatter.net/p/7046432"], ["015", 2, "https://privatter.net/p/7049269"], ["219", 0, "https://privatter.net/p/7049931"], ["272", 2, "https://privatter.net/p/7049966"], ["321", 0, "https://privatter.net/p/7048925"], ["427", 0, "https://privatter.net/p/7054557"], ["911", 0, "https://privatter.net/p/7054593"], ["159", 3, "https://privatter.net/p/7059938"], ["347", 2, "https://privatter.net/p/7069842"], ["352", 0, "https://privatter.net/p/7063170"], ["542", 3, "https://privatter.net/p/7067111"], ["875", 4, "https://privatter.net/p/7063423"], ["891", 2, "https://privatter.net/p/7069934"], ["935", 0, "https://privatter.net/p/7061426"], ["450", 0, "https://privatter.net/p/7072482"], ["545", 0, "https://privatter.net/p/7072790"], ["838", 1, "https://privatter.net/p/7075035"], ["150", 0, "https://privatter.net/p/7078404"], ["367", 3, "https://privatter.net/p/7082974"], ["590", 1, "https://privatter.net/p/7078402"], ["616", 3, "https://privatter.net/p/7078380"], ["830", 5, "https://privatter.net/p/7082432"], ["894", 3, "https://privatter.net/p/7075378"], ["925", 0, "https://privatter.net/p/7083042"], ["931", 0, "https://privatter.net/p/7083093"], ["945", 0, "https://privatter.net/p/7083140"], ["027", 0, "https://privatter.net/p/7084729"], ["145", 0, "https://privatter.net/p/7084666"], ["462", 0, "https://privatter.net/p/7083452"], ["776", 3, "https://privatter.net/p/7083192"], ["932", 4, "https://privatter.net/p/7087178"], ["973", 3, "https://privatter.net/p/7083708"], ["993", 0, "https://privatter.net/p/7086548"], ["037", 3, "https://privatter.net/p/7089162"], ["139", 2, "https://privatter.net/p/7089747"], ["200", 2, "https://privatter.net/p/7090197"], ["308", 0, "https://privatter.net/p/7090902"], ["600", 2, "https://privatter.net/p/7083723"], ["822", 1, "https://privatter.net/p/7090938"], ["952", 3, "https://privatter.net/p/7091049"], ["955", 2, "https://privatter.net/p/7083724"], ["171", 3, "https://privatter.net/p/7099115"], ["642", 0, "https://privatter.net/p/7083761"], ["717", 4, "https://privatter.net/p/7100747"], ["775", 2, "https://privatter.net/p/7099372"], ["981", 1, "https://privatter.net/p/7098768"], ["053", 3, "https://privatter.net/p/7103674"], ["318", 0, "https://privatter.net/p/7100226"], ["375", 3, "https://privatter.net/p/7102976"], ["396", 1, "https://privatter.net/p/7105021"], ["491", 3, "https://privatter.net/p/7103566"], ["715", 3, "https://privatter.net/p/7105182"], ["045", 2, "https://privatter.net/p/7077295"], ["083", 1, "https://privatter.net/p/7106319"], ["262", 1, "https://privatter.net/p/7092356"], ["263", 1, "https://privatter.net/p/7110307"], ["390", 3, "https://privatter.net/p/7110337"], ["406", 0, "https://privatter.net/p/7091893"], ["430", 0, "https://privatter.net/p/7109014"], ["598", 0, "https://privatter.net/p/7107842"], ["808", 1, "https://privatter.net/p/7106283"], ["984", 1, "https://privatter.net/p/7105135"], ["087", 0, "https://privatter.net/p/7117816"], ["205", 1, "https://privatter.net/p/7115807"], ["359", 0, "https://privatter.net/p/7115886"], ["364", 0, "https://privatter.net/p/7112669"], ["440", 2, "https://privatter.net/p/7115628"], ["514", 0, "https://privatter.net/p/7109815"], ["672", 1, "https://privatter.net/p/7117939"], ["820", 3, "https://privatter.net/p/7115427"], ["910", 0, "https://privatter.net/p/7117977"], ["913", 3, "https://privatter.net/p/7107313"], ["085", 0, "https://privatter.net/p/7119733"], ["183", 1, "https://privatter.net/p/7119974"], ["204", 2, "https://privatter.net/p/7121922"], ["218", 2, "https://privatter.net/p/7121965"], ["241", 0, "https://privatter.net/p/7119979"], ["268", 4, "https://privatter.net/p/7117242"], ["289", 0, "https://privatter.net/p/7122011"], ["315", 4, "https://privatter.net/p/7119621"], ["460", 3, "https://privatter.net/p/7117570"], ["517", 3, "https://privatter.net/p/7122211"], ["702", 2, "https://privatter.net/p/7118383"], ["060", 0, "https://privatter.net/p/7125158"], ["202", 1, "https://privatter.net/p/7125518"], ["439", 1, "https://privatter.net/p/7125299"], ["588", 1, "https://privatter.net/p/7125662"], ["656", 4, "https://privatter.net/p/7125627"], ["831", 2, "https://privatter.net/p/7125210"], ["872", 1, "https://privatter.net/p/7125868"], ["900", 0, "https://privatter.net/p/7125700"], ["919", 2, "https://privatter.net/p/7125752"], ["936", 0, "https://privatter.net/p/7125788"], ["940", 3, "https://privatter.net/p/7125875"], ["948", 3, "https://privatter.net/p/7125914"], ["983", 2, "https://privatter.net/p/7125247"], ["987", 0, "https://privatter.net/p/7125966"]];

    //リザルト計算用
    reco = 1;
    rog = ["自動で経験値とリザルトツールに加算されます、消去でログが消えます（リザルトツールからも引かれます）"];

    sentakuti = [];

    /*
    dassoulog = [];
    dassousyoki = "DAY28,29は脱走時、次の補正が入ります";
    target = document.getElementById("dassoulog");
    target.innerHTML = dassousyoki +"（脱走時に記載をお願いします）各職員セットボタンを押さないと加算されません";
*/
    T1 = "です";
    T2 = "した";
    T3 = "た";
    T4 = "ない";
    T5 = "いる";
    Tcuri = "クリティカル、";
    Tgift = "ギフト入手";
    Tfan = "ファンブル、観測レベル上昇なし";
    Tseikou = "作業成功";
    Tsippai = "作業失敗";
    Tseikan = "生還";
    Tsibou = "死亡";
    Tdassou = "は脱走した";
    Tpani = "パニックに陥った";
}

function getData(e) {
    console.log("test");
    var xml = e.target.result;

            const parser = new DOMParser();
            const xmlString = xml;
            const doc1 = parser.parseFromString(xmlString, "application/xml");
            var nodes = doc1.getElementsByTagName("T1");
            T1 = nodes[0].textContent;
            console.log(T1);
            var nodes = doc1.getElementsByTagName("T2");
            T2 = nodes[0].textContent;
            console.log(T2);
            var nodes = doc1.getElementsByTagName("Tcuri");
            Tcuri = nodes[0].textContent;
    console.log(Tcuri);
            var nodes = doc1.getElementsByTagName("Tgift");
            Tgift = nodes[0].textContent;
    console.log(Tgift);
    var nodes = doc1.getElementsByTagName("Tfan");
    Tfan = nodes[0].textContent;
    console.log(Tfan);
            var nodes = doc1.getElementsByTagName("Tseikou");
            Tseikou = nodes[0].textContent;
    console.log(Tseikou);
    var nodes = doc1.getElementsByTagName("Tsippai");
    Tsippai = nodes[0].textContent;
    console.log(Tsippai);
            var nodes = doc1.getElementsByTagName("Tseikan");
            Tseikan = nodes[0].textContent;
    console.log(Tseikan);
    var nodes = doc1.getElementsByTagName("Tsibou");
    Tsibou = nodes[0].textContent;
    console.log(Tsibou);
    var nodes = doc1.getElementsByTagName("Tdassou");
    Tdassou = nodes[0].textContent;
    console.log(Tdassou);
    var nodes = doc1.getElementsByTagName("Tpani");
    Tpani = nodes[0].textContent;
    console.log(Tpani);

}

function openFile() {

    T1 = "です";
    T2 = "した";
    T3 = "た";
    T4 = "ない";
    T5 = "いる";
    Tcuri = "クリティカル、";
    Tgift = "ギフト入手";
    Tfan = "ファンブル、観測レベル上昇なし";
    Tseikou = "作業成功";
    Tsippai = "作業失敗";
    Tseikan = "生還";
    Tsibou = "死亡";
    Tdassou = "は脱走した";
    Tpani = "パニックに陥った";
    const input = document.createElement("input");
    input.type = "file";
    input.addEventListener("change", function (e) {
            const files = input.files;
        var file = files[0];
        var reader = new FileReader();
        reader.addEventListener('load', getData, false);
        reader.readAsText(file);

        var result = e.target.files[0];


        reader.addEventListener("load", () => {
             
            var title = result.name.match(/(.*)\.xml$/)[1];
            lodata = result;
            console.log(result);
        });
    });

    input.click();
}



function syplus(sysy) {
    sykari = syconk.indexOf(sysy);
    if (sykari == -1) {
        for (i = 0; keiti.length; i++) {
            kazoe = [sysy, 0];
            sych.push(kazoe);
            syconk.push(sysy);
        }
    }
}

function sycount(ii) {
    sych = [];
        kazoe = [897,0];
        sych.push(kazoe);
        syconk.push(897);
        kazoe = [408, 0];
        sych.push(kazoe);
        syconk.push(408);
        kazoe = [525, 0];
        sych.push(kazoe);
        syconk.push(525);
        kazoe = [230, 0];
        sych.push(kazoe);
        syconk.push(230);
        kazoe = [914, 0];
        sych.push(kazoe);
        syconk.push(914);
        kazoe = [415, 0];
        sych.push(kazoe);
        syconk.push(415);
        kazoe = [036, 0];
        sych.push(kazoe);
        syconk.push(036);
        kazoe = [978, 0];
        sych.push(kazoe);
        syconk.push(978);
        kazoe = [696, 0];
        sych.push(kazoe);
        syconk.push(696);
        kazoe = [603, 0];
        sych.push(kazoe);
        syconk.push(603);
        kazoe = [877, 0];
        sych.push(kazoe);
        syconk.push(877);
        kazoe = [228, 0];
        sych.push(kazoe);
        syconk.push(228);
        kazoe = [534, 0];
        sych.push(kazoe);
        syconk.push(534);
        kazoe = [535, 0];
        sych.push(kazoe);
        syconk.push(535);
        kazoe = [709, 0];
        sych.push(kazoe);
        syconk.push(709);
        kazoe = [731, 0];
        sych.push(kazoe);
        syconk.push(731);
        kazoe = [886, 0];
        sych.push(kazoe);
        syconk.push(886);
        kazoe = [996, 0];
        sych.push(kazoe);
        syconk.push(996);
        kazoe = [223, 0];
        sych.push(kazoe);
        syconk.push(223);
        kazoe = [219, 0];
        sych.push(kazoe);
        syconk.push(219);
        kazoe = [272, 0];
        sych.push(kazoe);
        syconk.push(272);
        kazoe = [259, 0];
        sych.push(kazoe);
        syconk.push(259);
        kazoe = [875, 0];
        sych.push(kazoe);
        syconk.push(875);
        kazoe = [704, 0];
        sych.push(kazoe);
        syconk.push(704);
        kazoe = [150, 0];
        sych.push(kazoe);
        syconk.push(150);
        kazoe = [925, 0];
        sych.push(kazoe);
        syconk.push(925);
        kazoe = ['027', 0];
        sych.push(kazoe);
        syconk.push('027');
        kazoe = [145, 0];
        sych.push(kazoe);
        syconk.push(145);
        kazoe = [462, 0];
        sych.push(kazoe);
    syconk.push(462);
    kazoe = [822, 0];
    sych.push(kazoe);
    syconk.push(822);
    kazoe = [715, 0];
    sych.push(kazoe);
    syconk.push(715);
    kazoe = ['083', 0];
    sych.push(kazoe);
    syconk.push('083');
    kazoe = [430, 0];
    sych.push(kazoe);
    syconk.push(430);
    kazoe = [808, 0];
    sych.push(kazoe);
    syconk.push(808);
    kazoe = [183, 0];
    sych.push(kazoe);
    syconk.push(183);
    kazoe = [202, 0];
    sych.push(kazoe);
    syconk.push(202);
    kazoe = [936, 0];
    sych.push(kazoe);
    syconk.push(936);
    kazoe = [948, 0];
    sych.push(kazoe);
    syconk.push(948);



        sycon[ii] = sych;
    }

function sykensaku(kensa) {

    syconc = syconk.indexOf(kensa);
    console.log(syconc);
    sykekka = sycon[syid][syconc][1];
}


function sykasan(check, pura, tuika) {
    syconc = syconk.indexOf(check);
    if (pura == 0) {
        sycon[syid][syconc][1] = sycon[syid][syconc][1] + tuika;
    } else {
        if (pura == 1) {
            sycon[syid][syconc][1] = sycon[syid][syconc][1] - tuika;
        } else {
        sycon[syid][syconc][1] = tuika;
        }
    }
}

function compareFunc(a, b) {
    return b[0] - a[0];
}

function li_log() {

    for (i = 1; i < rogcount; i++) {
        if (rog[i] == null) {
           
            rog[i] = "<li  class=\"log\" id=\"li" + i + "\">" + i + ":ID," + kekka[2] + ":" + name + ":" + kekka[3] + ":" + seitxt + ":" + keitxt + ":PE" + peti +"  <details class=\"log\" style=\"display:inline;\"><summary class=\"log\" style=\"cursor:pointer; border:1px solid black; width:60px; background-color: #D4D4D4;\">詳細</summary> <div style=\"cursor:pointer; background-color: #D4D4D4; border:1px solid black; width:250px; margin-top:5px; padding:7px;\">" + twetext + "</div></details><input type=\"button\" value=\"消去\" onclick=\"kesi(" + i + "," + peti + "," + syid + "," + keikenti + "," + sagyona + ");\"></li>";
            
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

function kesi(kno,pet,keid,keiket,ksagyo) {
    console.log("開始");
    rog[kno] = "miss";
    kid = "li" + kno;
    kdoc = document.getElementById(kid);
    kdoc.remove();
    pp = pet;
    petiplus(pp);
    na = ksagyo + 1;
    keiti[keid][na] -= keiket;
    if (keiti[keid][na] <= 0) {
        keiti[keid][na] = 0;
    }

    keiktxt = "<li class=\"log\"  >" + keiti[keid][0] + name + "　勇気：" + keiti[keid][1] + "慎重：" + keiti[keid][2] + "自制：" + keiti[keid][3] + "正義：" + keiti[keid][4] + "</li>";
    keilog[keid] = keiktxt;
    keirogtext = keilog.join("");
    target = document.getElementById("keikekka");
    target.innerHTML = keirogtext;
}

function petiplus(ppp) {
    sagyo_ZZ = parseInt(document.rizalt['sagyo_Z'].value);
    ppti = sagyo_ZZ - ppp;
    document.rizalt['sagyo_Z'].value =ppti;
}

function textset(){
    ketext ="@IdeaPolisCo\n#IPCo_作業\nID:" + tt1 + "\n作業:" + tt2 + "\n出目:" + tt3 + "\n名前:" + tt4 + "\n性別:" + tt5 + "\nランク:" + tt6 + "\n勇気:" + tt7 + "\n慎重:" + tt8 + "\n自制:" + tt9 + "\n正義:" + tt10 + "\n加護:"+tt12+"\n現在カウント:"+tt11;
    document.hanteisuru['kekka'].value = ketext;
    document.getElementById("zisei2").value = tt9;
}

function counte() {

    conc = con.map(function (value, index) { return value[0]; });
    conc2 = con.map(function (value, index) { return value[1]; });
    conc3 = conc.indexOf(tt1);
        tt11 = conc2[conc3];
    tire = "";


    }

function link() {
    conc = con.map(function (value, index) { return value[0]; });
    conc2 = con.map(function (value, index) { return value[2]; });
    conc3 = conc.indexOf(tt1);
    lin = conc2[conc3];
    if (lin != "kari") {
        lintxt = "<a href=\"" + lin + "\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"border:2px solid #E470D8; background-color:#696969; padding:5px;\">エンサイクロペディア（新規タブ）</a>";
        target = document.getElementById("linklog");
        target.innerHTML = lintxt;
    } else {
        lintxt = "";
        target = document.getElementById("linklog");
        target.innerHTML = lintxt;
    }
}

function set1() {
    tt1 = document.hanteisuru['gen1'].value;
    gnid[0] = tt1;
    counte();
    link();
    textset();
    //t9999 = 0;
}
function set2() {
    tt1 = document.hanteisuru['gen2'].value;
    gnid[1] = tt1;
    counte();
    link();
    textset();
    //t9999 = 0;
}
function set3() {
    tt1 = document.hanteisuru['gen3'].value;
    gnid[2] = tt1;
    counte();
    link();
    textset();
    //t9999 = 0;
}
function set4() {
    tt1 = document.hanteisuru['gen4'].value;
    gnid[3] = tt1;
    counte();
    link();
    textset();
    //t9999 = 0;
}
function set5() {
    tt1 = document.hanteisuru['gen5'].value;
    gnid[4] = tt1;
    counte();
    link();
    textset();
    //t9999 = 0;
}
function set6() {
    tt1 = document.hanteisuru['gen6'].value;
    /*
    if (tt1 == "9999") {
        ransu = Math.floor(Math.random() * allno2 + 1);
        tt1 = String(allno[ransu]);
        t9999 = 1;
    }
    */
    gnid[5] = tt1;
    counte();
    link();
    textset();
}
function set7() {
    set_log(0);
}
function set_log(roche) {

    for (i = 0; i < setrogcount; i++) {
        if (setrog[i] == null && roche == 0) {
            if (roche == 0) {
                settext = "<div class=\"keilog\"><input type=\"button\" value=\"セット\" onclick=\"set(" + i + ");\"><label for=\"dais\">ID：</label><input type=\"number\" id=\"se" + i + "10\" name=\"se" + i + "10\" style=\"width:50px;\" value=\"00" + i + "\"><label for=\"dais\">職員名：</label><input size=\"10\" type=\"text\" name=\"se" + i + "1\" style=\"width:100px;\" value=\"A\"><label for=\"dais\">加護：</label><input size=\"10\" type=\"text\" name=\"se" + i + "8\" style=\"width:150px;\" value=\"000\"><label for=\"dais\">補正値：</label><input type=\"number\" id=\"se" + i + "9\" name=\"se" + i + "9\" style=\"width:50px;\" value=\"0\"><details style=\"display:inline-block;\"><summary style=\"margin-left:10px;cursor:pointer;border:1px solid black; width:60px; display:inline;\">開く</summary><label for=\"dais\">性別：</label><input size=\"10\" type=\"text\" name=\"se" + i + "2\" style=\"width:50px;\" value=\"none\"><label for=\"dais\">ランク：</label><input type=\"number\" id=\"se" + i + "3\" name=\"se" + i + "3\" style=\"width:30px;\" value=\"1\"><label for=\"dais\">勇気：</label><input type=\"number\" id=\"se" + i + "4\" name=\"se" + i + "4\" style=\"width:30px;\" value=\"1\"><label for=\"dais\">慎重：</label><input type=\"number\" id=\"se" + i + "5\" name=\"se" + i + "5\" style=\"width:30px;\" value=\"1\"><label for=\"dais\">自制：</label><input type=\"number\" id=\"se" + i + "6\" name=\"se" + i + "6\" style=\"width:30px;\" value=\"1\"><label for=\"dais\">正義：</label><input type=\"number\" id=\"se" + i + "7\" name=\"se" + i + "7\" style=\"width:30px;\" value=\"1\"></details></div > ";
                setrog.push(settext);
                sysysy = [[000, 0]];
                sycon.push(sysysy);
                sycount(i);
                sysysy = [i, 0, 0, 0, 0];
                keiti.push(sysysy);
                keilog.push("");
                zenkai.push('0');
                //dassoulog.push(1);
                save.push([i, "noname", "none", "1", "1", "1", "1", "1", "000", "0", "00" + i]);
                nunba.push(i);
            }
        } else {
            for (j = 1; j < 12; j++) {
                te2 = "se" + i + j;
                if (j == 1) {
                    if (roche == 1) {
                        ttt4 = save[i][j];
                    } else {
                        ttt4 = document.hanteisuru[te2].value;
                        save[i][j] = ttt4;
                    }
                }
                if (j == 2) {
                    if (roche == 1) {
                        ttt5 = save[i][j];
                    } else {
                        ttt5 = document.hanteisuru[te2].value;
                        save[i][j] = ttt5;
                    }
                }
                if (j == 3) {
                    if (roche == 1) {
                        ttt6 = save[i][j];
                    } else {
                        ttt6 = document.hanteisuru[te2].value;
                        save[i][j] = ttt6;
                    }
                }
                if (j == 4) {
                    if (roche == 1) {
                        ttt7 = save[i][j];
                    } else {
                        ttt7 = document.hanteisuru[te2].value;
                        save[i][j] = ttt7;
                    }
                }
                if (j == 5) {
                    if (roche == 1) {
                        ttt8 = save[i][j];
                    } else {
                        ttt8 = document.hanteisuru[te2].value;
                        save[i][j] = ttt8;
                    }
                }
                if (j == 6) {
                    if (roche == 1) {
                        ttt9 = save[i][j];
                    } else {
                        ttt9 = document.hanteisuru[te2].value;
                        save[i][j] = ttt9;
                    }
                }
                if (j == 7) {
                    if (roche == 1) {
                        ttt10 = save[i][j];
                    } else {
                        ttt10 = document.hanteisuru[te2].value;
                        save[i][j] = ttt10;
                    }
                }
                if (j == 8) {
                    if (roche == 1) {
                        ttt12 = save[i][j];
                    } else {
                        ttt12 = document.hanteisuru[te2].value;
                        save[i][j] = ttt12;
                    }
                }
                if (j == 9) {
                    if (roche == 1) {
                        ttt13 = save[i][j];
                    } else {
                        ttt13 = document.hanteisuru[te2].value;
                        save[i][j] = ttt13;
                    }
                }
                if (j == 10) {
                    if (roche == 1) {
                        ttt14 = save[i][j];
                    } else {
                        ttt14 = document.hanteisuru[te2].value;
                        save[i][j] = ttt14;
                    }
                }
            }
            setrog[i] = "<div class=\"keilog\"><input type=\"button\" value=\"セット\" onclick=\"set(" + i + ");\"><label for=\"dais\">ID：</label><input type=\"number\" id=\"se" + i + "10\" name=\"se" + i + "10\" style=\"width:50px;\" value=\"" + ttt14 + "\"><label for=\"dais\">職員名：</label> <input size=\"10\" type=\"text\" name=\"se" + i + "1\" style=\"width:100px;\" value=\"" + ttt4 + "\"><label for=\"dais\">加護：</label><input size=\"10\" type=\"text\" name=\"se" + i + "8\" style=\"width:150px;\" value=\"" + ttt12 + "\"><label for=\"dais\">補正値：</label><input type=\"number\" id=\"se" + i + "9\" name=\"se" + i + "9\" style=\"width:50px;\" value=\"" + ttt13 + "\"><details style=\"display:inline-block;\"><summary style=\"margin-left:10px;cursor:pointer;border:1px solid black; width:60px; display:inline;\">開く</summary><label for=\"dais\">性別：</label><input size=\"10\" type=\"text\" name=\"se" + i + "2\" style=\"width:50px;\" value=\"" + ttt5 + "\"><label for=\"dais\">ランク：</label><input type=\"number\" id=\"se" + i + "3\" name=\"se" + i + "3\" style=\"width:30px;\" value=\"" + ttt6 + "\"><label for=\"dais\">勇気：</label><input type=\"number\" id=\"se" + i + "4\" name=\"se" + i + "4\" style=\"width:30px;\" value=\"" + ttt7 + "\"><label for=\"dais\">慎重：</label><input type=\"number\" id=\"se" + i + "5\" name=\"se" + i + "5\" style=\"width:30px;\" value=\"" + ttt8 + "\"><label for=\"dais\">自制：</label><input type=\"number\" id=\"se" + i + "6\" name=\"se" + i + "6\" style=\"width:30px;\" value=\"" + ttt9 + "\"><label for=\"dais\">正義：</label><input type=\"number\" id=\"se" + i + "7\" name=\"se" + i + "7\" style=\"width:30px;\" value=\"" + ttt10 + "\"></details></div > ";
            console.log('てす');
            if (roche == 1) {
                sysysy = [[000, 0]];
                sycon.push(sysysy);
                sycount(i);
                sysysy = [i, 0, 0, 0, 0];
                keiti.push(sysysy);
                keilog.push("");
                zenkai.push('0');
                //dassoulog.push(1);
                save.push([i, "noname", "none", "1", "1", "1", "1", "1", "000", "0", "00" + i]);
                nunba.push(i);
            }
        }
    }
    serogt = setrog;
    var result = serogt.filter(function (item) {

        return item !== 'miss';

    });
    serogtext = result.join("");
    target = document.getElementById("haiti");
    target.innerHTML = serogtext;
    setrogcount += 1;
}

function set_log_keiken(roche) {

    for (i = 0; i < setrogcount; i++) {
        if (setrog[i] == null && roche == 0) {
            if (roche == 0) {
                settext = "<div class=\"keilog\"><input type=\"button\" value=\"セット\" onclick=\"set(" + i + ");\"><label for=\"dais\">ID：</label><input type=\"number\" id=\"se" + i + "10\" name=\"se" + i + "10\" style=\"width:50px;\" value=\"00" + i + "\"><label for=\"dais\">職員名：</label><input size=\"10\" type=\"text\" name=\"se" + i + "1\" style=\"width:100px;\" value=\"A\"><label for=\"dais\">加護：</label><input size=\"10\" type=\"text\" name=\"se" + i + "8\" style=\"width:150px;\" value=\"000\"><label for=\"dais\">補正値：</label><input type=\"number\" id=\"se" + i + "9\" name=\"se" + i + "9\" style=\"width:50px;\" value=\"0\"><details style=\"display:inline-block;\"><summary style=\"margin-left:10px;cursor:pointer;border:1px solid black; width:60px; display:inline;\">開く</summary><label for=\"dais\">性別：</label><input size=\"10\" type=\"text\" name=\"se" + i + "2\" style=\"width:50px;\" value=\"none\"><label for=\"dais\">ランク：</label><input type=\"number\" id=\"se" + i + "3\" name=\"se" + i + "3\" style=\"width:30px;\" value=\"1\"><label for=\"dais\">勇気：</label><input type=\"number\" id=\"se" + i + "4\" name=\"se" + i + "4\" style=\"width:30px;\" value=\"1\"><label for=\"dais\">慎重：</label><input type=\"number\" id=\"se" + i + "5\" name=\"se" + i + "5\" style=\"width:30px;\" value=\"1\"><label for=\"dais\">自制：</label><input type=\"number\" id=\"se" + i + "6\" name=\"se" + i + "6\" style=\"width:30px;\" value=\"1\"><label for=\"dais\">正義：</label><input type=\"number\" id=\"se" + i + "7\" name=\"se" + i + "7\" style=\"width:30px;\" value=\"1\"></details></div > ";
                setrog.push(settext);
                sysysy = [[000, 0]];
                sycon.push(sysysy);
                sycount(i);
                sysysy = [i, 0, 0, 0, 0];
                keiti.push(sysysy);
                zenkai.push('0');
                //dassoulog.push(1);
                save.push([i, "noname", "none", "1", "1", "1", "1", "1", "000", "0", "00" + i]);
                nunba.push(i);
            }
        }
        setrog[i] = "<div class=\"keilog\"><input type=\"button\" value=\"セット\" onclick=\"set(" + i + ");\"><label for=\"dais\">ID：</label><input type=\"number\" id=\"se" + i + "10\" name=\"se" + i + "10\" style=\"width:50px;\" value=\"" + ttt14 + "\"><label for=\"dais\">職員名：</label> <input size=\"10\" type=\"text\" name=\"se" + i + "1\" style=\"width:100px;\" value=\"" + ttt4 + "\"><label for=\"dais\">加護：</label><input size=\"10\" type=\"text\" name=\"se" + i + "8\" style=\"width:150px;\" value=\"" + ttt12 + "\"><label for=\"dais\">補正値：</label><input type=\"number\" id=\"se" + i + "9\" name=\"se" + i + "9\" style=\"width:50px;\" value=\"" + ttt13 + "\"><details style=\"display:inline-block;\"><summary style=\"margin-left:10px;cursor:pointer;border:1px solid black; width:60px; display:inline;\">開く</summary><label for=\"dais\">性別：</label><input size=\"10\" type=\"text\" name=\"se" + i + "2\" style=\"width:50px;\" value=\"" + ttt5 + "\"><label for=\"dais\">ランク：</label><input type=\"number\" id=\"se" + i + "3\" name=\"se" + i + "3\" style=\"width:30px;\" value=\"" + ttt6 + "\"><label for=\"dais\">勇気：</label><input type=\"number\" id=\"se" + i + "4\" name=\"se" + i + "4\" style=\"width:30px;\" value=\"" + ttt7 + "\"><label for=\"dais\">慎重：</label><input type=\"number\" id=\"se" + i + "5\" name=\"se" + i + "5\" style=\"width:30px;\" value=\"" + ttt8 + "\"><label for=\"dais\">自制：</label><input type=\"number\" id=\"se" + i + "6\" name=\"se" + i + "6\" style=\"width:30px;\" value=\"" + ttt9 + "\"><label for=\"dais\">正義：</label><input type=\"number\" id=\"se" + i + "7\" name=\"se" + i + "7\" style=\"width:30px;\" value=\"" + ttt10 + "\"></details></div > ";
    }

    serogt = setrog;
    var result = serogt.filter(function (item) {

        return item !== 'miss';

    });
    serogtext = result.join("");
    target = document.getElementById("haiti");
    target.innerHTML = serogtext;
    setrogcount += 1;
}

function set(idd) {
    for (i = 1; i < 11; i++) {
        te2 = "se" + idd + i;
        if (i == 1) {
            tt4 = document.hanteisuru[te2].value;
            save[idd][i] = tt4;
        }
        if (i == 2) {
            tt5 = document.hanteisuru[te2].value;
            save[idd][i] = tt5;
        }
        if (i == 3) {
            tt6 = document.hanteisuru[te2].value;
            save[idd][i] = tt6;
        }
        if (i == 4) {
            tt7 = document.hanteisuru[te2].value;
            save[idd][i] = tt7;
        }
        if (i == 5) {
            tt8 = document.hanteisuru[te2].value;
            save[idd][i] = tt8;
        }
        if (i == 6) {
            tt9 = document.hanteisuru[te2].value;
            save[idd][i] = tt9;
        }
        if (i == 7) {
            tt10 = document.hanteisuru[te2].value;
            save[idd][i] = tt10;
        }
        if (i == 8) {
            tt12 = document.hanteisuru[te2].value;
            save[idd][i] = tt12;
        }
        if (i == 9) {
            tt13 = document.hanteisuru[te2].value;
            save[idd][i] = tt13;
        }
        if (i == 10) {
            tt14 = document.hanteisuru[te2].value;
            save[idd][i] = tt14;
            syisg.push(tt14);
        }
    }
    textset();
    document.hanteisuru['bahu'].value = tt13;
    kakee = syisg.indexOf(tt14);
    syid = idd;
    /*
    dassoulog[syid] = Number(tt10);
    let total = dassoulog.reduce(function (sum, element) {
        return sum + element;
    }, 0);
    hp = 0;
    dise = 0;
    for (i = 0; i <= total; i++) {
        if (i >= 1 ) {
            if ((i % 5) == 0) {
                
                    hp += 30;
                
            }
            if ((i % 10) == 0) {
                
                    dise += 4;
                
            }
        }
    }
    if (dise >= 13) {
        dise = 13;
    }
    dassoutxt = dassousyoki + "　正義合計:" + total + "　" +"HP+"+hp+"（上限は元の3倍まで）　与ダメ+"+dise;
    target = document.getElementById("dassoulog");
    target.innerHTML = dassoutxt;
    */
}
function set8() {

    skesi = sych.length - 1;
    sych.splice(skesi, 1);
    skesi = syconk.length - 1;
    syconk.splice(skesi, 1);

    skesi = setrog.length - 1;
    setrog.splice(skesi, 1);
    skesi = save.length - 1;
    save.splice(skesi, 1);
    skesi = syisg.length - 1;
    syisg.splice(skesi, 1);
    skesi = zenkai.length - 1;
    zenkai.splice(skesi, 1);
    //skesi = dassoulog.length - 1;
    //dassoulog.splice(skesi, 1);
    skesi = keiti.length - 1;
    keiti.splice(skesi, 1);
    skesi = sycon.length - 1;
    sycon.splice(skesi, 1);
    skesi = syconk.length - 1;
    syconk.splice(skesi, 1);
    skesi = nunba.length - 1;
    nunba.splice(skesi, 1);
    var result = serogt.filter(function (item) {

        return item !== 'miss';

    });
    serogtext = result.join("");
    target = document.getElementById("haiti");
    target.innerHTML = serogtext;
    if (setrogcount >= 1) {
        setrogcount -= 1;
    }
}
function set9() {
    jsohe = [{ no: setrog.length }, { data: save }];
    let DataJSON = JSON.stringify(jsohe);
    const fileName = "IPCOsave.json";
    const link = document.createElement("a");
    link.href = "data:text/plain," + encodeURIComponent(DataJSON);
    link.download = fileName;
    link.click();
}
function set10() {

    setrog = [];
    sycon = [];
    keiti = [];
    zenkai = [];
    //dassoulog = [];
    save = [];
    nunba = [];
    sych = [];
    syconk = [];
    const input = document.createElement("input");
    input.type = "file";
    input.addEventListener("change", function (e) {
  
        var result = e.target.files[0];

        var reader = new FileReader();
        
        reader.readAsText(result);
        
        reader.addEventListener("load", () => {
            
            var title = result.name.match(/(.*)\.json$/)[1];
            
            lodata = JSON.parse(reader.result);
            console.log(lodata);
            setrogcount = lodata[0].no;
            console.log(setrogcount);

            for (i = 0; i < setrogcount; i++) {
                save.push([i, "noname", "none", "1", "1", "1", "1", "1", "000", "0", "00" + i]);
            }
            console.log(save);
            for (i = 0; i < setrogcount; i++) {
                for (j = 0; j < 11; j++) {
                    save[i][j] = lodata[1].data[i][j];
                }
            }
            set_log(1);
        });
    });
    
    input.click();
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
    syid = 4;
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
    if (checkbox[5].checked ) {
        genra1 = genra1.concat(gtF);
        genra3 = genra3.concat(gtF);
    }
    if (checkbox[6].checked) {
        genra1 = genra1.concat(gtG);
        genra3 = genra3.concat(gtG);
    }
    if (checkbox[7].checked) {
        genra1 = genra1.concat(gtH);
        genra3 = genra3.concat(gtH);
    }
    if (checkbox[8].checked) {
        genra1 = genra1.concat(gtI);
        genra3 = genra3.concat(gtI);
    }
    if (checkbox[9].checked) {
        genra1 = genra1.concat(gtJ);
        genra3 = genra3.concat(gtJ);
    }
    if (checkbox[10].checked) {
        genra1 = genra1.concat(gtK);
        genra3 = genra3.concat(gtK);
    }
    if (checkbox[11].checked) {
    genra3 = genra3.concat(gtTA);
    genra2 = genra2.concat(gtTA);
    }
    if (checkbox[12].checked) {
        genra3 = genra3.concat(gtTB);
        genra2 = genra2.concat(gtTB);
    }
    if (checkbox[13].checked) {
        genra3 = genra3.concat(gtTC);
        genra2 = genra2.concat(gtTC);
    }
    if (checkbox[14].checked) {
        genra3 = genra3.concat(gtTD);
        genra2 = genra2.concat(gtTD);
    }
    if (checkbox[15].checked) {
        genra3 = genra3.concat(gtTE);
        genra2 = genra2.concat(gtTE);
    }
    
    console.log(genra2);

    var arr = [];
    var arr2 = [];
    randam = 0;
    check = "";
    var select = document.getElementById("gen1");

    console.log("ガチャ結果");
    randam = Math.floor(Math.random() * genra1.length);
    check = genra1[randam];
    gnid[0] = String(genra1[randam]);
    console.log(genra1[randam]);
    arr.push(check);
    kensa = genra4.indexOf(genra1[randam]);
    select.options[kensa].selected = true;
    

    var select = document.getElementById("gen2");
    while (true) {
        randam = Math.floor(Math.random() * genra1.length);
        if (! arr.includes(genra1[randam])) {
            check = genra1[randam];
            gnid[1] = String(genra1[randam]);
            console.log(genra1[randam]);
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
            console.log(genra1[randam]);
            arr.push(check);
            gnid[2] = String(genra1[randam]);
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
            console.log(genra1[randam]);
            arr.push(check);
            gnid[3] = String(genra1[randam]);
            kensa = genra4.indexOf(genra1[randam]);
            select.options[kensa].selected = true;
            break;
        }
    }

    var select = document.getElementById("gen5");

        randam = Math.floor(Math.random() * genra2.length);
        if (!arr2.includes(genra2[randam])) {
            check = genra2[randam];
            console.log(genra2[randam]);
            arr2.push(check);
            console.log(genra2[randam]);
            gnid[4] = String(genra2[randam]);
            kensa = genra5.indexOf(genra2[randam]);
            console.log(kensa);
            select.options[kensa].selected = true;
           
    }

    /*9999
    var select = document.getElementById("gen6");


        select.options[351].selected = true;
        */
}

function gatya2() {
    mara =  document.hanteisuru['gen6'].value;
    ddd = 5;
    ddd2 = 1;
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

    document.rizalt['rizalt2'].value = "作業ポイント：" + sagyopo + "\n鎮圧ポイント：" + tinp + "\nロスト：" + genpo + "\n" + yokupo + "合計ポイント：" + summ;

}

function moto() {

    for (i = 0; i < seigi; i++) {
        dememe = Math.floor(Math.random() * tdaisu)+1;
        demememe = demememe + dememe;
    }
    if (taisei == 0) {
        katasa = 2;
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
        hanketu = Math.floor(hanketu * kakeru);
    }
    if (tasu >= 14) {
        tasu = 13;
    }
    if (tasu <= -14) {
        tasu = -13;
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
    kakeru = parseFloat(document.tinatusuru['kakeru'].value);
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
    kakeru = parseFloat(document.tinatusuru2['kakeru'].value);
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
    kakeru = parseFloat(document.tinatusuru3['kakeru'].value);
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
    kakeru = parseFloat(document.tinatusuru4['kakeru'].value);
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
    kakeru = parseFloat(document.tinatusuru5['kakeru'].value);
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
    kakeru = parseFloat(document.tinatusuru6['kakeru'].value);
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
    kakeru = parseFloat(document.tinatusuru7['kakeru'].value);
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
    kakeru = parseFloat(document.tinatusuru8['kakeru'].value);
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
    kakeru = parseFloat(document.tinatusuru9['kakeru'].value);
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
    kakeru = parseFloat(document.tinatusuru10['kakeru'].value);
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

function dataire() {
    kekka = document.hanteisuru['kekka'].value.split(/\n/);
    kazu = kekka.length;

    for (var i = 0; i < kazu; ++i) {
        tete1 = kekka[i].split(/\s\s+/).join('');
        tete = tete1.split(':');
        if (i >= 1 || i == 3 || i == 5 || i == 6 || i == 12) {
            if (tete[1] == "EX" || tete[1] == "ex") {
                tete[1] = 6;
            }
            kekka[i] = tete[1];
        } else {
            if (tete[1] == "EX" || tete[1] == "ex") {
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

}

function nini() {
    console.log("開始");
    nini1 = parseInt(document.hanteisuru['nini1'].value);
    nini2 = parseInt(document.hanteisuru['nini2'].value);
    nini3 = parseInt(document.hanteisuru['nini3'].value);

    ninideme = [];
    ninirogtext = "";

    for (i = 0; i < nini3; i++) {
    nini4 = 0;
    nini5 = 0;
    for (j = 0; j < nini1; j++) {
        nini4 = Math.floor(Math.random() * nini2 + 1);
        nini5 = nini5 + nini4;
        }
        ninideme[i] = "<li class=\"log\"  >" + nini5 + "</li>";
        console.log(ninideme[i]);
    }
    
    ninirogtext = ninideme.join("");
    target = document.getElementById("ninikekka");
    target.innerHTML = ninirogtext;
}

function hanteityu() {
    irai=0;
    rankk = 0;
    gene = "";
    name = "noname";
    seihi = 0;
    seiti = 0;
    sitxt = "";
    seitxt = "";
    sibou = 1;
    bahu = parseInt(document.hanteisuru['bahu'].value);
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
    namera = [];
    for (i = 0; i < kenti.length; i++) {
        tt = "se" + i + "1";
        tnt = document.hanteisuru[tt].value;
        namera.push(tnt);
    }
    pale = 0;
    sulo = 0;
    kagohuti = 000;
    kari = 0;
    kari2 = 0;
    kari3 = 0;
    kari4 = 0;
    katit = "";
    katit2 = "";
    karihako=[];
    deme = 0;
    nemax = 5;
    sykekka = 0;
    babb = 0;
    dassou = 0;
    kake = 0;
    kake2 = 0;
    kake3 = "";

    rogcount = rog.length + 1;

    dataire();

    t045 = 0;


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
    gift = 0;

    for (var i = 1; i < 7; ++i) {
        if (kekka[10] == i) {
            if (kekka[4] >= kuriti[i]) {
                kurike = 1;
            }
            if (kekka[4] == fanti[i]) {
                kuritxt = Tfan+"\n";
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

    
    babb = Number(bahu);

    if (babb >= 14) {
        babb = 13;
    }　
    kensaku321 = kekka[12].indexOf('321');
    if (kensaku321 != -1&& kekka[2]==718) {
        babb += 10;
    }
    peti = Number(kekka[4]) + babb;
    kekka[4] = peti;
    if (kekka[4] <= 0) {
        kekka[4] = 0;
    }


    nefi = parseInt(kekka[13]);

    sagyose1 = sagyona + 8;
    sagyose2 = kekka[sagyose1];
    sagyose3 = sagyose2 - 1;

    name = kekka[5];

    gene = conc[conc3]+" ";

    kensaku952 = kekka[12].indexOf('952');
    if (kensaku952 != -1 &&sagyona!=4 &&sagyona!=5) {
        sagyona = 2;
        keina = "自制：";
        kekka[3] = "愛着";
    }

    kensaku467 = kekka[12].indexOf('467');
    if (kensaku467 != -1) {
        if (kekka[9] >= kekka[10]) {
            kari = kekka[9] * 2;
        } else {
            kari = kekka[10] * 2;
        }
        text += "職員" + name + "の最大SPが" + kari + "減少"+T2+"\n";
    }

    //作業不可反応
    huka = 0;


    if (t318 == syid) {
        text += "職員" + name + "は未来模倣体に囚われて"+T5+"\n";
        seihi = 3;
        huka = 1;
    } 
    if (t152 == syid && kekka[2] != 152) {
        text = "職員" + name + "は小さな貴方の為の可愛い虫籠以外に作業でき"+T4+"\n";
        seihi = 3;
        huka = 1;
    } 
    if (syid == t590) {
        text = "職員" + name + "は椅子に座って"+T5+"\n";
        seihi = 3;
        huka = 1;
    } 
    kensaku145 = kekka[12].indexOf('145');
    if (kensaku145 != -1) {
        text += "職員" + name + "は行動不能\n";
        seihi = 3;
        huka = 1;
    } 
    if (t315 == 1 && kekka[2] != 315) {
        text += "次の作業は懐かしい友達への愛着に固定されて"+T5+"\n";
        seihi = 3;
        huka = 1;
    } else {
    if (t315 == 1 && kekka[2] == 315 && sagyona!=2) {
        text += "次の作業は懐かしい友達への愛着に固定されて"+T5+"\n";
        seihi = 3;
        huka = 1;
    }
    }
    if (t8312 != -1) {
        if (t831 == syid) {
            text = "職員" + name + "はオリーブ畑に捕らわれて"+T5+"\n";
            seihi = 3;
            huka = 1;
        }
    }

    if (huka == 0) {

        //ここから
        namae = "g";
        namae += kekka[2];
        hantei = namae;
        funcName = hantei;
        strngCall = "return " + funcName + "()";
        f = new Function(strngCall);
        f();

        if (sagyona == 4 || sagyona == 5 || irai == 1) {
            if (kekka[2] != 033) {
                seitxt = "";
                seihi = 3;
            }
        }

        if (kekka[2] == 931) {
            if (kekka[10] == 1) {
                if (deme >= 4) {
                    kurike = 1;
                }
            }
            if (kekka[10] == 2) {
                if (deme >= 8) {
                    kurike = 1;
                }
            }
            if (kekka[10] == 3) {
                if (deme >= 13) {
                    kurike = 1;
                }
            }
            if (kekka[10] == 4) {
                if (deme >= 17) {
                    kurike = 1;
                }
            }
            if (kekka[10] == 5) {
                if (deme >= 21) {
                    kurike = 1;
                }
            }
            if (kekka[10] == 6) {
                if (deme >= 24) {
                    kurike = 1;
                }
            }
        }

        if (kurike == 1) {
            if (gift == 0) {
                kuritxt = Tcuri+Tgift+"\n";
            } else {
                kuritxt = Tcuri+"\n";
            }
        }
        //ここまで

    }
        
    
    if (irai == 1) {
        if (kekka[2] != "033") {
        peti = 0;
        }
        keikenti = 0;
    }

    sykensaku(259);
    if (sykekka == 1 && kekka[2]!=259) {
        sykasan(259, 3, 0);
    }

    kensaku904 = kekka[12].indexOf('904');
    if (kensaku904 != -1 && kekka[2] == "904") {
        keikenti = keikenti * 2;
    }

    if (t0922 == 1) {
        peti += t0923;
    } else {
        if (kekka[2] == "092") {
            peti += t0923;
        }
    }

    kensaku204 = kekka[12].indexOf('204');
    if (deme >= 20 && kensaku204 != -1) {
        conc = con.map(function (value, index) { return value[0]; });
        conc2 = con.map(function (value, index) { return value[1]; });
        conc4 = conc.indexOf('204');
        kari = conc2[conc4];
        text += "花輪のブライアのカウンターが減少"+T2+"\n";
        kari -= 1;
        if (kari <= 0) {
            text += "花輪のブライアは"+Tdassou+"\n花冠が「病の薔薇」に変化する\nカウンター0→2\n";
            dassou = 1;
            kari = 2;
        }
        con[conc4][1] = kari;
        if (kekka[2] == 204) {
            nefi = kari;
        }
    }

    kensaku598 = kekka[12].indexOf('598');
    if (kensaku598 != -1 && kurike == 1) {
        text += "\n黒10ダメージ\n";
    }

    kensaku440 = kekka[12].indexOf('440');
    if (seihi == 0 && kensaku440 != -1) {
        conc = con.map(function (value, index) { return value[0]; });
        conc2 = con.map(function (value, index) { return value[1]; });
        conc4 = conc.indexOf('440');
        kari = conc2[conc4];
        text += "440の加護が消失"+T2+"\n悠然たる皇帝のカウンターが減少"+T2+"\n";
        kagokesi('440');
        kari -= 1;
        if (kari <= 0) {
            text += "悠然たる皇帝は"+Tdassou+"\nカウンター0→2\n";
            dassou = 1;
            kari = 2;
        }
        con[conc4][1] = kari;
        if (kekka[2] == 440) {
            nefi = kari;
        }
    }

    kensaku717 = gnid.indexOf('717');
    if (kensaku717 != -1) {
        kensaku1 = kekka[12].indexOf('717');
        kensaku2 = kekka[12].indexOf('7172');
        if (kensaku1 != -1 && seihi == 0) {
            conc = con.map(function (value, index) { return value[0]; });
            conc2 = con.map(function (value, index) { return value[1]; });
            conc4 = conc.indexOf('717');
            kari = conc2[conc4];
            text += "天空の語り人のカウンターが減少"+T2+"\n";
            kari -= 1;
            if (kari <= 0) {
                text += "天空の語り人は"+Tdassou+"\n「銀河の光」を持つ職員は「光の勇士」に、「停滞の闇」を持つ職員は「闇の獣」になる\nカウンター0→4\n";
                dassou = 1;
                kari = 4;
            }
            con[conc4][1] = kari;
            if (kekka[2] == 717) {
                nefi = kari;
            }
        }
        if (kensaku2 != -1 && seihi == 1) {
            conc = con.map(function (value, index) { return value[0]; });
            conc2 = con.map(function (value, index) { return value[1]; });
            conc4 = conc.indexOf('717');
            kari = conc2[conc4];
            text += "天空の語り人のカウンターが減少"+T2+"\n";
            kari -= 1;
            if (kari <= 0) {
                text += "天空の語り人は"+Tdassou+"\n「銀河の光」を持つ職員は「光の勇士」に、「停滞の闇」を持つ職員は「闇の獣」になる\nカウンター0→4\n";
                dassou = 1;
                kari = 4;
            }
            con[conc4][1] = kari;
            if (kekka[2] == 717) {
                nefi = kari;
            }
        }
    }

    kensaku822 = kekka[12].indexOf('822');
    if (kensaku822 != -1 && kekka[2] != 822 && sagyona == 2 && seihi == 1) {
        text += "822の加護の自制+15が消えて-15になっ"+T3+"\n";
        kagokesi('822');
        kagohuti = "8222";
        kagohuyo();
    }

    sykensaku(936);
    if (sykekka != 0 && kekka[2] != 936) {
        daideme1 = 2;
        daideme2 = 20;
        daisu();
        text += "\n" + daideme4 + "赤ダメージ\n";
    }

    sykensaku(822);
    if (sykekka != 0 && kekka[2] != 822) {
        text += "柘榴石のカーバンクルは"+Tdassou+"\nカウンター0→1\n";
        dassou = 1;
        sykasan(822, 3, 0);
    }

    kensaku720 = kekka[12].indexOf('720');
    if (kensaku720 != -1 && kekka[2] != 720) {
        text += "職員" + name + "は溶け"+T3+"\n";
        sibou = 0;
    }

    kensaku035 = kekka[12].indexOf('035');
    if (kensaku035 != -1 && seihi == 0 ) {
        text += "▼職員" + name + "は"+Tpani+"\n" + gene + "は"+Tdassou+"\n";
        pani = 1;
        dassou = 1;
        kagokesi('035');
    }

    kensaku = kekka[12].indexOf('826');
    if (sibou != 0) {
        if (kensaku != -1 && seihi == 0 && kekka[2] != "826") {
            pani = 1;
            text += "灯籠から哀悼者の涙が流れ込む\n";
            text += "▼職員" + name + "はシャットダウン性"+Tpani+"\n";
        }
    }

    kensaku452 = kekka[12].indexOf('452');
    if (kensaku452 != -1 && seihi == 0) {
        text += "▼職員" + name + "はパニックに陥った（452の加護がある場合）\nパニックの種類に応じて強化される\n殺人性→与ダメ2倍\n自殺性→制限時間10分、恐怖ダメージ1ランク上昇\n徘徊性→白ダメージ2倍、10分で移動\nｼｬｯﾄﾀﾞｳﾝ→1度の脱走数2体\n";
        pani = 1;
    }

    kensaku914 = kekka[12].indexOf('914');
    if (kensaku914 != -1 && kekka[2] != 914) {
        sykasan(914, 0, 1);
        sykensaku(914);
        if (sykekka >= 3) {
            text += "入学届が退学届へと変化"+T2+"\n▼職員" + name + "は徘徊性"+Tpani+"\n加護欄から「914」を消去\n";
            pani = 1;
            sykasan(914, 3, 0);
            kagokesi('914');
        }
    }

    //パニック反応

    if (pani == 1) {
        kensaku = kekka[12].indexOf('915');
        if (kensaku != -1) {
            sibou = 0;
            text = "";
            
        }

    }

    kagoche("145", 1);
    if (kensakuC != -1 && pani == 1) {
        sibou = 0;
    }

    kensaku462 = kekka[12].indexOf('462');
    if (kensaku462 != -1 && kekka[2] != 462) {
        sykasan(462, 0, 1);
        sykensaku(462);
        if (sykekka >= 3) {
            text += "\n職員" + name + "は骸の王子に変貌"+T2+"\n真っ赤な林檎は"+Tdassou+"\n";
            kagokesi('462');
            dassou = 1;
            sykasan(462, 3, 0);
        }
    }
    if (kensaku462 != -1 && pani == 1) {
        text += "\n職員" + name + "は骸の王子に変貌"+T2+"\n真っ赤な林檎は"+Tdassou+"\n";
        kagokesi('462');
        dassou = 1;
    }

    kensaku894 = gnid.indexOf('894');
    if (pani == 1 && kekka[2] != 894 && kensaku894 != -1) {
        conc = con.map(function (value, index) { return value[0]; });
        conc2 = con.map(function (value, index) { return value[1]; });
        conc4 = conc.indexOf('894');
        kari = conc2[conc4];
        text += "\n万雷の曲芸団のカウンターが減少"+T2+"\n";
        kari -= 1;
        if (kari <= 0) {
            text += "万雷の曲芸団は"+Tdassou+"\nカウンター0→3\n";
            dassou = 1;
            kari = 3;
        }
        con[conc4][1] = kari;
    }

    kensaku945 = kekka[12].indexOf('945');
    if (kensaku945 != -1 && pani == 1 && sibou == 1) {
        sibou = 0;
        text += "職員" + name + "は本に吸い込まれ"+T3+"\n";
    }
    
    kensaku015 = kekka[12].indexOf('015');
    if (kensaku015 != -1 && kurike == 1) {
        text += "部門内のランダムな職員1名に加護「015」と作業成功率-5が伝染\n";
    }

    kensaku094 = kekka[12].indexOf('094');
    if (kensaku094 != -1 && kekka[2] != "094") {
        ransu = Math.floor(Math.random() * 10 + 1);
        if (ransu <= 4) {
            text += "処刑執行日の放送が流れ"+T3+"\n";
            sibou = 0;
        }
    }

    sykensaku(036);
if (sykekka >= 2 &&kekka[2]!="036") {
        if (seihi == 0) {
            sibou = 0;
            daideme1 = kekka[7];
            daideme2 = 6;
            daisu();
            text += "口から花を零"+T2+"\n部門内全職員に" + daideme4 + "白ダメージ\n";
            sykasan(036, 3, 0);
        }

    } 

    kensaku499 = kekka[12].indexOf('499');
    if (kensaku499 != -1 && sagyona == 2) {
        text += "▼職員" + name + "はチーズに変化"+T2+"\n脱走時情報は魅惑のチーズのエンサイクロペディア参照\n";
        sibou = 0;
    }

    //173 終止符のクラゲ 海鮮への作業成功でカウンター回復　140 828
    if (kekka[2] == 140 || kekka[2] == 828 || kekka[2] == 215 || kekka[2] == 467 || kekka[2] == 826) {
        if (seihi == 1) {
            if (con[187][1] <=2) {
            text += "終止符のクラゲのカウンターが1増加"+T2+"\n";
            con[187][1] += 1;
            }
        }
    }

    kensaku966 = kekka[12].indexOf('966');
    if (kensaku966!=-1 &&seihi==0) {
        pani = 1;
        text += "▼職員" + name + "は自殺性"+Tpani+"\n";
    }


    kensaku531 = kekka[12].indexOf('531');
    kensaku243 = kekka[12].indexOf('243');
    if (kensaku531 != -1 && kekka[2] != 531) {
        if (kekka[2] == "091" || kekka[2] == "093" || kekka[2] == 294 || kekka[2] == 437 || kekka[2] == 526) {

            text += "耐性に関係なく作業ダメージを受ける\n";
        }
    }

    //宇宙地図
    kensaku912 = kekka[12].indexOf('912');
    if (kensaku912 != -1 && kekka[2] != 912) {
        if (kekka[2] != 125 && kekka[2] != 997 && kekka[2] != 829 && kekka[2] != 906 && kekka[2] != 609 && kekka[2] != "005" && kekka[2] != 625 && kekka[2] != 102 && kekka[2] != 314 && kekka[2] != "031" && kekka[2] != 185 && kekka[2] != 725 && kekka[2] != "033" && kekka[2] != 777) {
            if (zenkai[syid] != 125 && zenkai[syid] != 997 && zenkai[syid] != 829 && zenkai[syid] != 906 && zenkai[syid] != 609 && zenkai[syid] != "005" && zenkai[syid] != 625 && zenkai[syid] != 102 && zenkai[syid] != 314 && zenkai[syid] != "031" && zenkai[syid] != 185 && zenkai[syid] != 725 && zenkai[syid] != "033" && zenkai[syid] != 777) {
            sibou = 0;
            text += "この職員の加護欄から「912」を消去する\n";
        }
        }
    }

    kensaku696 = kekka[12].indexOf('696');
    if (kensaku696 != -1 && kekka[2] != 696) {
        sykasan(696, 0, 1);
        sykensaku(696);
        if (sykekka == 3) {
            text += "職員" + name + "の首がもげ"+T3+"\n";
            sibou = 0;
            t696 = 1;
        }
    }

    kensaku902 = kekka[12].indexOf('902');
    if (kensaku902 != -1) {
        text += "職員" + name + "はこの日は蘇生でき"+T4+"\n";
        sibou = 0;
    }

    kensaku093 = kekka[12].indexOf('093');
    kensaku0931 = kekka[12].indexOf('1912');

    if (kekka[2] != 093 && sagyona == 2) {
        kensaku093 = kekka[12].indexOf('093');
        if (kensaku093 != -1 && sibou !== 0) {
            text += "▼狐の声が聞こえる。\n『はぁ？アンタはおれのモノや。" + name + "。』\n";
            text += "百火は脱走した。加護093を持った職員は即座に殺人性パニックとなる。\n";
            dassou = 1;

        } else {
            if (kensaku093 != -1 && sibou == 0) {
                text += "▼狐の声が聞こえる。\n『なぁ、誰が" + name + "を殺したん？』\n";
                text += "百火は脱走した。093系統の加護を消去してください。\n";
                dassou = 1;
                kagokesi('093');
                kagokesi('0931');
                kagokesi('0932');
                kagokesi('0933');
            }

        }
    }

    kensaku152 = kekka[12].indexOf('152');
    if (kensaku152 != -1 && kekka[2] != "152" && seihi == 1) {
        kagokesi('152');
        sagyobahu(+2);
        text += "マーキング「152」が消え"+T3+"\n";
    }
    kensaku1522 = kekka[12].indexOf('1522');
    if (kensaku1522 != -1 && kekka[2] != "152" && seihi == 1) {
        kagokesi('1522');
        text += "マーキング「1522」が消え"+T3+"\n";
    }


    if (kekka[2] != 093 && sagyona !== 2) {

        kensaku0933 = kekka[12].indexOf('0933');
        if (kensaku0933 != -1) {
            text += "▼狐の声が聞こえる。\n『" + name + "、おれのとこに帰ってこい。』\n";
            text += "百火は脱走した。加護093を持った職員は即座に殺人性パニックとなる。\n加護0931,0933を削除。\n";
            dassou = 1;
            kagokesi('0931');
            kagokesi('0933');

        } else {

            kensaku0932 = kekka[12].indexOf('0932');
            if (kensaku0932 != -1) {
                text += "部門全体に炎の雨が降り注ぐ。部門内の職員全員にRED・特殊距離の15ダメージ。\n";
                kagohuti = "0933";
                kagohuyo();

            } else {



                kensaku093 = kekka[12].indexOf('093');
                if (kensaku093 != -1) {
                    text += "部門全体に炎の雨が降り注ぐ。部門内の職員全員にRED・特殊距離の15ダメージ。\n";
                    kagohuti = "0932";
                    kagohuyo();
                } else {
                    kensaku093 = kekka[12].indexOf('093');
                    if (kensaku093 != -1 && sibou == 0) {
                        text += "▼狐の声が聞こえる。\n『誰に殺された、" + name + "……』\n";
                        text += "百火は脱走した。093系統の加護を消去してください。\n";
                        dassou = 1;
                        kagokesi('093');
                        kagokesi('0931');
                        kagokesi('0932');
                        kagokesi('0933');
                    }
                }
            }
        }
    }


    if (kensaku093 != -1) {
        if (pani == 1) {
            text += "▼狐の声が聞こえる。\n『かわいそうに。今迎えに行くからなぁ、" + name + "。』\n";
            text += "百火は脱走した。職員" + name + "のパニックは殺人性となる。\n";
            dassou = 1;

        }
    }

    kensaku874 = kekka[12].indexOf('874');
    if(kensaku874!=-1 && kekka[2]!="874" && sagyona!=4 && seihi==1) {
        if (kurike == 1) {
            text += "心壊甘露のカウンターが2減少"+T2+"\n";
            con[143][1] -= 2;
        } else {
            text += "心壊甘露のカウンターが減少"+T2+"\n";
            con[143][1] -= 1;
        }
    }
    if (con[143][1] <= 0 && kekka[2] != "874") {
        text += "全ての甘露を飲んだ職員が「とろける甘味」に変化"+T2+"\n心壊甘露のカウンター0→3\n";
        con[143][1] = 3;
    }

    kensaku100 = kekka[12].indexOf('100');
    if (kensaku100 != -1) {
        if (kekka[2] == 100) {
            text += "▼不気味なアナウンスと電車の警笛が聞こえる…\n「ご乗車有難うございます、" + name + "様。」\n";
            text += "職員" + name + "は異界電車に引きずり込まれてしまっ"+T3+"\n";
            sibou = 0;
        } else {
            text += "手動で100の加護を消去して下さい。\n";
            kagokesi('100');

        }
    }

    kensaku1001 = kekka[12].indexOf('1001');
    if (kensaku1001 != -1) {
        if (kekka[2] != 100) {
            text += "▼不気味なアナウンスと電車の警笛が聞こえる…\n「逃がさないと言ったでしょう、" + name + "様。次の停車駅は私の収容室以外なのですから。」\n";
            text += "職員" + name + "は異界電車に引きずり込まれてしまっ"+T3+"\n";
            sibou = 0;
        } else {
            text += "手動で1001の加護を消去して下さい。\n";
            kagokesi('1001');

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
        text += "職員"+name+"は音となって消え"+T3+"\n";
                sibou = 0;
            }
        }
    if (kensaku11 != -1 && sagyona == 0) {
        text += "職員"+name+"は体が急激に腐敗"+T2+"\n";
        sibou = 0;
    }

    if (kekka[2] != 524) {
    if (kensaku5243 != -1) {
        sibou = 0;
        text += "▼職員" + name + "はストーブに引き込まれ、空っぽのストーブと共に消失"+T2+"\n次の作業時には空っぽのストーブのみ戻ってくる\n";
    } else {
        if (kensaku5242 != -1) {
            text += "職員" + name + "の加護欄に「5242」を追加\n";
            kensaku = kekka[12].indexOf('5242');
            if (kensaku == -1) {
                kagohuti = "5242";
                kagohuyo();
            }
        } else {
            if (kensaku524 != -1) {
                text += "職員" + name + "の加護欄に「5241」を追加\n";
                kensaku = kekka[12].indexOf('5241');
                if (kensaku == -1) {
                    kagohuti = "5241";
                    kagohuyo();
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
            text += "職員" + name + "は水槽に引きずりこまれ"+T3+"\nこの職員のステータスがこの日の間初期値になる\n";

        }
    }


    kensaku451 = kekka[12].indexOf('451');
    if (kensaku451 != -1 && sagyona == 3) {
        sibou = 0;
        text += "職員" + name + "は作業前に即座に死亡したためこの作業で発動した能力などは無効\n";
    }

    kensaku047 = kekka[12].indexOf('047');
    if (kensaku047 != -1 && kekka[2] != "047") {
        text += "あなたのナンバーワンのカウンターが減少"+T2+"\n";
        con[97] -= 1;
        if (con[97] <= 0) {
            text += "あなたのナンバーワンは"+Tdassou+"\nあなたのナンバーワンのカウンター0→2\n";
            dassou = 1;
            con[97] = 2;
        }
    }

    //死亡反応

    kensaku919 = kekka[12].indexOf('919');
    kensaku9192 = kekka[12].indexOf('9192');
    if (kensaku919 != -1 || kensaku9192 != -1) {
        if (kensaku9192 != -1 && pani == 1) {
            sibou = 0;
        }
        if (sibou == 0) {
            conc = con.map(function (value, index) { return value[0]; });
            conc2 = con.map(function (value, index) { return value[1]; });
            conc4 = conc.indexOf('919');
            kari = conc2[conc4];
            text += "\n片翼の花のカウンターが減少"+T2+"\n";
            kari -= 1;
            if (kari <= 0) {
                text += "\n片翼の花nの収容室が草に覆われ"+T3+"\n";
                kari = 0;
            }
            con[conc4][1] = kari;
            if (kekka[2] == 919) {
                nefi = kari;
            }
        }
    }

    kensaku = kekka[12].indexOf('987');
    if (kensaku != -1 && sibou == 0) {
        text += "職員" + name + "と連携されている職員全員が死亡する\n";
        sibou = 1;
    }

    kensaku808 = kekka[12].indexOf('808');
    sykensaku(808);
    if (kensaku808 != -1 && kekka[2] != 808 && sykekka == 0) {
        text += "殺さる強欲は"+Tdassou+"\n";
        sykasan(808, 3, 0);
        sibou = 0;
        dassou = 1;
    }
    if (kensaku808 != -1 && sibou == 0) {
        kagokesi('808');
        sykasan(808, 3, 0);
    }

    kensaku406 = kekka[12].indexOf('406');
    if (kensaku406 != -1 && sibou == 0) {
        text += "部門全体に赤30ダメージ（幻想体含む）\n「雪の加護」を持つ職員全員が死亡する\n死亡後加護は消えるが効果は残る\n";
        kagohuti = "406";
        kagohuyo();
    }

        kensaku491 = gnid.indexOf('491');
        if (sibou == 0 && kensaku491 != -1) {
            conc = con.map(function (value, index) { return value[0]; });
            conc2 = con.map(function (value, index) { return value[1]; });
            conc4 = conc.indexOf('491');
            kari = conc2[conc4];
            text += "蟻の葬列のカウンターが減少"+T2+"\n";
            kari -= 1;
            if (kari <= 0) {
                text += "蟻の葬列は"+Tdassou+"\nカウンター0→3\n";
                dassou = 1;
                kari = 3;
            }
            con[conc4][1] = kari;
            if (kekka[2] == 491) {
                nefi = kari;
            }
        }

        kensaku715 = gnid.indexOf('715');
        kensaku = kekka[12].indexOf("715");
        if (sibou == 0 && kensaku715 != -1 && kensaku != -1) {
            conc = con.map(function (value, index) { return value[0]; });
            conc2 = con.map(function (value, index) { return value[1]; });
            conc4 = conc.indexOf('715');
            kari = conc2[conc4];
            text += "地底の夢追い人のカウンターが減少"+T2+"\n";
            kari -= 1;
            if (kari <= 0) {
                text += "部門内のランダムな職員がシャットダウンパニックに陥った（全耐性脆弱）\nカウンター0→3\n";
                dassou = 1;
                kari = 3;
            }
            con[conc4][1] = kari;
            if (kekka[2] == 715) {
                nefi = kari;
            }
        }

    kensaku830 = gnid.indexOf('830');
    kensaku8302 = kekka[12].indexOf('830');
    if (sibou == 0 && kekka[2] != 830 && kensaku830 != -1 &&kensaku8302 !=-1) {
        conc = con.map(function (value, index) { return value[0]; });
        conc2 = con.map(function (value, index) { return value[1]; });
        conc4 = conc.indexOf('830');
        kari = conc2[conc4];
        text += "\n夜祭花火のカウンターが減少"+T2+"\n";
        kari -= 1;
        if (kari <= 0) {
            text += "部門全域に花火が打ち上がっ"+T3+"\n配属職員全員に5赤ダメージ、SP10回復\nただしカウンター0になった時点で誰も死亡していなかった場合は何も起き"+T4+"\nカウンター0→5\n";
            dassou = 1;
            kari = 5;
        }
        con[conc4][1] = kari;
    }

    if (kensaku12 != -1 && pani == 1) {
        
        text += "部門内の加護829職員は全員星巡りとなり、飛び立つ流星が"+Tdassou+"\n星巡りは鎮圧後死亡する\n";
        dassou = 1;
    }

    kensaku775 = gnid.indexOf('775');
    if (kensaku775 != -1) {
        kensaku1 = kekka[12].indexOf('775');
        if (kensaku1 != -1) {
            if (sibou == 0 || pani == -1) {
                text += "夢幻泡沫りた～んずは"+Tdassou+"\n";
                dassou = 1;
            }

        }
    }

    kensaku908 = kekka[12].indexOf('908');
    if (kensaku908 != -1) {
        if (sibou == 0 || pani == 1) {
            text += "輝血の燈籠流しが"+Tdassou+"\n部門内全職員の908加護が消える\n";
            dassou = 1;
        }
    }

    if (seihi == 0) {
        seitxt = Tsippai+"\n";

    } else {
        seitxt = Tseikou+"\n";
        if (seihi == 3) {
            seitxt = "";
        }
    }

    if (seihi == 0) {
        
        jougen = seiti;
        if (pale == 0) {
            dame = jougen - kekka[4];
            if (irai == 1 || sagyona==4) {
                dame = 0;
            }
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

        if (kekka[2] == 979 && sagyona == 1) {
            dame = 0;
            dametxt = "";
        }

        if (kekka[2] == 110 ||kekka[2]==216) {
            dametxt = "";
            dame = 0;
        }
        kensaku536 = kekka[12].indexOf('5362');
        if (kensaku536 != -1 && dame >= 1) {
            sibou=0;
        }
        kensaku045 = kekka[12].indexOf('045');
        if (kensaku045 != -1 && dame >= 1 && kekka[2]=="045") {
            dame = 0;
        }
        if ( dame >= 1 && kekka[2] == "045" && t045==0) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
            if (nefi <= 0 &&t045==0) {
                text += "黎明の手向け花は"+Tdassou+"\nカウンター0→2\n";
                dassou = 1;
                nefi = 2;
            }
        }
    }

    kensaku534 = kekka[12].indexOf('534');
    if (kensaku534 != -1 && kekka[2] != "534") {
        if (t5341 != -1) {
            sykasan(534, 0, 1);
            sykensaku(534);
            if (sykekka >= 2 ) {
                sykensaku(535);
                if (sykekka == 0) {
                    sibou = 0;
                    sykasan(534, 3, 0);
                } else {
                    if (sibou == 1) {
                        text += "サルベージの作業により得たものを失っ"+T3+"\n";
                        sykasan(535, 3, 0);
                        sykasan(534, 3, 0);

                    }
                }
            }
        }
        if (sibou == 0) {
            t5341 = 1;
        }
    }

    if (sibou == 0) {
        sitxt = "▼職員"+name+Tsibou+"\n";

    } else {
        sitxt = Tseikan+"\n";

    }
    if (sagyona == 4 || sagyona == 5) {
        seitxt = "";
        seihi = 3;
    } 
    keitxt = 0;
    if (seihi == 1) {
        keitxt = keina + keikenti;

    } else {
        keitxt = 0;
        keikenti = 0;
    }

    if (peti >= jou) {
        peti = jou;
    }

    kensaku022 = kekka[12].indexOf('022');
    if (kensaku022 != -1) {
        if (dame >= 1) {
            text += "灯の保護のカウンターが減少"+T2+"\n";
        }
    }
    if (nefi > nemax) {
        nefi = nemax;
    }
    kensaku9762 = kekka[12].indexOf('9762');
    if (kensaku9762 != -1 && kekka[2] != "976") {
        text += "加護欄から「9762」を消去する（手動）\n";
        kagokesi('9762');
    }

    kensaku976 = kekka[12].indexOf('976');
    kensaku9752 = kekka[12].indexOf('9752');
    if (kensaku9752 != -1 && kensaku976 == -1 && kekka[2] != "975") {
        text += "加護欄から「9752」を消去する（手動）\n";
        kagokesi('9752');

    }

    kensaku246 = kekka[12].indexOf('246');
    if (kensaku246 != -1 && pani==1) {
        sibou = 0;
        text += "殺人性パニックと同じ動きをする、詳細は鬼教官のページ参照\n";

    }
    //708　冥府の大河
    kensaku708 = kekka[12].indexOf('708');
    if (kekka[2] != 708 && kensaku708 != -1) {
        t708 = tt12;
        if (t708 != tt708 && seihi==1) {
            text += "▼職員" + name + "は「成り損ない」になっ"+T3+"\n（708の後に加護が増えている場合のみなので減った場合などでこのテキストが表示された場合は無効）\n";
        }
    }
    if (kensaku708 != -1) {
        if (kekka[10] <= 1) {
            kari = 4;
        } else {
            if (kekka[10] == 2) {
                kari = 7;
            } else {
                if (kekka[10] == 3) {
                    kari = 10;
                } else {
                    if (kekka[10] == 4) {
                        kari = 13;
                    } else {
                        if (kekka[10] == 5) {
                            kari = 16;
                        } else {
                            if (kekka[10] >= 6) {
                                kari = 19;
                            } else {

                            }
                        }
                    }
                }
            }
        }
        if (deme <= kari) {
            text += "▼職員" + name + "は「成り損ない」になっ"+T3+"\n";
        }
    } 

    if (kekka[2] == 708 &&kensaku708!=-1) {
        t708 = tt12;
        tt708 = tt12;
    }

    sykensaku(525);
    if (sykekka == 1&&sibou==0) {
        text += "赤い鳥のカウンターが減少"+T2+"\n";
        con[181][1] -= 1;

    }
    if (con[181][1] <= 0) {
        text += "赤い鳥は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        con[181][1] = 2;
    }


    kensaku303 = kekka[12].indexOf('303');
    if (kensaku303 != -1) {
        if (kekka[2] == "303" && dassou == 1) {

        } else {
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 1) {
                text += "ランダムな未感染職員1名が「感染者」となる\n感染者の加護欄に「3032」を追加\n";
                conc = con.map(function (value, index) { return value[0]; });
                conc2 = con.map(function (value, index) { return value[1]; });
                conc4 = conc.indexOf('303');
                kari = conc2[conc4];
                text += "\nメルトフレンズのカウンターが減少"+T2+"\n";
                kari -= 1;
                if (kari <= 0) {
                    text += "メルトフレンズは"+Tdassou+"\n「仲間の証」を持つ職員は「溶けた親友」、「感染者」の全ての職員は「溶けた友達」に変異する\nカウンター0→3\n";
                    text += "『さあ、一緒に外へ行こう！友達作りに！』\n";
                    dassou = 1;
                    kari = 3;
                }
                con[conc4][1] = kari;
                if (kekka[2] == "303") {
                    nefi = kari;
                }
            }
        }

    }

    sykensaku(886);
    if (sykekka != 0 && t8863 == 0) {
        console.log(sykekka);
        if (sykekka == 43) {
            text += "\n職員" + name + "は指令を達成できなかっ"+T3+"\n";
            console.log('4');
            sykasan(886, 3, 0);
            kari = 1;
            kagokesi('8864');
            t886 = 0;
            t8862 = "";
        }
        if (sagyona != 4 || sagyona != 5 || irai != 1) {
            if (sykekka == 1 || sykekka == 2 || sykekka == 3 || sykekka == 4 || sykekka == 5 || sykekka == 6 || sykekka == 7 || sykekka == 8 || sykekka == 9) {
                if (seihi == 1) {
                    if (sykekka == 1) {
                        text += "\n職員" + name + "は指令を達成"+T2+"\n";
                        kagokesi('8861');
                        console.log('1-1');
                            sykasan(886, 3, 0);
                    } 
                    if (sykekka == 3) {
                        sykasan(886, 3, 4);
                    } else {
                        if (sykekka == 4) {
                            text += "\n職員" + name + "は指令を達成"+T2+"\n";
                            kagokesi('8861');
                            console.log('1-2');
                                sykasan(886, 3, 0);
                        } 
                    }
                    if (sykekka == 6) {
                        sykasan(886, 3, 7);
                    } else {
                        if (sykekka == 7) {
                            sykasan(886, 3, 8);
                        } else {
                            if (sykekka == 8) {
                                text += "\n職員" + name + "は指令を達成"+T2+"\n";
                                kagokesi('8861');
                                console.log('1-3');
                                    sykasan(886, 3, 0);
                            } 
                        }
                    }
                } else {
                    text += "\n職員" + name + "は指令を達成できなかっ"+T3+"\n";
                    kagokesi('8861');
                    console.log('1-no');
                    sykasan(886, 3, 0);
                    kari = 1;
                }

            }
            if (sykekka == 10 || sykekka == 11 || sykekka == 12 || sykekka == 13 || sykekka == 14 || sykekka == 15 || sykekka == 16 || sykekka == 17 || sykekka == 18) {
                if (sagyona == 0) {
                    if (sykekka == 10) {
                        text += "\n職員" + name + "は指令を達成"+T2+"\n";
                        kagokesi('8862');
                        console.log('2a-1');
                            sykasan(886, 3, 0);
                    } 
                    
                    if (sykekka == 12) {
                        sykasan(886, 3, 13);
                    } else {
                        if (sykekka == 13) {
                            text += "\n職員" + name + "は指令を達成"+T2+"\n";
                            kagokesi('8862');
                            console.log('2a-2');
                                sykasan(886, 3, 0);
                        } 
                        
                    }
                    if (sykekka == 15) {
                        sykasan(886, 3, 16);
                    } else {
                        if (sykekka == 16) {
                            sykasan(886, 3, 17);
                        } else {
                            if (sykekka == 17) {
                                text += "\n職員" + name + "は指令を達成"+T2+"\n";
                                kagokesi('8862');
                                console.log('2a-3');
                                    sykasan(886, 3, 0);
                            } 
                            
                        }
                    }
                } else {
                    text += "\n職員" + name + "は指令を達成できなかっ"+T3+"\n";
                    kagokesi('8862');
                    console.log('2a-no');
                    sykasan(886, 3, 0);
                    kari = 1;
                }

            }

            if (sykekka == 19 || sykekka == 20 || sykekka == 21 || sykekka == 22 || sykekka == 23 || sykekka == 24 || sykekka == 25 || sykekka == 26 || sykekka == 27) {
                if (sagyona == 1) {
                    if (sykekka == 19) {
                        text += "\n職員" + name + "は指令を達成"+T2+"\n";
                        kagokesi('8862');
                        console.log('2b-1');
                            sykasan(886, 3, 0);
                    
                    }
                    if (sykekka == 21) {
                        sykasan(886, 3, 22);
                    } else {
                        if (sykekka == 22) {
                            text += "\n職員" + name + "は指令を達成"+T2+"\n";
                            kagokesi('8862');
                            console.log('2b-2');
                                sykasan(886, 3, 0);
                        
                        }
                    }
                    if (sykekka == 24) {
                        sykasan(886, 3, 25);
                    } else {
                        if (sykekka == 25) {
                            sykasan(886, 3, 26);
                        } else {
                            if (sykekka == 26) {
                                text += "\n職員" + name + "は指令を達成"+T2+"\n";
                                kagokesi('8862');
                                console.log('2b-3');
                                    sykasan(886, 3, 0);
                             
                            }
                        }
                    }
                } else {
                    text += "\n職員" + name + "は指令を達成できなかっ"+T3+"\n";
                    kagokesi('8862');
                    console.log('2b-no');
                    sykasan(886, 3, 0);
                    kari = 1;
                }

            }
            if (sykekka == 28 || sykekka == 29 || sykekka == 30 || sykekka == 31 || sykekka == 32 || sykekka == 33 || sykekka == 34 || sykekka == 35 || sykekka == 36) {
                if (sagyona == 2) {
                    if (sykekka == 28) {
                        text += "\n職員" + name + "は指令を達成"+T2+"\n";
                        kagokesi('8862');
                        console.log('2c-1');
                            sykasan(886, 3, 0);
                     
                    }
                    if (sykekka == 30) {
                        sykasan(886, 3, 31);
                    } else {
                        if (sykekka == 31) {
                            text += "\n職員" + name + "は指令を達成"+T2+"\n";
                            kagokesi('8862');
                            console.log('2c-2');
                                sykasan(886, 3, 0);
                        } 
                        
                    }
                    if (sykekka == 33) {
                        sykasan(886, 3, 34);
                    } else {
                        if (sykekka == 34) {
                            sykasan(886, 3, 35);
                        } else {
                            if (sykekka == 35) {
                                text += "\n職員" + name + "は指令を達成"+T2+"\n";
                                kagokesi('8862');
                                console.log('2c-3');
                                    sykasan(886, 3, 0);
                            } 
                            
                        }
                    }
                } else {
                    text += "\n職員" + name + "は指令を達成できなかっ"+T3+"\n";
                    kagokesi('8862');
                    console.log('2c-no');
                    sykasan(886, 3, 0);
                    kari = 1;
                }

            }
            if (sykekka == 34 || sykekka == 35 || sykekka == 36 || sykekka == 37 || sykekka == 38 || sykekka == 39 || sykekka == 40 || sykekka == 41 || sykekka == 42) {
                if (sagyona == 3) {
                    if (sykekka == 34) {
                        text += "\n職員" + name + "は指令を達成"+T2+"\n";
                        kagokesi('8862');
                        console.log('2d-1');
                            sykasan(886, 3, 0);
                     
                    }
                    if (sykekka == 36) {
                        sykasan(886, 3, 37);
                    } else {
                        if (sykekka == 37) {
                            text += "\n職員" + name + "は指令を達成"+T2+"\n";
                            kagokesi('8862');
                            console.log('2d-2');
                                sykasan(886, 3, 0);
                         
                        }
                    }
                    if (sykekka == 39) {
                        sykasan(886, 3, 40);
                    } else {
                        if (sykekka == 40) {
                            sykasan(886, 3, 41);
                        } else {
                            if (sykekka == 41) {
                                text += "\n職員" + name + "は指令を達成"+T2+"\n";
                                kagokesi('8862');
                                console.log('2d-3');
                                    sykasan(886, 3, 0);
                            } 
                            
                        }
                    }
                } else {
                    text += "\n職員" + name + "は指令を達成できなかっ"+T3+"\n";
                    kagokesi('8862');
                    console.log('2c-no');
                    sykasan(886, 3, 0);
                    kari = 1;
                }

            }
        }
            if (kari == 1) {
                conc = con.map(function (value, index) { return value[0]; });
                conc2 = con.map(function (value, index) { return value[1]; });
                conc4 = conc.indexOf('886');
                kari = conc2[conc4];
                text += "\nツギハギの司令塔のカウンターが減少"+T2+"\n";
                kari -= 1;
                if (kari <= 0) {
                    text += "ツギハギの司令塔は"+Tdassou+"\n\nカウンター0→3\n";
                    dassou = 1;
                    kari = 3;
                }
                con[conc4][1] = kari;
                if (kekka[2] == "886") {
                    nefi = kari;
                }
            }
    }

    //脱走反応

    kensaku917 = gnid.indexOf('917');
    if (kensaku917 != -1 && dassou == 1 && kekka[2]!=971) {
        text += "灰被りの少女は"+Tdassou+"\n";
        dassou = 1;
    }
    if (kensaku917 != -1 && sibou == 0 &&dassou==0) {
        conc = con.map(function (value, index) { return value[0]; });
        conc2 = con.map(function (value, index) { return value[1]; });
        conc4 = conc.indexOf('917');
        kari = conc2[conc4];
        text += "\n灰被りの少女のカウンターが減少"+T2+"\n";
        kari -= 1;
        if (kari <= 0) {
            text += "灰被りの少女は"+Tdassou+"\nカウンター0→2\n";
            dassou = 1;
            kari = 2;
        }
        con[conc4][1] = kari;
    }

    kensaku995 = gnid.indexOf('995');
    if (kensaku995 !=-1 &&dassou == 1 && kekka[2] == 385) {
        text += "作られし世界の神は"+Tdassou+"\n";
        dassou = 1;
    }

    kensaku085 = gnid.indexOf('085');
    if (kensaku085 != -1) {
        if (dassou == 1) {
            t085 += 1;
        }
        if (dassou == 1 || pani == 1) {
            text += "\nピカレスクの叛逆は"+Tdassou+"\n";
            if (t085 >= 3) {
                if ((t085 % 3) == 0) {
                    text += "鎮圧協力後に敵対する\n";
                }
            }
        }
    }


    if (sibou == 0) {
  tt12 = "";
    nana = "se" + syid + "8";
    document.hanteisuru[nana].value = "000";
    }
  

    //最終的なカウンターを記録、表示
    kekka[13] = nefi;
    con[conc3][1] = nefi;

    tt11 = nefi;
    textset();

    //獲得PE-BOXがマイナスだったら修正
    if (peti <= 0) {
        peti = 0;
    }



    //今回作業した幻想体ＩＤを職員毎に記録する
    for (i = 0; i < keiti.length; i++) {
       if (syid == i) {
        zenkai[i] = kekka[2];
    }
    }

    //経験値
    na = sagyona + 1;
    keiti[syid][na] += keikenti;

    keiktxt = "<li class=\"log\"  >" + keiti[syid][0] + name + "　勇気：" + keiti[syid][1] + "慎重：" + keiti[syid][2] + "自制：" + keiti[syid][3] + "正義：" + keiti[syid][4] + "</li>";
    keilog[syid] = keiktxt;
    keirogtext = keilog.join("");
    target = document.getElementById("keikekka");
    target.innerHTML = keirogtext;

    kensaku228 = kekka[12].indexOf('228');
    if (kensaku228 != -1 && sibou == 0) {
        sykasan(228, 3, 0);
    }

    kensaku228 = kekka[12].indexOf('228');
    if (kensaku228 != -1 && sibou==0) {
            sykasan(228, 3, 0);
    }
    t8863 = 0;

    if (irai == 1) {
        irana = irana2;
    } else {
        irana = kekka[3];
    }

    if (dassou == 1) {
        if (rankk == 1) {
            text += "脱走時ZAYIN\n";
        }
        if (rankk == 2) {
            text += "脱走時TETH\n";
        }
        if (rankk == 3) {
            text += "脱走時HE\n";
        }
        if (rankk == 4) {
            text += "脱走時WAW\n";
        }
        if (rankk == 5) {
            text += "脱走時ALEPH\n";
        }
    }
    //テキスト生成
    twetext =  gene + " "+tire+"\n" + name + "　" + irana + "\n\n" + seitxt + kuritxt + text + sitxt + dametxt + "\n獲得PiE-BOX：" + peti + "\n獲得経験値　" + keitxt ;
    document.hanteisuru['del'].value = twetext;
    li_log();
     sagyo_ZZZ = parseInt(document.rizalt['sagyo_Z'].value);
    document.rizalt['sagyo_Z'].value = sagyo_ZZZ + peti;
    //t9999 = 0;
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
    kensaku = kekka[12].indexOf('952');
    if (kensaku != -1) {
        kagokesi('952');
        conc = con.map(function (value, index) { return value[0]; });
        conc2 = con.map(function (value, index) { return value[1]; });
        conc4 = conc.indexOf('952');
        kari = conc2[conc4];
        text += "\n愛を知る子のカウンターが減少"+T2+"\n";
        kari -= 1;
        if (kari <= 0) {
            text += "愛を知る子は"+Tdassou+"\n「952」を所持している職員の内、マーキングを受けた回数が4回以下の職員は死亡しその人数だけ愛を知る子は強化される\nカウンター0→3\n";
            dassou = 1;
            kari = 3;
        }
        con[conc4][1] = kari;
    }
    text += "職員" + name + "の加護欄に「" + kagohuti + "」を追加\n";
    tt12 = tt12 + "," + kagohuti;
    nana = "se" + syid + "8";
    document.hanteisuru[nana].value = tt12;

    kensaku228 = kekka[12].indexOf('228');
    if (kensaku228 != -1 && kekka[2]!="228") {
        sykasan(228, 0, 1);
        sykensaku(228);
        if (sykekka >= 3) {
            text += "職員" + name + "は「ラプラスの悪魔」へと変貌"+T2+"\n";
            sibou = 0;
            sykasan(228, 3, 0);
        }
    }
}

function sagyobahu(ti) {
    tt13 = tt13 + ti;
            nana = "se" + syid + "9";
            document.hanteisuru[nana].value = tt13;
}

function seihihan() {
    if (sagyona == 4 || sagyona == 5) {
        text = "使用、返却はツール型のみ"+T1+"\n";
    } else {
    if (kekka[2]==219) {
        seiti = 15;
        keikenti = 2;
        jou = 6;
    }
    seikou = seiti * sase[sagyona][sagyose3];
    if (t0922 == 1) {
        seikou -= t0923;
    } else {
        if (kekka[2] == "092") {
            seikou -= t0923;
        }
    }
    if (t304 == 1) {
        seikou = seikou * 1.5;
        t304 = 0;
    }

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
            kagokesi('213');
            seihi = 0;
        }
    }

    kensaku731 = kekka[12].indexOf('731');
    kensaku7312 = kekka[12].indexOf('7312');
    if (kensaku731 != -1 || kensaku7312 != -1) {
        if (seihi == 1) {
            seihi = 0;
            sykasan(731, 0, 1);
            sykensaku(731);
            if (sykekka >= 2) {
                sibou = 0;
                sykasan(731, 3, 0);
            }
        } else {
            seihi = 1;
        }
    }
    }

   
}

function kagoche(id, puls) {
    //加護持ちかどうか職員全員から調べてkensakuCに返す
    //id＝幻想体ID　puls＝欲しい結果　0か1か　0＝加護無し　1＝加護持ち
    ch = [];
    chke = [];
    for (i = 0; i < keiti.length; i++) {
        kari = i ;
        idid = "se" + kari + "8";
        ch[i] = document.hanteisuru[idid].value.split(/,/);
        kensaku = ch[i].indexOf(id);
        if (puls == 0) {
            if (kensaku == -1) {
                chke.push('1');
            }
        } else {
            if (kensaku != -1) {
                chke.push('1');
            }
        }
    }
    kensakuC = chke.indexOf('1');
}

function kagokesi(ked) {
    if (ked == "299") {
        kake = kekka[12].length - 1;
    } else {
    kake = kekka[12].indexOf(ked);
    }

    if (kake != -1) {
        kekka[12].splice(kake, 1);
        kake2 = syid;
        kake3 = "se" + kake2 + "8";
        document.hanteisuru[kake3].value = kekka[12];
        for (i = 1; i < 9; i++) {
            kake3 = "se" + kake2 + i;
            if (i == 1) {
                tt4 = document.hanteisuru[kake3].value;
            }
            if (i == 2) {
                tt5 = document.hanteisuru[kake3].value;
            }
            if (i == 3) {
                tt6 = document.hanteisuru[kake3].value;
            }
            if (i == 4) {
                tt7 = document.hanteisuru[kake3].value;
            }
            if (i == 5) {
                tt8 = document.hanteisuru[kake3].value;
            }
            if (i == 6) {
                tt9 = document.hanteisuru[kake3].value;
            }
            if (i == 7) {
                tt10 = document.hanteisuru[kake3].value;
            }
            if (i == 8) {
                tt12 = document.hanteisuru[kake3].value;
            }
            if (i == 9) {
                tt13 = document.hanteisuru[kake3].value;
            }
        }
        textset();
    }
}

function g001() {
    gene = "001 あまたの善とひとつ分の愛";
    sulo = 0;
    sase = [[1, 1, 1, 1, 1], [0.5, 0.5, 0.5, 1, 1], [0.5, 0.5, 0, 0, 0], [1, 1, 1.5, 1.5, 2]];
    rankk = 1;
    rank();
    seihihan();
    /*
    if (t9999 == 1) {
        text += "ゴフェルの大樹のカウンターが全回復"+T2+"\n";
    }
    */
    if (seihi == 1) {
        daideme1 = 2;
        daideme2 = 6;
        daisu();
        text += "SP" + daideme4 + "回復"+T2+"\n";
    }

    if (peti <= 0) {
        text += "職員の自制-5" + T1 +"\n";
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
        text += "狂人の抜け殻は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "部門内のランダムな部屋のカウンターが下がっ"+T3+"\n003のカウンター0→3\n";
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
        text += "保護作業に置き換わっているため作業成否、経験値、PiE-BOX、ダメージ無効\n作業職員1名を30分保護\n全耐性強いになる（元から強い以上の耐性はそのまま）\n保護職員は鎮圧時2回攻撃可能\n保護職員が死亡・パニックになると太陽の後悔は脱走する\n";
        peti = 0;
        keikenti = 0;
    } else {
        if (seihi == 0) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;

            if (nefi <= 0) {
                text += "太陽の後悔は"+Tdassou+"\nカウンター0→3\n";
                dassou = 1;
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
        text += "職員" + name + "はめろんぱんを食べ"+T3+"\nHPSPの最大値+5\n重複し"+T4+"\n";

    }

    if (sagyona == 0 || sagyona == 2) {
        ransu = Math.floor(Math.random() * 10 + 1);
        if ((ransu % 2) == 0) {
            text += "夕張メロンを投げつけられ"+T3+"\n";
            sibou = 0;
        }
    }


}


function g007() {
    gene = "007 合わせ鏡";
    peti = 0;


    if (sagyona == 4) {
        if (kekka[7] >= 4) {
            sibou = 0;
        } else {
        if (t007 == -1) {
            t007 = syid;
            t0072 = [name,kekka[8],kekka[9],kekka[10],kekka[11]];
        } else {
            if (t0073 == -1) {
                if (t007 != syid) {
                    t0073 = syid;
                    t0074 = name;
                } else {
                    text += "何も起き"+T4+"\n";
                }

            } else {
                if (t0073 != syid && t007!=syid) {
                    text += "▼職員"+t0074+"は死んで"+T5+"\n";
                }
            }

        }
        if (t0073 == syid) {
                    text += "職員" + name + "のステータスが変化\n勇気：" + t0072[1] + "\n慎重：" + t0072[2] + "\n自制：" + t0072[3] + "\n正義：" + t0072[4] + "\n業務終了まで継続する\n";

        }
        }

    } else {
        text += "ツール型の作業は「使用」か「返却」"+T1+"\n";

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
        text += "SP8ダメージ\n同部門に狂人の抜け殻がいる場合は狂人の抜け殻が脱走する\nカウンター0→3\n";
        nefi = 3;
    }

    if (sagyona == 1 && seihi == 1) {
        if (nefi <= 2) {
            text += "中身が片付けられ、猫に詰められ"+T3+"\nカウンター1回復\n";
            nefi += 1;
        }
    }
    if (sagyona == 0 || sagyona == 3) {
        text += "中身が飛び散っ"+T3+"\nカウンター1減少\n";
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
        text += "ケーキが用意され"+T3+"\nHP" + daideme4 + "回復\n";
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

        text += "▼職員" + name + "のHPSPが" + daideme4 + "回復"+T2+"\n";
    }
    if (seihi == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;

        if (nefi <= 0) {
            text += "私のティザーは"+Tdassou+"\nカウンター0→4\n";
            dassou = 1;
            nefi = 4;
        }
    }
    if (kekka[7] >= 3) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            sibou = 0;
            text += "カウンターが全回復"+T2+"\n";
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
        text += "職員" + name + "のHPが全回復"+T2+"\n";
        kensaku = kekka[12].indexOf('013');
        if (kensaku == -1) {
            text += "自制+10、死亡時リセット\n";
            kagohuti = "013";
            kagohuyo();
        }
    }
    if (kurike == 1) {
        text += "部門内のランダムな収容室のカウンター1回復\n";
    }
    if (fanke == 1) {
        text += "部門内のランダムな収容室のカウンター1減少\n";
    }

    if (kensaku != -1 && seihi == 1) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            text += "職員" + name + "は花に囲まれて"+T5+"\n";
            sibou = 0;
        }
    }

}

function g015() {
    gene += "カタストロフの脈動";
    sase = [[2, 1.5, 1, 0.5, 0], [2, 2, 1.5, 1.5, 1.5], [0, 0, 0, 1, 0.5], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();
    pale = 1;
    nemax = 2;
    kensaku = kekka[12].indexOf('015');
    if (kensaku != -1 && seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (kekka[10] <= 3 && sagyona == 2) {
        text += "カウンターが1増加"+T2+"\n";
        sibou = 0;
        nefi += 1;
    }
    if (sagyona == 1 || sagyona == 3) {
        daideme1 = 10;
        daideme2 = 10;
        daisu();
        text += "青" + daideme4 + "ダメージ\n";
        if (sagyona == 1 && kekka[9] >= 4 && seihi == 1) {
            if (kensaku == -1) {
                text += "職員" + name + "の作業成功率-5\n";
                kagohuti = "015";
                kagohuyo();
            }
        }
        if (sagyona == 3 && kekka[11] >= 4 && seihi == 1) {
            if (kensaku == -1) {
                text += "職員" + name + "の作業成功率-5\n";
                kagohuti = "015";
                kagohuyo();
            }
        }
    }
        if (sagyona == 0 && kekka[8] >= 4 && seihi == 1) {
            if (kensaku == -1) {
                text += "職員" + name + "の作業成功率-5\n";
                kagohuti = "015";
                kagohuyo();
            }
        }
        if (sagyona == 2 && kekka[10] >= 4 && seihi == 1) {
            if (kensaku == -1) {
                text += "職員" + name + "の作業成功率-5\n";
                kagohuti = "015";
                kagohuyo();
            }
        }
    if (nefi <= 0) {
        text += "カタストロフの脈動は"+Tdassou+"\n加護「015」を持つ職員全員が眷属となる\nカウンター0→2\n";
        nefi = 2;
    }
}

function g016() {
    gene = "016 虚ろの正義";
    sase = [[0.5, 1, 1, 0.5, 0.5], [2, 2, 2, 2, 2], [1.5, 1.5, 1.5, 1, 1], [1, 1, 1, 0.5, 0]];
    rankk = 4;
    rank();
    seihihan();

    if (irai == 1) {
        irana2 = "依頼";
        text += "任意の相手に対して青50ダメージ\n対価は依頼職員の最大HPの半分\nカウンターが減少"+T2+"\n";
        nefi -= 1;
    } else {
    if (seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (sagyona == 1) {
        text += "この作業は依頼に置き換わっています\n";
        peti = 0;
        keikenti = 0;
    }


    }
    if (nefi <= 0) {
        text += "虚ろの正義は"+Tdassou+"\nカウンター0→4\n";
        dassou = 1;
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
        text += "▼職員" + name + "の頭に青白いキノコが生え"+T3+"\n5分毎にSP1d6回復\n20分後に消失\n";
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
            text += "5,6\n▼職員" + name + "のSP最大値が" + daideme4 + "上昇"+T2+"\n慎重も上昇する。\n";

        }
        if (ransu == 4) {
            text += "4\n何も起こらなかっ"+T3+"\n";
        }
        if (ransu == 3 || ransu == 2) {
            if (kekka[9] <= 3) {
                pani = 1;
                text += "3,2\n▼職員" + name + "のSP最大値が" + daideme4 + "上昇"+T2+"\n慎重も上昇する。\n";
                text += "▼職員" + name + "は"+Tpani+"\n";
            } else {
                text += "3,2\n何も起こらなかっ"+T3+"\n";
            }
        }
        if (ransu == 1) {
            text += "1\n部門内にモスキート音が鳴り響い"+T3+"\n部門内全職員の自制が1になっ"+T3+"\n再度キャットTVで5以上の数値を出すと収まる\n";
        }

    } else {
        text += "ツール型の作業は「使用」か「返却」"+T1+"\n";

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
            text += "旭は"+Tdassou+"\n";
            dassou = 1;
        }
        nefi -= 1;
    }
    if (nefi <= 0) {
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
        text += "加護職員は本能に+5の補正を受け、作業を行う度にHPが5～10回復\n加護職員がダメージを受けるとカウンター減少\n"

        kagohuti = "022";
        kagohuyo();
    }

    if (nefi <= 0) {
        text += "灯の保護は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
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
        text += "▼職員" + name + "のHPが" + daideme4 + "回復"+T2+"\n";
        if (kurike == 1) {
            text += "▼職員" + name + "のHPが全回復"+T2+"\n";
        }
    } else {
        pani = 1;
        text += "職員" + name + "は殺人性"+Tpani+"\n";
    }

    if (sagyona == 3) {
        sibou = 0;
        daideme1 = 3;
        daideme2 = 6;
        daisu();
        text += "この次に入室した職員はSPが" + daideme4 + "減少する\n";
    }

}

function g027() {
    gene += "叡智の拠り所";
    sase = [[1.5, 1.5, 1.5, 2, 2], [2, 2, 1, 0.5, 0], [1, 1, 0.5, 0.5, 0.5], [2, 2, 1, 1, 0.5]];
    rankk = 4;
    rank();
    seihihan();

    if (kekka[9] == 1) {
        sibou = 0;
    } else {
    if (seihi == 1) {
        sykasan('027', 0, 1);
        sykensaku('027');
        if (sykekka >= 4) {
            text += "本の効果が全て消え、蘇生された時SPが最大値の30％に減った状態で蘇生される\n";
            sykasan('027', 3, 0);
            sibou = 0;
        } else {
            text += "職員" + name + "は本を貰っ"+T3+"\n";
            if (sykekka == 3) {
                text += "本の所持中に1回限りパニック無効\n";
            }
            if (sykekka == 2) {
                text += "鎮圧時、正義の代わりに慎重で判定\n";
            }
            if (sykekka == 1) {
                text += "慎重ランク+1\n";
            }
        }
    }
    }

}

function g029() {
    gene = "029 紛い縋る傀儡の像";
    sase = [[1.5, 1.5, 1, 1, 0.5], [0.5, 0.5, 0, 0, 0], [2, 2, 2, 2, 2], [0.5, 1, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('029');
    if (kensaku == -1) {
        if (sagyona != 1) {
            text += "職員" + name + "は信者になっ"+T3+"\n勇気、正義+29、自制-29、与ダメ+5\n";
            kagohuti = "029";
            kagohuyo();
        } else {
            text += "▼職員" + name + "は殺人性"+Tpani+"\n";
            pani = 1;
        }
    }


    if (nefi <= 0) {
        text += "紛い縋る傀儡の像は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }

}

function g030() {
    gene = "030 終焉の歌唄い";
    sase = [[1.5, 1.5, 1.5, 1.5, 2], [0, 0, 1, 0.5, 0.5], [0.5, 0.5, 0, 0, 0], [1.5, 1.5, 2, 2, 2]];
    rankk = 4;
    rank();
    seihihan();

    if (seihi == 1 && sagyona == 1) {
        text += "歌を聴い"+T3+"\n慎重+20、自制-20、一日限り\n";
        kagohuti = "030";
        kagohuyo();
    }
    if (seihi == 1 && sagyona == 2) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        sibou = 0;
        text += "終焉の歌唄いは"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
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
        text += "中の人物が消失する。\nこれ以降この部門の職員は加護の欄に「031」と記入して作業する\n";
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
        text += "これ以降この部門の職員は加護の欄から031を消去する\n";
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
        text += "この職員の他に「0321」を持っている職員がいた場合はその職員の加護欄から0321を消す\n";
        kagohuti = "0321";
        kagohuyo();
    } else {

        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;

        if (kensaku2 == -1) {
            sibou = 0;
        }
    }

    if (sagyona != 3 && sagyona != 4) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (sagyona == 3) {
        text += "カウンターが1増加"+T2+"\n";
        nefi += 1;
        text += "マーキング付与\n";
        kagohuti = "032";
        kagohuyo();
    }

    if (nefi <= 0) {
        text += "八重の檻は"+Tdassou+"\nカウンター0→5\n";
        nefi = 5;
        dassou = 1;
    }
    if (kensaku != -1 && kensaku2 != -1) {
        text += "カウンターが1増加"+T2+"\n";
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
    nemax = 3;

    if (irai == 1) {
        irana2 = "演奏";
        text += "奏者のHPSPの50％を失う\n部門内の任意の職員の任意のステータスを+30\nカウンター減少\n3回目の演奏は確定で0になる\n";
        nefi -= 1;
    } else {
    if (kurike == 1) {
        text += "カウンターが1増加"+T2+"\nクリファンアップは含ま"+T4+"\n";
        nefi += 1;
    }
    ransu = Math.floor(Math.random() * 6 + 1);
    if (seihi == 0 && ransu == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }


    if (sagyona == 2) {
        text += "愛着作業は演奏作業に置き換わっています\n";
    }
    }
    if (nefi <= 0) {
        text += "『トルネンブラ』は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
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
            text += "加護を得"+T3+"\n自制-10、勇気+10\n";
            kagohuti = "034";
            kagohuyo();
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }
    if (nefi <= 0) {
        text += "影が収容違反"+T2+"\nカウンター0→3\n";
        nefi = 3;
    }
}

function g035() {
    gene += "導き灯すカンテラ";
    sase = [[2, 2, 1.5, 1.5, 1.5], [1, 1, 0.5, 0.5, 0], [1, 1, 1, 0.5, 0.5], [0.5, 0.5, 0.5, 1, 1]];
    rankk = 3;
    rank();
    seihihan();

    if (kurike == 1) {
        text += "職員" + name + "の作業成功率+2（重複不可）\n";
    }
    if (seihi == 0) {
        text += "作業終了毎に慎重-5（他の場所での作業含む）\n死亡するまで続く\n";
    }
    if (seihi == 1 && sagyona == 1) {
        kensaku = kekka[12].indexOf('035');
        if (kensaku == -1) {
            text += "職員" + name + "はカンテラを受け取っ"+T3+"\n任意のタイミングで自分のSPを30回復（一人1回、死亡時リセット）\n";
            kagohuti = "035";
            kagohuyo();
        }
    }
}

function g036() {
    gene = "036 凶兆の発芽";
    sase = [[2, 1.5, 1.5, 0.5, 0], [2, 1, 1, 0.5, 0.5], [2, 1, 0.5, 0.5, 0.5], [2, 2, 2, 1.5, 1.5]];
    rankk = 4;
    rank();
    seihihan();

    sykensaku(036);
    kensaku = kekka[12].indexOf('036');
    

    if (sykekka >= 2) {
        if (seihi == 0) {
            sibou = 0;
            daideme1 = kekka[7];
            daideme2 = 6;
            daisu();
            text += "口から花を零"+T2+"\n部門内全職員に" + daideme4 + "白ダメージ\n";
            sykasan(036, 3, 0);
        }

    } else {
        if (sykekka == 1 || kensaku != -1) {
            text += "種から芽が出"+T3+"\n自制-15\n";
            sykasan(036, 0, 1);
        }
    }
    if (seihi == 1) {

        if (kensaku == -1) {
            text += "職員" + name + "に種が植え込まれ"+T3+"\n自制-10\nこの効果は職員が死亡するまで続く\n";
            kagohuti = "036";
            kagohuyo();
            sykasan(036, 0, 1);
        }
    }
}

function g037() {
    gene += "海底の1カラット";
    sase = [[1, 1, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0, 0], [2, 2, 2, 1.5, 1.5], [1.5, 1.5, 1.5, 2, 2]];
    rankk = 4;
    rank();
    seihihan();

    if (kekka[6] == "男" || kekka[6] == "男性") {
        text += "ギフトを装着している場合死亡無効\nカウンターが減少"+T2+"\n";
        nefi -= 1;
        sibou = 0;
    } else {
        if (sagyona == 1) {
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 1) {
                kagoche("037", 1);
                if (kensakuC == -1) {
                    text += "職員" + name + "は指輪を発見"+T2+"\n作業成功率+5、最大SP+20\n指輪を持てるのは常に一人、死亡時部屋に戻る\n";
                    kagohuti = "037";
                    kagohuyo();
                }
            }
        }
    }
    if (nefi <= 0) {
        text += "海底の1カラットは"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
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
            text += "職員の体やステータスが元に戻っ"+T3+"\n加護欄から039系を全て消す\n";
        } else {
            if (kensaku != -1) {
                text += "職員の体やステータスが元に戻っ"+T3+"\n加護欄から039系を全て消す\n";
            }
        }

    }

}

function g040() {
    gene = "040 果てなきワンダーランド";
    sase = [[0, 0.5, 0.5, 1.5, 2], [1, 1, 1.5, 2, 2], [0, 0, 0, 0.5, 0.5], [1, 1, 1, 1.5, 2]];
    rankk = 3;
    rank();
    seihihan();

    if (kekka[7] <= 1) {
        sibou = 0;
        text += "職員" + name + "はゲートの向こうに消え"+T3+"\n";
    } else {
        if (kekka[10] <= 3) {
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 3) {
                text += "▼職員" + name + "は魅了され"+T3+"\n解除できなかった場合はゲートの向こうに消え死亡する\n";
            }
        }
        if (kekka[9] >= 4 || kekka[11] >= 4) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }
    if (nefi <= 0) {
        text += "果てなきワンダーランドは"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
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
            text += "▼職員" + name + "はIP-T-05-042-1となり、"+Tdassou+"\n";
            dassou = 1;
        } else {
            text += "職員" + name + "の加護欄に「042」を記入\n職員" + name + "以外の部門内職員全員の加護欄に「0421」を記入\n042と0421は蘇生後も残る、翌日には消える\n";
            
            for (i = 0; i < keiti.length; i++) {
                if (i == syid) {
                    tt12 = tt12 + "," + 042;
                    nana = "se" + i + "8";
                    document.hanteisuru[nana].value = tt12;
                } else {
                    nana = "se" + i + "8";
                    tt121=document.hanteisuru[nana].value;
                    tt121 = tt121 + "," + 0421;
                    document.hanteisuru[nana].value = tt121;
                }
            }
        }
    } else {

    }

    if (nefi <= 0) {
        if (sagyona == 1) {
            pani = 1;
            text += "\n▼職員" + name + "は"+Tpani+"\n";

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

function g045() {
    gene += "黎明の手向け花";
    sase = [[0.5, 0.5, 0, 0, 0], [1.5, 1.5, 1.5, 2, 2], [1.5, 1, 1, 0.5, 0], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('045');
    if (sagyona == 0 && seihi == 1) {
        daideme1 = 5;
        daideme2 = 6;
        daisu();
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 1) {
            text += "職員" + name + "のSP" + daideme4 + "回復\n";
        } else {
            if (kensaku == -1) {
                text += "職員" + name + "は白" + daideme4 + "ダメージを受け"+T3+"\n";
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
        }
    }
    if (sagyona == 3) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
        sibou = 0;
    }
    if (nefi <= 0) {
        text += "黎明の手向け花は"+Tdassou+"\nカウンター0→2\n";
        t045 = 1;
        dassou = 1;
        nefi = 2;
        kensaku = gnid.indexOf('390');
        if (kensaku != -1) {
            text += "蓬莱の兎は"+Tdassou+"\n";
        }
        kensaku = gnid.indexOf('406');
        if (kensaku != -1) {
            text += "涅槃、雪降りては"+Tdassou+"\n";
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
        text += "SP回復量+10\n重複し"+T4+"\nあなたのナンバーワンの脱走時、眷属になる\n";
    }
    if (nefi <= 0) {
        text += "あなたのナンバーワンは"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
    }

}

function g048() {
    gene = "048 心壊人形";
    peti = 0;

    if (sagyona == 4) {
        text += "心壊人形が職員" + name + "に同行"+T2+"\n細かい挙動はエンサイクロペディア参照\n";
    } else {
        if (sagyona == 5) {
            text += "鎮圧を行っていない場合はエンサイクロペディア参照\n鎮圧を行っていた場合は充電を開始し、30分間使用不可\n";
        } else {
            text += "ツール型の作業は「使用」"+T1+"\n";
        }

    }

}

function g049() {
    gene = "049 異界の扉";
    peti = 0;

    if (sagyona == 4) {
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu == 1) {
            text += "何かの箱を手に入れ"+T3+"\n全ステータス+10\n同じ効果のバフ、デバフは重複し"+T4+"\n1日で効果が消滅する\n";
        }
        if (ransu == 2) {
            text += "何かの果実を手に入れ"+T3+"\n本能+10\n同じ効果のバフ、デバフは重複し"+T4+"\n1日で効果が消滅する\n";
        }
        if (ransu == 3) {
            text += "小さな花を手に入れ"+T3+"\n洞察+10\n同じ効果のバフ、デバフは重複し"+T4+"\n1日で効果が消滅する\n";
        }
        if (ransu == 4) {
            text += "綺麗な石を手に入れ"+T3+"\n自制+10\n同じ効果のバフ、デバフは重複し"+T4+"\n1日で効果が消滅する\n";
        }
        if (ransu == 5) {
            text += "何かの羽根を手に入れ"+T3+"\n正義+10\n同じ効果のバフ、デバフは重複し"+T4+"\n1日で効果が消滅する\n";
        }
        if (ransu == 6) {
            text += "何かの目玉を手に入れ"+T3+"\n全ステータス-25\n同じ効果のバフ、デバフは重複し"+T4+"\n1日で効果が消滅する\n";
        }
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
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
                text += "▼職員" + name + "は"+Tpani+"\n";
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
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g051() {
    gene = "051 子ヤギの郵便屋さん";
    peti = 0;

    if (sagyona == 4) {
        ransu = Math.floor(Math.random() * 4 + 1);
        if (ransu == 1) {
            text += "職員" + name + "の勇気ランクが1下がる代わりに配属されている任意の職員1名の勇気ランクが1上昇（他部門職員も選択可能）\nランク5より上には上がら"+T4+"\n";
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
                } else {
                    text += "何も起きなかっ"+T3+"\n";
                }
            }
        }
        if (ransu == 2) {
            text += "職員" + name + "の慎重ランクが1下がる代わりに配属されている任意の職員1名の慎重ランクが1上昇（他部門職員も選択可能）\nランク5より上には上がら"+T4+"\n";
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
                } else {
                    text += "何も起きなかっ"+T3+"\n";
                }
            }
        }
        if (ransu == 3) {
            text += "職員" + name + "の自制ランクが1下がる代わりに配属されている任意の職員1名の自制ランクが1上昇（他部門職員も選択可能）\nランク5より上には上がら"+T4+"\n";
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
                } else {
                    text += "何も起きなかっ"+T3+"\n";
                }
            }
        }
        if (ransu == 4) {
            text += "職員" + name + "の正義ランクが1下がる代わりに配属されている任意の職員1名の正義ランクが1上昇（他部門職員も選択可能）\nランク5より上には上がら"+T4+"\n";
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
                } else {
                    text += "何も起きなかっ"+T3+"\n";
                }
            }
        }
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g053() {
    gene += "ひみつの隠し味";
    sase = [[0, 0, 0, 0, 0], [1, 1, 1, 0.5, 0.5], [0, 0, 0, 0, 0], [1.5, 1.5, 2, 2, 2]];
    rankk = 3;
    rank();
    seihihan();

    if (t053 != 0) {
        daideme1 = t053;
        daideme2 = 6;
        daisu();
        text += "職員" + name + "のHPが" + daideme4 + "回復"+T2+"\n";
        t053 = 0;
    }

    if (sagyona == 0 && seihi == 1) {
        daideme1 = 3;
        daideme2 = 6;
        daisu();
        text += "職員" + name + "のHPが" + daideme4 + "回復"+T2+"\nカウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (sagyona == 2 && seihi == 1) {
        sibou = 0;
        t053 = kekka[7];
    }
    if (nefi <= 0) {
        text += "ひみつの隠し味は"+Tdassou+"\n部門内のランダムな職員をマーキングする\n";
        dassou = 1;
        nefi = 3;
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
            text += "職員" + name + "は「受難」を得"+T3+"\n" + kari + "ランクが1下降\n死亡で消失\nパニックになると死亡する\n下降したステータスに対応した作業を成功させることで該当ランクの下降が解除され、さらに元のランクから+1される（受難は消失しない）\n";
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

function g060() {
    gene += "超絶正確な打刻機";
    peti = 0;

    if (sagyona == 4) {
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu == 6) {
            pani = 1;
            text += "▼職員" + name + "は"+Tpani+"\n";
        } else {
            text += "職員は「休憩時間」となる\n15分間部門、施設全体効果の対象外となる\n15分後にSP15回復\n";
        }
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
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
        text += "この日一日獲得経験値1.5倍\n";
        kensaku = kekka[12].indexOf('061');
        if (kensaku == -1) {
            kagohuti = "061";
            kagohuyo();
        }
    }

    if (seihi == 0) {
        kensaku = kekka[12].indexOf('0611');
        if (kensaku == -1) {
            kagohuti = "0611";
            kagohuyo();
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (kekka[7] >= 3) {
        text += "カウンターが1増加"+T2+"\n";
        nefi += 1;
    }
    if (nefi <= 0) {
        text += "項垂れ柳は"+Tdassou+"\nカウンター0→" + nemax + "\n";
        dassou = 1;
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
        text += "恐怖ダメージを受け"+T3+"\n最大SPの100％のSPダメージ\n";
    } else {
        text += "恐怖ダメージを受け"+T3+"\n最大SPの75％のSPダメージ\n";
    }



}

function g065() {
    gene = "065 タマ";
    sase = [[1, 1, 1, 0.5, 0.5], [1.5, 1.5, 1.5, 1, 1], [0, 0, 0, 0, 0], [2, 2, 2, 2, 2]];
    rankk = 2;
    rank();
    seihihan();
    //作業時確定
    text += "職員" + name + "のタマ以外への作業成功率-3\n";

    //愛着選んだ
    if (sagyona == 2) {
        text += "この作業は同行作業に置き換わっています\n";
        peti = 0;
        keikenti = 0;
    }

    //初回作業時　t065　は　0

    //同行作業すると　1　になる

    //同行作業以外の作業をすると　2　になる



    //同行作業
    if (irai == 1) {
        irana2 = "同行";
        // t065　が　0　もしくは　2　の時　何事もなく同行しt065が　1　になる
        if (t065 == 0　||t065==2) {
            text += "タマは職員" + name + "に同行"+T2+"\n";
            t065 = 1;
        } else {
            // t065　が　1　の時　t065は1のまま据え置き
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
            t065 = 1;
        }
    } else {
    //同行作業じゃない時
    // t065　が　2　の時に作業するとカウンター減少
    if (t065 == 2) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
        }
        //同行作業じゃないとt065が　2　になる
        t065 = 2;
    }

    //脱走
    if (nefi <= 0) {
        text += "タマは"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
    } else {
        if (sagyona == 3) {
            text += "タマは"+Tdassou+"\n";
            dassou = 1;

        }
    }

}

function g067() {
    gene = "067 囚人と選択権";
    sase = [[0.5, 0.5, 0.5, 0, 0], [1, 1, 0.5, 0.5, 0.5], [2, 2, 1.5, 1, 1], [1.5, 1, 1, 0, 0]];
    rankk = 3;
    rank();
    seihihan();

    if (irai == 1) {
        irana2 = "救出";
        kari = kekka[11];
        kari2 = deme;
        if (kari == kari2) {
            text += "救出成功\n両者特殊ギフト入手\n";
            t067 = 0;
        } else {
            if (kari > kari2) {
                text += "救出失敗\n囚人は死亡"+T2+"\n";
                t067 = 0;
            } else {
                if (kari < kari2) {
                    text += "救出成功\n";
                    sibou = 0;
                    t067 = 0;
                }
            }
        }

    } else {
        if (t067 == 0) {
            if (sagyona == 0 || sagyona == 2) {
                if (seihi == 1) {
                    text += "職員" + name + "は囚人となって檻に囚われ"+T3+"\n特殊作業で救出可能\n救出時は出目欄にこの職員の正義を入力する\n";
                    t067 = 1;
                }
            }
        } else {
            if (sagyona == 3) {
                daideme1 = 3;
                daideme2 = 6;
                daisu();
                text += "囚人は処刑され死亡"+T2+"\n囚人の浸食値+1\n職員" + name + "のSPが" + daideme4 + "減少し作業成功率と鎮圧時出目が+3\n";
                t067 = 0;
            }
        }
    }
}

function g085() {
    gene += "ピカレスクの叛逆";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0]];
    rankk = 5;
    rank();
    seihihan();

    if (kekka[10] >= 4 || kekka[11] >= 4) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            sibou = 0;
            text += "蘇生後自制、正義がランク１になる\nこの幻i想体以外での死亡あるいは業務終了で解除\n「それじゃあまた来世！」\n";
        }
    }
}

function g087() {
    gene += "植木鉢";
    sase = [[0, 0, 0.5, 2, 2], [2, 0.5, 1.5, 2, 1], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]];
    rankk = 3;
    rank();
    seihihan();

    if (seihi == 0) {
        kensaku = kekka[12].indexOf('087');
        if (kensaku == -1) {
            text += "職員" + name + "は「種」を得"+T3+"\n作業成功率-3、与ダメ+3\n";
            kagohuti = "087";
            kagohuyo();
        } else {
            sibou = 0;
        }
    }
}

function g092() {
    gene = "092 堕落の騎士";
    sase = [[1.5, 1.5, 1.5, 1, 1], [2, 2, 2, 0.5, 0.5], [0, 0, 0, 0, 0], [2, 2, 2, 2, 2]];
    rankk = 4;
    rank();

    seihihan();

    if (irai == 1) {
        irana2 = "救出";
        daideme1 = kekka[10];
        daideme2 = 6;
        daisu();
        kari = t0925.length;
        if (kari >= 2) {
            kari3 = t0925[0] + t0925[1];
        } else {
            kari3 = t0925[0];
        }
        kari2 = daideme4 + t0923;
        kari4 = t0926.length;
        if (kari4 >= 2) {
            kari = Math.floor((t0926[0] / 2) + (t0926[1] / 2) + kari3);
        } else {
            kari = t0926[0]+ kari3;
        }
        
        if (isNaN(kari) ) {
            kari = 0;
        }
        text += "救出出目：" + kari2 + "目標値：" + kari + "\n";
        if (kari <= kari2) {
            text += "救出成功\n救出した職員はギフト入手\n";
            t092 -= 1;
            if (t092 <= 0) {
                t092 = 0;
            }
            t0923 -= deme;
            if (t0923 <= 0) {
                t0923 = 0;
            }
            kari4 = t0925.indexOf(parseInt(deme));
            if (kari4 != -1) {
                t0925.splice(kari4, 1);
                t0926.splice(kari4, 1);
            }
        } else {
            text += "救出失敗\n";
        }
    } else {
        if (sagyona == 2 && seihi == 1) {
            if (kekka[7] <= 4 && t092 <= 2) {
                text += "▼職員" + name + "は収容室に囚われ"+T3+"\n救出される、あるいは特殊能力が発動するまで行動不能\n救出は特殊作業で行う\n救出時は出目欄に囚われた職員のランクを記入する\n";
                t092 += 1;
                t0923 += parseInt(kekka[7]);
                t0925.push(parseInt(kekka[7]));
                t0926.push(parseInt(deme));
            }
        }

        if (t092 >= 3) {
            text += "囚われていた職員達が未知の鉱物に囚われ行動不能、30分以内に救出されないと死亡する\n";
            t0922 = 1;
            setTimeout(g0922, 1800000);
        }
    }
}

function g0922() {
    t092 = 0;
    t0922 = 0;
    t0923 = 0;
    t0924 = 0;
    t0925 = [];
    t0926 = [];
}

function g095() {
    gene = "095 Please kill me!";
    sulo = 56;
    sase = [[1, 1, 1, 1.5, 1.5], [0.5, 0.5, 1, 1, 1], [1.5, 1.5, 1.5, 2, 2], [0.5, 0.5, 0.5, 0.5, 0]];
    rankk = 2;
    rank();

   
    seihihan();

    if (fanke == 1) {
        text += "ファンブルによるダメージや情報開示などの影響を受け"+T4+"\n";
    }
    if (sagyona == 3) {
        text += "▼職員" + name + "のHPSPが10回復\n";
    }

    if (kurike == 1 && sagyona == 2) {
        sibou = 0;
    }

}

function g094() {
    gene += "伯爵夫人";
    sase = [[1, 1.5, 1.5, 1, 0], [1, 1.5, 1, 1.5, 1.5], [1, 1, 1.5, 1, 2], [1.5, 1.5, 1.5, 2, 2]];
    rankk = 5;
    rank();
    seihihan();

    ransu = Math.floor(Math.random() * 4 + 1);
    if (ransu == 1) {
        text += "赤属性\n";
    } else {
        if (ransu == 2) {
            text += "白属性\n";
        } else {
            if (ransu == 3) {
                text += "黒属性\n";
            } else {
                if (ransu == 4) {
                    text += "青属性\n";
                    pale = 1;
                }
            }
        }
    }
    if (seihi == 0) {
        text += "伯爵夫人は血の伯爵夫人へと変化"+T2+"\n";
        kensaku = kekka[12].indexOf('094');
        if (kensaku == -1) {
            kagohuti = "094";
            kagohuyo();
        }
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;

    }
    if (sagyona == 3) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        psni = 1;
        text += "▼職員" + name + "は自殺性"+Tpani+"\nこのパニックの鎮圧にはSP+15のダメージが必要\nカウンター0→2\n";
        nefi = 2;
    }

}

function g083() {
    gene += "翼ある貴公子";
    sase = [[0.5, 0.5, 1, 1, 2], [0.5, 0.5, 1, 1, 2], [0, 0.5, 1, 1, 2], [0.5, 1, 1.5, 2, 2]];
    rankk = 4;
    rank();
    seihihan();

    if (kurike == 1) {
        text += "職員" + name + "の作業ダイス鎮圧ダイス+1（上限7dまで重複）\n";
        kensaku = kekka[12].indexOf('083');
        if (kensaku == -1) {
            kagohuti = "083";
            kagohuyo();
        }
        sykasan('083', 0, 1);
    }
    if (seihi == 0) {
        text += "職員" + name + "の作業ダイス鎮圧ダイス-1（下限1dまで重複）\n";
        sykasan('083', 0, 1);
    }
    sykensaku('083');
    if (sykekka >= 3) {
        sibou = 0;
        sykasan('083', 3, 0);
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "翼ある貴公子は"+Tdassou+"\n";
        dassou = 1;
        nefi = 1;
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
        text += "▼職員" + name + "は"+Tpani+"\n";
        pani = 1;
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "ランダムに一人職員が選ばれ、収容室に向かい死亡する\n留め具を千切り復讐せよは"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
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
        text += "▼職員" + name + "のHPが" + daideme4 + "回復"+T2+"\nカウンターが下がっ"+T3+"\n";
        nefi -= 1;
    }

    if (sagyona == 2) {
        text += "カウンターが0になっ"+T3+"\n";
        nefi = 0;
    }

    if (nefi <= 0) {
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
        text += "職員" + name + "に音が付与され"+T3+"\nこの職員の加護欄に「019」を追加\n";
        if (kensaku == -1) {
            kagohuti = "019";
            kagohuyo();
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
        text += "職員" + name + "は性転換"+T2+"\nHPSPの上限+10\n二回目以降はHPSP上昇のみ\n";

        if (kensaku4 != -1) {
            sibou = 0;
            text += "加護欄から0713を消去\n";
        } else {
            if (kensaku3 != -1) {
                kagohuti = "0713";
                kagohuyo();
            } else {
                if (kensaku2 != -1) {
                    kagohuti = "0712";
                    kagohuyo();
                } else {
                    if (kensaku == -1) {
                        kagohuti = "071";
                        kagohuyo();
                    } else {
                        kagohuti = "0711";
                        kagohuyo();
                    }

                }

            }
        }



    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
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
        text += "泣きたがりに噛み付かれ"+T3+"\n赤2ダメージ\n";
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
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    } else {
        if (sagyona == 1) {
       if (kensaku != -1 || kensaku2 != -1 || kensaku3 != -1 || kensaku4 != -1 || kensaku5 != -1) {

        } else {
            ransu = Math.floor(Math.random() * 10 + 1);
            if (ransu <= 3) {
                text += "職員" + name + "は飲み込まれ、生還"+T2+"\n「虚構」状態になっ"+T3+"\nHPSPが0で固定され、即死、パニック、眷属化、バフデバフ、回復無効\nダメージを受ける度に浸食+1、45分後に死亡（蘇生時の浸食は+3になり、ギフト入手）\n";
                kagohuti = "088";
                kagohuyo();

            }

        }
        }
 
    }
    if (nefi <= 0) {
        text += "Null-Void-Whiteは"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
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
        kensaku2 = kekka[12].indexOf('0931');

        if (kensaku == -1 && kensaku2 == -1) {

            text += "職員" + name + "の周りに炎の花びらが舞い踊る。加護欄に「093」を記入。\n職員" + name + "以外の部門内職員全員の加護欄に「0931」を記入。\n";

            for (i = 0; i < keiti.length; i++) {
                for (i = 0; i < keiti.length; i++) {
                    if (i == syid) {
                        tt12 = tt12 + "," + "093";
                        nana = "se" + i + "8";
                        document.hanteisuru[nana].value = tt12;
                    } else {
                        nana = "se" + i + "8";
                        tt121 = document.hanteisuru[nana].value;
                        tt121 = tt121 + "," + 0931;
                        document.hanteisuru[nana].value = tt121;
                    }
                }
            }
        }
    }

    kensaku = kekka[12].indexOf('093');
    if (kensaku != -1) {
        seihi = 1;
        text += "職員" + name + "のHP/SPが全回復"+T2+"\n";
    }
}


function g099() {
    gene = "099 ワンゲーム";
    peti = 0;

    if (sagyona == 4) {
        ransu = Math.floor(Math.random() * 5 + 1);
        if (ransu == 1) {
            text += "シングル\n何も起こらなかっ"+T3+"\n";
        }
        if (ransu == 2) {
            text += "ダブル\n▼職員" + name + "のSPが5回復"+T2+"\n";
        }
        if (ransu == 3) {
            text += "トリプル\n▼職員" + name + "のHPが5回復"+T2+"\n";
        }
        if (ransu == 4) {
            text += "ブル\n部門内全員のHPSPが10回復"+T2+"\n";
        }
        if (ransu == 5) {
            ransu = Math.floor(Math.random() * 5 + 1);
            text += "ダーツはダーツボードから離れた位置に飛んで行っ"+T3+"\n";
            if (ransu == 3) {
                sibou = 0;
            }
        }

    } else {
        text += "ツール型の作業は「使用」か「返却」"+T1+"\n";

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
        text += "RED\n";
        if (ransu == 1 && seihi == 1) {
            text += "HPが20回復"+T2+"\n"
        }
        if (ransu == 1 && seihi == 0) {
            text += "『次は挽肉、挽肉でございます』\n"
        }
    } else {
        if (ransu == 2) {
            text += "BLACK\n";
            if (ransu == 2 && seihi == 1) {
                text += "HP/SPが10回復"+T2+"\n"
            }
            if (ransu == 2 && seihi == 0) {
                text += "『次は抉り出し、抉り出しでございます』\n"
            }

        } else {
            if (ransu == 3) {
                text += "PALE\n";
                if (ransu == 3 && seihi == 1) {
                    text += "最大HPの半分が回復"+T2+"\n"
                }
                if (ransu == 3 && seihi == 0) {
                    text += "『次は活け造り、活け造りでございます』\n"
                }

            }
        }
    }


    if (seihi == 0) {
        text += "▼夢路の異界電車は悪夢の極刑列車に姿を変え"+T3+"\n";
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu <= 4) {
            daideme1 = 10;
            daideme2 = 30;
            daisu();
            text += "職員" + name + "は駅員たちに捕まり「" + daideme4 + "」の属性ダメージを受けた。EiGOの属性耐性を適用可能。免疫は貫通し「半減」扱いとなる。\n";
        } else {
            text += "職員" + name + "は駅員たちを振り払い下車することに成功"+T2+"\n";
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
        text += "部門内の職員のHPSPが（前回の暴走発生からの作業数）×10回復\nツールの作業数は含まれ"+T4+"\n";
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g106() {
    gene = "106 肉喰む灰狼";
    sulo = 25;
    sase = [[0, 0, 0, 0, 0], [2, 2, 1.5, 1.5, 1.5], [1, 1, 1, 0.5, 0.5], [1, 1, 0.5, 0.5, 0.5]];


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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "月白戦闘鬼姫は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
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
            text += "▼職員" + name + "は"+Tpani+"\n";
        } else {
            ransu = Math.floor(Math.random() * 5 + 1);
            if (ransu == 1) {
                text += "悲惨な殺人現場を目撃\n職員" + name + "のMPが40％減少"+T2+"\n";

            }
        }
    }

    if (kensaku != -1 && sagyona == 3) {
        sibou = 0;
        text += "カウンターが減少"+T2+"\n部門内に大きな悲鳴が響き、同時に部門全体がIP-T-04-110の死体と血で染まっ"+T3+"\n部門内の職員は1d4を振る\n1→MP25％減少　2→MP50％減少\n3→MP75％減少　4→MP100％減少\nカウンター0→1\n";
    }

}

function g113() {
    gene = "113 死命の男爵『ゲーテ』";
    sase = [[1, 1, 1, 1, 1], [1.5, 1.5, 1.5, 1.5, 1.5], [0.5, 0.5, 0.5, 0.5, 0.5], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();

    if (irai == 1) {
        irana2 = "生贄";
        text += "職員" + name + "以外の職員からランダムに1名選ばれ死亡する。\nカウンター全回復\n職員" + name + "に「死精の聖杯」を付与（与ダメ+10、作業成功率+10）\n";
        nefi = 5;
        kagohuti = "113";
        kagohuyo();

    } else {
    if (sagyona == 3) {
        text += "この作業は生贄作業に置き換わっています\n";
        peti = 0;
        keikenti = 0;
    }

    if (kekka[8] <= 3 || kekka[11] <= 3) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }
    if (seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    }
    if (nefi <= 0) {
        text += "死命の男爵『ゲーテ』は"+Tdassou+"\nカウンター0→5\n";
        dassou = 1;
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
            text += "災厄のバベルは正位置になっ"+T3+"\n部門内全職員に「災厄」が付与\n1日全ステ-30、移動ターン+1、3時間毎に10黒ダメ、パニック時50分後に死亡のデバフ\n";
            kari116 = 1;

        } else {
            text += "災厄のバベルは逆位置になっ"+T3+"\nカウントダウンが始まっ"+T3+"\n";
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
            text += "カウンターが減少"+T2+"\n";
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
                text += "カウンターが0になっ"+T3+"\n";
                nefi = 0;
            }
            con116 = [];
        }
        if (nefi <= 0) {
            text += "災厄のバベルは"+Tdassou+"\nカウンター0→5\n";
            dassou = 1;
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
        text += "職員" + name + "のHPとSPが10回復"+T2+"\n";
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
                kagohuti = "118";
                kagohuyo();
            } else {
                kagohuti = "1181";
                kagohuyo();
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
        text += "職員" + name + "は肉も残らず骨になっ"+T3+"\n";
        sibou = 0;
    }
    if (sibou == 0) {

        text += "環獄は"+Tdassou+"\n";
        dassou = 1;
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
        text += "職員" + name + "のHP" + daideme4 + "+1回復\n";
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (kekka[9] <= 3) {
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu == 6) {
            text += "灼けつく金星は"+Tdassou+"\n";
            dassou = 1;
        }
    }

    if (nefi <= 0) {
        text += "灼けつく金星は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
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
    nemax = 2;

    if (seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (seihi == 1) {
        text += "カウンターが1増加"+T2+"\n";
        nefi += 1;
    }

    if (nefi <= 0) {
        text += "部門内に雨が降っ"+T3+"\n部門内での作業及び鎮圧の出目-15\n１時間で消える\nカウンター0→2\n";
        nefi = 2;
    }

}

function g128() {
    gene += "惑わす火星";
    sase = [[1, 1, 0.5, 0.5, 2], [1.5, 1.5, 1, 1, 0], [1, 1, 0.5, 0.5, 2], [1.5, 1.5, 1, 1, 0]];
    rankk = 4;
    rank();
    seihihan();

    if (sagyona == 0 || sagyona == 2) {
        if (seihi == 0) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    } else {
        if (sagyona == 1 || sagyona == 3) {
            if (seihi == 1) {
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
        }
    }
    if (nefi <= 0) {
        text += "アイハイの花が3体出現した"+T2+"\nカウンター0→3\n";
        nefi = 3;
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
                text += "職員" + name + "に錆の涙が付着した。あらゆる被ダメージが-10。\n";
                kagohuti = "135";
                kagohuyo();
            }
        }
    }

    //ここまで//

    //錆状態での挙動です//

    if (sagyona !== 1 && sagyona != 4) {

        if (kensaku2 != -1) {
            sibou = 0;
            text += "職員<name>の体が朽ち果て、錆尽に変化"+T2+"\n";

        } else {
            if (kensaku != -1) {
                text += "職員"+name+"の体が錆びついていく。\n";
                kagohuti = "1351";
                kagohuyo();
            }
        }
    }

    //ここまで//

    //洞察作業を行って消去した時の動作です//
    if (sagyona == 1) {
        if (kensaku != -1) {

            text += "135系の加護を手動で消去してください\n";
            kagokesi('135');
            kagokesi('1351');
        } else {
            if (kensaku2 != -1)
                text += "135系の加護を手動で消去してください\n";
            kagokesi('135');
            kagokesi('1351');
        }
    }
    //ここまで//            

    //抑圧作業のカウンターの処理です//

    if (sagyona == 3) {
        if (kurike == 1) {
            text += "カウンターが即座に0になっ"+T3+"\n";
            nefi = 0;
        } else {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }


    if (nefi <= 0) {
        text += "▼錆が付与されている部門内全ての職員が錆尽となっ"+T3+"\nカウンター0→2\n";
        nefi = 2;
    }

    //ここまで//


}

function g137() {
    gene = "137 漆黒の戦術人形";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
    rankk = 4;
    rank();

   

    seihihan();
    if (seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "漆黒の戦術人形は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }


}

function g139() {
    gene += "430光年の青";
    sase = [[0.5, 0.5, 0.5, 0.5, 0.5], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1.5, 1.5, 1.5]];
    rankk = 2;
    rank();
    seihihan();

    if (seihi == 1) {
        if (sagyona == 0 || sagyona == 1 || sagyona == 2) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }
    if (nefi <= 0) {
        text += "職員" + name + "に「星の口付け」を与え"+T3+"\n作業成功率+5、装備耐性が全て「弱い」になる（脆弱はそのまま）\n重複し"+T4+"\n430光年の青は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
    }

}

function g140() {
    gene = "140 明日鳴り歌劇団";
    sase = [[2, 2, 2, 2, 2], [1, 1, 1, 1, 1], [0, 0, 0.5, 0, 0], [0.5, 0.5, 1, 1.5, 2]];
    rankk = 5;
    rank();
    seihihan();

    if (seihi == 1) {
        ransu = Math.floor(Math.random() * 7 + 1);
        if (ransu == 1) {
            text += "何も起き"+T4+"\n";
        }
        if (ransu == 2) {
            text += "浸食+1\n";
        }
        if (ransu == 3) {
            text += "作業成功率+7\n";
        }
        if (ransu == 4) {
            text += "作業成功率-7\n";
        }
        if (ransu == 5) {
            text += "次の鎮圧時、1ターン目の被ダメ×2\n";
        }
        if (ransu == 6) {
            text += "獲得PiE-BOXが最大値になる\n";
        }
        if (ransu == 7) {
            text += "業務一時停止、職員行動不能\n明日鳴り歌劇団の鎮圧後に解除、鎮圧にかかった時間（分）分慎重が下がる\n明日鳴り歌劇団は"+Tdassou+"\n";
        }
        text += "これらの効果は重複せず、違う出目が出る度に上書きされる\n";
    }
    if (nefi <= 0) {
        text += "明日鳴り歌劇団は"+Tdassou+"\nカウンター0→1\n";
        dassou = 1;
        nefi = 1;
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
        text += "収容室内の扉が全て開い"+T3+"\n";
    }

    if (sagyona == 0 && kurike == 1) {
        daideme1 = 1;
        daideme2 = 6;
        daisu();
        tet1 = daideme4;
        daideme1 = 1;
        daideme2 = 6;
        daisu();
        text += "飴玉を貰っ"+T3+"\n▼職員" + name + "のHPが" + tet1 + "回復し、SPが" + daideme4 + "減少"+T2+"\n";
    }

}

function g145() {
    gene += "マヴロスの棺";
    peti = 0;

    if (sagyona == 4) {
        kensaku = kekka[12].indexOf('145');
        if (kensaku == -1) {
            daideme1 = 3;
            daideme2 = 6;
            daisu();
            text += "職員" + name + "は15分間幽霊になり行動不能\nSP" + daideme4 + "回復\n";
            kagohuti = "145";
            kagohuyo();
            setTimeout(g1452, 900000, name);
            t145 += 1;
            if (t145 >= 5) {
                t145 = 0;
                text += "部門内のランダムなカウンターが減少する\n";
            }
        }
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g1452(id) {
    kagoche("145", 1);
    if (kensakuC != -1) {
        ketext = "職員" + id + "は行動できるようになっ"+T3+"\n加護欄から「145」を消去する\n";
        document.hanteisuru['kekka'].value = ketext;
    }
}

function g150() {
    gene += "晴れ時々カニ";
    sase = [[1, 1, 0.5, 0.5, 0.5], [1, 1, 2, 2, 2], [0.5, 0.5, 0.5, 0, 0], [1.5, 1.5, 2, 2, 2]];
    rankk = 1;
    rank();
    seihihan();

    if (sagyona == 2 && seihi == 1) {
        sykasan(150, 0, 1);
        sykensaku(150);
        if (sykekka >= 3) {
            text += "職員" + name + "はカニになっ"+T3+"\n";
            sibou = 0;
            sykasan(150, 3, 0);
        } else {
            text += "職員" + name + "の後をカニがついてき"+T3+"\n5分毎にSP2d6回復\n15分で消える\n";
            if (sykekka == 2) {
                text += "勇気+5、自制-5\n";
            }
        }
    }
    if (sagyona == 3) {
        sykensaku(150);
        if (sykekka != 0) {
            text += "晴れ時々カニによる効果がリセットされ"+T3+"\n";
            sykasan(150, 3, 0);
        }
    }
}

function g151() {
    gene += "名前のない歌";
    peti = 0;

    if (sagyona == 4) {
        kagoche("151", 1);
        if (kensakuC == -1) {
            kensaku = kekka[12].indexOf('151');
            if (kensaku == -1) {
                text += "職員" + name + "の後ろに「もう一人の自分」がついてき"+T3+"\n職員のHPの半分の分までダメージを肩代わりする\n肩代わり分を消費するか45分経過で消える\n消えた際には加護欄から「151」を消す\n即死、即パニックは防げ"+T4+"\n";
                kagohuti = "151";
                kagohuyo();
                t151 = name;
            }
        }
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g152() {
    gene += "小さな貴方の為の可愛い虫籠";
    sase = [[0, 0, 0.5, 0.5, 0.5], [2, 2, 1.5, 1.5, 1.5], [0, 0, 0.5, 0.5, 0.5], [0, 0.5, 2, 2, 2]];
    rankk = 3;
    rank();
    seihihan();

    if (t152 != -1) {
        if (t152 != syid) {
            text += "職員" + name + "はこの小さな貴方の為の可愛い虫籠に作業でき"+T4+"\n";
            peti = 0;
            keikenti = 0;
        }
    } else {
        kensaku = kekka[12].indexOf('152');
        kensaku2 = kekka[12].indexOf('1522');
        if (kensaku == -1 && kensaku==-1) {
            if (seihi == 1) {
                text += "作業成功値-2のデバフ\n他の職員にマーキングが付くとマーキング「152」とデバフが消える\n";
                kagohuti = "152";
                kagohuyo();
                sagyobahu(-2);
            }
        } else {
            if (kensaku2 != -1) {
                text += "デバフがなくなり作業成功値+5のバフになる\nこれ以降職員" + name + "は小さな貴方の為の可愛い虫籠にしか作業でき"+T4+"\n1日の終わりに死亡する\nまた、他の職員は小さな貴方の為の可愛い虫籠に作業出来なくなる\n";
                kagokesi('1522');
                kagohuti = "1523";
                kagohuyo();
                sagyobahu(+7);
                t152 = syid;
            } else {
                if (kensaku != -1) {
                text += "さらに作業成功値-2のデバフ\nマーキングが消えてもデバフは残る\n";
                kagokesi('152');
                kagohuti = "1522";
                kagohuyo();
                sagyobahu(-2);

                }
            }
        }
    }
}

function g153() {
    gene += "世界";
    sase = [[1, 1.5, 1, 1.5, 1], [1, 1, 1.5, 0.5, 0], [1, 1, 1, 1, 0], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();
    pale = 1;

    kagoche("153", 1);
    if (kensakuC == -1) {
        kensaku = kekka[12].indexOf('153');
        if (kensaku == -1) {
            text += "職員" + name + "に印がつい"+T3+"\n全ステ+10、作業成功率+5\n\n印職員が20分以内に世界へ作業しなかった場合はカウンターが減少（手動入力）\n\n";
            kagohuti = "153";
            kagohuyo();
        }
    } else {
        kensaku = kekka[12].indexOf('153');
        if (kensaku == -1) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }
    if (seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "世界は"+Tdassou+"\nカウンター0→5\n";
        dassou = 1;
        nefi = 5;
    }
}

function g155() {
    gene = "155 JOSHUA:2";
    sase = [[0, 0, 0, 0, 0], [1, 1, 0.5, 1.5, 2], [1, 1, 0.5, 0.5, 0], [1.5, 2, 2, 2, 2]];
    rankk = 3;
    rank();
    seihihan();

    if (seihi == 0) {
        text += "追加で5白ダメージ\nカウンターが減少"+T2+"\n";
        nefi -= 1;

    }

    if (nefi <= 0) {
        text += "JOSHUA:2は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }
}

function g159() {
    gene += "白き先導";
    sase = [[1.5, 1.5, 1.5, 1.5, 1.5], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1.5, 2, 2]];
    rankk = 4;
    rank();
    seihihan();
    nemax = 3;

    if (irai == 1) {
        irana2 = "追放";
        text += "▼職員" + name + "はシャットダウン性"+Tpani+"\nパニック防止効果無効、IP-T-03-259を優先的に脱走させる\n部門内職員のHPSPが最大値の半分回復"+T2+"\nカウンターが0増加"+T2+"\n";
        nefi += 1;
    } else {
        if (sagyona == 1) {
            text += "この作業は追放作業に置き換わって"+T5+"\n";
            peti = 0;
            keikenti = 0;

        } else {
            if (seihi == 0) {
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
            sykensaku(259);
            if (sagyona == 2 && sykekka == 1) {
                sibou = 0;
            }

        }
    }
    if (nefi <= 0) {
        text += "白き先導は"+Tdassou+"\nカウンター0→3\n";
        nefi = 3;
    }
}

function g160() {

    //幻想体の名前とID
    gene = "160　三つの窓と針";
    peti = 0;

    if (sagyona == 4) {
        //ここから処理

        text += "▼職員" + name + "は針を回す……\n";

        ransu = Math.floor(Math.random() * 9 + 1);
        if (ransu == 1) {
            text += "【昨日の朝】\n「さあ、楽しい宴を始めよう。」\n部門内職員全員のHPが最大値の50%回復"+T2+"\n";
        }
        if (ransu == 2) {
            text += "【昨日の昼】\n「歌って踊って騒いで楽しもう。」\n部門内職員全員のSPが最大値の50%回復"+T2+"\n";
        }
        if (ransu == 3) {
            text += "【昨日の夜】\n「期限は昨日まで。」\nランダムな加護を1つ消去する(手動でお願いします)\n";
        }
        if (ransu == 4) {
            text += "【今日の朝】\n「明日のことは知っている？」\n何も起こらなかっ"+T3+"\n";
        }
        if (ransu == 5) {
            text += "【今日の昼】\n「明日鳴りを待つ。」\n何も起こらなかっ"+T3+"\n";
        }
        if (ransu == 6) {
            text += "【今日の夜】\n「あの子がいるから明日もいいなって思えたんだ。」\n何も起こらなかっ"+T3+"\n";
        }
        if (ransu == 7) {
            text += "【明日の朝】\n「死を感じ取る、迫ってくる。」\n";
            pani = 1;
            text += "▼職員" + name + "は"+Tpani+"\n";
        }
        if (ransu == 8) {
            text += "【明日の昼】\n「死が天を破り襲い来る。」\n部門内に「飛来する遊泳魚」が三体出現"+T2+"\n";
        }
        if (ransu == 9) {
            text += "【明日の夜】\n「明日と昨日は繋がって、予定は繰り返す。」\n次の作業が「三つの窓と針」に固定される。\n";
        }


        //ここまで処理

    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g161() {
    gene = "161 バイオリアクター";
    sase = [[0.5, 0.5, 0.5, 0.5, 0], [2, 2, 0.5, 0.5, 0.5], [2, 2, 2, 2, 2], [1.5, 1.5, 1, 1, 1]];
    rankk = 3;
    rank();
    seihihan();
    if (irai == 1 || nefi <= 0) {
        irai = 1;
        irana2 = "生贄";
        text += "30分間部門が明るくなる\n部門内に滞在している全職員の全デバフの値が" + kekka[7] + "軽減される\n効果が切れる前に再度生贄した場合は残り時間が30分に上書きされる\n";
        sibou = 0;
        if (nefi <= 0) {
            text += "カウンター0→1\n";
            nefi = 1;
        }
    } else {
        if (sagyona == 2) {
            text += "生贄作業に置き換わって"+T5+"\n";
            peti = 0;
            keikenti = 0;
        } else {
            if (kekka[8] >= 5 && seihi == 1) {
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
            if (kekka[9] <= 2) {
                sibou = 0;
            }
        }
    }
}

function g170() {
    gene = "170 延々と巡る旅人";
    sase = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
    rankk = 1;
    rank();
    seihihan();
    text += "延々と巡る旅人に作業した職員の行動によってタロット系の特殊能力は発動しない（カウンター減少と脱走は除く）\nエンサイクロペディア1ページ目にある「能力詳細ページ」を読むこと\n";



}

function g171() {
    gene += "お好きな味をどうぞ";
    sase = [[0.5, 0.5, 0.5, 0.5, 0.5], [1, 1, 1, 0.5, 0.5], [0.5, 0.5, 0, 0, 0], [2, 2, 2, 2, 2]];
    rankk = 2;
    rank();
    seihihan();

    if (nefi <= 0 || sagyona == 3) {
        text = "部屋から出た瞬間、部門内に" + kekka[7] + "d6の赤ダメージ\n";
        sibou = 0;
        if (nefi <= 0) {
            text += "カウンター0→3\n";
            nefi = 3;
        }
    } else {
        if (seihi == 1) {
            if (sagyona == 0) {
                daideme1 = 2;
                daideme2 = 6;
                daisu();
                text += "塩バター味のポップコーン\nHP" + daideme4 + "回復\n";
            }
            if (sagyona == 1) {
                daideme1 = 2;
                daideme2 = 6;
                daisu();
                text += "チーズ味のポップコーン\nSP" + daideme4 + "回復\n";
            }
            if (sagyona == 2) {
                text += "キャラメル味のポップコーン\nこの後1回限り作業成功率+6（重複しない、再取得可）\nカウンターが減少"+T2+"\n";
                nefi -= 1;
            }
        }
    }
}

function g173() {
    gene = "173 終止符のクラゲ";
    sase = [[0, 0.5, 0.5, 1, 1], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [1, 1, 1, 1, 1]];
    rankk = 5;
    rank();
    seihihan();
    nemax = 3;
    if (seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "終止符のクラゲは"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }

}

function g183() {
    gene += "ただのおひたし";
    sase = [[0, 0, 0, 0, 0], [0.5, 0.5, 0.5, 0.5, 0.5], [2, 2, 2, 2, 2], [0, 0, 0, 0, 0]];
    rankk = 2;
    rank();
    seihihan();
    if (sagyona == 0) {
        t183 = 1;
    }
    ransu = Math.floor(Math.random() * 3 + 1);
    if (ransu <= 2) {
        t183 = 1;
    }
    if (t183 == 1) {
        text += "職員" + name + "はおひたしを食べ"+T3+"\nHPSP10回復、自制-5（重複しない）\n「出来立てのおひたしは如何？」\n";
        sykasan(183, 3, 0);
    } else {
        text += "カウンターが減少"+T2+"\n「食せ！さもなくば逃げるぞ！」\n";
        nefi -= 1;
        sykasan(183, 0, 1);
    }
    sykensaku(183);
    if (sykekka >= 3) {
        text += "「おひたし食えよぉーーーーーーーーッ」\n";
        sibou = 0;
        sykasan(183, 3, 0);
    }

    if (nefi <= 0) {
        text += "ただのおひたしは"+Tdassou+"\nカウンター0→1\n";
        dassou = 1;
        nefi = 1;
    }
    t183 = 0;
}

function g185() {
    gene = "185 月の魔女";
    sulo = 87;
    sase = [[0.5, 1, 1, 1, 1], [1.5, 1.5, 1.5, 0.5, 0.5], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1]];
    rankk = 4;
    rank();
    seihihan();

    if (sagyona == 2 && seihi == 1) {
        text += "▼職員" + name + "は月に囚われ"+T3+"\nこのまま業務終了、あるいは3回救出失敗で死亡\n任意で救出作業に向かえる\n救出は「特殊作業」で出目の欄に職員" + name + "の正義ランクを記入して行う\n";
    }
    if (irai == 1) {
        irana2 = "救出";
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
            text += "救出職員正義vs囚われ職員正義\n自分出目：" + kari + "\n相手出目：" + kari2 + "\n囚われていた職員は死亡"+T2+"\n";
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
        text += "カウンターが減少"+T2+"\n";
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
        text += "絨毯"+Tdassou+"\nカウンター0→1\n";
        dassou = 1;
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
    text += "「最高に幸福な晩餐を！」のEiGO、ギフトいずれかを装備している場合HPSP" + daideme4 + "回復\n";
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
                text += "▼職員" + name + "は電動ノコギリに自ら飛び込んだ\n30分間、5分おきに部門内の職員全員に5白ダメージ\n歌い去る夢による死者が3名になるとカウンター0になり脱走する\n";
            }
        } else {
            sibou = 0;
            text += "▼職員" + name + "は電動ノコギリに自ら飛び込んだ\n30分間、5分おきに部門内の職員全員に5白ダメージ\n歌い去る夢による死者が3名になるとカウンター0になり脱走する\n";
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (sagyona == 3 && seihi == 1) {
        text += "「出演者」が付与され"+T3+"\nHP+20SP-10\nパニックになると殺人性になる\nパニック中SP+20、赤近距離\n";
        kensaku = kekka[12].indexOf('199');
        if (kensaku == -1) {
            kagohuti = "199";
            kagohuyo();
        }
    }
    if (nefi <= 0) {
        pani = 1;
        text += "▼職員" + name + "は殺人性"+Tpani+"\nパニック中SP+20、赤近距離\nカウンター0→3\n";
        nefi = 3;
    }

}

function g200() {
    gene += "黙示録の審判者";
    sase = [[1, 1, 1, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 1, 1, 1], [2, 2, 2, 2, 2]];

    if (t200 == 0) {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 1) {
            t200 = 1;
            text = "正位置になっ"+T3+"\nWAW\nWHITE\n\n";
        } else {
            t200 = 2;
            text = "逆位置になっ"+T3+"\nALEPH\nPALE\n\n";
        }
    } else {
        if (t200 == 1) {
            text = "正位置\nWAW\nWHITE\n\n";
        } else {
            text = "逆位置\nALEPH\nPALE\n\n";
        }
    }

    if (t200 == 2) {
        rankk = 5;
        pale = 1;
    } else {
        rankk = 4;
    }
    rank();
    seihihan();

    if (t200 == 2) {
        if (deme <= 9 || deme >= 18) {
            ransu = Math.floor(Math.random() * 10 + 1);
            if (ransu == 1) {
                text += "浸食度+1\n1日1度のみ、2回目以降は何も起き"+T4+"\n";
            }
            if (ransu == 2) {
                text += "獲得経験値が1になる\n";
            }
            if (ransu == 3) {
                text += "獲得PiE-BOX-20\n";
            }
            if (ransu == 4) {
                text += "HPSP10ダメージ\n";
            }
            if (ransu >= 5 && ransu <= 7) {
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
            if (ransu >= 8) {
                text += "何も起き"+T4+"\n";
            }
        }
        if (nefi <= 0) {
            dassou = 1;
            text += "黙示録の審判者は"+Tdassou+"\nカウンター0→2\n";
            nefi = 2;
        }
    } else {
        if (deme <= 9 || deme >= 18) {
            ransu = Math.floor(Math.random() * 10 + 1);
            if (ransu == 1) {
                text += "浸食度-1\n1日1度のみ、2回目以降は何も起き"+T4+"\n";
            }
            if (ransu == 2) {
                text += "HP15回復\n";
            }
            if (ransu == 3) {
                text += "SP15回復\n";
            }
            if (ransu == 4) {
                text += "HPSP20回復\n";
            }
            if (ransu >= 5 && ransu <= 7) {
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
            if (ransu >= 8) {
                text += "何も起き"+T4+"\n";
            }
        }
        if (nefi <= 0) {
            ransu = Math.floor(Math.random() * 4 + 1);
            text += ransu + "体ネフィリム暴走が発生\nただし作業しても観測記録は上昇せずPiE-BOXも入手出来"+T4+"\nカウンター0→2\n";
            nefi = 2;
        }
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
        text += "柔らかい妖精は"+Tdassou+"\n";
        dassou = 1;
        text += "カウンター0→1\n";
    }

}

function g202() {
    gene += "黒猫と骨切りノコギリ";
    sase = [[1, 1, 1.5, 2, 2], [2, 1.5, 1, 1, 1], [0, 0, 0.5, 1, 0.5], [1, 1, 1, 1.5, 1.5]];
    rankk = 3;
    rank();
    seihihan();
    if (t202 == syid) {
        sykasan(202, 0, 1);
        sykensaku(202);
        if (sykekka >= 3) {
            nefi -= 1;
            dasou == 1;
            sykasan(202, 3, 0);
        }
    } else {
        sykasan(202, 3, 0);
    }
    if (sagyona == 2) {
        ransu = Math.floor(Math.random() * 6 + 1);
        text += "HP" + ransu + "回復\n";
        ransu = Math.floor(Math.random() * 100 + 1);
        if (ransu <= 35) {
            sibou = 0;
        }
    }
    if (kurike == 1) {
        kensaku = kekka[12].indexOf('202');
        if (kensaku == -1) {
            text += "黒猫がついてき"+T3+"\n5分間作業成功率+5\n";
            kagohuti = "202";
            kagohuyo();
        }
    }
    if (nefi <= 0) {
        text += "黒猫と骨切りノコギリは職員" + name + "を魅了し自身を持たせて"+Tdassou+"\n";
        nefi = 1;
    }
    t202 = syid;
}

function g204() {
    gene += "花輪のブライア";
    sase = [[1, 1, 1, 0.5, 0.5], [1.5, 1.5, 1, 1, 1], [0.5, 0.5, 0, 0, 0], [1.5, 1.5, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();

    if (sagyona == 2 && seihi == 1) {
        kensaku = kekka[12].indexOf('204');
        if (kensaku == -1) {
            text += "職員" + name + "は花冠を受け取っ"+T3+"\n10分毎にHP8回復\n死亡で消失\n";
            kagohuti = "204";
            kagohuyo();
        }

    }

    if (nefi <= 0) {
        text += "花輪のブライアは"+Tdassou+"\n花冠が「病の薔薇」に変化する\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
    }
}

function g205() {
    gene += "虚飾の偶像";
    sase = [[2, 2, 2, 2, 2], [1.5, 1, 1, 1, 1], [0.5, 0.5, 0.5, 0, 0], [1.5, 1.5, 1.5, 1.5, 1.5]];
    rankk = 3;
    rank();
    seihihan();
    if (nefi <= 0) {
        kagoche("205", 1);
        if (kensakuC == -1) {
            text += "作業・鎮圧ダイス+1\n加護を得てから合計50％SPが減少すると死亡しカウンターが減少する\n";
            kagohuti = "205";
            kagohuyo();
        }
        text += "カウンター0→1\n";
        nefi = 1;
    }
    text += "SPが減少している状態で入室するとカウンターが減少する\n";
    if (kekka[9] <= 3) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
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
        text += "▼職員" + name + "のHPが10回復"+T2+"\nカウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "愛詰めの箱は誤作動を起こ"+T2+"\n15分毎に部門内の全ての収容室のカウンターを1ずつ下げ、部門内の職員に10赤ダメージ\n全ての作業が「粉砕作業」に置き換わる\n粉砕作業では判定ツールを使用し"+T4+"\n粉砕作業では部門内の職員からランダムに1名選ばれ死亡する。カウンターは全回復する\n";

    }

}

function g212() {
    gene += "墜ちた十字架";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 1, 1]];
    rankk = 4;
    rank();
    seihihan();
    pale = 1;

    if (irai == 1) {
        irana2 = "試練";
        daideme1 = 2;
        daideme2 = 100;
        daisu();
        kari = daideme4;
        daideme1 = 2;
        daideme2 = 100;
        daisu();
        kari2 = daideme4;
        text += "職員" + name + "は自らの足を吊るし台に括り付け"+T3+"\n" + kari + "白ダメ、" + kari2 + "青ダメ\nパニックになると死亡\n耐えきったらギフト入手、職員" + name + "のHPSP全回復\nこれで死亡した場合部門内全職員の全ステータス-25\n部門内全職員+オフィサー1名からランダムに選出し死亡させることでデバフを解除可能、ただし蘇生は出来なくなる\n";
    } else {
        if (sagyona == 1) {
            text += "この作業は「試練」に置き換わっています\n特殊作業から選択可\n";
            peti = 0;
            keikenti = 0;
        }
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
        text += "職員" + name + "は凍傷状態になっ"+T3+"\n慎重、正義ランク1低下\n４時間で消える\n";
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;

    }

    ransu = Math.floor(Math.random() * 3 + 1);
    if (seihi == 0 && ransu == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (nefi <= 0) {
        text += "囚われの氷王女は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
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
            text += "ミルクチョコを貰っ"+T3+"\n任意のタイミングでHP15開封、一日限り\n他の職員にも渡せる\n"
        } else {
            text += "ホワイトチョコを貰っ"+T3+"\n任意のタイミングでSP15開封、一日限り\n他の職員にも渡せる\n"
        }
    } else {
        ransu = Math.floor(Math.random() * 5 + 1);
        if (ransu == 1) {
            text += "カウンターが減少"+T2+"\n"
            nefi -= 1;
            if (nefi <= 0) {
                text += "ちょっとおかしなショコラティエは"+Tdassou+"\nカウンター0→2\n";
                dassou = 1;
                nefi = 2;
            }
        }
    }

    if (kekka[8] >= 5 || kekka[10] <= 2) {
        sibou = 0;
    }

}

function g215() {
    gene += "冬霜に溺れた街";
    sase = [[1.5, 1.5, 1.5, 1.5, 1.5], [1, 1, 1, 1, 1], [0.5, 0.5, 0.5, 0, 0], [1.5, 1, 1, 0.5, 0.5]];
    rankk = 4;
    rank();
    seihihan();

    nemax = 3;

    if (kekka[10] <= 3) {
        sibou = 0;
    }

    if (sagyona == 1) {
        text += "職員" + name + "の自制-10\n3回まで重複する\nカウンターが1増加"+T2+"\n";
        nefi += 1;
    }
    if (sagyona == 2 || sagyona == 3) {
        text += "職員" + name + "の勇気慎重+5\n3回まで重複する\nカウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "冬霜に溺れた街の特殊能力が発動\nエンサイクロペディアの脱走情報参照\n";
        dassou = 1;
        nefi = 0;
    }
}

function g216() {
    gene += "ただ一つの原石と砥材";
    sase = [[1.5, 1.5, 1.5, 1.5, 1.5], [1.5, 1.5, 1.5, 1.5, 1.5], [1.5, 1.5, 1.5, 1.5, 1.5], [1.5, 1.5, 1.5, 1.5, 1.5]];
    g2162();
    rankk = 4;
    rank();
    seihihan();
    if (sagyona == 0) {
        t216[0][0] += 1;
    }
    if (sagyona == 1) {
        t216[1][0] += 1;
    }
    if (sagyona == 2) {
        t216[2][0] += 1;
    }
    if (sagyona == 3) {
        t216[3][0] += 1;
    }

    if (sagyona == 0 && t2162[0] == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (sagyona == 1 && t2162[1] == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (sagyona == 2 && t2162[2] == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (sagyona == 3 && t2162[3] == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (nefi <= 0) {
        text += "作品は"+Tdassou+"\nカウンター0→5\n";
        dassou = 1;
        nefi = 5;
        g2163();
        t216 = [[0, 0], [0, 1], [0, 2], [0, 3]];
    }

}

function g2162() {
    t2161 = [[0, 0], [0, 1], [0, 2], [0, 3]];
    t2162 = [0, 0, 0, 0];
    t2161[0][0] = parseInt(kekka[8]);
    t2161[1][0] = parseInt(kekka[9]);
    t2161[2][0] = parseInt(kekka[10]);
    t2161[3][0] = parseInt(kekka[11]);
    t2161.sort(compareFunc);
    if (t2161[0][0] == t2161[1][0] && t2161[1][0] == t2161[2][0] && t2161[2][0] == t2161[3][0]) {
        sase = [[0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5]];
        t2162 = [1, 1, 1, 1];
    } else {
        if (t2161[0][0] == t2161[1][0] && t2161[1][0] == t2161[2][0]) {
            if (t2161[3][1] == 0) {
                sase = [[1.5, 1.5, 1.5, 1.5, 1.5], [0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5]];
                t2162 = [0, 1, 1, 1];
            } else {
                if (t2161[3][1] == 1) {
                    sase = [[0.5, 0.5, 0.5, 0.5, 0.5], [1.5, 1.5, 1.5, 1.5, 1.5], [0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5]];
                    t2162 = [1, 0, 1, 1];
                } else {
                    if (t2161[3][1] == 2) {
                        sase = [[0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5], [1.5, 1.5, 1.5, 1.5, 1.5], [0.5, 0.5, 0.5, 0.5, 0.5]];
                        t2162 = [1, 1, 0, 1];
                    } else {
                        if (t2161[3][1] == 3) {
                            sase = [[0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5], [1.5, 1.5, 1.5, 1.5, 1.5]];
                            t2162 = [1, 1, 1, 0];
                        }
                    }
                }
            }
        } else {
            if (t2161[0][0] == t2161[1][0]) {
                if (t2161[0][1] == 0) {
                    sase[0] = [0.5, 0.5, 0.5, 0.5, 0.5];
                    t2162[0] = 1;
                } else {
                    if (t2161[0][1] == 1) {
                        sase[1] = [0.5, 0.5, 0.5, 0.5, 0.5];
                        t2162[1] = 1;
                    } else {
                        if (t2161[0][1] == 2) {
                            sase[2] = [0.5, 0.5, 0.5, 0.5, 0.5];
                            t2162[2] = 1;
                        } else {
                            if (t2161[0][1] == 3) {
                                sase[3] = [0.5, 0.5, 0.5, 0.5, 0.5];
                                t2162[3] = 1;
                            }
                        }
                    }
                }
                if (t2161[1][1] == 0) {
                    sase[0] = [0.5, 0.5, 0.5, 0.5, 0.5];
                    t2162[0] = 1;
                } else {
                    if (t2161[1][1] == 1) {
                        sase[1] = [0.5, 0.5, 0.5, 0.5, 0.5];
                        t2162[1] = 1;
                    } else {
                        if (t2161[1][1] == 2) {
                            sase[2] = [0.5, 0.5, 0.5, 0.5, 0.5];
                            t2162[2] = 1;
                        } else {
                            if (t2161[1][1] == 3) {
                                sase[3] = [0.5, 0.5, 0.5, 0.5, 0.5];
                                t2162[3] = 1;
                            }
                        }
                    }
                }
            } else {
                if (t2161[0][1] == 0) {
                    sase[0] = [0.5, 0.5, 0.5, 0.5, 0.5];
                    t2162[0] = 1;
                } else {
                    if (t2161[0][1] == 1) {
                        sase[1] = [0.5, 0.5, 0.5, 0.5, 0.5];
                        t2162[1] = 1;
                    } else {
                        if (t2161[0][1] == 2) {
                            sase[2] = [0.5, 0.5, 0.5, 0.5, 0.5];
                            t2162[2] = 1;
                        } else {
                            if (t2161[0][1] == 3) {
                                sase[3] = [0.5, 0.5, 0.5, 0.5, 0.5];
                                t2162[3] = 1;
                            }
                        }
                    }
                }
            }
        }
    }
}

function g2163() {
    t216.sort(compareFunc);
    if (t216[0][0] == t216[1][0] && t216[1][0] == t216[2][0] && t216[2][0] == t216[3][0]) {
        ransu = Math.floor(Math.random() * 4 + 1);
        if (ransu == 1) {
            kari = t216[0][1];
        }
        if (ransu == 2) {
            kari = t216[1][1];
        }
        if (ransu == 3) {
            kari = t216[2][1];
        }
        if (ransu == 4) {
            kari = t216[3][1];
        }
    } else {
        if (t216[0][0] == t216[1][0] && t216[1][0] == t216[2][0]) {
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 1) {
                kari = t216[0][1];
            }
            if (ransu == 2) {
                kari = t216[1][1];
            }
            if (ransu == 3) {
                kari = t216[2][1];
            }
        } else {
            if (t216[0][0] == t216[1][0]) {
                ransu = Math.floor(Math.random() * 2 + 1);
                if (ransu == 1) {
                    kari = t216[0][1];
                }
                if (ransu == 1) {
                    kari = t216[1][1];
                }
            } else {
                kari = t216[0][1];
            }
        }
    }
    if (kari == 0) {
        text += "本能パターン赤属性\n";
    }
    if (kari == 1) {
        text += "洞察パターン白属性\n";
    }
    if (kari == 2) {
        text += "愛着パターン黒属性\n";
    }
    if (kari == 3) {
        text += "抑圧パターン青属性\n";
    }
}

function g217() {
    gene += "塔暮らしの少女";
    sase = [[1, 1, 1, 0.5, 0.5], [0.5, 0.5, 0, 0, 0], [1.5, 1.5, 1, 1, 1], [2, 2, 2, 2, 2]];
    rankk = 4;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('217');
    if (seihi == 1 && sagyona == 1) {
        text += "職員" + name + "はラプンツェルを食べ"+T3+"\n";
        if (kensaku == -1) {
            text += "HP上限+20、作業成功率、与ダメ+3\n重複しない、死亡するまで続く\n";
            kagohuti = "217";
            kagohuyo();
        } else {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }
    if (nefi <= 0) {
        text += "塔暮らしの少女は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
    }
}

function g218() {
    gene += "晦冥する冥王星";
    sase = [[1, 1, 1, 1, 1], [0.5, 0.5, 0, 0, 0], [0.5, 0.5, 1, 1, 1], [1.5, 1.5, 1.5, 1.5, 1]];
    rankk = 4;
    rank();
    seihihan();

    if (sagyona == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (sagyona == 0) {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 2) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }
    if (nefi <= 0) {
        text += "晦冥する冥王星は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
        kensaku = gnid.indexOf('268');
        if (kensaku != -1) {
            text += "寒慄する天王星は"+Tdassou+"\n";
        }
        kensaku = gnid.indexOf('460');
        if (kensaku != -1) {
            text += "4ターン経過後に朗笑する海王星は脱走する\n";
        }
    }
}

function g219() {
    gene += "ミステリアスパール";
    sase = [[0, 0.5, 0.5, 1, 1], [0, 0, 0.5, 0.5, 0.5], [2, 2, 2, 2, 2], [2, 1.5, 1.5, 2, 2]];
    rankk = 5;
    rank();
    seihihan();
    sykasan(219, 3, 1);
    sykensaku(272);
    if (seihi == 1) {
        text += "職員" + name + "のHPSPが10回復"+T2+"\n";
        if (sykekka != 0) {
            kensaku = kekka[12].indexOf('219');
            if (kensaku == -1) {
                text += "与ダメ1.1倍\n";
                kagohuti = "219";
                kagohuyo();
            }
        }
    }
    if (kekka[8] >= 2 || kekka[10] <= 4 || kekka[11] <= 4) {
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu == 1) {
            text += "部門内で最も危険度の高い収容室のカウンターが0になる（同ランクが複数いる場合はランダム）\n脱走時に職員に対するなんらかの特殊能力が発動する場合、対象はランダムで選ばれる\n";
        }
    }
}

function g223() {
    gene += "単純な禁句";
    sase = [[1, 1, 0.5, 0, 0], [0.5, 0.5, 0.5, 0.5, 0], [1.5, 1.5, 1.5, 2, 2], [1, 1, 1, 1, 1]];
    rankk = 2;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('223');
        if (sagyona == 3) {
            sykasan(223, 0, 1);
            sykensaku(223);
            if (sykekka == 1) {
                kensaku = kekka[12].indexOf('223');
                if (kensaku == -1) {
                    kagohuti = "223";
                    kagohuyo();
                }
            } else {
                if (sykekka == 2) {
                    ransu = Math.floor(Math.random() * 6 + 1);
                    text += "職員" + name + "に" + ransu + "白ダメージ\n";
                }
    if (sykekka == 3) {
        text += "▼職員" + name + "は徘徊性"+Tpani+"\n";
        pani = 1;
        sykasan(223, 3, 0);
    } 
            }
        }
    
}

function g225() {
    gene = "225 危険体験シミュレーター";
    peti = 0;

    if (sagyona == 4) {
        text += "出目の欄には任意の数値を入れる　ダイスを振った場合は無効\n";
        kari = deme * 5;
        text += "職員" + name + "の全ステータスが" + kari + "上昇"+T2+"\n使用毎に上書きされる\n";
        if (deme >= 6 && deme <= 9) {
            kari2 = deme - 4;
            ransu = Math.floor(Math.random() * 8 + 1);
            if (ransu <= kari2) {
                sibou = 0;
            }
        }
        if (deme >= 10) {
            ransu = Math.floor(Math.random() * 12 + 1);
            if (ransu <= 11) {
                sibou = 0;
            }
        }
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g228() {
    gene += "フラスコの月";
    sase = [[2, 2, 2, 2, 2], [1, 1, 1, 1, 1], [2, 1.5, 1.5, 1, 1], [1.5, 1.5, 1.5, 1.5, 1]];
    rankk = 5;
    rank();
    seihihan();
    t2281 = 0;
    kensaku = kekka[12].indexOf('228');
    if (kensaku != -1) {
        t2281 = 1;
    }
    text += "職員" + name + "にかかっていたフラスコの月以外の加護や効果を全て失う\n";
    tt12 = "";
    nana = "se" + syid + "8";
    document.hanteisuru[nana].value = "000";
    if (t2281 == 1) {
        tt12 += ",228";
        nana = "se" + syid + "8";
        document.hanteisuru[nana].value = tt12;
    }
    kagoche("228", 1);
    if (kensakuC == -1) {
        text += "職員" + name + "は標的となっ"+T3+"\nツールの効果を得られ"+T4+"\n";
        t228 = 1;
        if (kensaku == -1) {
            kagohuti = "228";
            kagohuyo();
        }
    }

}

function g230() {
    gene = "230 目の中の地方港";
    peti = 0;

    if (sagyona == 4) {
        sykasan(230, 0, 1);
        sykensaku(230);
        if (sykekka >= 8) {
            kari = 8 * 10;
            ransu = Math.floor(Math.random() * 6 + 1);
            kari2 = 2 * ransu * 8;
            text += "職員" + name + "は" + kari + "分行動不能になっ"+T3+"\nHPSP" + kari2 + "回復\n行動不能になっている間、標的や部門全体攻撃、部門全体効果の対象になら"+T4+"\n";
        } else {
        kari = sykekka * 10;
        ransu = Math.floor(Math.random() * 6 + 1);
        kari2 = 2 * ransu * sykekka;
        text += "職員" + name + "は" + kari + "分行動不能になっ"+T3+"\nHPSP" + kari2 + "回復\n行動不能になっている間、標的や部門全体攻撃、部門全体効果の対象になら"+T4+"\n";
        }

        if (sykekka == 2) {
            ransu = Math.floor(Math.random() * 4 + 1);
            if (ransu == 1) {
                text += "部門内のランダムな1体のカウンターが0になっ"+T3+"\n";
            }
        } else {
            if (sykekka == 3) {
                ransu = Math.floor(Math.random() * 2 + 1);
                if (ransu == 1) {
                    text += "部門内のランダムな1体のカウンターが0になっ"+T3+"\n";
                }
            } else {
                if (sykekka == 4) {
                    ransu = Math.floor(Math.random() * 4 + 1);
                    if (ransu == 1) {
                        text += "部門内のランダムな1体のカウンターが0になっ"+T3+"\n";
                    }
                } else {
                    if (sykekka == 5) {
                        text += "部門内のランダムな2体のカウンターが0になっ"+T3+"\n";
                    } else {
                        if (sykekka == 6) {
                            text += "部門内のランダムな3体のカウンターが0になっ"+T3+"\n";
                        } else {
                            if (sykekka == 7) {
                                text += "部門内のランダムな4体のカウンターが0になっ"+T3+"\n";
                            } else {
                                if (sykekka >= 8) {
                                    text += "部門内の全てのカウンターが0になっ"+T3+"\n";
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (nefi <= 0) {
        text += "もこもこあひるは"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
    }

}

function g241() {
    gene += "探し人は居らず";
    peti = 0;

    if (sagyona == 4) {
        if (t241 <= 1) {
            if (t2412 >= 4) {
                ransu = Math.floor(Math.random() * 6 + 1);
                if (kekka[10] <= 4) {
                    if (ransu == 1) {
                        text += "使用者以外が全員死亡\n";
                    }
                    if (ransu == 2) {
                        text += "使用者以外が全員パニック\n";
                    }
                    if (ransu == 3) {
                        text += "▼職員" + name + "は"+Tpani+"\n";
                        pani = 1;
                    }
                    if (ransu == 4) {
                        text += "最も危険度の高い幻i想体が脱走\n";
                    }
                    if (ransu == 5) {
                        sibou = 0;
                    }
                    if (ransu == 6) {
                        text += "職員" + name + "のHPSP全回復\n";
                    }
                } else {
                    if (ransu == 1 || ransu == 2) {
                        text += "脱走中の幻i想体がいる場合1体鎮圧\n";
                        sibou = 0;
                    }
                    if (ransu == 3 || ransu == 4) {
                        text += "脱走中の幻i想体がいる場合全員鎮圧\n";
                        sibou = 0;
                    }
                    if (ransu == 5) {
                        text += "脱走中の幻i想体がいる場合全員鎮圧\n使用者以外のHPSP全回復\n";
                        sibou = 0;
                    }
                    if (ransu == 6) {
                        text += "脱走中の幻i想体がいる場合全員鎮圧\n使用者以外のHPSP全回復\n";
                    }

                }
                t241 += 1;
                t2412 = 0;
                if (t241 >= 2) {
                    text += "\nEiGOを抽出"+T2+"\n";
                }
            } else {
                if (kekka[7] <= 2) {
                    text += "何も起き"+T4+"\n";
                } else {
                    t2412 += 1;
                    text += t2412+"つ目の鍵が開い"+T3+"\n";
                    if (t2412 >= 4) {
                        text += "鍵が全て開い"+T3+"\n";
                    }
                }
            }

        } else {
            text += "何も起こらなかっ"+T3+"\n";
        }


    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
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
        text += "「思い出の欠片」追従\n任意のステータス+5\n";
        kensaku531 = kekka[12].indexOf('531');
        if (kensaku531 != -1) {
            text += "30分毎に1回、任意でHP10回復可能\n";
        }
        kensaku = kekka[12].indexOf('243');
        if (kensaku == -1) {
            kagohuti = "243";
            kagohuyo();
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
        text += "耐性貫通の" + daideme4 + "赤ダメージ\n";
        kensaku = kekka[12].indexOf('246');
        if (kensaku == -1) {
            text += "HP上限+20\n一日限り、このダメージとバフは一人一回\n詳細は能力詳細ページ参照\n";
        kagohuti = "246";
        kagohuyo();
        }


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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (nefi <= 0) {
        text += "わんぱくかいじゅうは"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
    }

}

function g259() {
    gene += "黒き門番";
    sase = [[2, 2, 2, 2, 2], [1.5, 1.5, 1.5, 1.5, 1.5], [2, 2, 2, 2, 2], [0.5, 0.5, 1, 1, 1]];
    rankk = 4;
    rank();
    seihihan();
    nemax = 2;

    if (irai == 1) {
        irana2 = "生贄";
        text += "職員をランダムに1名決定し、死亡させる\nカウンターが1増加する\n「お前が代わりの者か。或いは、堕ちる覚悟を決めたか？いずれにせよ、罪人のお前に抵抗の余地はない。来い、地獄へ」\n";
        nefi += 1;
    } else {
        if (kekka[11] <= 2) {
            text += "恐怖ダメージSP75％\nパニックになるとカウンター減少\n";
        } else {
            if (kekka[11] == 3) {
                text += "恐怖ダメージSP25％\nパニックになるとカウンター減少\n";
            }
        }
        if (sagyona == 3 && seihi == 0) {
            ransu = Math.floor(Math.random() * 2 + 1);
            if (ransu == 1) {
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
        }
        if (sagyona == 2) {
            text += "この作業は生贄作業に置き換わって"+T5+"\n";
            peti = 0;
            keikenti = 0;
        }
        if (seihi == 1) {
            sykasan(259, 3, 1);
        }
    }
    if (nefi <= 0) {
        text += "黒き門番は"+Tdassou+"\nカウンター0→2\n";
        sibou = 0;
        nefi = 2;
        kensaku = gnid.indexOf('159');
        if (kensaku != -1) {
            text += "白き先導は"+Tdassou+"\n";
        }
    }

}

function g262() {
    gene += "星の涙痕";
    sase = [[1, 1, 1, 1, 1], [1.5, 1.5, 1.5, 2, 2], [0.5, 0.5, .5, 0, 0], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();

    if (seihi == 1) {
        daideme1 = 2;
        daideme2 = 6;
        daisu();
        text += "職員" + name + "のHP" + daideme4 + "回復\n";
    }
    if (sagyona == 3 || kekka[11] <= 4 || nefi <= 0) {
        text += "星の涙痕は"+Tdassou+"\n";
        dassou = 1;
        nefi = 1;
        kensaku = gnid.indexOf('263');
        if (kensaku != -1) {
            text += "蝶の回禄は"+Tdassou+"\n";
        }
    }
}

function g263() {
    gene += "蝶の回禄";
    sase = [[0.5, 0.5, 0.5, 0, 0], [2, 2, 2, 2, 2], [1, 1, 1, 1, 1], [1.5, 1.5, 1.5, 2, 2]];
    rankk = 5;
    rank();
    seihihan();

    if (sagyona == 1 || kekka[9] <= 4 || nefi <= 0) {
        text += "蝶の回禄は"+Tdassou+"\n";
        nefi = 1;
        dassou = 1;
        kensaku = gnid.indexOf('262');
        if (kensaku != -1) {
            text += "星の涙痕は"+Tdassou+"\n";
        }
    }
}

function g264() {
    gene += "渦巻く木星";
    sase = [[2, 2, 1, 1.5, 1.5], [2, 2, 0.5, 0.5, 0.5], [2, 2, 1, 1, 0.5], [2, 2, 1.5, 1.5, 1.5]];
    rankk = 5;
    rank();
    seihihan();

    if (seihi == 0) {
        kensaku = kekka[12].indexOf('264');
        if (kensaku == -1) {
            text += "職員" + name + "に「精霊の加護」が付与され"+T3+"\n鎮圧時与ダメ+5\n";
            kagohuti = "264";
            kagohuyo();
        }
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (kekka[7] <= 2) {
        sibou = 0;
    }
    if (nefi <= 0) {
        text += "渦巻く木星は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }
}

function g268() {
    gene += "寒慄する天王星";
    sase = [[0.5, 0.5, 0.5, 1, 1], [1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [1, 1, 1, 1.5, 2]];
    rankk = 5;
    rank();
    seihihan();

    ransu = Math.floor(Math.random() * 15 + 1);
    text += ransu + "HPダメージ\n";
    if (ransu >= 10) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (nefi <= 0) {
        text += "寒慄する天王星は"+Tdassou+"\nカウンター0→4\n";
        dassou = 1;
        nefi = 4;
        kensaku = gnid.indexOf('218');
        if (kensaku != -1) {
            text += "晦冥する冥王星は"+Tdassou+"\n";
        }
        kensaku = gnid.indexOf('460');
        if (kensaku != -1) {
            text += "4ターン経過後に朗笑する海王星は脱走する\n";
        }
    }
}

function g272() {
    gene += "ギャザメンド";
    sase = [[1.5, 1, 0.5, 0, 1], [2, 2, 1.5, 1, 1], [2, 2, 2, 1.5, 1.5], [2, 1.5, 1, 1.5, 0.5]];
    rankk = 5;
    rank();
    seihihan();
    sykensaku(272);
    if (sykekka == 0) {
        sykasan(272, 3, 1);
    }
    if (sagyona == 0) {
        sykasan(272, 0, 1);
        sykensaku(272);
        if (sykekka >= 4) {
            sibou = 0;
            sykasan(272, 3, 1);
        }
    }
    sykensaku(219);
    if (sykekka != 0) {
        kensaku = kekka[12].indexOf('272');
        if (kensaku == -1) {
            text += "被ダメ0.9倍\n";
            kagohuti = "272";
            kagohuyo();
        }
    }
    if (seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "ギャザメンドは"+Tdassou+"\nカウンター0→2\n";
        sibou = 0;
        nefi = 2;
    }

}

function g289() {
    gene += "ブッチャー・ファクトリー";
    sase = [[0, 0, 0, 0, 0], [0, 1.5, 1, 0.5, 0.5], [1, 2, 2, 2, 2], [0, 0.5, 0.5, 1, 1]];

    rankk = 3;

    rank();
    seihihan();

   
    if (t289==1) {
        text = "SP30の固定ダメージ\n";
        t289 = 0;
    }

    if (sagyona == 0 || kekka[8] == 1 || kekka[9] == 1 || kekka[10] == 1 || kekka[11] == 1 || kekka[8] == 4 || kekka[9] == 4 || kekka[10] == 4 || kekka[11] == 4) {
        sibou = 0;
    }

    if (sibou == 0) {
        text += "死亡した職員が調理され、部門の他の職員に振る舞われる。\nHPが（死亡職員ランク）d5回復\nSP20％の恐怖ダメージ\n";
        t289 = 1;
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
        text += "カウンターが減少"+T2+"\n";
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
            text += "カウンターが1増加"+T2+"\n";
            nefi += 1;
        }
    } else {
        if (sagyona == 0 || sagyona == 2 || sagyona == 3) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }

    if (nefi <= 0) {
        sibou = 0;
        text += "イカロスの火葬は"+Tdassou+"\nカウンター0→4\n";
        dassou = 1;
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
            text += "職員" + name + "の加護をひとつ受け取っ"+T3+"\n加護欄の右に並んでいるものから順に手動で消去する\n";
            kagokesi('299');
            
        }
    } else {
        if (kekka[12].length >= 1) {
            text += "職員" + name + "の加護をひとつ受け取っ"+T3+"\n加護欄の右に並んでいるものから順に手動で消去する\n";
            kagokesi('299');
            
        }
    }
    if (kekka[8] >= 6 || kekka[9] >= 6 || kekka[10] >= 6 || kekka[11] >= 6) {
        if (kurike == 1) {
            text += "ギフトと加護を入手\nその日一日他の者から加護を受け取れなくなる\n";
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;

    }

    if (sagyona == 2 && seihi == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;

    }

    if (nefi <= 0) {
        text += "朱殷は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
        daideme1 = 1;
        daideme2 = 80;
        daisu();
        text += daideme4 + "赤ダメージ\n";
        text += "部門内に青藍が収容されている場合、青藍も同時に脱走する。\n青藍は部門にいる職員を1人選び憑依し脱走、憑依された職員は死亡する。\n";
    }

}

function g303() {
    gene += "メルトフレンズ";
    sase = [[1, 1, 1, 0.5, 0.5], [1.5, 1, 1, 1, 1], [0, 0, 0, 0, 0], [2, 2, 1.5, 1.5, 1.5]];
    rankk = 5;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('303');
    kensaku2 = kekka[12].indexOf('3032');
    if (sagyona != 3 && kensaku2 == -1) {
        if (kensaku == -1) {
            text += "職員" + name + "は「仲間の証」を手に入れ"+T3+"\n自制+25、2時間毎にHPSP30回復、鎮圧時移動ターン+1\n";
            kagohuti = "303";
            kagohuyo();
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 1) {
                text += "『はい、これあげる！お友達の証だよ！』\n";
            }
            if (ransu == 2) {
                text += "『これ持ってって！きっと役立つから！』\n";
            }
            if (ransu == 3) {
                text += "『お話ありがと！』\n";
            }
        }
    }
    if (sagyona == 1 && seihi == 1) {
        if (kensaku != -1) {
            text += "「仲間の証」が解除され"+T3+"\n「303」を消去\n";
            kagokesi('303');
            ransu = Math.floor(Math.random() * 2 + 1);
            if (ransu == 1) {
                text += "『捨てちゃうの？』\n";
            }
            if (ransu == 2) {
                text += "『そんなに嫌だった？』\n";
            }
        }
        if (kensaku2 != -1) {
            text += "「感染者」が解除され"+T3+"\n「3032」を消去\n";
            kagokesi('3032');
            ransu = Math.floor(Math.random() * 2 + 1);
            if (ransu == 1) {
                text += "『捨てちゃうの？』\n";
            }
            if (ransu == 2) {
                text += "『そんなに嫌だった？』\n";
            }
        }
    }
    if (sagyona == 3 && seihi == 0) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }
    if (nefi <= 0) {
        text += "メルトフレンズは"+Tdassou+"\nIP-O-01-303-Aは「溶けた親友」、IP-O-01-303-Bは「溶けた友達」に変異する\nカウンター0→3\n";
        text += "『さあ、一緒に外へ行こう！友達作りに！』\n";
        dassou = 1;
        kari = 3;
    }
}

function g304() {
    gene += "機械兵器フルトゥナ";
    sase = [[1, 1, 1, 1.5, 1.5], [1, 1, 1, 0.5, 0.5], [2, 2, 2, 2, 2], [0, 0, 0.5, 0.5, 0.5]];
    rankk = 5;
    rank();
    seihihan();

    if (kekka[9] <= 2 || kekka[10] <= 2) {
        sibou = 0;
        text += "カウンターが減少"+T2+"\n次の作業時成功率1段階減少\n";
        nefi -= 1;
        t304 = 1;
    } else {
        text += "作業で死亡した場合カウンター減少し、次の作業時成功率1段階減少\n";
    }
    if (kekka[8] >= 4 || kekka[11] >= 4) {
        if (seihi == 0) {
            daideme1 = 5;
            daideme2 = 4;
            daisu();
            text += daideme4 + "赤ダメージ\n";
        }
    }
    if (nefi <= 0) {
        text += "機械兵器フルトゥナは"+Tdassou+"\nカウンター0→3\n";
        nefi = 3;
    }
}

function g305() {
    gene += "蛇蝎のヴィクター";
    sase = [[0, 0, 0, 0, 0], [2, 2, 1.5, 1.5, 1.5], [1, 1, 1, 1, 1], [1.5, 1.5, 1, 1, 1.5]];
    rankk = 5;
    rank();
    seihihan();

    if (sagyona == 0) {
        sibou = 0;
        text += "部門内職員に最大SP10％の恐怖ダメージ\n";
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
        t305 += 1;
    }
    ransu = Math.floor(Math.random() * 3 + 1);
    if (ransu == 1 && sagyona == 2 && seihi == 0) {
        sibou = 0;
        text += "部門内職員に最大SP10％の恐怖ダメージ\n";
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
        t305 += 1;
    }
    if (ransu == 1 && sagyona == 3 && seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "蛇蝎のヴィクターは"+Tdassou+"\n";
        nefi = 3;
        if (t305 >= 1) {
            text += t305 + "体の「蛇蝎の落とし子」を産み出"+T2+"\n";
        }
        text += "カウンター0→3\n";
        t305 = 0;
    }
}

function g308() {
    gene += "慌て者の天然魔女";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 0.5, 0.5], [1.5, 1.5, 2, 2, 2]];
    rankk = 3;
    rank();
    seihihan();

    ransu = Math.floor(Math.random() * 6 + 1);
    if (ransu == 1) {
        kensaku = kekka[12].indexOf('308');
        if (kensaku == -1) {
            text += "職員" + name + "は加護を受け取っ"+T3+"\n勇気+10\重複し"+T4+"\n";
            kagohuti = "308";
            kagohuyo();
        }
    }
    if (seihi == 1 && sagyona != 3) {
        text += "薬を飲んだ\n";
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu >= 5) {
            if (sagyona == 0) {
                text += "HP10回復\n";
            }
            if (sagyona == 1) {
                text += "SP10回復\n";
            }
            if (sagyona == 2) {
                text += "HPSP10回復\n";
            }
        } else {
            ransu = Math.floor(Math.random() * 4 + 1);
            if (ransu == 4) {
                daideme1 = 2;
                daideme2 = 6;
                daisu();
                text += daideme4 + "のダメージ\n";
            } else {
                text += "何も起きなかっ"+T3+"\n";
            }
        }
    }
}

function g310() {
    gene = "310 氷飴";
    peti = 0;

    if (sagyona == 4) {
        ransu = Math.floor(Math.random() * 100 + 1);
        if (ransu <= 10) {
            pani = 1;
            text += "▼職員" + name + "は徘徊性"+Tpani+"\n";

        } else {
            text += "▼職員" + name + "のSPが5回復"+T2+"\n";
        }


    } else {
        text += "ツール型の作業は「使用」か「返却」"+T1+"\n";

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

function g312() {
    gene = "312 焚け残り";
    sase = [[0, 0, 0, 1.5, 1.5], [1, 1, 1, 1, 1], [1.5, 1.5, 1.5, 1.5, 1.5], [1, 1, 0.5, 0.5, 0.5]];
    rankk = 5;
    rank();
    seihihan();

    if (seihi == 0 || kekka[8] <= 3) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "焚け残りは"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }

}

function g314() {
    gene = "314 金の太陽";
    peti = 0;

    if (sagyona == 4) {
        text += "金の太陽を装着"+T2+"\n10分毎にHPSP20回復、RED半減（元々半減だと免疫）\n銀の暴風のいる部門に立ち入ると脱走する（職員は死ぬ）\n";
        kagohuti = "314";
        kagohuyo();
    } else {
        if (sagyona == 5) {
            text += "返却"+T2+"\n加護欄から「314」を消去\n";
            kagokesi('314');
        }
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g315() {
    gene += "懐かしい友達";
    sase = [[0, 0, 0.5, 0.5, 0.5], [0, 0, 1, 1.5, 2], [0, 0, 0, 0, 0], [0, 0, 0.5, 0.5, 0.5]];

    rankk = 5;

    rank();
    seihihan();


    if (sagyona == 2) {
        t315 = 0;
    }

    if (seihi == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (nefi <= 0) {
        text += "職員はALEPH眷属「真神類」となっ"+T3+"\n「おめでとう」\nカウンター0→4\n";
        nefi = 4;
    }

    if (sagyona == 2 || kekka[7] <= 2) {
        ransu = Math.floor(Math.random() * 4 + 1);
        if (ransu >= 4) {
            text += "次の作業が懐かしい友達への愛着作業に固定され"+T3+"\n";
            t315 = 1;
        }
    }

    if (kekka[9] >= 4 && sagyona == 1 && seihi == 1) {
        text += "カウンターが全回復"+T2+"\nその日一日の作業成功率-10（重複しない）\n「……お見事。」\n";
        nefi = 4;
        kagohuti = "315";
        kagohuyo();
    }
    if (kekka[9] >= 4 && sagyona == 1 && seihi == 0) {
        text += "「…………」\n";
    }

    kensaku = kekka[12].indexOf('315');
    if (kensaku != -1 && seihi == 0) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu >= 3) {
            pani = 1;
            text += "▼職員" + name + "は"+Tpani+"\n「この現状を自分自身に問うてみるが良いさ！」\n";
        }
    }
    if (seihi == 0) {
        text += "「誰だってそういう時はあるよ。」\n";
    }
    if (seihi == 1) {
        text += "「ありがとう、来てくれるだけでも嬉しいよ。」\n";
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

function g318() {
    gene += "未来模倣体";
    peti = 0;

    if (sagyona == 4) {
        if (t318 == -1) {
            t318 = syid;
            t3182 = [name, kekka[8], kekka[9], kekka[10], kekka[11]];
            text += "職員" + name + "は囚われ"+T3+"\nもう一人使用することで解放される\n";
        } else {
            if (t318 != syid) {
                text += "職員" + t3182[0] + "は解放され"+T3+"\n職員" + name + "と職員" + t3182[0] + "の浸食度が1増加\n二人を模した子供のような実体が出現\n通常の職員同様に業務ができる\nパニックか死亡で消失\n同時に二人まで存在できる\n\nステータス\n";
                if (kekka[8] <= t3182[1]) {
                    kari = kekka[8];
                } else {
                    kari = t3182[1];
                }
                if (kekka[9] <= t3182[2]) {
                    kari2 = kekka[9];
                } else {
                    kari2 = t3182[2];
                }
                if (kekka[10] <= t3182[3]) {
                    kari3 = kekka[10];
                } else {
                    kari3 = t3182[3];
                }
                if (kekka[11] <= t3182[4]) {
                    kari4 = kekka[11];
                } else {
                    kari4 = t3182[4];
                }
                ransu = Math.floor(Math.random() * 2 + 1);
                if (ransu == 1) {
                    katit = "女性";
                } else {
                    katit = "男性";
                }
                text += "性別：" + katit + "\n勇気：" + kari + "\n慎重：" + kari2 + "\n自制：" + kari3 + "\n正義：" + kari4 + "\n";
                t318 = -1;
                t3182 = [];
            }
        }


    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g320() {
    gene = "320 逆さのアザゼル";
    sulo = 0;
    sase = [[2, 2, 2, 2, 2], [0, 0.5, 0.5, 1, 1.5], [0, 0, 0, 0, 0], [1.5, 1, 1, 0.5, 0]];
    rankk = 5;
    rank();



    seihihan();

    if (sagyona == 0) {
        text += "この作業は生贄作業に置き換わっています\n";
        peti = 0;
        keikenti = 0;
    }

    if (irai == 1) {
        irana2 = "生贄";
        text += "▽職員" + name + "は供物となり死亡する。蘇生時に追加で浸食ゲージ+1。\n任意の職員の浸食値を2減少させる。\n";
        text += "\n「ふふ、望みを叶えてあげる。対価はきみの命だよ」\n";
        sibou = 0;
    } else {
        if (sagyona == 1) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;

        } else {
            if (sagyona == 3) {
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;

            }
        }


        if (sagyona == 2) {
            text += "カウンターが回復"+T2+"\n";
            nefi = 2;
        }

    }


    if (kekka[7] >= 4) {
        if (sagyona == 2) {
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 2) {
                text += "「あはは！ぼくのことを愛してくれるんだね、じゃあ今すぐ死んでぼくのご飯になって、" + name + "？」\n";
                text += "▽職員" + name + "は地面に刺さっているナイフで自らを切り付け供物となっ"+T3+"\n部門内のカウンターが1回復する。\n";
                sibou = 0;
            }

        }
    }

    if (nefi <= 0) {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 1) {
            text += "「ぼくを哀れんでよ、可哀そうでしょう、ねえ」\n";
        } else {
            if (ransu == 2) {
                text += "「お腹が空いちゃった。ぼくお外に出てくるから代わりになっててよ」\n";
            }
        }
    }


    if (nefi <= 0) {
        text += "逆さのアザゼルは"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        sibou = 0;
        nefi = 2;
    }
}

function g321() {
    gene += "救いの赤件";
    sase = [[2, 2, 2, 2, 2], [1, 1, 1, 1, 1], [1, 0.5, 0.5, 0, 0], [1.5, 1.5, 1.5, 1.5, 1.5]];
    rankk = 3;
    rank();
    seihihan();

    if (irai == 1) {
        irana2 = "救済";
        ransu = Math.floor(Math.random() * 5 + 1);
        if (ransu == 1 || ransu == 3 || ransu == 5) {
            text += "職員" + name + "は加護を受け"+T3+"\n";
            kensaku = kekka[12].indexOf('321');
            if (kensaku == -1) {
                text += "作業成功率-10、HPSP+10\n";
                kagohuti = "321";
                kagohuyo();
            }
        } else {
            text += "職員" + name + "のHPが全回復"+T2+"\n";
        }
    } else {
        if (sagyona == 0) {
            text += "この作業は「救済」に置き換わって"+T5+"\n";
            peti = 0;
            keikenti = 0;
        } else {
        if (kekka[7] <= 3) {
            kensaku = kekka[12].indexOf('321');
            if (kensaku == -1) {
                text += "IP-T-03-718の作業成功率+10、IP-T-03-718の鎮圧に向かった際、IP-T-03-718からのダメージ3d6軽減\nIP-T-03-718以外の鎮圧に向かうと徘徊性パニック\n";
                kagohuti = "321";
                kagohuyo();
            }
        }
        }

        if (sagyona == 2 && kurike == 1) {
            kensaku718 = gnid.indexOf('718');
            if (kensaku718 != -1) {
                conc = con.map(function (value, index) { return value[0]; });
                conc2 = con.map(function (value, index) { return value[1]; });
                conc4 = conc.indexOf('718');
                kari = conc2[conc4];
                text += "\n悔いる青山羊のカウンターが1増加"+T2+"\n";
                if (kari <= 1) {
                    kari += 1;
                }
                con[conc4][1] = kari;
            }
        }
    }

}

function g323() {
    gene += "剣";
    sase = [[1, 1, 1, 0.5, 0.5], [1.5, 1.5, 2, 2, 2], [2, 2, 2, 2, 2], [1, 1, 0.5, 0.5, 0.5]];
    rankk = 5;
    rank();
    seihihan();
    pale = 1;

    if (seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            pani = 1;
            text += "▼職員" + name + "は"+Tpani+"\n";
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 3) {
                pani = 1;
                text += "職員" + name + "は【盲目状態】になっ"+T3+"\nステータス初期値になり、パニックのランクも1になる（1日限り）\n20時以降に盲目は治り、20時以降だった場合は盲目になら"+T4+"\n";
            }
        }
    }

    if (nefi <= 0) {
        text += "剣は"+Tdassou+"\nカウンター0→5\n";
        dassou = 1;
        nefi = 5;
    }

}

function g329() {
    gene = "329 過干渉";
    sase = [[1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1]];
    rankk = 1;
    rank();
    seihihan();

    if ((deme % 3) == 0) {
        pani = 1;
        text += "▼職員" + name + "は"+Tpani+"\n";
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
        text += "カウンターが減少"+T2+"\n最高に幸福な晩餐を！は変化"+T2+"\n";
        if (nefi == 1) {
            sibou = 0;
            text += "最高に幸福な晩餐を！は"+Tdassou+"\n";
            dassou = 1;
        }
        nefi -= 1;
        if (nefi <= 0) {
            text += "カウンター0→2\n";
            nefi = 2;
        }
    } else {
        if (nefi == 1) {
            text += "カウンターが増加"+T2+"\n元の姿に戻っ"+T3+"\n";
            nefi = 2;
        }

    }

}

function g333() {
    gene += "月夜の人形劇";
    sase = [[1.5, 1, 1, 1, 1], [0.5, 1, 1, 1.5, 1.5], [0.5, 0.5, 0.5, 0.5, 0.5], [2, 2, 2, 2, 2]];
    rankk = 3;
    rank();
    seihihan();

    if (nefi <= 0) {
        if (kekka[8] <= 2) {
            sibou = 0;
        }
        daideme1 = kekka[7];
        daideme2 = 2;
        daisu();
        text += "赤" + daideme4 + "ダメージ\n生存した場合はこの日勇気ランク+1カウンター0→3\n";
        nefi = 3;
    }
    if (irai == 1) {
        irana2 = "人形劇";
        text += "職員" + name + "のSP15回復\n";
        if (deme <= 5) {
            sibou = 0;
        }
    } else {
        if (sagyona == 2) {
            text += "この作業は「人形劇」に置き代わって"+T5+"\n特殊作業\n";
            peti = 0;
            keikenti = 0;
        }
        if (seihi == 0 || sagyona == 3) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
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
        dassou = 1;
        text += "▼職員" + name + "は魅了され刀を手にした（脱走）\n鎮圧完了時、HPSPが最大値の50％減少した状態で生還\nHPかSPが半分以下の状態で脱走していた場合は死亡する\n";
    }
    if (sagyona == 1 || seihi == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "部門内で最も自制の低い職員1名が魅了される\n収容室にたどり着くと脱走\n魅了処理参照\nカウンター0→2\n";
        nefi = 2;
    }
}

function g347() {
    gene += "生物を最も愛した心臓";
    sase = [[0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();

    if (sagyona == 3) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (sagyona == 1 || sagyona == 2) {
        if (seihi == 0) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }
    if (nefi <= 0) {
        text += "生物を最も愛した心臓は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
        kensaku = gnid.indexOf('891');
        if (kensaku != -1) {
            conc = con.map(function (value, index) { return value[0]; });
            conc2 = con.map(function (value, index) { return value[1]; });
            conc4 = conc.indexOf('891');
            kari = conc2[conc4];
            text += "\n生物を最も憎んだ心臓のカウンターが減少"+T2+"\n";
            kari -= 1;
            if (kari <= 0) {
                text += "生物を最も憎んだ心臓は"+Tdassou+"\nカウンター0→2\n";
                dassou = 1;
                kari = 2;
            }
            con[conc4][1] = kari;
        }
    }

}

function g352() {
    gene += "不思議なパイ職人";
    sase = [[0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
    rankk = 2;
    rank();
    seihihan();
    if (seihi == 1) {
        if (kekka[8] == 1 || kekka[8] == 5 || kekka[9] == 1 || kekka[9] == 5 || kekka[10] == 1 || kekka[10] == 5 || kekka[11] == 1 || kekka[11] == 5) {
            ransu = Math.floor(Math.random() * 6 + 1);
            text += "不思議なパイ職人はパイを投げてき"+T3+"\n";
            if (ransu <= 4) {
                text += "職員" + name + "はパイをキャッチ"+T2+"\n任意のタイミングで使用できる\n";
            } else {
                text += "職員" + name + "はパイをキャッチできなかっ"+T3+"\n5赤ダメージ\n";
                t352 = 1;
                ransu = Math.floor(Math.random() * 6 + 1);
                if (ransu >= 5) {
                    sibou = 0;
                }
            }
        } else {
            text += "職員" + name + "はパイを受け取っ"+T3+"\n";
        }
        if (t352 == 0) {
        if (sagyona == 0 ) {
            text += "ポテトミートパイ\nHP8回復\n";
        }
        if (sagyona == 1 ) {
            text += "ベジタブルチーズパイ\nSP8回復\n";
        }
        if (sagyona == 2 ) {
            text += "パンプキンアップルパイ\nHP5SP3回復\n";
        }
        if (sagyona == 3 ) {
            text += "トマトフィッシュパイ\nHP3SP5回復\n";
        }
        }

    }
    t352 = 0;
}

function g354() {
    gene = "354 賞金稼ぎの男";
    sulo = 60;
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
    rankk = 4;
    rank();

   

    seihihan();

    if (irai == 1) {
        irana2 = "依頼";
        text += "対価：対象の危険度×3のPiE-BOX、他部門の場合危険度×5\n指定した対象を全て撃破あるいは賞金稼ぎの男が倒れるまで続く\n鎮圧が20分以上経過、あるいは賞金稼ぎの男が倒れた場合カウンター減少\n0になると脱走\n";
    } else {
        if (sagyona==3) {
            text += "抑圧は依頼に置き換わって"+T5+"\n";
            peti = 0;
            keikenti = 0;
        } 
    }

}

function g359() {
    gene += "フォーティファイド";
    sase = [[0.5, 0.5, 0.5, 0, 0], [2, 1.5, 2, 1.5, 1.5], [1, 1, 1, 0.5, 0], [1, 1, 1, 1, 0.5]];
    rankk = 3;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('359');
    kensaku2 = kekka[12].indexOf('3592');
    kensaku3 = kekka[12].indexOf('3593');
    if (kensaku2 != -1) {
        text += "職員" + name + "は昏睡状態になっ"+T3+"\n20分行動不能、5分毎に10赤ダメージ\n20分で回復する（加護欄から3593を消す）\n";
        kagohuti = "3593";
        kagohuyo();
    } else {
        if (seihi == 0 || fanke == 1) {
            if (kensaku == -1) {
                text += "職員" + name + "は酩酊状態になっ"+T3+"\n作業成功率-5、SPで受けるダメージ-5\n20分で回復する（加護欄から359を消す）\n";
                kagohuti = "359";
                kagohuyo();
            }
        }
        if (seihi == 1) {
            if (kensaku != -1) {
                text += "職員" + name + "は泥酔状態になっ"+T3+"\n作業成功率-10、SPで受けるダメージ-10\n20分で回復する（加護欄から3592を消す）\n";
                kagohuti = "3592";
                kagohuyo();
            }
        }
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
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;

        } else {

            text += "職員" + name + "に付与されている共存可能な加護・マーキングが古い順で部門内の1人に伝染する。手動で加護欄に記入して下さい。\n";
        }
    }

    //ここまで//

    //愛着作業時の挙動//

    if (sagyona == 2) {
        text += "職員" + name + "に付与されている共存可能な加護・マーキングが古い順で部門内すべての職員に伝染する。手動で加護欄に記入して下さい。\nカウンターが回復"+T2+"\n";
        nefi += 1;
    }

    //ここまで//

    //クリファン時のカウンター処理など//

    if (kurike == 1 || fanke == 1) {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 2) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }



    if (nefi <= 0) {
        text += "伝染鳩は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
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
        text += "職員" + name + "はイチジクの実を食べ"+T3+"\n鎮圧時、与ダメージ+3\n一度に20以上のHPダメージを受けると死亡\n";
        if (kensaku == -1) {
            kagohuti = "361";
            kagohuyo();
        }
    }
    if (seihi == 0 && kensaku != -1) {
        text += "加護欄から「361」を消去\n";
        kagokesi('361');
    }

}

function g364() {
    gene += "言葉のあや";
    sase = [[1.5, 1.5, 1.5, 1.5, 1.5], [2, 2, 2, 2, 2], [0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5]];
    rankk = 2;
    rank();
    seihihan();


    if (sagyona == 2) {
        text += "職員" + name + "は手紙を読んだ\n「貴方のことが大好き！いつでも見守ってるからね！」\n";
    }
    if (sagyona == 3) {
        text += "職員" + name + "は手紙を読んだ\n「あんたなんか大嫌い！目に針でも刺して失血死すればいいのよ！」\n";
    }
    if (kekka[6] == "男" || kekka[6] == "男性") {
        text += "職員" + name + "は魅了され"+T3+"\n解除できなかった場合パニックに陥る\n";
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
            text += "▼職員" + name + "のSPが" + daideme4 + "回復"+T2+"\n";
        }

        if (kensaku4 != -1) {
            sibou = 0;
            text += "365系の加護を全て消去\n";
            kagokesi('365');
            kagokesi('3651');
            kagokesi('3652');
            kagokesi('3653');
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
            kagokesi('365');
        }
        if (kensaku2 != -1) {
            text += "加護欄から3651を消去\n";
            kagokesi('3651');
        }
        if (kensaku3 != -1) {
            text += "加護欄から3652を消去\n";
            kagokesi('3652');
        }
        if (kensaku4 != -1) {
            text += "加護欄から3653を消去\n";
            kagokesi('3653');
        }


    }



}

function g367() {
    gene += "朽チタ白百合";
    sase = [[2, 2, 1, 1, 1], [2, 2, 1.5, 1, 1], [1.5, 1.5, 1.5, 1.5, 1.5], [2, 2, 1.5, 1.5, 1]];
    rankk = 5;
    rank();
    seihihan();
    kari = kekka[10] * 4;
    if (deme <= kari) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (nefi <= 0) {
        text += "朽チタ白百合は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
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
            text += "加護を得"+T3+"\n1d10のダメージカット\n重複し"+T4+"\n一度に20以上のダメージを受けると眷属になる（ダメカ含まず）\n";
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
        if (nefi <= 0) {
            text += "恒は"+Tdassou+"\nカウンター0→2\n";
            dassou = 1;
            nefi = 2;
        }
    }

}

function g375() {
    gene += "自由気儘なメイド";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
    rankk = 2;
    rank();
    seihihan();

    if (kekka[7] == 1) {
        sibou = 0;
        t375 += 1;
        seihi = 3;
    } else {
        if (sagyona == 0) {
            text += "自由気儘なメイドは職員" + name + "に手料理奉仕を行っ"+T3+"\n";
        }
        if (sagyona == 1) {
            text += "自由気儘なメイドは職員" + name + "に散髪奉仕を行っ"+T3+"\n";
            ransu = Math.floor(Math.random() * 6 + 1);
            if ((ransu % 2) != 0) {
                text += "▼職員" + name + "はハゲ"+T3+"\n精神の最大値-5\n";
            }
        }
        if (sagyona == 2) {
            text += "自由気儘なメイドは職員" + name + "に娯楽奉仕を行っ"+T3+"\n";
            sibou = 0;
        }
        if (sagyona == 3) {
            text += "自由気儘なメイドは職員" + name + "にマッサージ奉仕を行っ"+T3+"\n";
        }
        if (seihi == 0) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }
    if (nefi <= 0) {
        text += "自由気儘なメイドは"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }
    peti += t375;
}


function g378() {
    gene += "優雅灯";
    sase = [[0, 0, 0, 0.5, 0.5], [1.5, 1.5, 1.5, 2, 2], [0, 0.5, 0.5, 1, 1.5], [0.5, 0.5, 1, 1, 1]];
    rankk = 4;
    rank();
    seihihan();
    if (kekka[9] <= 3 || kekka[10] <= 3) {
        sibou = 0;
        seihi = 0;
    }
    if (seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "優雅灯は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
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
        text += "職員" + name + "は加護を得"+T3+"\nHP+10\n";
        kagohuti = "385";
        kagohuyo();

    }
    if (sagyona == 2) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (kekka[7] <= 2 && seihi == 0) {
        sibou = 1;
    }
    if (nefi <= 0) {
        text += "カテドラルの後継者は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }
}

function g390() {
    gene += "蓬莱の兎";
    sase = [[1, 1, 0.5, 0, 0], [0.5, 0.5, 0, 0, 0], [2, 2, 2, 2, 2], [1, 1, 1, 0.5, 0.5]];
    rankk = 5;
    rank();
    seihihan();
    pale = 1;
    if (sagyona == 2) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (kekka[7] <= 4 && sagyona == 1) {
        kensaku = kekka[12].indexOf('390');
        if (kensaku == -1) {
            text += "職員" + name + "に「月の魅惑」が付与され"+T3+"\n自制慎重+20\n";
            kagohuti = "390";
            kagohuyo();
        }
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (sagyona == 0) {
        text += "職員" + name + "は薬を飲まされ"+T3+"\n";
        if (kekka[7] <= 4) {
            sibou = 0;
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        } else {
            ransu = Math.floor(Math.random() * 10 + 1);
            if (ransu == 1) {
                text += "浸食+1\n";
            }
        }
    }
    if (nefi <= 0) {
        text += "蓬莱の兎は"+Tdassou+"\nカウンター0→3\n";
        nefi = 3;
        dassou = 1;
        kensaku = gnid.indexOf('406');
        if (kensaku != -1) {
            text += "涅槃、雪降りては"+Tdassou+"\n";
        }
    }
}

function g396() {
    gene += "はろー！あいりす！";
    sase = [[0.5, 0.5, 0.5, 0.5, 1], [1.5, 1.5, 1, 1, 1], [1.5, 1.5, 1.5, 1.5, 0], [0.5, 0.5, 0.5, 0.5, 2]];
    rankk = 3;
    rank();
    seiti = 15;
    seihihan();

    if (seihi == 1) {
        ransu = Math.floor(Math.random() * 5 + 1);
        if (ransu == 1) {
                   ransu = Math.floor(Math.random() * 50 + 1);
        kari = ransu;
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 1) {
            katit = "HP";
        } else {
            katit = "SP";
        }
        text += "部門内の職員全員の" + katit + kari + "回復\n";
        } 

    }
    if (kekka[7] <= 4) {
        ransu = Math.floor(Math.random() * 5 + 1);
        if (ransu == 5) {
            text += "はろー！あいりす！は職員" + name + "を取り込んで"+Tdassou+"\n";
            dassou = 1;
        }
    }
    if (nefi <= 0) {
        text += "はろー！あいりす！は"+Tdassou+"\n";
        dassou = 1;
        nefi = 1;
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
        text += "▼職員" + name + "は自殺性"+Tpani+"\n制限時間10分\n";
        if (kekka[10] <= 3) {
            pani = 1;
            text += "カウンター減少\n";
            nefi -= 1;

        }
    } else {
        if (kekka[10] <= 3) {
            pani = 1;
            text += "▼職員" + name + "は"+Tpani+"\nカウンター減少\n";
            nefi -= 1;

        }
    }
    if (sagyona == 2) {
        if (kensaku == -1) {
            kagohuti = "403";
            kagohuyo();
        } else {
            text += "カウンター減少\n";
            nefi -= 1;
        }
    } else {
        if (kensaku != -1) {
            text += "作業職員の加護欄から403を消去\n";
            kagokesi('403');
        }
    }

    if (nefi <= 0) {
        text += "誘いの鏡は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
    }

}

function g404() {
    gene = "404 規制 -404-";
    sase = [[1.5, 2, 0.5, 0, 1], [0.5, 1, 0, 1.5, 2], [2, 0, 1, 0.5, 1.5], [0, 1.5, 2, 1, 0.5]];
    rankk = 5;
    rank();
    seihihan();
    text += "職員" + name + "は絶望状態になっ"+T3+"\n最大SP70％分のSPダメージ\nこのダメージは軽減でき"+T4+"\nこの作業中にパニックになった場合カウンター減少\n";
}

function g406() {
    gene += "涅槃、雪降りて";
    sase = [[0, 0, 0, 0, 0], [0, 2, 2, 2, 2], [0, 2, 2, 2, 2], [0, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();
    if (sagyona == 0 && seihi == 1) {
        ransu = Math.floor(Math.random() * 6 + 1);
        text += "職員" + name + "のHP" + ransu + "回復\n";
    }
    if (sagyona == 3 && seihi == 1) {
        kensaku = kekka[12].indexOf('406');
        if (kensaku == -1) {
            text += "職員" + name + "は「雪の加護」を得"+T3+"\n勇気+25（重複しない）\n";
            kagohuti = "406";
            kagohuyo();
        }
    }
}

function g408() {
    gene = "408 三つ指揃えて絞首台";
    peti = 0;

    if (sagyona == 4) {
        sykasan(408, 0, 1);
        sykensaku(408);
        sibou = 0;
        ransu = Math.floor(Math.random() * 3 + 1);
        text += "職員" + name + "の浸食値が" + ransu + "減少"+T2+"\n";
        if (sykekka == 3) {
            text += "▼職員" + name + "を除く部門内の全職員が自殺性"+Tpani+"\n";
            sykasan(408, 3, 0);
        }
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g409() {
    gene = "409 青藍";
    sulo = 102;
    sase = [[2, 1.5, 1, 1, 1], [1, 0.5, 1, 0.5, 0], [1, 1, 1.5, 2, 2], [1, 0.5, 0.5, 1,1]];

    rankk = 5;

    rank();
    seihihan();

    if (sagyona == 1 && seihi == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;

    }

    if (sagyona == 3 && seihi == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;

    }

    if (nefi <= 0) {
        text += "青藍は職員に憑依した。青藍は脱走した。同部門に朱殷が収容されている場合、朱殷も誘発"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
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
    if (nefi <= 0) {
        sibou = 0;
        text += "海月少女は"+Tdassou+"\nカウンター0→1\n";
        dassou = 1;
        nefi = 1;
    }
    if (sagyona == 0) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 2) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    } else {
        if (kekka[8] >= 5 || kekka[9] <= 2) {
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 2) {
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
        }
    }

}

function g415() {
    gene = "415 ガラスの立体ぬりえ";
    peti = 0;

    if (sagyona == 4) {
        sykasan(415, 0, 1);
        sykensaku(415);
        if (sykekka == 1) {
            text += "職員" + name + "は正義+30\n一日続く\n";
        }

        if (sykekka == 2) {
            text += "職員" + name + "は正義EX\n一日続く\n";
        }
        if (sykekka == 3 || sykekka == 6) {
            text += "職員" + name + "は"+Tpani+"\n攻撃してきた職員に対しペンキを降りまく\n1d2を降り1が出ると相手の浸食+1\n";
            pani == 1;
            if (sykekka == 6) {
                sykasan(415, 3, 3);
            }
        }
        if (sykekka == 4) {
            text += "職員" + name + "は正義EX\n一日続く\n";
        }
        if (sykekka == 5) {
            text += "職員" + name + "は正義EX\n一日続く\n";
        }
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g417() {
    gene += "茨裂く少女";
    sase = [[2, 2, 2, 2, 1.5], [0, 0, 0, 0, 0.5], [0.5, 1, 1, 1, 1], [1.5, 1.5, 1, 1, 2]];
    rankk = 4;
    rank();
    seihihan();

    if (irai == 1) {
        irana2 = "救出";
        if (kekka[11] >= 5) {
            text += "救出成功\n囚われていた職員はギフトを入手\n";
            kurike = 0;
            fanke = 0;
        } else {
            text += "茨裂く少女は囚われていた職員を抱えたまま"+Tdassou+"\n";
        }
    } else {
        if (seihi == 0 && sagyona == 0) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
        if (nefi <= 0) {
            text += "職員" + name + "は囚われ"+T3+"\n特殊作業で救出可能\nカウンター0→2\n";
            nefi = 2;
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
        text += "HPSP15回復\n";

        if (kensaku4 != -1) {
            sibou = 0;
            text += "加護欄から422系を消去\n";
        } else {
            if (kensaku3 != -1) {
                if (ransu == 1) {
                    text += "この職員の次の作業は明るいだけの照明になる\n";
                }
                kagohuti = "4223";
                kagohuyo();
            } else {
                if (kensaku2 != -1) {
                    if (ransu == 1) {
                        text += "この職員の次の作業は明るいだけの照明になる\n";
                    }
                    kagohuti = "4222";
                    kagohuyo();
                } else {
                    if (kensaku == -1) {
                        if (ransu == 1) {
                            text += "この職員の次の作業は明るいだけの照明になる\n";
                        }
                        kagohuti = "422";
                        kagohuyo();
                    } else {
                        if (ransu == 1) {
                            text += "この職員の次の作業は明るいだけの照明になる\n";
                        }
                        kagohuti = "4221";
                        kagohuyo();
                    }

                }

            }
        }
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
    }
}

function g423() {
    gene += "(株)プシュケーエネルゲイア";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 0.5, 0.5], [0.5, 0.5, 0, 0, 0], [0.5, 0.5, 1, 1, 1]];
    rankk = 1;
    rank();
    seihihan();

    kari = kekka[10] * 2;
    if (deme <= kari) {
        text += Tgift+"\n";
    }
    if (kurike == 1) {
        kuritxt = Tcuri+"\n";
        sibou = 0;
    }
}

function g425() {
    gene += "想い馳せる太陽";
    sase = [[0.5, 0.5, 0.5, 0.5, 0.5], [0, 0, 0, 0, 0], [1.5, 1.5, 1.5, 1.5, 1.5], [2, 1.5, 0, 0, 0]];
    rankk = 2;
    rank();
    seihihan();
    nemax = 3;
    if (sagyona == 1) {
        text += "カウンターが1増加"+T2+"\n";
        nefi += 1;
    } else {
        if (seihi == 0 || sagyona == 3) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }
    if (seihi == 1 && kekka[7] <= 2) {
        kensaku = kekka[12].indexOf('425');
        if (kensaku == -1) {
            text += "職員" + name + "の作業成功率+3\n重複しない、1日限り\n死亡時消失\n";
            kagohuti = "425";
            kagohuyo();
        }
    }
    if (nefi <= 0) {
        text += "想い馳せる太陽は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }
}

function g427() {
    gene += "讃えられるは偉大なる宝飾の王";
    sase = [[1, 1, 1, 1, 1], [0.5, 0.5, 0.5, 0.5, 0], [0.5, 0.5, 0.5, 0.5, 0], [1, 1, 1, 1, 1]];
    rankk = 1;
    rank();
    seihihan();
    if (t427 == syid) {
        kensaku = kekka[12].indexOf('427');
        if (kensaku == -1) {
            text += "職員は偽物になっ"+T3+"\nステータスに+10（重複しない）\n死亡しても1日が終わるまで継続\n業務終了時にエンサイクロペディアの能力詳細ページを開く\n";
            kagohuti = "427";
            kagohuyo();
        }
    }
    t427 = syid;
}

function g429() {
    gene += "与奪する地球";
    sase = [[2, 0, 0, 0, 0], [0, 2, 2, 2, 2], [2, 1, 1, 1, 1], [2, 1, 1, 1, 1]];
    rankk = 1;
    rank();
    seihihan();

    if (kurike == 1) {
        text += "職員" + name + "の装備しているギフト全ての効果が2倍になる（マイナスも2倍になる）\nただし倍化するのはステータス変動に限る\n";
    }
    if (fanke == 1) {
        text += "職員" + name + "の保有ずる全てのギフトが消滅"+T2+"\n";
    }

}

function g430() {
    gene += "クラブ・ラヴ・クラブ";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [2, 2, 2, 2, 2]];
    rankk = 3;
    rank();
    seihihan();
    gift = 1;

    if (sagyona == 3) {
        sibou = 0;
    }
    if (sagyona == 2) {
        sykasan(430, 0, 1);
        sykensaku(430);
        if (sykekka >= 2) {
            text += "職員" + name + "は魅了され"+T3+"\n解除に失敗すると死亡\n死亡した際の蘇生時特殊ギフト入手\n";
            sykasan(430, 3, 0);
        }
    }

}

function g432() {
    gene = "432 温もりのこころ";
    peti = 0;

    if (sagyona == 4) {
        text += "勇気と正義が２倍\n自制慎重が勇気正義より低いなら勇気正義+30\nこのツールは任意のタイミングで返却が可能\n";

    } else {
        if (sagyona == 5) {
            text += "作業または鎮圧をしていない場合自殺性以外のパニック\n";

        } else {
            text += "ツール型の作業は「使用」か「返却」"+T1+"\n";
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
        text += "職員" + name + "のSPが全回復"+T2+"\n1時間行動不能\n";
    }
    if (seihi == 1) {
        text += "職員" + name + "は「懐かしい温もり」を受け取っ"+T3+"\nダメージカット10\n死亡、パニック時に暖かい温もりを持つ職員全員が「火柱」となる\n";
        kagohuti = "437";
        kagohuyo();
    }

}

function g439() {
    gene += "「婆さんや、飯はまだかのう……」";
    sase = [[0, 0, 0, 0, 0], [0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5], [1.5, 1.5, 1.5, 1.5, 1.5]];
    rankk = 1;
    rank();
    seihihan();

    if (t439 == 1 && sagyona != 0) {
        text += "職員は「婆さんや、飯はまだかのう……」に捕らわれ"+T3+"\n30分間「婆さんや、飯はまだかのう……」は作業不可能になる\n通常作業での選出なし、ネフィリム暴走は起こる\n「婆さんや、飯はまだかのう……」は昔話をしている。\n";
        nefi -= 1;
    }
    if (seihi == 0) {
        text += "「婆さんや、飯はまだかのう……」は空腹を訴えている。\n";
        t439 = 1;
    }
    if (nefi <= 0) {
        text += "直前に作業をした職員が"+Tpani+"\n他職員のSP25回復\nカウンター0→1\n";
        nefi = 1;
    }
}

function g440() {
    gene += "悠然たる皇帝";
    sase = [[0, 0.5, 1, 1, 2], [0, 0.5, 1, 1, 2], [0, 1, 1, 1, 2], [0, 0.5, 2, 2, 2]];
    rankk = 4;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('440');
    if (kekka[7] <= 4 && seihi == 1 && kensaku == -1) {
        if (sagyona == 0) {
            text += "職員" + name + "は加護を受け、臣下となっ"+T3+"\n勇気+20\n";
            kagohuti = "440";
            kagohuyo();
        }
        if (sagyona == 1) {
            text += "職員" + name + "は加護を受け、臣下となっ"+T3+"\n慎重+20\n";
            kagohuti = "440";
            kagohuyo();
        }
    }
    if (nefi <= 0) {
        text += "悠然たる皇帝は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
    }

}

function g444() {
    gene += "巡り廻って灰になる";
    sase = [[2, 1.5, 1, 1, 1], [2, 1.5, 1, 1, 1], [2, 1.5, 1, 1, 1], [2, 1.5, 1, 1, 1]];
    rankk = 5;
    rank();
    seihihan();
    pale = 1;

    kensaku = kekka[12].indexOf('440');
    if (kensaku != -1) {
        sibou = 0;
        text += "巡り廻って灰になるは"+Tdassou+"\n";
        dassou = 1;
    } else {
    if (kurike == 1) {
        text += "カウンターが全回復"+T2+"\n";
        nefi = 2;
    } else {
        if (fanke == 1) {
            text += "カウンターが即座に0になっ"+T3+"\n";
            nefi = 0;
        } else {
            if (seihi == 1) {
                text += "カウンターが1増加"+T2+"\n";
                nefi += 1;
            } else {
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
        }
    }

    }

    if (nefi <= 0) {
        text += "巡り廻って灰になるは"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
    }

}

function g450() {
    gene += "大きなハートの石";
    sase = [[0, 0, 0, 0, 0], [0.5, 0.5, 0.5, 0, 0], [1, 1, 1, 1, 0.5], [1, 1.5, 1.5, 2, 2]];
    rankk = 2;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('450');
    if (kensaku == -1) {
        text += "職員" + name + "は紙を受け取っ"+T3+"\n";
        kagohuti = "450";
        kagohuyo();
    } else {
        if (kekka[11] >= 4) {
            if (sagyona == 0 || sagyona == 1) {
                text += "職員" + name + "のSPが10回復"+T2+"\n";
            }
        } else {
            if (sagyona == 0 || sagyona == 1) {
                text += "▼職員" + name + "は殺人性"+Tpani+"\n";
            }
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
        text += "赤の姿\n";
    } else {
        if (ransu == 2) {
            text += "白の姿\n";
        } else {
            if (ransu == 3) {
                text += "黒の姿\n";
            } else {
                if (ransu == 4) {
                    text += "青の姿\n";
                }
            }
        }
    }
    if (kekka[9] <= 3) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (sagyona == 1 && seihi == 1) {
        text += "加護を受け取っ"+T3+"\n鎮圧時、最初の1度だけダメージを0にする\n再度洞察をするか死亡するまで加護は残る\nこの職員の加護欄に「451」を記入\n";
        kensaku = kekka[12].indexOf('451');
        if (kensaku == -1) {
            kagohuti = "451";
            kagohuyo();
        }
    }

    if (nefi <= 0) {
        text += "季節の時の王は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
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

function g452() {
    gene = "452 イエスマン";
    sase = [[0, 0, 0.5, 0.5, 0], [0, 0, 0.5, 0.5, 0.5], [0, 0, 0, 0, 0], [0.5, 0.5, 1, 1, 0.5]];
    rankk = 4;
    rank();
    seihihan();
    nemax = 3;
    kensaku2 = kekka[12].indexOf('453');
    if (kensaku2 != -1) {
        text += "職員" + name + "の「否定の呪い」が消え"+T3+"\n加護欄から「453」を消去\nカウンターが1増加"+T2+"\n";
        kagokesi('453');
        nefi += 1;
    }

    kensaku = kekka[12].indexOf('452');
    if (kensaku == -1 && seihi == 1) {
        text += "職員" + name + "は「肯定の加護」を受け取っ"+T3+"\nその日1日全ステ+20\n";
        kagohuti = "452";
        kagohuyo();
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (sagyona == 2) {

        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (seihi == 0) {
        text += "カウンターが1増加"+T2+"\n";
        nefi += 1;
    }
    if (nefi <= 0) {
        text += "イエスマンは"+Tdassou+"\nカウンター0→3\n「肯定の加護」を持つ職員全員がパニック\nパニックの種類に応じて強化される（部門ダメージは発生しない）\n殺人性→与ダメ2倍\n自殺性→制限時間10分、恐怖ダメージ1ランク上昇\n徘徊性→白ダメージ2倍、10分で移動\nｼｬｯﾄﾀﾞｳﾝ→1度の脱走数2体\n";
        nefi = 3;
        dassou = 1;
    }
}

function g453() {
    gene = "453 ノーマン";
    sase = [[2, 2, 1.5, 1.5, 1.5], [2, 2, 1.5, 1.5, 2], [1.5, 1.5, 1, 1, 1.5], [2, 2, 2, 2, 2]];
    rankk = 4;
    rank();
    seihihan();
    nemax = 3;
    kensaku2 = kekka[12].indexOf('452');
    if (kensaku2 != -1) {
        text += "職員" + name + "の「肯定の加護」が消え"+T3+"\n加護欄から「452」を消去\nカウンターが1増加"+T2+"\n";
        kagokesi('452');
        nefi += 1;
    }
    kensaku = kekka[12].indexOf('453');
    if (seihi == 0) {
        text += "職員" + name + "は「否定の呪い」を受け取っ"+T3+"\nその日1日全ステ-10（重複する、蘇生しても残る）\n";
        if (kensaku == -1) {
            kagohuti = "453";
            kagohuyo();
        }
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (sagyona == 3) {

        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (seihi == 1) {
        text += "カウンターが1増加"+T2+"\n";
        nefi += 1;
        if (kensaku != -1) {
            sibou = 0;
        }
    }
    if (nefi <= 0) {
        text += "ノーマンは"+Tdassou+"\nカウンター0→3\n「否定の呪い」を持つ職員全員の全ステ-20\n1日の終わりまで継続\n";
        nefi = 3;
        dassou = 1;
    }
}

function g460() {
    gene += "朗笑する海王星";
    sase = [[1.5, 1, 0.5, 1, 1.5], [1, 1, 1, 0.5, 0.5], [0.5, 1, 1, 0.5, 0.5], [0.5, 1, 1.5, 2, 2]];

    rankk = 3;

    rank();
    seihihan();

 
    if (sagyona == 1) {
        t460 = 0;
    } else {
        t460 += 1;
    }
    
    if (t460>=3 && sagyona != 1) {
        sibou = 0;
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
        t460 = 0;
    }
    if (kekka[9] <= 2 && seihi == 0) {
        sibou = 0;
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (nefi <= 0) {
        text += "朗笑する海王星は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
        kensaku = gnid.indexOf('268');
        if (kensaku != -1) {
            text += "寒慄する天王星は"+Tdassou+"\n";
        }
        kensaku = gnid.indexOf('218');
        if (kensaku != -1) {
            text += "晦冥する冥王星は"+Tdassou+"\n";
        }
    }
}

function g462() {
    gene += "真っ赤な林檎";
    sase = [[2, 2, 2, 1.5, 1.5], [1, 1.5, 2, 2, 2], [2, 1.5, 1.5, 1, 1], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();

    sykasan(462, 3, 0);

    if (kekka[8] <= 3 && t462 == 1) {
        text += "▼職員" + name + "は"+Tpani+"\n";
        pani = 1;
        t462 = 0;
    } else {
        if (t462 == 1) {
            t462 = 0;
            daideme1 = 5;
            daideme2 = 6;
            daisu();
            text += daideme4 + "SPダメージ\n";

        }

        if (kekka[6] == "男" || kekka[6] == "男性") {
        } else {
            if (kekka[6] == "女" || kekka[6] == "女性") {
            } else {
                ransu = Math.floor(Math.random() * 2 + 1);
            }
        }

        if (kekka[6] == "男" || kekka[6] == "男性" || ransu == 1) {
            kagoche("462", 1);
            if (kensakuC == -1) {
                kensaku = kekka[12].indexOf('462');
                if (kensaku == -1) {
                    text += "職員" + name + "は「林檎の誓い」を受け取っ"+T3+"\n慎重自制+25、作業成否率+5\n死亡・パニックで解除\n";
                    kagohuti = "462";
                    kagohuyo();
                }
            }
        }

        if (kekka[6] == "女" || kekka[6] == "女性" || ransu == 2 || seihi == 0 || sagyona == 3) {
            sibou = 0;
            t462 = 1;
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
        text += "蛹の紳士は"+Tdassou+"\n";
        dassou = 1;
    }

}

function g467() {
    gene += "虚空";
    sase = [[1.5, 1.5, 1.5, 1, 1], [0, 0, 0, 0, 0], [2, 1.5, 1, 0.5, 0], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();
    nemax = 4;

    if (fanke == 1) {
        sibou = 0;
    }
    if (sagyona == 1) {
        text += "カウンターが1増加"+T2+"\n";
        nefi += 1;
        kensaku = kekka[12].indexOf('467');
        if (kensaku == -1) {
            text += "職員" + name + "は「虚空の瞳」を獲得"+T2+"\n最大SPが0になると徘徊性パニックに陥り、死亡でしか鎮圧でき"+T4+"\n";
            kagohuti = "467";
            kagohuyo();
        }
    }
    if (seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "部門内全職員の最大SPが52減少\nカウンター0→4\n";
        nefi = 4;
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

function g480() {
    gene += "大衆の血を浴びる者";
    sase = [[1.5, 1.5, 1, 0.5, 0], [1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [2, 2, 1, 1, 1.5]];
    rankk = 5;
    rank();
    seihihan();

    if (sagyona == 0 && seihi == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (kurike == 1) {
        text += "部門内のランダムな職員が魅了され"+T3+"\n解除できなかった場合死亡する\n";
    }
    if (nefi <= 0) {
        text += "大衆の血を浴びる者は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }
}

function g486() {
    gene = "486 熾展翅";
    sase = [[2, 1.5, 1, 0.5, 0], [0, 0.5, 1, 1.5, 2], [1, 1, 1, 1, 1], [2, 0, 1, 0.5, 1.5]];
    rankk = 5;
    rank();
    seihihan();


    if (sagyona == 2 || seihi == 0) {
        pani = 1;
        text += "▼職員" + name + "は"+Tpani+"\n";
    }

}

function g491() {
    gene += "蟻の葬列";
    sase = [[2, 2, 2, 2, 2], [0.5, 0.5, 0.5, 1, 1], [0, 0, 0.5, 0.5, 0.5], [1, 1, 1, 1, 1]];
    rankk = 4;
    rank();
    seihihan();

    kari = daideme1 = 4;
    daideme2 = 4;
    daisu();
    kari2 = daideme4 - 1;

    if (irai == 1) {
        irana2 = "追悼";

        if (t491 == 0) {
            text += "▼職員" + name + "は遺影に向かって手を合わせ"+T3+"\n蟻の葬列のカウンターが1回復"+T2+"\n部門内職員のSPが15回復する\n";
            nefi += 1;
            t491 = 1;
        } else {
            if (t491 == 1) {
                text += "▼職員" + name + "は死者の葬列を見"+T3+"\n";
                text += "▼職員" + name + "は遺影に向かって手を合わせ"+T3+"\n蟻の葬列のカウンターが1回復"+T2+"\n部門内職員のSPが15回復する\n";
                nefi += 1;
                t491 = 2;
            } else {
                pani = 1;
                text += "▼職員" + name + "は死者の葬列に加わりたい衝動に駆られる。\n";
                text += "▼職員" + name + "は特殊な自殺性パニックに陥った。制限時間は" + kari2 + "分。\n";
                text += "蟻の葬列のカウンターが1回復した。n部門内職員のSPが15回復する\n";
                nefi += 1;
                t491 = 0;
            }
        }
    }


    if (sagyona == 2) {
        pani = 1;
        text += "▼職員" + name + "は死者の葬列に加わりたい衝動に駆られる。\n";
        text += "▼職員" + name + "は特殊な自殺性パニックに陥った。制限時間は" + kari2 + "分。\n";
    } else {
        if (sagyona == 0) {
            text += "本能作業は追悼作業に置き換わっています。\n";

        } else {

            if ((deme % 4) == 0) {
                text += "▼職員" + name + "の次回の作業が追悼作業に固定される。\n";
            }
        }
    }


}

function g499() {
    gene += "魅惑のチーズ";
    sase = [[0, 1, 1, 1, 1], [0.5, 0.5, 1, 1.5, 1.5], [0, 0, 0, 0, 0], [2, 2, 2, 2, 2]];
    rankk = 4;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('499');
    if (kensaku == -1) {
        text += "職員" + name + "はチーズの加護を受け"+T3+"\n本能・愛着成功率+5\n90分経過、パニック、死亡で解除される\n";
        kagohuti = "499";
        kagohuyo();
    }
}

function g502() {
    gene += "骨羽根の天使";
    sase = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
    rankk = 1;
    rank();
    seihihan();
    if (sagyona == 0 && seihi == 1) {
        ransu = Math.floor(Math.random() * 6 + 1);
        text += "職員" + name + "のHPが" + ransu + "回復"+T2+"\n";
    }
    if (kurike == 1) {
        text += "職員" + name + "は加護を貰っ"+T3+"\n任意のステータス+5\n2分後に消失\n";
        kensaku = kekka[12].indexOf('502');
        if (kensaku == -1) {
            kagohuti = "502";
            kagohuyo();
        }
    }
}

function g514() {
    gene += "「中庸」";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
    rankk = 4;
    rank();
    seihihan();

    if (irai == 1) {
        irana2 = "調合";
        //加護欄に特定妨害加護があるかの判定(たすけてください)
        //該当の加護(target内番号加護)があったらtrue,なかったらfalseを返してほしいです。
        target = ["015", "018", "036", "106", "135", "213", "214", "303", "361", "369", "499", "5711", "5712", "5713", "5714", "696", "708", "874", "997"];
        caution = kekka[12].some(value => value = target);
        console.log(caution);

        //調合失敗の時の処理
        if (caution == true) {
            //ここもこれでしっかり分かれるのか怪しいです


            //015
            kensaku = kekka[12].indexOf('015');
            if (kensaku != -1) {
                text += "液体がうごめいた？！\n";
            }
            //018
            kensaku = kekka[12].indexOf('018');
            if (kensaku != -1) {
                text += "胞子が入ってしまっ"+T3+"\n";
            }
            //036
            kensaku = kekka[12].indexOf('036');
            if (kensaku != -1) {
                text += "カップが花だらけだ\n";
            }
            //106
            kensaku = kekka[12].indexOf('106');
            if (kensaku != -1) {
                text += "何かが浮いてしまっている……。\n";
            }
            //135
            kensaku = kekka[12].indexOf('135');
            if (kensaku != -1) {
                text += "容器ごと錆が広がっている……。\n";
            }
            //213
            kensaku = kekka[12].indexOf('213');
            if (kensaku != -1) {
                text += "液体も何もかも、手が震えてこぼしてしまっ"+T3+"\n";
            }
            //214
            kensaku = kekka[12].indexOf('214');
            if (kensaku != -1) {
                text += "全部がチョコレートになっ"+T3+"\n";
            }
            //303
            kensaku = kekka[12].indexOf('303');
            if (kensaku != -1) {
                text += "……なんか青く光っているような？\n";
            }
            //361
            kensaku = kekka[12].indexOf('361');
            if (kensaku != -1) {
                text += "酸っぱいにおいがたちこめてきた……。\n";
            }
            //369
            kensaku = kekka[12].indexOf('369');
            if (kensaku != -1) {
                text += "……液体の上に白い膜が…\n";
            }
            //499
            kensaku = kekka[12].indexOf('499');
            if (kensaku != -1) {
                text += "全部チーズになってしまっ"+T3+"\n";
            }
            //571
            kensaku = kekka[12].indexOf('5711');
            if (kensaku != -1) {
                text += "インクも交じって何が何だかわからない。\n";
            }
            kensaku = kekka[12].indexOf('5712');
            if (kensaku != -1) {
                text += "インクも交じって何が何だかわからない。\n";
            }
            kensaku = kekka[12].indexOf('5713');
            if (kensaku != -1) {
                text += "インクも交じって何が何だかわからない。\n";
            }
            kensaku = kekka[12].indexOf('5714');
            if (kensaku != -1) {
                text += "インクも交じって何が何だかわからない。\n";
            }
            //696
            kensaku = kekka[12].indexOf('696');
            if (kensaku != -1) {
                text += "いつの間に血液が……。\n";
            }
            //708
            kensaku = kekka[12].indexOf('708');
            if (kensaku != -1) {
                text += "液体が全て濁り始め"+T3+"\n";
            }
            //874
            kensaku = kekka[12].indexOf('874');
            if (kensaku != -1) {
                text += "全部が砂糖になった！\n";
            }
            //997
            kensaku = kekka[12].indexOf('997');
            if (kensaku != -1) {
                text += "たくさんの粉が入った気がする……。\n";
            }

            text += "調合失敗\n";
            text += "加護514のものを手動で消去してください。\n";
            seihi = 0;
            //ここまで自動失敗。

        } else {
            //調合判定

            //エーテル
            kensaku = kekka[12].indexOf('5146');
            if (kensaku != -1) {
                kensaku = kekka[12].indexOf('5147');
                if (kensaku != -1) {
                    kensaku = kekka[12].indexOf('5145');
                    if (kensaku != -1) {
                        //ここから処理
                        text += "あなたの目の前にできたのは「万物の元」だ。\n";
                        text += "調合成功\n";
                        text += "「エーテル」を手に入れ"+T3+"\n";
                        text += "ギフトを入手"+T2+"\n";
                        text += "加護514のものを手動で消去してください。\n";
                        //ここまで処理
                    }
                }
            }
            //ここまでエーテル

            //アルカナ
            kensaku = kekka[12].indexOf('51411');
            if (kensaku != -1) {
                kensaku = kekka[12].indexOf('51421');
                if (kensaku != -1) {
                    kensaku = kekka[12].indexOf('51431');
                    if (kensaku != -1) {
                        kensaku = kekka[12].indexOf('51441');
                        if (kensaku != -1) {
                            //ここから処理
                            text += "中身が光り輝いて、部門に浄化をもたら"+T2+"\n";
                            text += "調合成功\n";
                            text += "「アルカナ」を手に入れ"+T3+"\n";
                            text += "部門内、タロットカードに関係する他幻想i体の加護消失\n";
                            text += "(手動でお願いします)n";
                            kagohuti = "5146";
                            kagohuyo();
                            text += "加護51411~51441のものを手動で消去してください。\n";

                            //ここまで処理
                        }
                    }
                }
            }
            //ここまでアルカナ

            //仙丹
            kensaku = kekka[12].indexOf('51412');
            if (kensaku != -1) {
                kensaku = kekka[12].indexOf('51422');
                if (kensaku != -1) {
                    kensaku = kekka[12].indexOf('51432');
                    if (kensaku != -1) {
                        kensaku = kekka[12].indexOf('51442');
                        if (kensaku != -1) {
                            //ここから処理
                            text += "中身から黒い粒があふれた。薬のようだ。\n";
                            text += "調合成功\n";
                            text += "「仙丹」を手に入れ"+T3+"\n";
                            text += "一度だけ職員一名のHP,SPを全快。\n";
                            kagohuti = "5147";
                            kagohuyo();
                            text += "加護51412~51442のものを手動で消去してください。\n";
                            //ここまで処理
                        }
                    }
                }
            }
            //ここまで仙丹

            //どくりんご
            kensaku = kekka[12].indexOf('51432');
            if (kensaku != -1) {
                kensaku = kekka[12].indexOf('51442');
                if (kensaku != -1) {
                    kensaku = kekka[12].indexOf('51431');
                    if (kensaku != -1) {
                        kensaku = kekka[12].indexOf('51412');
                        if (kensaku != -1) {
                            //ここから処理
                            text += "果実は毒々しくもおいしそうになっ"+T3+"\n";
                            text += "調合成功\n";
                            text += "「毒リンゴ」を手に入れ"+T3+"\n";
                            text += "一度だけ敵に投擲可能。１ターン消費。\n";
                            text += "相手へ継続ターンごとダメージ+5n";
                            text += "加護514のものを手動で消去してください。\n";
                            //ここまで処理
                        }
                    }
                }
            }
            //ここまで毒りんご

            //体温計
            kensaku = kekka[12].indexOf('51431');
            if (kensaku != -1) {
                kensaku = kekka[12].indexOf('51421');
                if (kensaku != -1) {
                    kensaku = kekka[12].indexOf('51411');
                    if (kensaku != -1) {
                        kensaku = kekka[12].indexOf('514112');
                        if (kensaku != -1) {
                            //ここから処理
                            text += "なぜか隣に容器がある。注ぎ込んでふたを閉め"+T3+"\n";
                            text += "調合成功\n";
                            text += "「体温計」を手に入れ"+T3+"\n";
                            text += "今日一日、当職員のSP回復に+10の補正。\n";
                            text += "加護514のものを手動で消去してください。\n";
                            //ここまで処理
                        }
                    }
                }
            }
            //ここまで毒りんご

            //爆弾
            kensaku = kekka[12].indexOf('51411');
            if (kensaku != -1) {
                kensaku = kekka[12].indexOf('51421');
                if (kensaku != -1) {
                    kensaku = kekka[12].indexOf('51422');
                    if (kensaku != -1) {
                        //ここから処理
                        text += "さらさらとした粉だが、隣に置かれたのは「導火線」だ。\n";
                        text += "調合成功\n";
                        text += "「爆発物」を手に入れ"+T3+"\n";
                        text += "一度だけ敵に投擲可能。１ターン消費。\n";
                        text += "相手へダメージ30+5d6n";
                        text += "加護514のものを手動で消去してください。\n";
                        //ここまで処理
                    }
                }
            }
            //ここまで爆弾

            //うめぼし
            kensaku = kekka[12].indexOf('51412');
            if (kensaku != -1) {
                kensaku = kekka[12].indexOf('51441');
                if (kensaku != -1) {
                    kensaku = kekka[12].indexOf('514412');
                    if (kensaku != -1) {
                        //ここから処理
                        text += "あれ、なんだかすっぱそうだ。\n";
                        text += "調合成功\n";
                        text += "「うめぼし」を手に入れ"+T3+"\n";
                        text += "一度だけ、自殺パニックを抑える。その際mpは1で復帰。\n";
                        text += "加護514のものを手動で消去してください。\n";
                        //ここまで処理
                    }
                }
            }
            //ここまでうめぼし

            //王水
            kensaku = kekka[12].indexOf('51432');
            if (kensaku != -1) {
                kensaku = kekka[12].indexOf('51442');
                if (kensaku != -1) {
                    kensaku = kekka[12].indexOf('51441');
                    if (kensaku != -1) {
                        //ここから処理
                        text += "盃まで溶けだした。急いで移し替えないと。\n";
                        text += "調合成功\n";
                        text += "「王様の水」を手に入れ"+T3+"\n";
                        text += "一度だけ、鎮圧時に１ターン消費で投擲できる。\n";
                        text += "相手通常攻撃ダメージに -５の補正。\n";
                        text += "加護514のものを手動で消去してください。\n";
                        //ここまで処理
                    }
                }
            }
            //ここまで王水

            //果実酒
            kensaku = kekka[12].indexOf('51412');
            if (kensaku != -1) {
                kensaku = kekka[12].indexOf('514122');
                if (kensaku != -1) {
                    kensaku = kekka[12].indexOf('51442');
                    if (kensaku != -1) {
                        //ここから処理
                        text += "あれ、なんだかお酒の匂いがする。\n";
                        text += "調合成功\n";
                        text += "「果実酒」を飲んだ。\n";
                        text += "おいしい。\n";
                        text += "当職員のHP, SPを20回復。\n";
                        text += "加護514のものを手動で消去してください。\n";
                        //ここまで処理
                    }
                }
            }
            //ここまで果実酒

            //入浴剤
            kensaku = kekka[12].indexOf('51432');
            if (kensaku != -1) {
                kensaku = kekka[12].indexOf('51441');
                if (kensaku != -1) {
                    kensaku = kekka[12].indexOf('51411');
                    if (kensaku != -1) {
                        //ここから処理
                        text += "なんだかいいにおいのする砂だ。\n";
                        text += "調合成功\n";
                        text += "「入浴剤」を手に入れ"+T3+"\n";
                        text += "「水をあびた」場合、SP30回復n";
                        text += "加護514のものを手動で消去してください。\n";
                        //ここまで処理
                    }
                }
            }
            //ここまで入浴剤

            //「辰砂」
            kensaku = kekka[12].indexOf('51422');
            if (kensaku != -1) {
                kensaku = kekka[12].indexOf('51431');
                if (kensaku != -1) {
                    kensaku = kekka[12].indexOf('514222');
                    if (kensaku != -1) {
                        //ここから処理
                        text += "毒が浮いた。触ると痛い\n";
                        text += "調合成功\n";
                        text += "「魔法の毒」を手に入れ"+T3+"\n";
                        text += "近距離ダメージを食らった際、相手に+3ダメージ\n";
                        text += "加護514のものを手動で消去してください。\n";
                        //ここまで処理
                    }
                }
            }
            //ここまで辰砂

            //果物の夢
            kensaku = kekka[12].indexOf('51412');
            if (kensaku != -1) {
                kensaku = kekka[12].indexOf('514122');
                if (kensaku != -1) {
                    kensaku = kekka[12].indexOf('51415');
                    if (kensaku != -1) {
                        //ここから処理
                        text += "あなたの前にたくさんの果物が転がる。\n";
                        text += "調合成功\n";
                        text += "「果物の夢」を見"+T3+"\n";
                        text += "なぜか食べた果物の味を思い出"+T2+"\n";
                        text += "「作業で果物を食べる」際、この職員のみ効果が倍になる。\n";
                        text += "加護514のものを手動で消去してください。\n";
                        //ここまで処理
                    }
                }
            }
            //ここまで「果物の夢」

            //黄色い絵の具
            kensaku = kekka[12].indexOf('51411');
            if (kensaku != -1) {
                kensaku = kekka[12].indexOf('51442');
                if (kensaku != -1) {
                    //ここから処理
                    text += "容器が黄色く染まっ"+T3+"\n";
                    text += "調合成功\n";
                    text += "黄色い絵の具を手に入れ"+T3+"\n";
                    text += "愛着作業成功率+5n";
                    text += "加護514のものを手動で消去してください。\n";
                    //ここまで処理
                }
            }
            //ここまで黄色絵の具

            //光る絵の具
            kensaku = kekka[12].indexOf('51421');
            if (kensaku != -1) {
                kensaku = kekka[12].indexOf('51432');
                if (kensaku != -1) {
                    //ここから処理
                    text += "液体が蛍光色だ\n";
                    text += "調合成功\n"
                    text += "光る絵の具を手に入れ"+T3+"\n";
                    text += "一度のみ、「暗闇・夜」での即死時、\n";
                    text += "1d2で2が出た場合、50 + 2d50ダメに変換\n";
                    text += "加護514のものを手動で消去してください。\n";
                    //ここまで処理
                }
            }
            //ここまで光る絵の具

            //海の夢
            kensaku = kekka[12].indexOf('51441');
            if (kensaku != -1) {
                kensaku = kekka[12].indexOf('5145');
                if (kensaku != -1) {
                    //ここから処理
                    text += "さざ波の音が聞こえる……\n";
                    text += "「海の夢」を見"+T3+"\n";
                    text += "当職員のSP10回復\n";
                    //ここまで処理
                }
            }
            //ここまで海の夢

            //金の夢
            kensaku = kekka[12].indexOf('51421');
            if (kensaku != -1) {
                kensaku = kekka[12].indexOf('5145');
                if (kensaku != -1) {
                    //ここから処理
                    text += "すべてが黄金だ。向こうに自分が見える？\n";
                    text += "「黄金の夢」を見"+T3+"\n";
                    text += "当職員のSP10回復\n";
                    //ここまで処理
                }
            }
            //ここまで金の夢


            //調合判定終わり
        }

    } else {

        //材料を渡す処理

        //特殊物体　あたりはずれ
        daideme1 = 1;
        daideme2 = 20;
        daisu();

        if (daideme4 == 20) {
            text += "夢のかたまりを手に入れ"+T3+"\n";
            kagohuti = "5145";
            kagohuyo();

        } else {

            //はずれ　作業によって材料を配る
            daideme1 = 1;
            daideme2 = 2;
            daisu();

            //本能1 爆発も含む
            if (sagyona == 0) {
                if (daideme4 == 1) {
                    kensaku = kekka[12].indexOf('51411');
                    if (kensaku == -1) {
                        text += "黄色い粉を手に入れ"+T3+"\n";
                        kagohuti = "51411";
                        kagohuyo();
                    }
                    kensaku = kekka[12].indexOf('514112');
                    if (kensaku == -1) {
                        text += "黄色い粉を手に入れ"+T3+"\n";
                        kagohuti = "514112";
                        kagohuyo();
                    }
                    else {
                        text += "「中庸」は逆位置を示"+T2+"\n";
                        daideme1 = 6
                        daideme2 = 10
                        daisu();
                        text += "部門全体にHP50+" + daideme4 + "のダメージ。\n";
                        text += "加護514のものを手動で消去してください。\n";
                    }
                    //本能2
                } else {
                    kensaku = kekka[12].indexOf('51412');
                    if (kensaku == -1) {
                        text += "赤い果物を手に入れ"+T3+"\n";
                        kagohuti = "51412";
                        kagohuyo();
                    } else {
                        kensaku = kekka[12].indexOf('514122');
                        if (kensaku == -1) {
                            text += "赤い果物を手に入れ"+T3+"\n";
                            kagohuti = "514122";
                            kagohuyo();
                        }
                        else {
                            text += "「中庸」は逆位置を示"+T2+"\n";
                            daideme1 = 6
                            daideme2 = 10
                            daisu();
                            text += "部門全体にHP50+" + daideme4 + "のダメージ。\n";
                            text += "加護514のものを手動で消去してください。\n";
                        }
                    }
                }
            }




            //洞察1
            if (sagyona == 1) {
                if (daideme4 == 1) {
                    kensaku = kekka[12].indexOf('51421');
                    if (kensaku == -1) {
                        text += "光る石を手に入れ"+T3+"\n";
                        kagohuti = "51421";
                        kagohuyo();
                    }
                    kensaku = kekka[12].indexOf('514212');
                    if (kensaku == -1) {
                        text += "光る石を手に入れ"+T3+"\n";
                        kagohuti = "514212";
                        kagohuyo();
                    }
                    else {
                        text += "「中庸」は逆位置を示"+T2+"\n";
                        daideme1 = 6
                        daideme2 = 10
                        daisu();
                        text += "部門全体にHP50+" + daideme4 + "のダメージ。\n";
                        text += "加護514のものを手動で消去してください。\n";
                    }
                    //洞察2
                } else {
                    kensaku = kekka[12].indexOf('51422');
                    if (kensaku == -1) {
                        text += "赤い石を手に入れ"+T3+"\n";
                        kagohuti = "51422";
                        kagohuyo();
                    } else {

                        kensaku = kekka[12].indexOf('514222');
                        if (kensaku == -1) {
                            text += "赤い石を手に入れ"+T3+"\n";
                            kagohuti = "514222";
                            kagohuyo();
                        }
                        else {
                            text += "「中庸」は逆位置を示"+T2+"\n";
                            daideme1 = 6
                            daideme2 = 10
                            daisu();
                            text += "部門全体にHP50+" + daideme4 + "のダメージ。\n";
                            text += "加護514のものを手動で消去してください。\n";
                        }
                    }

                }
            }


            //愛着
            if (sagyona == 2) {
                if (daideme4 == 1) {
                    kensaku = kekka[12].indexOf('51431');
                    if (kensaku == -1) {
                        text += "光る液体を手に入れ"+T3+"\n";
                        kagohuti = "51431";
                        kagohuyo();
                    }
                    kensaku = kekka[12].indexOf('514312');
                    if (kensaku == -1) {
                        text += "光る液体を手に入れ"+T3+"\n";
                        kagohuti = "514312";
                        kagohuyo();
                    }
                    else {
                        text += "「中庸」は逆位置を示"+T2+"\n";
                        daideme1 = 6
                        daideme2 = 10
                        daisu();
                        text += "部門全体にHP50+" + daideme4 + "のダメージ。\n";
                        text += "加護514のものを手動で消去してください。￥n";
                    }

                    //愛着2
                } else {
                    kensaku = kekka[12].indexOf('51432');
                    if (kensaku == -1) {
                        text += "泡立つ液体を手に入れ"+T3+"\n";
                        kagohuti = "51432";
                        kagohuyo();
                    } else {
                        kensaku = kekka[12].indexOf('514322');
                        if (kensaku == -1) {
                            text += "泡立つ液体を手に入れ"+T3+"\n";
                            kagohuti = "514322";
                            kagohuyo();
                        }
                        else {
                            text += "「中庸」は逆位置を示"+T2+"\n";
                            daideme1 = 6
                            daideme2 = 10
                            daisu();
                            text += "部門全体にHP50+" + daideme4 + "のダメージ。\n";
                            text += "加護514のものを手動で消去してください。\n";
                        }
                    }


                }
            }

            //抑圧
            if (sagyona == 3) {
                if (daideme4 == 1) {
                    kensaku = kekka[12].indexOf('51441');
                    if (kensaku == -1) {
                        text += "しょっぱい粒を手に入れ"+T3+"\n";
                        kagohuti = "51441";
                        kagohuyo();
                    } else {
                        kensaku = kekka[12].indexOf('514412');
                        if (kensaku == -1) {
                            text += "しょっぱい粒を手に入れ"+T3+"\n";
                            kagohuti = "514412";
                            kagohuyo();
                        }
                        else {
                            text += "「中庸」は逆位置を示"+T2+"\n";
                            daideme1 = 6
                            daideme2 = 10
                            daisu();
                            text += "部門全体にHP50+" + daideme4 + "のダメージ。\n";
                            text += "加護514のものを手動で消去してください。\n";
                        }
                    }

                    //抑圧2
                } else {
                    kensaku = kekka[12].indexOf('51442');
                    if (kensaku == -1) {
                        text += "溶ける液体を手に入れ"+T3+"\n";
                        kagohuti = "51442";
                        kagohuyo();
                    } else {
                        kensaku = kekka[12].indexOf('514422');
                        if (kensaku == -1) {
                            text += "溶ける液体を手に入れ"+T3+"\n";
                            kagohuti = "514422";
                            kagohuyo();
                        }
                        else {
                            text += "「中庸」は逆位置を示"+T2+"\n";
                            daideme1 = 6
                            daideme2 = 10
                            daisu();
                            text += "部門全体にHP50+" + daideme4 + "のダメージ。\n";
                            text += "加護514のものを手動で消去してください。\n";
                        }
                    }



                    //ここまで外れ内部
                }
            }
            //ここまで当たりはずれ

        }


    }
    
}

function g517() {
    gene += "黒羽の運び屋";
    sase = [[0.5, 0.5, 1, 1, 1.5], [0, 0.5, 0.5, 1, 1], [0.5, 0.5, 0.5, 0.5, 0.5], [2, 2, 2, 2, 2]];

    rankk = 2;
    rank();
    seihihan();

    if (irai == 1) {
        irana2 = "投函";
        text += "HPの30以下の任意の値を減少、減らした値分SPを回復\n";
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    } else {
        if (sagyona == 2 && seihi == 1) {
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 1) {
                text += "現世の友人宛ての手紙を受け取る。\nSP10回復、作業成功率+2\n";
            } else {
                if (ransu == 2) {
                    daideme1 = 1;
                    daideme2 = 20;
                    daisu();
                    text += "部門内の誰か宛ての手紙を受け取る。\n任意の職員と作業職員のSP" + daideme4 + "\n重複はしない。\n";
                } else {
                    text += "宛名も差出人もない手紙を受け取る。\n作業成功率と鎮圧与ダメージ+3\nこの職員が死亡時周囲に10％の恐怖ダメージ\n";
                }
            }
        }
        if (sagyona == 3) {
            text += "黒羽の運び屋の抑圧は投函作業に置き換わっています。\n";
        }
    }
    if (nefi <= 0) {
        text += "部門全体が夕日が差し込み、カラスが手紙をばら撒く。\n部門全体の全ステータス-10（１時間、15以下にはならない。）、SP1d20回復。\nカウンター0→3\n";
        nefi = 3;
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
        text += "カウンターが減少"+T2+"\n";
        if (nefi == 1) {
            text += "はらぺこな田舎者は"+Tdassou+"\n";
            dassou = 1;
        }
        nefi -= 1;
        if (nefi <= 0) {
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (kekka[10] >= 5 && sagyona == 0 && kurike == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (sagyona == 1 && kurike == 1 && kekka[4] == 25) {
        text += "IP-O-04-523は綿毛に変化し種を撒き散ら"+T2+"\n種の付いた職員は1時間後に死亡する\nまた、部門全体攻撃を1度だけ無効にする\nツールによるダメージは適用外\n"
    }

    if (nefi <= 0) {
        text += "ありふれた野草は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }

}

function g524() {
    gene = "524 空っぽのストーブ";
    peti = 0;
    kensaku2 = kekka[12].indexOf('527');
    kensaku = kekka[12].indexOf('540');
    if (sagyona == 4) {
        if (kensaku2 != -1) {
            sibou = 0;
        } else {
        text += "▼職員" + name + "は鉄の約束を得"+T3+"\n鎮圧時のダメージ+15\nこのツールは返却可能\n部門内に1人のみ、返却するまで他の職員は手に入ら"+T4+"\nこの職員の加護欄に「524」を追加\n";
            kagohuti = "524";
            kagohuyo();
        }

        if (kekka[8] == 3 || kekka[9] == 3 || kekka[10] == 3 || kekka[11] == 3) {
            sibou = 0;
            text += "職員" + name + "はストーブに引き込まれ、空っぽのストーブと共に消失"+T2+"\n次の作業時には空っぽのストーブのみ戻ってくる\n";
        }

    } else {
        if (sagyona == 5) {
            text += "鉄の約束を返却"+T2+"\n加護欄から「524」を手動で消去してください\n";
            kagokesi('524');
        } else {
            text += "ツール型の作業は「使用」"+T1+"\n";
        }


    }

}

function g525() {
    gene = "525　赤い鳥";
    sase = [[0.5, 0.5, 1, 1, 1.5], [0, 0, 0.5, 0.5, 1], [1, 1, 1, 1.5, 1.5], [1.5, 1.5, 2, 2, 2]];
    rankk = 4;
    rank();
    seihihan();
    sykasan(525, 3, 1);
    if (sagyona == 0 || sagyona == 1) {
        text += "赤い鳥は歌っ"+T3+"\n";
        ransu = Math.floor(Math.random() * 5 + 1);
        if (ransu == 1) {
            text += "▼職員" + name + "は魅了され"+T3+"\n15分以内に解除されなかった場合死亡する\n";
        }
    }
}

function g526() {
    gene = "526 災禍の火種";
    sase = [[0, 0, 0, 0, 0], [2, 2, 2, 2, 2], [1, 1, 1, 1, 1], [1.5, 1.5, 1.5, 1.5, 1.5]];
    rankk = 4;
    rank();
    seihihan();

    if (seihi == 0) {
        ransu = Math.floor(Math.random() * 10 + 1);
        text += "追加で黒" + ransu + "ダメージ\n";
    }

    if (sagyona == 2 || sagyona == 3) {
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu == 1) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }
    if (sagyona == 0) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }

    if (nefi <= 0) {
        text += "災禍の火種は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }
}

function g527() {
    gene += "偽りの価値";
    peti = 0;
    kensaku = kekka[12].indexOf('527');
    if (sagyona == 4) {
        kagoche("527", 1);
        if (kensakuC == -1) {
            kensaku = kekka[12].indexOf('524');
            if (kensaku != -1) {
                sibou = 0;
            } else {
                text += "職員" + name + "は「注目」の付与を受け"+T3+"\n鎮圧時同部門の他の職員のダメージを全て受け、ランダムな職員が選ばれる能力では無条件に選ばれる\n返却可能\n";
                kagohuti = "527";
                kagohuyo();
            }
        }
    } else {
        if (sagyona == 5) {
            if (kensaku != -1) {
                text += "返却"+T2+"\n加護欄から「527」を消去する\n";
                kagokesi('527');
            } else {
                text += "ツール型の作業は「使用」"+T1+"\n";
            }
        } else {
            text += "ツール型の作業は「使用」"+T1+"\n";
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
            text += "▼職員" + name + "に野狐が憑い"+T3+"\n作業成功率-5\n作業開始時にHPが減っていた場合死亡\nパニックになった際殺人性になる\nすでに狐が憑いている場合、成功率とパニックはこちらに上書きされる\n";
        }
        if (ransu == 2) {
            text += "▼職員" + name + "に善狐が憑い"+T3+"\n作業成功率+5\n加護全て消失\nパニックになった際自殺性になる\nすでに狐が憑いている場合、成功率とパニックはこちらに上書きされる\n";
        }
    }

}

function g529() {
    gene += "虚空の記憶";
    sase = [[2, 2, 2, 1, 0.5], [0, 1, 2, 1.5, 0], [2, 0, 1, 0, 1.5], [1.5, 0.5, 0, 2, 1]];
    rankk = 5;
    rank();
    seihihan();
    pale = 1;

    if (sagyona != 0 && kurike == 1) {
        ransu = Math.floor(Math.random() * 50 + 1);
        text += "部門内全職員にSP" + ransu + "ダメージ\nカウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (sagyona != 0 && fanke == 1) {
        ransu = Math.floor(Math.random() * 3 + 1);
        text += "ランダムな職員" + ransu + "名が死亡する\n";
    }
    if (nefi <= 0) {
        text += "虚空の記憶は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
    }
}

function g530() {
    gene = "530 打ち零る水星";
    sase = [[0.5, 0.5, 1, 1, 1], [0.5, 1, 1, 1.5, 2], [0, 0, 0, 0.5, 0.5], [2, 2, 2, 2, 2]];
    rankk = 4;
    rank();
    seihihan();

    if (sagyona == 2) {
        if (t530 == 0) {
            ransu = Math.floor(Math.random() * 5 + 1);
            if (ransu == 1) {
                t530 = 1;
                text += "▼職員" + name + "は水の中に引き込まれ"+T3+"\n部門内の全職員のHPMP全回復\n再度愛着作業で救出できる\n";
            }
        } else {
            t530 = 0;
            daideme1 = 3;
            daideme2 = 3;
            daisu();
            if (daideme4 == 9) {
                text += "救出成功\n両者特殊ギフト入手\n";
                text += "カウンターが即座に0になっ"+T3+"\n";
                nefi = 0;
            } else {
                text += "救出失敗\n囚われていた職員は死亡する\n";

            }
        }


    }
}


    function g531() {
        gene = "531 灰に燻る恋心";
        peti = 0;

        if (sagyona == 4) {
            text += "「恋人」を付与され"+T3+"\nもう一人同部門の職員を選択し「恋人」を付与する\n「恋人」の付与された職員両方の加護欄に「531」を追加する\n片方が㏋0になるダメージを受けた際もう片方の㏋が半分以上あれば1度だけ㏋1で耐える\n";
            kagohuti = "531";
            kagohuyo();

            kensaku243 = kekka[12].indexOf('243');
            if (kensaku243 != -1) {
                text += "30分毎に1回、任意でHP10回復可能\n";
            }
        } else {
            text += "ツール型の作業は「使用」"+T1+"\n";
        }

    }

function g532() {
    gene = "532 獲物を待つ鳥";
    sase = [[0.5, 0.5, 0.5, 0.5, 0.5], [2, 2, 2, 1.5, 1.5], [1, 1, 1, 1, 1], [1.5, 1.5, 1, 0.5, 0.5]];
    rankk = 4;
    rank();
    seihihan();
    if (sagyona == 0 || sagyona == 3) {
        if (seihi == 0) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }
    if (nefi <= 0) {
        text += "獲物を待つ鳥は"+Tdassou+"\nカウンター0→1\n";
        dassou = 1;
        nefi = 1;
    }
}

function g534() {
    gene += "失せもの探しの磁針";
    peti = 0;
    ransu = Math.floor(Math.random() * 3 + 1);
    if (sagyona == 4) {
        if (t534 == 1) {
            text += "職員" + name + "と磁針を持っていた職員全員が死亡する\n";
            sibou = 0;
            t534 = 0;
        } else {
            text += "職員" + name + "は「磁針」を得"+T3+"\n返却可能\n鎮圧時、1回のみ移動ターン-1（試練、眷属の鎮圧では不可）\n";
            kensaku = kekka[12].indexOf('534');
            if (kensaku == -1) {
                kagohuti = "534";
                kagohuyo();
            }
            if (ransu == 1) {
                text += "失せもの探しの磁針は壊れ"+T3+"\n";
                t534 = 1;
            }
        }

    } else {
        if (sagyona == 5) {
            sykasan(534, 3, 0);
            if (t534 == 1) {
                text += "職員" + name + "と磁針を持っていた職員全員が死亡する\n";
                sibou = 0;
                t534 = 0;
            } else {
                text += "磁針を返却"+T2+"\n";
                kagokesi('534');
                if (ransu == 1) {
                    text += "失せもの探しの磁針は壊れ"+T3+"\n";
                    t534 = 1;
                }
            }

        } else {
            text += "ツール型の作業は「使用」"+T1+"\n";

        }
    }

}

function g535() {
    gene += "サルベージ";
    peti = 0;
    if (sagyona == 4) {
        ransu = Math.floor(Math.random() * 100 + 1);
    text += ransu + "\n";
        if (ransu == 1) {
            text += "誰かの骸を引き上げてしまっ"+T3+"\n職員" + name + "と現在判定くんに登録されている職員は死亡\n本日中、蘇生時の侵食値 + 1\n";
            sibou = 0;
            sykensaku(535);
            if (sykekka == 1) {
                text += "特殊ギフトを入手\n";
            } else {
                text += "このツールで別の物品を得ていた場合後から引き上げた物と入れ替え、効果を上書きする。\n";
            }
            sykasan(535, 3, 1);

        } else {
            if (ransu == 10 || ransu == 20) {
                text += "動物の船首像が引き上げられ"+T3+"\n勇気+25、自制-25\n";
                sykensaku(535);
                if (sykekka == 2) {
                    text += "特殊ギフトを入手\n";
                } else {
                    text += "このツールで別の物品を得ていた場合後から引き上げた物と入れ替え、効果を上書きする。\n";
                }
                sykasan(535, 3, 2);
            } else {
                if (ransu == 30 || ransu == 40) {
                    text += "藻に塗れた操舵輪が引き上げられ"+T3+"\n慎重+25、勇気-25\n";
                    sykensaku(535);
                    if (sykekka == 3) {
                        text += "特殊ギフトを入手\n";
                    } else {
                        text += "このツールで別の物品を得ていた場合後から引き上げた物と入れ替え、効果を上書きする。\n";
                    }
                    sykasan(535, 3, 3);
                } else {
                    if (ransu == 50 || ransu == 60) {
                        text += "錆びついた金属塊が引き上げられ"+T3+"\n自制+25、正義-25\n";
                        sykensaku(535);
                        if (sykekka == 4) {
                            text += "特殊ギフトを入手\n";
                        } else {
                            text += "このツールで別の物品を得ていた場合後から引き上げた物と入れ替え、効果を上書きする。\n";
                        }
                        sykasan(535, 3, 4);
                    } else {
                        if (ransu == 70 || ransu == 80) {
                            text += "焦げた海賊旗が引き上げられ"+T3+"\n正義+25、慎重-25\n";
                            sykensaku(535);
                            if (sykekka == 5) {
                                text += "特殊ギフトを入手\n";
                            } else {
                                text += "このツールで別の物品を得ていた場合後から引き上げた物と入れ替え、効果を上書きする。\n";
                            }
                            sykasan(535, 3, 5);
                        } else {
                            if (ransu == 90) {
                                text += "磁針の無い羅針盤が引き上げられ"+T3+"\n全ステ-25\nIP-O-05-534の付与がある場合侵食ゲージ-1\n";
                                sykensaku(535);
                                if (sykekka == 6) {
                                    text += "特殊ギフトを入手\n";
                                } else {
                                    text += "このツールで別の物品を得ていた場合後から引き上げた物と入れ替え、効果を上書きする。\n";
                                }
                                sykasan(535, 3, 6);
                            } else {
                                if (ransu == 100) {
                                    text += "なんと、宝石の付いた王冠を引き上げた！\n全ステ+25\n職員" + name + "は本日中、蘇生時の侵食値-1\n";
                                    sykensaku(535);
                                    if (sykekka == 7) {
                                        text += "特殊ギフトを入手\n";
                                    } else {
                                        text += "このツールで別の物品を得ていた場合後から引き上げた物と入れ替え、効果を上書きする。\n";
                                    }
                                    sykasan(535, 3, 7);
                                } else {
                                    text += "何も引き上げられなかっ"+T3+"\n";
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}


function g536() {
    gene += "人工運";
    sase = [[1, 1, 1, 1, 1], [2, 2, 1.5, 1.5, 2], [1, 1, 1, 0.5, 0.5], [2, 2, 2, 2, 2]];
    rankk = 4;
    rank();
    seihihan();

    if (sagyona == 1 || sagyona == 2) {
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu == 3) {
            text += "職員" + name + "は「仁厚の翠玉」を得"+T3+"\n";
            kensaku = kekka[12].indexOf('536');
            if (kensaku == -1) {
                kagohuti = "536";
                kagohuyo();
            }
        }
        if (ransu == 1) {
            text += "職員" + name + "は「翠の不運」を得"+T3+"\n";
            kensaku = kekka[12].indexOf('5362');
            if (kensaku == -1) {
                kagohuti = "5362";
                kagohuyo();
            }
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
        if (ransu == 6) {
            text += "職員" + name + "は「翠の幸運」を得"+T3+"\n1度だけ作業時の即死を回避できる\n発動時に翠の幸運は消える\n";
            kensaku = kekka[12].indexOf('5361');
            if (kensaku == -1) {
                kagohuti = "5361";
                kagohuyo();
            }
        }
    }
    if (nefi <= 0) {
        text += "人工運は"+Tdassou+"\n加護「536」を所持している職員は眷属になる\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;

    }
    if (nefi <= 0) {
        text += "神の番人は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
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
                text += "部門内に限り再挑戦システムが起動\n今日獲得したギフト、装備、エネルギーが初期化\n職員の死亡と浸食ゲージ（本日分）も初期化\n地雷原による死亡分の浸食ゲージはリセットされ"+T4+"\n";
                text += "部門内の加護欄に540を記入\n";
                tt12 += ",540";
                document.hanteisuru['se18'].value += ",540";
                document.hanteisuru['se28'].value += ",540";
                document.hanteisuru['se38'].value += ",540";
                document.hanteisuru['se48'].value += ",540";
                document.hanteisuru['se58'].value += ",540";
            } else {
                text += "部門内に限り再挑戦システムが起動\n今日獲得したギフト、装備、エネルギーが初期化\n職員の死亡と浸食ゲージ（本日分）も初期化\n地雷原による死亡分の浸食ゲージはリセットされ"+T4+"\n";
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
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g541() {
    gene = "541 働き者の妖精";
    peti = 0;

    if (sagyona == 4) {
        text += "妖精が管理作業を1度だけ代行する\nステータスは使用職員のランク + 1の範囲で任意の数値を設定\n作業後、妖精は消失する\n";
        sibou = 0;
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g542() {
    gene += "弔い場";
    sase = [[0, 0.5, 1, 1.5, 2], [1, 1, 1, 1, 1], [1.5, 1.5, 1.5, 1.5, 1.5], [0, 0.5, 1, 1.5, 2]];
    rankk = 3;
    rank();
    seihihan();
    gift = 1;
    if (nefi <= 0) {
        text += "職員" + name + "のSPが50回復"+T2+"\nただし暴走放置、特殊能力等弔い場以外の原因でカウンター0の場合は回復ではなくダメージ\nカウンター0→3\n";
        nefi = 3;
                t5424 = 1;
    }

    if (t542 == -1 && sagyona == 2) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 3) {
            text += "職員" + name + "は黙祷を行っ"+T3+"\n";
            t542 = syid;
        }
    } else {
        if (t542 != -1 && t542 == syid) {
            if (t5420 == 1 && t5421 == 1 && t5423 == 1) {
                text += "ギフト入手\n";
                t5420 = 0;
                t5421 = 0;
                t5423 = 0;
            } else {

            }
            if (sagyona == 2) {
                ransu = Math.floor(Math.random() * 2 + 1);
                if (ransu == 2) {
                    text += "カウンターが減少"+T2+"\n";
                    nefi -= 1;
                }

            }
        }
        if (t542 != -1 && t542 != syid && t5424==0) {
            if (sagyona == 0) {
                text += "職員" + name + "は棺から出現したカラス達に肉を啄まれ"+T3+"\nカウンターが全回復"+T2+"\n";
                nefi = 3;
                sibou = 0;
                t5420 = 1;
            }
            if (sagyona == 1) {
                text += "職員" + name + "は身体が急速に風化"+T2+"\nカウンターが全回復"+T2+"\n";
                nefi = 3;
                sibou = 0;
                t5421 = 1;
            }
            if (sagyona == 3) {
                text += "職員" + name + "は天井から降って来た土砂に埋まっ"+T3+"\nカウンターが全回復"+T2+"\n";
                nefi = 3;
                sibou = 0;
                t5423 = 1;
            }
        }
    }
    if (nefi <= 0) {
        text += "\n収容室内は淡い光に包まれ"+T3+"\n";

    }
    t5424 = 0;
}

function g545() {
    gene += "うさぎ時計";
    sase = [[1, 1, 1.5, 1.5, 1.5], [1, 1, 0.5, 0.5, 0], [1, 1.5, 1.5, 1.5, 1.5], [1, 1, 0.5, 0.5, 0.5]];
    rankk = 5;
    rank();
    seihihan();

    if (kekka[9] >= 5) {
        pani = 1;
        text += "▼職員" + name + "は自殺性"+Tpani+"\n";

    } else {
        if (kekka[9] == 4) {
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 3) {
                pani = 1;
                text += "▼職員" + name + "は自殺性"+Tpani+"\n";
            }
        }
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
                text += "熱烈応援団は職員" + name + "にエールを送っ"+T3+"\n";
                kagohuti = "5554";
                kagohuyo();
            } else {
                if (kensaku2 != -1) {
                    ransu = Math.floor(Math.random() * 5 )+ 1;
                    text += "熱烈応援団は職員" + name + "にエールを送っ"+T3+"\n勇気と正義が" + ransu + "上昇\n";
                    kagohuti = "5553";
                    kagohuyo();
                } else {
                    if (kensaku != -1) {
                        ransu = Math.floor(Math.random() * 5 )+ 1;
                        text += "熱烈応援団は職員" + name + "にエールを送っ"+T3+"\n勇気と正義が" + ransu + "上昇\n";
                        kagohuti = "5552";
                        kagohuyo();
                    } else {
                        ransu = Math.floor(Math.random() * 5 )+ 1;
                        text += "熱烈応援団は職員" + name + "にエールを送っ"+T3+"\n勇気と正義が" + ransu + "上昇\n";
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
        text += "熱烈応援団は職員" + name + "にエールを送っ"+T3+"\n";
        text += "職員" + name + "は呼吸困難に陥っ"+T3+"\n";
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
        text += "ツール型の作業は「使用」"+T1+"\n";
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
                text += "▼職員" + name + "は"+Tpani+"\n";
                pani = 1;
            }
        }
        if (kekka[4] == 3 || kekka[4] == 4) {
            ransu = Math.floor(Math.random() * 10 + 1);
            if (ransu >= 4) {
                text += "▼職員" + name + "は"+Tpani+"\n";
                pani = 1;
            }
        }
        if (kekka[4] >= 5) {
            text += "▼職員" + name + "は"+Tpani+"\n";
            pani = 1;

        }
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g567() {
    gene += "Perlin noise(you,me);";
    sase = [[0, 0, 0.5, 1, 1], [1, 1, 1.5, 1.5, 2], [0, 0.5, 0.5, 0.5, 0.5], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();

    //初心者回復

    if (kekka[7] <= 3) {
        daideme1 = 1;
        daideme2 = 30;
        daisu();
        text += "職員" + name + "のHP、SPが" + daideme4 + "回復"+T2+"\n";
        text += "「ドウイタシマシテ。」\n";

    } else {

        //ランク4以上本能でカウンター減る

        if (kekka[7] >= 4 && sagyona == 0) {
            text += "「ソンナニ　セカサナイ！」\n";
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }

    //抑圧でカウンターゼロ

    if (sagyona == 3) {
        text += "「ヤメナサイ！マッタク、モウイイデス！」\n";
        text += "カウンターが即座に0になっ"+T3+"\n";
        nefi = 0;
    }


    //カウンター処理
    if (nefi <= 0) {
        text += "「アナタヲ　サガシニイキマス！」\n";
        text += "「カシオペイア」は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
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
            text += "職員" + name + "は写真を撮られ"+T3+"\n";
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
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
            //写真あり、抑圧作業で写真破棄、カウンター減少
        } else if (sagyona == 3) {
            text += "職員" + name + "は写真を破り捨て"+T3+"\n";
            text += "加護570を手動で削除してください。\n";
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
        //写真処理完了
    }

    //脱走処理
    if (nefi <= 0) {
        text += "想別花は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
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
        text += "カウンターが全回復"+T2+"\n5711,5712,5713,5714を消去\n";
        kagokesi('5711');
        kagokesi('5712');
        kagokesi('5713');
        kagokesi('5714');
        nefi = 3;
    } else {
        if (kurike == 1) {
            text += "カウンターが全回復"+T2+"\n";
            nefi = 3;
        } else {
            if (seihi == 0) {
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
        }
        ransu = Math.floor(Math.random() * 4 + 1);
        if (ransu == 1) {
            text += "マゼンタを得"+T3+"\nHP3ダメージ\n死亡、業務終了、特殊能力発動で消える\n";
            kensaku = kekka[12].indexOf('5711');
            if (kensaku == -1) {
                kagohuti = "5711";
                kagohuyo();
            }
        }
        if (ransu == 2) {
            text += "シアンを得"+T3+"\nSP3ダメージ\n死亡、業務終了、特殊能力発動で消える\n";
            kensaku = kekka[12].indexOf('5712');
            if (kensaku == -1) {
                kagohuti = "5712";
                kagohuyo();
            }
        }
        if (ransu == 3) {
            text += "イエローを得"+T3+"\nHPSP8回復\n死亡、業務終了、特殊能力発動で消える\n";
            kensaku = kekka[12].indexOf('5713');
            if (kensaku == -1) {
                kagohuti = "5713";
                kagohuyo();
            }
        }
        if (ransu == 4) {
            text += "ブラックを得"+T3+"\n黒10ダメージ\n死亡、業務終了、特殊能力発動で消える\n";
            kensaku = kekka[12].indexOf('5714');
            if (kensaku == -1) {
                kagohuti = "5714";
                kagohuyo();
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
    if (nefi <= 0) {
        daideme1 = 4;
        daideme2 = 6;
        daisu();
        text += "啼泣の叫びは絶叫"+T2+"\n部門内の全職員に" + daideme4 + "黒ダメージ\nカウンター0→1\n";
        nefi = 1;
    }
    if (sagyona == 3) {
        text += "黒10ダメージ\n";
    }

    if (seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

}

function g588() {
    gene += "否定の叫び声";
    sase = [[2, 1.5, 1, 1, 0.5], [1.5, 1, 0.5, 1, 0.5], [1, 1.5, 0, 1, 2], [2, 2, 2, 2, 2]];
    rankk = 4;
    rank();
    seihihan();

    if (irai == 1) {
        irana2 = "依頼";
        text += "脱走中の幻想体にWAW相当のダメージを与える\n対価　PiE-BOX 10\n";
    } else {
        if (seihi == 0) {
            ransu = Math.floor(Math.random() * 100 + 1);
            if (ransu <= 25) {
                sibou = 0;
                t588 += 1;
            }
        }
        if (sagyona == 1) {
            ransu = Math.floor(Math.random() * 100 + 1);
            if (ransu <= 35) {
                text += "▼職員" + name + "はシャットダウン性"+Tpani+"\n";
                pani = 1;
            }
        }
        if (sagyona == 3) {
            text += "依頼作業に置き換わって"+T5+"\n";
            peti = 0;
            keikenti = 0;
        }
    }
    if (t588 >= 2 || nefi <= 0) {
        text += "否定の叫び声は"+Tdassou+"\n";
        t588 = 0;
        dassou = 1;
        nefi = 1;
    }
}

function g590() {
    gene += "椅子";
    peti = 0;

    if (sagyona == 4) {
        if (t590 == -1) {
            text += "職員" + name + "は椅子に座らされ"+T3+"\n10分間行動不能\n座っている間他部門内職員の被ダメージ、浸食の増減を肩代わりする\n死亡した場合は自動的に蘇生される\n座っている間は暴走が発生し"+T4+"\n";
            t590 = syid;
            t5902 = name;
            setTimeout(g5902, 600000);
        } else {
            text += "既に職員" + t5902 + "が座って"+T5+"\n";
        }
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g5902() {
    if (t590 != -1) {
        ketext = "職員" + t5902 + "は椅子から解放され"+T3+"\n";
        document.hanteisuru['kekka'].value = ketext;
        t590 = -1;
        t5902 = "";
    }
}

function g598() {
    gene += "ガラスのはなよめ";
    peti = 0;

    if (sagyona == 4) {
        kensaku = kekka[12].indexOf('598');
        if (kensaku == -1) {
            text += "職員" + name + "はガラスのはなよめを装着"+T2+"\n返却可能\n全ステータス+5\nパニックが殺人性に固定\n";
            kagohuti = "598";
            kagohuyo();
        } else {
            text += "職員" + name + "は既に装着して"+T5+"\n";
        }
    } else {
        if (sagyona == 5) {
            text += "ツールを返却"+T2+"\n";
            kagokesi('598');
        } else {
            text += "ツール型の作業は「使用」と「返却」"+T1+"\n";
        }
    }

}

function g600() {
    gene += "我が視を呑むもの";
    sase = [[1, 1, 0.5, 0.5, 0], [1.5, 1.5, 1.5, 1, 1], [2, 2, 2, 2, 2], [1, 1, 1, 1, 1]];
    rankk = 3;
    rank();
    seihihan();

    if (seihi == 0 || kekka[7] <= 2) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (nefi <= 0) {
        text += "我が視を呑むものは"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
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
            text += "職員に加護『ささやかな願い』を与え"+T3+"\nHPSP+5\n";
            kagohuti = "601";
            kagohuyo();

            }
        }
    }

}

function g603() {
    gene += "静寂";
    peti = 0;

    if (sagyona == 4) {
        if (t603 == 1) {
            text += "職員" + t6032 + "は死亡"+T2+"\n";
            t6032 = "";
            t603 = 0;
        }
        sykasan(603, 0, 1);
        daideme1 = 2;
        daideme2 = 10;
        daisu();
        text += "職員" + name + "のSPが" + daideme4 + "回復"+T2+"\n";
        sykensaku(603);
        if (sykekka >= 2) {
            if (kekka[7] <= 2) {
                sibou = 0;
            }
            if (kekka[7] >= 4) {
                ransu = Math.floor(Math.random() * 10 + 1);
                if (ransu >= 7) {
                    text += "職員" + name + "はその場に蹲っ"+T3+"\n特殊作業で救出可能\n";
                    t6032 = name;
                    t603 = 1;
                }
            }
        }

    } else {
        if (irai == 1) {
            irana2 = "救出";
            t603 = 0;
            daideme1 = kekka[10];
            daideme2 = 6;
            daisu();
            text += "出目：" + daideme4+"\n";
            if (daideme4 >= 14) {
                text += "救出成功\n職員" + t6032 + "はギフトを入手\n";
                t6032 = "";
            } else {
                text += "救出失敗\n▼職員" + t6032 + ""+Tsibou+"\n";
                t6032 = "";
                sibou = 0;
            }
        } else {
            text += "ツール型の作業は「使用」"+T1+"\n";
        }

    }

}

function g604() {
    gene = "604 Une lumière qui sauve le cœur";
    sase = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
    rankk = 1;
    rank();
    seihihan();
    if (seihi == 1) {
        kensaku = kekka[12].indexOf('604');
        if (kensaku == -1 && t604 == 0) {
            text += "「未来への加護」入手\nダメカ+10\nこの職員はUne lumière qui sauve le cœurへの作業ができなくなる\nこの職員の死亡・パニックで脱走する\n";
            kagohuti = "604";
            kagohuyo();
            t604 = 1;
            if (kekka[7] <= 2) {
                text += "▼職員" + name + "は"+Tpani+"\n";
            }
        }
    }
    if (kurike == 1) {
        text += "即死、即パニック、眷属化の危険性のある加護やマーキングがランダムで1つ消える\n";
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    kensaku = kekka[12].indexOf('906');
    if (kensaku != -1) {
        text += "潜伏する者は"+Tdassou+"\n";
        dassou = 1;
    }

    if (nefi <= 0) {
        text += "潜伏する者は"+Tdassou+"\nカウンター0→1\n";
        dassou = 1;
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (nefi <= 0) {
        text += "ファイアーフィッシュは"+Tdassou+"\nカウンター0→4\n";
        dassou = 1;
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (seihi == 0) {
        kari = kekka[7] * 5;
        text += "最大HPが" + kari + "減少\n0以下になると死亡\n";
    }
    if (nefi <= 0) {
        text += "「初恋」を持つ職員が収容室に呼び出され死亡する\n初恋職員がいない場合なにも起き"+T4+"\nカウンター0→3\n";
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
        text += "▼職員" + name + "は魔人となりました。直ちに鎮圧してください。\n";
    } else {
        if (kekka[6] == "女" || kekka[6] == "女性") {
            text += "";
        } else {
            ransu = Math.floor(Math.random() * 2 + 1);
            if (ransu == 2) {
                text += "▼職員" + name + "は魔人となりました。直ちに鎮圧してください。\n";
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
            if (nefi <= 0) {
                text += "カウンター0→2\n";
                nefi = 2;
            }
        }
    }
}

function g616() {
    gene += "一時の夢";
    sase = [[1, 1, 1, 1, 1.5], [0.5, 0.5, 1, 1, 1.5], [0, 0.5, 1, 1, 1], [1.5, 2, 2, 2, 2]];
    rankk = 4;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('616');
    if (sagyona == 2 && seihi == 1) {
        kagoche("616", 1);
        if (kensakuC == -1) {
            text += "職員" + name + "に少女が追従"+T2+"\n作業ダメージ、鎮圧時ダメージを合計30ポイントまで庇う\n31を超えると消滅、31ポイント以上受けた時点でのダメージは全て職員が受ける\n消滅時、1d6で2以下が出ると自殺性パニックになり更にカウンターが下がる\n";
            kagohuti = "616";
            kagohuyo();
        }
    }
    if (kekka[6] == "女" || kekka[6] == "女性") {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "一時の夢は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
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
        text += "自制-" + daideme4 + "\n";
        kagohuti = "620";
        kagohuyo();
    }

    if (sagyona == 2 && seihi == 1) {
        if (kensaku == -1) {
            text += "▼職員" + name + "は壁から抜けなくなっ"+T3+"\n抜けられるまで行動不能\n職員は(正義)d6を振りIP-O-05-620は3d6を振る。相手より出目が高いと脱出\n失敗した場合30分後に再挑戦可能\n";
        } else {
            text += "▼職員" + name + "は壁から抜けなくなっ"+T3+"\nカウンターが減少"+T2+"\nIP-O-05-620は"+Tdassou+"\nカウンタ－0→1\n";
            dassou = 1;
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
        text += "作業ダメージに追加で赤2ダメージ\n";
        if (sagyona == 1) {
            text += "作業ダメージに追加で赤5ダメージ\n";
            if (kurike == 1) {
                text += "作業ダメージに追加で赤6ダメージ\n";
            }
        }
    } else {
        if (sagyona == 1) {
            text += "作業ダメージに追加で赤3ダメージ\n";
            if (kurike == 1) {
                text += "作業ダメージに追加で赤6ダメージ\n";
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
    nemax = 2;

    if (seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (seihi == 1) {
        text += "カウンターが1増加"+T2+"\n";
        nefi += 1;
    }
    if (nefi <= 0) {
        text += "天の孔は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
    }

}

function g628() {
    gene = "628 専用マナー";
    sase = [[0, 0, 0.5, 0.5, 0.5], [0.5, 0.5, 1, 1, 1], [0, 0, 0.5, 0.5, 0.5], [0.5, 0.5, 1, 1, 1.5]];
    rankk = 1;
    rank();
    seihihan();
    if (kekka[10] <= 2) {
        if (sagyona == 0 || sagyona == 2) {
            text += "職員" + name + "は食事を行っ"+T3+"\nSP全回復\n";
        }
        if (sagyona == 1 || sagyona == 3) {
            text += "職員" + name + "は食事を行っ"+T3+"\nHP全回復\n";
        }
    }
    if (kekka[10] >= 5) {
        sibou = 0;
        text += "「ごちそうさま」\n";
    }
}

function g635() {
    gene = "635 万能薬箱";
    peti = 0;
    kensaku = kekka[12].indexOf('635');
    kensaku2 = kekka[12].indexOf('6351');
    kensaku3 = kekka[12].indexOf('6352');

    if (sagyona == 4) {
        text += "使用者の最大HPの半分の値の分、使用者のHPSP回復\nHPが満タンだった場合は死亡する\n";


        if (kensaku3 != -1) {
            sibou = 0;
            kagokesi('6352');
        } else {
            if (kensaku2 != -1) {
                kagohuti = "6352";
                kagohuyo();
            } else {
                if (kensaku == -1) {
                    kagohuti = "635";
                    kagohuyo();
                } else {
                    kagohuti = "6351";
                    kagohuyo();
                }

            }

        }


    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g642() {
    gene += "饒舌な血の杯";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
    rankk = 4;
    rank();
    seihihan();

    //2段階目加護で飲むやつ

    kensaku = kekka[12].indexOf('6422');
    if (kensaku != -1) {
        console.log("g1");
        text += "職員" + name + "は血酒を飲んだ。\n職員" + name + "のMP上限が自制ランク×5減少する。この効果は重複する。\nこれによりパニックになった場合はエンサイクロペディアを参照してください。\n";
    } else {
   //自制勇気のやつ

        if (kekka[10] < kekka[8]) {
            console.log("g2");
        text += "職員" + name + "は血酒を飲んだ。\n職員" + name + "のMP上限が自制ランク×5減少する。この効果は重複する。\nこれによりパニックになった場合はエンサイクロペディアを参照してください。\n";

        //一段階加護があると二段階めにするやつ
        kensaku = kekka[12].indexOf('6421');
        kensaku2 = kekka[12].indexOf('6422');
        if (kensaku != -1 && kensaku2==-1) {
            kagohuti = "6422";
            kagohuyo()
            console.log("g3");
            text += "以降、この幻想体への作業は職員" + name + "しか行うことが出来ない。これは職員" + name + "がロストするか、業務終了まで継続する。\n";
        } else {

            //一段階めがなければつけるやつ
            kensaku = kekka[12].indexOf('642');
            kensaku2 = kekka[12].indexOf('6422');
            if (kensaku == -1 && kensaku2 == -1) {
                console.log("g4");
                kagohuti = "6421";
                kagohuyo();
            }
        }
    }
    //ここまで自制勇気のやつ


        if (kekka[8] == 6 && sagyona == 0) {
            console.log("g5");
        text += "職員" + name + "は血酒を飲んだ。\n職員" + name + "のMP上限が自制ランク×5減少する。この効果は重複する。\nこれによりパニックになった場合はエンサイクロペディアを参照してください。\n";

        //一段階加護があると二段階めにするやつ
        kensaku = kekka[12].indexOf('6421');
        kensaku2 = kekka[12].indexOf('6422');
            if (kensaku != -1 && kensaku2 == -1) {
                console.log("g6");
            kagohuti = "6422";
            kagohuyo()
            text += "以降、この幻想体への作業は職員" + name + "しか行うことが出来ない。これは職員" + name + "がロストするか、業務終了まで継続する。\n";
        } else {

            //一段階めがなければつけるやつ
            kensaku = kekka[12].indexOf('642');
            kensaku2 = kekka[12].indexOf('6422');
                if (kensaku == -1 && kensaku2 == -1) {
                    console.log("g7");
                kagohuti = "6421";
                kagohuyo();
            }
        }
    }

        if (kekka[9] == 6 && sagyona == 1) {
            console.log("g8");
        text += "職員" + name + "は血酒を飲んだ。\n職員" + name + "のMP上限が自制ランク×5減少する。この効果は重複する。\nこれによりパニックになった場合はエンサイクロペディアを参照してください。\n";

        //一段階加護があると二段階めにするやつ
        kensaku = kekka[12].indexOf('6421');
        kensaku2 = kekka[12].indexOf('6422');
            if (kensaku != -1 && kensaku2 == -1) {
                console.log("g9");
            kagohuti = "6422";
            kagohuyo()
            text += "以降、この幻想体への作業は職員" + name + "しか行うことが出来ない。これは職員" + name + "がロストするか、業務終了まで継続する。\n";
        } else {

            //一段階めがなければつけるやつ
            kensaku = kekka[12].indexOf('642');
            kensaku2 = kekka[12].indexOf('6422');
                if (kensaku == -1 && kensaku2 == -1) {
                    console.log("g10");
                kagohuti = "6421";
                kagohuyo();
            }
        }
    }

        if (kekka[10] == 6 && sagyona == 2) {
            console.log("g11");
        text += "職員" + name + "は血酒を飲んだ。\n職員" + name + "のMP上限が自制ランク×5減少する。この効果は重複する。\nこれによりパニックになった場合はエンサイクロペディアを参照してください。\n";

        //一段階加護があると二段階めにするやつ
        kensaku = kekka[12].indexOf('6421');
        kensaku2 = kekka[12].indexOf('6422');
            if (kensaku != -1 && kensaku2 == -1) {
                console.log("g12");
            kagohuti = "6422";
            kagohuyo()
            text += "以降、この幻想体への作業は職員" + name + "しか行うことが出来ない。これは職員" + name + "がロストするか、業務終了まで継続する。\n";
        } else {

            //一段階めがなければつけるやつ
            kensaku = kekka[12].indexOf('642');
            kensaku2 = kekka[12].indexOf('6422');
                if (kensaku == -1 && kensaku2 == -1) {
                    console.log("g13");
                kagohuti = "6421";
                kagohuyo();
            }
        }
    }


        if (kekka[11] == 6 && sagyona == 3) {
            console.log("g14");
        text += "職員" + name + "は血酒を飲んだ。\n職員" + name + "のMP上限が自制ランク×5減少する。この効果は重複する。\nこれによりパニックになった場合はエンサイクロペディアを参照してください。\n";

        //一段階加護があると二段階めにするやつ
        kensaku = kekka[12].indexOf('6421');
        kensaku2 = kekka[12].indexOf('6422');
            if (kensaku != -1 && kensaku2 == -1) {
                console.log("g15");
            kagohuti = "6422";
            kagohuyo()
            text += "以降、この幻想体への作業は職員" + name + "しか行うことが出来ない。これは職員" + name + "がロストするか、業務終了まで継続する。\n";
        } else {

            //一段階めがなければつけるやつ
            kensaku = kekka[12].indexOf('642');
            kensaku2 = kekka[12].indexOf('6422');
                if (kensaku == -1 && kensaku2 == -1) {
                    console.log("g16");
                kagohuti = "6421";
                kagohuyo();
            }
        }
    }


        if (seihi == 0) {
            console.log("g17");
        text += "職員" + name + "は血酒を飲んだ。\n職員" + name + "のMP上限が自制ランク×5減少する。この効果は重複する。\nこれによりパニックになった場合はエンサイクロペディアを参照してください。\n";

        //一段階加護があると二段階めにするやつ
        kensaku = kekka[12].indexOf('6421');
        kensaku2 = kekka[12].indexOf('6422');
            if (kensaku != -1 && kensaku2 == -1) {
                console.log("g18");
            kagohuti = "6422";
            kagohuyo()
            text += "以降、この幻想体への作業は職員" + name + "しか行うことが出来ない。これは職員" + name + "がロストするか、業務終了まで継続する。\n";
        } else {

            //一段階めがなければつけるやつ
            kensaku = kekka[12].indexOf('642');
            kensaku2 = kekka[12].indexOf('6422');
                if (kensaku == -1 && kensaku2 == -1) {
                    console.log("g19");
                kagohuti = "6421";
                kagohuyo();
            }
        }
    }
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
        if (seihi == 1) {
            text += "職員" + name + "は加護を得"+T3+"\n被ダメ-5（プラニダーナからのダメージはカットできない）\n";
            kagohuti = "650";
            kagohuyo();
        }
    } else {
        if (seihi == 1) {
        sibou = 0;
        text += "カウンターが1増加"+T2+"\n";
        nefi += 1;
        }

    }
    if (kekka[7] >= 5) {
        sibou = 0;
        text += "カウンターが1増加"+T2+"\n";
        nefi += 1;
    }
    if (nefi <= 0) {
        text += "プラニダーナは"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }
}

function g656() {
    gene += "L'obscurité qui remplit le cœur";
    sase = [[2, 2, 2, 2, 2], [2, 2, 2, 1, 1], [2, 2, 2, 2, 2], [2, 2, 2, 1, 1]];
    rankk = 5;
    rank();
    seihihan();

    if (seihi == 0) {
        kensaku = kekka[12].indexOf('656');
        if (kensaku == -1) {
            text += "職員" + name + "は「未来を隠す加護」を受け取っ"+T3+"\nL'obscurité qui remplit le cœurへの作業成功率+10、それ以外の相手への作業成功率-10\n鎮圧参加時、周囲の職員に1d5の確率で伝染する\n";
            kagohuti = "656";
            kagohuyo();
        }

    }
    if (kekka[11] <= 2) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "L'obscurité qui remplit le cœurは"+Tdassou+"\nカウンター0→4\n";
        nefi = 4;
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
                text += "職員に加護『夜天の導き』を与え"+T3+"\n自制正義+25\nHPSPを合計30減らすと職員は眷属《覚醒切望せし信仰者》に変化する。\n";
                kagohuti = "666";
                kagohuyo();

            }
        }
    } else {
        if (seihi == 1) {
            text += "『ささやかな願い』と『夜天の導き』は相殺され、対消滅"+T2+"\n加護欄から「601」を消去する\n";
            kagokesi('601');

            

        }
    }


}

function g672() {
    gene += "エステロス";
    sase = [[1.5, 1.5, 1, 0.5, 0.5], [0, 0.5, 1, 1.5, 2], [1, 1, 1, 1, 1], [1, 1, 1, 1, 0.5]];
    rankk = 4;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('6722');
    if (kensaku == -1) {
        text += "職員" + name + "に羽根が纏わりつい"+T3+"\n30分間作業から戻った時と鎮圧に向かった時に周囲の職員（作業時は部門内職員、鎮圧時は鎮圧参加者）に感染する恐れがある\n1d（7-対象職員勇気ランク）で1が出た職員の加護欄に「672」を追加\n30分経過したらこの職員の加護欄から「6722」を消す\n";
        kagokesi('672');
        kagohuti = "6722";
        kagohuyo();
    } else {
        text += "部門内の感染者（加護672を持つ職員）全員が特殊な殺人性パニックに陥る\n感染者達は職員" + name + "をターゲットにする\n";
    }
    if (sagyona == 1 || seihi == 0 || nefi <= 0) {
        text += "カウンターが減少"+T2+"\n部門内職員全員に感染する恐れがある\n1d（7-対象職員勇気ランク）で1が出た職員の加護欄に「672」を追加\nカウンター0→1\n";
        nefi = 1;
    }

}

function g683() {
    gene = "683 古びた刀";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
    rankk = 5;
    rank();
    seihihan();
    if (irai == 1) {
        irana2 = "装備";
        text += "魚歌水心を装備した（赤近距離武器）\n詳細はエンサイクロペディア1ページ目の「能力詳細ページ」を参照\n";
    } else {
        if (sagyona == 2) {
            text += "この作業は装備作業に置き換わっています\n";
            peti = 0;
            keikenti = 0;
        } else {
            text += "追加で5ダメージ受ける\n「理解」を所持していない場合カウンターが減少\n";
            if (seihi == 1) {
                text += "「理解」を2取得する\n";
            }
        }
    }

    if (nefi <= 0) {
        text += "古びた刀は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }

}

function g696() {
    gene += "らんだ";
    sase = [[1, 1, 1, 0.5, 0.5], [1.5, 1.5, 2, 2, 2], [0.5, 0.5, 0.5, 0.5, 0.5], [1.5, 1.5, 1.5, 2, 2]];
    rankk = 2;
    rank();
    seihihan();

    if (t696 == 1) {
        text += "白10ダメージ\n";
        t696 = 0;
    }
    sykasan(696, 3, 0);
    if (seihi == 1) {
        kensaku = kekka[12].indexOf('696');
        text += "職員" + name + "は加護を受け取っ"+T3+"\n作業成功率+5\n";
        if (kensaku == -1) {
            kagohuti = "696";
            kagohuyo();
        }
    }
}

function g701() {
    gene = "701 抑止の魔法札";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0.5, 0.5, 0.5, 0.5, 0.5], [1, 1, 1, 1, 1]];
    rankk = 3;
    rank();
    seihihan();
    if (t701 == 0) {
        if (irai == 1) {
            irana2 = "依頼";
            text += "タロットシリーズの1体のカウンターを初期値に戻す\n他部門も選択可能\n対価としてこの職員はその日1日経験値を得られ"+T4+"\n";
            t701 = 1;
        } else {
            if (sagyona == 0) {
                text += "依頼作業に置き換わって"+T5+"\n";
                peti = 0;
                keikenti = 0;
            }
        }
    }

}

function g702() {
    gene += "誘う盃";
    sase = [[0.5, 1, 1.5, 1.5, 2], [0.5, 0.5, 1, 1.5, 1.5], [0, 0.5, 0.5, 1, 1], [1, 1.5, 1.5, 2, 2]];

    rankk = 3;
    rank();
    seihihan();

    if (sagyona == 2 && seihi == 1) {
        text += "盃の中の酒を少量くれ"+T3+"\n";
        text += "HP15回復\n";
        t702 = 1;
    }

    if (kekka[6] == "男" || kekka[6] == "男性" || seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (kekka[10] <= 3 && t702 == 1) {
        sibou = 0;
        text += "カウンターが1増加"+T2+"\n";
        nefi += 1;
    }

    if (nefi <= 0) {
        text += "誘う盃は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
    }

    t702 = 0;
}

function g703() {
    gene = "703 E・M・E・Lオプティマイザー";
    peti = 0;

    if (sagyona == 4) {
        text += "任意のステータス1つ選択\n";
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
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g704() {
    gene = "704 歪な切り札";
    peti = 0;

    if (sagyona == 4) {
        sykensaku(704);
        if (sykekka == 0) {
            ransu = Math.floor(Math.random() * 13 + 1);
            text += ransu + "\n";
            if (ransu == 1) {
                text += "スペードのA\n作業成功率+10、与ダメ+10\nこのツールは返却が可能\n";
                sykasan(704, 3, 1);
                t704 = syid;
                setTimeout(g7042, 1800000);
            } else {
                if (ransu == 12) {
                    text += "スペードのQ\n▼職員" + name + "は"+Tpani+"\n";
                    pani = 1;
                    sykasan(704, 3, 0);
                } else {
                    text += "スペードのAでもQでもないカード\n作業成功率+5、与ダメ+5\nこのツールは返却が可能\n";
                    sykasan(704, 3, 3);
                    t704 = syid;
                    setTimeout(g7042, 1800000);
                }
            }
        } else {
            text += "この職員は既に所持しています\n";
        }

    } else {
        if (sagyona == 5) {
           
            sykensaku(704);
            if (sykekka != 0) {
                text += "ツールを返却"+T2+"\n";
                if (sykekka == 2) {
                    sibou = 0;
                } else {
                    if (sykekka == 4) {
                        text += "▼職員" + name + "は"+Tpani+"\n";
                        pani = 1;
                    }
                }
                sykasan(704, 3, 0);
            } else {
                text += "この職員は所持していません\n";
            }
            
        } else {
            text += "ツール型の作業は「使用」"+T1+"\n";

        }
    }

}

function g7042() {
    console.log('起動');
    syconc = syconk.indexOf(704);
    sykekka = sycon[t704][syconc][1];
    if (sykekka != 0) {
        if (sykekka == 1) {
            sycon[t704][syconc][1] = 2;
        } else {
            if (sykekka == 3) {
                sycon[t704][syconc][1] = 4;
            }
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
            text += "▼職員" + name + "は甘菓子人形狙撃兵にかじりつい"+T3+"\nHPSP20回復\nカウンターが減少"+T2+"\n";
            nefi -= 1;

        }
    }

    if (nefi <= 0) {
        text += "甘菓子人形狙撃兵は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }

    }

function g708() {
    gene = "708 冥府の大河";
    sase = [[0, 0, 0, 0, 0.5], [0, 0.5, 1, 1, 1.5], [0, 0, 0, 0.5, 0.5], [0.5, 1, 1, 1, 0.5]];
    rankk = 5;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('708');
    if (kensaku == -1) {

        if (seihi == 1 && kensaku == -1) {
            text += "職員" + name + "は「朽ちた欠片」を得"+T3+"\n作業時ダイス+1\n";
            t708 = tt12;
            kagohuti = "708";
            kagohuyo();
        }






    }
}

function g709() {
    gene += "戦創の覇車";
    sase = [[2, 2, 1, 1, 0.5], [2, 1.5, 2, 1.5, 0.5], [1.5, 1.5, 1.5, 1.5, 0.5], [1, 1, 1, 1, 0.5]];
    rankk = 5;
    rank();
    seihihan();
    nemax = 4;
    if (irai == 1 || t709 != -1) {
        irai = 1;
        peti = 0;
        keikenti = 0;
        irana2 = "勝負";
        if (t709 != syid) {
            text += "職員" + name + "は勝負を挑まれた職員では"+T4+"\n";
        } else {
            t709 = -1;
            ransu = Math.floor(Math.random() * 100 + 1);
            kari = ransu;
            ransu = Math.floor(Math.random() * 100 + 1);
            kari2 = ransu;
            text += "職員出目：" + kari + "　相手出目：" + kari2 + "\n";
            if (kari >= kari2 + 1) {
                text += "職員" + name + "は勝利"+T2+"\nギフトを入手\nカウンターが1増加"+T2+"\n";
                nefi += 1;
            } else {
                ransu = Math.floor(Math.random() * 100 + 1);
                kari = ransu;
                ransu = Math.floor(Math.random() * 100 + 1);
                kari2 = ransu;
                text += "2回目：職員出目：" + kari + "　相手出目：" + kari2 + "\n";
                if (kari >= kari2 + 1) {
                    text += "職員" + name + "は勝利"+T2+"\nギフトを入手\nカウンターが1増加"+T2+"\n";
                    nefi += 1;
                } else {
                    ransu = Math.floor(Math.random() * 100 + 1);
                    kari = ransu;
                    ransu = Math.floor(Math.random() * 100 + 1);
                    kari2 = ransu;
                    text += "3回目：職員出目：" + kari + "　相手出目：" + kari2 + "\n";
                    if (kari >= kari2 + 1) {
                        text += "職員" + name + "は勝利"+T2+"\nギフトを入手\nカウンターが1増加"+T2+"\n";
                        nefi += 1;
                    } else {
                        text += "職員" + name + "は敗北"+T2+"\nカウンターが減少"+T2+"\n";
                        nefi -= 1;
                        sibou = 0;
                    }
                }
            }
        }
    } else {
        if (kurike == 1 || fanke == 1) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
        if (seihi == 1) {
            sykasan(709, 0, 1);
            sykensaku(709);
            if (sykekka >= 2) {
                text += "職員" + name + "は勝負を挑まれ"+T3+"\n次の作業が強制的に特殊作業になる\n";
                t709 = syid;
                sykasan(709, 3, 0);
            }
        }
    }
    if (nefi <= 0) {
        text += "戦創の覇車は"+Tdassou+"\nカウンター0→4\n";
        nefi = 4;
    }
}

function g710() {
    gene = "710 過去を穿つ狙撃手";
    sulo = 10;
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [0.5, 1, 1, 0.5, 0.5]];


    rankk = 3;
    rank();
   


    seihihan();

    if (irai == 1) {
        irana2 = "依頼";
        text += "依頼の対価は依頼職員に80黒ダメージ\n依頼前に発砲宣言をしていない場合は不発\n5回目の依頼でランダムな相手のカウンター減少\n";
    } else {
    if (seihi == 0) {
        text += "カウンター減少\n";
        nefi -= 1;
    }
    if (sagyona == 2) {
        text += "観測レベルが１の場合80黒ダメージ\n過去を穿つ狙撃手の愛着は依頼に置き換わっているので特殊能力等で強制的に愛着を選んだ場合を除き作業を決め直してください。\n";
        peti = 0;
        keikenti = 0;
    }

    }
        if (nefi <= 0) {
            text += "部門内のランダムな職員1名に80黒ダメージ\n";
            text += "カウンター0→2\n";
            nefi = 2;
        }
}

function g712() {
    gene += "毒蜘蛛蛇";
    sase = [[1, 1.5, 2, 1, 1.5], [1.5, 1.5, 1, 2, 0.5], [1, 0.5, 0.5, 0, 0], [1.5, 2, 2, 1, 1]];
    rankk = 4;
    rank();
    seihihan();
    gift = 1;
    if (irai == 1 || t7124 == 1) {
        irai = 1;
        irana2 = "救出";
        ransu = Math.floor(Math.random() * 6 + 1);
        text += "出目：" + ransu + "\n";
        if (ransu >= 5) {
            text += "救出成功\nギフト入手\n";
            t7124 = 0;
            t712 += 1;
            if (t712 == 3) {
                text += "\nEiGO取得\n\n";
            }
        } else {
            text += "救出失敗\n";
            t7122 += 1;
            if (t7122 >= 3) {
                text += "▼職員" + t7123 + "は死んで"+T5+"\n職員" + name + "に10赤ダメージ\n";
                t7122 = 0;
                t7124 = 0;
            }
        }
    } else {
        if (sagyona == 2) {
            ransu = Math.floor(Math.random() * 100 + 1);
            if (ransu <= 30) {
                text += "職員" + name + "は囚われ"+T3+"\n次の作業は全て救出となる\n";
                t7122 = 0;
                t7123 = name;
                t7124 = 1;
            }
        }
    }
}

function g715() {
    gene += "地底の夢追い人";
    sase = [[0, 0.5, 0.5, 0, 0], [1.5, 1.5, 1, 1, 1], [0.5, 0.5, 0.5, 1, 1], [0, 0.5, 0.5, 0.5, 0.5]];
    rankk = 2;
    rank();
    seihihan();

    if (seihi == 1) {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 2) {
            kensaku = kekka[12].indexOf('715');
            if (kensaku == -1) {
                text += "職員" + name + "に「舞台裏の加護」が付与され"+T3+"\n作業成功率+2、IP-O-01-717の眷属化解除時のHPSP減少無効（その場合加護は消える）\n";
                kagohuti = "715";
                kagohuyo();
            }
        }
    }
    if (sagyona == 0) {
        sykasan(715, 0, 1);
        sykensaku(715);
        if (sykekka >= 2) {
            kari = sykekka - 1;
            if (kari >= 7) {
                kari = 7;
            }
            daideme1 = kari;
            daideme2 = 2;
            daisu();
            text += "職員" + name + "のHPSP" + daideme4 + "回復\n";

        }
    }

}

function g717() {
    gene += "天空の語り人";
    sase = [[0, 0.5, 0.5, 1, 1], [0, 0.5, 0.5, 1, 1], [0, 0, 0.5, 0.5, 0.5], [0, 0.5, 0.5, 0.5, 0.5]];
    rankk = 5;
    rank();
    seihihan();

    if (seihi == 1) {
        if (sagyona == 1 || sagyona == 2) {
            kensaku = kekka[12].indexOf('717');
            kensaku2 = kekka[12].indexOf('7172');
            if (kensaku == -1 &&kensaku2==-1) {
            text += "「銀河の光」を付与され"+T3+"\n正義ランク+1\n";
                kagohuti = "717";
                kagohuyo();
            }
        }
        if (sagyona == 0 || sagyona == 3) {
            kensaku = kekka[12].indexOf('7172');
            kensaku2 = kekka[12].indexOf('717');
            if (kensaku == -1 && kensaku2 == -1) {
            text += "「停滞の闇」を付与され"+T3+"\n自制ランク+1\n";
                kagohuti = "7172";
                kagohuyo();
            }
        }
    }
    if (nefi <= 0) {
        text += "天空の語り人は"+Tdassou+"\nカウンター0→4\n";
        dassou = 1;
        nefi = 4;
    }

}

function g718() {
    gene += "悔いる青山羊";
    sase = [[0, 0, 1, 2, 2], [0.5, 0.5, 1.5, 2, 2], [2, 2, 0.5, 0.5, 2], [0, 0.5, 1, 1, 1]];
    rankk = 4;
    rank();
    seihihan();
    nemax = 2;
    if (irai == 1) {
        irana2 = "同行";
        ransu = Math.floor(Math.random() * 4 + 1);
        if (ransu == 1) {
            katit = "勇気";
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 1) {
                katit2 = "洞察";
            }
            if (ransu == 2) {
                katit2 = "自制";
            }
            if (ransu == 3) {
                katit2 = "正義";
            }
        }
        if (ransu == 2) {
            katit = "洞察";
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 1) {
                katit2 = "勇気";
            }
            if (ransu == 2) {
                katit2 = "自制";
            }
            if (ransu == 3) {
                katit2 = "正義";
            }
        }
        if (ransu == 3) {
            katit = "自制";
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 1) {
                katit2 = "勇気";
            }
            if (ransu == 2) {
                katit2 = "洞察";
            }
            if (ransu == 3) {
                katit2 = "正義";
            }
        }
        if (ransu == 4) {
            katit = "正義";
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 1) {
                katit2 = "勇気";
            }
            if (ransu == 2) {
                katit2 = "洞察";
            }
            if (ransu == 3) {
                katit2 = "自制";
            }
        }
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 1) {
            text += "悔いる青山羊が同行"+T2+"\n職員" + name + "の作業成功率+3\n鎮圧時ダメージ30まで肩代わり\n4d6の援護攻撃\n肩代わり分を消費するか1時間経過で同行は終わる\n同行中の職員が死亡するとカウンター減少\n同行時は他の職員は同行が行え"+T4+"\n\n対価として依頼職員の" + katit + "が初期値になる\n";
        }
        if (ransu == 2) {
            text += "悔いる青山羊が同行"+T2+"\n職員" + name + "の作業成功率+3\n鎮圧時ダメージ30まで肩代わり\n4d6の援護攻撃\n肩代わり分を消費するか1時間経過で同行は終わる\n同行中の職員が死亡するとカウンター減少\n同行時は他の職員は同行が行え"+T4+"\n\n対価として依頼職員の" + katit + katit2 + "が初期値になる\n";
        }
    } else {
        if (kekka[7] >= 5) {
            ransu = Math.floor(Math.random() * 50 + 1);
            text += "赤" + ransu + "ダメージ\n";
        }
        if (sagyona == 3) {
            text += "この作業は同行作業に置き換わって"+T5+"\nただし誰かに同行中の場合は通常の作業になる\n";
        }
        if (seihi == 0) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }
    if (nefi <= 0) {
        text += "悔いる青山羊は"+Tdassou+"\n部門内の最もランクの高い職員1名が死亡する\nカウンター0→2\n";
        nefi = 2;
    }
}

function g720() {
    gene += "偽装影";
    sase = [[1.5, 1.5, 1, 1, 1], [2, 1.5, 1.5, 1, 0.5], [2, 2, 1, 1, 1], [1.5, 1, 1, 0.5, 1]];
    rankk = 5;
    rank();
    seihihan();

    if (seihi == 1) {
        kensaku = kekka[12].indexOf('720');
        if (kensaku == -1) {
            kagohuti = "720";
            kagohuyo();
        }
    }
    if (kekka[7] <= 3 && seihi == 0) {
        sibou = 0;
    }
    if (seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "偽装影は"+Tdassou+"\nカウンター0→2\n";
        nefi = 2;
        dassou = 1;
        sibou = 0;
    }
}

function g721() {
    gene = "721 ほら男爵";
    sase = [[2, 2, 1.5, 1.5, 1], [2, 2, 1.5, 1.5, 1.5], [1.5, 1.5, 1, 1, 0.5], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();
    if (seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (nefi <= 0) {
        text += "ほら男爵は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (sagyona == 0) {
        if (kensaku != -1) {
            pani = 1;
            text += "▼職員" + name + "は自殺性"+Tpani+"\n加護欄の722は消去\n";
            kagokesi('722');
        } else {
            kagohuti = "722";
            kagohuyo();
        }
    }
        if (nefi <= 0) {
            text += "泥龍は"+Tdassou+"\n泥龍の作業に成功することでのみ鎮圧が可能\nカウンター0→2\n";
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
            text += "カウンターが減少"+T2+"\n";
            if (nefi == 1) {
                text += "星海渡る氷精は"+Tdassou+"\n▼職員" + name + "は氷漬けにされ"+T3+"\n氷精が鎮圧されるまで行動不能";
                dassou = 1;
            }
            nefi -= 1;
            if (nefi <= 0) {
                nefi = 2;
            }
        }
    } else {
        if (sagyona == 1 || sagyona == 3) {
            ransu = Math.floor(Math.random() * 10 + 1);
            if (ransu == 1) {
                text += "カウンターが減少"+T2+"\n";
                if (nefi == 1) {
                    text += "星海渡る氷精は"+Tdassou+"\n▼職員" + name + "は氷漬けにされ"+T3+"\n氷精が鎮圧されるまで行動不能";
                    dassou = 1;
                }
                nefi -= 1;
                if (nefi <= 0) {
                    text += "カウンター0→2\n";
                    nefi = 2;
                }
            }
        }

    }
}

function g731() {
    gene += "『コンタラ』";
    sase = [[0, 0, 0, 0, 0], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [0, 0, 0, 0, 0]];
    rankk = 3;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('731');
    kensaku2 = kekka[12].indexOf('7312');
    if (seihi == 0 && kensaku != -1 && kensaku2 == -1) {
        text += "職員" + name + "のギフト、加護による作業成功率以外の数値が逆転"+T2+"\n";
        kagokesi('731');
        kagohuti = "7312";
        kagohuyo();
    }
    if (seihi == 1) {
        if (kensaku == -1 && kensaku2 == -1) {
            text += "職員" + name + "にマーキングが付与され"+T3+"\n";
            kagohuti = "731";
            kagohuyo();
        }
    }
    if (nefi <= 0) {
        text += "全職員にマーキングがつい"+T3+"\nカウンター0→2\n";
        nefi = 2;
        tt12 += ",731";
        for (i = 0; keiti.length; i++) {
            nana2 = i ;
            nana = "se" + nana2 + "8";
            document.hanteisuru[nana].value += ",731";
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
    if (nefi <= 0) {
        sibou = 0;
        text += "カウンターが３まで回復\n部門内の全職員のHPSP全回復\n";
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

function g767() {
    gene += "くぎ";
    sase = [[1, 1, 1, 1, 1.5], [2, 1.5, 1.5, 1.5, 1.5], [0.5, 0.5, 1, 1.5, 1.5], [0, 0, 0, 0, 0]];
    rankk = 1;
    rank();
    seihihan();

    if (seihi == 1 && sagyona == 1) {
        ransu = Math.floor(Math.random() * 3 + 1);
        text += "職員" + name + "のSPが" + ransu + "回復"+T2+"\n";
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (seihi == 1 && sagyona == 3) {
        ransu = Math.floor(Math.random() * 3 + 1);
        text += "職員" + name + "のSPが" + ransu + "減少"+T2+"\n";
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        if (kekka[10] <= 2) {
            text += "職員" + name + "のSPが10減少"+T2+"\n";
        } else {
            text += "職員" + name + "のSPが5減少"+T2+"\n";
        }
        text += "カウンター0→3\n";
        nefi = 3;
    }
}

function g772() {
    gene += "時狩りのギャンブラー";
    sase = [[1, 1, 1.5, 1, 1.5], [2, 2, 1, 1, 1], [1, 1, 0.5, 1.5, 2], [1, 1, 1, 0.5, 0]];
    rankk = 3;
    rank();
    seihihan();
    if (sagyona == 3) {
        text += "ロシアンルーレットを行っ"+T3+"\n";
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu != 6) {
            ransu = Math.floor(Math.random() * 6 + 1);
            text += "職員" + name + "のHPが" + ransu + "回復"+T2+"\n";
        } else {
            sibou = 0;
        }
    }
    if (sagyona == 1) {
        text += "時狩りのギャンブラーは"+Tdassou+"\n";
    }
}

function g775() {
    gene += "夢幻泡沫りた～んず";
    sase = [[0, 0, 0, 1, 1], [0, 0, 0, 1, 1], [0, 0, 0, 0.5, 0.5], [2, 2, 2, 1, 1]];
    rankk = 5;
    rank();
    seihihan();

    if (kekka[9] <= 3) {
        sibou = 0;
    } else {
        if (seihi == 1) {
            kensaku = kekka[12].indexOf('775');
            if (kensaku == -1) {
                text += "「浮世の彼方」を付与され"+T3+"\n鎮圧ダイス2増加\n死亡、眷属化の解除で消失\n保持者の死亡・パニックで夢幻泡沫りた～んずは脱走する\n";
                kagohuti = "775";
                kagohuyo();
            }
        }
    }
    if (nefi <= 0) {
        text += "夢幻泡沫りた～んずは"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
    }

}

function g776() {
    gene += "欠けない月と六連星";
    sase = [[1, 1, 1, 1, 1], [0.5, 0.5, 0.5, 0.5, 0.5], [1, 1, 1, 1, 1], [1.5, 1.5, 1.5, 1.5, 1.5]];
    rankk = 4;
    rank();
    seihihan();

    if (sagyona == 1) {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 1) {
            text += "酒（ジュース）を貰っ"+T3+"\nSP20回復\n10分間行動不能\n";
        }
        if (ransu == 2) {
            text += "月餅を貰っ"+T3+"\nHP20回復\n10分間行動不能\n";
        }
        if (seihi == 0) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    } else {
        if (kekka[9] >= 4) {
            ransu = Math.floor(Math.random() * 100 + 1);
            if (ransu <= 75) {
                text += "▼職員" + name + "は"+Tpani+"\nカウンターが減少"+T2+"\n";
                nefi -= 1;
            } else {
                if (seihi == 0) {
                    text += "カウンターが減少"+T2+"\n";
                    nefi -= 1;
                }
            }
        } else {
            if (seihi == 0) {
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
        }
    }
    if (nefi <= 0) {
        text += "欠けない月と六連星は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
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
        text += "堕天道様は"+Tdassou+"\nカウンター0→4\n";
        dassou = 1;
        nefi = 4;
    }

}

function g800() {
    gene += "0";
    sase = [[0, 1, 1, 1, 1], [0, 1, 1, 1, 1], [0, 1, 1, 1, 1], [0, 1, 1, 1, 1]];
    rankk = 5;
    rank();
    seihihan();
    nemax =2;
    if (nefi <= 0) {
        if (kekka[8] == 4 || kekka[8] == 5 || kekka[9] == 4 || kekka[9] == 5 || kekka[10] == 4 || kekka[10] == 5 || kekka[11] == 4 || kekka[11] == 5 ) {
            text += "職員" + name + "のステータスが初期値になった（1日限り）\nこの職員の次の作業は0になる\n";
        } else {
            pani = 1;
            text += "▼職員" + name + "は"+Tpani+"\n";
        }
        text += "カウンター0→2\n";
        nefi = 2;
    }
    if (kekka[7] >= 4) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
        ransu = Math.floor(Math.random() * 5 + 1);
        if (ransu == 5) {
            pani = 1;
            text += "▼職員" + name + "は"+Tpani+"\n";
        }
    }
    if (kekka[7] <= 3) {
        text += "職員" + name + "のHPSP10回復\nカウンターが1増加"+T2+"\n";
        nefi += 1;
        ransu = Math.floor(Math.random() * 10 + 1);
        if (ransu == 1) {
            sibou = 0;
        }
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
        irai = 1;
        irana2 = "救出";
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
            text += "救出成功\n救出した側が「攻」救出された側が「受」となる\n互いに「番」になりギフト入手\n二人の作業成功率+15\n他に番がいる者が救出した場合は番になら"+T4+"\n";
        } else {
            text += "救出失敗\n囚われた職員、救出しに来た職員共に部屋から出ず消失する\n";
            sibou = 0;
        }
    } else {
    if (seihi == 0) {
        text += "▼職員" + name + "は魅了され収容室から出られなくなっ"+T3+"\n全ての作業が「救出」になる\n";
        kari801 = 1;
    }
    }



}

function g802() {
    gene += "殻無し公女";
    sase = [[0, 0, 0, 0, 0], [2, 2, 2, 1.5, 1.5], [0.5, 1, 1.5, 1.5, 1.5], [1.5, 1, 1, 1.5, 1.5]];
    rankk = 4;
    rank();



    seihihan();

    if (irai == 1) {
        irana2 = "依頼";
        seihi = 1;
        text += "殻無し公女が共に鎮圧を行う\n対価としてカウンターが1減少"+T2+"\n依頼完了時に自主的に収容室に戻る\n";
        nefi -= 1;
        if (nefi <= 0) {
            text += "依頼完了後、収容室に戻らず敵対する\nカウンター0→3\n";
            nefi = 3;
        }
    }




    if (sagyona == 1 && seihi == 0) {
        sibou = 0;
        text += "カウンターが最大値まで回復"+T2+"\n";
        nefi = 3;
    } else {
        if (sagyona == 1 && seihi == 1 && irai == 0) {
            text += "カウンターが回復"+T2+"\n";
            nefi += 1;

        }
    }

    if (sagyona !== 1 && seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (sagyona !== 0) {
        if (kekka[9] <= 3 && irai == 0) {
            sibou = 0;
        }
    } else {
        if (sagyona == 0) {
            text += "本能作業は依頼作業に置き換わっています。\n";
        }
    }

    if (nefi <= 0) {
        sibou = 0;
        text += "殻無し公女は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }

    if (sibou == 0) {
        text += "職員" + name + "は背後から忍び寄る棘に串刺しにされ"+T3+"\n";
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            text += "『だめよ、背後はちゃんと気にしてないと』\n";
        }
        if (ransu == 2) {
            text += "『騙されやすい人は大好きよ。こんなに血をくれるんだもの』\n";
        }
        if (ransu == 3) {

            if (kekka[6] == "男" || kekka[6] == "男性") {
                text += "『今更気づいても遅いのよ、" + name + "お兄様？』\n";
            } else {
                if (kekka[6] == "女" || kekka[6] == "女性") {
                    text += "『今更気づいても遅いのよ、" + name + "お姉様？』\n";
                } else {
                    text += "『今更気づいても遅いのよ、" + name + "様？』\n";
                }
            }


        }


    }

}

function g803() {
    gene += "「フロッグ探偵事務所」";
    sase = [[1.5, 1.5, 1.5, 1.5, 1.5], [0, 0, 0, 0, 0], [1, 1, 1.5, 1.5, 1.5], [1, 1, 1, 0.5, 0.5]];
    rankk = 4;
    rank();
    seihihan();

    //加護付き殺す　カウンターも減る
    kensaku = kekka[12].indexOf('803');
    if (kensaku != -1) {
        text += "「貴方の本性は、もうわかってるんでね。」\n";
        sibou = 0;
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    //依頼作業
    if (irai == 1) {
        irana2 = "依頼";
        text += "職員" + name + "は事件内容を伝え"+T3+"\n";
        text += "「おや。出番かな。」\n";
        text += "「フロッグ探偵」は依頼"+Tdassou+"\n";
        text += "ダイスは4d6で判定。HPは90。\n";
        text += "攻撃属性、耐性はエンサイクロペディアを参照。\n";
        text += "対価としてカウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    //本能作業成功加護
    if (sagyona == 0 && seihi == 1) {
        text += "「わざとだとしたら、とてもいい趣味をしているね。」\n";
        kagohuti = "803";
        kagohuyo();
    }

    //レベル3以上愛着作業失敗加護
    if (kekka[7] >= 3 && sagyona == 2 && seihi == 0) {
        text += "「騙そうなんて、なんとも。かわいらしい方だ。」\n";
        kagohuti = "803";
        kagohuyo();
    }

    //抑圧作業をする
    if (sagyona == 3) {
        //成功する
        if (seihi == 1) {
            //ランクで判断
            if (kekka[7] >= 3) {
                text += "議論は正式になりたっ"+T3+"\n";
                text += "「いやはや、参考になったよ。」\n";
                text += "カウンターが全回復"+T2+"\n";
                nefi = 3;
            } else {
                text += "議論は口喧嘩になっ"+T3+"\n";
                text += "「結局、何がしたいんだね。」\n";
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
            //失敗する
        } else {
            text += "議論は成り立たなかっ"+T3+"\n";
            text += "「時間の無駄だ。やれやれ」\n";
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }

    //脱走
    if (nefi <= 0) {
        text += "「フロッグ探偵」は"+Tdassou+"\nカウンター0→3\n";
        nefi = 3;
    }

}

function g804() {
    gene = "804 アスクレピオスの蛇";
    sase = [[1.5, 1.5, 1, 1, 1], [1, 1, 0.5, 0.5, 0.5], [1, 1, 1, 1, 1], [2, 2, 2, 2, 2]];
    rankk = 4;
    rank();
    seihihan();
    if (irai == 1) {
        irana2 = "依頼";
        text += "アスクレピオスの蛇が共に鎮圧を行う\n対価としてカウンターが1減少"+T2+"\n依頼完了時に自主的に収容室に戻る\n";
        nefi -= 1;
        if (nefi <= 0) {
            text += "依頼完了後、収容室に戻らず敵対する\nカウンター0→3\n";
            nefi = 3;
            if (t804 == 1) {
                text += "アスクレピオスの蛇の鎮圧完了時、吞まれていた職員は解放されHPSPが全回復する\n";
            }
        }
    } else {
        if (sagyona == 2) {
            text += "依頼作業に置き換わって"+T5+"\n";
            peti = 0;
            keikenti = 0;
        }
        if (seihi == 0) {
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 1) {
                if (t804 == 0) {
                    text += "▼職員" + name + "は丸呑みにされ"+T3+"\n";
                    t804 = 1;
                } else {
                    text += "▼職員" + name + "は丸呑みにされ"+T3+"\n前に呑まれていた職員は死亡"+T2+"\n";
                    t804 = 0;
                }
            }
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 1) {
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
        }
        if (sagyona == 0 && seihi == 1 && t804 == 1) {
            text += "吞み込まれていた職員が吐き出され"+T3+"\n解放された職員のHPSP全回復\n";
        }
        if (nefi <= 0) {
            text += "依頼完了後、収容室に戻らず敵対する\nカウンター0→3\n";
            nefi = 3;
            if (t804 == 1) {
                text += "アスクレピオスの蛇の鎮圧完了時、吞まれていた職員は解放されHPSPが全回復する\n";
            }
        }

    }


}

function g808() {
    gene += "殺さる強欲";
    sase = [[1, 1, 0.5, 0.5, 0], [2, 2, 2, 2, 2], [1, 1, 1, 1, 1], [1, 1, 1, 0.5, 0.5]];
    rankk = 4;
    rank();
    seihihan();

    kagoche("808", 1);
    if (kensakuC == -1) {
        sykasan(808, 3, 0);
        t808 = 0;
        text += "職員" + name + "は「渇望」という標的状態になっ"+T3+"\n死亡すると消える\n";
        kagohuti = "808";
        kagohuyo();
    }
    kensaku = kekka[12].indexOf('808');
    if (sagyona == 0 && kensaku != -1) {
        sykasan(808, 0, 1);
    }
    if (sagyona == 2) {
        sibou = 0;
    }
}

function g809() {
    gene = "809 蒼天";
    sase = [[0, 0.5, 1, 1, 0.5], [0, 0, 0.5, 0.5, 0.5], [0, 0, 0, 0.5, 0.5], [0, 0, 0.5, 1, 1]];
    rankk = 5;
    rank();
    seihihan();
    if (seihi == 1) {
        text += "3人までは「探求心」が付与され、4人目以降はHPSP最大値+10、HPSP20回復\n探求心はHPSP最大値+10、出目+5、加護欄に手動で「809」を追加\n";
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (nefi <= 0) {
        text += "探求心を持つ職員は眷属「蒼天の探究者」になる\nカウンター0→5\n";
        nefi = 5;
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
        if (nefi <= 0) {
            text += "熊猫師範は"+Tdassou+"\nカウンター0→2\n";
            dassou = 1;
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
        text += "カウンター減少\n";
        if (nefi == 1) {
            text += "虚勢の才覚は"+Tdassou+"\n";
            dassou = 1;
        }
        nefi -= 1;
        if (nefi <= 0) {
            text += "カウンター0→3\n";
            nefi = 3;
        }

    } else {
        text += "職員" + name + "の加護欄に「818」を記入\nこの職員以外の職員の加護欄から「818」を消去\nカウンター回復\n";
        nefi = 3;
        kagohuti = "818";
        kagohuyo();
    }

}

function g820() {
    gene += "揺らぐ深更";
    sase = [[0.5, 0.5, 0.5, 0, 0], [1, 1, 1, 0.5, 0], [1, 1, 1, 1.5, 1.5], [2, 2, 1.5, 1.5, 1]];
    rankk = 5;
    rank();
    seihihan();
    pale = 1;

    if (sagyona == 0 || sagyona == 2 || sagyona == 3) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (sagyona == 3) {
        text += "HP10%のダメージ\n";
    }

    if (nefi <= 0) {
        text += "揺らぐ深更は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
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
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
                if (nefi <= 0) {
                    daideme1 = 1;
                    daideme2 = 6;
                    daisu();
                    text += "夢見がちなうさちゃんは"+Tdassou+"\nカウンター0→3\n6体脱走した内の" + daideme4 + "体は自動鎮圧された、ただし6の場合は全て鎮圧失敗\n";
                    nefi = 3;
                    dassou = 1;
                }
            }
        }
    }



}

function g822() {
    gene += "柘榴石のカーバンクル";
    sase = [[1, 1, 1, 0.5, 0.5], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1.5, 1.5, 1.5, 1, 1]];
    rankk = 3;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('822');
    if (kensaku == -1 && sagyona == 0 && seihi == 1) {
        text += "職員" + name + "の自制+15\n";
        kagohuti = "822";
        kagohuyo();
    }
    kensaku2 = kekka[12].indexOf('8222');
    if (kensaku2 != -1 && sagyona == 2) {
        text += "8222の加護による自制-15が消え"+T3+"\n";
        kagokesi('8222');
    }
    if (sagyona == 2 && seihi == 1) {
        text += "柘榴石のカーバンクルに懐かれ"+T3+"\n";
        sykasan(822, 0, 1);
    }
}

function g828() {
    gene = "828 八目の洞穴";
    sase = [[1, 1, 0.5, 0.5, 0], [0.5, 0.5, 0.5, 0.5, 0.5], [2, 2, 2, 2, 2], [1, 1, 1, 1, 1]];
    rankk = 3;
    rank();
    seihihan();

    text += "職員" + name + "はトンネルに入っ"+T3+"\n";

    // 828 を持っていると
    kensaku = kekka[12].indexOf('828');
    if (kensaku!=-1) {
        sibou = 0;
        text += "また、関係者も共に入っ"+T3+"\n関係者は特殊な徘徊性"+Tpani+"\nこのパニック職員の加護欄に「828」を追加\n鎮圧後作業成功率-10、新たに同部門からランダムに1名選ばれ「関係者」となる\n";
       
    } else {

        // 828 を持っていないと
        //自制3以下、勇気3以上
        if (kekka[10] <= 3 || kekka[8] >= 3) {
            text += "HP5ダメージ\n▼職員" + name + "は特殊な徘徊性"+Tpani+"\n鎮圧後作業成功率-10\n";
            
                text += "また、同部門からランダムに1名選ばれ「関係者」となる\nただし、すでに828と関係者が一組出来ている場合は「828」は無効になり関係者もでき"+T4+"\n";
               //加護828を作業職員に付与　
                kagohuti = "828";
                kagohuyo();
            
        }

    }

}

function g826() {
    gene += "灯籠の咲く溟";
    sase = [[1, 1, 1.5, 2, 2], [1, 0.5, 1.5, 0.5, 1], [0.5, 1, 1, 0.5, 1.5], [1.5, 1.5, 1.5, 2, 2]];
    rankk = 5;
    rank();
    pale = 1;
    seihihan();
    kensaku = kekka[12].indexOf('826');
    if (kensaku == -1 && seihi == 0) {
        if (t826 == 0) {
            t826 = 1;
        } else {
            if (t826 == 1) {
                t826 = 2;
            } else {
                pani = 1;
                text += "『静かにしろって言ったのに』\n";
                text += "▼職員" + name + "はシャットダウン性"+Tpani+"\n";
                t826 = 0;
            }
        }
    } else {
        if (seihi == 1) {
            t826 = 0;
        }
    }


    kensaku = kekka[12].indexOf('826');
    if (kensaku == -1 && seihi == 1) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            text += "『一緒に仲間に祈りを捧げてほしい』\n";
        }
        if (ransu == 2) {
            text += "『見ててもいいけど、静かにしてくれよな』\n";
        }
        if (ransu == 3) {
            text += "『俺の仲間がここで泳いでるんだ』\n";
        }
        text += "職員" + name + "は灯籠を受け取った。SPが+20される。\n";
        kagohuti = "826";
        kagohuyo();
    } else {
        if (kensaku != -1 && seihi == 0) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        } else {
            if (kensaku != -1 && seihi == 1) {
                text += "▼職員" + name + "のSPが20回復"+T2+"\n";


            }
        }
    }

    if (nefi <= 0) {
        text += "▼灯籠から海の生物が飛び出し、職員に憑依した。灯籠を持つ部門内の職員は【削除済み】の記憶に変化する。\n";
        text += "1d6を振り変化する海の生物を決定すること。\nカウンター0→4\n";
        nefi = 4;

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
            text += "職員" + name + "はながれぼしの欠片を付与され"+T3+"\nこの職員の加護欄に「829」を追加\n作業、鎮圧の出目+7\n";

            kensaku = kekka[12].indexOf('829');
            if (kensaku == -1) {
                kagohuti = "829";
                kagohuyo();
            }

        }
    }

    }

function g830() {
    gene += "夜祭花火";
    sase = [[0.5, 0.5, 0.5, 0.5, 0.5], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [2, 2, 2, 2, 2]];
    rankk = 1;
    rank();
    seihihan();

    if (sagyona == 0 || sagyona == 2) {
        if (seihi == 1) {
            kensaku = kekka[12].indexOf('830');
            if (kensaku == -1) {
                text += "職員" + name + "は「花火の加護」を得る\n1時間毎にSP5回復\n死亡時カウンター減少\n";
                kagohuti = "830";
                kagohuyo();
            }
        }
    }
    if (sagyona == 3) {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 1) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }
    if (nefi <= 0) {
        text += "部門全域に花火が打ち上がっ"+T3+"\n配属職員全員に5赤ダメージ、SP10回復\nただしカウンター0になった時点で誰も死亡していなかった場合は何も起き"+T4+"\nカウンター0→5\n";
        nefi = 5;
    }
}

function g831() {
    gene += "融和のオリーブ畑";
    sase = [[1.5, 1.5, 1.5, 1.5, 1.5], [1.5, 1.5, 0, 0, 0], [1, 1, 1, 0, 0], [2, 2, 2, 2, 2]];
    rankk = 3;
    rank();
    seihihan();

    if (irai == 1 || t8312 != -1) {
        irana2 = "和解";
        text += "職員" + name + "の作業成功率+5\nHPSPが職員" + t831 + "と同じだけ回復\nカウンターが減少"+T2+"\n▼職員" + t831 + "は死んで"+T5+"\n";
        nefi -= 1;
        t831 = "";
        t8312 = -1;
    }

    if (sagyona == 3) {
        text += "職員" + name + "はオリーブ畑に捕らわれ"+T3+"\n捕らわれている際の作業は全て「和解」になる\n";
        t831 = name;
        t8312 = syid;
    }
    if (nefi <= 0) {
        text += "融和のオリーブ畑は"+Tdassou+"\nカウンター0→2\n";
        nefi = 2;
    }

}

    function g839() {
        gene = "839 星堕つる聲";
        sase = [[2, 2, 2, 2, 2], [2, 2, 1.5, 1, 1], [2, 2, 1.5, 1, 1], [2, 2, 1, 0.5, 0]];
        rankk = 5;
        rank();
        seihihan();
        if (seihi == 0) {
            text += "作業職員にSP30ダメージ、それ以外の職員にSP15ダメージ\n";
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
        if (sagyona == 0) {
            text += "▼職員" + name + "は"+Tpani+"\n鎮圧時浸食+1\n";
            pani = 1;
        }
        if (nefi <= 0) {
            text += "星堕つる聲は"+Tdassou+"\nカウンター0→2\n";
            dassou = 1;
            nefi = 2;
        }

    }

function g838() {
    gene += "いきたがり";
    sase = [[1.5, 1.5, 1, 1, 1], [2, 2, 2, 1.5, 1.5], [1.5, 1, 1, 1, 0.5], [1.5, 1.5, 1, 1, 0.5]];
    rankk = 4;
    rank();
    seihihan();

    if (seihi == 0) {
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    } else {
        if (sagyona == 2) {
            ransu = Math.floor(Math.random() * 3 + 1);
            if (ransu == 1) {
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
        }
    }
    if (nefi <= 0) {
        text += "いきたがりは話を始め"+T3+"\n";
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu == 1) {
            katit += "パニックになる";
        } else {
            katit += "何もない";
        }
        ransu = Math.floor(Math.random() * 3 + 1);
        if (ransu == 1) {
            katit2 += "パニックになる";
        } else {
            katit2 += "何もない";
        }
        text += "浸食値0～5職員："+katit+"\n浸食値5～10職員："+katit2+"\n浸食値11,12職員：パニックになる\n";
        ransu = Math.floor(Math.random() * 4 + 1);
        if (ransu == 1) {
            text += "殺人性パニック\n";
        }
        if (ransu == 2) {
            text += "徘徊性パニック\n";
        }
        if (ransu == 3) {
            text += "自殺性パニック\n";
        }
        if (ransu == 4) {
            text += "シャットダウン性パニック\n";
        }
        nefi = 1;
        text += "カウンター0→1\n";
    }

}

function g849() {
    gene = "849 楽園の永緑樹";
    sulo = 22;
    sase = [[0.5, 0.5, 0, 0.5, 1], [2, 1.5, 1, 1.5, 1.5], [0, 0, 0.5, 0.5, 0.5], [0.5, 1, 1, 1, 1.5]];


    rankk = 3;
    rank();
   
    kensaku = kekka[12].indexOf('849');
    kensaku2 = kekka[12].indexOf('8491');


    seihihan();
    if (sagyona == 2) {
        if (seihi == 1) {
            kagoche("849", 1);
            if (kensakuC == -1) {
                text += "職員" + name + "は果実を食べた。HPSP15回復\nこの職員の加護欄に「849」を記入\n";
                kagohuti = "849";
                kagohuyo();
            } else {
                if (kensaku == -1) {
                    text += "職員" + name + "と加護849の職員は最大HPの30％ダメージを受け"+T3+"\n加護欄から849を消去\n";
                    kagokesi('849');
                }
            }
        }
    }

    if (sagyona == 3) {
        text += "職員" + name + "は蛇に噛まれ"+T3+"\n現在かかっているバフデバフの一つを消す\n";
    }


}

function g872() {
    gene += "美味しいお肉屋さん";
    sase = [[1, 1, 1.5, 1.5, 2], [1.5, 1, 0.5, 1, 1.5], [0, 0, 0.5, 0.5, 0.5], [1, 1, 1, 1.5, 1.5]];
    rankk = 3;
    rank();
    seihihan();

    if (seihi == 1) {
        text += "職員" + name + "は肉を投げつけられ"+T3+"\n";
        ransu = Math.floor(Math.random() * 4 + 1);
        if (ransu == 1) {
            text += "牛肉\nHP4回復\n任意で使用可能、他の肉を取得すると上書きされる\n";
        }
        if (ransu == 2) {
            text += "豚肉\nSP3回復\n任意で使用可能、他の肉を取得すると上書きされる\n";
        }
        if (ransu == 3) {
            text += "鶏肉\nHP6回復\n任意で使用可能、他の肉を取得すると上書きされる\n";
        }
        if (ransu == 4) {
            text += "羊肉\nHP5回復\n任意で使用可能、他の肉を取得すると上書きされる\n";
        }
    }
    if (seihi == 0) {
        ransu = Math.floor(Math.random() * 100 + 1);
        if (ransu <= 45) {
            text += "職員" + name + "は肉切り包丁を投げつけられ"+T3+"\n";
            ransu = Math.floor(Math.random() * 6 + 1);
            if (ransu >= 4) {
                text += "包丁を受け止め"+T3+"\nSP5回復\n";
            } else {
                sibou = 0;
            }
        }
    }
    if (sagyona == 2) {
        t872 += 1;
    }
    if (nefi <= 0 || t872 >= 2) {
        text += "美味しいお肉屋さんは"+Tdassou+"\nカウンター0→1\n";
        nefi = 1;
        dassou = 1;
        t872 = 0;
    }
}

function g874() {
    gene = "874 心壊甘露";
    sase = [[0, 0.5, 0.5, 0.5, 1.5], [0, 1, 1, 1, 0.5], [0, 0, 0.5, 0.5, 1], [0, 0.5, 1, 0, 1.5]];
    rankk = 5;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('874');
    if (seihi == 1) {
        if (kensaku == -1) {
            text += "職員" + name + "は甘露を飲んだ\n作業成功率+10\n";
            kagohuti = "874";
            kagohuyo();
        } else {
            if (kurike == 1) {
                text += "カウンターが2減少"+T2+"\n";
                nefi -= 2;
            } else {
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
        }
    }

    if (nefi <= 0) {
        text += "全ての甘露を飲んだ職員が「とろける甘味」に変化"+T2+"\nカウンター0→3\n";
        nefi = 3;
    }
}

function g875() {
    gene += "インターネット";
    sase = [[0, 0.5, 1, 1.5, 2], [2, 1, 1, 1.5, 1.5], [1, 1, 1.5, 0.5, 1.5], [2, 2, 1.5, 1, 1.5]];
    rankk = 5;
    rank();
    seihihan();

    sykensaku(875);
    if (sykekka == 0 && seihi == 1) {
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu == 1) {
            text += "職員" + name + "のHP+10\n";
        }
        if (ransu == 2) {
            text += "職員" + name + "のSP+10\n";
        }
        if (ransu == 3) {
            text += "職員" + name + "の勇気+5\n";
        }
        if (ransu == 4) {
            text += "職員" + name + "の慎重+5\n";
        }
        if (ransu == 5) {
            text += "職員" + name + "の自制+5\n";
        }
        if (ransu == 6) {
            text += "職員" + name + "の正義+5\n";
        }
        kagohuti = "875";
        kagohuyo();
        sykasan(875, 3, 1);
    }
    if (seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "インターネットはパラレルワールドへと変化し"+Tdassou+"\n加護「875」を持つ職員1名を眷属にする\nカウンター0→4\n";
        nefi = 4;
        dassou = 1;
    }
}

function g877() {
    gene += "希望の指輪";
    peti = 0;

    if (sagyona == 4) {
        if (t8772 == 0) {
            sykasan(877, 0, 1);
            sykensaku(877);
            if (sykekka >= 3) {
                text += "職員" + name + "は自殺性"+Tpani+"\n";
                pani = 0;
                sykasan(877, 3, 0);
            } else {
                text += "職員" + name + "のHPSPが5分毎に7回復\n返却可能、返却時は作業項目から返却を選択する\n";
                kensaku = kekka[12].indexOf('877');
                if (kensaku == -1) {
                    kagohuti = "877";
                    kagohuyo();
                    t877 = name;
                    t8772 = syid;
                    setTimeout(g8772, 960000);
                }
            }
        } else {
            kari = t8772 ;
            katit = "se" + kari + "1";
            t877=document.hanteisuru[kari].value;
            text += "職員"+t877+"が使用中\n";
        }

    } else {
        if (sagyona == 5) {
            text += "希望の指輪を返却"+T2+"\n加護欄から「877」を消去する\n";
            kagokesi('877');
            t8772 = 0;
            t877 = "";
        } else {
        text += "ツール型の作業は「使用」"+T1+"\n";

        }
    }

}

function g8772() {
    kari = t8772 ;
    katit = "se" + kari + "8";
    karihako=document.hanteisuru[katit].value;
    kagoti = karihako.split(/,/);
    karihako = kagoti;
    kensaku = karihako.indexOf('877');
    if (kensaku != -1) {
        ketext = "職員" + t877 + "は死亡"+T2+"\n加護欄から「877」を消去する\n";
        document.hanteisuru['kekka'].value = ketext;
        t8772 = 0;
        t877 = "";
    }
    karihako = [];
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
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }


    if (kensaku != -1) {
        text += "金の太陽は"+Tdassou+"\n";
        dassou = 1;
        nefi = 0;
        sibou = 0;
    }
    if (nefi <= 0) {
        text += "銀の暴風は"+Tdassou+"\n金の太陽を装着している職員がいる場合はこちらも脱走する\nカウンター0→2\n";
        dassou = 1;
        if (kensaku != -1) {
            text += "『大災害』が発生"+T2+"\n部門内全職員パニック\n銀の暴風と金の太陽は収容室に戻っ"+T3+"\n";
        }
        nefi = 2;
    }
}

function g886() {
    gene += "ツギハギの司令塔";
    sase = [[2, 2, 2, 2, 2], [1.5, 1.5, 1, 0.5, 0.5], [2, 1.5, 1.5, 1, 1], [1.5, 1.5, 1, 1, 1]];
    rankk = 4;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('8861');
    kensaku2 = kekka[12].indexOf('8862');
    kensaku3 = kekka[12].indexOf('8863');
    kensaku4 = kekka[12].indexOf('8864');
    sykensaku(886);
    if (sykekka == 0) {
        if (kensaku3 != -1) {
            kagokesi('8863');
        }
        t8863 = 1;
        ransu = Math.floor(Math.random() * 4 + 1);
        text += "職員" + name + "は「指令」を受け取っ"+T3+"\n指令のある間は勇気正義+10、慎重自制-10\n実行失敗でカウンター減少、成功で指令解除\n指令完了時に加護欄から「886"+ransu+"」を消去する\n";
        if (ransu == 1) {
            kagohuti = "8861";
            kagohuyo();
            text += "\n";
            ransu = Math.floor(Math.random() * 3 + 1);
            text += "1番　作業成功" + ransu + "回\n「職員" + name + "へ。次に部屋の中で出会った者" + ransu + "名を喜ばせなさい。対象は人でないものも、無機物も含みます」\n";
            if (ransu == 1) {
                console.log('1-1:1');
                sykasan(886, 3, 1);
            }
            if (ransu == 2) {
                sykasan(886, 3, 3);
                console.log('1-2:3');
            }
            if (ransu == 3) {
                sykasan(886, 3, 6);
                console.log('1-3:6');
            }

        } else {
            if (ransu == 2) {
                kagohuti = "8862";
                kagohuyo();
                text += "\n";
                ransu = Math.floor(Math.random() * 3 + 1);
                kari = ransu;
                ransu = Math.floor(Math.random() * 4 + 1);
                if (ransu == 1) {
                    katit = "本能";
                    if (kari == 1) {
                        sykasan(886, 3, 10);
                        console.log('2a-1:10');
                    }
                    if (kari == 2) {
                        sykasan(886, 3, 12);
                        console.log('2a-2:12');
                    }
                    if (kari == 3) {
                        sykasan(886, 3, 15);
                        console.log('2a-3:15');
                    }
                }
                if (ransu == 2) {
                    katit = "洞察";
                    if (kari == 1) {
                        sykasan(886, 3, 19);
                        console.log('2b-1:19');
                    }
                    if (kari == 2) {
                        sykasan(886, 3, 21);
                        console.log('2b-2:21');
                    }
                    if (kari == 3) {
                        sykasan(886, 3, 24);
                        console.log('2b-3:24');
                    }
                }
                if (ransu == 3) {
                    katit = "愛着";
                    if (kari == 1) {
                        sykasan(886, 3, 28);
                        console.log('2c-1:28');
                    }
                    if (kari == 2) {
                        sykasan(886, 3, 30);
                        console.log('2c-2:30');
                    }
                    if (kari == 3) {
                        sykasan(886, 3, 33);
                        console.log('2c-3:33');
                    }
                }
                if (ransu == 4) {
                    katit = "抑圧";
                    if (kari == 1) {
                        sykasan(886, 3, 34);
                        console.log('2d-1:34');
                    }
                    if (kari == 2) {
                        sykasan(886, 3, 36);
                        console.log('2d-2:36');
                    }
                    if (kari == 3) {
                        sykasan(886, 3, 39);
                        console.log('2d-3:39');
                    }
                }
                text += "2番　作業固定" + kari + "回" + katit + "\n「職員" + name + "へ。" + kari + "回部屋に入る度に、何者に対しても同じことをしなさい。" + katit + "作業を手順の最初から最後まで、寸分の違いも無く行うこと」\n";

            } else {
                if (ransu == 3) {
                    kagohuti = "8863";
                    kagohuyo();
                    text += "\n";
                    ransu = Math.floor(Math.random() * 3 + 1);
                    text += "3番　鎮圧で攻撃" + ransu + "回命中\n「職員" + name + "へ。次に現れた悪しき愚者に対し、" + ransu + "回懲罰を行いなさい。容赦はしないように。そして逃げ出すこともないように」\n";
                    console.log('3');
                } else {
                    if (ransu == 4) {
                        kagohuti = "8864";
                        kagohuyo();
                        text += "\n";
            ransu = Math.floor(Math.random() * 3 + 1);
            kari = ransu * 30;
            text += "4番　" + kari + "分間行動禁止\n「職員" + name + "へ。青い光が" + ransu + "回瞬くまで、いついかなる場合においても決して動いてはなりません。指示が来ようとも、暴力が振りかかろうとも、決して」\n";
            sykasan(886, 3, 43);
            t886 = syid;
            t8862 = name;
            if (ransu == 1) {
                setTimeout(g8862, 1800000);
                console.log('4-1:43');
            }
            if (ransu == 2) {
                setTimeout(g8862, 3600000);
                console.log('4-2:43');
            }
            if (ransu == 3) {
                setTimeout(g8862, 5400000);
                console.log('4-3:43');
            }
        }
                }
            }
        }



    }



}

function g8862() {
    console.log('起動');
    syconc = syconk.indexOf(886);
    sykekka = sycon[t886][syconc][1];
    if (sykekka == 43) {
        ketext = "\n職員" + t8862 + "は指令を達成"+T2+"\n";
        document.hanteisuru['kekka'].value = ketext;
        console.log('OK');
        sykasan(886, 3, 0);

        t8862 = "";

kake2 = t886;
        kake3 = "se" + kake2 + "8";
        kari = document.hanteisuru[kake3].value;
        karihako = kari.split(/,/);
            kake = karihako.indexOf('8864');
        if (kake != -1) {
            karihako.splice(kake, 1);
            document.hanteisuru[kake3].value = karihako;
        }
    t886 = 0;
    }
    }


function g887() {
    gene += "子竜の群れ";
    sase = [[0.5, 0.5, 0.5, 0, 0], [0.5, 0.5, 1, 1, 1], [0, 0, 0, 0, 0], [1.5, 1.5, 2, 2, 2]];
    rankk = 2;
    rank();
    seihihan();
    nemax = 2;

    if (sagyona == 3) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
        if (nefi <= 0) {
            text += "1赤ダメージ\n";
        }
    }
    if (sagyona == 0 || sagyona == 2) {
        if (seihi == 1) {
            text += "職員" + name + "のSP5回復\nカウンターが1増加"+T2+"\n";
            nefi += 1;
        }
    }
    if (nefi <= 0) {
        text += "子竜の群れは"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
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
            text += "▼職員" + name + "に「瞳」が付与され"+T3+"\nSP-25自制-30\n瞳を持つ職員の死亡時カウンター減少\n";
            kagohuti = 888;
            kagohuyo();
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }

    }

    if (kekka[10] <= 4 && seihi == 0) {
        sibou = 0;
        if (kensaku != -1) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }
    if (nefi <= 0) {
        text += "想起の卵眼は"+Tdassou+"\n「瞳」を持つ職員は全員死亡し「イデアの雛」に変化"+T2+"\nカウンター0→3\n";
        dassou = 1;
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
        dassou = 1;
    }


}

function g891() {
    gene += "生物を最も憎んだ心臓";
    sase = [[2, 2, 2, 2, 2], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0]];
    rankk = 5;
    rank();
    seihihan();

    if (sagyona == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (sagyona == 1 || sagyona == 2) {
        if (seihi == 0) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }
    if (nefi <= 0) {
        text += "生物を最も憎んだ心臓は"+Tdassou+"\nカウンター0→2\n";
        nefi = 2;
        dassou = 1;
        kensaku = gnid.indexOf('347');
        if (kensaku != -1) {
            conc = con.map(function (value, index) { return value[0]; });
            conc2 = con.map(function (value, index) { return value[1]; });
            conc4 = conc.indexOf('347');
            kari = conc2[conc4];
            text += "\n生物を最も愛した心臓のカウンターが減少"+T2+"\n";
            kari -= 1;
            if (kari <= 0) {
                text += "生物を最も愛した心臓は"+Tdassou+"\nカウンター0→2\n";
                dassou = 1;
                kari = 2;
            }
            con[conc4][1] = kari;
        }
    }

}

function g894() {
    gene += "万雷の曲芸団";
    sase = [[1, 1, 0.5, 0.5, 0.5], [2, 2, 2, 2, 2], [0.5, 0.5, 0.5, 0, 0], [1, 1.5, 1.5, 2, 2]];
    rankk = 5;
    rank();
    seihihan();

    if (nefi <= 0) {
        text += "万雷の曲芸団は"+Tdassou+"\nカウンター0→3\n";
        nefi = 3;
    }
}

function g897() {
    gene = "897 何の変哲もないごく一般的なトイレ";
    peti = 0;

    

    if (sagyona == 4) {
        sykasan(897, 0, 1);
        sykensaku(897);
        kari = sykekka;
        text += "職員" + name + "の本能、自制+5\n";
        
            if (kari == 5) {
                text += "依存症状が発現"+T2+"\n全ての作業後に1d2を振り、2が出た場合はこの何の変哲もないごく一般的なトイレを使用しなければパニックになる\n";
               
            } else {
                if (kari >= 10) {
                    sibou = 0;
                    sykasan(897, 3, 0);
                } 
            }
        
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
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
        irana2 = "依頼";
        text += "対価：PiE-BOX5\n指定した部門内の全職員と脱走中の全ての存在にWAW相当の赤ダメージ\n";
    } else {
        if (sagyona == 2 && seihi == 1) {
            text += "▼職員" + name + "のHPが5回復\n";
        }
        if (seihi == 0) {
            text += "閃光弾が爆発し職員" + name + "は失明"+T2+"\n30分間洞察作業自動失敗\n";
        }
    }


}

function g900() {
    gene += "閲覧";
    peti = 0;

    if (sagyona == 4) {
        text += "収容している任意の幻i想体1体の観測レベルが4になる\n対象の脱走または特殊能力が発動する\n職員" + name + "のステータスが初期値になる\n";
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
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
        text += "職員" + name + "はバッタースタンドに立っ"+T3+"\n";
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
        text += "職員" + name + "はバッタースタンドに立っ"+T3+"\n";
        ransu = Math.floor(Math.random() * 6 + 1);
        if (ransu == 6) {
            text += "ホームラン\n部門内職員のSP全回復\n";
        } else {
            text += "が、何も起きなかった";
        }
    }
}

function g902() {
    gene += "宙を逝くライカ";
    sase = [[1.5, 1.5, 1.5, 1, 1], [1.5, 1.5, 1.5, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1.5, 1.5, 1.5]];
    rankk = 4;
    rank();
    seihihan();

    if (t902 == 0) {
        text += "宙を逝くライカは職員" + name + "に付き添っ"+T3+"\n正義ランク+1\n1日の終わり、もしくは職員が死ぬまで付き添う\n";
        t902 = 1;
        kagohuti = "902";
        kagohuyo();
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
        if (nefi <= 0) {
            text += "イマジナリーラバーは"+Tdassou+"\nカウンター0→3\n";
            dassou = 1;
            nefi = 3;
        }
    }

    }

    function g904() {
        gene += "リアリティーゲイザー";
        sase = [[0.5, 0.5, 0.5, 0.5, 0.5], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1]];
        rankk = 2;
        rank();
        seihihan();
        kensaku = kekka[12].indexOf('904');
        if (t904 == 0 && sagyona == 2) {
            text += "職員" + name + "にマーキングがつい"+T3+"\nリアリティーゲイザーからの経験値が2倍\n";
            t904 == 1;
            kagohuti = "904";
            kagohuyo();
        } else {
            if (sagyona != 2 && kensaku == -1) {
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
        }
        if (nefi <= 0) {
            text += "リアリティーゲイザーは"+Tdassou+"\nカウンター0→3\n";
            nefi = 3;
        }

    }

function g905() {
    gene = "905 アブノーマリティブロイラー";
    peti = 0;

    kensaku = kekka[12].indexOf('905');
    if (sagyona == 4) {
        if (kensaku == -1) {
            text += "この日一日『何が起こったとしても』死亡し"+T4+"\n一日の終わりにエンサイクロペディア1ページ目にある「能力詳細ページ」を読むこと\n";
            kagohuti = "905";
            kagohuyo();
        } else {
            text += "この日1日、ステータス全ランクEX\n";
        }

    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    kensaku = kekka[12].indexOf('609');
    if (kensaku != -1) {
        text += "星を歩く者は"+Tdassou+"\n";
        dassou = 1;
    }
    if (nefi <= 0) {
        text += "星を歩く者は"+Tdassou+"\nカウンター0→1\n";
        dassou = 1;
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

function g908() {
    gene = "908 輝血の燈籠流し";
    sase = [[1.5, 1.5, 1, 1, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 1, 1, 1], [2, 1.5, 1.5, 1, 1]];
    rankk = 4;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('908');

    if (seihi == 1 && kensaku == -1) {
        text += "職員" + name + "は加護を得"+T3+"\n鎮圧時与ダメージ+10、受けるダメージ+5\n死亡・パニックで脱走する\n脱走時部門内全職員の908加護が消える\n";
        kagohuti = "908";
        kagohuyo();
    }


}

function g910() {
    gene += "What a Wonderful Stage!!!";
    peti = 0;

    if (sagyona == 4) {
        kensaku = kekka[12].indexOf('910');
        if (kensaku == -1) {
            text += "職員" + name + "の防具が「What a Wonderful Stage!!!」になっ"+T3+"\n赤強い、白弱い、黒強い、青普通\n全ステ+30、与ダメ+3\n返却可能\n";
            setTimeout(g9102, 18000000);
            kagohuti = "910";
            kagohuyo();
        }



    } else {
        if (sagyona == 5) {
            kensaku = kekka[12].indexOf('910');
            if (kensaku != -1) {
                text += "鎮圧に向かっていない場合は身体を乗っ取られ"+T3+"\n";
                kagokesi('910');
            }

        } else {
            text += "ツール型の作業は「使用」「返却」"+T1+"\n";
        }

    }

}

function g9102() {
    kagoche("910", 1);
    if (kensakuC != -1) {
        text += "What a Wonderful Stage!!!を装着していた職員は身体を乗っ取られ"+T3+"\n";
    }
}

function g911() {
    gene += "赤き道";
    peti = 0;

    if (sagyona == 4) {
        kensaku = kekka[12].indexOf('911');
        if (kensaku == -1) {
            text += "これ以降職員" + name + "は赤き道への再作業が出来"+T4+"\n";
            kagohuti = "911";
            kagohuyo();
            text += "この加護は死亡しても消えず、業務終了時まで残る\nエンサイクロペディア参照\n";
        } else {
            text += "職員" + name + "は赤き道への再作業が出来"+T4+"\n";
        }
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g912() {
    gene = "912 宇宙地図";
    peti = 0;

    if (sagyona == 4) {
        kensaku = kekka[12].indexOf('912');
        if (kensaku != -1) {
            if (zenkai[syid] == 912) {
                sibou = 0;
            }
            text += "この職員の加護欄から「912」を消去する\n";
            kagokesi('912');
        } else {
            text += "宇宙/天体/星関連への作業時+999のバフ\n";
            ransu = Math.floor(Math.random() * 10 + 1);
            if (ransu == 1) {
                text += "地図をメインルームに持ち帰っ"+T3+"\n部門内全職員に同様のバフを与え、全員の加護欄に「912」を追加\n";
                tt12 += ",912";

            } else {
                kagohuti = "912";
                kagohuyo();
            }
        }
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
    }

}

function g913() {
    gene += "利己の揺籃";
    sase = [[1, 0.5, 0.5, 0, 0], [2, 1.5, 1, 0.5, 0.5], [2, 2, 1.5, 1, 1], [2, 2, 2, 1.5, 1]];
    rankk = 5;
    rank();
    seihihan();

    if (seihi == 1) {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 1) {
            kensaku = kekka[12].indexOf('913');
            if (kensaku == -1) {
                kagoche('913', 1);
                text += "職員" + name + "は利己の揺籃と契約を結んだ\n悪魔が追従し、鎮圧の手伝いをする\n悪魔単体で鎮圧は行わず、肩代わりもし"+T4+"\n死亡しても契約は残り（下記の死亡を除き死亡時も加護913は残す）、次の契約者が現れるとそちらに移る\nHPSPが合計30減ると死亡する\n";
                kagohuti = "913";
                kagohuyo();
            if (kensakuC != -1) {
                text += "▼職員" + t913 + "は死んで"+T5+"\n";
            }
            t913 = name;
            }

        }


    }
    if (seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "利己の揺籃は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }
}

function g914() {
    gene = "914 魔法学園入学届";
    sase = [[0.5, 0.5, 0, 0, 0], [0.5, 0.5, 0, 0, 0], [0.5, 0.5, 0, 0, 0], [0.5, 0.5, 0, 0, 0]];
    rankk = 3;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('914');
    if (kensaku == -1) {
        if (sagyona != 3 && seihi == 1) {
            text += "職員" + name + "は「入学届」を受け取っ"+T3+"\n";
            kagohuti = "914";
            kagohuyo();
        }
    } else {
        text += "職員" + name + "は魔術学園へ入学"+T2+"\n蘇生時ギフト入手\n";
        sibou = 0;
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

    text += "職員に加護が付与される。\n3分毎に1d6HP回復、15分後に消去\n";

    if (kensaku == -1) {
        kagohuti = "915";
        kagohuyo();
    }

    //美食家さんの加護の即死は個別の処理には組み込めないのでここには入れないです
}

function g916() {
    gene += "阴阳";
    sase = [[1.5, 1.5, 1.5, 1.5, 1], [0, 0, 0, 0, 0], [1.5, 1.5, 1.5, 1.5, 1], [1.5, 1.5, 1.5, 1.5, 1]];
    rankk = 3;
    rank();
    seihihan();
    text += "HPもしくはSPが満タンでない場合カウンター減少\n";
    if (sagyona == 1) {
        kensaku = kekka[12].indexOf('916');
        if (kensaku == -1) {
            text += "職員" + name + "に加護を施"+T2+"\n作業成功率+2\n";
            kagohuti = "916";
            kagohuyo();
        }
    }
    if (seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "阴阳は"+Tdassou+"\n職員" + name + "と加護916を持つ職員は眷属となる\nカウンター0→1\n";
        dassou = 1;
        nefi = 1;
    }
}

function g917() {
    gene += "灰被りの少女";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 0.5], [2, 2, 2, 2, 2]];
    rankk = 4;
    rank();
    seihihan();

    if (nefi <= 0) {
        text += "灰被りの少女は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
    }
}

function g918() {
    gene = "918 父の日";
    sase = [[0.5, 0.5, 0, 0, 0], [0.5, 0.5, 0, 0, 0], [0.5, 0.5, 0, 0, 0], [0.5, 0.5, 0, 0, 0]];
    rankk = 2;
    rank();
    seihihan();

    if (kekka[6] == "男" || kekka[6] == "男性" || kekka[6] == "オス") {

    } else {
        text += "職員" + name + "は一輪の花となっ"+T3+"\n";
        sibou = 0;
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (seihi == 0) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "父の日は"+Tdassou+"\nカウンター0→2\n";
        dassou = 1;
        nefi = 2;
    }
}

function g919() {
    gene += "片翼の花";
    sase = [[0.5, 0.5, 1, 1, 1.5], [0.5, 0.5, 1, 1, 1], [0, 0, 0.5, 0.5, 1], [0.5, 0.5, 1, 1, 1.5]];
    rankk = 3;
    rank();
    seihihan();

    if (nefi <= 0) {
        if (kekka[6] == "男" || kekka[6] == "男性") {
            text += "▼職員" + name + "は自殺性"+Tpani+"\n";
            pani = 1;
        } else {
            if (kekka[6] == "女" || kekka[6] == "女性") {
                text += "職員" + name + "は収容室に閉じ込められ"+T3+"\n20分行動不能\n";
            } else {
                if (kekka[7] <= 2) {
                    text += "職員" + name + "は収容室に閉じ込められ"+T3+"\n20分行動不能\n";
                } else {
                    text += "▼職員" + name + "は自殺性"+Tpani+"\n";
                    pani = 1;
                }
            }
        }
        text += "カウンター0→2\n";
        nefi = 2;
    } else {
        kensaku = kekka[12].indexOf('919');
        kensaku2 = kekka[12].indexOf('9192');
        if (kensaku == -1 && kensaku2 == -1) {
            if (kekka[6] == "男" || kekka[6] == "男性") {
                kagohuti = "919";
                kagohuyo();
            } else {
                if (kekka[6] == "女" || kekka[6] == "女性") {
                    kagohuti = "9192";
                    kagohuyo();
                } else {
                    if (kekka[7] <= 2) {
                        kagohuti = "9192";
                        kagohuyo();
                    } else {
                        kagohuti = "919";
                        kagohuyo();
                    }
                }
            }
        }
    }

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
            text += "人体切断マジックショーを披露"+T2+"\n";
            sibou = 0;
        } else {
            text += "人体切断マジックショーを披露"+T2+"\n職員" + name + "のHPSPが30回復\n";
        }
    } else {
        if (seihi == 1) {
            ransu = Math.floor(Math.random() * 6 + 1);
            if (ransu == 1 || ransu == 2) {
                text += "メンタルマジックを披露"+T2+"\n職員" + name + "のSPが15回復\n";
            }
            if (ransu == 3 || ransu == 4) {
                text += "コインマジックを披露"+T2+"\n職員" + name + "の作業成功率が+3\n";
            }
            if (ransu == 5 || ransu == 6) {
                text += "トランプマジックを披露"+T2+"\n職員" + name + "の自制+5\n";
            }
        }
        if (seihi == 0) {
            ransu = Math.floor(Math.random() * 6 + 1);
            if (ransu == 3) {
                text += "人体切断マジックショーを披露"+T2+"\n";
                sibou = 0;
            } else {
                text += "人体切断マジックショーを披露"+T2+"\n職員" + name + "のHPSPが30回復\n";
            }
        }
    }



}

function g922() {
    gene += "境界に咲く花";
    sase = [[1.5, 1.5, 1, 1, 1], [1, 1, 1, 1, 0.5], [1, 1, 1, 0.5, 0.5], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();
    pale = 1;
    if (kekka[9] <= 3 || kekka[10] <= 3) {
        sibou = 0;
    } else {
        if (sagyona == 2 && seihi == 1) {
            kensaku = kekka[12].indexOf('922');
            if (kensaku == -1) {
                text += "職員" + name + "は加護を得"+T3+"\nSP+25、作業成功率+5\n重複不可\n";
                kagohuti = "922";
                kagohuyo();
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
        irana2 = "決闘";
        daideme1 = kekka[11];
        daideme2 = 6;
        daisu();
        text += "\n出目：" + daideme4 + "\n";
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
                text += "▼職員" + name + "は魅了され収容室に囚われ"+T3+"\nそのまま業務終了した場合は死亡する\n次の作業が全て決闘になる（特殊作業を選択する）\n";
            }
        }

    }

}

function g925() {
    gene += "贖罪";
    peti = 0;

    if (sagyona == 4) {
        text += "職員" + name + "は5分毎にHP5回復\nこのツールは返却可能\n";
    } else {
        if (sagyona == 5) {
            text += "返却"+T2+"\n30分以内に返却しなかった場合死亡する\n";
            sykasan(925, 0, 1);
            sykensaku(925);
            if (sykekka >= 4) {
                text += "▼職員" + name + "は自殺性"+Tpani+"\n";
                sykasan(925, 3, 0);
            }
        } else {
            text += "ツール型の作業は「使用」"+T1+"\n";
        }
    }

}

function g931() {
    gene += "ハートの無い心電図";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 0.5, 0.5], [0, 0, 0, 0, 0], [1, 1, 1, 1.5, 1.5]];
    rankk = 3;
    rank();
    seihihan();
    if (kekka[7] >= 3) {
        seihi = 0;
    }
    if (sagyona == 2) {
        sibou = 0;
    }
}

function g932() {
    gene += "末夏の蛍";
    sase = [[1, 1, 1, 1, 1.5], [0, 0, 0.5, 0.5, 1], [1.5, 1, 0.5, 2, 2], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();

    if (irai == 1 || t932 == 1) {
        irai = 1;
        irana2 = "救出";
        if (t932 == 0) {
            text += "誰も囚われていません\n";
        } else {
            t932 = 0;
            daideme1 = kekka[10];
            daideme2 = 6;
            daisu();
            text += "出目：" + daideme4 + "\n";
            if (kekka[10] == 1) {
                kari2 = 3;
            }
            if (kekka[10] == 2) {
                kari2 = 4;
            }
            if (kekka[10] == 3) {
                kari2 = 12;
            }
            if (kekka[10] == 4) {
                kari2 = 18;
            }
            if (kekka[10] == 5) {
                kari2 = 20;
            }
            if (kekka[10] >= 6) {
                kari2 = 24;
            }
            if (daideme4 >= kari2) {
                text += "救出成功\n職員" + name + "と" + t9322 + "のSP20回復、特殊ギフト入手\n";
            } else {
                text += "救出失敗\n職員" + name + "と" + t9322 + "は30分行動不能\n";
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
        }
    } else {
        kari = kekka[10] * 3;
        if (deme <= kari) {
            text += "職員" + name + "は魅了され囚われ"+T3+"\n全ての作業が救出になる\n";
            t932 = 1;
        }

    }

    if (nefi <= 0) {
        text += "部門内職員1名が死亡（その日魅了を受けたことのある職員優先）\n死亡した職員に対して救出を行っていた職員は猶予10分の自殺性パニックに陥る\nカウンター0→4\n";
        nefi = 4;
    }

}

function g933() {
    gene += "プレジャーレイン";
    sase = [[1.5, 2, 2, 1, 0.5], [1, 1, 0.5, 0, 0], [1, 1, 0.5, 0, 0], [1, 1.5, 1.5, 2, 2]];
    rankk = 5;
    rank();
    seihihan();
    text += "黒5ダメージ\n";
    if (sagyona == 1 || sagyona == 2) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }

    if (nefi <= 0) {
        text += "プレジャーレインは"+Tdassou+"\nカウンター0→3\n";
        nefi = 3;
    }

}

function g935() {
    gene += "†黄昏の理想郷†";
    sase = [[1, 1, 1, 1, 1], [1, 1, 0.5, 0.5, 2], [1.5, 1.5, 1.5, 1, 1], [2, 2, 2, 1.5, 1.5]];
    rankk = 2;
    rank();
    seihihan();
    if (kekka[9] <= 3) {
        text += "職員" + name + "に白50ダメージ\nこのダメージでパニックになると自殺性になる\n";
    }

    if (seihi == 1) {
        text += "「†貴様の声は黄昏に届かん†」\n";
    }
    if (seihi == 0) {
        text += "「†死してその罪を注ぐべし†」\n";
    }
}

function g936() {
    gene += "初恋";
    sase = [[1, 1, 1, 0.5, 0.5], [1, 1, 1, 1, 0.5], [0, 0, 0, 0, 0], [1.5, 1.5, 1.5, 1.5, 1.5]];
    rankk = 2;
    rank();
    seihihan();

    if (sagyona == 2) {
        sykensaku(936);
        if (sykekka == 0) {
            sykasan(936, 0, 1);
        }
        sykasan(936, 0, 1);
        sykensaku(936);
        if (sykekka == 6) {
            text += "職員" + name + "の浸食値が-1され"+T3+"\n";
        }
        if (sykekka >= 7) {
            text += "抑制剤無効\n";
            sibou = 0;
        }
    } else {
        sykensaku(936);
        if (sykekka != 0) {
            sykasan(936, 3, 1);
        }
    }
}

function g940() {
    gene += "火炎のてんとう虫";
    sase = [[0, 0, 2, 1, 1.5], [1, 2, 1, 1.5, 0.5], [1, 1.5, 2, 1, 2], [1.5, 1.5, 2, 2, 1]];
    rankk = 4;
    rank();
    seihihan();
    nemax = 3;

    kensaku = kekka[12].indexOf('948');
    if (kensaku != -1) {
        text += "カウンターが1増加"+T2+"\n";
        nefi += 1;
    }

    if (seihi == 1) {
        kensaku = kekka[12].indexOf('940');
        if (kensaku == -1) {
            text += "職員" + name + "は「炎の加護」を得"+T3+"\nSP+10\nカウンターが減少"+T2+"\n";
            nefi -= 1;
            kagohuti = "940";
            kagohuyo();
        }
    }
    if (sagyona == 0 && seihi == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "火炎のてんとう虫は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }
}

function g941() {
    gene = "941 心臓を失くしたパラディン";
    sase = [[1, 1, 1, 0.5, 0.5], [2, 1, 1, 1, 0.5], [2, 2, 2, 2, 2], [1.5, 1.5, 1, 1, 1]];
    rankk = 4;
    rank();
    seihihan();

    if (irai == 1) {
        irana2 = "依頼";
        text += "脱走中の相手に対して依頼ができる\n依頼相手が出現している間、もしくは自身のHPが尽きるまで攻撃する\n依頼対象が死亡すると収容室に戻る\n対価はエネルギー100、不足している場合は依頼主に30黒ダメージ（軽減不可）\n";
    } else {
        if (sagyona == 2) {
            seihi = 0;
        }
        if (sagyona == 3) {
            text += "この作業は依頼作業に置き換わって"+T5+"\n";
            peti = 0;
            keikenti = 0;
        }
    }
}

function g945() {
    gene += "絵のない絵本";
    sase = [[1, 1, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1.5, 1.5, 1.5]];
    rankk = 1;
    rank();
    seihihan();

    if (seihi == 1) {
        kensaku = kekka[12].indexOf('945');
        if (kensaku == -1) {
            text += "職員" + name + "はHPが1d6回復する加護を得"+T3+"\n20分で消える\n";
            kagohuti = "945";
            kagohuyo();
        }
    }
}

function g948() {
    gene += "氷水の蝶々";
    sase = [[1, 1.5, 1.5, 0.5, 1], [1.5, 1.5, 1, 1, 0], [1.5, 1, 1.5, 0, 1], [1, 0.5, 1.5, 0.5, 1.5]];
    rankk = 4;
    rank();
    seihihan();
    nemax = 3;

    kensaku = kekka[12].indexOf('948');
    if (kensaku != -1) {
        sykasan(948, 0, 1);
        sykensaku(948);
        if (sykekka >= 3) {
            sibou = 0;
            sykasan(948, 3, 0);
        }
    }

    kensaku = kekka[12].indexOf('940');
    if (kensaku != -1) {
        text += "カウンターが1増加"+T2+"\n";
        nefi += 1;
    }

    if (seihi == 1) {
        if (kensaku == -1) {
            text += "職員" + name + "は「氷の加護」を得"+T3+"\nSP+10\nカウンターが減少"+T2+"\n";
            nefi -= 1;
            kagohuti = "948";
            kagohuyo();
        }
    }
    if (sagyona == 1 && seihi == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (sagyona == 1 && seihi == 0) {
        text += "カウンターが1増加"+T2+"\n";
        nefi += 1;
    }
    if (nefi <= 0) {
        text += "氷水の蝶々は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }
}

function g952() {
    gene += "愛を知る子";
    sase = [[1, 1, 1.5, 1.5, 0.5], [1.5, 1.5, 1.5, 2, 2], [0, 0, 0, 0, 0], [2, 2, 2, 0, 0]];
    rankk = 5;
    rank();
    seihihan();

    if (seihi == 1) {
        kensaku = kekka[12].indexOf('952');
        if (kensaku == -1) {
            text += "職員" + name + "はマーキングを受け"+T3+"\n以後、いかなる作業も愛着作業となる\n別のマーキングで上書きされる\n";
            kagohuti = "952";
            kagohuyo();
        }
    }
    if (nefi <= 0) {
        text += "愛を知る子は"+Tdassou+"\n「952」を所持している職員の内、マーキングを受けた回数が4回以下の職員は死亡しその人数だけ愛を知る子は強化される\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }
}

function g955() {
    gene += "偽る瞳";
    sase = [[1, 1, 0.5, 0.5, 0], [2, 2, 2, 2, 2], [1.5, 1.5, 1, 1, 1], [0, 0, 0, 0, 0]];
    rankk = 2;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('955');
    if (kensaku != -1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (seihi == 1 && kensaku == -1) {
        kagohuti = "955";
        kagohuyo();
        text += "20分後に消える\n";
        setTimeout(g9552, 1200000, name);
    }


    if (nefi <= 0) {
        text += "偽る瞳は"+Tdassou+"\nカウンター0→2\n";
        nefi = 2;
        dassou = 1;
    }
}

function g9552(na) {
    ketext = "職員" + na + "のマーキングが消え"+T3+"\n加護欄から955を消去\n";
    document.hanteisuru['kekka'].value = ketext;
}

function g959() {
    gene += "不和の爆心地";
    sase = [[1.5, 1.5, 1, 1, 1], [1, 1, 1.5, 1.5, 1.5], [1, 1, 0.5, 0.5, 0.5], [1.5, 1.5, 1, 1, 1]];
    rankk = 4;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('959');
    if (kekka[6] == "女" || kekka[6] == "女性") {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (sagyona == 2 && seihi == 1 && ransu == 1) {
            text += "黄金の林檎を手渡"+T2+"\n勇気正義+5（重複しない）\nメインルームに戻った後、職員" + name + "と自制の低い2人の職員（女性優先）が殺人性パニックに陥る\n鎮圧時職員は1d20を振り1が出ると殺人性パニックになる\n";
            if (kensaku == -1) {
                kagohuti = "959";
                kagohuyo();
            }
            text += "カウンターが2減少"+T2+"\n";
            nefi -= 2;
        } else {
            text += "黄金の林檎を手渡"+T2+"\n勇気正義+5（重複しない）\nメインルームに戻った後、職員" + name + "と自制の低い2人の職員（女性優先）が殺人性パニックに陥る\n鎮圧時職員は1d20を振り1が出ると殺人性パニックになる\n";
            if (kensaku == -1) {
                kagohuti = "959";
                kagohuyo();
            }
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }

    } else {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (sagyona == 2 && seihi == 1 && ransu == 1) {
            text += "黄金の林檎を手渡"+T2+"\n勇気正義+5（重複しない）\nメインルームに戻った後、職員" + name + "と自制の低い2人の職員（女性優先）が殺人性パニックに陥る\n鎮圧時職員は1d20を振り1が出ると殺人性パニックになる\n";
            if (kensaku == -1) {
                kagohuti = "959";
                kagohuyo();
            }
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }

    if (nefi <= 0) {
        text += "不和の爆心地は"+Tdassou+"\nカウンター0→3\n";
        nefi = 3;
    }

}

function g963() {
    gene += "難聴幽霊";
    sase = [[2, 2, 2, 2, 2], [0.5, 0.5, 0.5, 1, 1], [1, 1, 1, 1.5, 1.5], [1, 1, 1.5, 2, 2]];
    rankk = 2;
    rank();
    seihihan();

    if (seihi == 0) {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 2) {
            ransu = Math.floor(Math.random() * 30 + 1);
            text += "職員" + name + "はSP" + ransu + "ダメージを受け"+T3+"\n";
        }
    }
}

function g964() {
    gene = "964 プケプケ";
    sase = [[1, 1, 0.5, 0.5, 0], [1, 1, 1, 1, 1], [0.5, 0.5, 0, 0, 0], [2, 2, 1.5, 1, 1]];
    rankk = 4;
    rank();
    seihihan();
    if (kekka[7] <= 3) {
        if (sagyona == 0 || sagyona == 3) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    } else {
        if (sagyona == 1 || sagyona == 2) {
            text += "カウンターが1増加"+T2+"\n";
            nefi += 1;
        }
    }
    if (nefi <= 0) {
        text += "プケプケは"+Tdassou+"\nカウンター0→5\n";
        dassou = 1;
        nefi = 5;
    }
}


function g966() {
    gene = "966 きぼうのほし";
    sase = [[0, 0.5, 1, 1.5, 2], [0.5, 0.5, 1, 1.5, 2], [0, 0, 1, 1, 1.5], [1.5, 1.5, 2, 2, 2]];
    rankk = 3;
    rank();
    seihihan();

    kensaku = kekka[12].indexOf('966');
    if (kekka[8] <= 2 && kensaku == -1 && seihi == 1) {
        text += "職員" + name + "は加護を得"+T3+"\n作業成功率+2、他からマーキングやデバフを受け"+T4+"\n";
        kagohuti = "966";
        kagohuyo();
    }
    if (kekka[8] >= 5 && seihi == 0) {
        pani = 1;
        text += "▼職員" + name + "は自殺性"+Tpani+"\n";
    }

}

function g971() {
    gene = "971 ダンスパーティー";
    sulo = 44;
    sase = [[1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [1.5, 1.5, 1, 1, 1]];
    rankk = 5;
    rank();

    pale = 1;
   

    seihihan();


    if (sagyona == 1) {
        text += "▼職員" + name + "はチラシを受け取っ"+T3+"\nカウンターが減少"+T2+"\nダンスパーティーは"+Tdassou+"\nカウンター0→1\n職員は死んでいるため眷属にはなら"+T4+"\n";
        dassou = 1;
        sibou = 0;
    }
    if (sagyona == 0 || sagyona == 2) {
        if (seihi == 1) {
            text += "▼職員" + name + "はチラシを受け取っ"+T3+"\n職員がメインルームに戻った後ダンスパーティーは脱走する\n職員" + name + "は眷属になる\n";
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
        text += "職員" + name + "は解体・加工され"+T3+"\n";
        sibou = 0;
    }
    if (sagyona == 0) {
        text += "何かの肉の入ったパックを渡され"+T3+"\n任意で食べられる\n食べると1日HP+25\n重複不可\n";
    }

}

function g973() {
    gene += "虎現";
    sase = [[0, 0, 0, 0, 0], [1, 1, 0.5, 0.5, 0.5], [0, 0, 1, 1, 1.5], [0.5, 1, 1, 1, 1]];
    rankk = 3;
    rank();
    seihihan();

    if (kekka[9] <= 2) {
        text += "▼職員" + name + "は"+Tpani+"\n";
        pani = 1;
    }
    if (sagyona == 1 || pani == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "虎現は"+Tdassou+"\nカウンター0→3\n";
        nefi = 3;
        dassou = 1;
    }
}

function g974() {
    gene = "974 色褪せた憧憬";
    sase = [[1, 1, 0.5, 0.5, 0.5], [1, 1, 1, 1, 1], [0.5, 0.5, 0, 0, 0], [1, 1, 1.5, 1.5, 1.5]];
    rankk = 4;
    rank();
    seihihan();
    kensaku = kekka[12].indexOf('974');
    if (kensaku == -1) {
        if (sagyona == 0 || sagyona == 2) {
            if (seihi == 1) {
        text += "うさぎのぬいぐるみが着いてき"+T3+"\n加護の詳細はエンサイクロペディアの「能力詳細ページ」参照\n作業時に振るダイス+1\n他に加護「974」が付いている職員がいた場合、その職員から974を消し加護がこちらに移る\n";
        kagohuti = "974";
        kagohuyo();
            }
        }

    }

    if (nefi <= 0) {
        text += "色褪せた憧憬は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
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
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }
    kensaku = kekka[12].indexOf('9762');
    if (kensaku != -1) {
        text += "カウンターが2減少"+T2+"\n";
        nefi -= 2;
    }

    if (nefi <= 0) {
        sibou = 0;
        text += "蛇焦がれの龍は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    } else {
        if (fanke == 1) {
            sibou = 0;
            text += "蛇焦がれの龍は"+Tdassou+"\n";
            dassou = 1;
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
    kensaku = kekka[12].indexOf('9752');
    kensaku2 = kekka[12].indexOf('976');
    if (seihi == 0) {
        ransu = Math.floor(Math.random() * 5 + 1);
        if (ransu == 1) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
    }

    if (sagyona == 2 && seihi == 1) {
        kagohuti = "976";
        kagohuyo();
        text += "SP-10、正義+15\n";
    }

    if (kensaku != -1) {
        text += "カウンターが2減少"+T2+"\n";
        nefi -= 2;
        if (nefi >= 1 && kensaku2 != -1) {
            sibou = 0;
            text += "鳥居に住まう大蛇は"+Tdassou+"\n";
            dassou = 1;
        }
    }
    if (nefi <= 0) {
        text += "鳥居に住まう大蛇は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
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
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "地獄を駆ける駿馬は"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
        nefi = 3;
    }
}

function g978() {
    gene += "羊が一匹";
    sase = [[0, 0, 0, 0, 0], [1, 1, 1, 1.5, 1.5], [0.5, 0.5, 1, 1.5, 1.5], [2, 2, 2, 2, 2]];
    rankk = 1;
    rank();
    seihihan();
    syplus(978);
    if (sagyona == 0) {
        sykasan(978, 0, 1);
        sykensaku(978);
        if (sykekka == 3) {
            text += "職員" + name + "は眠りについ"+T3+"\n30分行動不能\nSP5回復";
            sykasan(978, 3, 0);
        }
    }
    sykensaku(978);
    if (sykekka >= 1 && sagyona != 0) {
        sykasan(978, 3, 0);
    }
    if (sagyona == 0) {
        kensaku = gnid.indexOf('971');
        kensaku2 = gnid.indexOf('972');
        kensaku3 = gnid.indexOf('973');
        kensaku4 = gnid.indexOf('974');
        kensaku5 = gnid.indexOf('975');
        kensaku6 = gnid.indexOf('976');
        kensaku7 = gnid.indexOf('977');
        kensaku9 = gnid.indexOf('979');
        kensaku10 = gnid.indexOf('980');
        kensaku11 = gnid.indexOf('981');
        kensaku12 = gnid.indexOf('982');
        kensaku13 = gnid.indexOf('983');
        if (kensaku != -1 || kensaku2 != -1 || kensaku3 != -1 || kensaku4 != -1 || kensaku5 != -1 || kensaku6 != -1 || kensaku7 != -1 || kensaku9 != -1 || kensaku10 != -1 || kensaku11 != -1 || kensaku12 != -1 || kensaku13 != -1 ) {
            ransu = Math.floor(Math.random() * 5 + 1);
            text += "職員" + name + "のSPが" + ransu + "回復\n";
        }
    }
}

function g979() {
    gene += "猿真似救済者";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 0.5], [2, 2, 1, 1, 1]];
    rankk = 4;
    rank();
    seihihan();

    if (zenkai[syid] == 981) {
        ransu = Math.floor(Math.random() * 2 + 1);
        if (ransu == 2) {
            text += "「…………」\n";
        } else {
            text += "「あいつ、誰、だっけ、あいつは、何処にいる？」\n";
        }
    }

    if (sagyona == 1 && seihi == 1) {
        daideme1 = 4;
        daideme2 = 6;
        daisu();
        if (kurike == 1) {
            text += "黒" + daideme4 + "ダメージ\n";
            kurike = 0;
            kari2 = 1;
            ransu = Math.floor(Math.random() * 2 + 1);
            if (ransu == 1) {
                text += "「お前はあいつの回し者か？……おれだって生きたいんだよ。」\n";
            }
            if (ransu == 2) {
                text += "「ああ　まただ　また移動しないと……」\n";
            }
        } else {
            kari = daideme4 / 2;
            text += "黒" + kari + "ダメージ\n";
            t979 += 1;
            if (t979 >= 3) {
                kari2 = 1;
                t979 = 0;
                ransu = Math.floor(Math.random() * 2 + 1);
                if (ransu == 1) {
                    text += "「元ある場所に返すだけさ、はは……」\n";
                }
                if (ransu == 2) {
                    text += "「そんな目でおれを見るな！」\n";
                }
            }
        }
    }
    if (sagyona == 1 || sagyona == 3) {
        if (seihi == 1 && t9792 == 1) {
            kari2 = 1;
            t9792 = 0;
            ransu = Math.floor(Math.random() * 2 + 1);
            if (ransu == 1) {
                text += "「…理解してくれるんじゃなかったのか？」\n";
            }
            if (ransu == 2) {
                text += "「こんな事なら、仲良くならなければよかった。」\n";
            }
        }
    }
    if (sagyona == 2 && seihi == 1) {
        t9792 = 1;
    }

    if (kari2 == 1) {
        text += "猿真似救済者は職員" + name + "の装備を奪って"+Tdassou+"\n";
        dassou = 1;
    }

}

function g980() {
    gene += "有頂鶏";
    sase = [[2, 2, 1, 0.5, 0.5], [2, 2, 2, 2, 2], [2, 2, 1.5, 1.5, 1], [2, 2, 1.5, 1.5, 1.5]];
    rankk = 5;
    rank();
    seihihan();
    if (t980 == 0) {
        text += "職員" + name + "の自制、正義が初期値になる\n";
        t980 = 1;
    }
    if (kekka[8] >= 4 || kekka[9] >= 4 || kekka[10] >= 4 || kekka[11] >= 4) {
        ransu = Math.floor(Math.random() * 5 + 1);
        if (ransu == 1) {
            sibou = 0;
            dassou = 1;
            text += "有頂鶏は"+Tdassou+"\n";
        }
    }
}

function g981() {
    gene += "口自犬覚のポリグラフ";
    sase = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 0, 0.5, 0.5, 0.5], [1, 1, 1, 1, 1]];
    rankk = 4;
    rank();
    seihihan();

    //カウンターゼロ入室死亡
    if (nefi <= 0) {
        text += "「誰かと待ち合わせしてたはず。待たなければ。」\n";
        text += "▼職員" + name + "は行動不能。業務終了時に死亡する。\n";
        text += "カウンター 0→1 n";
        nefi = 1;
    }

    //作業成功 かつ　自制ランク２以下　判定
    if (seihi == 1 && kekka[10] <= 2) {

        //979　加護なし　判定
        kensaku = kekka[12].indexOf('979');
        if (kensaku == -1) {
        } else {
            text += "像の鼻がひくついた気がする……\n";
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
        //979　加護　ここまで

    } else {

        text += "ふいに、呼ばれた気が"+T2+"\n";
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
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
        text += "職員" + name + "は捕食された\即死した場合と作業ダメージで死亡した場合、遼東之豕の腹が膨れ、次の作業での獲得PiE-BOXが2倍になる\nこのPiE-BOXの上限は24、発動したら腹は戻る\n#IPCo_982 のタグを用いて職員が死亡したことを報告する\n";
    }

}

function g983() {
    gene += "あってもなくてもねこのしっぽ";
    sase = [[1, 1, 1, 0, 0], [2, 2, 2, 2, 2], [1.5, 1.5, 1, 0.5, 0.5], [2, 2, 2, 2, 2]];
    rankk = 5;
    rank();
    seihihan();

    if (irai == 1) {
        irana = "依頼";
        text += "職員" + name + "の影に猫が住み着い"+T3+"\n30までのダメージ肩代わり\n全ステータスランク+1（上限5）\n受けたダメージが30を超えるといなくなる";
        kensaku = kekka[12].indexOf('983');
        if (kensaku == -1) {
            kagohuti = "983";
            kagohuyo();
        }
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    } else {
        if (sagyona == 1) {
            text += "依頼に置き換わって"+T5+"\n";
            peti = 0;
            keikenti = 0;
        }
        if (sagyona == 3) {
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
        if (sagyona == 2) {
            ransu = Math.floor(Math.random() * 2 + 1);
            if (ransu == 1) {
                text += "カウンターが減少"+T2+"\n";
                nefi -= 1;
            }
        }
    }

    if (nefi <= 0) {
        text += "あってもなくてもねこのしっぽは"+Tdassou+"\nカウンター0→2\n";
        nefi = 2;
    }
}

function g984() {
    gene += "蠱惑の幻想温泉";
    peti = 0;

    kari = deme;
    //入浴時処理、settimeoutのタイマー処理が上手く出来なかったためお手数ですが修正お願いいたします//
    if (sagyona == 4) {
        kensaku = kekka[12].indexOf('984');
        if (kensaku == -1) {
            if (kari >= 5) {
                text += "出目欄に記入出来る数字は5まで"+T1+"\n";
            } else {
            text += "『" + kari + "番のお湯にするんだね。\nそれじゃあ15分間ごゆっくり～』\n";
            text += "職員" + name + "は温泉に浸かっ"+T3+"\n";
            kagohuti = "984";
            kagohuyo();
            setTimeout(g9842, 9600000);
            }
        } else {
            text += "温泉から上がる時は「返却」"+T1+"\n";
        }
    } else {
        if (sagyona != 5) {
            text += "ツール型の作業は「使用」"+T1+"\n";
        } 
    }
    //ここまで//

    //返却時処理//
    if (sagyona == 5) {
        kensaku = kekka[12].indexOf('984');
        if (kensaku != -1 && nefi == 1) {
            ransu = Math.floor(Math.random() * 5 + 1);
            if (ransu == 5) {
                text += "▼温泉のお湯が硫酸に変化し、噴水の様に吹き出て外まで流れ出"+T3+"\n濃硫酸に浸された部門内の職員全員は溶けて死亡。\n";
                text += "浸かっていた職員" + name + "は骨まで溶け、被ダメージが+10される。\n";
                sibou = 0;
                nefi = 1;

            } else {
                text += "▼温泉のお湯が沸騰し、噴水の様に吹き出て外まで流れ出"+T3+"\n高温のお湯に触れた部門内の職員全員のHPに30ダメージ。\n加護984を削除\n";
                kagokesi('984');
                nefi = 1;
            }
        } else {
            if (kensaku != -1 && nefi == 0) {
                ransu = Math.floor(Math.random() * 5 + 1);
                if (ransu == 5) {
                    ransu = Math.floor(Math.random() * 4 + 1);
                    if (ransu == 4) {
                        text += "▼温泉のお湯が硫酸に変化し、噴水の様に吹き出て外まで流れ出"+T3+"\n濃硫酸に浸された部門内の職員全員は溶けて死亡。\n";
                        text += "浸かっていた職員" + name + "は骨まで溶け、被ダメージが+10される。\n";
                        sibou = 0;
                        nefi = 1;
                    } else {
                        text += "▼温泉のお湯が硫酸に変化してい"+T3+"\n";
                        text += "浸かっていた職員" + name + "は骨まで溶け、被ダメージが+10される。\n";
                        sibou = 0;
                        nefi = 1;
                    }
                } else {

                    if (kari == 1) {
                        ransu = Math.floor(Math.random() * 4 + 1);
                        if (ransu == 1) {
                            text += "▼HP/SPが全回復"+T2+"\n";
                        }
                        if (ransu == 2) {
                            text += "▼HP上限+20の効果が" + name + "に付与され"+T3+"\n再度利用するとバフが上書きされる。\n";
                        }
                        if (ransu == 3) {
                            text += "▼HP食いしばり効果が" + name + "に付与された。（一回のみ）\n再度利用するとバフが上書きされる。\n";
                        }
                        if (ransu == 4) {
                            text += "▼なにも起きなかっ"+T3+"\n";
                        }
                        text += "▽職員" + name + "はギフトを入手した。加護984を削除\nカウンター0→１\n";
                        kagokesi('984');
                        nefi = 1;

                    } else {
                        if (kari == 2) {
                            ransu = Math.floor(Math.random() * 4 + 1);
                            if (ransu == 1) {
                                text += "▼HP/SPが全回復"+T2+"\n";
                            }
                            if (ransu == 2) {
                                text += "▼SP上限+20の効果が" + name + "に付与され"+T3+"\n再度利用するとバフが上書きされる。\n";
                            }
                            if (ransu == 3) {
                                text += "▼パニック1回無効効果が" + name + "に付与された。（一回のみ）\n再度利用するとバフが上書きされる。\n";
                            }
                            if (ransu == 4) {
                                text += "▼なにも起きなかっ"+T3+"\n";
                            }
                            text += "▽職員" + name + "はギフトを入手した。加護984を削除\nカウンター0→１\n";
                            kagokesi('984');
                            nefi = 1;

                        } else {
                            if (kari == 3) {
                                ransu = Math.floor(Math.random() * 4 + 1);
                                if (ransu == 1) {
                                    text += "▼HP/SPが全回復"+T2+"\n";
                                }
                                if (ransu == 2) {
                                    text += "▼与ダメ―ジ+10の効果が" + name + "に付与され"+T3+"\n再度利用するとバフが上書きされる。\n";
                                }
                                if (ransu == 3) {
                                    text += "▼１ターン毎にHP/SP10回復効果が" + name + "に付与され"+T3+"\n再度利用するとバフが上書きされる。\n";
                                }
                                if (ransu == 4) {
                                    text += "▼なにも起きなかっ"+T3+"\n";
                                }
                                text += "▽職員" + name + "はギフトを入手した。加護984を削除\nカウンター0→１\n";
                                kagokesi('984');
                                nefi = 1;

                            } else {
                                if (kari == 4) {
                                    ransu = Math.floor(Math.random() * 4 + 1);
                                    if (ransu == 1) {
                                        text += "▼HP/SPが全回復"+T2+"\n";
                                    }
                                    if (ransu == 2) {
                                        text += "▼被ダメージ-10の効果" + name + "に付与され"+T3+"\n再度利用するとバフが上書きされる。\n";
                                    }
                                    if (ransu == 3) {
                                        text += "▼ランダム耐性１段階上昇効果が" + name + "に付与された。（1d4で決定、免疫以上にはならない）\n再度利用するとバフが上書きされる。\n";
                                    }
                                    if (ransu == 4) {
                                        text += "▼なにも起きなかっ"+T3+"\n";
                                    }
                                    text += "▽職員" + name + "はギフトを入手した。加護984を削除\nカウンター0→１\n";
                                    kagokesi('984');
                                    nefi = 1;

                                } else {
                                    if (kari == 5) {
                                        ransu = Math.floor(Math.random() * 4 + 1);
                                        if (ransu == 1) {
                                            text += "▼HP/SPが全回復"+T2+"\n";
                                        }
                                        if (ransu == 2) {
                                            text += "▼作業成功率+13の効果が" + name + "に付与され"+T3+"\n再度利用するとバフが上書きされる。\n";
                                        }
                                        if (ransu == 3) {
                                            text += "▼作業時の即死無効効果が" + name + "に付与された。（一回のみ）\n再度利用するとバフが上書きされる。\n";
                                        }
                                        if (ransu == 4) {
                                            text += "▼なにも起きなかっ"+T3+"\n";
                                        }
                                        text += "▽職員" + name + "はギフトを入手した。加護984を削除\nカウンター0→１\n";
                                        kagokesi('984');
                                        nefi = 1;

                                    } else {

                                        text += "返却作業が出来るのは入浴中の職員のみ"+T1+"\n";
                                    }

                                }

                            }
                        }
                    }
                }
            }
        }
    }
}
//ここまで//

//タイマー処理、見様見真似でやったのですが上手く機能しなかったためお手数ですが修正をお願いいたします//
function g9842() {
    ketext = "\n温泉に浸かって15分が経過した。n蠱惑の幻想温泉のカウンターが0になっ"+T3+"\n";
    document.hanteisuru['kekka'].value = ketext;
    conc = con.map(function (value, index) { return value[0]; });
    conc4 = conc.indexOf('984');
    con[conc4][1] = 0;
}

function g987() {
    gene += "家族";
    peti = 0;

    if (sagyona == 4) {
        text += "職員" + name + "は同部門に配属されている遺伝子的に関連した相手と身体が連携される\nいない場合は死亡する（加護欄から987を消す）\n";
        kensaku = kekka[12].indexOf('987');
        if (kensaku == -1) {
            kagohuti = "987";
            kagohuyo();
        }
    } else {
        text += "ツール型の作業は「使用」"+T1+"\n";
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
            text += "職員" + name + "はバロットを手に"+T2+"\n";
            if (kekka[8] <= 2) {
                text += "しかし何もできなかっ"+T3+"\n";
            } else {
                text += "バロットを口に"+T2+"\nただし二回目以降だった場合は口にし"+T4+"\nHPSP20回復\nHP上限+10\n鎮圧時SP-10、与ダメ×1.25、移動ターン+1\n鎮圧後30分行動不能\n";
                kagohuti = "988";
                kagohuyo();
            }
        }
    }
    if (fanke == 1) {
        text += "カウンターが減少"+T2+"\n";
        nefi -= 1;
    }
    if (nefi <= 0) {
        text += "貴方のバロットは"+Tdassou+"\nカウンター0→3\n";
        dassou = 1;
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
            text += "概要のランクがZAYINに変化"+T2+"\nこのランクではカウンターは存在し"+T4+"\n";
            keikenti990 = 2;
            jou990 = 6;
            nefi = 0;
        }
        if (kekka[7] == 4) {
            text += "概要のランクがTETHに変化"+T2+"\nこのランクではカウンターは存在し"+T4+"\n";
            keikenti990 = 4;
            jou990 = 12;
            nefi = 0;
        }
        if (kekka[7] == 3) {
            text += "概要のランクがHEに変化"+T2+"\nこのランクではカウンターは存在し"+T4+"\n";
            keikenti990 = 6;
            jou990 = 18;
            nefi = 0;
        }
        if (kekka[7] == 2) {
            text += "概要のランクがWAWに変化"+T2+"\n";
            keikenti990 = 8;
            jou990 = 24;
            nefi = 3;
        }
        if (kekka[7] == 1) {
            text += "概要のランクがALEPHに変化"+T2+"\n";
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
            text += "カウンターが減少"+T2+"\n";
            nefi -= 1;
        }
        if (nefi <= 0) {
            text += "概要は"+Tdassou+"\nカウンター0→3\n";
            dassou = 1;
            nefi = 3;
        }
    }



}

function g993() {
    gene += "アクアマリン・マーメイド";
    sase = [[1.5, 1.5, 1.5, 1.5, 0], [1.5, 1.5, 1.5, 0, 0.5], [2, 2, 2, 0.5, 0], [1.5, 1.5, 1.5, 0, 0.5]];
    rankk = 3;
    rank();
    seihihan();

    if (kekka[7] <= 3) {
        text += "アクアマリン・マーメイドは歌を歌っ"+T3+"\n";
        ransu = Math.floor(Math.random() * 4 + 1);
        if (ransu == 4) {
            text += "職員" + name + "は魅了され"+T3+"\n30分以内に解除されなかった場合眷属となる\nランクHE相当、装備はそのまま\n";
        }
    }
    if (kekka[7] == 4) {
        text += "職員" + name + "のHPSPが5回復"+T2+"\n";
    }
    if (kekka[7] >= 5) {
        sibou = 0;
    }

}

function g995() {
    gene += "作られし世界の神";
    sase = [[2, 2, 1, 1.5, 0.5], [1.5, 1, 1, 1, 2], [1, 1, 1.5, 2, 2], [1.5, 1.5, 0.5, 0, 0.5]];
    rankk = 5;
    rank();
    seihihan();

    if (kekka[7] <= 3 && seihi == 0) {
        ransu = Math.floor(Math.random() * 100 + 1);
        if (ransu <= 45) {
            sibou = 0;
            t995 += 1;
        }
    }
    if (t995 >= 3) {
        text += "作られし世界の神は"+Tdassou+"\n";
        dassou = 1;
        t995 = 0;
    }
}

function g996() {
    gene += "ひっくり”カエル”";
    peti = 0;

    if (sagyona == 4) {
        kensaku = kekka[12].indexOf('996');
        if (kensaku == -1) {
            sykasan(996, 0, 1);
            sykensaku(996);
            if (sykekka >= 3) {
                text += "職員"+name+"は裏返っ"+T3+"\n";
                sibou = 0;
                sykasan(996, 3, 0);
            } else {
                text += "職員" + name + "の現在HPとSPが反転する（ステータス上限は超えない）\n返却可能\nダメージを受けた時ダメージを跳ね返し、自動返却される（加護欄から「996」を消す）\n";
                kagohuti = "996";
                kagohuyo();
            }
        }
    } else {
        if (sagyona == 5) {
            text += "返却"+T2+"\n";
            kagokesi('996');
        } else {
        text += "ツール型の作業は「使用」"+T1+"\n";

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
            text += "▼職員" + name + "はくしゃみが止まらなくなっ"+T3+"\n失敗する度にSP2ダメージ\n";
        }
    } else {
        if (seihi == 0 || kekka[9] >= 4) {
            text += "▼職員" + name + "の全ステータス-1\n死亡、業務終了、2時間経過で戻る（加護欄から997を消す）\n重複し"+T4+"\n";
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
        text += "カウンターが減少"+T2+"\n2回連続だった場合眷属になる\n";
        nefi -= 1;
    }


    if (nefi <= 0) {
        text += "蝕みの魔王は"+Tdassou+"\nカウンター0→4\n";
        dassou = 1;
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

    text += "無効";

}

function g000() {

    text += "幻i想体を選択してください";

}

function g() {

    text += "幻i想体を選択してください";

}

window.onerror = function (message, file, lineNo, colNo, error) {
    var errorInfo = [
        ['エラー発生\n\n内容', message],           
        ['\n', lineNo,"行目"],         
        ['\n\nuserAgent:', navigator.userAgent] 
    ];

    alert("エラーが発生しま"+T2+"\nお手数ですがエラー文を公式へ送ってください");
    twetext = errorInfo;
    document.hanteisuru['del'].value = twetext;
};
