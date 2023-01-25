import { useState } from 'react';
import './Painel.css'

const PainelForm = () => {

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


    return (
        <form>
            <div className='new-painel-controls'>
                <div className='new-painel-control'>
                    <label>Professor</label>
                    <input type="text" onChange={onProfessorChange} />
                </div>
                <div className='new-painel-control'>
                    <label>Idade</label>
                    <input type="number" min={1} max={99} onChange={onIdadeChange}/>
                </div>
                <div className='new-painel-control'>
                    <label>Classe</label>
                    <input type="text" onChange={onClasseChange} />
                </div>
                <div className='new-painel-control'>
                    <label>Quantidade de alunos</label>
                    <input type="number" min={1} max={99} onChange={onQtdAlunosChange} />
                </div>
            </div>
            <div className='new-painel-actions'>
                <button type='submit'>Add painel </button>
            </div>
        </form>
    )
}

export default PainelForm;