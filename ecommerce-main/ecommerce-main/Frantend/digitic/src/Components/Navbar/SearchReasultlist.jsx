import styled from "../../Styles/Navbar.module.css"
import { SearchResult } from "./SearchResult";

export const SearchReasultlist = ({ results }) => {
  return (
    <div className={styled.results_list}>
      {results.map((el, id) => {
        return <SearchResult result={el} key={id} />;
      })}
    </div>
  );
};