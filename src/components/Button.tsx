interface IButtonProps {
  title: string;
  handleClick: () => void;
  className?: string;
  isActive?: boolean;
}

const Button = ({
  title,
  handleClick,
  className,
  isActive = true,
}: IButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={
        isActive
          ? "bg-primary rounded-[5px] text-white text-base px-3 h-[33px] " +
            className
          : "text-base px-3 h-[33px]"
      }
    >
      {title}
    </button>
  );
};

export default Button;
