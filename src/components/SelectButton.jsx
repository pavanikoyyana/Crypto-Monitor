import React from 'react';
const SelectButton = ({ children, selected, onClick }) => {
  
  return (
   <span onClick={onClick} 
   style={{  
    border: "1px solid cyan",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "cyan",
      color: "black",
    },
    width: "22%",
     margin: 5,
  
     backgroundColor: selected ? "cyan" : "",
    color: selected ? "black" : "",
    fontWeight: selected ? 700 : 500,}}
   
   
   >


    {children}
   </span>
  )
}

export default SelectButton;