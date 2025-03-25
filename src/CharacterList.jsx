import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CharacterList = ({characters , title, FilterElement, FilterWeapon, ShowAll}) => {
  
  return (
    <div>
      <img className="bg" src="https://cdn.discordapp.com/attachments/896576346615066675/1033544794884018286/genshin_finished.png" />
      
    <div className="character-list">
  
      <h1 className="title">{ title }</h1>

            <div style={{height: '1rem'}} />
      
      <button className="ShowAll" onClick={() => ShowAll()}> Show All </button>
      
            <div style={{height: '1rem'}} />

      <button className="ElementButton" onClick={() => FilterElement("Anemo")}><img className="ElementImage" src={"https://rerollcdn.com/GENSHIN/Elements/Element_Anemo.png"} /></button>
      
      <button className="ElementButton" onClick={() => FilterElement("Cryo")}><img className="ElementImage" src={"https://rerollcdn.com/GENSHIN/Elements/Element_Cryo.png"} /></button>

      <button className="ElementButton" onClick={() => FilterElement("Electro")}><img className="ElementImage" src={"https://rerollcdn.com/GENSHIN/Elements/Element_Electro.png"} /></button>

      <button className="ElementButton" onClick={() => FilterElement("Dendro")}><img className="ElementImage" src={"https://rerollcdn.com/GENSHIN/Elements/Element_Dendro.png"} /></button>

      <button className="ElementButton" onClick={() => FilterElement("Geo")}><img className="ElementImage" src={"https://rerollcdn.com/GENSHIN/Elements/Element_Geo.png"} /></button>

      <button className="ElementButton" onClick={() => FilterElement("Hydro")}><img className="ElementImage" src={"https://rerollcdn.com/GENSHIN/Elements/Element_Hydro.png"} /></button>
      
      <button className="ElementButton" onClick={() => FilterElement("Pyro")}><img className="ElementImage" src={"https://rerollcdn.com/GENSHIN/Elements/Element_Pyro.png"} /></button>
      
      <div style={{height: '1rem'}} />

      <button className="WeaponButton" onClick={() => FilterWeapon("Bow")}><img className="ElementImage" src={"https://rerollcdn.com/GENSHIN/Icons/NEW/bow-icon.png"} /></button>

      <button className="WeaponButton" onClick={() => FilterWeapon("Catalyst")}><img className="ElementImage" src={"https://rerollcdn.com/GENSHIN/Icons/NEW/catalyst-icon.png"} /></button>

      <button className="WeaponButton" onClick={() => FilterWeapon("Claymore")}><img className="ElementImage" src={"https://rerollcdn.com/GENSHIN/Icons/NEW/claymore-icon.png"} /></button>

      <button className="WeaponButton" onClick={() => FilterWeapon("Polearm")}><img className="ElementImage" src={"https://rerollcdn.com/GENSHIN/Icons/NEW/polearm-icon.png"} /></button>

      <button className="WeaponButton" onClick={() => FilterWeapon("Sword")}><img className="ElementImage" src={"https://rerollcdn.com/GENSHIN/Icons/NEW/sword-icon.png"} /></button>

      <div style={{height: '1rem'}} />

      <div className="box">
        <Box sx={{ width:550 }}>
          <Grid container 
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 4, md: 6 }} >
      {characters.map(character => (
          <Grid item xs={1} sm={1} md={1} className="character-preview" key={character.id} >
            <Link to={`/characters/${character.id}`}>
              <img className="character-images" src={ character.Image } />
              <p className="character-name">{ character.Name}</p>
            </Link>

          </Grid>
      
      ))}
          </Grid>
        </Box>
      </div>
    </div>
    </div>

  );
}
 
export default CharacterList;