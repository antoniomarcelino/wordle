import { useState } from 'react'

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)
    const [usedKeys, setUsedKeys] = useState({})

    //format a guess into an array of letter objects
    // {key: 'a', color: 'yellow'}
    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((letter) => {
            return { key: letter, color: 'grey'}
        })

        // find any green letters
        formattedGuess.forEach((letter, index) => {
            if(solutionArray[index] === letter.key) {
                formattedGuess[index].color = 'green'
                solutionArray[index] = null
            }
        })

        // find any yellow letters
        formattedGuess.forEach((letter, index) => {
            if(solutionArray.includes(letter.key) && letter.color !== 'green'){
                formattedGuess[index].color = 'yellow'
                solutionArray[solutionArray.indexOf(letter.key)] = null
            }
        })
        //console.log(solutionArray)
        return formattedGuess

    }
    
    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = (formattedGuess) => {

        // checking if the current guess equals the solution
        if(currentGuess === solution) {
            setIsCorrect(true)
        }

        //setting the formattedGuess(object) into the guesses array
        setGuesses(prevGuesses => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })

        //setting the currentGuess(string) into the history array
        setHistory(prevHistory => {
            return [...prevHistory, currentGuess]
        })

        //adding the turn number
        setTurn(prevTurn => {
            return prevTurn + 1 
        })

        setUsedKeys((prevUsedKeys) => {
            let newKeys = {...prevUsedKeys}
            formattedGuess.forEach((letter)=>{
                const currentColor = newKeys[letter.key]

                if(letter.color === 'green') {
                    newKeys[letter.key] = 'green'
                    return
                }
                if(letter.color === 'yellow' && currentColor !== 'green') {
                    newKeys[letter.key] = 'yellow'
                    return
                }
                if(letter.color === 'grey' && currentColor !== 'yellow' && currentColor !== 'green') {
                    newKeys[letter.key] = 'grey'
                    return
                }
            })
            return newKeys
        })
        setCurrentGuess('')
    }

    //handle keyup event & track current guess
    //if user presses enter, add the new guess
    const handleKeyup = ({key}) => {

        if(key === 'Enter'){
            // only add guess if turn is less than 5
            if(turn > 5){
                alert('You used all your guesses.')
                return
            }
            // no duplicate
            if(history.includes(currentGuess)){
                alert('You already tried that word.')
                return
            }
            // word must be 5 char long
            if(currentGuess.length !== 5){
                alert("Word must be 5 letters long.")
                return
            }

            const formatted = formatGuess()
            addNewGuess(formatted)

        }

        if(key === 'Backspace'){
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }

        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
            
        }
    }

    return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup}
}
export default useWordle