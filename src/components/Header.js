import React from 'react'

const Header = ({ToggleDarkMode}) => {
    
    return (
        <div className="header">
            <h1>Note App</h1>
            <button onClick={()=> ToggleDarkMode((previousDarkMode)=> !previousDarkMode)}>Toggle Mode</button>
        </div>
    )
}

export default Header
