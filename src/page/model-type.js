/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import View360Image from "../components/view360Image";
import { fetchModelType } from "../features/car-slice-model";

const ModelType = () => {
  const { id } = useParams();
  const [isOutSide, setIsOutSide] = useState("outside");

  const disptach = useDispatch();
  const { modelType } = useSelector((state) => state.carSliceModel);

  const isCheckedInput = (e) => {
    setIsOutSide(e.target.value);
  };

  useEffect(() => {
    disptach(fetchModelType(String(id)));
  }, []);

  return (
    <>
      <main className="main">
        <section className="modelType">
          <div className="container">
            <h2 className="modelType__title">Modellari</h2>

            {modelType?._id?.length > 0 && (
              <div className="modelType__wrap">
                <div className="modelType__details">
                  <h3 className="modelType__name"> {modelType?.marka.name} </h3>
                  <p className="modelType__price">{modelType.price} so‘m dan</p>
                  <div className="modelType__header">
                    <img
                      src={`https://cartestwebapp.herokuapp.com/${modelType?.imgUrl}`}
                      alt={modelType?.marka.name}
                    />
                  </div>
                  <ul className="modelType__list">
                    <li className="modelType__brand;">
                      <span>Marka: </span>
                      <p>{modelType.marka?.name}</p>
                    </li>
                    <li className="modelType__tanirovanie">
                      <span>Tanirovkasi: </span>
                      <p>{modelType.tonirovka}</p>
                    </li>
                    <li className="modelType__motor">
                      <span>Motor: </span>
                      <p>{modelType.motor}</p>
                    </li>
                    <li className="modelType__year">
                      <span>Year: </span>
                      <p>{modelType.year}</p>
                    </li>
                    <li className="modelType__color">
                      <span>Color: </span>
                      <p>{modelType.color}</p>
                    </li>
                    <li className="modelType__distance">
                      <span>Distance: </span>
                      <p>{modelType.distance}</p>
                    </li>
                    <li className="modelType__gearbook">
                      <span>Gearbook: </span>
                      <p>{modelType.gearbok}</p>
                    </li>
                    <li className="modelType__description">
                      <p>
                        <span>Deseription: </span>
                        {modelType.description}
                      </p>
                    </li>
                  </ul>
                  <div className="modelType__totalCost">
                    <p>
                      <span>Umumiy xarajat: </span>
                      {modelType.price} so'm dan
                    </p>
                  </div>
                </div>
                <div className="modelType__car">
                  <h3 className="modelType__car-title">
                    {modelType?.marka.name}
                  </h3>
                  <div className="modelType__car-image">
                    <View360Image isOutSide={isOutSide} />
                  </div>
                  <div className="modelType__car-text">
                    <span className="modelType__car-icon">
                      <img src="/assets/icon/icon-360.svg" alt="360" />
                    </span>
                    <p>
                      Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin.
                      Mashinaning rangi ushbu saytda taqdim etilganidan farq
                      qilishi mumkin.
                    </p>
                  </div>
                  <div className="modelType__car-inputs">
                    <input
                      type="radio"
                      id="external"
                      name="car__image"
                      value="outside"
                      checked={isOutSide === "outside" ? true : false}
                      onClick={isCheckedInput}
                    />
                    <label htmlFor="external">Tashqi</label>
                    <input
                      type="radio"
                      id="interior"
                      name="car__image"
                      value="inside"
                      checked={isOutSide === "inside" ? true : false}
                      className="modelType__car-input"
                      onClick={isCheckedInput}
                    />
                    <label htmlFor="interior">Ichki makon</label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default ModelType;
