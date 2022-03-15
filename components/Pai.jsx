import { Filho } from "./Filho";

export function Pai(){

    const falarComigo = function(param, param2, param3) {
        console.log(param, param2, param3);
    }

    return (
        <Filho passar="Sim" funcao = {falarComigo}/>
    )
}