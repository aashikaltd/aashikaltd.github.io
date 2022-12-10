import React from 'react';

function HeaderContainer({ children }) {
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center">
                {children}
            </div>
        </header>
    );
}

export default HeaderContainer;