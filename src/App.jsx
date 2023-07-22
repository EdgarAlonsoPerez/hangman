import { useState } from 'react'
import './App.css'

const WORDS  = [
    "DOG",
    "TURTLE",
    "CAT",
    "RAVEN",
    "FISH"
]
const VIRGIN_KEYWORD= {
    A:null,
    B:null,
    C:null,
    D:null,
    E:null,
    F:null,
    G:null,
    H:null,
    I:null,
    J:null,
    K:null,
    L:null,
    M:null,
    N:null,
    O:null,
    P:null,
    Q:null,
    R:null,
    S:null,
    T:null,
    U:null,
    V:null,
    W:null,
    X:null,
    Y:null,
    Z:null
}
const MAX_ATTEMPTS = 10;
const Field = ({ children }) => {
    return (
        <div className="field">
            {children}
        </div>
    )
}

const Letter = ({letter, isPicked, pickLetter}) => {
    const handleClick = () => {
        pickLetter(letter);
    }
    const className = `letter ${ isPicked ? 'is-picked' :  ''}`
    return (
        <div
            className={className}
            onClick={handleClick}
        >
            {letter}
        </div>
    )
}

function App() {
    const [word, setWord] =  useState(WORDS[Math.floor(Math.random() * WORDS.length)])
    const [keyword, setKeyword] = useState({...VIRGIN_KEYWORD})
    const [attempts, setAttempts] = useState(0);
    const [looser, setLooser] = useState(false);
    const pickLetter = (letter) => {
        let newKeyboard = {...keyword};
        newKeyboard[letter] =  true;
        if(!word.includes(letter)) {
            const newAttempts = attempts+1
            setAttempts(newAttempts)
            if(newAttempts >= MAX_ATTEMPTS) {
                for (const [key, value] of Object.entries(newKeyboard)) {
                    newKeyboard[key] = true;
                }
                setLooser(true);
            }
        }
        setKeyword(newKeyboard)
    }
    const resetGame = () => {
        setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
        setKeyword({...VIRGIN_KEYWORD})
        setAttempts(0)
        setLooser(false)
    }
    return (
        <>
            <main className="board">
                <section className="word">
                    {
                        word.split('').map( (l,i) => {
                            return (
                                <Field key={i}>
                                    { (keyword[l] ? l: '') }
                                </Field>
                            )
                        })
                    }
                </section>
                <section className="keyboard">
                    {
                        Object.entries(keyword).map(([key, value]) => {
                            return (
                                <Letter
                                    key={key}
                                    letter={key}
                                    isPicked={value}
                                    pickLetter={pickLetter}
                                />
                            )
                        })
                    }
                </section>
                <section>
                    {attempts}
                    <button onClick={resetGame}> Reset Game </button>
                </section>
            </main>
        </>
    )
}

export default App
