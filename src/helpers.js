// HELPER FUNCTIONS
function handleKeyPress(e, callback) {
  if (e.key === "Enter" || e.key === " ") {
    callback();
  }
}

export { handleKeyPress };
