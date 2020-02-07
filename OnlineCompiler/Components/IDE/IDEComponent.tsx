import * as React from 'react';

import ToolbarComponent from "../Toolbar/ToolbarComponent";
import SolutionExplorerComponent from "../SolutionExplorer/SolutionExplorerComponent";
import EditorComponent from "../Editor/EditorComponent";
import ConsoleComponent from "../Console/ConsoleComponent";
import { ICompilerApi} from "../CompilerApi";
import {Language} from "../../Model/Language.cs";

type IDEState = {
    selectedLanguage: Language,
    availableLanguages: Language[]
}



class IDEComponent extends React.Component<{api: ICompilerApi}, IDEState>{
    
    api: ICompilerApi;
    
    constructor(props) {
        super(props);
        this.api = props.api;
        
        this.state = {
            availableLanguages : [],
            selectedLanguage: null
        }
    }

    
    componentDidMount(): void {
        this.api.getLanguages().then(languages => this.setState({
            selectedLanguage: languages[0],
            availableLanguages: languages
        }));
        
    }


    compileHandler = () => {};

    languageSelectedHandler = (selected: Language) => { this.setState({selectedLanguage: selected})};


    render() {
        
        
        
        
        return (
            <div className="IDE">
                
                <ToolbarComponent availableLanguages={this.state.availableLanguages} 
                                  selectedLanguage={this.state.selectedLanguage} 
                                  compileHandler={this.compileHandler} 
                                  languageSelectedHandler={this.languageSelectedHandler} />
                
                <div className="row">
                    
                    <div className="flex-1x">
                        <SolutionExplorerComponent/>
                    </div>
                    <div className="flex-5x">
                        <EditorComponent defaultProgram={this.state.selectedLanguage?.defaultProgram}/>
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
