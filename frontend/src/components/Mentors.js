import React from "react";


function Mentors({image, name, field}){
    return(
        <div className="mentors">
            <div style = {{backgroundImage: "url(${image})"}}>
                <h1>
                    {name}
                </h1>
                <p>
                    ${field}
                </p>
            </div>
        </div>
    );

}

export default Mentors;