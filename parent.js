const chip = require("child_process");

f = chip.fork("child", [], {
  stdio: ["pipe", "pipe", "pipe", "ipc"]
});

f.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

f.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

f.on('message', (msg) => {
  console.log(`from child: ${JSON.stringify(msg)}`);
  f.kill();
})

setTimeout(() => f.kill(), 1000);
