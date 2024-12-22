import React, { SetStateAction } from "react";

export const useIncreaseValue = (
    length: number,
    useLength: React.Dispatch<SetStateAction<number>>
  ) => {
    return useLength(length + 1);
  };
  

  export const useDecreaseValue = (
    length: number,
    useLength: React.Dispatch<SetStateAction<number>>,
    delta: number = 1 // Nilai pengurangan, default adalah 1
  ) => {
    const newValue = length - delta;
    if (newValue < 1) return; // Pastikan tidak di bawah batas minimum
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useLength(newValue);
  };