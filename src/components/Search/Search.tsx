import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import "../Search/Search.scss";

const categories = ["Автоакустика и аксессуары", "Автоэлектроника", "Акустика", "Антенны и аксессуары"];

export const Search = () => {
  const [category, setCategory] = useState("");

  const handleChange = (e: string) => {
    setCategory(e);
  };
  return (
    <div className="search">
      <input className="search-input" type="search" placeholder="Я ищу" />
      <FormControl style={{ width: "20%", height: "46px", padding: "0px" }}>
        <InputLabel id="demo-simple-select-label">Картегория</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Age"
          onChange={(event) => handleChange(event.target.value)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <button className="search-btn">Найти</button>
    </div>
  );
};
