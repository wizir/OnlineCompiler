import * as React from 'react';

import ToolbarComponent from "../Toolbar/ToolbarComponent";
import SolutionExplorerComponent from "../SolutionExplorer/SolutionExplorerComponent";
import EditorComponent from "../Editor/EditorComponent";
import ConsoleComponent from "../Console/ConsoleComponent";



class IDEComponent extends React.Component{
    
    render() {
        return (
            <div className="IDE">
                
                <ToolbarComponent/>
                
                <div className="row">
                    
                    <div className="flex-1x">
                        <SolutionExplorerComponent/>
                    </div>
                    <div className="flex-5x">
                        <EditorComponent />
                    </div>
                </div>
                
                <ConsoleComponent/>
            </div>
        )
    }
}

export default IDEComponent;
