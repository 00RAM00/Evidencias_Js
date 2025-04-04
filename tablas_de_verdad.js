// Tabla de verdad para el operador AND
console.log("Tabla de verdad para AND:");
console.log("A\tB\tA AND B");
console.log("false\tfalse\t" + (false && false));
console.log("false\ttrue\t" + (false && true));
console.log("true\tfalse\t" + (true && false));
console.log("true\ttrue\t" + (true && true));

// Tabla de verdad para el operador OR
console.log("\nTabla de verdad para OR:");
console.log("A\tB\tA OR B");
console.log("false\tfalse\t" + (false || false));
console.log("false\ttrue\t" + (false || true));
console.log("true\tfalse\t" + (true || false));
console.log("true\ttrue\t" + (true || true));

// Tabla de verdad para el operador NOT
console.log("\nTabla de verdad para NOT:");
console.log("A\tNOT A");
console.log("false\t" + (!false));
console.log("true\t" + (!true));
