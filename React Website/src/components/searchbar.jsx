import React, {useState} from 'react';
import '../styles/searchbar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close'



export default function Searchbar({placeholder, data} ){
    
    // Fetch the data from the db 
    const [filterData, setFilteredData] = useState([]);
    const [wordEntered,  setWordEntered] = useState([]);


    const handleFilter = (event) =>{ 
        const searchHousing = event.target.value
        setWordEntered(searchHousing)
        const newFilter = data.filter((value)=> { 
            return value.name.toLowerCase().includes(searchHousing.toLowerCase()); 
        });
        if (searchHousing === ""){
            setFilteredData([]);
        }
        else {setFilteredData(newFilter);
        };
    };
    const clearInput = (event) =>{
        setFilteredData([]);
        setWordEntered("")


    }

    return (
        <div>
            <div className="searchbar">
                <div className="searchInputs">
                    <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />  
                    <div className="searchIcon"> 
                    {filterData.length=== 0  ? (
                    <SearchIcon /> 
                    ) : (
                    <CloseIcon id="clearBtn" onClick={clearInput} />
                )}
                </div>
                </div> 
                {filterData.length !== 0 && (
                <div className="dataResults">
                    {filterData.slice(0,1).map((value, key)=>{
                        return(
                            <a className='dataItem' href={value.link} >
                                <p>{value.name}</p>
                            </a>

                        );
                    })}
                    
                </div>
                )}
            </div>
        </div>
    );
}