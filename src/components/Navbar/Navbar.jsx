'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center">
      <img src="data:image/jpeg;base64,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" class="h-8 mr-3" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Perago</span>
    </a>
    <div class="flex md:order-2">
      <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span class="sr-only">Search</span>
    </button>
      <div class="relative hidden md:block">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span class="sr-only">Search icon</span>
        </div>
      </div>
      <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div class="relative mt-3 md:hidden">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
      </div>
      <ul
        class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#"
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page">Home</a>
        </li>
        <li>
          <a href="#"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}