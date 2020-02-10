import * as React from 'react';

import ToolbarComponent from "../Toolbar/ToolbarComponent";
import SolutionComponent from "../Solution/SolutionComponent";
import EditorComponent from "../Editor/EditorComponent";
import ConsoleComponent from "../Console/ConsoleComponent";
import {Language} from "../../Model/Language.cs";
import { IProjectApi} from "../ProjectApi";

type IDEState = {
    selectedLanguage: Language,
    availableLanguages: Language[]
}



class IDEComponent extends React.Component<{api: IProjectApi}, IDEState>{
    
    api: IProjectApi;
    
    constructor(props) {
        super(props);
        this.api = props.api;
        
        this.state = {
            availableLanguages : [],
            selectedLanguage: null
        }
    }

    


    compileHandler = () => {};

    languageSelectedHandler = (selected: Language) => { this.setState({selectedLanguage: selected})};


    render() {
        
        
        
        
        return (
            <div className="IDE">
                <div className="IDE_Content">
                    
                    <div className="IDE_Toolbar">
                        <ToolbarComponent availableLanguages={this.state.availableLanguages} 
                                          selectedLanguage={this.state.selectedLanguage} 
                                          compileHandler={this.compileHandler} 
                                          languageSelectedHandler={this.languageSelectedHandler} 
                        />
                    </div>
                
                    <div className="IDE_ContentBox">
                        <div className="IDE_EditorSolutionExplorer">
                            
                            <div className="IDE_Solution">
                                <SolutionComponent/>
                            </div>
                            <div className="IDE_Editor">
                                <EditorComponent defaultProgram={this.state.selectedLanguage?.defaultProgram}/>
                            </div>
                            
                        </div>
                    </div>
                
                    <div className="IDE_Console">
                        <ConsoleComponent/>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default IDEComponent;
