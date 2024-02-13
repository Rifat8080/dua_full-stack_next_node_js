'use client'
import React, { useState } from 'react';
import { Sidebar as FlowbiteSidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen flex">
      <button
        className="lg:hidden fixed z-10 top-4 left-4"
        onClick={toggleSidebar}
      >
        <svg
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      <FlowbiteSidebar
        aria-label="Sidebar with logo branding example"
        className={`lg:flex lg:flex-col lg:items-center ${
          isOpen ? 'absolute inset-y-0 left-0 w-64 bg-white shadow-lg' : 'hidden'
        }`}
        style={{
          height: isOpen ? "90%" : "90%",
          borderRadius: isOpen ? "1rem" : "18rem",
          margin: "auto"
        }}
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <FlowbiteSidebar.Logo>
            <img className="w-16 h-16" src="https://raw.githubusercontent.com/Rifat8080/dua_full-stack_next_node_js/dev_in_progress/front-end-next/app/logo.png" alt="Logo" />
          </FlowbiteSidebar.Logo>
          <FlowbiteSidebar.Items>
            <FlowbiteSidebar.ItemGroup className='flex flex-col items-center'>
              <FlowbiteSidebar.Item href="/about">
                <HiChartPie className="icon" />
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#">
                <HiViewBoards className="icon" />
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#">
                <HiInbox className="icon" />
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#">
                <HiUser className="icon" />
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#">
                <HiShoppingBag className="icon" />
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#">
                <HiArrowSmRight className="icon" />
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#">
                <HiTable className="icon" />
              </FlowbiteSidebar.Item>
            </FlowbiteSidebar.ItemGroup>
          </FlowbiteSidebar.Items>
          <FlowbiteSidebar.Logo>
            <img className="w-16 h-16 donate-btn" src="https://raw.githubusercontent.com/Rifat8080/dua_full-stack_next_node_js/dev_in_progress/front-end-next/app/logo.png" alt="Logo" />
          </FlowbiteSidebar.Logo>
        </div>
      </FlowbiteSidebar>
    </div>
  );
}

export default Sidebar;
