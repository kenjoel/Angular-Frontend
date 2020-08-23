export class quotes{
    showDetails: boolean
    constructor(public quote: String, public author: String, public publisher: String){
        this.showDetails = false;
    }
}