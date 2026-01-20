export const calculateIMC = (weight: number, height: number): number => {
  return weight / (height * height);
};

export const getIMCClassification = (
  imc: number,
): { classification: string; color: string } => {
  if (imc < 18.5) {
    return { classification: "Abaixo do peso", color: "#cf6a87" };
  } else if (imc >= 18.5 && imc < 25) {
    return { classification: "Peso normal", color: "#546de5" };
  } else if (imc >= 25 && imc < 30) {
    return { classification: "Sobrepeso", color: "#f3a683" };
  } else if (imc >= 30 && imc < 35) {
    return { classification: "Obesidade Grau I", color: "#e77f67" };
  } else if (imc >= 35 && imc < 40) {
    return { classification: "Obesidade Grau II", color: "#f19066" };
  } else {
    return { classification: "Obesidade Grau III", color: "#e15f41" };
  }
};
