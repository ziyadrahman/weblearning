import React from "react";


  /* For Spread Operator Using*/
function Counter({title,count,text})
{

    return(
        <div>
            <h1>This Componenent</h1>
            <h2>{title}{count}{text}</h2>
        </div>
    )
}
export default Counter;