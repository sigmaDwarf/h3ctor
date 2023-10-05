'use client';
import React from 'react';
import Icon from '@mdi/react';
import { mdiPanDown } from '@mdi/js';

const Down = () => {
  return (
    <>
      <div className="w-screen flex justify-center items-center px-16 py-4">
        <span className="text-white pb-0 text-center">
          Moderator of{' '}
          <a
            href="https://www.novellabs.xyz/"
            target="blank"
            className="text-custom-4 underline bold"
          >
            Mutant cartel
          </a>
          <hr className="pb-4" />
          Sippin serum in {' '}
          <a
            className="text-custom-4 underline bold"
            target="_blank"
            href="https://twitter.com/Serumcity"
          >
            serum city
          </a>, crew of <a href='https://twitter.com/boredkitchen_' target='_blank' className='text-custom-4 underline bold'>Bored kitchen</a>
        </span>
      </div>

      <div className="w-screen flex justify-center items-center">
        <Icon path={mdiPanDown} size={3} color="#EE9322" />
      </div>
    </>
  );
};

export default Down;
