declare global {
    interface Error{
        status: number;
    }
}


export class Http{
    
    static serviceNotAvailableMessage = 'Service is not available';
    
    static get(url: string, data?: any): Promise<any>{
        return fetch(url, {
            method: 'GET',
            cache: 'reload'
        })
        .then(result => {
            if(result.status === 204){
                return {};
            }else if (result.status >= 400){
                const error = new Error(`Request failed: ${result.status}: ${result.statusText}`);
                error.status = result.status;
                throw error;
            }else{
                return result.json();
            }
        });
    }
    
    
    static post(url: string, data: any): Promise<any> {
        return fetch(url, {
            method: 'POST',
            cache: 'reload',
            credentials: 'same-origin',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(result => {
            if(result.status === 204){
                return {};
            }else if (result.status >= 400){
                const error = new Error(`Request failed: ${result.status}: ${result.statusText}`);
                error.status = result.status;
                throw error;
            }else{
                return result.json();
            }    
        });
    }
    
    
    static handleError(e: Error, reason: string, message?: string){
        if(!e.status){
            console.log(reason);
        }else if(e.status == 503){
            alert(`${message || reason}\n${this.serviceNotAvailableMessage}`);
        }else{
            alert(`${message || reason}\n${e}`);
        }
    }
}
