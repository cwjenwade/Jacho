'use client';

import React from 'react';
import Image from 'next/image';
import AuthorSignature from '@/components/AuthorSignature';
import { 
  Heart, 
  Activity, 
  Users, 
  Zap, 
  Quote,
  Leaf
} from 'lucide-react';

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] font-sans text-[#5E5448] selection:bg-[#E47C57] selection:text-white overflow-x-hidden">
      
      {/* ================= HERO: The Sad Young Man (sm01) ================= */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* 背景有機色塊 */}
        <div className="absolute top-0 right-0 w-[60%] h-[90%] bg-[#DEECDA] rounded-bl-[300px] -z-20 opacity-50"></div>
        <div className="absolute top-20 left-[-10%] w-[400px] h-[400px] bg-[#F1E4A0] rounded-full -z-10 mix-blend-multiply opacity-60"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/2 z-10 pt-12">
            <div className="inline-block px-4 py-1.5 border border-[#5E5448] rounded-full mb-8 bg-white/80 backdrop-blur-sm">
              <span className="text-xs font-bold tracking-[0.2em] text-[#5E5448] uppercase">
                Men&apos;s Encounter Group Project
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-[#5E5448] leading-[1.1] mb-10">
              陽剛盔甲下的<br />
              <span className="text-[#E47C57] italic">悲傷年輕人</span>
            </h1>
            
            <div className="prose text-[#8C857B] text-lg font-light leading-loose">
              <p>
                <strong className="text-[#5E5448]">Gay 是一個經常被貼上悲傷標籤的詞。</strong> 社會長期把同志的人生預設成一條結局有限的路線：關係難以持久、沒有家庭位置、容易被否定。在這樣的敘事裡，憂鬱像是背景音樂，反覆跟隨著年輕的同志男性。
              </p>
              <p className="mt-6">
                「Good as You」（也常被寫成 G.A.Y.）是一個刻意的命名行動，用來對抗這種將男同志固定成「悲傷年輕人」的再現傳統。這個計畫拒絕把多愁、孤獨、走向失落，當成理所當然的生命輪廓。
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            {/* sm01: 人物輪廓與結構張力 */}
            <div className="relative z-10 p-6 bg-white shadow-[20px_20px_0px_0px_#EDA89D] border-4 border-white">
              <Image 
                src="/Photos/sm01.png" 
                alt="人物輪廓被外在結構牽引" 
                width={400} 
                height={300}
                className="w-full h-auto grayscale-[10%] contrast-[1.05]"
              />
              <div className="mt-6 border-t border-[#EBE8E4] pt-4 flex justify-between items-end">
                <div>
                  <p className="text-xs text-[#E47C57] font-bold tracking-widest uppercase mb-1">
                    Tension between Body & Structure
                  </p>
                  <p className="text-sm text-[#5E5448]">人物輪廓被外在結構牽引</p>
                </div>
                <span className="text-[#8C857B] text-xs font-serif italic">Fig. 01</span>
              </div>
            </div>
            {/* 裝飾圓點 */}
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#F2BC9C] rounded-full mix-blend-multiply opacity-40 z-0"></div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 1: 失序狀態 (Statistics) (sm09) ================= */}
      <section className="py-32 px-6 relative bg-white border-t border-[#EBE8E4]">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-16 mb-20 items-end">
            <div className="lg:w-7/12">
              <h2 className="font-serif text-4xl text-[#5E5448] mb-6 flex items-center gap-3">
                <Activity size={32} className="text-[#E47C57]"/>
                失序狀態 Structure Unstable
              </h2>
              <p className="text-[#8C857B] text-lg font-light leading-loose">
                如果把數字放回到生活裡，問題不只是「誰的風險比較高」，而是這些風險如何在日常中被一層一層製造出來。性少數在憂鬱、焦慮、自殺意念與企圖，以及物質使用上，確實承擔了更高的負擔。
              </p>
            </div>
            <div className="lg:w-5/12 relative">
               {/* sm09: 碎片漂移 */}
               <div className="bg-[#FAF9F6] p-3 rounded-tr-[3rem] rounded-bl-[3rem] border border-[#DEECDA]">
                 <Image src="/Photos/sm09.png" alt="失序狀態" width={300} height={200} className="w-full h-auto rounded-xl mix-blend-multiply opacity-90"/>
                 <p className="text-right text-xs text-[#8C857B] mt-2 mr-2">方形碎片隨線條漂移，結構尚未穩定</p>
               </div>
            </div>
          </div>

          {/* 統計卡片 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Depression */}
            <div className="bg-[#FAF9F6] p-10 border-l-8 border-[#DEECDA] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#5E5448] mb-4">更憂鬱</h3>
              <p className="text-[#8C857B] font-light leading-relaxed">
                性少數族群比異性戀更常經驗到憂鬱狀態。這不只是短期情緒低落，而是反覆出現、容易累積的情緒負擔。部分研究也顯示，男性性少數在親密關係脈絡中，出現雙極性情感疾患相關症狀的比例較高。
              </p>
            </div>

            {/* Card 2: Suicide */}
            <div className="bg-[#FAF9F6] p-10 border-l-8 border-[#F1E4A0] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#5E5448] mb-4">更想自殺</h3>
              <p className="text-[#8C857B] font-light leading-relaxed">
                在自殺意念與企圖方面，性少數族群終其一生懷有自殺意圖的比例偏高。以丹麥為例，男性同性伴侶在法律上登記關係後，其自殺風險仍明顯高於異性婚姻關係，顯示即使制度改變，生活壓力未減。
              </p>
            </div>

            {/* Card 3: Anxiety */}
            <div className="bg-[#FAF9F6] p-10 border-l-8 border-[#F2BC9C] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#5E5448] mb-4">更焦慮</h3>
              <p className="text-[#8C857B] font-light leading-relaxed">
                性少數男性相較於異性戀男性，較容易出現各類焦慮症狀，包括恐慌症。這些焦慮經驗往往不是單一事件觸發，而是長期處在高度警覺、預期被拒的生活狀態中逐漸形成。
              </p>
            </div>

            {/* Card 4: Substance */}
            <div className="bg-[#FAF9F6] p-10 border-l-8 border-[#E47C57] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#5E5448] mb-4">物質使用滿足孤獨</h3>
              <p className="text-[#8C857B] font-light leading-relaxed">
                一些性少數青少年因尋找認同進入新社交場域，卻暴露在更高風險中。無保護性交、藥物使用往往不是單純的「選擇偏差」，而是與孤立感、連結需求與場域結構緊密連動。
              </p>
            </div>
          </div>

          <div className="mt-16 bg-[#5E5448] p-10 rounded-[2rem] text-[#FAF9F6] relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <h4 className="font-serif text-2xl text-[#EDA89D] mb-4">少數壓力的日常滲入</h4>
              <p className="font-light leading-loose text-lg opacity-90">
                污名、排斥、被拒絕的預期、必須隱藏的生活方式，以及內化後的自我貶抑，並不是偶發事件，而是透過日常互動反覆累積，慢慢滲進身體與心理。那些被看見的統計差距，其實指向的是生活環境的重量，而不是性傾向本身。
              </p>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#E47C57] rounded-full blur-3xl opacity-50"></div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2: 羞恥的運作 (The Mechanism) (sm05, sm03) ================= */}
      <section className="py-32 px-6 relative bg-[#FAF9F6]">
        {/* 背景裝飾 */}
        <div className="absolute top-0 left-0 w-[40%] h-full bg-[#E47C57] opacity-5 -z-10"></div>
        <div className="absolute bottom-20 right-[-10%] w-[500px] h-[500px] bg-[#F2BC9C] rounded-full blur-3xl opacity-20 -z-10"></div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-serif text-4xl text-[#5E5448] mb-6">當人長期承受壓力時，<br/>身體與情緒到底經驗到了什麼？</h2>
            <div className="w-24 h-1 bg-[#EDA89D] mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* 左側：羞恥理論 */}
            <div className="lg:w-1/2 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-[#5E5448] mb-4 flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#E47C57]"></span>
                  羞恥的運作經驗
                </h3>
                <p className="text-[#8C857B] font-light leading-loose text-lg">
                  羞恥並不是因為「做錯事」才出現，而是在一個人投入、期待連結、渴望被回應的時刻，情感突然被打斷、被拒絕或被否定時，快速被點燃。這是一種發生在關係中的情緒，而不是道德判斷。
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#5E5448] mb-4 flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#F2BC9C]"></span>
                  從情緒到防衛
                </h3>
                <p className="text-[#8C857B] font-light leading-loose text-lg">
                  情緒需要的不是發洩，而是完成。當情感被承接、被理解，反應序列才能走完，身體才有機會回到穩定。如果沒有這個歷程，情緒會被卡住，轉而變成防衛。
                </p>
              </div>

              <div className="bg-white p-8 border-l-4 border-[#EDA89D] shadow-sm">
                <p className="text-[#5E5448] font-medium leading-relaxed">
                  當「投入就被中斷」的經驗反覆發生，這些高密度的片段會被記住，逐漸形成對世界的<strong>預期模式</strong>。人開始提前收縮、提前退後，用防衛來避免再次受傷。
                </p>
              </div>
            </div>

            {/* 右側：視覺意象 */}
            <div className="lg:w-1/2 flex flex-col gap-10">
               {/* sm05: 內縮防衛 */}
               <div className="relative group">
                 <div className="absolute inset-0 bg-[#F2BC9C] rounded-[2rem] transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
                 <div className="bg-white p-2 rounded-[2rem] border border-[#5E5448]/10">
                   <Image src="/Photos/sm05.png" alt="內縮防衛" width={200} height={150} className="w-full h-auto rounded-[1.5rem]"/>
                 </div>
                 <div className="flex justify-between mt-3 px-4">
                   <span className="text-[#E47C57] font-bold text-sm tracking-widest uppercase">Defense Mechanism</span>
                   <span className="text-[#8C857B] text-sm">內縮防衛 / 防衛模式</span>
                 </div>
               </div>

               {/* sm03: 關係邊界 */}
               <div className="relative w-[80%] self-end group">
                 <div className="absolute inset-0 bg-[#DEECDA] rounded-[2rem] transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
                 <div className="bg-white p-2 rounded-[2rem] border border-[#5E5448]/10">
                   <Image src="/Photos/sm03.png" alt="關係框定" width={200} height={150} className="w-full h-auto rounded-[1.5rem]"/>
                 </div>
                 <div className="flex justify-between mt-3 px-4">
                   <span className="text-[#8C857B] text-sm">關係邊界 / 關係框定</span>
                   <span className="text-[#79976B] font-bold text-sm tracking-widest uppercase">Boundary</span>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: 整合歷程 (The Process) ================= */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[#E47C57] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">The Process</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#5E5448]">從分裂走向整合</h2>
          </div>

          <div className="space-y-32">
            
            {/* Stage 1: 共情與啟迪 (sm04, sm06) */}
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2 relative">
                <div className="grid grid-cols-2 gap-4">
                  <Image src="/Photos/sm04.png" alt="共情流動" width={200} height={150} className="w-full h-auto rounded-tl-[3rem] rounded-br-[3rem] bg-[#FAF9F6]"/>
                  <Image src="/Photos/sm06.png" alt="啟迪萌芽" width={200} height={150} className="w-full h-auto rounded-tr-[3rem] rounded-bl-[3rem] bg-[#FAF9F6] mt-12"/>
                </div>
                {/* 裝飾線條 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-[#DEECDA] rounded-full z-10"></div>
              </div>
              <div className="md:w-1/2 space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-[#5E5448] mb-4 flex items-center gap-3">
                    <Heart className="text-[#DEECDA] fill-[#DEECDA]"/> 共情流動 Empathize
                  </h3>
                  <p className="text-[#8C857B] leading-loose">
                    在團體中，最先被打破的是「只有我是這樣」的孤立感。你的痛苦不再被看成個人的失敗，而是被理解為一種共享的人類經驗。我們練習的不是單向聆聽，而是彼此承接。
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#5E5448] mb-4 flex items-center gap-3">
                    <Zap className="text-[#F1E4A0] fill-[#F1E4A0]"/> 啟迪萌芽 Enlighten
                  </h3>
                  <p className="text-[#8C857B] leading-loose">
                    個人的掙扎被放回生活與社會脈絡中理解。內化的羞恥有其來源，並不是你需要獨自承擔的責任。理解本身，就是鬆動羞恥的重要一步。
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 2: 賦能與會心 (sm08, sm07) */}
            <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
              <div className="md:w-1/2 relative">
                <div className="grid grid-cols-2 gap-4">
                  <Image src="/Photos/sm08.png" alt="賦能生長" width={200} height={150} className="w-full h-auto rounded-tr-[3rem] rounded-bl-[3rem] bg-[#FAF9F6]"/>
                  <Image src="/Photos/sm07.png" alt="會心連結" width={200} height={150} className="w-full h-auto rounded-tl-[3rem] rounded-br-[3rem] bg-[#FAF9F6] mt-12"/>
                </div>
                {/* 裝飾線條 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-[#F2BC9C] rounded-full z-10"></div>
              </div>
              <div className="md:w-1/2 space-y-12 text-right md:text-left">
                <div>
                  <h3 className="text-2xl font-bold text-[#5E5448] mb-4 flex items-center gap-3 md:flex-row-reverse">
                    <Leaf className="text-[#F2BC9C] fill-[#F2BC9C]"/> 賦能生長 Empower
                  </h3>
                  <p className="text-[#8C857B] leading-loose">
                    力量被重新定義。它不是壓住情緒，而是重新拿回為自己命名與選擇生活方式的權利。因應策略開始改變，生活不再只是被動承受。
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#5E5448] mb-4 flex items-center gap-3 md:flex-row-reverse">
                    <Users className="text-[#EDA89D] fill-[#EDA89D]"/> 會心連結 Encounter
                  </h3>
                  <p className="text-[#8C857B] leading-loose">
                    這是最關鍵的實踐。在當下的互動裡，練習冒險展露真實自己。當脆弱被接住，防衛自然失去必要，連結重新發生。
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 4: 團體支持與成效 (Outcomes) (sm02, sm11, sm10, sm12) ================= */}
      <section className="py-32 px-6 bg-[#FAF9F6] relative overflow-hidden">
        {/* 背景色塊 */}
        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-[#E47C57] -z-20 opacity-10"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#F2BC9C] rounded-full blur-3xl opacity-30 -z-10"></div>

        <div className="max-w-7xl mx-auto">
          
          {/* 團體介入力量 */}
          <div className="flex flex-col lg:flex-row gap-16 mb-24 items-center">
            <div className="lg:w-5/12 relative">
               {/* sm02: 主圖 - 團體支持 */}
               <div className="relative z-10 shadow-2xl rounded-full overflow-hidden border-[8px] border-white aspect-square">
                 <Image src="/Photos/sm02.png" alt="團體支持空間" fill className="object-cover"/>
               </div>
               {/* sm11: 小圖 - 共同承接 */}
               <div className="absolute -bottom-6 -right-6 w-1/2 z-20 shadow-xl rounded-full overflow-hidden border-[6px] border-[#FAF9F6] aspect-square">
                 <Image src="/Photos/sm11.png" alt="共同承接" fill className="object-cover"/>
               </div>
            </div>
            
            <div className="lg:w-7/12">
              <h2 className="font-serif text-3xl text-[#5E5448] mb-6">團體諮商的介入力量</h2>
              <div className="prose text-[#8C857B] text-lg font-light leading-loose">
                <p>
                  在本計畫中，<strong>會心團體</strong>提供一個可停留的空間。成員能在其中分享彼此差異甚大的生命經驗，也能在對話中逐步看見自己並不孤單。
                </p>
                <p>
                  人與人之間的真誠連結，正是許多性少數男性在成長過程中最缺乏的經驗。團體讓情感有了流動的可能，也讓身份逐漸找到可安放的位置。
                </p>
              </div>
            </div>
          </div>

          {/* 心智轉變指標 */}
          <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-[#EBE8E4]">
             <div className="text-center mb-16">
               <h3 className="font-serif text-3xl text-[#5E5448]">我們致力於達成的心智轉變</h3>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               
               {/* Outcome A: Alexithymia - sm10 */}
               <div className="flex flex-col items-center text-center group">
                 <div className="w-full max-w-[280px] mb-8 relative">
                   <div className="absolute inset-0 bg-[#DEECDA] rounded-t-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10 translate-y-4"></div>
                   <Image src="/Photos/sm10.png" alt="心理容器" width={280} height={200} className="w-full h-auto rounded-2xl border-2 border-[#DEECDA]"/>
                 </div>
                 <h4 className="text-xl font-bold text-[#5E5448] mb-4">述情與真實</h4>
                 <p className="text-[#8C857B] leading-relaxed">
                   長期壓抑會讓人失去辨識情緒的能力。團體協助成員重新連結身體感受，慢慢找回「說出我感覺」的語言，讓心理有一個能承載經驗的容器。
                 </p>
               </div>

               {/* Outcome B: Authenticity - sm12 */}
               <div className="flex flex-col items-center text-center group">
                 <div className="w-full max-w-[280px] mb-8 relative">
                   <div className="absolute inset-0 bg-[#E47C57] rounded-t-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 translate-y-4"></div>
                   <Image src="/Photos/sm12.png" alt="經驗擴展" width={280} height={200} className="w-full h-auto rounded-2xl border-2 border-[#E47C57]"/>
                 </div>
                 <h4 className="text-xl font-bold text-[#5E5448] mb-4">從防衛到真實</h4>
                 <p className="text-[#8C857B] leading-relaxed">
                   對拒絕的災難化想像逐步降低。成員開始經驗到，即使不再偽裝，關係也不一定會斷裂，安全感因此得以累積。
                 </p>
               </div>

             </div>
          </div>

        </div>
      </section>

      {/* ================= AUTHOR SIGNATURE ================= */}
      <section className="py-12 bg-[#FAF9F6] text-center border-t border-[#E47C57]/30">
        <p className="text-sm text-[#5E5448]">
          本文由任祈蔚 Wade Jen 諮商心理師撰寫
        </p>
      </section>

      <AuthorSignature />

      {/* ================= Footer ================= */}
      <footer className="bg-[#5E5448] py-24 text-center text-[#D6CFC7] relative">
        <div className="max-w-3xl mx-auto px-6">
          <Quote size={48} className="text-[#EDA89D] mx-auto mb-8 opacity-80"/>
          <h2 className="font-serif text-3xl md:text-4xl text-[#FAF9F6] mb-8 leading-tight">
            性少數男性會心團體計畫
          </h2>
          <p className="font-light text-xl opacity-80 leading-loose mb-12">
            一個關於愛、接納與真實存在的空間。<br />
            <span className="text-sm tracking-widest mt-2 block font-sans">A space for love, acceptance, and authentic being.</span>
          </p>
          <div className="w-12 h-1 bg-[#E47C57] mx-auto mb-12"></div>
          <div className="text-xs opacity-40 font-mono tracking-widest">
            &copy; 2025 Men&apos;s Encounter Group Project. All Rights Reserved.
          </div>
        </div>
      </footer>

    </main>
  );
}