'use client';
import React from 'react';
import Icon from '@mdi/react';
import { mdiPanDown } from '@mdi/js';

const Down = () => {
  return (
    <>
      <div className="w-screen flex justify-center items-center px-16 py-4">
        <span className="text-white pb-0 text-center text-2xl">
          Moderator of{' '}
          <a
            href="https://www.novellabs.xyz/"
            target="blank"
            className="text-custom-4 underline bold"
          >
            Mutant cartel
          </a>
          <hr className="pb-4 border-none" />
          Sippin serum in{' '}
          <a
            className="text-custom-4 underline bold"
            target="_blank"
            href="https://twitter.com/Serumcity"
          >
            serum city
          </a>
          , crew of{' '}
          <a
            href="https://twitter.com/boredkitchen_"
            target="_blank"
            className="text-custom-4 underline bold"
          >
            Bored kitchen
          </a>
        </span>
      </div>

      <div className="w-screen flex justify-center items-center  py-4">
        <Icon
          path={mdiPanDown}
          size={3}
          color="#EE9322"
          className="hover:translate-y-[5%] ease-out duration-500 hover:bg-custom-3 hover:rounded-full hover:bg-opacity-20"
          href="#nfts"
        />
      </div>
    </>
  );
};

export default Down;
