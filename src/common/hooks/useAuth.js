// import { useContext } from 'react'
// import AuthContext from 'common/contexts/JWTAuthContext'

// const useAuth = () => useContext(AuthContext)
const useAuth = () => ({ user: { name: "S BHANUKIRAN" }, logout: () => { console.log("loggout clicked") } })
export default useAuth
