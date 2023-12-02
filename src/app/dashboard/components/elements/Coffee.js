import  Link  from 'next/link'
import { BiCoffee } from "react-icons/bi";
import React from 'react';

export default function Coffee() {
  return (
    <>
      <Link href='https://sociabuzz.com/renmaruu/support' target='_blank' aria-label='sociabuzz'>
        <BiCoffee size={24} className="text-3xl"/>
      </Link>
    </>
  )
}