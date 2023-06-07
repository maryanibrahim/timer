/* eslint-disable no-restricted-globals */
process.argv.slice(2).forEach((e) => {
  // Check if the argument is a number and is not negative
  if (!isNaN(e) && e >= 0) {
    // Set a timeout to beep after the specified number of seconds
    setTimeout(() => {
      process.stdout.write('\x07');
    }, e * 1000);
  }
  // If no valid numbers are provided, the forEach loop will not set any timers,
  // so the script will end immediately. This handles the "no numbers are provided" edge case.
});
