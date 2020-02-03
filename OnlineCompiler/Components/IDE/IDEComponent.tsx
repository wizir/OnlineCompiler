import * as React from 'react';

import ToolbarComponent from "../Toolbar/ToolbarComponent";
import FilesComponent from "../Files/FilesComponent/FilesComponent";
import EditorComponent from "../Editor/EditorComponent";
import ConsoleComponent from "../Console/ConsoleComponent";



class IDEComponent extends React.Component{
    
    render() {
        return (
            <div>
                
            <ToolbarComponent/>
            <FilesComponent/>
            <EditorComponent/>
            <ConsoleComponent/>
            </div>
        )
    }
}

export default IDEComponent;
