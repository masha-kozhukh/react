import React, { useEffect, useState } from "react";
import { Option } from "./Option";
import { Input } from "./Input";
import { Button } from "./Button";
import {
  filterBreeds,
  sortBreeds,
  sortBreedsReverse,
} from "../utils/breedUtils";

export type BreedsProps = {
  title?: string;
  placeholder?: string;
  buttonNameSortedReverse: string;
  buttonNameSorted: string;
  buttonNameReset: string;
};

export const BreedList = React.memo((props: BreedsProps) => {
  const {
    title,
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

  const handleInputFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilter(filterBreeds(breeds, value));
  };

  const onHandleButtonSortedReverse = () => {
    setFilter(sortBreedsReverse(filter));
  };

  const onHandleButtonSorted = () => {
    setFilter(sortBreeds(filter));
  };

  const onHandleButtonReset = () => {
    setFilter(breeds);
    setSearchTerm("");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>

      <Button onClick={onHandleButtonSorted} name={buttonNameSorted} />
      <Button
        onClick={onHandleButtonSortedReverse}
        name={buttonNameSortedReverse}
      />
      <Button onClick={onHandleButtonReset} name={buttonNameReset} />

      <Input
        value={searchTerm}
        placeholder={placeholder}
        onChange={handleInputFilter}
      />

      <ul className="list-disc pl-5 space-y-1">
        {filter.map((breed) => (
          <li key={breed}>{breed}</li>
        ))}
      </ul>
      {/* <select className="select w-full mb-4">
        {filteredBreeds.map((breed) => (
          <Option key={breed} value={breed} label={breed} />
        ))}
      </select> */}
    </div>
  );
});
