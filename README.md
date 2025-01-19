# Local-Network-Scanner
A Node.js application to scan your local network, detect online devices, and log them to a JSON file 📜.

# Local Network Scanner 🌐🔍

network-scanner/
├── scanNetwork.js        # 🖥️ Main script to scan the network
├── package.json          # 📦 Project metadata and dependencies
├── .gitignore            # 🚫 Files to ignore (node_modules, etc.)
└── README.md             # 📖 Project description and usage instructions


A Node.js application to scan your local network 🏠, detect online devices 📡, and log the results to a JSON file 📜.

## Features ✨:
- Scans local network (IPv4 subnet) 🔄.
- Pings each device in the subnet (192.168.1.x to 192.168.1.254) 📶.
- Saves the results in a `connected_devices.json` file 💾.
- Records whether the device is online ✅ and its response time ⏱️.

## Prerequisites ⚙️:
- Node.js (Version >= 14.x) 💻

## Installation 📥:
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/network-scanner.git



Usage 🚀:
Run the network scanner:

bash
Copy
node scanNetwork.js
After the scan is complete, the results will be saved in the connected_devices.json file 📂.

Example Output 📊:
json
Copy
[
  {
    "ip": "192.168.1.10",
    "alive": true,
    "responseTime": 20
  },
  {
    "ip": "192.168.1.20",
    "alive": false,
    "responseTime": null
  }
]
