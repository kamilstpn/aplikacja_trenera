const bcrypt = require('bcryptjs')


class Block {
    

     constructor(timestamp,previousindex,previousHash,data ){
            
        
            this.timestamp=timestamp;
            this.index=previousindex+1;
            this.previousHash=previousHash;
            this.data=data;
            
            this.hash=   this.calculateHash(this.previousHash,this.data);
            

            this.hash=bcrypt.hash(data,10)
            // this.hash= await bcrypt.hash(data,10)
            //  this.calculateHash(this.previousHash,this.data)
            // .then((hres)=>{
            //     this.hash=hres
            //     console.log("tujest")
            // })asd
        
        
        

    }


    static async initialize(timestamp,previousindex,previousHash,data ){
        this.timestamp=timestamp;
        this.index=previousindex+1;
        this.previousHash=previousHash;
        this.data=data;
        this.hash=await bcrypt.hash(data,10)
        return new Block(this.timestamp,this.index,this.previousHash,this.data,this.hash)
    }

    async calculateHash(previousHash,data){
         const new_hash= await bcrypt.hash(data,10)
        //  this.hash=await bcrypt.hash(data,10)
        console.log(new_hash)
        this.hash=new_hash
        return  new_hash

    }

    Create_GenesisBlock(){
        return new Block(Date.now(),-1,null,"{}")
    }

    GetLatestBlock(){
        return Block
    }

    

    addBlock(){

    }


}
module.exports = Block