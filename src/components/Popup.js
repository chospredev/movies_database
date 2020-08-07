import React from 'react'

function Popup({ selected, closePopup }) {
    return (
        <section className="popup">
            <div className="content">
                <h2>{selected.Title} <span className="">{selected.Year}</span></h2>
                <p className="rating">{selected.Rating}</p>
                <div className="plot">
                    <img src={selected.Poster} />
                    <p>{selected.Plot}</p>
                </div>
                <button onClick={closePopup} className="close">
                    Close
                </button>
            </div>
        </section>
    )
}

export default Popup
