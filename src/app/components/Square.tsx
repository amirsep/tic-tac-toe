// Square Component
interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button
      className="bg-white border-2 border-indigo-500 shadow-lg text-4xl font-extrabold h-24 w-40 flex items-center justify-center text-gray-800 hover:bg-indigo-200 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
