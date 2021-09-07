const History = ({searchHistory})=>{
    return( 
        <div>   
            <h1>Search History</h1>
            {searchHistory.map(search=>{
                return(
                    <>
                        <p>You searched
                            <b>{search.tag ? " "+search.tag+" ": " Non-Specific "} </b>
                            for <b>"{search.input}"</b> at
                            <b>{search.time ? " Most Recent" : " Any Time"}</b>    
                        </p>
                        <hr></hr>
                    </>
                        )
                    }
                )
            }
        </div>  
    )
};

export default History;