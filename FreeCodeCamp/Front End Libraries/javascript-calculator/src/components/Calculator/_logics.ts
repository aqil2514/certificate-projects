import React from "react";

export function useCalculators(
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  prevValue: string,
  setPrevValue: React.Dispatch<React.SetStateAction<string>>
) {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setValue(e.target.value);
  };

  const clearHandler = () => {
    setValue("0");
    setPrevValue("");
  };

  const numberHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const number = target.innerText;

    if (number === "." && value.includes(".")) return;

    if (value.startsWith("0") && !value.startsWith("0.") && number !== ".")
      return setValue(number);

    if(!value && number === "."){
      return setValue("0.")
    }

    setValue((prev) => prev + number);
  };

  //   const operationHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     const target = e.target as HTMLButtonElement;
  //     const operation = target.innerText;
  //     const operations: string[] = ["+", "-", "/", "*"];

  //     if (operation === "=") {
  //       if (!prevValue || !value) return; // Harus ada operand sebelumnya dan nilai sekarang

  //       const [firstOperand, operator] = prevValue.split(" ");
  //       const secondOperand = value;

  //       if (!firstOperand || !operator || !secondOperand) return;

  //       const result = calculateResult(
  //         Number(firstOperand),
  //         operator,
  //         Number(secondOperand)
  //       );

  //       setValue(result.toString()); // Simpan hasil ke value
  //       setPrevValue(""); // Reset prevValue
  //       return;
  //     }

  //     if (operations.includes(operation)) {
  //       // Jika operator ditekan
  //       if (prevValue && value) {
  //         // Hitung operasi sebelumnya jika ada kedua operand
  //         const [firstOperand, operator] = prevValue.split(" ");
  //         const result = calculateResult(
  //           Number(firstOperand),
  //           operator,
  //           Number(value)
  //         );
  //         setPrevValue(`${result} ${operation}`); // Simpan hasil ke prevValue
  //       } else if (value) {
  //         setPrevValue(`${value} ${operation}`); // Simpan nilai sekarang dengan operator
  //       }

  //       setValue(""); // Reset value untuk operand berikutnya
  //       return;
  //     }

  //     if (operation === ".") {
  //       // Tangani desimal
  //       if (!value.includes(".")) {
  //         setValue(value + "."); // Tambahkan desimal jika belum ada
  //       }
  //       return;
  //     }

  //     // Jika tombol angka ditekan
  //     setValue(value + operation);
  //   };

  const operationHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const operation = target.innerText;
    const operators = ["+", "-", "/", "*"];

    if (operation === "=") {
      if (!prevValue || !value) return;

      const [firstOperand, operator] = prevValue.split(" ");
      const secondOperand = value;

      if (!firstOperand || !operator || !secondOperand) return;

      const result = calculateResult(
        Number(firstOperand),
        operator,
        Number(secondOperand)
      );

      setValue(result.toString());
      setPrevValue("");
      return;
    }

    if (operators.includes(operation)) {
      // Jika operator ditekan
      if (prevValue && value) {
        // Lakukan perhitungan jika operand dan operator sebelumnya sudah ada
        const [firstOperand, operator] = prevValue.split(" ");
        const result = calculateResult(
          Number(firstOperand),
          operator,
          Number(value)
        );
        setPrevValue(`${result} ${operation}`); // Simpan hasil untuk operasi berikutnya
      } else if (value) {
        // Jika hanya ada value (operand pertama)
        setPrevValue(`${value} ${operation}`);
      }

      setValue(""); // Reset value untuk operand berikutnya
      return;
    }

    if (operation === ".") {
      // Tangani desimal
      if (!value.includes(".")) {
        setValue(value + ".");
      }
      return;
    }

    // Jika tombol angka ditekan
    setValue(value + operation);
  };

  return { changeHandler, clearHandler, numberHandler, operationHandler };
}

// Fungsi untuk menghitung hasil
const calculateResult = (
  num1: number,
  operator: string,
  num2: number
): number => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : NaN; // Pastikan tidak membagi dengan nol.
    default:
      return 0;
  }
};
