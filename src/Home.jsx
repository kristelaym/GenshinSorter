//Import Statements
import Spline from '@splinetool/react-spline';


const Home = () => {
  return (
      <div className='home'>
        <video src="https://genshin.hoyoverse.com/_nuxt/videos/3e78e80.mp4" autoPlay loop muted/>
        <Spline className='logo'scene="https://prod.spline.design/wHL8jWjAPRwlguK7/scene.splinecode" />
        
      </div>
    
  );
}
 
export default Home;