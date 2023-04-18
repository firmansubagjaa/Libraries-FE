import React from "react";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container">
        <div className="flex justify-between p-10 ">
          <div>
            {/* <Button classname="btn btn-ghost normal-case text-primary text-2xl font-bold">
            Libra<span className="text-secondary">ries</span>
          </Button> */}
            <p className="text-primary font-bold text-2xl">
              Libra<span className="text-secondary">ries</span>
            </p>
            <p className="text-gray-600">Is the best place to buy a book.</p>
          </div>
          <div className="flex flex-col">
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div className="flex flex-col">
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
