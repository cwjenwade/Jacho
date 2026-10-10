import React from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Trophy, 
  Wind, 
  Smile, 
  Car, 
  Target, 
  BrainCircuit,
  HeartHandshake,
  HelpCircle
} from './lucide-fallback';

// 引入同一層目錄的圖片 (根據您的截圖路徑)
// 請確保檔名大小寫與空格完全一致
import rt1Image from './RT1.jpg';
import rt2Image from './RT2.png';
import rt3Image from './RT3 needs chair.png';
import rt4Image from './RT4 total behavior.png';

export default function RealityTherapyPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#5A5A5A] font-sans selection:bg-[#CCD5AE] selection:text-[#3A4A3A]">
      
      {/* --- Hero Section: 頁面主視覺 --- */}
      <header className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#E9EFE9] to-[#FDFCF8]">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#FAEDCD] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-[20%] left-[-10%] w-72 h-72 bg-[#D4E2D4] rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A4AC86] bg-opacity-20 text-[#6B705C] text-sm font-medium mb-6 border border-[#A4AC86]/30">
            <BrainCircuit size={16} />
            <span>心理治療學派專題</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#414833] tracking-tight mb-6">
            抉擇理論與現實治療
          </h1>
          <h2 className="text-xl md:text-2xl text-[#7F8C6B] font-light mb-8">
            幫助你重新掌握生活的方向
          </h2>
          <div className="p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-[#E0E5DF] shadow-sm">
            <p className="text-lg leading-relaxed text-[#5F6F5F]">
              每一個人都渴望更好的關係、更穩定的情緒與更自在的生活。而人在任何情境中都擁有選擇，我們的行為是為了滿足內在需求。現實治療則協助人們覺察自己的選擇，並採取更有效的行動。
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-24">

        {/* --- Founders: 創始人與重要人物 --- */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Card: William Glasser */}
          <div className="group bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#F2F2F2] hover:border-[#CCD5AE] transition-all duration-300">
            <div className="relative w-full h-72 mb-6 overflow-hidden rounded-2xl bg-[#E9EFE9]">
              <Image 
                src={rt1Image} 
                alt="William Glasser" 
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#414833] mb-3 flex items-center gap-2">
              William Glasser
            </h3>
            <p className="text-[#6B705C] leading-relaxed">
              William Glasser 為美國精神科醫師與現實治療創始者，主張行為源自個體為滿足基本需求而做出的選擇，並以優質世界與總合行為解釋行動的內在動力。
            </p>
          </div>

          {/* Card: Robert E. Wubbolding */}
          <div className="group bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#F2F2F2] hover:border-[#CCD5AE] transition-all duration-300">
            <div className="relative w-full h-72 mb-6 overflow-hidden rounded-2xl bg-[#FAEDCD]">
              <Image 
                src={rt2Image} 
                alt="Robert E. Wubbolding" 
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#414833] mb-3 flex items-center gap-2">
              Robert E. Wubbolding
            </h3>
            <p className="text-[#6B705C] leading-relaxed">
              Robert E. Wubbolding 為其重要門徒，致力將現實治療具體化，發展 WDEP 系統，使治療流程更結構化與可操作。
            </p>
          </div>
        </section>

        {/* --- 5 Basic Needs: 五大需求 --- */}
        <section className="relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#414833] mb-4">現實治療的人類五大需求</h2>
            <div className="w-16 h-1 bg-[#D4A373] mx-auto rounded-full mb-4"></div>
            <p className="text-[#7F8C6B]">所有的行為都是為了這些需求</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* 左側：圖片 */}
            <div className="lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-[#CCD5AE] rounded-3xl rotate-3 opacity-20 transition-transform group-hover:rotate-6"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-sm border border-[#E9EFE9]">
                <Image 
                  src={rt3Image}
                  alt="Needs Chair"
                  className="w-full h-auto rounded-2xl"
                  placeholder="blur" 
                />
              </div>
            </div>

            {/* 右側：列表 */}
            <div className="lg:w-1/2 space-y-4">
              <NeedCard 
                icon={<ShieldCheck className="text-[#8FBC8F]" />} 
                title="生存 (Survival)" 
                desc="安全、健康與生活必需的維持，包含身體的穩定感。"
                color="bg-[#E9EFE9]"
              />
              <NeedCard 
                icon={<HeartHandshake className="text-[#D4A373]" />} 
                title="愛與隸屬 (Belonging)" 
                desc="與人連結、被接納與在關係中感到重要，是最核心的心理需求。"
                color="bg-[#FAEDCD]"
              />
              <NeedCard 
                icon={<Trophy className="text-[#A4AC86]" />} 
                title="權力 (Power)" 
                desc="自我肯定、被重視、感到有能力掌握生活並做出有效行動。"
                color="bg-[#E9EFE9]"
              />
              <NeedCard 
                icon={<Wind className="text-[#8FB3BC]" />} 
                title="自由 (Freedom)" 
                desc="自主決定的空間，按照自己的意願生活，而非被外在控制。"
                color="bg-[#E0E5DF]"
              />
              <NeedCard 
                icon={<Smile className="text-[#E8D595]" />} 
                title="樂趣 (Fun)" 
                desc="愉快、學習與創意所帶來的滿足，是維持心靈活力的來源。"
                color="bg-[#FEFAE0]"
              />
            </div>
          </div>
        </section>

        {/* --- Total Behavior: 總合行為 --- */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-[#F0F2EF]">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="inline-flex items-center gap-2 text-[#D4A373] font-bold tracking-wider uppercase text-sm mb-3">
                <Car size={18} />
                <span>Total Behavior Concept</span>
              </div>
              <h2 className="text-3xl font-bold text-[#414833] mb-6">總合行為</h2>
              
              <div className="space-y-6 text-[#5F6F5F] leading-loose">
                <p>
                  每一個人的行為，其實同時包含四個部分。
                </p>
                <div className="bg-[#FEFAE0]/50 p-5 rounded-xl border-l-4 border-[#D4A373]">
                  <p className="font-medium text-[#8C7A56] mb-2">需求是引擎，驅動了行為</p>
                  <p>
                    可以把它想成「前輪」和「後輪」一起運作的模式。<br/>
                    <strong>前輪</strong>是我們能直接控制的部分，包括行動和想法。<br/>
                    <strong>後輪</strong>則是我們無法直接控制、但會被前輪帶動的部分，也就是情緒和生理反應。
                  </p>
                </div>
                <p>
                  當我們調整自己的行動或想法時，情緒與身體的感受也會跟著改變。因此，如果想讓情緒變得比較穩定或舒適，第一步往往是改變此刻正在做的事情或正在前往的思考方向。
                </p>
              </div>
            </div>

            <div className="md:w-1/2 order-1 md:order-2">
               <Image 
                  src={rt4Image}
                  alt="Total Behavior Car"
                  className="w-full h-auto rounded-2xl shadow-lg transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
               />
               <p className="text-center text-[#8A9A8A] text-sm mt-4 italic">
                  這台車要載著我們前往優質世界囉！
               </p>
            </div>
          </div>
        </section>

        {/* --- Quality World: 優質世界 --- */}
        <section className="bg-[#6B705C] rounded-[2rem] p-10 md:p-16 text-[#FDFCF8] relative overflow-hidden">
          {/* 背景裝飾 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A4AC86] rounded-full mix-blend-overlay filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
             <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center justify-center gap-3">
               <Target className="text-[#FEFAE0]" />
               優質世界 Quality World
             </h2>
             <p className="text-xl font-light leading-relaxed mb-8 opacity-90">
               優質世界指的是每個人心中最重要的內在圖像。
             </p>
             <div className="grid md:grid-cols-2 gap-8 text-left">
               <div className="bg-[#FDFCF8]/10 p-6 rounded-2xl backdrop-blur-sm">
                 <p className="leading-relaxed">
                   這些圖像包括你珍惜的人、重視的價值、喜愛的活動、理想的生活方式，以及你對自己的期待。它們不是外界強加，而是你主動選擇、放進心中的事物。
                 </p>
               </div>
               <div className="bg-[#FDFCF8]/10 p-6 rounded-2xl backdrop-blur-sm">
                 <p className="leading-relaxed">
                   我們的行為往往是在接近這些內在圖像，真正的滿足感也來自於它們是否被實現，而不是外在情況本身。如果生活中的行為與心中的圖像越來越遠，就容易感到挫折、疲憊或失去方向。
                 </p>
               </div>
             </div>
             <div className="mt-8 p-4 bg-[#D4A373] text-[#FDFCF8] font-medium rounded-xl inline-block">
               認識自己的優質世界，是重新調整步伐、打造符合期待生活的重要開始。
             </div>
          </div>
        </section>

        {/* --- WDEP System: WDEP 系統 --- */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#414833] mb-4">WDEP 系統｜現實治療的核心工具</h2>
            <p className="text-[#7F8C6B] max-w-2xl mx-auto">
              WDEP 是現實治療的操作方法，由 Wubbolding 發展，是最常用也最清楚的實務架構。WDEP 協助人們把模糊的不滿轉為清楚的行動。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* W */}
            <WDEPCard 
              letter="W" 
              title="Wants" 
              subtitle="我想要什麼" 
              color="bg-[#FEFAE0]" 
              textColor="text-[#8C7A56]"
              content={
                <ul className="list-disc list-inside space-y-2 text-sm opacity-90">
                  <li>釐清目前的想望與需求。</li>
                  <li>確認內在圖像與優質世界的內容。</li>
                </ul>
              }
            />
            {/* D */}
            <WDEPCard 
              letter="D" 
              title="Direction" 
              subtitle="我正在做什麼" 
              color="bg-[#E9EFE9]" 
              textColor="text-[#5F6F5F]"
              content={
                <ul className="list-disc list-inside space-y-2 text-sm opacity-90">
                  <li>覺察現在的行動方向。</li>
                  <li>理解什麼行為正在被選擇。</li>
                </ul>
              }
            />
            {/* E */}
            <WDEPCard 
              letter="E" 
              title="Evaluation" 
              subtitle="這些行為有沒有用" 
              color="bg-[#D4E2D4]" 
              textColor="text-[#414833]"
              isHighlight
              content={
                <div className="space-y-3">
                  <p className="font-bold text-sm bg-white/50 p-2 rounded">
                    核心提問：「現在的行為是否讓我更靠近我想要的？」
                  </p>
                  <p className="text-sm font-medium">自我評估是 WDEP 的重心。</p>
                </div>
              }
            />
            {/* P */}
            <WDEPCard 
              letter="P" 
              title="Planning" 
              subtitle="我要採取什麼行動" 
              color="bg-[#FAEDCD]" 
              textColor="text-[#8C7A56]"
              content={
                <ul className="list-disc list-inside space-y-2 text-sm opacity-90">
                  <li>規劃可行具體的新行動。</li>
                  <li>採用簡單、可達成、可控制、具承諾感的方式。</li>
                </ul>
              }
            />
          </div>
        </section>

        {/* --- Process: 流程 --- */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-[#F0F2EF]">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-[#414833] mb-6 sticky top-8">
                現實治療的流程 <br/>
                <span className="text-lg font-normal text-[#8A9A8A]">Reality Therapy Process</span>
              </h2>
              <div className="bg-[#CCD5AE] bg-opacity-30 p-6 rounded-2xl sticky top-32">
                <p className="text-[#5F6F5F] font-bold text-lg mb-2">現實治療相信：</p>
                <p className="text-[#4A5D4E]">當行動改變，生活的軌道就會改變。</p>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="space-y-0 relative border-l-2 border-[#E9EFE9] ml-6">
                <ProcessStep number="一" title="建立支持且具挑戰性的關係" content="治療者提供穩定、安全且不批判的合作環境。" />
                <ProcessStep number="二" title="探索需求與優質世界" content="協助來談者釐清想要什麼、需求從何而來、圖像如何形成。" />
                <ProcessStep number="三" title="檢視總合行為" content="回答兩個核心問題：\n• 現在正在做什麼\n• 這些行為是否有效" />
                <ProcessStep number="四" title="自我評估" content="覺察行為的後果與方向是否一致。" />
                <ProcessStep number="五" title="制定行動計畫" content="採用簡單、可控、可達成的行動，以持續方式執行。" />
                <ProcessStep number="六" title="承諾與追蹤" content="穩定地執行計畫，必要時調整方向。" isLast />
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ: 常見問題 --- */}
        <section>
          <div className="flex items-center gap-3 mb-8 px-2">
            <HelpCircle className="text-[#D4A373] w-8 h-8" />
            <h2 className="text-3xl font-bold text-[#414833]">常見問題 FAQ</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FAQItem q="一、現實治療是否不談過去？" a="不是否定過去，而是認為改變發生在當下，因此重點放在現在能做什麼。" />
            <FAQItem q="二、現實治療是否不重視情緒？" a="情緒重要，但其改變來自行動與思考的改變，因此治療不以情緒本身為焦點。" />
            <FAQItem q="三、為何強調責任？" a="責任指的是「承擔自己行為的結果」，這是重新掌握生活的基礎。" />
            <FAQItem q="四、現實治療是否反對藥物？" a="Glasser 反對醫療化觀點；但後續發展者（如 Wubbolding）認為必要時可配合使用。" />
            <FAQItem q="五、現實治療與一般諮商有何不同？" a="其特色是聚焦當下、強調行動、以選擇與需求為核心。不著重症狀分析。" />
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="py-12 bg-[#F2F2F2] text-center text-[#8A9A8A] text-sm">
         <p>Designed for Reality Therapy Academic Index</p>
      </footer>
    </div>
  );
}

// --- 子元件 Components ---

// 1. 需求卡片
function NeedCard({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
  return (
    <div className={`flex items-start p-4 rounded-2xl ${color} bg-opacity-50 hover:bg-opacity-80 transition-all duration-300`}>
      <div className="bg-white p-2.5 rounded-full shadow-sm mr-4 mt-1 text-[#5F6F5F]">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-[#5F6F5F] mb-1">{title}</h3>
        <p className="text-[#6B705C] text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// 2. WDEP 卡片
interface WDEPCardProps {
  letter: string;
  title: string;
  subtitle: string;
  content: React.ReactNode;
  color: string;
  textColor: string;
  isHighlight?: boolean;
}

function WDEPCard({ letter, title, subtitle, content, color, textColor, isHighlight = false }: WDEPCardProps) {
  return (
    <div className={`${color} p-6 rounded-[1.5rem] flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 ${isHighlight ? 'ring-2 ring-[#8FBC8F] shadow-lg' : ''}`}>
      <div className={`text-5xl font-black ${textColor} opacity-20 mb-2`}>{letter}</div>
      <h3 className={`text-xl font-bold ${textColor}`}>{title}</h3>
      <div className={`text-sm font-semibold ${textColor} mb-4 opacity-80 uppercase tracking-widest`}>{subtitle}</div>
      <div className={`${textColor} mt-auto`}>
        {content}
      </div>
    </div>
  );
}

// 3. 流程步驟
interface ProcessStepProps {
  number: string;
  title: string;
  content: React.ReactNode;
  isLast?: boolean;
}

function ProcessStep({ number, title, content, isLast = false }: ProcessStepProps) {
  return (
    <div className={`relative pl-8 pb-10 ${isLast ? 'pb-0' : ''}`}>
      <div className="absolute left-[-21px] top-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#FAEDCD] border-4 border-[#FDFCF8] text-[#8C7A56] font-bold shadow-sm z-10">
        {number}
      </div>
      <h3 className="text-xl font-bold text-[#5F6F5F] mb-2">{title}</h3>
      <p className="text-[#6B705C] whitespace-pre-line leading-relaxed">{content}</p>
    </div>
  );
}

// 4. FAQ 項目
function FAQItem({ q, a }: { q: string, a: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-[#F0F2EF] hover:border-[#CCD5AE] hover:shadow-md transition-all">
      <h3 className="font-bold text-[#4A5D4E] text-lg mb-3">{q}</h3>
      <p className="text-[#6B705C] leading-relaxed">{a}</p>
    </div>
  );
}