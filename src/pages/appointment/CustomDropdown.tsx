import { useState } from "react";
import { Option } from "../../types/appointment";



interface Props {
    options: Option[];
    onSelect: (option: Option) => void;
};

const CustomDropdown: React.FC<Props> = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [toggleDD, setToggleDD] = useState<boolean>(false);

    const handleSelect = (option: Option) => {
        setSelectedOption(option);
        onSelect(option);
        setToggleDD(!toggleDD);
    };

    const toggleDropdown = () => {
        setToggleDD(!toggleDD);
    }

    return (
        <div className="custom-dropdown" role="button"
            tabIndex={0}>
            <div className="selected-option" onClick={toggleDropdown}>
                {selectedOption && (
                    <img src={selectedOption.imgUrl} alt={selectedOption.label} />
                )}
                {selectedOption ? selectedOption.label : 'Select your doctor'}
                <i className={`fa fa-chevron-down ${toggleDD ? 'cdi-rotate' : ''}`}></i>
            </div>
            <ul className={`options-list ${toggleDD ? 'options-list-show' : 'options-list-hide'}`}>
                {options.map((option) => (
                    <li key={option.value} onClick={() => handleSelect(option)}>
                        <img src={option.imgUrl} alt={option.label} />
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomDropdown;