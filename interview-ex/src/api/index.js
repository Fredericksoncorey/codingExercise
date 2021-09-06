const uRL = "http://hn.algolia.com/api/v1/search?query="
const mostRecentURL = "http://hn.algolia.com/api/v1/search_by_date?query="

export const getSearchResults = async (searchArr)=>{
    try{
        const response = await fetch (uRL+searchArr);
        const data = response.json();
        return data
    }catch(error){
        console.error(error)
    }
}

export const getSearchResultsByDate = async (searchArr)=>{
    try{
        const response = await fetch (mostRecentURL+searchArr);
        const data = response.json();
        return data
    }catch(error){
        console.error(error)
    }
}
