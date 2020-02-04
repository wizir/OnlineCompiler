import * as React from 'react';

import ToolbarComponent from "../Toolbar/ToolbarComponent";
import SolutionExplorerComponent from "../SolutionExplorer/SolutionExplorerComponent";
import EditorComponent from "../Editor/EditorComponent";
import ConsoleComponent from "../Console/ConsoleComponent";



class IDEComponent extends React.Component{
    
    
    compileHandler = () => {};

    languageSelectedHandler = () => {};


    render() {
        
        const languages = [
            {id: 1, name: "Js"},
            {id: 2, name: "C++"},
            {id: 3, name: "Python"},
        ];
        
        
        
        return (
            <div className="IDE">
                
                <ToolbarComponent languages={languages} compileHandler={this.compileHandler} languageSelectedHandler={this.languageSelectedHandler} />
                
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
