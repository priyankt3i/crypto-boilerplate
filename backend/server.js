const express = require('express');
const Blockchain = require('./blockchain');
const app = express();
const port = 3000;

const myBlockchain = new Blockchain();

app.get('/mine', (req, res) => {
  const newBlock = new Block(myBlockchain.chain.length, Date.now(), { amount: 50 });
  myBlockchain.addBlock(newBlock);
  res.send('Block mined: ' + newBlock.hash);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
