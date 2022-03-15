import { If } from "../components/IF";

export default function condicional(){
    const number = 4;
    return(
        <div>
            <If test={number % 2 === 0}>
                <h1>O numero {number} é par w</h1>
                <ul>
                    <li>wdede</li>
                    <li>papapa HAHAHA</li>
                    <li>XAXAXAXA</li>
                </ul>
            </If>
            <If test={number % 2 === 1}>
                <h1>O numero {number} é ímpar</h1>
                <ul>
                    <li>wdede BABAB</li>
                    <li>papapa</li>
                    <li>ZXZXZXX</li>
                </ul>
            </If>
        </div>
    )
}