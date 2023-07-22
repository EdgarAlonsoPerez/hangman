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
const Field = ({ children }) => {
    return (
        <div className="field">
            {children}
        </div>
    )
}

function App() {
    const [word, setWord] =  useState(WORDS[Math.floor(Math.random() * WORDS.length)])
    const [keyword, setKeyword] = useState({...VIRGIN_KEYWORD})

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
            </main>
        </>
    )
}

export default App
