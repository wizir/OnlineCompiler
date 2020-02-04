import * as React from 'react';

type ToolbarProps = {
    languages: {
        id: number,
        name: string,
    }[],
    compileHandler: () => void,
    languageSelectedHandler: () => void
    
}

const ToolbarComponent: React.FunctionComponent<ToolbarProps> = (props: ToolbarProps) => {

    return (
        <div className="Toolbar">
                <div className="Toolbar_Languages">
                    {props.languages.map(l => <span key={l.id}> {l.name}</span>)}
                </div>
            <button className="Toolbar_CompileButton">Compile</button>
        </div>
    )        
};

export default ToolbarComponent;
