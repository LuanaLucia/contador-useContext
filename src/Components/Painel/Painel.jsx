import React, { useState, useEffect } from "react";
import "./Painel.css"

function Painel(props){
    const [classe, setClasse] = useState("")

    useEffect(()=>{
        if (props.contagem > 0)
            setClasse("destaque")
    }, [props.contagem])

    return(
        <div className={classe}>
            <span>{props.contagem}</span>
        </div>
    );
}
export default Painel;