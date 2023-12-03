import { Oval } from '../Oval/Oval';

import favIconSvg from '../../assets/images/icon-star.svg';

import './Modal.css';
import { useState } from 'react';

export function Modal() {
  const [rating, setRating] = useState(1);

  function handleSubmit() {
    console.log('submitted.');
  }

  return (
    <div className="modal-container">
      <header>
        <Oval disabled>
          <img src={favIconSvg} alt="" />
        </Oval>
        <h2 className="title">How did we do?</h2>
      </header>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <form className="rating-options" onSubmit={handleSubmit}>
        <section>
          <Oval disabled>
            <p>1</p>
          </Oval>
          <Oval disabled>
            <p>2</p>
          </Oval>
          <Oval disabled>
            <p>3</p>
          </Oval>
          <Oval disabled>
            <p>4</p>
          </Oval>
          <Oval disabled>
            <p>5</p>
          </Oval>
        </section>
        <button>
          <p>Submit</p>
        </button>
      </form>
    </div>
  );
}
