// Styles
import "./styles.css";

interface SearchFieldProps {
  searchValue: string;
  onSearchValueChange: (value: string) => void;
}

const SearchField = ({
  searchValue,
  onSearchValueChange,
}: SearchFieldProps) => {
  return (
    <input
      type="text"
      placeholder="Buscar Alien"
      onChange={(e) => onSearchValueChange(e.target.value)}
      value={searchValue}
      className="input-reset ba bw2 b--green bg-black white f5 pa3 w-30 br1 focus-effect"
    />
  );
};

export default SearchField;
