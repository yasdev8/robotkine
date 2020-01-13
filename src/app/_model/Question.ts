export interface Question {
    code:string;
    titre:string;
    description:string;
    choix:Array<Choix>;
    transfert:string;
    final:string;
}

export interface Choix {
    code:string;
    titre:string;
}
