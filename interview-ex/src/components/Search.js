import {React, useEffect, useState} from "react";
import {getSearchResults, getSearchResultsByDate} from "../api"

const Search = ()=>{
    const [searchParam, setSearchParam] = useState([]);
    const [selectedTag, setSelectedTag] = useState();
    const [anyOrRecent, setAnyOrRecent] = useState();
    const [searchResults, setSearchResults] = useState()
    
    useEffect(() => {}, [selectedTag])

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            if(anyOrRecent){
                setSearchResults(await getSearchResultsByDate(searchParam, selectedTag))
                console.log(searchResults)
            }else{
                setSearchResults(await getSearchResults(searchParam, selectedTag))
                console.log(searchResults)
            }
            
        }catch (error) {
        
        }
    }

    return(
        <div>
            <h1>Search the World</h1>
            <form className="searchBar">
                <label>Search For...</label>
                <select
                    name="select"
                    onChange={(e) => {
                        return setSelectedTag(e.target.value)}}
                >
                    <option value={false}>Non-specific</option>
                    <option value="story">Story</option>
                    <option value="comment">Comment</option>
                    <option value="poll">Poll</option>
                    <option value="front_page">On Front Page</option>
                    <option value="author_">Author</option>
                </select>
                <select 
                    onChange={(e) => {
                        return setAnyOrRecent(e.target.value)}}
                >
                    <option value={false}>Any</option> 
                    <option value={true}>Most Recent</option>      
                
                </select>
                
                
                        <button onClick={()=>{
                    setSelectedTag(null)
                    setSearchParam(null)
                }}>Reset</button> 

{console.log(selectedTag, searchParam, anyOrRecent)}
            </form>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Keywords or sentences"
                    onChange={(e) => {
                        setSearchParam(e.target.value)}}
                />
                <button type="submit">Search</button>
            </form>
        </div>
        
    )
}

export default Search