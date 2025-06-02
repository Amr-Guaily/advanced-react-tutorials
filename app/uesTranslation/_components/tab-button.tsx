type NavButtonProps = {
  isActive: boolean;
  isLoading?: boolean;
  onClick: () => void;
  name: string;
};

export const TabButton = ({
  name,
  onClick,
  isActive,
  isLoading,
}: NavButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`tab-button ${isActive ? 'active' : ''}`}
    >
      {name}
      {isLoading ? ' 🤔...' : ''}
    </button>
  );
};
