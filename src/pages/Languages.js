import React, { lazy } from 'react'
import useLanguages from '../hooks/useLanguages'
import "./Languages.css"
import { Link } from 'react-router-dom'




const Languages = () => {

  const { loading, error, data} = useLanguages();

  if(error) {
    return<div>Opps, an error occurred</div>
  }
   
  if(loading) {
    return <div>Still Loading ...</div>
  }

    console.log({
        loading, error, data
    })

  return (
    <div className='languages_container'>
        {data.languages.map(language => {
            return(
                <div className='languages_box' key={language.code} >
                   <Link to={`/${language.code}`}>
                    <p><b>Code: </b>{language.code}</p>
                    <h2><b>Name: </b>{language.name}</h2>
                    <h3><b>Language: </b>{language.native}</h3>
                   </Link>
                </div>
            )
        })}
    </div>
  )
}

export default Languages