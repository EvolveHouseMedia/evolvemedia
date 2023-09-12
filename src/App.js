import "./App.css"
import MainComponent from "./Components/MainComponent"
import useOnlineStatus from "./Constants/useOnlineStatus"
import Splash from "./Components/Splash"
import { MdSignalWifiStatusbarConnectedNoInternet } from "react-icons/md"
import { useEffect, useState } from "react"
function App() {
  const [isLoading, setIsLoading] = useState(false)
  const onlineStatus = useOnlineStatus()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (onlineStatus === false) {
    return (
      <div className="nointernet container">
        <MdSignalWifiStatusbarConnectedNoInternet size={45} />
        <h3>Your are Offline please Check your internet connection</h3>
        <span>- Team Evolve House Media</span>
      </div>
    )
  }

  return (
    <div className="App ">{isLoading ? <Splash /> : <MainComponent />}</div>
  )
}

export default App
