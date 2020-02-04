import * as React from 'react';

import ToolbarComponent from "../Toolbar/ToolbarComponent";
import SolutionExplorerComponent from "../SolutionExplorer/SolutionExplorerComponent";
import EditorComponent from "../Editor/EditorComponent";
import ConsoleComponent from "../Console/ConsoleComponent";

type IDEState = {
    selectedLanguageId: number,
    
}

class IDEComponent extends React.Component{
    
    
    compileHandler = () => {};

    languageSelectedHandler = (selectedId: number) => { console.log(selectedId)};


    render() {
        
        const languages = [
            {id: 1, name: "Js"},
            {id: 2, name: "C++"},
            {id: 3, name: "Python"},
            {id: 4, name: "bash"}
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
                
                <div >
                    <ConsoleComponent/>
                    
                </div>
            </div>
        )
    }
}

export default IDEComponent;
