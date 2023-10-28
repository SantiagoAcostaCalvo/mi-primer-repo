const name: string | null = prompt("Please enter your name");
const welcome: string = `Welcome ${name}!`;

if (name !== null) {
  alert(welcome);

  const election: string | null = prompt("See apartments:\n1. New\n2. Used");

  if (election === "1") {
    const price: number | null = parseFloat(prompt("Price of the new house: $250,000,000"));

    if (price !== null) {
      const profit: number = price * 0.2; // 20%
      console.log("User chose new apartments");
      console.log(`Profit: $${profit}`);
    } else {
      console.log("Invalid price");
    }
  } else if (election === "2") {
    const price: number | null = parseFloat(prompt("Price of used house: $170,000,000"));

    if (price !== null) {
      const profit: number = price * 0.1; // 10%
      console.log("User chose used apartments");
      console.log(`Profit: $${profit}`);
    } else {
      console.log("Invalid price");
    }
  } else {
    console.log("Invalid election");
  }

  const bye: string = `See you later ${name}!`;
}
