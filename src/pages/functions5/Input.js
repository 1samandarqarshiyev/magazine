import Form from 'react-bootstrap/Form';
import './Style6.css';

function FormControlDisabledExample() {
  return (
    <>
      <Form.Control className='input' type="text" placeholder="Введите e-mail" aria-label="Disabled input example"  />
    </>
  );
}

export default FormControlDisabledExample;