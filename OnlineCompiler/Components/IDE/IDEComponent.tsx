import * as React from 'react';

import ToolbarComponent from "../Toolbar/ToolbarComponent";
import SolutionComponent from "../Solution/SolutionComponent";
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
                
                <div className="IDE_Toolbar">
                    <ToolbarComponent availableLanguages={this.state.availableLanguages} 
                                      selectedLanguage={this.state.selectedLanguage} 
                                      compileHandler={this.compileHandler} 
                                      languageSelectedHandler={this.languageSelectedHandler} 
                    />
                </div>
                
                <div className="IDE_ContentBox">
                    <div className="IDE_Content">
                        
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
        )
    }
}

export default IDEComponent;
