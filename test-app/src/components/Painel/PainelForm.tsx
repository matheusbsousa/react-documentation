import { useState } from 'react';
import './Painel.css'

const PainelForm = (props) => {

    const [professor, setProfessor] = useState('');
    const [idade, setIdade] = useState('');
    const [classe, setClasse] = useState('');
    const [qtdAlunos, setQtdAlunos] = useState('');

    const onProfessorChange = (event: any) => {
        setProfessor(event.target.value);
        
    }
    const onIdadeChange = (event: any) => {
        setIdade(event.target.value);
        
    }
    const onClasseChange = (event: any) => {
        setClasse(event.target.value);
        
    }
    const onQtdAlunosChange = (event: any) => {
        setQtdAlunos(event.target.value);
        
    }

    const submitHandler = (event: any) => {
        event.preventDefault();

        let data = {
            professor: professor,
            idade: idade,
            classe: classe,
            qtdAlunos: qtdAlunos
        }

        props.onNewPainelCreated(data);

        setProfessor('');
        setClasse('');
        setIdade('');
        setQtdAlunos('');
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-painel-controls'>
                <div className='new-painel-control'>
                    <label>Professor</label>
                    <input type="text" value={professor} onChange={onProfessorChange} />
                </div>
                <div className='new-painel-control'>
                    <label>Idade</label>
                    <input type="number" value={idade} min={1} max={99} onChange={onIdadeChange}/>
                </div>
                <div className='new-painel-control'>
                    <label>Classe</label>
                    <input type="text" value={classe} onChange={onClasseChange} />
                </div>
                <div className='new-painel-control'>
                    <label>Quantidade de alunos</label>
                    <input type="number" value={qtdAlunos} min={1} max={99} onChange={onQtdAlunosChange} />
                </div>
            </div>
            <div className='new-painel-actions'>
                <button type='submit'>Add painel </button>
            </div>
        </form>
    )
}

export default PainelForm;