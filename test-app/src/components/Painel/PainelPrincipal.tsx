import Card from "../UI/Card";
import NewPainel from "./NewPainel";
import Painel from "./Painel";
import './Painel.css';

function PainelPrincipal() {

    return (
        <div>
            <NewPainel></NewPainel>
            <Card aditionalClass={'painelPrincipal'}>
                <Painel nomeProfessor={'Matheus S.'} idade={27} nomeClasse={'Comedores de Larissa'} qtdAlunos={1}></Painel>
                <Painel nomeProfessor={'Larissa C.'} idade={18} nomeClasse={'Dadoras pra Matheus'} qtdAlunos={69}></Painel>
                <Painel nomeProfessor={'Gays'} idade={11} nomeClasse={'Gays são demais'} qtdAlunos={11}></Painel>
                <Painel nomeProfessor={'Plure Amor'} idade={69} nomeClasse={'Mais amor para o mundo'} qtdAlunos={69}></Painel>
            </Card>
        </div>
    )





}

export default PainelPrincipal;