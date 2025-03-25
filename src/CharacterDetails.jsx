import { useParams } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from './firebase-config'
import { useEffect, useState } from 'react'
import YoutubeEmbed from "./YoutubeEmbed";
import {UserAuth} from './AuthContext';

const CharacterDetails = () => {
  
  const [checked, setChecked] = useState(false);
  
  const{user} = UserAuth()

  const handleChange = async() => {
    setChecked(!checked);
    console.log(checked)

    if( user !== null )
    {
      if(!checked)
      {
        const newList = userCharacter.concat(id);
    
        setUserCharacter(newList)
   
        await setDoc(doc(db, "Users", user.uid), {userCharacters: newList})
      }

    if(checked)
      {
        const newList = userCharacter.filter(characterid => characterid !== id);
    
        setUserCharacter(newList)
   
        await setDoc(doc(db, "Users", user.uid), {userCharacters: newList})
      }
    }
    

  };

  
  const { id } = useParams()
  const [character, setCharacter] = useState({});
    const collectionRef = doc(db, "Characters", id);

  const [userCharacter, setUserCharacter] = useState([]);

  

  
  useEffect(() => {
    const getData = async() => {
      const docRef = doc(db, "Characters", id);
      const docSnap = await getDoc(docRef);
      setCharacter(docSnap.data());


      if( user !== null )
      {
        const userDocRef = doc(db, "Users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
     
        if (userDocSnap.exists()) 
        {
        
        const docSnapData = userDocSnap.data()

          if(docSnapData.userCharacters.includes(id))
          {
            setChecked(true)
            console.log(checked)
          }
        
        setUserCharacter(docSnapData.userCharacters);
        }
      }
      
      
    };
    getData()
  },[]);
  
const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};
  
  return (
    <div className="character-details">
      <img className="bg" src="https://cdn.discordapp.com/attachments/896576346615066675/1033544794884018286/genshin_finished.png" />
      <img className="characterImage"src={character.Image} />
      
      <div className="characterCheckbox">
        <Checkbox
        label="Owned"
        value={checked}
        onChange={handleChange}
        />
      </div>

      <img className="rarityImage"src={character.Rarity} />
      <h2 className="characterName"> {character.Name} </h2>
      <h3 className="characterAttributes"> {character.Element} • {character.Weapon}
  </h3>
      <p className="characterAbout">{character.About}</p>
       <YoutubeEmbed embedId={character.Video} />
       
    </div>
  );
  
}

export default CharacterDetails;