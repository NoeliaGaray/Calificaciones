let nota1,
  nota2,
  nota3,
  promedio: number = 0;
let nombre: string = "";

while (nombre !== "") {
  nombre = prompt("Ingrese el nombre del/la alumno/a: ");
  nota1 = Number(prompt("Ingrese nota de prácticas:"));
  nota2 = Number(prompt("Ingrese nota de problemas:"));
  nota3 = Number(prompt("Ingrese nota del teórico:"));

  console.log("Alumno/a: ", nombre);
  console.log("Nota de prácticas", nota1);
  console.log("Nota de problemas", nota2);
  console.log("Nota de teórico", nota3);

  if (
    nota1 > -1 &&
    nota2 > -1 &&
    nota3 > -1 &&
    nota1 <= 10 &&
    nota2 <= 10 &&
    nota3 <= 10
  ) {
    promedio = nota1 * 0.1 + nota2 * 0.5 + nota3 * 0.4;
    console.log("El promedio de: ", nombre, "es:", promedio);
  } else {
    console.log("ERROR, ingrese valores válidos, entre 1 y 10");
  }
}
