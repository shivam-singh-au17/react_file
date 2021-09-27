import axios from 'axios'

export default function fetchUsers(query, page) {
    if (!query) {
        return Promise.reject("Query should br provided");
    }
    return axios.get("https://api.github.com/search/users", {
        params: {
            q: query
        }
    })
}
