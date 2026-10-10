'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { DICTIONARY } from '@/lib/dictionary';
import AuthorSignature from '@/components/AuthorSignature';
import { 
  HeartHandshake, 
  Sparkles, 
  RefreshCw, 
  Anchor, 
  Fingerprint, 
  ChevronDown, 
  ShieldCheck
} from 'lucide-react';

// Removed metadata export as this is a client component

// --- 在此處直接定義 QA 資料 (Hardcoded Data) ---
const LOCAL_QA_DATA = [
  {
    q: "在伴侶治療中，治療師會如何工作？",
    a: "我們每次卡住的點都一樣，治療師還會要我們再談一次嗎？治療師不會只是重複討論事件本身，而是協助你們在治療現場中覺察：當同樣的互動再度發生時，彼此是如何被拉進那個熟悉的循環。工作的重點放在當下，而非一再回顧過去。"
  },
  {
    q: "如果其中一方其實已經很累，甚至不確定還想不想繼續，治療還能進行嗎？",
    a: "治療師會將「疲累」視為一項重要的關係訊號，而不是治療無效的指標。治療並不要求雙方一開始就做出關係承諾，而是先去理解彼此目前困在什麼樣的互動模式中。"
  },
  {
    q: "治療時，會不會被要求說出自己其實還沒準備好的情緒或想法？",
    a: "治療師會持續調整治療的節奏，確保情緒經驗能在可承受的範圍內被觸及。情感的表達深度與速度，會根據每個人的狀態而調整，而不是由治療方法預設。"
  },
  {
    q: "如果我們真正卡住的是現實問題或價值觀差異，治療師會怎麼處理？",
    a: "治療師會聚焦於這些議題如何影響彼此的情感連結，而不是急於解決問題本身。治療的目的是讓討論能在更穩定、安全的關係狀態中進行。"
  },
  {
    q: "會不會變成其中一方一直被檢討或被要求改變？",
    a: "治療師的工作單位是關係中的「互動模式」，而非個別的個性或立場。如果治療過程偏向某一方，治療師會主動將視角拉回到雙方的互動結構。"
  },
  {
    q: "如果一方比較會表達，另一方比較退縮，治療師會怎麼處理？",
    a: "治療師會同時照顧不同位置的需求。表達較多的一方會被協助放慢、調整步調；而退縮的一方則會在不被逼迫的情況下，逐漸建立起自己的表達空間。"
  },
  {
    q: "治療會不會讓衝突一開始反而更嚴重？",
    a: "治療師會以穩定互動為優先目標。如果衝突強度升高，會被視為需要立即調整介入方式的訊號，而非治療必經的過程。"
  },
  {
    q: "如果我們已經嘗試過很多方法，治療師還能做什麼不一樣的事？",
    a: "治療師不會重複既有的說服、協調或解決問題的策略，而是協助你們看見：這些努力是如何被既有的互動模式所抵銷。治療的切入點是互動的組織方式。"
  },
  {
    q: "治療的目標一定是讓關係變得更親密嗎？",
    a: "治療師關注的是關係在情緒層面是否變得更安全、更清晰。親密感會隨著互動的穩定自然產生，而不是被設定為必須達成的目標。"
  },
  {
    q: "如果最後我們發現無法繼續走下去，這段治療還有意義嗎？",
    a: "（資料待補）" // 您提供的文本此題無回答，暫時留空
  }
];

export default function CoupleTherapyPage() {
  // FAQ Accordion State
  const [openQA, setOpenQA] = useState<number | null>(null);
  
  const toggleQA = (index: number) => {
    setOpenQA(prev => prev === index ? null : index);
  };

  const { language } = useLanguage();
  
  // 安全地獲取 Dictionary 資料，若無則使用預設值
  const content = (DICTIONARY[language] as Record<string, unknown>)?.couple as Record<string, unknown>;

  // 使用我們剛剛定義的 LOCAL_QA_DATA
  const QA_LIST = LOCAL_QA_DATA;

  return (
    <main className="min-h-screen bg-[#F9F8F6] font-sans selection:bg-[#EBD0C5] selection:text-[#5E4B45]">
      
      {/* --- Hero Section (Color Block 1: Soft Apricot/Blush) --- */}
      <section className="pt-36 pb-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#FFF5F2] to-[#F9F8F6]">
        {/* 背景裝飾：圓點與色塊 */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#EBD0C5] rounded-full blur-3xl opacity-40 -z-10"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-[#E4D5DA] rounded-full blur-3xl opacity-40 -z-10"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#AA7B81 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/60 rounded-full mb-8 backdrop-blur-sm border border-[#EBD0C5] shadow-sm">
              <HeartHandshake size={16} className="text-[#AA7B81]" />
              <span className="text-xs font-bold tracking-widest text-[#7E7185] uppercase">
                {(content?.title as string) ?? 'Couple Therapy'}
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl text-[#5E4B45] leading-[1.3] mb-8 font-medium">
              {((content?.hero as Record<string, unknown>)?.heading as string[])?.[0] ?? '依附關係 × 情緒互動'}<br />
              <span className="text-[#AA7B81] text-3xl md:text-5xl mt-3 block">
                {((content?.hero as Record<string, unknown>)?.heading as string[])?.[1] ?? '伴侶治療的第一步'}
              </span>
            </h1>

            <p className="text-[#7E7185] text-lg font-light leading-loose mb-10">
              {((content?.hero as Record<string, unknown>)?.intro as string) ?? '我們每個人處理親密關係的方式，其實都跟「依附」有關。'}
            </p>
          </div>

          {/* Image c01: 兩人安靜對話，聚焦注視 */}
          <div className="relative">
            <div className="p-4 bg-white rounded-[2rem] shadow-xl border border-[#E4D5DA] rotate-1 hover:rotate-0 transition-transform duration-700">
              <img 
                src="/Photos/c01.png" 
                alt="兩人相對而坐進行安靜對話，畫面聚焦於彼此注視與關係建立的初始狀態"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 依附類型與互動 (Dual Cards) --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-[#5E4B45] mb-6">依附位置不是好或壞，<br/>而是我們保護自己的方式</h2>
            <p className="text-[#7E7185] font-light leading-relaxed">
              只是在親密關係裡，兩個人帶著不同的方式靠近彼此，就可能出現互相誤解的模式。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* 1. 逃避型 - Image c07 (單人內省) */}
            <div className="bg-[#F2E3FA]/30 p-10 rounded-[2.5rem] border border-[#CCBFD1]/50 hover:shadow-lg transition-all duration-500">
              <div className="mb-8 overflow-hidden rounded-2xl border-4 border-white shadow-sm">
                <img 
                  src="/Photos/c07.png" 
                  alt="單一人物低頭坐於桌前，呈現內省或退回自身的狀態"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-serif text-2xl text-[#7E7185] mb-2">逃避型</h3>
              <p className="text-xs font-bold tracking-widest text-[#AA7B81] uppercase mb-6">The Withdrawer</p>
              
              <div className="space-y-4 text-[#5E4B45] leading-relaxed font-light text-justify">
                <p>
                  <strong className="text-[#7E7185] font-medium block mb-2">「我不是不在乎，只是不知道怎麼靠近」</strong>
                  有些人一遇到衝突，就會想暫停對話、拉開距離、先處理自己的情緒。他們可能看起來很冷靜，甚至顯得有點冷淡，好像不願意面對。
                </p>
                <p>
                  但其實，這是一種保護自己不被情緒淹沒的方式。透過保持距離，他們才能讓自己冷靜下來，回到可以運作的狀態。
                </p>
                <p className="pt-4 border-t border-[#CCBFD1] text-[#AA7B81] font-medium italic text-sm">
                  不是不在乎，而是他們習慣了靠「退」來維持穩定。
                </p>
              </div>
            </div>

            {/* 2. 焦慮型 - Image c02 (手勢表達) */}
            <div className="bg-[#EFD0D8]/30 p-10 rounded-[2.5rem] border border-[#EBD0C5] hover:shadow-lg transition-all duration-500">
              <div className="mb-8 overflow-hidden rounded-2xl border-4 border-white shadow-sm">
                <img 
                  src="/Photos/c02.png" 
                  alt="一方以手勢表達經驗，另一方傾聽，呈現語言流動中的互動"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-serif text-2xl text-[#AA7B81] mb-2">焦慮型</h3>
              <p className="text-xs font-bold tracking-widest text-[#D4D2D3] uppercase mb-6">The Pursuer</p>
              
              <div className="space-y-4 text-[#5E4B45] leading-relaxed font-light text-justify">
                <p>
                  <strong className="text-[#AA7B81] font-medium block mb-2">「我不是要控制你，我只是怕你不見」</strong>
                  也有些人對關係裡的冷淡特別敏感。只要對方沉默、語氣變了、慢一點回訊息，他們就會開始焦慮，忍不住想確認：「你是不是不愛我了？」「你是不是又在想逃？」
                </p>
                <p>
                  他們會提高互動強度，提出問題、要求對話、甚至表現出強烈的情緒。
                </p>
                <p className="pt-4 border-t border-[#EBD0C5] text-[#AA7B81] font-medium italic text-sm">
                  不是太黏，也不是情緒太多，而是他們靠「靠近」來確認關係還在。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 惡性循環 (Color Block 2: Dusty Pink/Mauve) --- */}
      <section className="py-24 bg-[#E4D5DA] relative overflow-hidden">
        {/* 背景點點 */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 bg-white/50 text-[#7E7185] text-xs tracking-widest font-bold rounded-md mb-4 border border-white/50">THE NEGATIVE CYCLE</div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#5E4B45] mb-6 leading-tight">
                我們不是彼此的敵人<br/>是被互動拉走了
              </h2>
              <div className="text-[#5E4B45]/90 leading-loose font-light">
                <p>
                  當這兩種依附反應相遇，會發生什麼事？<br/>
                  在伴侶關係中，逃避型的人越退，焦慮型的人就越追。<br/>
                  一個需要空間，一個需要連結。
                </p>
                <blockquote className="border-l-4 border-[#AA7B81] pl-6 italic text-[#7E7185] my-8 bg-white/40 py-4 rounded-r-lg">
                  一個覺得「你給我一點安靜好嗎」<br/>
                  一個覺得「你怎麼又不見了」
                </blockquote>
                <p>
                  這種互動不是誰對誰錯，而是兩個人都在用自己的方式努力保護關係。但當兩種策略碰在一起時，很容易讓彼此都感覺更孤單。當這樣的互動模式一再重複，我們就會進入一個「惡性循環」。
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-[#AA7B81]">
                  <li>一方越來越激動，另一方越來越抽離</li>
                  <li>情緒越來越高，理解越來越少</li>
                  <li>爭吵、指責、冷戰、沉默……變成熟悉的劇本</li>
                </ul>
              </div>
            </div>

            {/* Image c11: 交織的線條結節 */}
            <div className="order-1 lg:order-2">
              <div className="p-3 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
                <img 
                  src="/Photos/c11.png" 
                  alt="交織的線條在中央形成結節，象徵關係連結、情感糾纏"
                  className="w-full h-auto rounded-xl object-cover"
                />
                <p className="text-center text-xs text-[#7E7185] mt-3 font-serif italic">
                  糾纏的舞步：我們是如何卡住的？
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 冰山下的情緒 (Color Block 3: Muted Purple/Dark) --- */}
      <section className="py-24 px-6 bg-[#7E7185] text-[#F9F8F6]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image c12: 面具與杯子 */}
          <div className="relative">
             <div className="absolute top-4 left-4 w-full h-full border-2 border-[#AA7B81] rounded-xl -z-0"></div>
             <img 
                src="/Photos/c12.png" 
                alt="面具與杯子並置，指向表層角色與內在狀態的關係"
                className="w-full h-auto rounded-xl shadow-2xl relative z-10 bg-[#D4D2D3]"
             />
          </div>

          <div className="pl-0 md:pl-8">
            <h2 className="font-serif text-3xl md:text-5xl mb-6 text-[#EBD0C5]">憤怒是悲傷的保鑣</h2>
            <div className="w-16 h-[2px] bg-[#AA7B81] mb-8"></div>
            
            <div className="text-lg font-light leading-loose space-y-6 text-[#DFD3D7]">
              <p>
                表面的憤怒，掩蓋了底層的孤獨。<br/>
                當我們在關係中感到不安全時，直接展現脆弱是危險的。
              </p>
              <p>
                因此，我們往往穿上盔甲。那些尖銳的話語、冷漠的背影，其實都是為了保護心裡那個受傷的小孩。
              </p>
              <div className="bg-[#5E4B45]/40 p-6 rounded-xl border border-[#AA7B81]/30 mt-8 backdrop-blur-md">
                <p className="text-[#EBD0C5] font-medium mb-3 flex items-center gap-2">
                  <Fingerprint size={20} />
                  核心任務
                </p>
                <p className="text-sm md:text-base text-white/80">
                  從「互貼標籤」（你就是自私、你就是情緒化）<br className="hidden md:block"/>
                  轉向「情緒的解碼」（原來當我轉身離開時，你感覺到的是被拋棄）。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EFT 治療的三個階段 (Zig-Zag Layout) --- */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* 背景裝飾 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F2E3FA] rounded-full blur-3xl opacity-40 -z-10 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#EBD0C5] rounded-full blur-3xl opacity-40 -z-10 -translate-x-1/2"></div>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-[#5E4B45] mb-4">依附關係的修復地圖</h2>
            <p className="text-[#7E7185] font-light">EFT 治療歷程的三個階段</p>
          </div>

          <div className="space-y-24">
            
            {/* Stage 1: c09.png (Cups) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
               <div className="order-2 md:order-1 relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#D4D2D3] rounded-full opacity-50 -z-10"></div>
                  <img 
                    src="/Photos/c09.png" 
                    alt="兩個杯子相對而置，隱喻暫停中的對話" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
               </div>
               <div className="order-1 md:order-2">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-6xl font-serif text-[#E4D5DA] font-bold">01</span>
                    <h3 className="text-2xl font-bold text-[#5E4B45] flex items-center gap-2">
                      <RefreshCw size={24} className="text-[#AA7B81]" /> 停下傷害
                    </h3>
                  </div>
                  <p className="text-[#7E7185] leading-loose font-light">
                    (De-escalation)<br/>
                    先讓傷害停止：終止惡性循環。治療初期，協助伴侶一起看清楚：我們是怎麼被循環帶著走的？我們在哪個點開始失去選擇？治療不是判案糾錯，而是讓我們三人能看見模式。當互動的張力下降了，關係才有可能穩定下來。
                  </p>
               </div>
            </div>

            {/* Stage 2: c05.png (Close Gaze) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
               <div className="order-1 md:order-2 relative">
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#EBD0C5] rounded-full opacity-50 -z-10"></div>
                  <img 
                    src="/Photos/c05.png" 
                    alt="兩人近距離凝視彼此，強調情感共在" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
               </div>
               <div className="order-2 md:order-1 md:text-right">
                  <div className="flex items-baseline gap-4 mb-4 md:flex-row-reverse md:justify-start">
                    <span className="text-6xl font-serif text-[#EFD0D8] font-bold">02</span>
                    <h3 className="text-2xl font-bold text-[#5E4B45] flex items-center gap-2 md:flex-row-reverse">
                      <Anchor size={24} className="text-[#AA7B81]" /> 重建連結
                    </h3>
                  </div>
                  <p className="text-[#7E7185] leading-loose font-light">
                    (Restructuring)<br/>
                    靠近彼此的內在：修復依附連結。當我們能暫時離開循環，治療師會陪伴彼此慢慢觸碰那些不容易被說出來的情緒：「其實我很怕你不要我了」。當這些真實的需要能夠被接住，一種新的情感經驗就此產生。
                  </p>
               </div>
            </div>

            {/* Stage 3: c04.png (Handshake) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
               <div className="order-2 md:order-1 relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#AA7B81] rounded-full opacity-30 -z-10"></div>
                  <img 
                    src="/Photos/c04.png" 
                    alt="雙方握手而坐，畫面指向關係連結與信任" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
               </div>
               <div className="order-1 md:order-2">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-6xl font-serif text-[#DFD3D7] font-bold">03</span>
                    <h3 className="text-2xl font-bold text-[#5E4B45] flex items-center gap-2">
                      <Sparkles size={24} className="text-[#AA7B81]" /> 穩固與整合
                    </h3>
                  </div>
                  <p className="text-[#7E7185] leading-loose font-light">
                    (Consolidation)<br/>
                    當情感連結穩固後，我們才回頭處理生活中的實際衝突。這時你們不再是互鬥的敵人，而是能夠協商、互相支援的隊友。
                  </p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 結語 (Color Block 4: Warm Grey with c03.png) --- */}
      <section className="py-24 px-6 text-center bg-[#D4D2D3]/30">
        <div className="max-w-3xl mx-auto">
          <div className="w-full max-w-md mx-auto mb-10 overflow-hidden rounded-full border-8 border-white shadow-lg">
             <img 
               src="/Photos/c03.png" 
               alt="兩人對談被柔和線條圍繞，象徵受保護的空間" 
               className="w-full h-auto scale-110"
             />
          </div>
          
          <h2 className="font-serif text-2xl md:text-3xl text-[#5E4B45] mb-6 leading-relaxed font-medium">
            親密關係裡的衝突，不是不愛了，<br/>
            而是我們在用不一樣的方式喊「我需要你」。
          </h2>
          <p className="text-[#7E7185] text-lg font-light leading-loose mb-8">
            當我們能夠看見彼此的需要，能夠用有建設性的方式表達情感與親密，<br/>
            靠近不再那麼危險。連結，也會慢慢修復。
          </p>
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm text-[#AA7B81]">
             <ShieldCheck size={24} />
          </div>
        </div>
      </section>

      {/* --- Q&A Section --- */}
      <section className="py-24 px-6 max-w-4xl mx-auto bg-white rounded-3xl my-12 border border-[#EBD0C5]/50 shadow-sm">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl text-[#5E4B45] mb-4">常見問答</h2>
          <p className="text-[#AA7B81] text-sm tracking-widest uppercase">關於伴侶治療的十個提問</p>
        </div>

        <div className="space-y-4">
          {QA_LIST.map((qa, index) => {
            const isOpen = openQA === index;
            return (
              <div 
                key={index} 
                className={`
                  border rounded-xl transition-all duration-300 overflow-hidden
                  ${isOpen ? 'bg-[#F9F8F6] border-[#AA7B81]' : 'bg-white border-[#E4D5DA] hover:border-[#CCBFD1]'}
                `}
              >
                <button 
                  onClick={() => toggleQA(index)}
                  className="w-full flex items-start justify-between p-5 text-left"
                >
                  <span className={`font-medium pr-4 ${isOpen ? 'text-[#5E4B45]' : 'text-[#7E7185]'}`}>
                    <span className="inline-block w-6 text-[#AA7B81] font-serif mr-2">Q.</span>
                    {qa.q}
                  </span>
                  <span className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#AA7B81]' : 'text-[#D4D2D3]'}`}>
                    <ChevronDown size={20} />
                  </span>
                </button>
                
                <div 
                  className={`
                    transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="p-5 pt-0 pl-12 pr-8 text-[#7E7185] leading-relaxed font-light border-t border-dashed border-[#D4D2D3] mt-2">
                     {qa.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= AUTHOR SIGNATURE ================= */}
      <AuthorSignature />

      {/* --- Footer Area --- */}
      <footer className="bg-[#7E7185] py-12 text-center text-[#E4D5DA]">
        <p className="font-serif italic px-6">&ldquo;Love is a constant process of tuning in, connecting, missing and misreading cues, disconnecting, repairing, and finding deeper connection.&rdquo;</p>
        <p className="text-xs text-[#CCBFD1] mt-4 uppercase tracking-widest">— Dr. Sue Johnson</p>
      </footer>

    </main>
  );
}