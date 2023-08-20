import { useQuery, gql } from '@apollo/client'


const GET_LANGUAGES =gql `
query{
  languages{
    code
    name
    native
  }
}

`

 





const useLanguages = () => {

    const { loading, error, data} = useQuery(GET_LANGUAGES)
  return {
    loading,
    error,
    data
  }
}

export default useLanguages