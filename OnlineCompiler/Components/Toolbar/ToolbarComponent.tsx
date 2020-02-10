import * as React from 'react';

type ToolbarProps = {
    compileHandler : () => void
}

const ToolbarComponent: React.FunctionComponent<ToolbarProps> = (props: ToolbarProps) => {

    return (
        <div className="tile">
            <div className="Toolbar_Content">
            
            <button className="Toolbar_CompileButton" onClick={props.compileHandler}>Run</button>
            </div>
        </div>
    )        
};

export default ToolbarComponent;
