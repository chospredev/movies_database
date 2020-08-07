import React, { useState } from 'react'
import axios from 'axios'

import Search from '../components/Search'
import Results from '../components/Results'
import Popup from '../components/Popup'

function MoviesBuilder() {

    const [state, setState] = useState({
        find: '',
        results: [],
        selected: {}
    })

    const apikey = 'http://www.omdbapi.com/?apikey=2b11b211'


    const search = (e) => {
        e.preventDefault()

        axios(apikey + "&s=" + state.find).then(({ data }) => {
            let results = data.Search

            setState(prevState => {
                return { ...prevState, results: results }
            })
        })
    }


    const handleOnChangeInput = (e) => {
        let find = e.target.value;

        setState(prevState => {
            return { ...prevState, find: find }
        })
    }


    const openPopup = (id) => {
        axios(apikey + "&i=" + id).then(({ data }) => {
            let result = data

            setState(prevState => {
                return { ...prevState, selected: result }
            })
        })
    }


    const closePopup = () => {
        setState(prevState => {
            return { ...prevState, selected: {} }
        })
    }

    return (
        <>
            <Search submitForm={search} handleChange={handleOnChangeInput} />
            <Results results={state.results} openPopup={openPopup} />
            {(typeof state.selected.Title != 'undefined' ) ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
        </>
    )
}

export default MoviesBuilder
