import React, { useContext, useEffect } from "react";
import Downshift from "downshift";

import { SearchContext } from '../../searchContext';




const onChange = selectedBook => {
  alert(`your favourite book is ${selectedBook.name}`);
};

function Test({productsData}) {

    const {searchData}= useContext(SearchContext)

    useEffect(() => {
        // const pp = productsData.data.map((item) => ({ name : item.name}))
        // console.log(pp)


        
    }, [])
    
    const data = productsData.data.map((item) =>  item.name );
    let unique = [...new Set(data)];
    const fixedObject = unique.map( item =>  ({ name: item }))
    const items = fixedObject;

    


  return (
    <>
    <h1>{searchData}</h1>
    <Downshift
      onChange={onChange}
      itemToString={items => (items ? items.name : "")}
    >
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        highlightedItem,
        getLabelProps
      }) => (
        <div>
          <label
            style={{ marginTop: "1rem", display: "block" }}
            {...getLabelProps()}
          >
            Search here
          </label>{" "}
          <br />
          <input {...getInputProps({ placeholder: "Search items" })} />
          {isOpen ? (
            <div className="downshift-dropdown">
              {items
                .filter(
                  item =>
                    !inputValue ||
                    item.name.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((item, index) => (
                  <div
                    className="dropdown-item"
                    {...getItemProps({ key: item.name, index, item })}
                    style={{
                      backgroundColor:
                        highlightedIndex === index ? "lightgray" : "white",
                      fontWeight: selectedItem === item ? "bold" : "normal"
                    }}
                  >
                    {item.name}
                  </div>
                ))}
            </div>
          ) : null}
        </div>
      )}
    </Downshift>
    </>

  );
}

export default Test