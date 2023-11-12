import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import './Style.css';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button className='button_modal' onClick={() => setOpen(!open)} aria-controls="example-fade-text" aria-expanded={open}>
      Нажмите здесь
      </Button>
      <Fade in={open}>
        <div className='container' id="example-fade-text">
            <br/>
            <p className='modal_text_block'>
                Terry Richardson in the Squid commercial. Nihil Anim Keffiyeh Helvetica, craft beer Trude Wes Anderson Cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus Terry Richardson in the Squid commercial. Nihil Anim Keffiyeh Helvetica, craft beer Trude Wes Anderson Cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus Terry Richardson in the Squid commercial. Nihil Anim Keffiyeh Helvetica, craft beer Trude Wes Anderson Cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus Terry Richardson in the Squid commercial. Nihil Anim Keffiyeh Helvetica, craft beer Trude Wes Anderson Cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus Terry Richardson in the Squid commercial. Nihil Anim Keffiyeh Helvetica, craft beer Trude Wes Anderson Cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus Terry Richardson in the Squid commercial. Nihil Anim Keffiyeh Helvetica, craft beer Trude Wes Anderson Cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus Terry Richardson in the Squid commercial. Nihil Anim Keffiyeh Helvetica, craft beer Trude Wes Anderson Cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus Terry Richardson in the Squid commercial. Nihil Anim Keffiyeh Helvetica, craft beer Trude Wes Anderson Cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus Terry Richardson in the Squid commercial. Nihil Anim Keffiyeh Helvetica, craft beer Trude Wes Anderson Cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus Terry Richardson in the Squid commercial. Nihil Anim Keffiyeh Helvetica, craft beer Trude Wes Anderson Cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus Terry Richardson in the Squid commercial. Nihil Anim Keffiyeh Helvetica, craft beer Trude Wes Anderson Cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus Terry Richardson in the Squid commercial. Nihil Anim Keffiyeh Helvetica, craft beer Trude Wes Anderson Cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus Terry Richardson in the Squid commercial. Nihil Anim Keffiyeh Helvetica, craft beer Trude Wes Anderson Cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus Terry Richardson in the Squid commercial. Nihil Anim Keffiyeh Helvetica, craft beer Trude Wes Anderson Cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus Terry Richardson in the Squid commercial. Nihil Anim Keffiyeh Helvetica, craft beer Trude Wes Anderson Cred nesciunt sapiente ea proident.
            </p>
        </div>
      </Fade>
    </>
  );
}

export default Example;