
// ======================================
// 🇺🇿 O'ZBEKISTON BO'YLAB SAYOHAT
// QUESTIONS DATABASE
// Developer: Ulug'bek.R
// ======================================


const questions = [


{
icon:"🕌",

question:
"Registon maydoni qaysi shaharda joylashgan?",

answers:[
"Samarqand",
"Buxoro",
"Xiva",
"Toshkent"
],

correct:
"Samarqand"

},



{
icon:"🏰",

question:
"Ark qal'asi qaysi shaharning mashhur obidasi?",

answers:[
"Buxoro",
"Xiva",
"Termiz",
"Qo'qon"
],

correct:
"Buxoro"

},



{
icon:"🏛️",

question:
"Ichan qal'a qayerda joylashgan?",

answers:[
"Xiva",
"Samarqand",
"Toshkent",
"Andijon"
],

correct:
"Xiva"

},



{
icon:"🕌",

question:
"Hazrati Imom majmuasi qaysi shaharda?",

answers:[
"Toshkent",
"Buxoro",
"Namangan",
"Jizzax"
],

correct:
"Toshkent"

},



{
icon:"🏯",

question:
"Oqsaroy Amir Temur davrida qaysi shaharda qurilgan?",

answers:[
"Shahrisabz",
"Samarqand",
"Buxoro",
"Xiva"
],

correct:
"Shahrisabz"

},



{
icon:"⛰️",

question:
"Chimgan tog'lari qaysi hududda joylashgan?",

answers:[
"Toshkent viloyati",
"Qashqadaryo",
"Xorazm",
"Surxondaryo"
],

correct:
"Toshkent viloyati"

},



{
icon:"🌊",

question:
"Orol dengizi qaysi hududlarga yaqin joylashgan?",

answers:[
"Qoraqalpog'iston",
"Andijon",
"Toshkent",
"Samarqand"
],

correct:
"Qoraqalpog'iston"

},



{
icon:"🗼",

question:
"Minorai Kalon qaysi shaharning ramzi?",

answers:[
"Buxoro",
"Xiva",
"Toshkent",
"Qo'qon"
],

correct:
"Buxoro"

},



{
icon:"🕌",

question:
"Shohi Zinda majmuasi qayerda joylashgan?",

answers:[
"Samarqand",
"Buxoro",
"Termiz",
"Farg'ona"
],

correct:
"Samarqand"

},



{
icon:"🏝️",

question:
"Aydarko'l qaysi hududdagi mashhur ko'l?",

answers:[
"Jizzax",
"Navoiy",
"Andijon",
"Xorazm"
],

correct:
"Jizzax"

},



{
icon:"🏛️",

question:
"Amir Temur xiyoboni qaysi shaharda joylashgan?",

answers:[
"Toshkent",
"Samarqand",
"Buxoro",
"Xiva"
],

correct:
"Toshkent"

},



{
icon:"🏰",

question:
"Sitorai Mohi Xosa qaysi shaharda joylashgan?",

answers:[
"Buxoro",
"Xiva",
"Qo'qon",
"Termiz"
],

correct:
"Buxoro"

},



{
icon:"🏺",

question:
"Termiz arxeologik yodgorliklari qaysi viloyatda?",

answers:[
"Surxondaryo",
"Sirdaryo",
"Navoiy",
"Jizzax"
],

correct:
"Surxondaryo"

},



{
icon:"🌿",

question:
"Farg'ona vodiysi qaysi hududda joylashgan?",

answers:[
"Sharqiy O'zbekiston",
"G'arbiy O'zbekiston",
"Qoraqalpog'iston",
"Orol hududi"
],

correct:
"Sharqiy O'zbekiston"

},



{
icon:"🇺🇿",

question:
"O'zbekiston poytaxti qaysi shahar?",

answers:[
"Toshkent",
"Samarqand",
"Buxoro",
"Xiva"
],

correct:
"Toshkent"

}



];







// Savollarni aralashtirish


function shuffleQuestions(){


    return [...questions].sort(

        ()=>Math.random()-0.5

    );


}