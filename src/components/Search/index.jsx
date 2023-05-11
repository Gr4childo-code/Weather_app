import { useRef } from 'react';
import React from 'react';
import { RiSearchLine, RiMenu4Line } from 'react-icons/ri';

import styles from '@/src/components/Search/Search.module.scss';

const SearchForm = ({ search }) => {
  const inputRef = useRef('Введите город');
  return (
    <div className={styles.weather__header}>
      <div className={styles.weather__header__content}>
        <div className={styles.weather__header__content__search}>
          <RiSearchLine
            size={30}
            className={styles.search__icon}
            onClick={() => search(inputRef)}
          />
          <input
            type='text'
            className={styles.weather__header__content__search__input}
            ref={inputRef}
            placeholder={'Введите город'}
          />
        </div>
        <RiMenu4Line size={30} />
      </div>
    </div>
  );
};

export default SearchForm;
