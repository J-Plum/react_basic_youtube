import React, { memo, useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = memo((props) => {
   const inputRef = useRef();

   const handleSearch = () => {
      const value = inputRef.current.value;
      props.onSearch(value);
   };

   const onClick = () => {
      handleSearch();
   };

   const onKeyPress = (e) => {
      if (e.key === "Enter") {
         handleSearch();
      }
   };

   return (
      <header className={styles.header}>
         <div className={styles.logo}>
            <img className={styles.img} src="/images/logo.png" alt="youtube" />
            <h1 className={styles.title}>Youtube</h1>
         </div>
         <input
            ref={inputRef}
            className={styles.input}
            type="search"
            placeholder="검색내용.."
            onKeyPress={onKeyPress}
         />
         <button className={styles.button} type="submit" onClick={onClick}>
            <img
               className={styles.buttonImg}
               src="/images/search.png"
               alt="search"
            />
         </button>
      </header>
   );
}
);

export default SearchHeader;
