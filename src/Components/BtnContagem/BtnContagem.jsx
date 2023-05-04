import React, { useContext, useState } from "react";
import ContagemContext from '../../Context/ContagemContext'


function BtnContagem(){
     const [leitura, setLeitura] = useState("Vou Ler")
    const { contagem, setContagem } = useContext(ContagemContext)
    const [ativo, setAtivo] = useState(false)
    function handleClick(){
            setContagem(contagem + 1);
            setLeitura("Lido");
            setAtivo(true);

    }
    return(
        <div>
            <button onClick={handleClick} disabled={ativo}>{leitura}</button>
        </div>
    );
}
export default BtnContagem;