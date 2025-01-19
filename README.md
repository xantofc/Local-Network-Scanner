# Local Network Scanner 🌐🔍

A Node.js application to scan your local network 🏠, detect online devices 📡, and log the results to a JSON file 📜.

## Project Structure 📂:

```plaintext
network-scanner/
├── scanNetwork.js        # 🖥️ Main script to scan the network
├── package.json          # 📦 Project metadata and dependencies
├── .gitignore            # 🚫 Files to ignore (node_modules, etc.)
└── README.md             # 📖 Project description and usage instructions
Features ✨:
Scans local network (IPv4 subnet) 🔄.
Pings each device in the subnet (192.168.1.x to 192.168.1.254) 📶.
Saves the results in a connected_devices.json file 💾.
Records whether the device is online ✅ and its response time ⏱️.
Displays real-time results 🌟.
Prerequisites ⚙️:
Node.js (Version >= 14.x) 💻
A local network (Wi-Fi, Ethernet, etc.) 🌐
Installation 📥:
Clone this repository:

bash
Copy
git clone https://github.com/yourusername/network-scanner.git
Navigate into the project directory:

bash
Copy
cd network-scanner
Install dependencies:

bash
Copy
npm install
You’re ready to run the scanner! 🎉

Usage 🚀:
Run the network scanner:

bash
Copy
node scanNetwork.js
The scanner will ping every device on your local network and log the results into the connected_devices.json file 📂.

After the scan is complete, you can open the connected_devices.json file to view the results. 📊

Example Output 📊:
Here's an example of what the output might look like:

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
✅ Online devices will show alive: true with their respective responseTime.
❌ Offline devices will show alive: false and responseTime: null.
Troubleshooting ⚠️:
If the scanner doesn't work, ensure you have a stable local network connection 🌐.
Make sure your firewall or network settings allow ICMP requests (ping) 🔒.
License 📝:
This project is licensed under the MIT License. Feel free to use it in your projects! 🌟
