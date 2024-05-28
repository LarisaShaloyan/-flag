const button =document.querySelectorAll("button");
const title=document.querySelector("header h1")
const title2=document.querySelector("header h2")
const p=document.querySelector("p");
button.forEach((item,index)=>{
    item.onclick=()=>{
        title.innerText=lang[index].h1
        title2.innerText=lang[index].h2
        p.innerText=lang[index].p
    }
})

const lang=[
    {
        h1:"Hello Armenia",
        h2:"Welcome to Armenia",
        p:"Armenia is a landlocked country in the South Caucasus. It borders Georgia in the north, Azerbaijan in the east, Iran in the south, and Turkey in the west. Armenia covers an area of 29,743 km²[9] and has a population of 3 million people. The capital is Yerevan, the state language is Armenian, 94.4 percent of the population professes Christianity[3]. The Armenian Apostolic Holy Church is the main religious institution of Armenia[10]"
    },
    {
        h1:"Բարև Հայաստան",
        h2:"Բարի գալուստ Հայաստան",
        p:"Հայաստանը դեպի ծով ելք չունեցող պետություն է Հարավային Կովկասում։ Հյուսիսում սահմանակցում է Վրաստանին, արևելքում՝ Ադրբեջանին, հարավում՝ Իրանին, իսկ արևմուտքում՝ Թուրքիային։ Հայաստանը զբաղեցնում է 29 743 կմ² տարածք[9] և ունի 3 միլիոն մարդ բնակչություն։ Մայրաքաղաքը Երևանն է, պետական լեզուն՝ հայերենը, բնակչության 94,4 տոկոսը դավանում է քրիստոնեություն[3]։ Հայաստանյայց Առաքելական Սուրբ Եկեղեցին Հայաստանի հիմնական կրոնական հաստատությունն է[10]։"
    },
    {
        h1:"Привет Армения!",
        h2:"Добро пожаловать в Армению",
        p:"Армения – не имеющая выхода к морю страна на Южном Кавказе. Граничит с Грузией на севере, Азербайджаном на востоке, Ираном на юге и Турцией на западе. Армения занимает площадь 29 743 км²[9] и имеет население 3 миллиона человек. Столица — Ереван, государственный язык — армянский, 94,4 процента населения исповедуют христианство[3]. Армянская Апостольская Святая Церковь является главным религиозным учреждением Армении[10]."
    }
]