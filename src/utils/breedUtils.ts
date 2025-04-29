export const filterBreeds = (
  breeds: string[],
  searchTerm: string
): string[] => {
  return breeds.filter((breed) =>
    breed.toLocaleLowerCase().startsWith(searchTerm.toLocaleLowerCase())
  );
};

export const sortBreedsReverse = (breeds: string[]): string[] => {
  return [...breeds].sort().reverse();
};

export const sortBreeds = (breeds: string[]): string[] => {
  return [...breeds].sort();
};
