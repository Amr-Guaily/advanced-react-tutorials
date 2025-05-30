type NavButtonProps = {
  isActive: boolean;
  onClick: () => void;
  name: string;
};

export const TabButton = ({ name, onClick, isActive }: NavButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`tab-button ${isActive ? 'active' : ''}`}
    >
      {name}
    </button>
  );
};
