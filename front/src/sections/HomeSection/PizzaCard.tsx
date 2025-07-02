import React from 'react';
import type { IPizza } from '../../types';
import { apiUrl } from '../../GlobalConstant';

interface IProps {
  pizza: IPizza;
}

const PizzaCard: React.FC<IProps> = ({ pizza }) => {
  return (
    <div className="col-6 mb-4" key={pizza._id}>
      <div className="pizza-card p-3 rounded shadow-sm text-center">
        <img src={pizza.image && apiUrl + '/' + pizza.image} alt={pizza.title} className="pizza-img mb-2" width={70} />
        <div className="pizza-info mb-2">
          <div className="pizza-name fw-bold">{pizza.title}</div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span className="pizza-price fw-bold text-danger">${pizza.price}</span>
          <button className="add-btn">
            <span className="fw-bold">+</span>
          </button>
          <button className="infor-btn">
            <img src="https://img.icons8.com/color/512/info.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
