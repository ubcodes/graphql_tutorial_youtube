import React from 'react'
import useLanguage from '../hooks/useLanguage'
import { useParams } from 'react-router-dom'



const Language = () => {

  const { code } = useParams();

  const { error, loading, data } = useLanguage(code);


    if(error) {
    return<div>Opps, an error occurred</div>
  }
   
  if(loading) {
    return <div>Still Loading ...</div>
  }

   /*  console.log({
        loading, error, data
    }) */


    //to access the result using a query name
    const language = data.language

    console.log(data)


  return (
    <div className='language.container'>
      <div className='languge_content'>
          <div>
            <p><b>Code: </b>{language.code}</p>
            <h2><b>Name: </b>{language.name}</h2>
             <h3><b>Language: </b>{language.native}</h3>
          </div>
      </div>
      
    </div>
  )
}

export default Language