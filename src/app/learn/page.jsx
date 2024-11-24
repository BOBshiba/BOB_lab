"use client";

import React from 'react';
import './globalslearn.css';
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
            <Link href="/learn/web">
              <img src="/image/web (1).png" alt="เว็บ" />
            </Link>
          </div>
          <div className="item">
            <Link href="/learn/roblox">
              <img src="/image/roblox.png" alt="Roblox" />
            </Link>
          </div>
          <div className="item">
            <Link href="/learn/minecraft">
              <img src="/image/minecraft.png" alt="Minecraft" />
            </Link>
          </div>
        </Slider>
      </div>

      <div className="boxlearnsec">
        <div className="inbox">
          <h1>ว่าง</h1>
        </div>
      </div>
    </>
  );
}
