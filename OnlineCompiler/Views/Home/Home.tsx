import * as ReactDOM from 'react-dom';
import * as React from 'react';

import EditorComponent from '../../Components/Editor/EditorComponent';
import ConsoleComponent from '../../Components/Console/ConsoleComponent';

document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById('editor');
    ReactDOM.render(<EditorComponent/>, editor);

    const console = document.getElementById('console');
    ReactDOM.render(<ConsoleComponent/>, console);
});
