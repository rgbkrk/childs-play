process.on("disconnect", () => {
  process.exit(0);
});

process.send({ 'hey': 'woo' })
