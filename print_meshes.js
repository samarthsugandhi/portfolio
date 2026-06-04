const fs = require('fs');
['static/models/World/environment.glb', 'static/models/Computer/computer_setup.glb'].forEach(file => {
    try {
        const data = fs.readFileSync(file);
        const jsonStart = data.indexOf('JSON') + 4;
        let jsonEnd = data.indexOf('BIN\x00');
        if (jsonEnd === -1) jsonEnd = data.length;
        const header = data.slice(jsonStart, Math.min(jsonEnd, jsonStart + 1000000)).toString('utf-8');
        const matches = header.match(/"name":"([^"]+)"/g);
        if (matches) {
            console.log("---", file, "---");
            matches.forEach(m => console.log(m));
        }
    } catch (e) {
        console.error("Error reading", file, e);
    }
});
