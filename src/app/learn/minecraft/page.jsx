"use client";

import React from 'react';
import './globalsmine.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link'; // ใช้ Link จาก Next.js

export default function Homelearn() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <div className="bac">
        <h1 className="descenter">
          เว็บนี้จะเป็นไกด์ในการเขียนโปรแกรมโดยจะแนบคลิปต่างๆให้ แทนการอัดคลิปอธิบายเองเพราะคอมของผู้ทำพื้นที่น้อย
          (เหตุผลจริงๆคือขึ้เกียจและไม่คิดว่าคนจะใช้เยอะ)
        </h1>
        <Slider {...settings} className='slideshow'>
          <div className="item">
            <Link href="/learn/minecraft">
              <img src="/image/minecraft.png" alt="Minecraft" />
            </Link>
          </div>
          <div className="item">
            <Link href="/learn/web">
              <img src="/image/web (1).png" alt="เว็บ" />
            </Link>
          </div>
          <div className="item">
            <Link href="/learn/roblox">
              <img src="/image/roblox.png" alt="Roblox" />
            </Link>
          </div>
        </Slider>
        <div className="BOX">
          <div className="box">
          <Link href='https://www.youtube.com/watch?v=R5t1_1CD4jo&t=284s'>
            <img src="/image/ater.png" alt="Html" />
          </Link>
        </div>
        <div className="box">
          <Link href='https://www.youtube.com/watch?v=387NaAGG1j4&t=1588s'>
            <img src="/image/self.png" alt="Html" />
          </Link>
        </div>
        <div className="box">
          <Link href='https://www.youtube.com/watch?v=-j7aRzVY_k8&t=664s'>
            <img src="/image/sse.png" alt="Html" />
          </Link>
        </div>
        </div>


      </div>

      <div className="boxlearnsec">
    
      </div>
    </>
  );
}