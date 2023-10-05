import React from 'react';

const Cartel = () => {
  return (
    <div className="w-2/5 md:w-fit font-semibold flex flex-col text-center shadow-orange">
      <div className="flex flex-col">
        <img src="/cartel.png" className="w-[16rem] rounded-t-md" />
        <h2 className="text-lg">Mutant Cartel</h2>
      </div>
    </div>
  );
};

export default Cartel;
