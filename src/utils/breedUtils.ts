export const filterBreeds = (
  breeds: string[],
  searchTerm: string
): string[] => {
  return breeds.filter((breed) =>
    breed.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
};

export const sortBreedsReverse = (breeds: string[]): string[] => {
  return [...breeds].sort().reverse();
};

export const sortBreeds = (breeds: string[]): string[] => {
  return [...breeds].sort();
};

export const isDisabled = (
  breeds: string[],
  filter: string[],
  searchTerm: string
): boolean => {
  return filter.length === breeds.length && searchTerm === "";
};
