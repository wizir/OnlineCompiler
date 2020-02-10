import * as React from 'react';

type ToolbarProps = {
    createNewProjectHandler: () => void,
    debugHandler: () => void,
    compileHandler : () => void,
}

const ToolbarComponent: React.FunctionComponent<ToolbarProps> = (props: ToolbarProps) => {

    return (
        <div className="tile">
            <div className="Toolbar_Content">
                <button className="Toolbar_button" onClick={props.createNewProjectHandler}>New Project</button>
                <button className="Toolbar_button" onClick={props.debugHandler}>Debug</button>
            <button className="Toolbar_button" onClick={props.compileHandler}>Run</button>
            </div>
        </div>
    )        
};

export default ToolbarComponent;
