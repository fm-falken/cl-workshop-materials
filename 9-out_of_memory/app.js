// Also don't run in production without any limits in place. Eats all memory pretty quickly.

const memoryHog = [];

function exhaustMemory() {
  try {
    while (true) {
      const block = new Buffer.alloc(1024 * 1024 * 100); // Allocate 100MB
      memoryHog.push(block);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

exhaustMemory();
