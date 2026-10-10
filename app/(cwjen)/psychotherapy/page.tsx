'use client';

import React from 'react';
import Link from 'next/link';
import AuthorSignature from '@/components/AuthorSignature';
import { 
  Layers, 
  Activity,
  UsersRound,
  MessagesSquare,
  Anchor,
  Scale,
  Eye,
  PenTool,
  Brain,
  ArrowUpRight,
  Compass,
  Lightbulb,
  Fingerprint,
  HeartHandshake
} from 'lucide-react';

// Removed metadata export as this is a client component

export default function PsychotherapyPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#5A4A42] selection:bg-[#E69796] selection:text-white overflow-x-hidden">
      
      {/* ================= HERO: 概念分野 (i01 & i02) ================= */}
      <section className="pt-36 pb-24 px-6 relative">
        {/* 背景裝飾：有機斑塊 */}
        <div className="absolute top-0 right-0 w-[55%] h-[85%] bg-[#FAFBF6] rounded-bl-[250px] -z-20"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#C6C09C] rounded-full blur-3xl opacity-20 -z-10 mix-blend-multiply"></div>
        <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-[#E69796] rounded-full blur-3xl opacity-15 -z-10 mix-blend-multiply"></div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* 左側文字 */}
            <div className="lg:w-5/12 pt-8">
              <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 bg-white border border-[#C6C09C]/50 rounded-full shadow-sm backdrop-blur-sm">
                <Compass size={18} className="text-[#C6C09C]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#A09578] uppercase">Navigating the Psyche</span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl text-[#5A4A42] leading-[1.1] mb-10">
                心理治療<br />
                <span className="text-[#E69796] text-3xl md:text-4xl font-normal italic block mt-4 font-serif">
                  理解經驗的多重路徑
                </span>
              </h1>

              <div className="space-y-8 text-[#7D6B63] text-lg font-light leading-loose">
                <div>
                  <h2 className="text-xl font-bold text-[#5A4A42] flex items-center gap-2 mb-4">
                    <Layers size={22} className="text-[#FFB283]"/> 
                    時間軸與經驗場域
                  </h2>
                  <p>
                    心理治療的理論差異，經常被理解為一條線性的時間軸。有些取向將理解的錨點拋向過去，關注早期經驗、內在動力與心理結構如何層層堆疊；有些取向則將視野投向未來，關注人如何在意義、選擇與責任的風暴中定位自己。
                  </p>
                </div>
                
                <div className="p-8 bg-[#FAFBF6] border-l-4 border-[#C6C09C] rounded-r-2xl shadow-sm">
                  <p className="text-[#5A4A42] mb-0">
                    也有一群取向刻意不以時間作為主要軸線，而是將注意力放在「經驗本身」的質地，特別是情緒、認知與行為之間如何彼此牽動、彼此影響，形成獨特的內在風景。
                  </p>
                </div>
                
                <p>
                  不同理論並非走在同一條路上，而是從不同角度切入同一個人類經驗場域。這些差異，構成了心理治療理論傳統的基本樣貌，也為我們提供了理解心靈的多種語言。
                </p>
              </div>
            </div>

            {/* 右側圖片拼貼 */}
            <div className="lg:w-7/12 relative min-h-[600px] w-full mt-10 lg:mt-0">
              {/* i01 (689x375) */}
              <div className="relative z-10 shadow-[0_20px_50px_rgba(198,192,156,0.3)] rounded-[2.5rem] overflow-hidden border-8 border-white">
                <div className="relative aspect-[689/375]">
                  <img src="/Photos/i01.png" alt="理論分野" className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur px-5 py-2 rounded-xl text-xs font-bold text-[#A09578] shadow-sm tracking-widest border border-[#C6C09C]/20">
                  THEORETICAL DIVERGENCE
                </div>
              </div>
              
              {/* i02 (436x386) - 重疊 */}
              <div className="absolute -bottom-12 -left-4 lg:-left-16 w-[70%] z-20 shadow-[0_20px_50px_rgba(230,151,150,0.3)] rounded-[2.5rem] overflow-hidden border-8 border-[#FAFBF6]">
                <div className="relative aspect-[436/386]">
                  <img src="/Photos/i02.png" alt="臨床主體" className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 核心導航地圖 (THE INDEX MAP) ================= */}
      <section className="py-32 px-6 relative bg-white border-t border-[#FAFBF6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-[#C6C09C] font-bold tracking-widest text-sm uppercase mb-4 block">Landscape of Theories</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#5A4A42] mb-8">五大理論取向地圖</h2>
            <div className="h-1.5 w-24 bg-[#FFB283] mx-auto rounded-full mb-8"></div>
            <p className="text-[#A09578] text-lg leading-relaxed font-light">
              每一種取向都是一把獨特的鑰匙，用以開啟心靈的不同房間。<br/>
              點擊以下板塊，深入探索各個學派的核心視角。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            
            {/* Group 1: History (C6C09C) */}
            <div className="lg:col-span-2 bg-[#F9F8F4] rounded-[3rem] p-12 border border-[#C6C09C]/20 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#C6C09C] opacity-10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-white rounded-full text-[#A09578] shadow-sm"><Anchor size={24}/></div>
                    <span className="text-sm font-bold tracking-widest text-[#A09578] border-b border-[#C6C09C]">GROUP 01</span>
                  </div>
                  <h3 className="font-serif text-3xl text-[#5A4A42] mb-4">以生命歷史與心理結構為重心</h3>
                  <p className="text-[#7D6B63] mb-8 max-w-xl text-lg font-light leading-relaxed">
                    這一群理論，將人的困擾理解為長期經驗累積的結果，關注早期關係、內在結構與深層動力。認為過去並未過去，而是活在當下。
                  </p>
                  
                  {/* LINKS */}
                  <div className="flex flex-wrap gap-4">
                    <Link href="/psychotherapy/psychoanalysis" className="flex items-center gap-3 px-6 py-3 bg-white border border-[#C6C09C] rounded-2xl text-[#5A4A42] hover:bg-[#C6C09C] hover:text-white transition-all hover:-translate-y-1 shadow-sm">
                      <span className="font-medium tracking-wide">Psychoanalysis 精神分析</span>
                      <ArrowUpRight size={18}/>
                    </Link>
                    <Link href="/psychotherapy/adler" className="flex items-center gap-3 px-6 py-3 bg-white border border-[#C6C09C] rounded-2xl text-[#5A4A42] hover:bg-[#C6C09C] hover:text-white transition-all hover:-translate-y-1 shadow-sm">
                      <span className="font-medium tracking-wide">Adlerian Therapy 阿德勒學派</span>
                      <ArrowUpRight size={18}/>
                    </Link>
                  </div>
                </div>
                <p className="mt-10 text-sm text-[#A09578] italic border-t border-[#C6C09C]/20 pt-6">
                  核心邏輯：人現在的經驗，與其過往生命歷程之間存在著結構性的深層連結。
                </p>
              </div>
            </div>

            {/* Image Block: i05 */}
            <div className="bg-white rounded-[3rem] p-8 border border-[#FAFBF6] shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center">
              <div className="w-full relative mb-6">
                 <img src="/Photos/i05.png" alt="概念尚未成形" className="w-full h-auto object-contain"/>
              </div>
              <p className="text-xs text-[#C6C09C] font-serif italic tracking-widest uppercase text-center mt-auto">Concepts in formation</p>
            </div>

            {/* Group 2: Existence (E69796) */}
            <div className="bg-[#FFF5F5] rounded-[3rem] p-10 border border-[#E69796]/20 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#E69796]/10 rounded-bl-full group-hover:scale-125 transition-transform duration-700"></div>
              <div className="p-3 bg-white rounded-full text-[#E69796] shadow-sm w-fit mb-6"><Scale size={24}/></div>
              <span className="text-xs font-bold tracking-widest text-[#E69796] mb-3 block">GROUP 02</span>
              <h3 className="font-serif text-2xl text-[#5A4A42] mb-4">以存在處境與意義為重心</h3>
              <p className="text-[#7D6B63] mb-8 font-light leading-relaxed">
                將心理困擾放在人如何面對生命、選擇與責任的處境中理解。關注的不是症狀來源，而是人如何在當下回應生命要求。
              </p>
              
              {/* LINKS */}
              <div className="flex flex-col gap-3">
                <Link href="/psychotherapy/existential" className="group/link flex justify-between items-center px-5 py-4 bg-white/70 hover:bg-white rounded-2xl text-[#5A4A42] transition-colors border border-transparent hover:border-[#E69796]/30">
                  <span className="font-medium">Existential 存在主義</span>
                  <ArrowUpRight size={18} className="text-[#E69796] opacity-0 group-hover/link:opacity-100 transition-opacity"/>
                </Link>
                <Link href="/psychotherapy/reality-therapy" className="group/link flex justify-between items-center px-5 py-4 bg-white/70 hover:bg-white rounded-2xl text-[#5A4A42] transition-colors border border-transparent hover:border-[#E69796]/30">
                  <span className="font-medium">Reality 現實治療</span>
                  <ArrowUpRight size={18} className="text-[#E69796] opacity-0 group-hover/link:opacity-100 transition-opacity"/>
                </Link>
              </div>
            </div>

            {/* Group 3: Experience (FFB283) */}
            <div className="bg-[#FFF8F0] rounded-[3rem] p-10 border border-[#FFB283]/20 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFB283]/10 rounded-bl-full group-hover:scale-125 transition-transform duration-700"></div>
              <div className="p-3 bg-white rounded-full text-[#FFB283] shadow-sm w-fit mb-6"><UsersRound size={24}/></div>
              <span className="text-xs font-bold tracking-widest text-[#FFB283] mb-3 block">GROUP 03</span>
              <h3 className="font-serif text-2xl text-[#5A4A42] mb-4">以當下經驗與關係互動為重心</h3>
              <p className="text-[#7D6B63] mb-8 font-light leading-relaxed">
                將治療工作放在此時此刻，關注感受、互動與經驗如何在關係中展開。理解是在「我-你」的相遇中形成。
              </p>
              
              {/* LINKS */}
              <div className="flex flex-col gap-3">
                <Link href="/psychotherapy/person-centered" className="group/link flex justify-between items-center px-5 py-4 bg-white/70 hover:bg-white rounded-2xl text-[#5A4A42] transition-colors border border-transparent hover:border-[#FFB283]/30">
                  <span className="font-medium">Person-Centered 個人中心</span>
                  <ArrowUpRight size={18} className="text-[#FFB283] opacity-0 group-hover/link:opacity-100 transition-opacity"/>
                </Link>
                <Link href="/psychotherapy/gestalt-therapy" className="group/link flex justify-between items-center px-5 py-4 bg-white/70 hover:bg-white rounded-2xl text-[#5A4A42] transition-colors border border-transparent hover:border-[#FFB283]/30">
                  <span className="font-medium">Gestalt 完形治療</span>
                  <ArrowUpRight size={18} className="text-[#FFB283] opacity-0 group-hover/link:opacity-100 transition-opacity"/>
                </Link>
              </div>
            </div>

            {/* Image Block: i06 */}
            <div className="bg-white rounded-[3rem] p-8 border border-[#FAFBF6] shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center">
              <div className="w-4/5 relative mb-6">
                <img src="/Photos/i06.png" alt="概念化穩定" className="w-full h-auto object-contain"/>
              </div>
              <p className="text-xs text-[#E69796] font-serif italic tracking-widest uppercase text-center mt-auto">Temporary stabilization</p>
            </div>

            {/* Group 4: CBT (FFCA8C) */}
            <div className="lg:col-span-2 bg-[#FFFAF5] rounded-[3rem] p-10 border border-[#FFCA8C]/30 relative overflow-hidden flex flex-col md:flex-row items-center gap-10 hover:shadow-xl transition-shadow duration-300">
               <div className="flex-1">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-white rounded-full text-[#E0C56A] shadow-sm"><Activity size={24}/></div>
                    <span className="text-xs font-bold tracking-widest text-[#E0C56A]">GROUP 04</span>
                 </div>
                 <h3 className="font-serif text-2xl text-[#5A4A42] mb-3">以認知、行為與情緒連動為重心</h3>
                 <p className="text-[#7D6B63] font-light leading-relaxed mb-6">
                   刻意不以生命時間軸作為主架構，而是關注經驗系統內部如何彼此牽動。聚焦於認知、行為與情緒之間的循環關係。
                 </p>
                 <Link href="/psychotherapy/cbt" className="inline-flex items-center gap-3 px-8 py-3 bg-[#FFCA8C] text-white rounded-full font-bold hover:bg-[#E0C56A] transition-colors shadow-sm">
                   CBT 認知行為 <ArrowUpRight size={18}/>
                 </Link>
               </div>
               <div className="flex-1 border-l border-[#FFCA8C]/20 pl-10 hidden md:block">
                 <p className="text-[#A09578] italic font-serif text-lg">
                   &ldquo;Change the thought, change the feeling.&rdquo;
                 </p>
                 <p className="text-[#C6C09C] text-xs mt-2 uppercase tracking-wider">Adjustment of Experience Patterns</p>
               </div>
            </div>

            {/* Group 5: Postmodern (Dark) */}
            <div className="lg:col-span-1 bg-[#5A4A42] rounded-[3rem] p-10 text-white relative overflow-hidden group shadow-2xl hover:translate-y-1 transition-transform">
               <div className="absolute top-[-20%] left-[-20%] w-64 h-64 bg-[#E69796] rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
               <div className="relative z-10 flex flex-col h-full justify-between">
                 <div>
                   <div className="flex items-center justify-between mb-8">
                     <span className="text-xs font-bold tracking-widest text-[#E69796] border-b border-[#E69796]/30 pb-1">GROUP 05</span>
                     <MessagesSquare size={24} className="text-[#E69796]"/>
                   </div>
                   <h3 className="font-serif text-2xl mb-4">以社會位置、權力與語言為重心</h3>
                   <p className="text-white/80 font-light leading-relaxed mb-8">
                     關注的不是個體內部，而是人如何被放置在文化、性別、權力與語言結構中。
                   </p>
                 </div>
                 
                 <div className="flex flex-col gap-3">
                   <Link href="/psychotherapy/feminist" className="flex items-center justify-between border border-white/20 px-5 py-3 rounded-xl hover:bg-white/10 transition-colors">
                     <span className="text-sm font-medium tracking-wide">Feminist 女性主義</span>
                     <ArrowUpRight size={16} className="opacity-50"/>
                   </Link>
                   <Link href="/psychotherapy/postmodern" className="flex items-center justify-between border border-white/20 px-5 py-3 rounded-xl hover:bg-white/10 transition-colors">
                     <span className="text-sm font-medium tracking-wide">Postmodern 後現代取向</span>
                     <ArrowUpRight size={16} className="opacity-50"/>
                   </Link>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 理論與折衷 (i03 & i04) ================= */}
      <section className="py-24 px-6 bg-[#FAFBF6] relative">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-10">
             {/* i03 */}
             <div className="relative rounded-[2rem] overflow-hidden shadow-lg border-8 border-white transform rotate-1">
                <img src="/Photos/i03.png" alt="非中心化理論配置" className="w-full h-auto"/>
             </div>
             {/* i04 */}
             <div className="relative rounded-[2rem] overflow-hidden shadow-lg border-8 border-white w-[90%] ml-auto transform -rotate-1 -mt-8">
                <img src="/Photos/i04.png" alt="折衷取向中的並存" className="w-full h-auto"/>
             </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-[#5A4A42] font-serif text-4xl mb-8 leading-tight">
              理論的學習，<br/>
              與實務中的<span className="text-[#FFB283]">折衷取向</span>
            </h2>
            <div className="prose prose-lg text-[#7D6B63] font-light leading-loose">
              <p>
                多數治療師在理論學習過程中，會接觸不只一種取向，也會在實務中形成折衷取向。不同方法的並用，在臨床現場相當常見。
              </p>
              <p>
                但在實際工作中，真正影響治療方向的，並不是方法混合的程度，而是治療師如何理解眼前這一個人。
              </p>
              <div className="bg-white p-10 rounded-[2rem] shadow-sm border-l-8 border-[#FFCA8C] mt-8">
                <p className="text-[#5A4A42] font-medium m-0 text-xl font-serif italic">
                 「理論的角色，不只是工具來源，而是提供一種觀看個案的方式。治療師如何觀看，會直接影響他在治療中看見什麼、聽見什麼，以及如何回應。」
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 核心專業能力 (i09 & i10) ================= */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* 背景斑塊 */}
        <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] bg-[#E69796] rounded-full blur-3xl opacity-10 mix-blend-multiply"></div>
        <div className="absolute left-[-10%] bottom-[10%] w-[400px] h-[400px] bg-[#C6C09C] rounded-full blur-3xl opacity-10 mix-blend-multiply"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 mb-4">
                <Lightbulb size={20} className="text-[#C6C09C]"/>
                <span className="text-[#C6C09C] font-bold tracking-widest text-xs uppercase">Core Competency</span>
              </div>
              <h2 className="font-serif text-4xl text-[#5A4A42] mb-10">個案概念化的形成</h2>
              
              <div className="space-y-8 text-[#7D6B63] font-light text-lg leading-loose">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#FAFBF6] flex items-center justify-center shrink-0 text-[#C6C09C] border border-[#C6C09C]/20"><PenTool size={20}/></div>
                  <p>個案概念化來自於治療歷程中累積的資料。這些資料包含來談問題的敘述、重要事件的經驗方式、情緒反應的型態，以及關係中反覆出現的互動樣式。</p>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#FAFBF6] flex items-center justify-center shrink-0 text-[#C6C09C] border border-[#C6C09C]/20"><Brain size={20}/></div>
                  <p>治療師將這些素材組織起來，形成對個案目前狀態的理解。這種理解不是單一事實的拼接，而是一個對經驗如何被組織、如何持續運作的整體看法。</p>
                </div>
                <div className="border-t border-[#C6C09C]/30 pt-8 mt-4">
                  <p className="text-[#5A4A42] font-serif text-2xl italic">
                    「在心理治療中，這樣的概念化能力，構成了治療師的核心專業能力。」
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col gap-10">
               <div className="bg-[#FAFBF6] p-6 rounded-[2.5rem] shadow-sm">
                 <img src="/Photos/i09.png" alt="經驗被貼身感知" className="w-full h-auto rounded-2xl shadow-inner"/>
                 <div className="flex justify-between items-center mt-4 px-2">
                   <span className="text-[#A09578] text-sm uppercase tracking-wider font-bold">Experience Perceived</span>
                   <div className="w-2 h-2 rounded-full bg-[#C6C09C]"></div>
                 </div>
               </div>
               <div className="bg-[#FAFBF6] p-6 rounded-[2.5rem] shadow-sm w-[90%] self-end">
                 <img src="/Photos/i10.png" alt="經驗被容納與展開" className="w-full h-auto rounded-2xl shadow-inner"/>
                 <div className="flex justify-between items-center mt-4 px-2">
                   <span className="text-[#A09578] text-sm uppercase tracking-wider font-bold">Experience Unfolding</span>
                   <div className="w-2 h-2 rounded-full bg-[#E69796]"></div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 關係與經驗 (i07, i08, i11, i12) ================= */}
      <section className="py-24 px-6 bg-[#5A4A42] text-[#FAFBF6] relative overflow-hidden">
        {/* 深色背景裝飾 */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#5A4A42] z-0"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#E69796] rounded-full blur-[100px] opacity-20 z-0"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#C6C09C] rounded-full blur-[100px] opacity-10 z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Part 1: 關係 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32 border-b border-white/10 pb-20">
            <div className="grid grid-cols-2 gap-6">
               <div className="space-y-4 mt-12">
                 <img src="/Photos/i07.png" alt="共同焦點" className="rounded-3xl border border-white/10 opacity-90 shadow-2xl"/>
                 <p className="text-xs text-white/40 text-center font-serif">Shared Focus</p>
               </div>
               <div className="space-y-4">
                 <img src="/Photos/i08.png" alt="關係變化" className="rounded-3xl border border-white/10 opacity-90 shadow-2xl"/>
                 <p className="text-xs text-white/40 text-center font-serif">Relational Shift</p>
               </div>
            </div>
            <div className="lg:pl-10">
              <h2 className="font-serif text-4xl text-[#FFB283] mb-8 flex items-center gap-4">
                <HeartHandshake size={32}/> 關係作為理解的途徑
              </h2>
              <div className="space-y-8 font-light leading-loose text-[#FAFBF6]/90 text-lg">
                <p>
                  有些取向將焦點放在人類的終極議題，關注生命的意義與存在處境。有些取向關注早期關係、內在客體與心理結構的形成。也有取向將工作放在當下關係之中，透過治療師與當事人的互動來理解人的經驗。
                </p>
                <div className="p-8 bg-white/5 rounded-[2rem] backdrop-blur-sm border border-white/10">
                  <p className="font-bold text-[#FFCA8C] mb-4 text-xl">這些取向的共同點，在於都將治療關係視為理解人的重要途徑。</p>
                  <p>人在關係中如何靠近、退縮、防衛、依附，會在治療情境中持續出現。治療師需要能夠聽懂這些表面事件之下，尚未被說出口、卻深刻影響行為與感受的經驗。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 2: 經驗 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 lg:pr-10">
              <h2 className="font-serif text-4xl text-[#E69796] mb-8 flex items-center gap-4">
                <Eye size={32}/> 理解經驗本身的工作
              </h2>
              <div className="space-y-8 font-light leading-loose text-[#FAFBF6]/90 text-lg">
                <p>
                  在治療工作中，治療師需要能夠貼近個案的經驗，進入其感受與理解方式之中。這種理解並非停留在敘事層次，而是對經驗結構的掌握。
                </p>
                <p>
                  治療師將專業訓練與臨床理解帶入關係之中，逐步形成對個案狀態的整體掌握。治療取向的選擇，往往與治療師對人的基本觀點密切相關。
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="h-[1px] flex-grow bg-[#E69796]/50"></div>
                  <p className="text-[#E69796] font-medium italic">
                    若相信人具有成長與發展的潛能，治療工作便會圍繞在接納、理解與支持個案內在經驗的展開上。
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
               <div className="relative">
                 <img src="/Photos/i11.png" alt="流動經驗" className="rounded-3xl border border-white/10 mix-blend-lighten shadow-2xl"/>
                 <p className="text-xs text-white/50 mt-3 text-center uppercase tracking-widest">Flow</p>
               </div>
               <div className="relative mt-16">
                 <img src="/Photos/i12.png" alt="安置經驗" className="rounded-3xl border border-white/10 mix-blend-lighten shadow-2xl"/>
                 <p className="text-xs text-white/50 mt-3 text-center uppercase tracking-widest">Containment</p>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 結論 (Block 6) ================= */}
      <section className="py-32 px-6 bg-[#FFCA8C] relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block p-6 rounded-full bg-white mb-10 shadow-xl">
            <Fingerprint size={48} className="text-[#E69796]"/>
          </div>
          
          <h2 className="font-serif text-4xl md:text-6xl text-[#5A4A42] mb-12 leading-tight">
            情緒作為治療的核心經驗
          </h2>
          
          <div className="prose prose-xl mx-auto text-[#5A4A42] font-light leading-loose">
            <p>
              在許多文化脈絡中，情緒經常被不信任。忍耐、壓抑、轉移注意力，成為人們習慣採取的因應方式。這些方式，曾經協助人避免心理痛苦，也形成了保護自己的盔甲。
            </p>
            <p className="font-medium bg-white/40 p-4 rounded-xl inline-block my-6">
              當這些防衛逐漸鬆動，底層往往是脆弱且曾經受傷的心理經驗。這些經驗，正是許多困擾的來源。
            </p>
            <p>
              心理治療的工作，包含讓這些痛苦得以被理解，讓深層的恐懼與創傷能被心智系統消化並重新整理。
            </p>
          </div>

          <div className="mt-20 p-10 bg-white/90 rounded-[3rem] shadow-2xl inline-block border-4 border-white max-w-2xl transform rotate-1">
            <p className="text-2xl md:text-3xl font-serif italic text-[#5A4A42] leading-normal">
              「人在情緒層次上，理解自己為何喜愛、厭惡、依附與渴望。<br/>
              心理治療所處理的，正是這些感受經驗本身。」
            </p>
          </div>
        </div>
      </section>

      {/* ================= 底部：探索指南 (Navigation Guide) ================= */}
      {/* 解決頭重腳輕的問題，增加底部份量與實用性 */}
      <section className="py-24 px-6 bg-[#FAFBF6] border-t border-[#C6C09C]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="font-serif text-3xl text-[#5A4A42] mb-3">開啟探索之旅</h2>
              <p className="text-[#A09578] font-bold tracking-widest text-sm uppercase">Beginning the Journey</p>
            </div>
            <p className="text-[#7D6B63] max-w-md mt-6 md:mt-0 text-sm leading-relaxed">
              每一種治療取向都是一扇窗，通往理解人類心靈的不同風景。請點擊下方連結，深入閱讀各學派的詳細介紹。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 text-sm">
            {/* Column 1 */}
            <div className="space-y-4">
              <span className="font-bold text-[#C6C09C] uppercase tracking-wider block mb-2 border-b border-[#C6C09C]/30 pb-2">History</span>
              <Link href="/psychotherapy/psychoanalysis" className="block text-[#5A4A42] hover:text-[#E69796] transition-colors py-1">精神分析</Link>
              <Link href="/psychotherapy/adler" className="block text-[#5A4A42] hover:text-[#E69796] transition-colors py-1">阿德勒學派</Link>
            </div>
            {/* Column 2 */}
            <div className="space-y-4">
              <span className="font-bold text-[#E69796] uppercase tracking-wider block mb-2 border-b border-[#E69796]/30 pb-2">Existence</span>
              <Link href="/psychotherapy/existential" className="block text-[#5A4A42] hover:text-[#E69796] transition-colors py-1">存在主義</Link>
              <Link href="/psychotherapy/reality-therapy" className="block text-[#5A4A42] hover:text-[#E69796] transition-colors py-1">現實治療</Link>
            </div>
            {/* Column 3 */}
            <div className="space-y-4">
              <span className="font-bold text-[#FFB283] uppercase tracking-wider block mb-2 border-b border-[#FFB283]/30 pb-2">Experience</span>
              <Link href="/psychotherapy/person-centered" className="block text-[#5A4A42] hover:text-[#E69796] transition-colors py-1">個人中心</Link>
              <Link href="/psychotherapy/gestalt-therapy" className="block text-[#5A4A42] hover:text-[#E69796] transition-colors py-1">完形治療</Link>
            </div>
            {/* Column 4 */}
            <div className="space-y-4">
              <span className="font-bold text-[#FFCA8C] uppercase tracking-wider block mb-2 border-b border-[#FFCA8C]/30 pb-2">Cognition</span>
              <Link href="/psychotherapy/cbt" className="block text-[#5A4A42] hover:text-[#E69796] transition-colors py-1">認知行為</Link>
            </div>
            {/* Column 5 */}
            <div className="space-y-4">
              <span className="font-bold text-[#5A4A42] uppercase tracking-wider block mb-2 border-b border-[#5A4A42]/30 pb-2">Context</span>
              <Link href="/psychotherapy/feminist" className="block text-[#5A4A42] hover:text-[#E69796] transition-colors py-1">女性主義</Link>
              <Link href="/psychotherapy/postmodern" className="block text-[#5A4A42] hover:text-[#E69796] transition-colors py-1">後現代取向</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AUTHOR SIGNATURE ================= */}
      <AuthorSignature />

    </main>
  );
}