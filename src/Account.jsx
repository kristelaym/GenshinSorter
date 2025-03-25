import {UserAuth} from './AuthContext';
import { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from './firebase-config'

const Account = () => {
  //https://blog.clairvoyantsoft.com/how-to-use-async-await-in-javascript-9f640ec96aad
  const{user, logOut} = UserAuth()

  const [userCharacter, setUserCharacter] = useState([]);
  const userRef = doc(db, "Users", user.uid);

  const [fullCharacters, setFullCharacters] = useState([]);
  const collectionRef = collection(db, "Characters");

  const handleSignOut = async () => {
    try{
      await logOut()
    } catch(error){
      console.log(error)
    }
  }

  useEffect(() => 
    {
      const getData = async() => {
        const userDocRef = doc(db, "Users", user.uid);
        const userDocSnap =  await getDoc(userDocRef);
     
        if (userDocSnap.exists()) 
        {
        
          const docSnapData = userDocSnap.data()
          setUserCharacter(docSnapData.userCharacters);

          const docsSnap = await getDocs(collectionRef)
            setFullCharacters(docsSnap.docs.map((doc) => ({...doc.data(), id:doc.id})))

            const myCharacters = fullCharacters.filter(character => 
            {
              console.log(character.id)
              return userCharacter.includes(character.id)
              
            })
          console.log(myCharacters);
        

        }



        
      };
      getData()
    },[]);
  
  return(
    <div>
      <h2 className='UserGreeting'>Welcome, {user?.displayName}</h2>
      <button className="logoutbutton"onClick={handleSignOut}>LogOut</button>
    </div>
  );
}

export default Account;