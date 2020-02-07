import * as React from 'react';
import {Language} from "../../Model/Language.cs";

type ToolbarProps = {
    availableLanguages: Language[]
    selectedLanguage: Language, 
    compileHandler: () => void,
    languageSelectedHandler: (sender: any, id: number) => void
    
}

const ToolbarComponent: React.FunctionComponent<ToolbarProps> = (props: ToolbarProps) => {

    return (
        <div className="Toolbar">
                <div className="Toolbar_Languages">
                    {props.availableLanguages.map(l => <button 
                        onClick={props.languageSelectedHandler.bind(this, l.id)} 
                        className="Toolbar_Language" 
                        key={l.id}> {l.name}</button>)}
                </div>
            <button className="Toolbar_CompileButton" onClick={props.compileHandler}>Run</button>
        </div>
    )        
};

export default ToolbarComponent;
