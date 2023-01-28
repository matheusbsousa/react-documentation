import Card from "../UI/Card";
import NewPainel from "./NewPainel";
import Painel from "./Painel";
import './Painel.css';
import PainelGraphic from "./PainelGraphic";
import {useState} from "react";

const PainelPrincipal = () => {

    const [option, setOption] = useState('');
    const [filterYear, setFilterYear] = useState('');

    const onNewPainelCreated = (data: any) => {
        console.log(data);
    }

    const onSelectedOptionChange = (selectedOption) => {
       setFilterYear(selectedOption);
    }

    const paineis = [
        {nomeProfessor: 'Matheus S.', idade: 27, nomeClasse: 'Professor palestrinha', qtdAlunos: 1},
        {nomeProfessor: 'Larissa C.', idade: 18, nomeClasse: 'Aulas fitness', qtdAlunos: 90},
        {nomeProfessor: 'Levy', idade: 20, nomeClasse: 'Java para idiotas', qtdAlunos: 10},
        {nomeProfessor: 'Jess', idade: 30, nomeClasse: 'Mistérios da química', qtdAlunos: 1},
    ]

    return (
        <div>
            <NewPainel onNewPainelCreated={onNewPainelCreated}></NewPainel>
            <Card aditionalClass={'painelPrincipal'}>
                <PainelGraphic onSelectedOptionChange={onSelectedOptionChange}></PainelGraphic>
                <Painel nomeProfessor={paineis[0].nomeProfessor}
                        idade={paineis[0].idade}
                        nomeClasse={paineis[0].nomeClasse}
                        qtdAlunos={paineis[0].qtdAlunos}>
                </Painel>
                <Painel nomeProfessor={paineis[1].nomeProfessor}
                        idade={paineis[1].idade}
                        nomeClasse={paineis[1].nomeClasse}
                        qtdAlunos={paineis[1].qtdAlunos}>
                </Painel>
                <Painel nomeProfessor={paineis[2].nomeProfessor}
                        idade={paineis[2].idade}
                        nomeClasse={paineis[2].nomeClasse}
                        qtdAlunos={paineis[2].qtdAlunos}>
                </Painel>
                <Painel nomeProfessor={paineis[3].nomeProfessor}
                        idade={paineis[3].idade}
                        nomeClasse={paineis[3].nomeClasse}
                        qtdAlunos={paineis[3].qtdAlunos}>
                </Painel>
            </Card>
        </div>
    )


}

export default PainelPrincipal;