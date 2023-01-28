import PainelForm from './PainelForm';
import './Painel.css'

const NewPainel = (props) => {

    const onNewPainelCreated = (data: any) => {
        props.onNewPainelCreated(data);
    }

  return (
    <div className='new-painel'>
        <PainelForm onNewPainelCreated={onNewPainelCreated}></PainelForm>
    </div>
  )
}

export default NewPainel;