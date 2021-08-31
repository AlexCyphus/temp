import React from 'react'
import './App.scss';
import ActionButton from './components/ActionButton.js';
import Row from './components/Row.js';
import Slider from './components/Slider.js';
import Popup from './components/Popup.js';
import InfoCard from './components/InfoCard.js';
import HeaderTitle from './components/HeaderTitle.js';
import FixedButton from './components/FixedButton.js';
import DarkModeWrapper from './components/DarkModeWrapper.js'
import {buildTP, shuffleArray, postToSheets, getData} from "./functions.js"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderScreen: 0,
      popup: false,
      infocard: false,
      dark: false,
      currency: false,
      partners: false,
      profile: false
    }
    this.handleSliderChange = this.handleSliderChange.bind(this)
  }

  handleSliderChange(desiredSliderScreen){
    this.setState({sliderScreen: desiredSliderScreen})
  }

  componentWillMount() {
    if (window.NativeApp){
      this.setState({
        partners: JSON.parse(window.NativeApp.getPartners()),
        profile: JSON.parse(window.NativeApp.getMyProfile()),
        currency: window.NativeApp.getCurrency()
      })
    }

    // if ios 
    else if (window.webkit){
      window.setMyProfile = profile => this.setState({profile: JSON.parse(profile)});
      window.setMyPartners = partners => this.setState({partners: JSON.parse(partners)});
      window.setCurrency = currency => this.setState({currency: currency});
      // window.setDarkModeEnabled = enabled => this.setState({dark: JSON.parse(enabled)});
      window.webkit.messageHandlers.getMyProfile.postMessage({});
      window.webkit.messageHandlers.getMyPartners.postMessage({});
      window.webkit.messageHandlers.getMyCurrency.postMessage({});
      window.webkit.messageHandlers.getDarkModeEnabled.postMessage({});
    }
  }

  // to be updated with every experiment
  tp(action){
    return buildTP('testwebview')(action)
  }

  render(){

    const MainContent = () => {
      return (
      <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
      <button onClick={() => this.tp('testbtn2')}> testbtn1 </button>
      <button onClick={() => this.tp('testbtn2')}> testbtn2 </button>
      <p style={{overflowWrap: 'anywhere'}}>{JSON.stringify(this.state)}</p>
      <HeaderTitle title={'I am category'}/>
      <Slider 
        title1={"Hello"}
        title2={"World"}
        sliderScreen={this.state.sliderScreen}
        handleSliderChange={this.handleSliderChange}
      />
      <Row title={this.state.partners[0] && this.state.partners[0].firstName} image={this.state.partners[0] && this.state.partners[0].photo} roundImage={true}>
        <p>Now I can put anything I want in here</p>
      </Row>
      <Row title="Computer McComputerface" image={"/users/chelsea.jpg"} localImage={true}>
        <p>Now I can put anything I want in here here here here here here here here here here here here here here here here here here here here here here here here here here hello here here here here here here here here here here here here here here here here here here</p>
      </Row>
      <ActionButton text={"hello world"} color={"blue"} close={true} key={1}/>
      {this.state.popup ? <Popup buttonText={"I am button"} text="i am description" placeholder="i am placeholder" title="poppy">
        <p>hello</p>
        <p>hello hello hello v hello vvhellohellohello hello hello hello hello hello hello hello hello v</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        
      </Popup> : null}
      {this.state.infocard ? 
      <InfoCard buttonText={"I am button"} title={"I am infocard"}>
        <p>HELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLD</p>
      </InfoCard>
      :
      null
      }
      <FixedButton image="/flags/canada.png"/>
    </div>
      )
    }
    
    return this.state.dark 
      ? <DarkModeWrapper><MainContent/></DarkModeWrapper>
      : <MainContent/>
  }
}

export default App;
