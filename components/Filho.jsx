export function Filho(props){

    console.log(props.funcao);
    return (
        <>
            <h1>Filho</h1>
            <h2>Passou {props.passar} </h2>
            <button onClick={props.funcao}>Falar com o pai #1</button>
            <button onClick={() => props.funcao("Passei no ENEM",[3,45,5],123)}>Falar com o pai #2</button>
        </>
    )
}