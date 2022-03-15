import Estilo from "../../components/Estilo";

export default function usandoEstilo(){
    return (
        <div>
            <Estilo numero={3} colo="#000"/>
            <Estilo numero={-5} colo="#FFF" direita/>
        </div>
    )
}