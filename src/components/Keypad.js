import React, { useEffect, useState } from 'react'

export default function Keypad({usedKeys}) {
    const [letters, setLetters] = useState(null)

    useEffect(() => {
        const letterKeys = [
            {"key": "a"},
            {"key": "b"},
            {"key": "c"},
            {"key": "d"},
            {"key": "e"},
            {"key": "f"},
            {"key": "g"},
            {"key": "h"},
            {"key": "i"},
            {"key": "j"},
            {"key": "k"},
            {"key": "l"},
            {"key": "m"},
            {"key": "n"},
            {"key": "o"},
            {"key": "p"},
            {"key": "q"},
            {"key": "r"},
            {"key": "s"},
            {"key": "t"},
            {"key": "u"},
            {"key": "v"},
            {"key": "w"},
            {"key": "x"},
            {"key": "y"},
            {"key": "z"}
        ]
        setLetters(letterKeys)
    }, [])

    return (
        <div className="keypad">
            { letters && letters.map((letter) => {
                const color = usedKeys[letter.key]
                return (
                    <div key={letter.key} className={color}>{letter.key}</div>
                )
            })}
        </div>
    )
}

/*useEffect(() => {
    fetch('http://localhost:3001/letters')
    .then(res => res.json())
    .then(json => {
        setLetters(json)
    })
}, [])*/
