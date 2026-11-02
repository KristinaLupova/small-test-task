import { useState } from 'react';
import { greeting } from './Greeting';
import Dropdown from './Dropdown';

// якщо б опції як у реальному проекті то потрібен санітайзинг 
const OPTIONS = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

// тести на логіку застосунку
export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleDropdownChange = (e) => {
    setSelectedIndex(OPTIONS.indexOf(e));
  }

  const handleBtnClick = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % OPTIONS.length)
  }

  return (
    <>
      <h1>{greeting(__APP_NAME__)}</h1>
      <div className="card">
        <h2>Card</h2>
        <Dropdown
          options={OPTIONS}
          value={OPTIONS[selectedIndex]}
          onChange={(e) => handleDropdownChange(e)}
        />
        <p className={"card-description"}>
          Lorem ipsum dolor sit amet,
          supra mutationem signate.
          Nunc porta pulvinar lorem, a molestie elit vulputate nec. Maecenas vulputate fringilla
          mi, a posuere arcu tempor sit amet. Etiam porta nisi ut molestie hendrerit. Aenean luctus nibh vel sapien interdum, sit
          amet cursus nunc
          aliquam.
          Quisque rhoncus elementum sodales. Fusce placerat eros ut gravida rhoncus. Fusce pharetra, leo vitae dapibus faucibus,
          dolor nisl placerat elit, eget dignissim odio tortor in dolor.</p>
        <button type="button" onClick={handleBtnClick}>
          Option <span>{selectedIndex + 1}</span> is selected
        </button>
      </div>
    </>
  );
}
