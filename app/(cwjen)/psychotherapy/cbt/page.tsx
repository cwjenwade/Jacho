import React from 'react';
import { 
  Brain, 
  Lightbulb, 
  Target, 
  RefreshCw, 
  AlertTriangle,
  ArrowRight,
  Zap,
  Smile
} from 'lucide-react';

const CBTChapter = () => {
  // Morandi Color Palette
  const colors = {
    bg: "bg-[#F2F4F6]", // Cool Grey/Blue tint background
    card: "bg-[#FFFFFF]",
    primaryText: "text-[#4A5568]", // Dark Slate Grey
    secondaryText: "text-[#718096]", // Cool Grey
    accentBlue: "bg-[#A0B0C8]", // Morandi Blue
    accentBlueText: "text-[#5A6B85]",
    accentPink: "bg-[#D8C3C3]", // Dusty Pink
    accentPinkText: "text-[#8E6E6E]",
    accentGreen: "bg-[#B8C9B9]", // Sage Green
    accentGreenText: "text-[#5F7360]",
    accentYellow: "bg-[#E6DCC3]", // Muted Yellow
    accentYellowText: "text-[#8C8365]",
    border: "border-[#E2E8F0]"
  };

  return (
    <div className={`min-h-screen ${colors.bg} p-6 md:p-12 font-sans tracking-wide`}>
      <div className="max-w-6xl mx-auto space-y-16">

        {/* --- Header Section --- */}
        <header className="text-center space-y-6 mb-16">
          <div className="inline-block p-5 rounded-full bg-white shadow-sm mb-2">
            <Brain className={`w-14 h-14 ${colors.accentBlueText}`} />
          </div>
          <h1 className={`text-4xl md:text-6xl font-serif font-bold ${colors.primaryText}`}>
            認知行為治療
          </h1>
          <p className={`${colors.secondaryText} text-lg max-w-2xl mx-auto`}>
            Cognitive Behavior Therapy (CBT)
          </p>
          <div className={`flex flex-wrap justify-center gap-4 ${colors.secondaryText} text-sm font-medium`}>
            <span className="px-3 py-1 bg-white rounded shadow-sm">Albert Ellis</span>
            <span className="px-3 py-1 bg-white rounded shadow-sm">Aaron Beck</span>
            <span className="px-3 py-1 bg-white rounded shadow-sm">Judith S. Beck</span>
            <span className="px-3 py-1 bg-white rounded shadow-sm">Donald Meichenbaum</span>
          </div>
        </header>

        {/* --- 1. 導論 & 共通特性 --- */}
        <section className={`${colors.card} p-8 rounded-2xl shadow-sm border border-[#E2E8F0] grid md:grid-cols-2 gap-8`}>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Zap className={`w-6 h-6 ${colors.accentBlueText}`} />
              <h2 className={`text-2xl font-bold ${colors.primaryText}`}>導論：共通特性</h2>
            </div>
            <p className={`${colors.primaryText} leading-relaxed`}>
              CBT 主張人的困擾並非事件本身，而是「我們怎麼想這件事」影響個人的情緒，進而影響行動。
            </p>
            <ul className={`space-y-3 ${colors.secondaryText} text-sm`}>
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-1 shrink-0" /> 心理困擾來自認知歷程</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-1 shrink-0" /> 挑戰認知，促成情感和行為改變</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-1 shrink-0" /> 永久的改變需要信念改變</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-1 shrink-0" /> 當下核心、時限性、教育性</li>
            </ul>
          </div>
          
          {/* Image Placeholder: CBT Triangle (Thought-Emotion-Behavior) */}
          <div className="bg-[#EAEFF5] rounded-xl flex items-center justify-center min-h-[250px] relative overflow-hidden group">
             {/*  */}
             <div className="text-center z-10 p-6">
                <p className={`${colors.accentBlueText} font-medium`}></p>
                <p className="text-xs text-[#718096] mt-2">建議插入：想法、情緒、行為互相關聯的三角形圖示</p>
             </div>
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </div>
        </section>

        {/* --- 2. Albert Ellis 的理情行為治療 (REBT) --- */}
        <section className="space-y-8">
           <div className="flex items-center gap-3 mb-4">
            <Target className={`w-6 h-6 ${colors.accentPinkText}`} />
            <h2 className={`text-3xl font-bold ${colors.primaryText}`}>Albert Ellis: 理情行為治療 (REBT)</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Core Concept */}
            <div className={`${colors.card} p-8 rounded-2xl shadow-sm border-t-4 border-[#D8C3C3]`}>
               <h3 className={`text-xl font-bold ${colors.accentPinkText} mb-4`}>非理性信念 (Irrational Beliefs)</h3>
               <p className={`${colors.primaryText} leading-relaxed mb-4`}>
                 「真正困擾人們的是對事情僵化且極端的想法，非事件本身。」
               </p>
               <div className="bg-[#FFF5F5] p-4 rounded-lg text-sm text-[#8E6E6E] space-y-2">
                 <p><strong>Musts & Shoulds:</strong> 將慾望轉化為獨斷、絕對性的自我要求。</p>
                 <p><strong>自我責備:</strong> 情緒困擾的核心。</p>
               </div>
            </div>

            {/* ABC Theory */}
            <div className={`${colors.card} p-8 rounded-2xl shadow-sm border-t-4 border-[#D8C3C3]`}>
               <h3 className={`text-xl font-bold ${colors.accentPinkText} mb-4`}>A-B-C 理論架構</h3>
               <div className="space-y-4 relative">
                 <div className="flex items-start gap-3">
                   <span className="font-bold text-[#8E6E6E] w-6">A</span>
                   <span className="text-sm text-[#4A5568]">Activating Event (促發事件)：存在的事實。</span>
                 </div>
                 <div className="flex items-start gap-3">
                   <span className="font-bold text-[#8E6E6E] w-6">B</span>
                   <span className="text-sm text-[#4A5568]"><strong>Belief (信念)：導致 C 的真正原因。</strong></span>
                 </div>
                 <div className="flex items-start gap-3">
                   <span className="font-bold text-[#8E6E6E] w-6">C</span>
                   <span className="text-sm text-[#4A5568]">Consequences (情緒/行為結果)。</span>
                 </div>
                 <div className="border-t border-dashed border-[#E2E8F0] my-2"></div>
                 <div className="flex items-start gap-3">
                   <span className="font-bold text-[#5A6B85] w-6">D</span>
                   <span className="text-sm text-[#4A5568]">Disputing (駁斥)：偵測、辯論、分辨。</span>
                 </div>
                 <div className="flex items-start gap-3">
                   <span className="font-bold text-[#5F7360] w-6">E</span>
                   <span className="text-sm text-[#4A5568]">Effective Philosophy (新哲學)：取代不健康想法。</span>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Image Placeholder: ABCDE Model Flowchart */}
          <div className="w-full bg-[#FAF9F6] h-48 rounded-xl flex items-center justify-center border border-[#E2E8F0]">
             {/* 

[Image of REBT ABCDE Model]
 */}
             <p className="text-[#8C8365] text-sm"></p>
          </div>
        </section>

        {/* --- 3. Aaron Beck 的認知治療 (CT) --- */}
        <section className="space-y-8">
           <div className="flex items-center gap-3 mb-4">
            <Lightbulb className={`w-6 h-6 ${colors.accentYellowText}`} />
            <h2 className={`text-3xl font-bold ${colors.primaryText}`}>Aaron Beck: 認知治療 (CT)</h2>
          </div>

          <div className={`${colors.card} rounded-2xl overflow-hidden shadow-sm border border-[#E2E8F0]`}>
            <div className="grid md:grid-cols-2">
              <div className="p-8 space-y-6">
                 <h3 className={`text-xl font-bold ${colors.accentYellowText}`}>認知模型 (Cognitive Model)</h3>
                 <p className={`${colors.primaryText} text-sm leading-relaxed`}>
                   奠基於實證研究。憂鬱症來自<strong>負向認知三元素</strong>（自我、世界、未來）。
                   <br/>
                   心理壓力是正常適應機能的誇大。認知扭曲導致邏輯謬誤的自動化思考。
                 </p>
                 
                 <div className="bg-[#FFFAF0] p-4 rounded-lg space-y-2">
                    <h4 className="font-bold text-[#8C8365] text-sm">認知層次</h4>
                    <ul className="text-xs text-[#4A5568] space-y-1 ml-4 list-disc">
                       <li><strong>自動化思考 (Automatic Thoughts):</strong> 最靠近意識，扭曲且不正確。</li>
                       <li><strong>中介信念 (Intermediate Beliefs):</strong> 假設與價值觀。</li>
                       <li><strong>核心信念/基模 (Core Beliefs/Schemas):</strong> 深層、絕對的自我認知。</li>
                    </ul>
                 </div>
              </div>

              {/* Cognitive Distortions List */}
              <div className="p-8 bg-[#FDFBF7] border-l border-[#E2E8F0] space-y-4">
                 <h3 className={`text-lg font-bold ${colors.primaryText} flex items-center gap-2`}>
                   <AlertTriangle className="w-4 h-4 text-[#8C8365]" /> 認知扭曲類型
                 </h3>
                 <div className="grid grid-cols-1 gap-2 text-xs text-[#718096]">
                    <div className="p-2 bg-white rounded shadow-sm"><strong>獨斷推論：</strong>沒證據亂下結論。</div>
                    <div className="p-2 bg-white rounded shadow-sm"><strong>選擇性抽象化：</strong>斷章取義。</div>
                    <div className="p-2 bg-white rounded shadow-sm"><strong>過度類化：</strong>以偏概全。</div>
                    <div className="p-2 bg-white rounded shadow-sm"><strong>誇大與貶低：</strong>比例失衡。</div>
                    <div className="p-2 bg-white rounded shadow-sm"><strong>個人化：</strong>讀心術，無關連連結。</div>
                    <div className="p-2 bg-white rounded shadow-sm"><strong>二分法思考：</strong>非黑即白。</div>
                    <div className="p-2 bg-white rounded shadow-sm"><strong>災難化：</strong>杞人憂天。</div>
                 </div>
              </div>
            </div>
          </div>
          
          {/* Treatment Process */}
          <div className="grid md:grid-cols-3 gap-6">
             <div className={`${colors.card} p-6 rounded-xl border-t-4 border-[#E6DCC3] shadow-sm`}>
                <h4 className="font-bold text-[#8C8365] mb-2">蘇格拉底式對話</h4>
                <p className="text-sm text-[#718096]">引導式發現。三個問題技術：證據是什麼？其他解釋？表示什麼？</p>
             </div>
             <div className={`${colors.card} p-6 rounded-xl border-t-4 border-[#E6DCC3] shadow-sm`}>
                <h4 className="font-bold text-[#8C8365] mb-2">家庭作業 & DTR</h4>
                <p className="text-sm text-[#718096]">失功能想法紀錄 (DTR)。思考取樣。自我監控。</p>
             </div>
             <div className={`${colors.card} p-6 rounded-xl border-t-4 border-[#E6DCC3] shadow-sm`}>
                <h4 className="font-bold text-[#8C8365] mb-2">認知技術</h4>
                <p className="text-sm text-[#718096]">重新歸因、去災難化、挑戰絕對、列優缺點、認知預演。</p>
             </div>
          </div>
        </section>

        {/* --- 4. 優勢基礎 CBT (SB-CBT) --- */}
        <section className={`${colors.card} p-8 rounded-2xl shadow-sm border border-[#B8C9B9]`}>
           <div className="flex items-center gap-3 mb-6">
            <Smile className={`w-6 h-6 ${colors.accentGreenText}`} />
            <h2 className={`text-2xl font-bold ${colors.primaryText}`}>優勢基礎 CBT (SB-CBT)</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
             <div className="space-y-4 text-sm text-[#4A5568]">
                <p>強調確認和整合當事人的優點。治療師是盟友，非專家。</p>
                <div className="bg-[#F0F5F0] p-4 rounded-lg border border-[#B8C9B9]">
                   <p className="italic text-[#5F7360]">「現在是你生命中一個艱難的時刻，我想在你的生活中是否有一些事情仍進展良好...這將幫助我更完整認識你。」</p>
                </div>
                <p><strong>韌性策略 (Resilient Strategies)：</strong>建構新典範 (New Paradigm) 比修補舊問題容易。</p>
             </div>

             <div className="space-y-4">
                <h3 className={`font-bold ${colors.accentGreenText}`}>建立韌性四階段 (PMR)</h3>
                <ol className="list-decimal ml-5 space-y-2 text-sm text-[#718096]">
                   <li><strong>尋找：</strong>優勢領域 (Areas of strength)。</li>
                   <li><strong>建構：</strong>發現阻礙並處理，建立個人韌性模式 (PMR)。</li>
                   <li><strong>應用：</strong>將 PMR 應用於生活問題。</li>
                   <li><strong>練習：</strong>行為實驗，維持韌性。</li>
                </ol>
             </div>
          </div>
        </section>

        {/* --- 5. Meichenbaum 認知行為矯治 (CBM) --- */}
        <section className="space-y-6">
           <div className="flex items-center gap-3 mb-4">
            <RefreshCw className={`w-6 h-6 ${colors.accentBlueText}`} />
            <h2 className={`text-2xl font-bold ${colors.primaryText}`}>Meichenbaum: 認知行為矯治 (CBM)</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
             <div className={`${colors.card} p-6 rounded-xl shadow-sm`}>
                <h3 className="font-bold text-[#5A6B85] mb-3">自我指導訓練</h3>
                <p className="text-sm text-[#4A5568] mb-4">
                  改變「內在對話 (Inner Speech)」。行為改變是一系列中介歷程。
                </p>
                <div className="space-y-2 text-xs text-[#718096]">
                   <div className="flex gap-2"><span className="font-bold text-[#5A6B85]">1. 自我觀察：</span> 覺察負向自我陳述。</div>
                   <div className="flex gap-2"><span className="font-bold text-[#5A6B85]">2. 新內在對話：</span> 啟動新行為。</div>
                   <div className="flex gap-2"><span className="font-bold text-[#5A6B85]">3. 學習新技巧：</span> 阻斷負向循環。</div>
                </div>
             </div>

             <div className={`${colors.card} p-6 rounded-xl shadow-sm border border-[#E2E8F0]`}>
                <h3 className="font-bold text-[#5A6B85] mb-3">壓力免疫訓練 (SIT)</h3>
                <p className="text-sm text-[#4A5568] mb-4">
                   像打疫苗一樣，先應付小壓力，發展耐受度。
                </p>
                {/* Image Placeholder */}
                <div className="bg-[#F2F4F6] h-24 rounded flex items-center justify-center">
                   {/*  */}
                   <p className="text-[#5A6B85] text-xs"></p>
                </div>
             </div>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="text-center text-[#718096] text-sm mt-12 space-y-2">
           <div className="flex justify-center gap-4">
              <span className="bg-white px-2 py-1 rounded border border-[#E2E8F0]">思考影響情緒</span>
              <span className="bg-white px-2 py-1 rounded border border-[#E2E8F0]">結構化</span>
              <span className="bg-white px-2 py-1 rounded border border-[#E2E8F0]">教育性</span>
              <span className="bg-white px-2 py-1 rounded border border-[#E2E8F0]">家庭作業</span>
           </div>
           <p>© CBT Study Notes</p>
        </footer>

      </div>
    </div>
  );
};

export default CBTChapter;