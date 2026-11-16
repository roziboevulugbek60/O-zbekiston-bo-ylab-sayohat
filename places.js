
// ======================================
// 🇺🇿 O'ZBEKISTON BO'YLAB SAYOHAT
// PLACES DATABASE
// Developer: Ulug'bek.R
// ======================================


const places = [


{
    name:"Registon maydoni",
    city:"Samarqand",
    icon:"🕌",
    info:"Samarqanddagi mashhur tarixiy majmua. Uchta ulkan madrasadan tashkil topgan."
},



{
    name:"Ark qal'asi",
    city:"Buxoro",
    icon:"🏰",
    info:"Buxorodagi qadimiy qal'a bo'lib, tarixiy hukmdorlar qarorgohi bo'lgan."
},



{
    name:"Ichan qal'a",
    city:"Xiva",
    icon:"🏛️",
    info:"Xivaning qadimiy ichki shahri va UNESCO merosi hisoblanadi."
},



{
    name:"Hazrati Imom majmuasi",
    city:"Toshkent",
    icon:"🕌",
    info:"Toshkentdagi mashhur diniy va tarixiy majmua."
},



{
    name:"Oqsaroy",
    city:"Shahrisabz",
    icon:"🏯",
    info:"Amir Temur davrida qurilgan ulkan saroy qoldiqlari."
},



{
    name:"Chimgan tog'lari",
    city:"Toshkent viloyati",
    icon:"⛰️",
    info:"Go'zal tog' manzaralari va dam olish maskani."
},



{
    name:"Orol dengizi",
    city:"Qoraqalpog'iston",
    icon:"🌊",
    info:"Markaziy Osiyodagi mashhur ko'l-dengiz hududi."
},



{
    name:"Shohi Zinda majmuasi",
    city:"Samarqand",
    icon:"🕌",
    info:"Samarqanddagi qadimiy maqbaralar majmuasi."
},



{
    name:"Minorai Kalon",
    city:"Buxoro",
    icon:"🗼",
    info:"Buxoroning eng mashhur tarixiy minoralaridan biri."
},



{
    name:"Poi Kalon majmuasi",
    city:"Buxoro",
    icon:"🏛️",
    info:"Masjid, madrasa va minoradan iborat tarixiy majmua."
},



{
    name:"Farg'ona vodiysi",
    city:"Farg'ona",
    icon:"🌿",
    info:"Hosildor vodiysi va qadimiy madaniyat markazi."
},



{
    name:"Aydarko'l",
    city:"Jizzax",
    icon:"🏝️",
    info:"Cho'l hududidagi katta ko'l va sayyohlik maskani."
},



{
    name:"Amir Temur xiyoboni",
    city:"Toshkent",
    icon:"🏛️",
    info:"Toshkent markazidagi mashhur tarixiy maskan."
},



{
    name:"Sitorai Mohi Xosa",
    city:"Buxoro",
    icon:"🏰",
    info:"Buxoro amirlarining yozgi saroyi."
},



{
    name:"Termiz arxeologik yodgorliklari",
    city:"Surxondaryo",
    icon:"🏺",
    info:"Qadimiy tarix va arxeologik topilmalar hududi."
}



];







// Tasodifiy joy olish


function randomPlace(){


    return places[

        Math.floor(
            Math.random()*places.length
        )

    ];


}







// Joylarni aralashtirish


function shufflePlaces(){


    return [...places].sort(

        ()=>Math.random()-0.5

    );


}