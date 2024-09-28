interface IButtonProps {
  title: string;
  handleClick: () => void;
}

const Button = ({ title, handleClick }: IButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="bg-primary rounded-[5px] text-white text-base px-3 h-[33px]"
    >
      {title}
    </button>
  );
};

export default Button;
