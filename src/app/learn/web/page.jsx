"use client";

import React from 'react';
import './globalsweb.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link'; // ใช้ Link จาก Next.js

export default function Homeweb() {
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
            <Link href="">
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
        <div className="BOX">
          <div className="box">
          <Link href='https://www.youtube.com/watch?v=7MeQxBqchNU&t=63s'>
            <img src="/image/html.png" alt="Html" />
          </Link>
        </div>
        <div className="box">
          <Link href='https://www.youtube.com/watch?v=ZvpEXS015nk&t=1203s'>
            <img src="/image/css.png" alt="Html" />
          </Link>
        </div>
        <div className="box">
          <Link href='https://www.youtube.com/watch?v=CtTuoHDXYPw'>
            <img src="/image/java.png" alt="Html" />
          </Link>
        </div>
        </div>


      </div>

      <div className="boxlearnsec">
        <div className="textlearn">
          <h1>หำน้อย</h1>
        </div>
        <div className="boxalllearn">
          <div className="boxlearn">
            <a href="/learn/web/article">
              <img src="/image/java.png" alt="" />
              <div className="text">
              <h2>การทำ Navbar</h2>
              <h3>สอนการทำ Navbar หรือแถบเมนุ</h3>
              <hr />
              <h4>By Mr.chaiyaphat thamtura</h4>
              </div>
            </a>
          </div>
          <div className="boxlearn">
            <a href="">
              <img src="/image/java.png" alt="" />
              <div className="text">
              <h2>การทำ Navbar</h2>
              <h3>สอนการทำ Navbar หรือแถบเมนุ</h3>
              <hr />
              <h4>By Mr.chaiyaphat thamtura</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
