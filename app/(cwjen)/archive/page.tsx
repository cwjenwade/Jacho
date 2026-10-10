"use client";

import React from 'react';
import { 
  Quote, 
  Sparkles,
  ArrowRight,
  Circle,
  Heart
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// 定義 Banner 資料 (已擴充 alt 屬性建議)
const BANNERS = {
  b01: { src: "/Photos/banner/b01.png", text: "愛，有時誕生於渴望，卻無法存於生活", alt: "任祈蔚諮商心理師 - 愛的渴望與心理治療" },
  b02: { src: "/Photos/banner/b02.png", text: "思緒是多元開展", alt: "諮商心理師任祈蔚 - 多元思緒開展" },
  b03: { src: "/Photos/banner/b03.png", text: "生活是一種持續發生。", alt: "心理諮商與生活體驗 - 任祈蔚 Wade Jen" },
  b04: { src: "/Photos/banner/b04.png", text: "你如何感知。", alt: "心理治療觀點：你如何感知 - 諮商心理師任祈蔚" },
};

export default function IndexPage() {
  
  return (
    <div className="min-h-screen bg-[#F8F8EC] font-sans text-[#3A4535] overflow-x-hidden selection:bg-[#E2C351] selection:text-white">
      
      {/* ================= HERO SECTION: 總綱 ================= */}
      {/* 行銷邏輯：首屏定調。用最精煉的文字告訴訪客「這是什麼地方」。 */}
      <section className="pt-24 pb-12 px-6 md:pt-32 md:pb-20 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#E2C351] mx-auto mb-6 opacity-80" />
          
          {/* [修改] H1 標籤優化：置入核心關鍵字，原有的設計文字調整為 span 結構 */}
          <h1 className="text-3xl md:text-6xl font-serif font-bold text-[#2F3A29] leading-snug md:leading-[1.3] tracking-wide mb-6">
            <span className="sr-only">任祈蔚 Wade Jen | 諮商心理師</span>
            <span>這裡是為了提供</span><br className="hidden md:block" />
            <span className="relative inline-block px-1 md:px-4 mx-1">
              <span className="relative z-10">能被人使用的思想</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-[#E2C351]/30 -z-0"></span>
            </span>
            <span className="inline md:hidden">，</span>
            <span>而存在。</span>
          </h1>
          
          <p className="text-base md:text-xl text-[#5C6155] font-light leading-relaxed max-w-2xl mx-auto">
            一句話、一個觀點、一種看事情的方式。<br className="hidden md:block"/>
            讓別人比較容易找到那些彙整，<br className="md:hidden"/>
            讓思想變得可以捉摸，可以著墨。
          </p>
        </div>
      </section>

      {/* ================= BANNER 1: 感知 (b04) ================= */}
      <section className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden group">
         <Image 
           src={BANNERS.b04.src} 
           alt={BANNERS.b04.alt} // [修改] 帶入定義好的 alt
           fill
           priority
           sizes="100vw"
           className="object-cover object-center transition-transform duration-[20s] group-hover:scale-105"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#2F3A29]/90 via-transparent to-transparent z-10"></div>
         
         <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 flex justify-center md:justify-start">
            <h2 className="text-white text-2xl md:text-5xl font-serif font-bold tracking-widest border-b-2 border-[#E2C351] pb-3 md:pb-4 shadow-black drop-shadow-md">
              {BANNERS.b04.text}
            </h2>
         </div>
      </section>

      {/* ================= BLOCK 1: 生活 (Life) ================= */}
      <section className="py-12 md:py-24 bg-[#A3BFA7]/10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <div className="order-1 lg:order-2 space-y-5 md:space-y-8">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#A3BFA7] text-white text-[10px] md:text-xs tracking-widest font-bold uppercase rounded-full">Life & Reality</span>
            </div>
            
            {/* [修改] H2 標籤優化：置入「心理諮商」 */}
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#2F3A29]">
              關於心理諮商：<br className="hidden md:block"/>
              人因何受苦，又如何脫苦
            </h2>
            
            <div className="space-y-4 text-[#4A5245] text-base md:text-lg leading-loose font-light text-justify md:text-left">
              <p>
                這裡的文字，大多來自我對人的理解。
                心理治療與諮商，不只是診間裡的對話，
                更是關於我們如何在現實生活中活著。
              </p>
              <div className="p-4 md:p-6 bg-white/60 border-l-4 border-[#A3BFA7] rounded-r-lg">
                <p className="italic text-[#3A4535] text-sm md:text-base">
                  「讓問題不只剩下一條路，也不急著被解決。」
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6 pt-2">
               <Link href="/psychotherapy" className="flex items-center gap-2 text-[#79976B] font-bold border-b border-transparent hover:border-[#79976B] transition-all text-sm md:text-base">
                 <Sparkles size={16} /> 心理治療 <ArrowRight size={14} />
               </Link>
               <Link href="/project" className="flex items-center gap-2 text-[#79976B] font-bold border-b border-transparent hover:border-[#79976B] transition-all text-sm md:text-base">
                 <Sparkles size={16} /> 專案計畫 <ArrowRight size={14} />
               </Link>
            </div>
          </div>

          <div className="order-2 lg:order-1 relative h-[300px] md:h-[500px] mt-4 md:mt-0 w-full max-w-sm mx-auto lg:max-w-none">
             <div className="absolute top-0 left-0 w-[65%] z-10 shadow-xl bg-white p-2 rotate-2 hover:rotate-0 transition-all duration-500 rounded-lg">
                <Image src="/Photos/Index/id01.png" alt="心理治療 - 行走的人" width={400} height={400} className="w-full h-auto" loading="lazy"/> {/* [修改] alt 擴充 */}
             </div>
             <div className="absolute bottom-4 right-4 w-[50%] z-20 border-4 border-[#F8F8EC] shadow-lg -rotate-3 rounded-lg">
                <Image src="/Photos/Index/id09.png" alt="心理諮商 - 向上伸展" width={300} height={300} className="w-full h-auto" loading="lazy"/> {/* [修改] alt 擴充 */}
             </div>
          </div>

        </div>
      </section>

      {/* ================= BANNER 2: 持續發生 (b03) ================= */}
      <section className="relative w-full h-[40vh] md:h-[70vh] overflow-hidden">
         <div className="absolute inset-0 bg-[#3A4535]/40 z-10 mix-blend-multiply"></div>
         <Image 
           src={BANNERS.b03.src} 
           alt={BANNERS.b03.alt} // [修改]
           fill
           sizes="100vw"
           className="object-cover object-center"
         />
         <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
            <p className="text-white text-2xl md:text-5xl font-serif font-bold tracking-widest text-center drop-shadow-xl">
              {BANNERS.b03.text}
            </p>
         </div>
      </section>

      {/* ================= BLOCK 2: 人與人 (Connection) ================= */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            
            <div className="space-y-6 md:space-y-8">
               <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#BAC680] text-white text-[10px] md:text-xs tracking-widest font-bold uppercase rounded-full">Connection</span>
               </div>
               {/* [修改] H2 標籤維持，語義已足夠 */}
               <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#2F3A29]">
                 關於人與人：<br/>在關係中重新感覺安全
               </h2>
               <div className="space-y-4 text-[#5C6155] text-base md:text-lg leading-loose font-light text-justify">
                 <p>
                   在台灣，我們珍惜面子，報喜不報憂。
                   這樣的文化形成了一種困境：
                   <strong className="block mt-2 text-[#3A4535]">孤獨、缺乏被理解，關係停留在眼前卻難以深化。</strong>
                 </p>
                 <p>
                   我長期關注團體。因為團體所提供的，
                   是來自「他人」的回應。
                   不是出於工作或專業素養，而是人與人之間自然發生的真實。
                 </p>
               </div>
               <div className="pt-2">
                 <Link href="/group-therapy" className="inline-block px-6 py-2 md:px-8 md:py-3 border border-[#BAC680] text-[#5C6155] rounded-full hover:bg-[#BAC680] hover:text-white transition-all duration-300 text-sm md:text-base">
                   探索團體治療
                 </Link>
               </div>
            </div>

            <div className="relative h-[300px] md:h-[500px] w-full mt-4 md:mt-0 max-w-sm mx-auto lg:max-w-none">
               <div className="absolute top-0 right-0 w-[55%] z-10 shadow-lg border-4 border-white rounded-lg overflow-hidden">
                  <Image src="/Photos/Index/id11.png" alt="團體治療 - 枝葉交織" width={300} height={200} className="w-full h-auto" loading="lazy"/> {/* [修改] alt 擴充 */}
               </div>
               <div className="absolute top-[25%] left-0 w-[50%] z-20 shadow-2xl rotate-3 rounded-lg overflow-hidden border-2 border-white">
                  <Image src="/Photos/Index/id06.png" alt="關係建立 - 同步跳躍" width={250} height={200} className="w-full h-auto" loading="lazy"/> {/* [修改] alt 擴充 */}
               </div>
               <div className="absolute bottom-0 right-[10%] w-[55%] z-30 shadow-xl -rotate-2 bg-white p-1 rounded-lg">
                  <Image src="/Photos/Index/id10.png" alt="關係安全感 - 依靠" width={300} height={200} className="w-full h-auto" loading="lazy"/> {/* [修改] alt 擴充 */}
               </div>
            </div>
        </div>
      </section>

      {/* ================= BANNER 3: 多元開展 (b02) ================= */}
      <section className="relative w-full h-[35vh] md:h-[60vh] overflow-hidden flex items-center justify-center bg-[#F8F8EC]">
         <Image 
           src={BANNERS.b02.src} 
           alt={BANNERS.b02.alt} // [修改]
           fill
           sizes="100vw"
           className="object-cover opacity-80"
         />
         <div className="relative z-20 px-6 text-center">
            {/* [修改] 將 p 標籤改為 h2，提升權重 */}
            <h2 className="text-[#2F3A29] text-xl md:text-4xl font-serif font-bold tracking-widest drop-shadow-sm">
              {BANNERS.b02.text}
            </h2>
         </div>
      </section>

      {/* ================= BLOCK 3: 愛 (Love) ================= */}
      <section className="bg-[#E2C351]/10 border-b border-[#E2C351]/30 pb-16">
        
        {/* BANNER 4: 愛的渴望 (b01) */}
        <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden mb-12 md:mb-16">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#E2C351] z-10 opacity-90"></div>
           <Image 
             src={BANNERS.b01.src} 
             alt={BANNERS.b01.alt} // [修改]
             fill
             sizes="100vw"
             className="object-cover object-top"
           />
           <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 z-20 text-center flex flex-col items-center justify-end h-full">
              <Heart size={28} className="text-white mb-4 fill-current opacity-80" />
              {/* [修改] 將 p 標籤改為 h2，並使用 span 包覆純裝飾性文字避免破壞語義 */}
              <h2 className="text-white text-xl md:text-5xl font-serif font-bold leading-snug drop-shadow-md">
                 <span>{BANNERS.b01.text.split('，')[0]}，</span><br/>
                 <span>{BANNERS.b01.text.split('，')[1]}</span>
              </h2>
           </div>
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
             <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#2F3A29] mb-3">
               往內看的旅程
             </h2>
             <p className="text-sm md:text-lg text-[#5C6155]">
               嘗試喚醒看看。停頓一下，回到你自己。
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            
            <div className="space-y-8 text-base md:text-lg leading-loose text-[#3A4535] font-light text-justify md:text-left">
               <div>
                 <p>你怎麼看待自己？</p>
                 <p>你和別人相處的經驗是什麼？</p>
                 <p className="text-[#E2C351] font-medium italic mt-2">
                   它比較像纏在一起的毛線，<br className="inline md:hidden" />
                   還是像站在山頂時的一陣清爽的微風？
                 </p>
               </div>
               <div className="w-full h-[1px] bg-[#E2C351]/30 my-2"></div>
               <div>
                 <p>你談過戀愛嗎？對你來說，愛是什麼？</p>
                 <p>你愛自己嗎？</p>
               </div>
               <div className="w-full h-[1px] bg-[#E2C351]/30 my-2"></div>
               <div>
                 <p className="font-bold text-[#2F3A29] mt-2">心裡埋了什麼？我們要把它打開嗎？</p>
                 <div className="mt-4 bg-white/60 p-4 rounded-lg inline-block w-full md:w-auto">
                    <p className="text-lg md:text-xl font-serif text-[#2F3A29]">
                      這些經驗，從哪裡來？<br/>又要往哪裡去？
                    </p>
                 </div>
               </div>
            </div>

            <div className="relative mt-4 md:mt-0 flex justify-center">
               <div className="relative w-[240px] md:w-[70%] z-20">
                  <div className="absolute inset-0 bg-[#E2C351] rounded-full opacity-30 blur-2xl"></div>
                  <Image src="/Photos/Index/id13.png" alt="伴侶治療與自我探索 - 花朵與圓" width={300} height={200} className="relative w-full h-auto rounded-full border-4 md:border-8 border-[#F8F8EC] shadow-xl" loading="lazy"/> {/* [修改] alt 擴充 */}
               </div>
            </div>
          </div>
          
          <div className="text-center mt-12 md:mt-20">
             <Link href="/couple-therapy" className="inline-flex items-center gap-2 text-[#E2C351] font-bold tracking-widest hover:text-[#2F3A29] transition-colors bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md text-sm md:text-base">
               <Circle size={12} fill="currentColor" /> 前往伴侶治療 <ArrowRight size={16} />
             </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER DECOR ================= */}
      <div className="py-10 bg-[#F8F8EC] text-center border-t border-[#BAC680]/30">
        <p className="font-serif italic text-[#79976B] text-sm md:text-lg">
          &ldquo;Love is a constant process of tuning in.&rdquo;
        </p>
        <p className="text-[10px] md:text-xs text-[#A3BFA7] mt-2 tracking-widest uppercase">
          © 2026 Titanic Research Lab
        </p>
      </div>

    </div>
  );
}