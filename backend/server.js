
const express = require('express');
const crypto = require('crypto');
const app = express();
const PORT = 3000;

class Block {
    constructor(index, previousHash, timestamp, data, nonce = 0) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.nonce = nonce;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        const blockString = `${this.index}${this.previousHash}${this.timestamp}${JSON.stringify(this.data)}${this.nonce}`;
        return crypto.createHash('sha256').update(blockString).digest('hex');
    }

    mineBlock(difficulty) {
        const target = '0'.repeat(difficulty);
        while (this.hash.substring(0, difficulty) !== target) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
        this.pendingTransactions = [];
        this.miningReward = 50;
    }

    createGenesisBlock() {
        return new Block(0, '0', Date.now(), 'Genesis Block');
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    minePendingTransactions(rewardAddress) {
        const block = new Block(
            this.chain.length,
            this.getLatestBlock().hash,
            Date.now(),
            this.pendingTransactions
        );
        block.mineBlock(this.difficulty);

        this.chain.push(block);

        this.pendingTransactions = [{ from: null, to: rewardAddress, amount: this.miningReward }];
    }

    addTransaction(sender, receiver, amount) {
        if (!sender || !receiver || amount <= 0) {
            throw new Error('Invalid transaction');
        }
        this.pendingTransactions.push({ from: sender, to: receiver, amount });
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) return false;
            if (currentBlock.previousHash !== previousBlock.hash) return false;
        }
        return true;
    }
}

const blockchain = new Blockchain();

app.use(express.json());

app.get('/chain', (req, res) => {
    res.json(blockchain.chain);
});

app.post('/transactions', (req, res) => {
    const { sender, receiver, amount } = req.body;
    try {
        blockchain.addTransaction(sender, receiver, amount);
        res.json({ message: 'Transaction added successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/mine', (req, res) => {
    const { rewardAddress } = req.body;
    blockchain.minePendingTransactions(rewardAddress);
    res.json({ message: 'Block mined successfully', chain: blockchain.chain });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
