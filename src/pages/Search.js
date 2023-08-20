import React, {useState} from 'react'
import { gql, useLazyQuery } from '@apollo/client'

const GET_LANGUAGES_SEARCH = gql `
query GetLanguagesSearch ($code: String!)  {
  languages(filter: { code: { in: [$code] } }) {
    code
    name
    native
  }
}
`

const Search = () => {

    const [code, setCode] = useState("")
    const [getLanguageSearch, { loading, error, data, called }] = useLazyQuery(GET_LANGUAGES_SEARCH);

    console.log({
        called, loading, error, data
    })

  return (
    <div>
        <input value={code} onChange={(e) => setCode(e.target.value)}  />
        <button onClick={() => getLanguageSearch({ variables: {  code } })} >Search</button>
        { loading && <div>loading ....</div> }
        { error && <div>Oops, something went  wrong ....</div> }
        { data && (
            <div>
                {data.languages.map((language) => (
                    <div key={language.code} >
                         <h2><b>Name: </b>{language.name}</h2>
                         <h3><b>Language: </b>{language.native}</h3>
                    </div>
                ))}
            </div>
        ) }
    </div>
  )
}

export default Search