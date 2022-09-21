/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchModels } from "../features/car-slice-model";

const Models = () => {
  const dispatch = useDispatch();
  const { models } = useSelector((state) => state.carSliceModel);

  useEffect(() => {
    dispatch(fetchModels());
  }, []);

  return (
    <>
      <div className="container">
        <ul className="link-list">
          <li className="link-item">
            <Link to="/">Bosh sahifa </Link>
          </li>
          <li className="link-item">
            <span>/</span>
          </li>
          <li className="link-item">
            <span>Modellari</span>
          </li>
        </ul>
      </div>
      <main className="main">
        <section className="models">
          <div className="container">
            <h2 className="models__title">Modellari</h2>
            <div className="models__wrap">
              {models.length > 0 &&
                models.map((item) => (
                  <Link
                    to={`/models/model-types/${item._id}`}
                    state={{ name: item.name }}
                    className="models-card"
                    key={item._id}
                  >
                    <div className="models-card__header">
                      <img
                        src={`https://cartestwebapp.herokuapp.com/${item.imgUrl}`}
                        className="models-card__image"
                        alt={`${item.name} image`}
                      />
                    </div>
                    <div className="models-card__body">
                      <h3 className="models-card__title">{item.name}</h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Models;
