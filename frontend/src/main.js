import './index.css';

document.getElementById('mine-button').addEventListener('click', async () => {
    const response = await fetch('/api/mine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rewardAddress: 'Miner1' }),
    });
    const data = await response.json();
    console.log(data);
});