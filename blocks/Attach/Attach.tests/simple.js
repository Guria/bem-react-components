import React from 'react';
import ReactDom from 'react-dom';
import Attach from 'b:Attach m:switcher=button';

function App() {
    return (
        <div>
            <Attach switcher="button" text="Choose file" noFileText="no file"/>
        </div>
    );
}

ReactDom.render(<App/>, document.getElementById('root'));
