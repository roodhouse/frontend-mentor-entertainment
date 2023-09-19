import React, { useContext, createContext, useState, useEffect } from 'react'
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
    const [ signupPage, setSignupPage ] = useState(false)
    const [ loginPage, setLoginPage ] = useState(false)
    const [ shows, setShows ] = useState([])
    const [ userBookmarks, setUserBookmarks] = useState([])
    const [userAuthenticated, setUserAuthenticated] = useState(false);
    const [ userData, setUserData ] = useState(null)
    
        useEffect(() => {
              // fetch data from flask api endpoint
              fetch('/api/shows')
                .then((response) => response.json())
                .then((data) => {
                  // set the retrieved shows data in the state
                  setShows(data.shows)
                })
                .catch((error) => {
                  console.error('Error fetching data:', error)
                })
            },[])

            useEffect(() => {
                // fetch data from flask api endpoint
                fetch('/api/bookmarked')
                  .then((response) => response.json())
                  .then((data) => {
                    console.log(`in bookmark fetch`,data)
                    console.log(data.bookmarked)
                    // set the retrieved shows data in the state
                    setUserBookmarks(data.bookmarked)
                  })
                  .catch((error) => {
                    console.error('Error fetching data:', error)
                  })
              },[])

              useEffect(() => {
                fetch('/api/user')
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('from fetch user', data)
                        if (data.user_id) {
                            setUserAuthenticated(true);
                            setUserData(data);
                        }
                    })
                    .catch((error) => {
                        console.error('Error fetching user data:', error);
                    });
            }, []);



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
        let item = e.target
        item.removeChild(item.children[1])
        item.removeChild(item.children[1])
      }

    const handleChange = (e) => {
    let term = e.target.value
    if ( term === '' ) {
        setSearchTerm('')
     } else {
        setSearchTerm(term)
     }
     console.log(searchTerm)
    }

    const handlePageChange = (e) => {
        console.log(e)
        setSearchTerm('')
        if ( e === 'home' ) {
            setHome(true)
            setMovie(false)
            setTv(false)
            setBookmarked(false)
        } else if ( e === 'movie' ) {
            setHome(false)
            setMovie(true)
            setTv(false)
            setBookmarked(false)
        } else if ( e === 'tv' ) {
            setHome(false)
            setMovie(false)
            setTv(true)
            setBookmarked(false)
        } else if ( e === 'bookmarked' ) {
            setHome(false)
            setMovie(false)
            setTv(false)
            setBookmarked(true)
        }
    }

    const loginPageClick = (e) => {
        console.log(e)
        setLoginPage(true)
        setSignupPage(false)
    }

    const successLogin = (e) => {
        setLoginPage(false)
        setSignupPage(false)
        setHome(true)
    }

    const signUpPageClick = (e) => {
        setSignupPage(true)
        setLoginPage(false)
    }

    const handleAvatarClick = (e) => {
        setHome(false)
        setMovie(false)
        setTv(false)
        setBookmarked(false)
        setSignupPage(false)
        setLoginPage(true)
    }
     
    return (
        <MainContext.Provider value={{ home, movie, tv, bookmarked, setHome, whatTitle, hoverAction, outHover, search, searchTerm, handleChange, handlePageChange, signupPage, loginPage, loginPageClick, signUpPageClick, handleAvatarClick, successLogin, shows, userBookmarks, userData }}>
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