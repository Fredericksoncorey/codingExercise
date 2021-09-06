import {React, useEffect, useState} from "react";
// import {} PAUSED HERE!!!

const Search = ()=>{
    const [searchParam, setSearchParam] = useState([]);
    const [selectedSearch, setSelectedSearch] = useState();
    const [anyOrRecent, setAnyOrRecent] = useState();
    
    useEffect(() => {}, [selectedSearch])

    const handleSubmit = ()=>{
        
    }

    return(
        <div>
            <h1>Search the World</h1>
            <form className="searchBar">
                <label>Search For...</label>
                <select
                    name="select"
                    onChange={(e) => {
                        return setSelectedSearch(e.target.value)}}
                >
                    <option value={false}>Non-specific</option>
                    <option value="story">Story</option>
                    <option value="comment">Comment</option>
                    <option value="poll">Poll</option>
                    <option value="front_page">On Front Page</option>
                    <option value="author_:USERNAME">Author</option>
                </select>
                <select 
                    onChange={(e) => {
                        return setAnyOrRecent(e.target.value)}}
                >
                    
                    <option value={false}>Any</option> 
                    <option value={true}>Most Recent</option>      
                
                </select>
                
                
                        <button onClick={()=>{
                    setSelectedSearch(null)
                    setSearchParam(null)
                }}>Reset</button> 

{console.log(selectedSearch, searchParam, anyOrRecent)}
            </form>
            <input
                placeholder="Keywords or sentences"
                onChange={(e) => {
                    setSearchParam(e.target.value)}}
            />
            <button onSubmit={handleSubmit}></button>
            
        </div>
        
    )
}

export default Search