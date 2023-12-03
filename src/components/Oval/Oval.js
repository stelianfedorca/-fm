import './Oval.css';

export function Oval({ disabled, children }) {
  return (
    <button
      className="oval-container"
      disabled={disabled}
      onClick={() => console.log('clicked')}
    >
      {children}
    </button>
  );
}
