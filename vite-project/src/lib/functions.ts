type CounterProps = {
    countOne: number;
    countTwo: number;
}

export function getColorPalette(selectedColorsPalette: string) {
    let colorPalettOne: string[] = ["yellow", "orange", "orangered", "red"];
    let colorPalettTwo: string[] = ["yellow", "orange", "orangered", "red"];
  
    if (selectedColorsPalette === "yellowRed") {
      colorPalettOne = ["yellow", "orange", "orangered", "red"];
      colorPalettTwo = ["yellow", "orange", "orangered", "red"];
    } else if (selectedColorsPalette === "cyanViolet") {
      colorPalettOne = ["cyan", "deepskyblue", "dodgerblue", "violet"];
      colorPalettTwo = ["cyan", "deepskyblue", "dodgerblue", "violet"];
    } else if (selectedColorsPalette === "pinkViolet") {
      colorPalettOne = ["pink", "hotpink", "violet", "blueviolet"];
      colorPalettTwo = ["pink", "hotpink", "violet", "blueviolet"];
    } else if (selectedColorsPalette === "yellowCyan") {
      colorPalettOne = ["yellow", "orange", "orangered", "blueviolet"];
      colorPalettTwo = ["cyan", "lightgreen", "turquoise", "violet"];
    }
    return { colorPalettOne, colorPalettTwo };
}

export function getPercent({countOne, countTwo}: CounterProps) {
    let percent_w1 = null;
    let percent_w2 = null;
  
    let total: number = countOne + countTwo;
    percent_w1 = (countOne * 100) / total;
    percent_w2 = (countTwo * 100) / total;
    return { percent_w1, percent_w2 }
}