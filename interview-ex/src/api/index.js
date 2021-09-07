const uRL = "http://hn.algolia.com/api/v1/search?query="
const mostRecentURL = "http://hn.algolia.com/api/v1/search_by_date?query="

export const getSearchResults = async (searchStr, searchTag)=>{
    try{
        if(searchTag==="author_"){
            const response = await fetch (uRL+searchStr+"&tags="+searchTag+searchStr);
            const data = response.json();
            return data 
        }else if(searchTag){
            const response = await fetch (uRL+searchStr+"&tags="+searchTag);
            const data = response.json();
            return data
        }else{
            const response = await fetch (uRL+searchStr);
            const data = response.json();
        return data 
        }
        
    }catch(error){
        console.error(error)
    }
}

export const getSearchResultsByDate = async (searchStr, searchTag)=>{
    
    try{
        if(searchTag==="author_"){
            const response = await fetch (mostRecentURL+searchStr+"&tags="+searchTag+searchStr);
            const data = response.json();
            return data 
        }else if(searchTag){
            const response = await fetch (mostRecentURL+searchStr+"&tags="+searchTag);
            const data = response.json();
            return data
        }else{
            const response = await fetch (mostRecentURL+searchStr);
            const data = response.json();
        return data 
        }
    }catch(error){
        console.error(error)
    }
}
