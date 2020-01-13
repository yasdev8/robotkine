export interface Question {
    code:string;
    titre:string;
    description:string;
    choix:Array<Choix>;
    transfert:string;
    resultAction:Array<Choix>;
}

export interface Choix {
    code:string;
    titre:string;
}
