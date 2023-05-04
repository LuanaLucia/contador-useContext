import React from "react";

function BtnContagem(){
    // const [contagem, setContagem] = useState(0)
    function handleClick(){
        setContagem(contagem + 1);
    }
    return(
        <div>
            <button onClick={handleClick}> Adicionar</button>
        </div>
    );
}
export default BtnContagem;