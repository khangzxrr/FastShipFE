import React from "react";
import SearchForm from "./SearchForm";
import "../home/home.css"

export const ContentUpper = () => {
    return (
        <>
            <div style={{ height: "600px" }}>
                <div style={{
                    width: "750px",
                    height: "1000px",
                    position: "absolute",
                    zIndex: "2",
                    background: "url(/delivery.png) 0 repeat-x",
                    backgroundSize:"750px 500px",
                    marginTop:'-50px'
                }}></div>
                <SearchForm />
                
            </div>

        </>
    );
};