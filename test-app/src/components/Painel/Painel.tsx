import Card from '../UI/Card';
import React, { useState } from 'react';
import './Painel.css';

function Painel(props) {

    const [nomeClasse, setNomeClasse] = useState(props.nomeClasse);

    const mudarClassName = () => {
        setNomeClasse("Novo nome Classe");
        console.log(nomeClasse);    
    }

    const data = {
        nomeProfessor: props.nomeProfessor,
        idade: props.idade,
        qtdAlunos: props.qtdAlunos
    }

    return (
        <Card aditionalClass={"painel painelItem"}>
            <div className='professor'>
                <p>Nome do professor: {data.nomeProfessor}</p>
                <p>Idade: {data.idade}</p>
            </div>
            <div className='turma'>
                <p>Nome da classe: {nomeClasse}</p>
                <p>Quantidade de alunos: {data.qtdAlunos}</p>
            </div>
            <button onClick={mudarClassName}>Mudar nome da classe</button>
        </Card>
    )

}

export default Painel;