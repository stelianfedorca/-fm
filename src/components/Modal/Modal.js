import { Oval } from '../Oval/Oval';

import favIconSvg from '../../assets/images/icon-star.svg';
import thankYouSvg from '../../assets/images/illustration-thank-you.svg';

import './Modal.css';
import { useState } from 'react';

export function Modal() {
  const [rating, setRating] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e) {
    setIsSubmitted(true);
  }

  function handleSelectOption(rating) {
    return () => {
      setRating(rating);
    };
  }

  return (
    <div className="modal-container">
      {!isSubmitted ? (
        <>
          <header>
            <Oval disabled>
              <img src={favIconSvg} alt="" />
            </Oval>
            <h2 className="title">How did we do?</h2>
          </header>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <form className="rating-options" onSubmit={handleSubmit}>
            <section>
              <Oval
                type="button"
                selected={rating === 1}
                onClick={handleSelectOption(1)}
              >
                1
              </Oval>
              <Oval
                type="button"
                selected={rating === 2}
                onClick={handleSelectOption(2)}
              >
                2
              </Oval>
              <Oval
                type="button"
                selected={rating === 3}
                onClick={handleSelectOption(3)}
              >
                3
              </Oval>
              <Oval
                type="button"
                selected={rating === 4}
                onClick={handleSelectOption(4)}
              >
                4
              </Oval>
              <Oval
                type="button"
                selected={rating === 5}
                onClick={handleSelectOption(5)}
              >
                5
              </Oval>
            </section>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </>
      ) : (
        <div className="submitted-modal">
          <img src={thankYouSvg} alt="" />
          <button>You selected 4 out of 5</button>
          <footer>
            <h2>Thank You!</h2>
            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}
