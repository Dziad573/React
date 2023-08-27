import ReactDOM from 'react-dom/client';
import { LinkComponent } from "./components/LinkComponent";

const element = (
  <>
    <h1>Nasza strona!</h1>
    <main>
      <LinkComponent text="Sprawdź naszą stronę" shouldOpenNewTab={true}/>
      <p>
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Quo at alias 
        impedit nemo, ea aperiam.
      </p>
      <LinkComponent text="https://zrozumiecreact.pl" shouldOpenNewTab={false}/>
    </main>
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(element);
