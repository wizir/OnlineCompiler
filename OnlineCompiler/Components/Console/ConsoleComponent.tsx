import * as React from 'react';

class ConsoleComponent extends React.Component {
    
    
    render(){
        return (
            <div className="tile">
                <div className="Console_Content">
                    <div className="Console_TextareaContainer">
                        <textarea className="Console_Textarea" value="this is console content"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default  ConsoleComponent;
