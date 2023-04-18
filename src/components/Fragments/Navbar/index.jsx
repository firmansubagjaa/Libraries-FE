import React from "react";
import Button from "../../Elements/button";
import Card from "../Card";

// import galaxy from "@/assets/webp/galaxy.webp";

export default function Navbar() {
  return (
    <div className="bg-base-100 py-7 z-40 sticky  top-0 ">
      <div className="container">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Button variant="ghost">Home</Button>
                </li>
                <li tabIndex={0}>
                  <Button variant="ghost" className="justify-between">
                    Category
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </Button>
                  <ul className="p-2">
                    <li>
                      <Button variant="ghost">Submenu 1</Button>
                    </li>
                    <li>
                      <Button variant="ghost">Submenu 2</Button>
                    </li>
                  </ul>
                </li>
                <li>
                  <Button variant="ghost">Your Cart</Button>
                </li>
                <li>
                  <Button variant="ghost">History</Button>
                </li>
              </ul>
            </div>
            <Button classname="btn btn-ghost normal-case text-primary text-2xl font-bold">
              Libra<span className="text-secondary">ries</span>
            </Button>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold text-primary">
              <li>
                <Button variant="ghost">Home</Button>
              </li>

              {/* dropdown */}
              <div className="dropdown dropdown-bottom">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  Category
                </label>
                <ul tabIndex={0} className="menu dropdown-content p-2 bg-base-100 rounded-box w-[36rem] mt-4 shadow-2xl">
                  <div className="flex">
                    <div className="border-r border-solid border-gray-300 w-[17rem] flex flex-col">
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </div>
                    <div className="p-2 flex flex-col">
                      <div>
                        <h1>Best Products</h1>
                      </div>
                      <div className="flex flex-wrap">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                          return <Card classname="mr-5 mt-2 w-32 shadow-md" title="Koala Kumal" />;
                        })}
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
              {/* end */}

              <li>
                <Button variant="ghost">Your Cart</Button>
              </li>
              <li>
                <Button variant="ghost">History</Button>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Button classname="btn-link no-underline hidden md:flex">Login</Button>
            {/* <Button className="btn btn-secondary">Sign Up</Button> */}
            <button className="btn btn-secondary rounded-full">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
