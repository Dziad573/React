import ReactDOM from 'react-dom/client';
import { LinkComponent } from "./components/LinkComponent";
import { HeadingItalic } from "./components/HeadingItalic";
import { Logger } from "./components/Logger";

const element = (
  <>
    <Logger>
      <HeadingItalic>Nasza strona</HeadingItalic>
    </Logger>
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
