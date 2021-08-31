import axios from 'axios'

export const buildTP = (prefix) => {
  return (suffix) => {
    // set up passed down tp functions
    var NativeApp;
    let name;

    const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

    // if on Android
    if (window.NativeApp){
      name = "Exp_" + capitalize(prefix) + "_" + capitalize(suffix)
      NativeApp = window.NativeApp
    }
    
    // if on iOS
    else if (window.webkit){
      name = capitalize(prefix) + "_" + capitalize(suffix)
      NativeApp = {
        sendTrackingPoint: (name, val=true) => window.webkit.messageHandlers.sendTrackingPoint.postMessage({name: name, value: val})
      }
    }
    
    // if on web mock version
    else {
      name = "Exp_" + capitalize(prefix) + "_" + capitalize(suffix)
      NativeApp = {
        sendTrackingPoint: (name) => {console.log(name)}
      }
    }

    if (suffix == undefined){return null}

    if (name.split(" ").length > 1) return console.error("Spaces aren't allowed in tracking points")
    else return NativeApp.sendTrackingPoint(name)
  }
}
  
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}
  
export const postToSheets = (baseUrl, firstEl, secondEl) => { 
  let url = baseUrl + "?groupName=" + firstEl + "&privacy=" + secondEl // for testing
  return axios.get(url)
}

var myProfile;
var myPartners;
var myCurrency;
var isDarkModeEnabled = false;

export const getData = () => {
  // if android 
  
  
  return {
    myProfile: myProfile,
    myPartners: myPartners,
    myCurrency: myCurrency,
    isDarkModeEnabled: isDarkModeEnabled
  }
}