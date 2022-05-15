class Blockchain{
    constructor(){
        this.blockchain = [this.createInitBlock()];
    }
    createInitBlock(){
        return new blockCoin(0, "15/05/2022", "First Coin in the Chain", "0");
    }
    getLatestBlock(){
        return this.blockchain[this.blockchain.length - 1];
    }
    addNewBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.generateHash();
        this.blockchain.push(newBlock);
    }
    validateChain(){
        for(let i = 1; i<this.blockchain.length; i++){
            const currentBlock = this.blockchain[i];
            const previousBlock = this.blockchain[i-1];
            if(currentBlock.hashLink !== currentBlock.generateHash()){
                return false;
            }
            if(currentBlock.previousLink !== previousBlock.hashLink){
                return false;
            }
            return true;

        }
    }
}
