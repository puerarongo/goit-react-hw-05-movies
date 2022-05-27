import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { filmCast } from 'api/movieSearcher';
import defaultPicture from 'api/defaultPucture';
import Modal from 'components/modal/Modal';
import styles from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const id = useParams().movieId;
  const [modalShow, setModalShow] = useState(false);
  const [modalValue, setModalValue] = useState('');

  useEffect(() => {
    if (!id) {
      return;
    }

    filmCast(id)
      .then(response => setCast(response.data.cast))
      .catch(error => console.log(error));
  }, [id]);

  const modalHandler = img => {
    setModalValue(img);
    modalSwitch();
  };

  const modalSwitch = () => {
    setModalShow(!modalShow);
  };

  return (
    <div>
      {modalShow && <Modal image={modalValue} switchFunc={modalSwitch} />}
      <ul className={styles.cast__list}>
        {cast.map(({ id, name, profile_path, character }) => {
          return (
            <li key={id} className={styles.character}>
              <img
                className={styles.image}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultPicture
                }
                alt={id}
                onClick={() => modalHandler(profile_path)}
              />
              <div className={styles.description}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.role}>Character: {character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
