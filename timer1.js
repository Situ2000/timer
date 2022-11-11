const timer = (timeSet) => {
  if (timeSet > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timeSet * 1000);
  }
};