import React from 'react';
import Link from 'next/link';
import './Navstyle.css';


function AboutNav() {
  return (
    <>
    <div className="logo">
      <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><img src="/image/logo.png" alt="Logo" /></Link>
    </div>
    <header>
        <div className="navbar">
            <nav>
                <a href="">Exercise</a>
                <a href="https://www.facebook.com/profile.php?id=100060086192966" className="Contact">Contact</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5ZkThrTHkqnRrQtvXADtgPXXPmzTGMYLL217sf3hrExn5AQ/viewform">Form</a>
            </nav>
        </div>
    </header>
    </>
  );
}

export default AboutNav;

