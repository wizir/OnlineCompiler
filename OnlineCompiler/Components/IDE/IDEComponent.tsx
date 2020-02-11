import * as React from 'react';

import ToolbarComponent from "../Toolbar/ToolbarComponent";
import SolutionComponent from "../Solution/SolutionComponent";
import EditorComponent from "../Editor/EditorComponent";
import NewProjectModalComponent from "../Modals/NewProjectModal/NewProjectModalComponent";
import ConsoleComponent from "../Console/ConsoleComponent";
import { IProjectApi} from "../ProjectApi";


type IDEState = {
    Solution: any,
    showNewProjectModal: boolean
}


class IDEComponent extends React.Component<{api: IProjectApi}, IDEState>{
    
    api: IProjectApi;
    
    constructor(props) {
        super(props);
        this.api = props.api;
        
        this.state = {
            Solution: null,
            showNewProjectModal: false   
        }
    }

    

    createNewProjectHandler = () => {
        this.setState({
            showNewProjectModal: false
        });
    };
    
    openCreateNewProjectModalHandler = () => {
        this.setState({
            showNewProjectModal: true
        });
    };
    
    
    debugHandler = () => {};
    compileHandler = () => {};


    render() {
        
        
        return (
            <div className="IDE">
                <div className="IDE_Content">
                    
                    <div className="IDE_Toolbar">
                        <ToolbarComponent createNewProjectHandler={this.openCreateNewProjectModalHandler}
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
                { this.state.showNewProjectModal ? <NewProjectModalComponent createProjectHandler={this.createNewProjectHandler}/> : null}
            </div>
        )
    }
}

export default IDEComponent;
