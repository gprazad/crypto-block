const SHA256 = require('crypto-js/sha256');

class blockCoin{
    constructor(index, timestamp, data, previousLink){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousLink = previousLink;
        this.hashLink = this.generateHash();
    }

    generateHash(){
        return SHA256(this.index + this.timestamp + this.previousLink + JSON.stringify(this.data)).toString()
    }
}
