import React, { useContext } from "react";
import ContagemContext from '../../Context/ContagemContext'

function BtnContagem(){
    // const [contagem, setContagem] = useState(0)
    const { contagem, setContagem } = useContext(ContagemContext)
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