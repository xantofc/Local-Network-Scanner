const ping = require('ping');
const os = require('os');
const fs = require('fs');

// Function to get the private IP address from the local machine
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

// Function to scan local network and save results to a JSON file
function scanNetwork() {
  const ip = getPrivateIp();

  if (!ip) {
    console.error('Unable to find a valid private IP address.');
    return;
  }

  // Get the subnet (e.g., '192.168.1.' from '192.168.1.10')
  const subnet = ip.split('.').slice(0, 3).join('.') + '.';
  const devices = [];

  // Scan IP range (e.g., 192.168.1.1 to 192.168.1.254)
  const promises = [];

  for (let i = 1; i <= 254; i++) {
    const address = subnet + i;
    promises.push(
      ping.promise.probe(address)
        .then((result) => {
          if (result.alive) {
            console.log(`${address} is online`);
            devices.push({
              ip: address,
              alive: true,
              responseTime: result.time
            });
          }
        })
    );
  }

  // After all pings are done, write results to a JSON file
  Promise.all(promises)
    .then(() => {
      const jsonOutput = JSON.stringify(devices, null, 2);
      fs.writeFile('connected_devices.json', jsonOutput, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('Scan complete! Results saved in connected_devices.json');
        }
      });
    })
    .catch((err) => {
      console.error('Error during scanning:', err);
    });
}

// Run the scan
scanNetwork();
