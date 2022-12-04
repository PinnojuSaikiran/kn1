import logo from './logo.svg';
import './App.css';
import aboutkine1Img from './assets/kinep1.svg';
import aboutkine2Img from './assets/kinep2.svg';
import aboutkine3Img from './assets/kinep3.svg';

function App() {
  return (
    <div className="pageContainer">
      <div className="contentHolder">
        <div className='flexHolder'>
          <div className='textHolder'>
          <p className='headerText'> Ship higher quality software faster. Retain your best Talent!</p>
          <p className='text1'> We nudge teams to focus on the right things at the right times by analysing activities performed by the team across different build-release-deploy tools. Lesser anxiety and panic</p>
          <div className='flexHolder divHolder'>
            <img src={aboutkine1Img} alt='' className='aboutKineImg1'/>
            <p className='text2'> Intelligent nudges</p>
          </div>
          <div className='flexHolder divHolder'>
            <img src={aboutkine2Img} alt='' className='aboutKineImg1'/>
            <p className='text2'> Self-driven work culture</p>
          </div>
          <div className='flexHolder divHolder'>
            <img src={aboutkine3Img} alt='' className='aboutKineImg1'/>
            <p className='text2'> Real time project insights</p>
          </div>
          <div className='flexHolder divHolder'>
            <img src={aboutkine1Img} alt='' className='aboutKineImg1'/>
            <p className='text2'> Artificial Intelligence based appraisals</p>
          </div>
          </div>
          
          <div>
            <h4> Hey </h4>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
