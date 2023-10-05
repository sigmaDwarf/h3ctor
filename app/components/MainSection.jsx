import React from 'react';
import MAYC from './MAYC';
import Cartel from './Cartel';
import Down from './Down';

const MainSection = () => {
  return (
    <>
      <main className="text-custom-4 p-8 pb-0 flex justify-around">
        <MAYC />
        <Cartel />
      </main>
      <Down />
    </>
  );
};

export default MainSection;
