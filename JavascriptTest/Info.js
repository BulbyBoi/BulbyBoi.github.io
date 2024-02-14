titleArray = ["Title Here","Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise"]
subtitleArray = ["Sub", "The Seed Pokemon", "The Seed Pokemon", "The Seed Pokemon","The Lizard Pokemon", "The Flame Pokemon", "The Flame Pokemon", "The Tiny Turtle Pokemon", "The Turtle Pokemon", "The Shellfish Pokemon" ]
placementArray = ["0000", "0001", "0002", "0003","0004","0005","0006","0007","0008","0009","0010"]
japanTitleArray = ["japanTitle", "フシギダネ", "フシギソウ", "フシギバナ", "ヒトカゲ", "リザード", "リザードン", "ゼニガメ", "カメール", "カメックス"]

info1Array = ["No description", "Bulbasaur was designed by Atsuko Nishida, one of the character designers for Pocket Monsters Red and Blue, who based its design on Ivysaur, the next evolved form of Bulbasaur.", "This Pokémon exhibits a blend of reptilian and plant-like features. Its most striking feature is the large, vibrant bulb nestled on its back, which seems to have started blooming compared to its pre-evolved form.", "Venusaur, the fully evolved form of Bulbasaur and Ivysaur, stands as a majestic symbol of the flourishing power of nature in the Pokémon world. Introduced alongside its pre-evolutions in the Pokémon Red and Blue games, Venusaur commands respect with its imposing stature and commanding presence.","   Charmander was designed by Atsuko Nishida, one of the character designers for Pocket Monsters Red and Blue.", "Charmeleon, the Flame Pokémon, is a species in the Pokémon franchise, originally introduced in Nintendo and Game Freak's Pokémon Red and Blue video games. This reptilian creature is the evolved form of Charmander and precedes the powerful Charizard. Charmeleon is characterized by its fiery disposition and striking appearance."]

let title="Title Here"
let subtitle="subtitle here"

let Placement="0000";
let JapanTitle="(JapanTitle)";

let info2="The species first appeared as one of three starter Pokémon the player could choose from at the beginning of the initial Game Boy games, Pokémon Red and Blue, released in Japan in 1996. Its Japanese name, Fushigidane (fu-SHI-gi-DAHN-eh), is a combination of the Japanese words for mystery or miracle (fushigi) and seed (tane). Both the etymology and appearance of Bulbasaur, Ivysaur and Venusaur convey a transition of this Pokémon from the harmless to the dangerous as it evolves.";

let appearance=`<ol>
<li><b>Primary Appearance:</b> Bulbasaur resembles a small, quadrupedal reptilian creature. It has a squat body with a large head and short legs.</li>
<li><b>Color:</b> It is primarily green with dark patches. Its bulb takes a more vibrant but darker shade of green. Its eyes, however, sports a red color with white pupils.</li>
<li><b>Bulb:</b> The most distinctive feature of Bulbasaur is the bulb on its back, which is reminiscent of a plant bud or seed. This bulb is often depicted as a budding flower or sprout. It serves as the source of Bulbasaur's power, as it absorbs sunlight to nourish the Pokémon and facilitate its growth.</li>
    </ol>
<p> Overall Bulbasaur takes a more friendly and endearing appearance with a blend of reptilian and plant-like characteristics.</p>`;

let Gen1=`<b>Pokemon Red and Blue</b>
<p>A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.</p>
<b>Pokemon Yellow</b>
<p>	It can go for days without eating a single morsel. In the bulb on its back, it stores energy.</p>
<b>Pokemon Stadium</b>
<p>	The bulb-like pouch on its back grows larger as it ages. The pouch is filled with numerous seeds</p>`;

let Gen2=`<b>Pokemon Gold</b>
<p>The seed on its back is filled with nutrients. The seed grows steadily larger as its body grows.</p>
<b>Pokemon Silver</b>
<p>It carries a seed on its back right from birth. As it grows older, the seed also grows larger.</p>
<b>Pokemon Crystal</b>
<p>While it is young, it uses the nutrients that are stored in the seeds on its back in order to grow.</p>
<b>Pokemon Stadium 2</b>
<p>The seed on its back is filled with nutrients. The seed grows steadily larger as its body grows.</p>`;

let Gen3=` <b>Pokemon Ruby, Sapphire and Emerald</b>
<p>Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.</p>
<b>Pokemon FireRed</b>
<p>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>
<b>Pokemon LeafGreen</b>
<p>A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.</p>`;

let Gen4=`<b>Pokemon Diamond, Pearl, Platinum</b>
<p>For some time after its birth, it grows by gaining nourishment from the seed on its back.</p>
<b>Pokemon HeartGold</b>
<p>The seed on its back is filled with nutrients. The seed grows steadily larger as its body grows.</p>
<b>Pokemon SoulSilver</b>
<p>	It carries a seed on its back right from birth. As it grows older, the seed also grows larger.</p>`;

let Gen5=`  <b>Pokemon Black and White</b>
<p>For some time after its birth, it grows by gaining nourishment from the seed on its back.</p>
<b>Pokemon Black 2 and White 2</b>
<p>For some time after its birth, it grows by gaining nourishment from the seed on its back.</p>`;

let Gen6=`<b>Pokemon X</b>
<p>	A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.</p>
<b>Pokemon Y</b>
<p>	For some time after its birth, it grows by gaining nourishment from the seed on its back.</p>
<b>Pokemon Omega Ruby and Alpha Sapphire</b>
<p>	Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.</p>`;

let Gen7=`<b>Let's Go Eevee and Let's Go Pikachu</b>
<p>It can go for days without eating a single morsel. In the bulb on its back, it stores energy.</p>`

let Gen8=`<b>Pokemon Sword</b>
<P>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</P>
<b>Pokemon Shield</b>
<p>	While it is young, it uses the nutrients that are stored in the seed on its back in order to grow.</p>
<b>Pokemon Brilliant Diamond and Shining Pearl</b>
<p>For some time after its birth, it grows by taking nourishment from the seed on its back.</p>`

let Gen9=`<b>Pokemon Scarlet</b>
<p>For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.</p>
<b>Pokemon Violet</b>
<p>	It carries a seed on its back right from birth. As its body grows larger, the seed does too.</p>`;
let ID=0;



function nextPokemon(varID)
{
ID=ID+varID
title = titleArray[ID];
subtitle = subtitleArray[ID];
Placement = placementArray[ID];

JapanTitle = "("+japanTitleArray[ID]+")";

info1 = "<p>"+info1Array[ID]+"</p>";
GenerateInfo();
}
function GenerateInfo(){
    document.getElementById("title").innerHTML=title;
    document.getElementById("subtitle").innerHTML=subtitle;
    document.getElementById("GeneralInfoStart").innerHTML=title+" "+JapanTitle+" "+"#"+Placement;
    document.getElementById("StartingInformation").innerHTML=info1+info2;
    document.getElementById("Appearance").innerHTML=appearance;

    document.getElementById("Gen1").innerHTML=Gen1;
    document.getElementById("Gen2").innerHTML=Gen2;
    document.getElementById("Gen3").innerHTML=Gen3;
   
    document.getElementById("Gen4").innerHTML=Gen4;
    document.getElementById("Gen5").innerHTML=Gen5;
    document.getElementById("Gen6").innerHTML=Gen6;

    document.getElementById("Gen7").innerHTML=Gen7;
    document.getElementById("Gen8").innerHTML=Gen8;
    document.getElementById("Gen9").innerHTML=Gen9;

    document.getElementById("officialImage").img = officialImage;
    officialImage.setAttribute('src', './images/official/'+Placement+title+'.png');
    console.log(ID);
}
