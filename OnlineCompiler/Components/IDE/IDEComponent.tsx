﻿import * as React from 'react';

import ToolbarComponent from "../Toolbar/ToolbarComponent";
import SolutionComponent from "../Solution/SolutionComponent";
import EditorComponent from "../Editor/EditorComponent";
import ConsoleComponent from "../Console/ConsoleComponent";
import { IProjectApi} from "../ProjectApi";


type IDEState = {
    Solution: any
}


class IDEComponent extends React.Component<{api: IProjectApi}, {}>{
    
    api: IProjectApi;
    
    constructor(props) {
        super(props);
        this.api = props.api;
        
    }

    

    createNewProjectHandler = () => {};
    debugHandler = () => {};
    compileHandler = () => {};


    render() {
        
        
        return (
            <div className="IDE">
                <div className="IDE_Content">
                    
                    <div className="IDE_Toolbar">
                        <ToolbarComponent createNewProjectHandler={this.createNewProjectHandler}
                                          debugHandler={this.debugHandler}
                                          compileHandler={this.compileHandler}/>
                    </div>
                
                    <div className="IDE_ContentBox">
                        <div className="IDE_EditorSolutionExplorer">
                            
                            <div className="IDE_Solution">
                                <SolutionComponent/>
                            </div>
                            <div className="IDE_Editor">
                                <EditorComponent />
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
