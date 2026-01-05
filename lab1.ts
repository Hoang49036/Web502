function rectangleInfo(width: number, height: number): { perimeter: number; area: number } {
  const perimeter = 2 * (width + height);
  const area = width * height;
  return { perimeter, area };
}

