/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchModelTypes } from "../features/car-slice-model";

const ModelTypes = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const disptach = useDispatch();
  const { modelTypes = [] } = useSelector((state) => state.carSliceModel);

  useEffect(() => {
    disptach(fetchModelTypes(String(id)));
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
            <Link to="/models">Modellari</Link>
          </li>
          <li className="link-item">
            <span>/</span>
          </li>
          <li className="link-item">
            <span>{state?.name || ""} turlari</span>
          </li>
        </ul>
      </div>
      <main className="main">
        <section className="modelTypes">
          <div className="container">
            <h2 className="modelTypes__title">Modellar turlari</h2>
            <div className="modelTypes__wrap">
              {modelTypes.length > 0 &&
                modelTypes.map((item, indx) => (
                  <Link
                    to={`/models/model-type/${item?.marka._id}`}
                    className="card"
                    key={indx}
                  >
                    <div className="card__header">
                      <img
                        src={`https://cartestwebapp.herokuapp.com/${item.imgUrl}`}
                        className="card__image"
                      />
                    </div>
                    <div className="card__body">
                      <h3 className="card__title">{item?.marka.name}</h3>
                      <p className="card__price">
                        Narxi:
                        <span>{item?.price}</span>
                      </p>
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

export default ModelTypes;
