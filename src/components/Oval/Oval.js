import './Oval.css';

export function Oval({ disabled, selected, onClick, type, children }) {
  return (
    <button
      className={selected ? 'oval-container selected' : 'oval-container'}
      disabled={disabled}
      onClick={onClick}
      type={type}
      style={{ pointerEvents: disabled ? 'none' : 'auto' }}
    >
      {children}
    </button>
  );
}
