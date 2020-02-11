import * as React from 'react';

type NewProjectModalComponentProps = {
    createProjectHandler: () => void
}

type NewProjectModalComponentState = {
    createProjectHandler: () => void
}

class NewProjectModalComponent extends React.Component<NewProjectModalComponentState, NewProjectModalComponentProps>{
    
    constructor(props: NewProjectModalComponentProps){
        super(props);
        
        this.state = {
            createProjectHandler: props.createProjectHandler
        }
    }
    
    render() {
        return (
            <div className="NewProjectModal">
                <div className="NewProjectModal_Content">
                    <h5>Create new project</h5>
                    <div>
                        
                    </div>
                    <label>
                        
                    </label>    
                    <label>
                        Project name
                        <input type="text"/>
                    </label>
                  
                    <label>
                        Framework
                        <select>
                            <option>netcoreapp3.1</option>
                            <option>netcoreapp3.0</option>
                            <option>netcoreapp2.2</option>
                        </select>
                    </label>
                    <div>
                        <button onClick={this.state.createProjectHandler}>Create</button>
                    </div>
                </div>
            </div>  
        );
    }
}

export default NewProjectModalComponent;
