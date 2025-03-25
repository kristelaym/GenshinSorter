import {useRef} from 'react';

import ReactPlayer from 'react-player'
import Paimon from './Paimon.png'

export default function About() {
  const ref = useRef(null);

  const handleClick = (Element) => {
    document.getElementById(Element).scrollIntoView({behavior: 'smooth' })
  };

  return (
    <div id="Top"className="about">
        <div className= "container">
          <img className="bg" src="https://cdn.discordapp.com/attachments/896576346615066675/1033544794884018286/genshin_finished.png" />
          <img className="Paimon" src={Paimon}/>
            <div className="centered">
              <div style={{height: '5rem'}} />
              <h3>About</h3>
              <h3>Genshin</h3>
              <button className="Redirect"onClick={() => handleClick("Gameplay")}> 1) Gameplay</button>
              <div style={{height: '1rem'}} />
              <button className="Redirect"onClick={() => handleClick("Story")}> 2) Story</button>
              <div style={{height: '1rem'}} />
              <button className="Redirect"onClick={() => handleClick("Settings and Characters")}> 2.1) Settings and Characters</button>
              <div style={{height: '1rem'}} />
              <button className="Redirect"onClick={() => handleClick("Plot")}> 2.2) Plot</button>
              <div style={{height: '1rem'}} />
              <button className="Redirect"onClick={() => handleClick("Prologue")}> 2.2.1) Prologue</button>
              <div style={{height: '1rem'}} />
              <button className="Redirect"onClick={() => handleClick("Chapter 1")}> 2.2.2) Chapter 1</button>
              <div style={{height: '1rem'}} />
              <button className="Redirect"onClick={() => handleClick("Chapter 2")}> 2.2.3) Chapter 2</button>
              <div style={{height: '1rem'}} />
              <button className="Redirect"onClick={() => handleClick("Chapter 3")}> 2.2.4) Chapter 3</button>
              <div style={{height: '1rem'}} />
              <button className="Redirect"onClick={() => handleClick("Development")}> 3) Development</button>
              <div style={{height: '1rem'}} />
              <button className="Redirect"onClick={() => handleClick("Music")}> 3.1) Music</button>                 
            </div>
        </div>

        <h1>Genshin Impact</h1>
        
        <p>Genshin Impact is an action role-playing game developed and published by miHoYo. It was released for Microsoft Windows, PlayStation 4, iOS, and Android in 2020, and on PlayStation 5 in 2021, and is set for release on Nintendo Switch. The game features an anime-style open-world environment and an action-based battle system using elemental magic and character-switching. The game is free-to-play and is monetized through gacha game mechanics through which players can obtain new characters and weapons. The base game is expanded on a regular basis through patches using the games as a service model.</p>
        
        <p>Genshin Impact takes place in the fantasy world of Teyvat, which is home to seven nations, each of which is tied to a different element and ruled by a different god. The story follows the Traveler, who has traveled across countless worlds with their twin sibling before becoming separated in Teyvat. The Traveler travels in search of the lost sibling with their companion Paimon and becomes involved in the affairs of Teyvat's nations.</p>
        
        <p>Development of Genshin Impact began in 2017. The game received generally positive reviews, with critics praising the game's combat mechanics and immersive open world, but criticizing its simplistic endgame and monetization model. It had a first-year launch revenue of more than $3 billion in its first year of release, the highest for any video game, and a revenue of more than $4 billion as of March 2022.</p>

      <h2 id="Gameplay">Gameplay</h2>

      <p> Genshin Impact is an open-world action role-playing game that allows the player to control one of four interchangeable characters in a party. Switching between characters can be done quickly during combat, allowing the player to use several different combinations of skills and attacks. Characters may have their strengths enhanced in various ways, such as increasing a character's level and improving artifacts and the weapons that the character equips. In addition to exploration, the player can attempt various challenges for rewards. Scattered across Teyvat are bosses and challenges that reward highly valuable resources, such as Stormterror and the Electro Hypostasis, but claiming them uses up a currency called resin, which slowly regenerates over time. Completing these challenges grants the player progress towards increasing their Adventure Rank, which in turn unlocks new quests, challenges, and raises the World Level. The World Level is a measure of how strong the enemies within the world are and the rarity of rewards that defeating them gives.</p>

      <p>The player can control their character and perform actions such as running, climbing, swimming, and gliding which are limited by stamina. Some characters possess abilities that can alter the environment, such as freezing water to create an ice path that can aid the player in traversing terrain. Many teleportation nodes exist throughout the world that players can warp to as a form of fast travel; among these are landmarks known as Statues of The Seven that can heal and revive characters, and provide benefits such as increasing player stamina. Items such as food and ore may be procured from the open world, while enemies and treasure chests drop other types of resources that may be used in enhancing a character's strength. Players can obtain food from hunting animals, gathering fruit and vegetables, or purchasing them from a store. Furthermore, there are special battle instances called Domains that also reward materials that increase character and weapon strength. Ingredients that can be cooked into meals that regenerate characters' health or boost various stats. Players can also procure ore that can be refined and then used to create weapons or enhance their strength.</p>

      <p>Each character has two unique combat skills: an Elemental Skill and an Elemental Burst. The Elemental Skill can be used at any time except for the cooldown period immediately after use. In contrast, the Elemental Burst has an energy cost, requiring the user to amass sufficient elemental energy by defeating enemies or inflicting elemental status effects. Characters have control over one of seven natural elements: Cryo, Dendro, Pyro, Hydro, Anemo, Electro and Geo; which correspond to ice, plants, fire, water, wind, electricity, and rock, respectively. These elements can interact in different ways; for example, if a Hydro attack hits a target, the enemy will be inflicted with the "Wet" status effect, and if they are hit with a Cryo attack, it will inflict "Cryo". These two status effects combine into the "Frozen" status effect, temporarily preventing the target from performing any actions or until the player deals enough physical damage to the enemy. Switching between characters during combat and executing those skills allows those elemental interactions to take place. Certain elemental abilities may be required to solve puzzles within the overworld.</p>

      <p>A multiplayer mode is available in the form of co-op. Up to 4 players can play together in the overworld and join Domains. Player matching can either be done by requesting to connect with another player. If the player wishes to clear a Domain with other players, they will be automatically matched up with others looking to tackle the same objective. The game features cross-platform play, so players on any platform can play with each other.</p>

      <p>By completing quests to advance the story, the player can initially unlock four additional playable characters, and more characters can be obtained via a gacha mechanic and in-game events. Several premium in-game currencies, obtainable through in-app purchases and playing the game, can be used to obtain characters and weapons through the gacha system. A pity system guarantees that the player will receive rare items after a set number of draws.</p>

      <h2 id = "Story">Story</h2>
      
      <h3 id="Settings and Characters">Settings and Characters</h3>

      <p>Genshin Impact takes place in the world of Teyvat, and is composed of the seven major nations of Mondstadt, Liyue, Inazuma, Sumeru, Fontaine, Natlan, and Snezhnaya; each nation is ruled by a different god. The mysterious floating island of Celestia is allegedly home to gods and mortals who have ascended to godhood through great, heroic feats. Underground lie the ruins of the nation of Khaenri'ah which was destroyed by gods 500 years before the events of the game. Unlike the seven major nations, Khaenri'ah was not ruled over by a god. The player character, the Traveler (male or female depending on the player's choice), is separated from their twin and becomes trapped in Teyvat. They are joined by a companion, Paimon, as they journey through Teyvat in search of their lost sibling. Although players can choose the name they want to be referred by, the Traveler's sibling refers to the Traveler by either Aether or Lumine, if the Traveler is male or female, respectively.</p>

      <p>Each nation is associated with and worships one of The Seven, a group of gods known as the "Archons", who each preside over one of the seven nations. Each member of The Seven is tied to one of the game's elements, and is also reflected in their nation's aspect. Barbatos, Rex Lapis, the Raiden Shogun, Kusanali, and the Tsaritsa are the Archons of Mondstadt, Liyue, Inazuma, Sumeru, and Snezhnaya, respectively. However, the god who is the Archon may change over time as Archons pass away. Specific individuals chosen by the Archons are granted a Vision—magical gemstones that give their bearers the ability to command an element and the potential to ascend to godhood and reside in Celestia.</p>

      <p>Mondstadt, the city of freedom, worships the Anemo Archon Barbatos and sits on an island in the middle of a lake. The city is protected by the Knights of Favonius, who are tasked with protecting Mondstadt and its citizens. To the southwest, Liyue worships the Geo Archon Rex Lapis (also known as Morax) and is the largest market harbor in Teyvat. The harbor city is presided over by the Liyue Qixing, a group of business leaders, and ancient guardians known as Adepti, a class of magical beings that includes Rex Lapis himself. Across the sea to the southeast lies the isolationist island nation of Inazuma, overseen by the authoritarian regime of the Raiden Shogun (also known as Baal) and three governmental bodies that together make up the Tri-Commission: the Tenryou Commission, Kanjou Commission, and Yashiro Commission; overseeing military and executive affairs, finances and foreign affairs, and ceremonial affairs respectively.</p>

      <p>Snezhnaya, ruled by the Cryo Archon known as the Tsaritsa, sends out diplomats called the Fatui who maintain a friendly appearance while using more underhanded methods secretly. The Fatui are also led by the Eleven Fatui Harbingers, individuals given extraordinary powers and executive authority by the Tsaritsa. In addition to the Fatui, another major antagonistic faction in the game is the Abyss Order, a legion of monsters that declares themselves to be enemies to all of humanity and the nations of Teyvat. They are led by the "Prince" or "Princess", the lost twin of the Traveler.</p>

      <p>Each nation takes inspiration from real-life nations and cultures: "Mondstadt" is German for "moon city", and takes inspiration from medieval Western Europe; Liyue (璃月, Jade Moon) is based on China; Inazuma (稲妻, lightning) is based on Japan; Sumeru, named after Mount Meru, takes inspiration from North Africa, West and South Asia; and Snezhnaya (Снежная, snowy) takes inspiration from Russia.</p>

      <h3 id="Plot">Plot</h3>
      
      <h4 id="Prologue">Prologue</h4>

      <p>A pair of twins who travel across different worlds arrive in Teyvat, but attempt to leave after finding the nation of Khaenri'ah under cataclysmic siege. However, they are separated by a god who takes one twin and seals away the other. The sealed twin, referred to as the "Traveler", awakens five hundred years later and meets Paimon, and the two embark on a journey to find the missing twin.</p>

      <p>The duo first arrive in the city of Mondstadt, which has been under attack from a dragon called Stormterror. They meet with Venti, a local bard who wishes to calm Stormterror, who is actually Dvalin, one of the ancient protectors of Mondstadt. Retrieving a stolen holy lyre from the Fatui, Venti attempts to calm Dvalin down with the lyre, but the dragon is manipulated into attacking him by the Abyss Order. The encounter also reveals Venti to be the Anemo Archon Barbatos, and they pursue Dvalin and free him from the Abyss Order's influence. After solving the crisis, Venti is ambushed by Fatui Harbinger La Signora, who steals his Gnosis, the symbol of an Archon's power.</p>

      <p>Venti advises the Traveler to travel to Liyue next to meet Rex Lapis, the Geo Archon at a ceremony.</p>
      
      <h4 id="Chapter 1">Chapter 1</h4>

      <p>However, at the ceremony Rex Lapis is apparently killed, and his body is hidden away. Needing to escape suspicion, the Traveler gets help from funeral parlor consultant Zhongli and Fatui Harbinger Childe; the latter manipulates the Traveler into sowing conflict between the Qixing, the organization of trade heads who administer Liyue Harbor, and the Adepti, ancient guardians who defend Liyue. Childe discovers the location of Rex Lapis' body, but is unable to find the Gnosis and believes Rex Lapis is still alive. To lure out the Archon, Childe resurrects an ancient god, but the combined forces of the Traveler, the Qixing, and the Adepti defeat it, after which the groups agree to usher Liyue into a new age. Afterwards, the Traveler discovers that Zhongli is Rex Lapis, who gives his Gnosis to Signora as part of a discreet contract with the Tsaritsa, the Cryo Archon and leader of the Fatui. Zhongli explains he faked his death so he could step down from his role as Archon, and their defense of Liyue proved they did not need his protection.</p>

      <p>The Traveler then returns to Mondstadt and meets a man named Dainsleif who is targeting the Abyss Order. Together they investigate their plot to create an artificial god to topple Celestia, but as they attempt to thwart it, they are confronted by the Traveler's sibling. They reveal themselves to be the leader of the Abyss Order, consisting of the people of Khaenri'ah cursed to become monsters, and reveal Dainsleif was a guard of Khaenri'ah cursed to wander the world. Dainsleif chases after their sibling but the Traveler is unable to follow.</p>
      
      <h4 id="Chapter 2">Chapter 2</h4>

      <p>While looking for a way into Inazuma, the Traveler learns more of the Vision Hunt Decree being enforced to confiscate the Visions of those in Inazuma, starting a civil war. Arriving in the nation, the Traveler agrees to help the resistance army abolish it. They learn that the Fatui manipulated the Shogun into signing it and raid a Fatui facility in response, but are defeated by Fatui Harbinger Scaramouche. They are saved by shrine maiden Yae Miko, who tells them that the "Raiden Shogun" is actually a puppet created by Ei to rule Inazuma while she retreated into her mind. The Traveler confronts Signora at the Shogun's palace and challenges her to a duel and emerges victorious. Signora is executed by the Raiden Shogun, and the Traveler with help from Yae Miko defeat Ei, who repeals the decree, ending the war.[54] Miko reveals that Ei's Gnosis was entrusted to her, and that she relinquished it to Scaramouche in order to spare the Traveler.</p>

      <p>The Traveler reunites with Dainsleif, who failed to find their twin. Seeing a vision of their sibling attempting to restore Khaenri'ah, they are torn between helping their sibling and defeating the Abyss Order. Dainsleif declares that the Traveler must choose between the world of Teyvat and their twin before departing.</p>
      
      <h4 id="Chapter 3">Chapter 3</h4>
      
      <p>The Traveler departs for Sumeru in search of Lesser Lord Kusanali. As they walk into a forest, they meet Tighnari, the leader of the Forest Rangers, a group tasked with protecting the forest and people in it. The Traveler also meets Collei, a sick Forest Ranger under Tighnari. With Tighnari's help, the Traveler heads to Sumeru City where they are given an Akasha Terminal to help navigate them around the city. As they explore, they rescue a woman named Dunyarzad, who is running from Dehya, a bodyguard appointed to her by her parents. Dehya agrees to help the Traveler fulfill Dunyarzad's dream of seeing the Sabzeruz Festival, which is being organized by Nilou, a dancer, but is in danger of being shut down by the Akademiya. While preparations for the festival are underway, Dehya helps the Traveler find a way to see Kusanali by leading them to investigate a theft from the Akademiya at Port Ormos. There, the Traveler is helped by Alhaitham and helps him secure a Knowledge Capsule from Dori, who works as a black merchant for the banned Knowledge Capsules. The Traveler finishes their work with Alhaitham and returns to Sumeru City the next day. However as each day progresses, the Traveler and Paimon realize that they are trapped inside a dream loop and follows a young girl to a safe area. The girl, named Nahida, revealed herself to be Lesser Lord Kusanali. She is the God of Wisdom who is imprisoned by the Sages in the Sanctuary of Surathana, as they did not deem her a suitable replacement for their previous god, Greater Lord Rukkhadevata, but she could visit dreams and peoples' consciousness. Nahida proposes a solution and works with the Traveler to break the loop. The Traveler deduces that Nilou is the host of the dream causing the loop and helps her terminate it, causing the Traveler and Paimon to leave the loop.</p>

      <p>Nahida and the Traveler together trick a sage into agreeing to give them the documents pertaining to what exactly the sages are planning. However, they are ambushed by Il Dottore, #2 of the Fatui Harbingers, at the Akademiya, who has manipulated the minds of the people of Sumeru. Traveler and Paimon escape (but are ambushed by Dottore's mercenaries several times), while Nahida restores the minds of the people of Sumeru, causing Dottore to realize that she is the Dendro Archon.</p>

      <p>Nahida and the Traveler meet up again and are given a revelation revolving the Harbinger Scaramouche's past. They are ambushed for a final time by Dottore's mercenaries. Nahida and the Traveler swap consciousness and Traveler learns that the Akademiya, together with Dottore, are in the process of turning Scaramouche into a god. Dottore succeeds in separating Nahida permanently from the Traveler. After being advised by Tighnari to head to the desert, Traveler manages to meet up with Alhaitham and Cyno, the General Mahamatra of the Akademiya who has come to punish Alhaitham for stealing forbidden knowledge capsules. Dehya and a desert village dweller, Candace, also get involved. The group learn that scholars have been disappearing from the desert village and after investigating, learn that the Eremites, a faction of desert mercenaries, have been kidnapping scholars to resurrect their long-dead god, King Deshret. The Eremites resent the people of Sumeru, for they believe Rukkhadevata and King Deshret were steadfast enemies, and that Rukkhadevata has caused the desert dwellers to live in poverty. They eventually learn that the Akademiya has misled the Eremites into infighting, and that King Deshret and Rukkhadevata sacrificed their lives together for Sumeru.</p>
      
      <h2 id="Development">Development</h2>
      
      <p>Genshin Impact began development as early as late January 2017, with an initial team of 120 people, which grew to 400 by the end of that year, and reached 700 by February 2021. miHoYo revealed the game in June 2019 at E3 2019. The game was developed using the Unity Engine. The game had a development and marketing budget of around $100 million, making it one of the most expensive video games to develop. Between the announcement and release closed beta tests were held, allowing invited players to explore and interact with the open world. The game includes voice-overs in four languages, and 13 different languages for text.</p>
      
      <p>The Legend of Zelda: Breath of the Wild is held in high regard by the development team, and is cited as one of the main inspirations for Genshin Impact. Development was aimed at making the game different and fun from other MMORPGs in terms of its quest and combat systems as well as its random events and mode of exploration. The game was designed to be cross-platform as developing the game for PC and console allowed the developers to raise graphical fidelity for the game, such as rendering realistic shadows. The overall artistic vision of the game is intended to combine anime art style with more key elements from real-world cultures. For example, Liyue was first conceived of as a reimagining of Chinese culture through a fantasy perspective, and was combined with reference material from Zhangjiajie National Forest Park and Tianmen Mountain to create the region.</p>

      <h3 id="Music">Music</h3>

      <p>Yu-Peng Chen of HOYO-MiX composed the game's original score, which was performed by the London Philharmonic Orchestra, the Shanghai Symphony Orchestra, and the Tokyo Philharmonic Orchestra. The approach to creating the soundtrack is to immerse players within the game, and provide emotional and beautiful melodies. Based upon a foundation of Western music, the score also has regional and cultural influences added depending upon the region. For example, in Mondstadt Chen used woodwind instruments to reflect Mondstadt's association with wind and freedom. In contrast, the battle themes use polyphony and other composing techniques, as well as mimicking orchestrion elements from composers such as Beethoven. Several soundtrack albums featuring music about characters and regions of the game have been released periodically. For his work on the soundtrack Chen was awarded the "Outstanding Artist—Newcomer/Breakthrough" at the 2020 Annual Game Music Awards. In an interview published in April 2021 Chen expressed interest in releasing the soundtracks on CD, as well as hosting concerts in the future. The first concert was held virtually on October 3, 2021, titled "Melodies of an Endless Journey" and featured multiple bands and an orchestra performing various soundtracks from the game. A second virtual concert was held on February 4, 2022, titled "Reflections of Spring" featuring the Shanghai Symphony Orchestra performing soundtracks from the Liyue region.</p>
                      <div style={{height: '1rem'}} />
              <button className="BackToTop" onClick={() => handleClick("Top")}> Back to top</button> 
      </div>    
  );
}