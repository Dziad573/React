import ReactDOM from 'react-dom/client';
import { LinkComponent } from "./components/LinkComponent";

const element = (
  <>
    <h1>Nasza strona!</h1>
    <main>
      <LinkComponent/>
      <p>
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Quo at alias 
        impedit nemo, ea aperiam.
      </p>
      <LinkComponent/>
    </main>
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(element);
