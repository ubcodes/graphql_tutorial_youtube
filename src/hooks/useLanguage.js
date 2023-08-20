import { gql, useQuery } from "@apollo/client"

const GET_LANGUAGE = gql`
query GetLanguage ($code : ID! ) {
  language(code : $code) {
    code
    name
    native
  }
}
`


const useLanguage = (code) => {

    const { error, loading, data } = useQuery(GET_LANGUAGE, {
        variables: {
            code: code //passing the code variable to the query
        }
    })


  return {
    error,
    loading,
    data
  }
}

export default useLanguage