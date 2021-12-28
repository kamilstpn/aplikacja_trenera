import { rest } from 'msw';
import { Block } from 'blockchain/blockchain';
import {db} from 'mocks/db';
// import BlockchainJson from 'BlockchainJson';
import data from './BlockchainJson.json';
 import fs from 'fs';

// const fs=require('fs')
// export const blockchain=[
//     rest.post('/blockchain',(req,res,ctx) => {
//         var tablica=[]
//         tablica.push(new Block(0,0,null,"{aaa}"))
        

        // // let chain=[]
        // // chain.push(new Block(0,0,null,"{aaa}"))
        // // let bcdata=JSON.stringify(chain)
        // // fs.writeFileSync("./blockchain.json",bcdata,'utf8',function(error){
        // // if(error) console.log(error)
        export const blockchain = [
            rest.get('http://localhost:3000/blockchain', (req, res, ctx) => {
              console.log('jooooo')
              console.log(data)
              //let zmienna=fs.readFileSync('./BlockchainJson.json')
              // console.log(zmienna)
              //  const blockchain = db.blockchain.getAll();
              // prompt(bloczek)
              //ctx.status(200), ctx.json( "Siema" )
              return res(ctx.status(200), ctx.json( data ));
            }),
          ];
           export const blockchainadd=[
            rest.post('http://localhost:3000/blockchainadd', (req, res, ctx) => {
              console.log(req.body.cont)
              data.push({content: req.body.cont})
              //  writeJsonFile('BlockchainJson.json', data);
              return res(
                ctx.status(200),
                ctx.json(data)
              );
            }),
            //blockchain: db.zmienna.getAll()
            //ctx.status(200), ctx.json( "Siema" )
            // rest.get('/me', (req, res, ctx) => {
            //   if (authenticateRequest(req)) {
            //     const user = db.coach.getAll();
            //     return res(ctx.status(200), ctx.json({ ...seperate(user) }));
            //   }
            //   return res(ctx.status(401));
        // })
        // let bc=fs.readfilesync('handlers/BlockchainJson.json')
        // return res(ctx.status(200), ctx.json(bc));
    

];
