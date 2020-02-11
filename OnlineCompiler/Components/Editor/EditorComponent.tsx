import * as React from "react";


type EditorProps = {
};

type EditorState = {
    tabWidth: number,
    indentation: number
};


class EditorComponent extends React.Component<EditorProps, EditorState> {
    
    constructor(props: EditorProps) {
        super(props);

        this.state = {
            tabWidth: 4,
            indentation: 0,
            
        };
    }
    
    
    keyDownHandler = (e: KeyboardEvent): void => {
        if(e.key == 'Tab'){
            const target = e.currentTarget as HTMLTextAreaElement;
            const index = target.selectionStart;
            const lines = target.value
                .substr(0, target.selectionStart)
                .split(/\r?\n|\r/);
            
            // TODO might want to save these line and column number and show them somewhere
            const lineNo = lines.length;
            const colNo =  lines[lines.length -1].length;
            const count = this.state.tabWidth - colNo % this.state.tabWidth;
            target.value = target.value.slice(0, index) + ' '.repeat(count) + target.value.slice(index);
            target.selectionStart = target.selectionEnd = index + count;
            e.preventDefault();
        }
    };
    
    render() {
        return (
            <div className="tile">
                <div className="Editor_Content">
                    <h3>Editor</h3>9
                    <div className="Editor_TextareaContainer">
                        <textarea className="Editor_Textarea" onKeyDown={this.keyDownHandler.bind(this)} onBlur={() => {
                        }}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default  EditorComponent;
