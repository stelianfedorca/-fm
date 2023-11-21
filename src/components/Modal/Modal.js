import { Oval } from '../Oval/Oval';

import favIconSvg from '../../assets/images/icon-star.svg';

import './Modal.css';

export function Modal() {
  return (
    <div className="modal-container">
      <header>
        <Oval>
          <img src={favIconSvg} alt="" />
        </Oval>
      </header>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <form></form>
    </div>
  );
}
