'use client';

import React from 'react';
import AuthorSignature from '@/components/AuthorSignature';
import { 
  Users, 
  Clock, 
  Video, 
  Shield, 
  Sparkles,
  MessageCircle,
  BookOpen,
  HeartPulse,
  HandHeart,
  ArrowRight,
  ScanFace
} from 'lucide-react';

export default function GroupTherapyPage() {
  return (
    <main className="min-h-screen bg-[#F8F8EC] font-sans text-[#5E4B45] selection:bg-[#BAC680] selection:text-white overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      {/* 色塊拼接設計：左上米色，右下綠色切角 */}
      <section className="pt-32 pb-20 px-6 relative">
        {/* 背景裝飾：點點 */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#A3BFA7]/20 -z-10 rounded-bl-[100px]" 
             style={{ backgroundImage: 'radial-gradient(#79976B 2px, transparent 2px)', backgroundSize: '24px 24px', opacity: 0.3 }}>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-8 border border-[#A3BFA7] shadow-sm">
              <Users size={18} className="text-[#79976B]" />
              <span className="text-xs font-bold tracking-widest text-[#79976B] uppercase">Group Therapy</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-[#3A4A38] leading-[1.2] mb-8 font-medium">
              團體諮商與心理治療<br />
              <span className="text-[#79976B] mt-3 block text-3xl md:text-5xl">讓改變，在連結中發生</span>
            </h1>
            <div className="prose prose-lg leading-loose font-light text-[#5E4B45]">
              <p className="text-xl font-serif text-[#3A4A38] mb-6 leading-snug border-l-8 border-[#E2C351] pl-6">
                團體不只是「很多人在一起的心理治療」，<br/>它是一個具有生命力與互動歷程的場域。
              </p>
              <p className="mb-6">
                團體治療是一種專業心理治療的形式，由一位或多位具備資格的心理師帶領，與一群參與者共同工作。在這樣的治療空間中，參與者通常帶著相似的困擾或人生課題，彼此分享經驗、傾聽故事、表達情緒、探索內在，同時學習建立更健康的人際關係。
              </p>
              <div className="bg-white/60 p-6 rounded-xl border-l-4 border-[#79976B]">
                <p className="text-[#3A4A38] italic font-medium">
                 在這裡，你會發現自己在人群中的樣貌，也看見他人是如何感受、理解與回應你。
                </p>
              </div>
            </div>
          </div>

          {/* 圖片 g09: 多位成員圍坐成圈 (2048x2048) - 適合做為主視覺 */}
          <div className="relative">
            <div className="relative rounded-full overflow-hidden aspect-square border-8 border-white shadow-[20px_20px_0px_0px_#E2C351]">
               <img 
                 src="/Photos/g09.png" 
                 alt="多位成員圍坐成圈進行團體對話"
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
        </div>

        {/* 團體設置區塊 */}
        <div className="max-w-5xl mx-auto mt-24">
          <div className="bg-[#A3BFA7] rounded-[40px] p-10 flex flex-col md:flex-row items-center gap-10 shadow-lg relative overflow-hidden">
             {/* 圖片 g13: 圓桌準備狀態 (642x404) - 適合呈現設置 */}
             <div className="md:w-1/2 relative rounded-3xl overflow-hidden border-4 border-[#F8F8EC]">
                <img 
                  src="/Photos/g13.png" 
                  alt="圓桌與座椅圍繞擺放"
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="md:w-1/2 text-white">
                <h3 className="font-serif text-2xl mb-6 flex items-center gap-2">
                  <Sparkles size={24} className="text-[#FFF44F]"/>
                  團體設置
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#79976B] rounded-full"><Users size={20} className="text-[#FFFCCB]"/></div>
                    <div>
                      <span className="block text-lg font-bold">每團約 5-15 人</span>
                      <span className="text-sm text-[#F8F8EC]/80">小型團體約 4 人</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#79976B] rounded-full"><Clock size={20} className="text-[#FFFCCB]"/></div>
                    <div>
                      <span className="block text-lg font-bold">每次會談 1.5 - 2 小時</span>
                      <span className="text-sm text-[#F8F8EC]/80">一週一次或固定週期</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#79976B] rounded-full"><Video size={20} className="text-[#FFFCCB]"/></div>
                    <div>
                      <span className="block text-lg font-bold">形式多元</span>
                      <span className="text-sm text-[#F8F8EC]/80">面對面或線上進行</span>
                    </div>
                  </div>
                </div>
             </div>
             {/* 裝飾圓點 */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFF44F] rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </section>

      {/* ================= CORE FEATURES ================= */}
      {/* 背景：拼接色塊 - 上半米白，下半橄欖綠 */}
      <section className="py-24 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[#F8F8EC] -z-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#BAC680]/30 -z-20"></div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl text-[#3A4A38] mb-4">團體治療的主要特點</h2>
            <p className="text-[#79976B] font-bold">為什麼我們需要「在一起」接受治療？</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 特點列表 - 使用卡片式排版 */}
            <div className="grid grid-cols-1 gap-6">
              
              <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border-l-8 border-[#A3BFA7]">
                <div className="shrink-0 pt-1"><Shield size={32} className="text-[#A3BFA7]"/></div>
                <div>
                  <h3 className="text-lg font-bold text-[#3A4A38] mb-2">安全、真實的互動空間</h3>
                  <p className="text-sm leading-relaxed">在治療師的引導下，每位成員都可以表達真實感受，看見「我並不孤單」，彼此理解、支持與陪伴。</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border-l-8 border-[#E2C351]">
                <div className="shrink-0 pt-1"><Users size={32} className="text-[#E2C351]"/></div>
                <div>
                  <h3 className="text-lg font-bold text-[#3A4A38] mb-2">彼此學習與模仿的場域</h3>
                  <p className="text-sm leading-relaxed">在關係中學會自己是誰。看到別人怎麼表達需要，進而學習新的應對方式與溝通策略。</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border-l-8 border-[#79976B]">
                <div className="shrink-0 pt-1"><BookOpen size={32} className="text-[#79976B]"/></div>
                <div>
                  <h3 className="text-lg font-bold text-[#3A4A38] mb-2">多元議題與互補性</h3>
                  <p className="text-sm leading-relaxed">從焦慮、創傷到親密關係皆適用。許多人同時進行個別與團體治療，深化自我理解。</p>
                </div>
              </div>

            </div>

            {/* 圖片 g12: 多位成員圍坐，共享支持 (665x447) */}
            <div className="relative h-full flex items-center">
               <div className="relative w-full rounded-[3rem] overflow-hidden border-8 border-white shadow-xl">
                  <img 
                    src="/Photos/g12.png" 
                    alt="多位成員圍坐成圈，共享支持" 
                    className="w-full h-auto object-cover"
                  />
                  {/* 疊加色塊說明 */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#3A4A38]/90 p-6 backdrop-blur-sm text-white">
                    <p className="font-serif italic text-center">&ldquo;共享注意與支持性在場&rdquo;</p>
                  </div>
               </div>
               {/* 背景跳色裝飾塊 */}
               <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FFF44F] rounded-full -z-10"></div>
               <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#79976B] rounded-full -z-10 opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY IT WORKS ================= */}
      <section className="py-24 px-6 bg-[#79976B] text-[#F8F8EC] relative overflow-hidden">
        {/* 背景裝飾：點點 */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#FFFCCB 3px, transparent 3px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#FFFCCB] mb-8 font-medium">
              為什麼團體治療能帶來改變？
            </h2>
            <p className="text-lg leading-loose font-light max-w-3xl mx-auto text-[#F8F8EC]">
              研究與臨床經驗指出，團體治療不只是心理支持，更是一種深層的轉化歷程。它的影響來自<span className="text-[#FFF44F] font-bold px-2">關係中的真實接觸與互動經驗</span>。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* 左側文字區塊 */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-[#F8F8EC] text-[#5E4B45] p-8 rounded-3xl shadow-lg relative">
                 <h3 className="font-serif text-xl font-bold mb-6 text-[#79976B] flex items-center gap-2">
                   <Sparkles size={20}/> 改變的核心機制
                 </h3>
                 <ul className="space-y-4">
                  {[
                    "減少孤立感，感受到「我不是一個人」",
                    "在互動中學會新的關係模式與情緒表達方式",
                    "增進對自我的理解與覺察",
                    "同時來自多位成員的支持與回饋，看見不同觀點",
                    "提供一個安全的實驗場，勇敢嘗試過去不敢做的事情"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#A3BFA7] text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">{idx + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                 </ul>
                 {/* 黃色標籤裝飾 */}
                 <div className="absolute -top-3 -left-3 bg-[#E2C351] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Mechanisms</div>
              </div>

              {/* 現代人需求 */}
              <div className="bg-[#3A4A38] p-8 rounded-3xl border border-[#A3BFA7]">
                <h4 className="text-xl font-bold text-[#FFFCCB] mb-4">回應現代人的核心需求</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#F8F8EC]/80">
                  <p>• 一個可以被理解的空間</p>
                  <p>• 練習人際互動與表達的場域</p>
                  <p>• 實用的心理工具與調適方法</p>
                  <p>• 經濟與心理上可負擔的支持</p>
                  <p>• 心理照顧的去污名與生活化</p>
                </div>
              </div>
            </div>

            {/* 右側圖片區塊 - 拼接 g08 與 g06 */}
            <div className="lg:col-span-5 flex flex-col gap-6">
               {/* g08: 安撫與承接 (610x378) */}
               <div className="rounded-2xl overflow-hidden border-4 border-[#FFFCCB] shadow-lg transform rotate-2 hover:rotate-0 transition-transform">
                 <img src="/Photos/g08.png" alt="一人低垂身體，另一人伸手安撫" className="w-full h-auto"/>
               </div>
               {/* g06: 三角關係互動 (639x366) */}
               <div className="rounded-2xl overflow-hidden border-4 border-[#FFFCCB] shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
                 <img src="/Photos/g06.png" alt="三人彼此對談" className="w-full h-auto"/>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= THERAPY VS SUPPORT (NO TABLE) ================= */}
      {/* 使用強烈對比色塊重新排版文字 */}
      <section className="py-24 px-6 bg-[#F8F8EC]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl text-center text-[#3A4A38] mb-16">團體治療 與 支持性團體 的差異</h2>
          
          <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-[3rem] overflow-hidden shadow-2xl">
            
            {/* 左邊：團體治療 (綠色系) */}
            <div className="flex-1 bg-[#A3BFA7] p-10 lg:p-14 text-white relative">
               <div className="absolute top-0 right-0 p-4 opacity-20"><Shield size={100} /></div>
               <h3 className="text-2xl font-bold mb-8 border-b-2 border-white/30 pb-4">團體治療<br/><span className="text-sm font-normal opacity-80">Group Therapy</span></h3>
               
               <div className="space-y-8">
                 <div>
                   <h4 className="font-bold text-[#3A4A38] mb-1">引導者</h4>
                   <p className="font-light">由專業心理師帶領</p>
                 </div>
                 <div>
                   <h4 className="font-bold text-[#3A4A38] mb-1">結構性</h4>
                   <p className="font-light">有心理治療架構與目標</p>
                 </div>
                 <div>
                   <h4 className="font-bold text-[#3A4A38] mb-1">工作重點</h4>
                   <p className="font-light">深入探索互動、促進改變</p>
                 </div>
                 <div>
                   <h4 className="font-bold text-[#3A4A38] mb-1">回應方式</h4>
                   <p className="font-light">注重情緒歷程與互動覺察</p>
                 </div>
               </div>
            </div>

            {/* 中間：圖片 g02 (對話中立場) - 作為視覺分界 (468x318) */}
            <div className="lg:w-[300px] bg-[#E2C351] flex items-center justify-center p-4 relative overflow-hidden">
               <div className="absolute inset-0 bg-[#3A4A38] opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
               <div className="relative z-10 rounded-xl overflow-hidden border-4 border-white shadow-lg rotate-3">
                 <img src="/Photos/g02.png" alt="兩人相對指向中央焦點" className="w-full h-auto object-cover"/>
               </div>
            </div>

            {/* 右邊：支持性團體 (米黃色系) */}
            <div className="flex-1 bg-[#FFFCCB] p-10 lg:p-14 text-[#5E4B45] relative">
               <div className="absolute top-0 right-0 p-4 opacity-10"><Users size={100} /></div>
               <h3 className="text-2xl font-bold mb-8 border-b-2 border-[#79976B]/20 pb-4 text-[#79976B]">支持性/自助團體<br/><span className="text-sm font-normal opacity-80">Support Group</span></h3>
               
               <div className="space-y-8">
                 <div>
                   <h4 className="font-bold text-[#A3BFA7] mb-1">引導者</h4>
                   <p className="font-light">無專業引導，常由成員自組</p>
                 </div>
                 <div>
                   <h4 className="font-bold text-[#A3BFA7] mb-1">結構性</h4>
                   <p className="font-light">以經驗分享、支持為主</p>
                 </div>
                 <div>
                   <h4 className="font-bold text-[#A3BFA7] mb-1">工作重點</h4>
                   <p className="font-light">提供陪伴、舒緩孤單感</p>
                 </div>
                 <div>
                   <h4 className="font-bold text-[#A3BFA7] mb-1">回應方式</h4>
                   <p className="font-light">分享經驗與實用建議為主</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= COMMON TYPES ================= */}
      {/* 4個 Block 跳色設計 */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl text-center text-[#3A4A38] mb-20">常見的團體類型</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Block 1: Green */}
            <div className="bg-[#A3BFA7] p-8 rounded-[32px] text-white hover:-translate-y-2 transition-transform duration-300">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#A3BFA7] mb-6 mx-auto"><MessageCircle size={24}/></div>
               <h3 className="text-xl font-bold text-center mb-3">動力取向團體</h3>
               <p className="text-center text-sm font-light opacity-90">聚焦人際歷程，探索互動與情感反應。</p>
            </div>

            {/* Block 2: Mustard */}
            <div className="bg-[#E2C351] p-8 rounded-[32px] text-white hover:-translate-y-2 transition-transform duration-300">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#E2C351] mb-6 mx-auto"><BookOpen size={24}/></div>
               <h3 className="text-xl font-bold text-center mb-3">技能訓練團體</h3>
               <p className="text-center text-sm font-light opacity-90">教導具體技巧，如情緒調節、正念練習。</p>
            </div>

            {/* Block 3: Light Green */}
            <div className="bg-[#BAC680] p-8 rounded-[32px] text-white hover:-translate-y-2 transition-transform duration-300">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#BAC680] mb-6 mx-auto"><HeartPulse size={24}/></div>
               <h3 className="text-xl font-bold text-center mb-3">支持性導向</h3>
               <p className="text-center text-sm font-light opacity-90">聚焦在特定困擾，如成癮、悲傷、失戀等。</p>
            </div>

            {/* Block 4: Dark Green */}
            <div className="bg-[#79976B] p-8 rounded-[32px] text-white hover:-translate-y-2 transition-transform duration-300">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#79976B] mb-6 mx-auto"><HandHeart size={24}/></div>
               <h3 className="text-xl font-bold text-center mb-3">心理教育團體</h3>
               <p className="text-center text-sm font-light opacity-90">傳授心理知識與自我照顧方法。</p>
            </div>

          </div>
          {/* 圖片 g10: 四人圍坐討論 (2048x2048) - 補充視覺 */}
          <div className="mt-16 max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-lg border-8 border-[#F8F8EC]">
             <img src="/Photos/g10.png" alt="四人圍坐討論，肢體朝向彼此" className="w-full h-auto"/>
          </div>
        </div>
      </section>

      {/* ================= UNSTRUCTURED GROUP ================= */}
      {/* 背景：深綠色帶點點 */}
      <section className="py-24 px-6 relative bg-[#3A4A38] text-[#F8F8EC]">
        {/* 背景點點 */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#FFFCCB 2px, transparent 2px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 bg-[#E2C351] text-[#3A4A38] text-xs tracking-widest font-bold rounded-full mb-6">特別介紹</div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#FFFCCB] mb-10 leading-tight font-medium">
            非結構團體<br/>
            <span className="text-3xl md:text-4xl text-[#A3BFA7] mt-2 block font-normal">(Unstructured Group)</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="prose prose-lg prose-invert leading-loose font-light text-[#F8F8EC]">
              <p>
                非結構團體，也常被稱為「人際歷程團體」或「探索式團體」，是一種沒有明確主題或教學活動安排的開放式團體。焦點不在課程，而是在<strong className="text-[#E2C351] font-medium">當下彼此的情緒、互動與關係中</strong>。
              </p>
              <div className="my-8 pl-6 border-l-4 border-[#BAC680] italic text-[#FFFCCB] text-xl font-serif">
                <p>這種團體強調的是「與人真實相遇」，而不是「學到某個技巧」。</p>
              </div>
              
              <div className="bg-[#F8F8EC]/10 p-6 rounded-2xl backdrop-blur-sm mt-8">
                 <h4 className="font-bold text-[#FFF44F] mb-4">進行方式：</h4>
                 <ul className="space-y-3 list-none pl-0 text-sm">
                  <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-[#E2C351] mt-2 shrink-0"></div>沒有固定議題，由成員自由分享感受或對他人的回應</li>
                  <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-[#E2C351] mt-2 shrink-0"></div>治療師不主導內容，而是促進互動、觀察動力、適時介入</li>
                  <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-[#E2C351] mt-2 shrink-0"></div>主題自然浮現，例如焦慮、疏離、親密的渴望</li>
                  <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-[#E2C351] mt-2 shrink-0"></div>沉默、對視、衝突、靠近、退縮，都被視為重要的訊號</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-8">
               {/* g01: 成人圍繞中央 (543x311) */}
               <div className="rounded-xl overflow-hidden border-4 border-[#BAC680] shadow-xl">
                 <img src="/Photos/g01.png" alt="成人圍繞中央而坐" className="w-full h-auto"/>
               </div>
               {/* g03: 單一空椅 (442x406) - 象徵尚未進入的主體 */}
               <div className="rounded-xl overflow-hidden border-4 border-[#A3BFA7] shadow-xl w-3/4 self-end">
                 <img src="/Photos/g03.png" alt="單一空椅置於場域核心" className="w-full h-auto"/>
               </div>
            </div>
          </div>

          <div className="bg-[#F8F8EC] p-12 rounded-[3rem] shadow-2xl border-4 border-[#E2C351] text-center max-w-3xl mx-auto text-[#5E4B45]">
             {/* g11: 空椅面具 (454x373) - 完美契合 "脫下面具" 的文字 */}
             <div className="w-64 mx-auto mb-8 rounded-2xl overflow-hidden shadow-lg border-2 border-[#E2C351]">
                <img 
                  src="/Photos/g11.png" 
                  alt="空椅上浮現面具意象" 
                  className="w-full h-auto"
                />
             </div>
            
            <h3 className="font-serif text-3xl text-[#3A4A38] mb-6 flex justify-center items-center gap-2">
              <ScanFace className="text-[#E2C351]" />
              為什麼非結構團體這麼有力量？
            </h3>
            <p className="text-lg text-[#5E4B45] leading-loose mb-10 max-w-2xl mx-auto font-light">
              在日常生活中，我們經常在角色與功能中行走，習慣戴著面具互動。但在這裡，這些防衛可以被放下，讓真實的情緒流動，讓內在的需求被看見。<br/>
              這是一個提醒你：<strong className="text-[#79976B] font-medium bg-[#FFFCCB] px-1">「你可以不一樣，你可以真實」</strong>的場域。
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 font-serif text-base text-[#79976B]">
              <span className="px-6 py-3 bg-white rounded-full border border-[#A3BFA7] shadow-sm">原來我一直是這樣靠近他人</span>
              <span className="px-6 py-3 bg-white rounded-full border border-[#A3BFA7] shadow-sm">原來我很渴望被看見</span>
              <span className="px-6 py-3 bg-[#E2C351] text-white rounded-full font-bold shadow-md">原來，我可以改變</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 px-6 text-center bg-[#F8F8EC]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight font-medium text-[#3A4A38]">
            準備好在關係中探索自己了嗎？
          </h2>
          <p className="text-[#79976B] text-lg mb-12 leading-loose font-light">
            如需安排團體體驗、初談諮詢或獲得最新團體開課資訊，<br/>歡迎與我們聯繫。
          </p>
          <button className="group relative inline-flex items-center gap-3 px-10 py-4 bg-[#79976B] text-white text-lg font-bold rounded-full overflow-hidden shadow-lg hover:bg-[#3A4A38] transition-all duration-300">
            <span className="relative z-10 tracking-wider">聯絡我們，開始探索</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform"/>
          </button>
        </div>
      </section>

      {/* ================= AUTHOR SIGNATURE ================= */}
      <AuthorSignature />

    </main>
  );
}