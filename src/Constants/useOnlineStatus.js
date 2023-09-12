import { useEffect, useState } from "react"

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true)
  useEffect(() => {
    const onliner = window.addEventListener("online", () => {
      setOnlineStatus(true)
    })
    const offliner = window.addEventListener("offline", () => {
      setOnlineStatus(false)
    })
    return () => {
      window.removeEventListener("online", onliner)
      window.removeEventListener("offline", offliner)
    }
  }, [])
  return onlineStatus
}

export default useOnlineStatus
