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
        this.api.getLanguages().then(result => this.setState({
            selectedLanguage: result[0],
            availableLanguages: result
        }));
        
    }


    compileHandler = () => {};

    languageSelectedHandler = (selectedId: number) => { console.log(selectedId)};


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
