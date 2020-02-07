
import {Http} from './Http';
import {Language} from "../Model/Language.cs";

export interface ICompilerApi{
    getLanguages() : Promise<Language[]>;
}



export class CompilerApi implements ICompilerApi {
    getLanguages(): Promise<Language[]>{
        return Http.get(`/api/languages`) as Promise<Language[]>;
    }
}


