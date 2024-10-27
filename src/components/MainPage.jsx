import React from 'react';

const MainPage = ({ changeHeaderText }) => {
  const handleChangeHeader = () => {
    changeHeaderText("New Header Text");
  };

  return (
    <div>
      <h1>MainPage</h1>
      <button onClick={handleChangeHeader}>Change Header</button>
    </div>
  );
};

export default MainPage;
