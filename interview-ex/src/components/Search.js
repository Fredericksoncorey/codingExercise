import {React, useState} from "react";
import {getSearchResults, getSearchResultsByDate} from "../api";

const Search = ({searchHistory})=>{
    const [searchParam, setSearchParam] = useState();
    const [selectedTag, setSelectedTag] = useState();
    const [anyOrRecent, setAnyOrRecent] = useState();
    const [searchResults, setSearchResults] = useState();


    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            if(anyOrRecent){
                setSearchResults(await getSearchResultsByDate(searchParam, selectedTag))
                searchHistory.push({
                    time:anyOrRecent,
                    tag:selectedTag,
                    input:searchParam
                    }
                );
                
                console.log(searchResults)
            }else{
                setSearchResults(await getSearchResults(searchParam, selectedTag))
                searchHistory.push({
                    time:anyOrRecent,
                    tag:selectedTag,
                    input:searchParam
                    }
                );
            }
            
        }catch (error) {
            console.error(error);
        }
    };

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
                
                
                        {/* <button onClick={()=>{
                    setSelectedTag(null)
                    setSearchParam(null)
                    setAnyOrRecent(null)
                }}>Reset</button>  
                BUTTON RESETS SEARCHHISTORY LACKED THE TIME TO TROUBLESHOOT*/}
    

            </form>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Keywords or sentences"
                    onChange={(e) => {
                        setSearchParam(e.target.value)}}
                />
                <button type="submit">Search</button>
            </form>
            <div>
                
                {searchResults ? searchResults?.hits.map(result =>{
                    return(<div>
                        {result.title ? <h3>{result.title}</h3> : <h3>{result.story_title}</h3>}
                        {result.url ? <a href={result.url}>{result.url}</a> : <a href={result.story_url}>{result.story_url}</a> }
                        <p><b>By {result.author}</b></p>
                        {result.points ? <p>Points: {result.points}</p> : null}
                        {result.num_comments ? <p>Number of comments {result.num_comments}</p> : null}
                        {result.relevency_score ? <p>Relevancy score: {result.relevancy_score}</p> : null}
                        <hr></hr>

                    </div>)
                })
                 : null}
            </div> 
        

        {searchResults?.hits==false ? <h3>No Results were returned</h3> : null}
         </div>
    )
};

export default Search;