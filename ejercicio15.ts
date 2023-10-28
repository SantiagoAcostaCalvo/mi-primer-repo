const asteriscosLargos = "===========================================";
const asteriscosCortos = "* * * * *";

for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    console.log(`${asteriscosCortos} ${asteriscosLargos}`);
  } else {
    console.log(`${asteriscosCortos}`);
  }
}