import React, { useEffect, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import {
  filterBreeds,
  isDisabled,
  sortBreeds,
  sortBreedsReverse,
} from "../utils/breedUtils";

export type BreedsProps = {
  title?: string;
  placeholder?: string;
  buttonNameSortedReverse: string;
  buttonNameSorted: string;
  buttonNameReset: string;
  liDontFind: string;
};

export const BreedList = React.memo((props: BreedsProps) => {
  const {
    title,
    liDontFind,
    placeholder,
    buttonNameSortedReverse,
    buttonNameSorted,
    buttonNameReset,
  } = props;
  const [breeds, setBreeds] = useState<string[]>([]);
  const [filter, setFilter] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        const breedNames = Object.keys(data.message);
        setBreeds(breedNames);
        setFilter(breedNames);
      })
      .catch((error) => {
        console.error("Помилка при завантаженні порід:", error);
      });
  }, []);

  const handleInputFilter = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value);
      setFilter(filterBreeds(breeds, value));
    },
    [breeds]
  );

  const onHandleButtonSortedReverse = React.useCallback(() => {
    setFilter((prevFilter) => sortBreedsReverse(prevFilter));
  }, []);

  const onHandleButtonSorted = React.useCallback(() => {
    setFilter((prevFilter) => sortBreeds(prevFilter));
  }, []);

  const onHandleButtonReset = React.useCallback(() => {
    setFilter(breeds);
    setSearchTerm("");
  }, [breeds]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>

      <Button onClick={onHandleButtonSorted} name={buttonNameSorted} />
      <Button
        onClick={onHandleButtonSortedReverse}
        name={buttonNameSortedReverse}
      />
      <Button
        onClick={onHandleButtonReset}
        name={buttonNameReset}
        disabled={isDisabled(breeds, filter, searchTerm)}
      />

      <Input
        value={searchTerm}
        placeholder={placeholder}
        onChange={handleInputFilter}
      />

      <ul className="list-breeds pl-5 space-y-1">
        {filter.length > 0 ? (
          filter.map((breed) => <li key={breed}>{breed}</li>)
        ) : (
          <li className="text-gray">{liDontFind}</li>
        )}
      </ul>
    </div>
  );
});
