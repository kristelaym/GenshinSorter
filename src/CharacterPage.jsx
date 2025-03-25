//Import Statements
import { useState, useEffect} from 'react'
import CharacterList from './CharacterList'

import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase-config'


const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  const [fullCharacters, setFullCharacters] = useState([]);
      const collectionRef = collection(db, "Characters");

  
  const ShowAll = () => {
    setCharacters(fullCharacters);
  }


  const FilterWeapon = (Weapon) => {
    const FilteredCharacters = fullCharacters.filter(character =>     character.Weapon == Weapon)
    setCharacters(FilteredCharacters);
  }
  
  const FilterElement = (Element) => {
    const FilteredCharacters = fullCharacters.filter(character =>     character.Element == Element)
    setCharacters(FilteredCharacters);
  }

//Gets the data from the characters  
useEffect(() => {
    const getData = async () =>{
      const docsSnap = await getDocs(collectionRef);

      setCharacters(docsSnap.docs.map((doc) => ({...doc.data(), id:doc.id})))
      setFullCharacters(docsSnap.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }

    getData()
  }, [])


  return (
    <div className="character-page">

      <CharacterList characters = {characters} title="~All Characters~" FilterElement = {FilterElement} FilterWeapon = {FilterWeapon} ShowAll = {ShowAll}/>
      
    </div>
  );
}
 
export default CharacterPage;

//      <CharacterList characters = {characters.filter((character) => character.Element === 'Hydro')} title="Hydro Characters"/>