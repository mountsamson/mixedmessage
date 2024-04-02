// Define arrays containing different pieces of data
const starters = [
  "Today is your lucky day!",
  "Are you a top g",
  "Get ready for something amazing!",
  "It's time to shine!",
];
const middles = [
  "You will find success in unexpected places.",
  " did Diddy touch you nigga",
  "Believe in yourself and anything is possible.",
  "Opportunities are all around you.",
  "Daddy wanna party!",
];
const endings = [
  "Trust your instincts.",
  "Stay positive and keep moving forward.",
  "The best is yet to come.",
  "BIG G ",
];

// Function to generate a random message
function generateMessage() {
  // Generate random indices for each array
  const starterIndex = Math.floor(Math.random() * starters.length);
  const middleIndex = Math.floor(Math.random() * middles.length);
  const endIndex = Math.floor(Math.random() * endings.length);

  // Combine the random pieces of data to form a message
  const message = `${starters[starterIndex]} ${middles[middleIndex]} ${endings[endIndex]}`;

  // Return the generated message
  return message;
}

// Call the function to generate and display a message
console.log(generateMessage());
