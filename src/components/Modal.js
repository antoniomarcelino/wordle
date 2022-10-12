import React from 'react'

export default function Modal({isCorrect, turn, solution}) {

    function closeModal(){
        document.getElementById('results-window').style.display='none'
    }

    function refreshPage(){
        window.location.reload();
    }

    return (
        <div className="modal" id="results-window">
            {isCorrect && (
                <div>
                    <span onClick={closeModal} className="close">&#10060;</span>
                    <h1>Você acertou!</h1>
                    <p className="solution">A palavra era <strong>{solution}</strong></p>
                    <p className="message">Você acertou com <strong>{turn}</strong> palpite{(turn > 1) && 's'} &#128512;</p>
                    <span onClick={refreshPage} className="refresh-page">&#x21bb; Novo jogo</span>
                </div>
            )}
            {!isCorrect && (
                <div>
                    <span onClick={closeModal} className="close">&#10060;</span>
                    <h1>Você errou!</h1>
                    <p className="solution">A palavra era <strong>{solution}</strong></p>
                    <p className="message">Tente mais uma vez &#128578;</p>
                    <span onClick={refreshPage} className="refresh-page">&#x21bb; Novo jogo</span>
                </div>
            )}
        </div>
    )
}
