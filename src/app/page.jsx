
import './globals.css';
import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* วิดีโอพื้นหลัง */}
      <div className="video-background">
        <video playsInline autoPlay muted loop>
          <source src="/image/coding.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="bockvideo">
        
    </div>

      {/* บล็อกเนื้อหาหลัก */}
      <div className="textcenter">
        <img src="/image/logo.png" alt="logo"/>
        <h1 className="descenter">เว็บนี้จะเป็นไกด์ในการเขียนโปรแกรมโดยจะแนบคลิปต่างๆให้ แทนการอัดคลิปอธิบายเองเพราะคอมของผู้ทำพื้นที่น้อย(เหตุผลจริงๆคือขึ้เกียจและไม่คิดว่าคนจะใช้เยอะ)</h1>
        <Link href="/learn">
          Learn
        </Link>
      </div>

      {/* บล็อกสิ่งที่ต้องใช้ */}
      <div className="sectwobac">
        <div className="sectword">
            <p>สิ่งที่ต้อง<span>ใช้</span></p>
        </div>
        <div className="imagesectwo">
            <a href="https://www.youtube.com/watch?v=KuI-fCmX8kk" ><img src="/image/bacvs.png" alt="" /></a>
            <a href="https://github.com/"><img src="/image/bacgit.png" alt="" /></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="/image/bacpc.png" alt="" /></a>
        </div>
        <div className="secbac">
            
        </div>
      </div>
    </main>
  );
}
