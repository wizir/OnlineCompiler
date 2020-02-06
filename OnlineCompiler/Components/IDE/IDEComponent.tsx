import * as React from 'react';

import ToolbarComponent from "../Toolbar/ToolbarComponent";
import SolutionExplorerComponent from "../SolutionExplorer/SolutionExplorerComponent";
import EditorComponent from "../Editor/EditorComponent";
import ConsoleComponent from "../Console/ConsoleComponent";

type IDEState = {
    selectedLanguage: { id: number, name: string, placeholder: string },
    languages: { id: number, name: string, placeholder: string }[]
        
}



class IDEComponent extends React.Component<{}, IDEState>{
    
    
    constructor(props) {
        super(props);

        const languages = [
            { id: 1, name: "Js", placeholder: "Js placeholder" },
            { id: 2, name: "C++", placeholder: "C++ placeholder" },
            { id: 3, name: "Python", placeholder: "python placeholder" },
            { id: 4, name: "bash", placeholder: "bash placeholder" }
        ];

        this.state = {
            languages: languages,
            selectedLanguage: languages[0],
        };
    }
    
    compileHandler = () => {};

    languageSelectedHandler = (selectedId: number) => { console.log(selectedId)};


    render() {
        
        
        
        
        return (
            <div className="IDE">
                
                <ToolbarComponent languages={this.state.languages} 
                                  selectedLanguage={this.state.selectedLanguage} 
                                  compileHandler={this.compileHandler} 
                                  languageSelectedHandler={this.languageSelectedHandler} />
                
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
