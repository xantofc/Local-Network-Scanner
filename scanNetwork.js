// scanner.js
const ping = require('ping');
const os = require('os');
const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

// Function to get the private IP address
function getPrivateIp() {
    const networkInterfaces = os.networkInterfaces();
    let privateIp = '';
    
    for (const iface in networkInterfaces) {
        for (const details of networkInterfaces[iface]) {
            if (!details.internal && details.family === 'IPv4') {
                privateIp = details.address;
                break;
            }
        }
    }
    
    return privateIp;
}

// API endpoint to get local IP
app.get('/localip', (req, res) => {
    const ip = getPrivateIp();
    res.json({ ip });
});

// API endpoint to trigger scan
app.post('/scan', async (req, res) => {
    const ip = getPrivateIp();
    
    if (!ip) {
        res.status(500).json({ error: 'Unable to find a valid private IP address.' });
        return;
    }

    const subnet = ip.split('.').slice(0, 3).join('.') + '.';
    const devices = [];
    const promises = [];

    for (let i = 1; i <= 254; i++) {
        const address = subnet + i;
        promises.push(
            ping.promise.probe(address)
                .then((result) => {
                    if (result.alive) {
                        devices.push({
                            ip: address,
                            alive: true,
                            responseTime: result.time
                        });
                    }
                })
        );
    }

    try {
        await Promise.all(promises);
        fs.writeFileSync('connected_devices.json', JSON.stringify(devices, null, 2));
        res.json(devices);
    } catch (error) {
        res.status(500).json({ error: 'Error during scanning' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
