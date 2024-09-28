interface IButtonProps {
  icon: string;
  title?: string;
  handleClick: () => void;
  iconClassName?: string;
}

const IconButton = ({
  title,
  icon,
  handleClick,
  iconClassName,
}: IButtonProps) => {
  return (
    <div className="flex items-center gap-2">
      <button onClick={handleClick}>
        <img
          src={icon}
          alt={title || "Icon"}
          className={"w-[24px] h-[24px] " + iconClassName}
        />
      </button>
      <div className="text-tab text-base">{title}</div>
    </div>
  );
};

export default IconButton;
