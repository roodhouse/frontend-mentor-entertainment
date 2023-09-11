import React, { useContext, createContext, useState } from 'react'
import Data from '../data.json'
import Card from '../components/shared/Card'

// create the context
const MainContext = createContext()

// define a provider component to wrap
const MainProvider = ({ children }) => {
    const [ home, setHome ] = useState(true)
    const [ search, setSearch ] = useState(false)
    const [ movie, setMovie ] = useState(false)
    const [ tv, setTv ] = useState(false)
    const [ bookmarked, setBookmarked ] = useState(false)
    const [ searchTerm, setSearchTerm ] = useState('')

    const whatTitle = () => {
        if (home) {
          return 'Recommended for you'
        } else if (search) {
            return `Found x results for 'Term'`
        } else if (movie) {
            return `Movies`
        } else if (tv) {
            return `TV Series`
        } else if (bookmarked) {
            return
        }
      }

    
    const hoverAction = (e) => {
        console.log(e.target)
        let item = e.target
        if ( item.id === 'bookmarkFlagContainer' ) {
            console.log('bookmark')
        } else {
            let hoverBackground = document.createElement('div')
            let playContainer = document.createElement('div')
        
            hoverBackground.setAttribute('id', 'hoverBackground')
            hoverBackground.classList.add('w-[164px]','h-[110px]', 'md:w-[220px]','md:h-[140px]', 'xl:w-[280px]', 'xl:h-[174px]', 'rounded-[8px]', 'bg-black', 'opacity-50', 'absolute', 'z-10', 'pointer-events-none', 'flex', 'justify-center', 'items-center', '2xl:w-[375px]', '2xl:h-[233px]', 'bg-cover', 'bg-no-repeat')

            playContainer.setAttribute('id', 'playContainer')
            playContainer.classList.add('w-[117px]', 'h-[48px]', 'bg-[url("./assets/play.svg")]', 'bg-transparent', 'relative', 'z-20', 'rounded-[28.5px]', 'self-center', 'cursor-pointer', 'xl:mt-[25px]', '2xl:mt-[50px]')

            item.appendChild(playContainer)
            item.appendChild(hoverBackground)
        }
    }

    const outHover = (e) => {
        console.log(e.target)
        let item = e.target
        item.removeChild(item.children[1])
        item.removeChild(item.children[1])
      }

    const handleSubmit = (e) => {
    e.preventDefault()
    const newSearchTerm = document.getElementById('search').value
    setSearchTerm(newSearchTerm)
    }
    
    const handleChange = (e) => {
    console.log(e.target.value)
    let term = e.target.value
    setSearchTerm(term)
    }
     
    return (
        <MainContext.Provider value={{ home, setHome, whatTitle, hoverAction, outHover, search, handleSubmit, searchTerm, handleChange }}>
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