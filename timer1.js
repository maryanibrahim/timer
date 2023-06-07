/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
// Function to set timers
function setTimer(intervals) {
  for (let i = 0; i < intervals.length; i++) {
    // Convert the interval to a number and check if it's greater than 0
    const interval = Number(intervals[i]);
    if (!isNaN(interval) && interval > 0) {
      setTimeout(() => {
        console.log('Beep!');
        process.stdout.write('\x07');
      }, interval * 1000); // Convert interval to milliseconds
    }
  }
}

// Get command line arguments, skipping the first two (node and script path)
const args = process.argv.slice(2);

// Set timers for the command line arguments
setTimer(args);
