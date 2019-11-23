import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const apiClient = new ApolloClient({
    link: new HttpLink({
        uri: "http://35.232.31.15:4000"
    }),
    cache: new InMemoryCache()
})

export default apiClient


