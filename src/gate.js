import React from 'react';

function Gate(isOpen) {
    return(
    <div>
        <p>This Gate is  <strong>{isOpen === true ? "Open" : "Closed"}</strong> </p>
    </div>
);}

export default Gate;