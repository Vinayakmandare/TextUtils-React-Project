import React from 'react';

export default function Alert(props) {
    // Arrow function for showing alert message success to Success(first word capital)
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div>
      {props.alert && ( // Added conditional check for props.alert
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
         {/* capitalize arrow function call here */}
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
      )}
    </div>
  );
}
