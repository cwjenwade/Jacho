"use client";

import React, { useState } from 'react';
import { 
  Users, 
  MessageCircle, 
  Sparkles, 
  BookOpen, 
  Feather, 
  Compass,
  Mic,
  PenTool,
  CheckCircle,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

const PostmodernTherapyChapter = () => {
  const [activeTab, setActiveTab] = useState('intro');

  // Morandi Color Palette
  const colors = {
    bg: "bg-[#F4F5F7]", // Cool Grey Background
    card: "bg-[#FFFFFF]",
    primaryText: "text-[#595E60]", // Deep Grey
    secondaryText: "text-[#8C9296]", // Muted Grey
    accentBlue: "bg-[#AAB7B8]", // Foggy Blue
    accentBlueText: "text-[#5F6C6D]",
    accentGreen: "bg-[#B5C2B7]", // Olive Green
    accentGreenText: "text-[#657066]",
    accentPurple: "bg-[#C6C0C9]", // Smoky Purple
    accentPurpleText: "text-[#736D76]",
    accentBeige: "bg-[#DCD5C9]", // Milk Tea
    accentBeigeText: "text-[#857D70]",
    border: "border-[#E0E2E5]"
  };

  const tabs = [
    { id: 'intro', label: '導論 & 社會建構', icon: Users },
    { id: 'sfbt', label: '焦點解決 (SFBT)', icon: Compass },
    { id: 'narrative', label: '敘事治療', icon: BookOpen },
    { id: 'summary', label: '總結與應用', icon: Feather },
  ];

  return (
    <div className={`min-h-screen ${colors.bg} p-6 md:p-12 font-sans tracking-wide`}>
      <div className="max-w-6xl mx-auto space-y-8">

        {/* --- Header Section --- */}
        <header className="text-center space-y-6 mb-12">
          <div className="inline-block p-4 rounded-full bg-white shadow-sm mb-2">
            <Sparkles className={`w-12 h-12 ${colors.accentBlueText}`} />
          </div>
          <h1 className={`text-4xl md:text-5xl font-serif font-bold ${colors.primaryText}`}>
            後現代取向
          </h1>
          <div className={`flex flex-wrap justify-center gap-6 ${colors.secondaryText} text-sm font-medium uppercase tracking-widest`}>
            <span>Insoo Kim Berg</span>
            <span>•</span>
            <span>Steve de Shazer</span>
            <span>•</span>
            <span>Michael White</span>
            <span>•</span>
            <span>David Epston</span>
          </div>
        </header>

        {/* --- Navigation Tabs --- */}
        <div className="flex flex-wrap justify-center gap-4 border-b border-[#E0E2E5] pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? `${colors.accentBlue} text-white shadow-md`
                  : "bg-white text-[#8C9296] hover:bg-[#F0F2F5]"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* --- Content Sections --- */}
        <div className="mt-8">

          {/* === 1. Intro & Social Constructionism === */}
          {activeTab === 'intro' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-8">
                <div className={`${colors.card} p-8 rounded-2xl shadow-sm border border-[#E0E2E5] space-y-6`}>
                  <div className="flex items-center gap-3">
                    <Users className={`w-6 h-6 ${colors.accentBlueText}`} />
                    <h2 className={`text-2xl font-bold ${colors.primaryText}`}>社會建構導論</h2>
                  </div>
                  <p className={`${colors.primaryText} leading-relaxed text-sm`}>
                    現代主義相信客觀真實，但社會建構論認為真實並非獨立存在於觀察之外。
                    <br/><br/>
                    <strong>核心觀點：</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-[#8C9296]">
                      <li>當事人的真理即是真理，不評斷正確性。</li>
                      <li>一旦定義了自我，就很難注意到相左的行為。</li>
                      <li>語言本身和故事創造出意義。</li>
                    </ul>
                  </p>
                </div>

                <div className={`${colors.card} p-8 rounded-2xl shadow-sm border border-[#E0E2E5] space-y-6`}>
                  <div className="flex items-center gap-3">
                    <MessageCircle className={`w-6 h-6 ${colors.accentGreenText}`} />
                    <h2 className={`text-2xl font-bold ${colors.primaryText}`}>合作語言系統 (Not Knowing)</h2>
                  </div>
                  <p className={`${colors.primaryText} leading-relaxed text-sm`}>
                    治療師處於<strong>「不知情 (Not Knowing)」</strong>的狀態。
                    <br/><br/>
                    <strong>態度：</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-[#8C9296]">
                      <li>抱持好奇與強烈探索。</li>
                      <li>當事人才是專家。</li>
                      <li>在「當下」建構「過去的歷史」。</li>
                    </ul>
                  </p>
                </div>
              </div>
              
              {/* Image Placeholder */}
              <div className="bg-[#EAEFF0] h-64 rounded-2xl flex items-center justify-center border border-dashed border-[#AAB7B8] relative group overflow-hidden">
                {/* 

[Image of Social Constructionism Diagram]
 */}
                <div className="text-center z-10 p-6">
                    <p className={`${colors.accentBlueText} font-medium`}>[Image: Diagram of Social Constructionism vs Modernism]</p>
                    <p className="text-xs text-[#8C9296] mt-2">建議插入：現代主義（客觀）與社會建構（主觀多元）的對比圖</p>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
            </div>
          )}

          {/* === 2. SFBT === */}
          {activeTab === 'sfbt' && (
            <div className="space-y-12 animate-fadeIn">
              {/* Introduction Card */}
              <div className={`${colors.card} p-8 rounded-2xl shadow-sm border-l-4 border-[#AAB7B8]`}>
                 <div className="flex items-center gap-3 mb-4">
                    <Compass className={`w-6 h-6 ${colors.accentBlueText}`} />
                    <h2 className={`text-2xl font-bold ${colors.primaryText}`}>焦點短期解決治療 (SFBT)</h2>
                 </div>
                 <p className="text-sm text-[#595E60]">
                    <strong>「未來聚焦」與「目標導向」。</strong><br/>
                    基本假設：當事人為新的真實努力時，可以很快改變。不需探討問題原因，因為原因與解答不必然相關。
                 </p>
              </div>

              {/* Key Concepts Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                 {[
                   { title: "正向治療", desc: "人是健康且有能力的。治療師協助找到已有的能力。", color: colors.accentGreenText, bg: colors.accentGreen },
                   { title: "尋找例外", desc: "何時問題沒有發生？那是成功的時刻。鼓勵重複有效的方法。", color: colors.accentBlueText, bg: colors.accentBlue },
                   { title: "樂觀對話", desc: "面質悲觀陳述，強調「能夠達成」的目標。重構故事。", color: colors.accentBeigeText, bg: colors.accentBeige }
                 ].map((item, i) => (
                   <div key={i} className={`${colors.card} p-6 rounded-xl shadow-sm border-t-4`} style={{borderColor: item.bg.replace("bg-[", "").replace("]", "")}}>
                      <h3 className={`font-bold mb-2 ${item.color}`}>{item.title}</h3>
                      <p className="text-xs text-[#595E60] leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>

              {/* Techniques Section */}
              <div className="space-y-6">
                 <h3 className={`text-xl font-bold ${colors.primaryText} flex items-center gap-2`}>
                    <PenTool className="w-5 h-5" /> 治療技術
                 </h3>
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                       {[
                         { name: "奇蹟問句 (Miracle Question)", detail: "「如果發生奇蹟，問題解決了，你如何知道？」改變面對問題的行動。" },
                         { name: "例外問句 (Exception Questions)", detail: "過去問題應當發生卻沒發生的經驗。" },
                         { name: "量尺問句 (Scaling Questions)", detail: "評估不易觀察的經驗與進展。" },
                         { name: "首次晤談作業 (FFST)", detail: "觀察從現在到下次會談，有哪些希望再次發生的改變。" }
                       ].map((tech, idx) => (
                          <div key={idx} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border border-[#E0E2E5]">
                             <div className={`w-8 h-8 rounded-full ${colors.accentBlue} flex items-center justify-center shrink-0 text-white font-bold text-xs`}>
                                {idx + 1}
                             </div>
                             <div>
                                <h4 className="font-bold text-[#595E60] text-sm">{tech.name}</h4>
                                <p className="text-xs text-[#8C9296] mt-1">{tech.detail}</p>
                             </div>
                          </div>
                       ))}
                    </div>
                    {/* Image Placeholder: Scaling Question Visual */}
                    <div className="bg-[#F0F2F5] rounded-xl flex items-center justify-center border border-[#E0E2E5]">
                       {/*  */}
                       <p className="text-[#8C9296] text-xs font-medium">[Image: Visual of Scaling Question (1-10 Scale)]</p>
                    </div>
                 </div>
              </div>

              {/* Feedback Structure */}
              <div className={`${colors.card} p-6 rounded-xl border border-[#E0E2E5] bg-[#FAFAFA]`}>
                 <h4 className="font-bold text-[#595E60] mb-3">治療師回饋架構 (Break 5-10 mins)</h4>
                 <div className="flex flex-col md:flex-row gap-4 text-sm">
                    <div className="flex-1 p-3 bg-white rounded shadow-sm border-l-4 border-[#B5C2B7]">
                       <strong className="block text-[#657066]">1. 讚美 (Compliment)</strong>
                       <span className="text-xs text-[#8C9296]">創造希望，肯定力量。</span>
                    </div>
                    <div className="flex-1 p-3 bg-white rounded shadow-sm border-l-4 border-[#AAB7B8]">
                       <strong className="block text-[#5F6C6D]">2. 橋樑 (Bridge)</strong>
                       <span className="text-xs text-[#8C9296]">連接讚美與建議。</span>
                    </div>
                    <div className="flex-1 p-3 bg-white rounded shadow-sm border-l-4 border-[#C6C0C9]">
                       <strong className="block text-[#736D76]">3. 建議 (Suggestion Task)</strong>
                       <span className="text-xs text-[#8C9296]">觀察作業或行為作業。</span>
                    </div>
                 </div>
              </div>
            </div>
          )}

          {/* === 3. Narrative Therapy === */}
          {activeTab === 'narrative' && (
            <div className="space-y-12 animate-fadeIn">
               {/* Intro */}
               <div className={`${colors.card} p-8 rounded-2xl shadow-sm border-l-4 border-[#C6C0C9]`}>
                 <div className="flex items-center gap-3 mb-4">
                    <BookOpen className={`w-6 h-6 ${colors.accentPurpleText}`} />
                    <h2 className={`text-2xl font-bold ${colors.primaryText}`}>敘事治療 (Narrative Therapy)</h2>
                 </div>
                 <p className="text-sm text-[#595E60] leading-relaxed">
                    個人根據強勢故事建構生活意義。問題是在社會、文化脈絡中製造的。
                    <br/>
                    <strong>核心精神：</strong>協助當事人將生命故事從主流強勢敘述中區分出來，創造屬於自己的故事。
                 </p>
              </div>

              {/* Process Steps */}
              <div className="relative border-l-2 border-[#E0E2E5] ml-6 space-y-8">
                 <div className="relative pl-8">
                    <span className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${colors.accentPurple}`}></span>
                    <h3 className={`text-lg font-bold ${colors.accentPurpleText}`}>1. 外化與解構 (Externalizing)</h3>
                    <p className="text-sm text-[#595E60] mt-1">
                       <strong>「人沒有問題，問題才是問題。」</strong><br/>
                       將問題與當事人分開。描繪問題對生活的影響，以及生活對問題的影響。
                    </p>
                 </div>
                 <div className="relative pl-8">
                    <span className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${colors.accentBlue}`}></span>
                    <h3 className={`text-lg font-bold ${colors.accentBlueText}`}>2. 尋找獨特事件 (Unique Outcomes)</h3>
                    <p className="text-sm text-[#595E60] mt-1">
                       <strong>「閃亮時刻」：</strong>問題沒有發生或被解決的時刻。過去、現在或未來皆可找到。
                    </p>
                 </div>
                 <div className="relative pl-8">
                    <span className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${colors.accentGreen}`}></span>
                    <h3 className={`text-lg font-bold ${colors.accentGreenText}`}>3. 重寫故事 (Re-authoring)</h3>
                    <p className="text-sm text-[#595E60] mt-1">
                       決定是否停留在舊故事，或創造新故事。啟動「今天是新生活的第一天」。
                    </p>
                 </div>
                 <div className="relative pl-8">
                    <span className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${colors.accentBeige}`}></span>
                    <h3 className={`text-lg font-bold ${colors.accentBeigeText}`}>4. 進步證明 (Documentation)</h3>
                    <p className="text-sm text-[#595E60] mt-1">
                       創造聽眾支持新故事。治療師寫信記錄諮商歷程、問題外化與當事人的力量。
                    </p>
                 </div>
              </div>

              {/* Image Placeholder: Externalization Diagram */}
              <div className="bg-[#FAF9F6] h-48 rounded-2xl flex items-center justify-center border border-[#E0E2E5]">
                  {/*  */}
                  <p className="text-[#857D70] text-xs font-medium">[Image: Diagram of Person separate from Problem (Externalization)]</p>
              </div>

              {/* Therapist Role */}
              <div className="grid md:grid-cols-2 gap-6">
                 <div className={`${colors.card} p-6 rounded-xl border border-[#E0E2E5]`}>
                    <h4 className="font-bold text-[#595E60] mb-2 flex items-center gap-2">
                       <Mic className="w-4 h-4" /> 雙重傾聽 (Double Listening)
                    </h4>
                    <p className="text-xs text-[#8C9296]">
                       避免概括語言。在傾聽痛苦的同時，也聆聽當事人對抗問題的能力。
                    </p>
                 </div>
                 <div className={`${colors.card} p-6 rounded-xl border border-[#E0E2E5]`}>
                    <h4 className="font-bold text-[#595E60] mb-2 flex items-center gap-2">
                       <CheckCircle className="w-4 h-4" /> 不知情的提問
                    </h4>
                    <p className="text-xs text-[#8C9296]">
                       不帶答案來問問題。好奇、尊重、跟隨當事人的引導。
                    </p>
                 </div>
              </div>
            </div>
          )}

          {/* === 4. Summary & Application === */}
          {activeTab === 'summary' && (
            <div className="space-y-8 animate-fadeIn">
               <div className="grid md:grid-cols-2 gap-8">
                  <div className={`${colors.card} p-8 rounded-2xl border border-[#E0E2E5]`}>
                     <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className={`w-6 h-6 ${colors.accentGreenText}`} />
                        <h3 className={`text-xl font-bold ${colors.primaryText}`}>優點</h3>
                     </div>
                     <ul className="space-y-3 text-sm text-[#595E60]">
                        <li className="flex items-start gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-[#657066] mt-2 shrink-0"></span>
                           <span><strong>多元文化：</strong>強調多元真實，適應不同文化觀。</span>
                        </li>
                        <li className="flex items-start gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-[#657066] mt-2 shrink-0"></span>
                           <span><strong>去病理化：</strong>當事人不再是問題一部分，了解壓迫性社會規約。</span>
                        </li>
                        <li className="flex items-start gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-[#657066] mt-2 shrink-0"></span>
                           <span><strong>短期高效：</strong>約五次諮商可達效果。</span>
                        </li>
                     </ul>
                  </div>

                  <div className={`${colors.card} p-8 rounded-2xl border border-[#E0E2E5]`}>
                     <div className="flex items-center gap-3 mb-4">
                        <AlertCircle className={`w-6 h-6 ${colors.accentPurpleText}`} />
                        <h3 className={`text-xl font-bold ${colors.primaryText}`}>限制與反思</h3>
                     </div>
                     <ul className="space-y-3 text-sm text-[#595E60]">
                        <li className="flex items-start gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-[#736D76] mt-2 shrink-0"></span>
                           <span><strong>文化期待差異：</strong>部分文化推崇專家角色，可能不習慣「不知情」立場。</span>
                        </li>
                        <li className="flex items-start gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-[#736D76] mt-2 shrink-0"></span>
                           <span><strong>技術 vs 態度：</strong>初學者易迷失於技術流程，忽略真誠態度與跟隨當事人。</span>
                        </li>
                     </ul>
                  </div>
               </div>
               
               <div className="text-center p-8 bg-[#F0F2F5] rounded-2xl">
                  <p className="text-sm text-[#595E60] italic">
                     &ldquo;談論問題會創造更多的問題，談論改變會創造更多的改變。&rdquo;
                  </p>
               </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default PostmodernTherapyChapter;