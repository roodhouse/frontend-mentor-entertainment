import React, { useContext, createContext, useState } from 'react'
import Data from '../data.json'

// create the context
const MainContext = createContext()

// define a provider component to wrap
const MainProvider = ({ children }) => {
    const [ home, setHome ] = useState(true)

    const whatTitle = () => {
        if (home) {
          return 'Recommended for you'
        }
      }

    

    return (
        <MainContext.Provider value={{ home, setHome, whatTitle }}>
            {children}
        </MainContext.Provider>
    )
}

// create a custom hook for using the context
const useMain = () => {
    const context = useContext(MainContext)
    if ( !context ) {
        throw new Error('useMain must be used within a MainProvider')
    }
    return context
}

export { MainProvider, useMain }