interface IToggleButtonProps {
  isToggled: boolean;
  setIsToggled: (isToggled: boolean) => void;
}
const ToggleButton = ({ isToggled, setIsToggled }: IToggleButtonProps) => {
  const toggle = () => setIsToggled(!isToggled);

  return (
    <div
      className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
        isToggled ? "bg-gray-400" : "bg-gray-300"
      }`}
      onClick={toggle}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
          isToggled ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default ToggleButton;
