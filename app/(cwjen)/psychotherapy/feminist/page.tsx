import React from 'react';
import { 
  Users, 
  Scale, 
  Heart, 
  Globe, 
  Shield, 
  Zap, 
  BookOpen, 
  Activity, 
  Feather,
  GitMerge,
  Eye
} from 'lucide-react';

const FeministTherapyChapter = () => {
  // Morandi Color Palette
  const colors = {
    bg: "bg-[#F7F5F2]", // Warm Linen
    card: "bg-[#FFFFFF]",
    primaryText: "text-[#5D5C61]", // Dark Warm Grey
    secondaryText: "text-[#938E96]", // Muted Purple Grey
    accentPink: "bg-[#D8C3C3]", // Dusty Pink
    accentPinkText: "text-[#8E6E6E]",
    accentBlue: "bg-[#B4C4C8]", // Muted Blue
    accentBlueText: "text-[#5A6B70]",
    accentGreen: "bg-[#CCD5C8]", // Sage Green
    accentGreenText: "text-[#6B7A6B]",
    accentPurple: "bg-[#C8C3D8]", // Muted Lavender
    accentPurpleText: "text-[#706B80]",
    border: "border-[#E8E6E1]"
  };

  return (
    <div className={`min-h-screen ${colors.bg} p-6 md:p-12 font-sans tracking-wide`}>
      <div className="max-w-6xl mx-auto space-y-16">

        {/* --- Header Section --- */}
        <header className="text-center space-y-6 mb-16">
          <div className="inline-block p-5 rounded-full bg-white shadow-sm mb-2">
            <Scale className={`w-14 h-14 ${colors.accentPinkText}`} />
          </div>
          <h1 className={`text-4xl md:text-6xl font-serif font-bold ${colors.primaryText}`}>
            女性主義治療
          </h1>
          <p className={`${colors.secondaryText} text-lg max-w-2xl mx-auto italic`}>
            &ldquo;個人即政治 (The Personal Is Political)&rdquo;
          </p>
          <div className={`flex flex-wrap justify-center gap-4 ${colors.secondaryText} text-sm font-medium`}>
            <span className="px-3 py-1 bg-white rounded shadow-sm">賦權</span>
            <span className="px-3 py-1 bg-white rounded shadow-sm">社會正義</span>
            <span className="px-3 py-1 bg-white rounded shadow-sm">性別平等</span>
            <span className="px-3 py-1 bg-white rounded shadow-sm">多元文化</span>
          </div>
        </header>

        {/* --- 1. 導論 & 歷史發展 --- */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className={`${colors.card} p-8 rounded-2xl shadow-sm border border-[#E8E6E1] space-y-6`}>
            <div className="flex items-center gap-3">
              <Globe className={`w-6 h-6 ${colors.accentBlueText}`} />
              <h2 className={`text-2xl font-bold ${colors.primaryText}`}>導論：社會政治脈絡</h2>
            </div>
            <p className={`${colors.primaryText} leading-relaxed text-sm`}>
              女性主義諮商建築在考慮問題所處的<strong>社會、文化及政治脈絡</strong>之上。
              <br/><br/>
              關注因社會政治地位，對女性、少數及邊緣化個體強加的心理迫害。性別因素無法和種族、社經地位等自我認同分開考量。
            </p>
            <div className={`p-4 ${colors.accentBlue} bg-opacity-20 rounded-xl border-l-4 border-[#B4C4C8]`}>
              <h3 className={`font-bold ${colors.accentBlueText} mb-2 text-sm`}>核心信念</h3>
              <p className={`text-xs ${colors.primaryText}`}>
                社會化歷程傾向讓女性在關係中放棄權力。理解並質疑性別角色刻板印象與權力是治療核心。
              </p>
            </div>
          </div>

          <div className={`${colors.card} p-8 rounded-2xl shadow-sm border border-[#E8E6E1] space-y-6 relative`}>
             <div className="flex items-center gap-3">
              <Users className={`w-6 h-6 ${colors.accentPinkText}`} />
              <h2 className={`text-2xl font-bold ${colors.primaryText}`}>歷史發展</h2>
            </div>
            <ul className="space-y-6 relative border-l-2 border-[#D8C3C3] ml-3 pl-6">
               <li className="relative">
                  <span className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full ${colors.accentPink}`}></span>
                  <strong className="block text-[#5D5C61]">1800 年代 (第一波)</strong>
                  <span className="text-xs text-[#938E96]">早期婦女運動。</span>
               </li>
               <li className="relative">
                  <span className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full ${colors.accentPink}`}></span>
                  <strong className="block text-[#5D5C61]">1960 年代 (第二波)</strong>
                  <span className="text-xs text-[#938E96]">
                    意識提升。家暴庇護中心、性侵害救援。
                    <br/>
                    揚棄內在病理學，轉而關注文化對女性的壓迫。
                  </span>
               </li>
            </ul>
             {/* Image Placeholder */}
             <div className="mt-4 bg-[#F2ECEC] h-32 rounded flex items-center justify-center opacity-70">
                {/*  */}
                <p className="text-[#8E6E6E] text-xs">[Image: Timeline of Feminist Waves]</p>
             </div>
          </div>
        </section>

        {/* --- 2. 主要概念 (Main Concepts) --- */}
        <section className="space-y-8">
           <div className="flex items-center gap-3 mb-4">
            <Feather className={`w-6 h-6 ${colors.accentPurpleText}`} />
            <h2 className={`text-3xl font-bold ${colors.primaryText}`}>主要概念</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "性別平等取向", desc: "以社會化過程解釋差異，而非本質。", color: colors.accentBlueText, bg: colors.accentBlue },
              { title: "多元文化觀點", desc: "適用於不同年齡、種族、文化、性別。", color: colors.accentGreenText, bg: colors.accentGreen },
              { title: "互動論", desc: "思考、感覺、行為與環境因素的互動。", color: colors.accentPinkText, bg: colors.accentPink },
              { title: "生命全程觀點", desc: "人格與行為型態隨時可能改變。", color: colors.accentPurpleText, bg: colors.accentPurple }
            ].map((item, i) => (
              <div key={i} className={`${colors.card} p-6 rounded-xl shadow-sm border-t-4`} style={{borderColor: item.bg.replace("bg-[", "").replace("]", "")}}>
                 <h3 className={`font-bold mb-2 ${item.color}`}>{item.title}</h3>
                 <p className="text-xs text-[#5D5C61] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
             {/* Relationship & Development */}
             <div className={`${colors.card} p-8 rounded-2xl border border-[#E8E6E1]`}>
                <h3 className={`text-xl font-bold ${colors.primaryText} mb-4 flex items-center gap-2`}>
                   <GitMerge className="w-5 h-5" /> 關係與發展
                </h3>
                <div className="space-y-4 text-sm text-[#5D5C61]">
                   <p>
                      <strong>人格發展：</strong>Gilligan 指出，女性自我意識以對他人的「照顧與責任」為基礎。
                      <span className="block mt-1 text-[#8E6E6E] italic">「連結性 (Connectedness) 是女性發展中心。」</span>
                   </p>
                   <p>
                      <strong>關係-文化理論 (RCT)：</strong>女性終其一生歷經連結、絕交與鞏固關係。同理帶來療癒並降低孤離。
                   </p>
                   <div className="bg-[#F7F5F2] p-3 rounded">
                      <strong className="block mb-1 text-xs text-[#938E96]">生存策略：</strong>
                      <p className="text-xs">女性須揣測支配者需求，開發「直覺」。男性則無需了解女性文化即可生存。</p>
                   </div>
                </div>
             </div>

             {/* Principles */}
             <div className={`${colors.card} p-8 rounded-2xl border border-[#E8E6E1]`}>
                <h3 className={`text-xl font-bold ${colors.primaryText} mb-4 flex items-center gap-2`}>
                   <Shield className="w-5 h-5" /> 女性主義原則
                </h3>
                <ul className="space-y-3 text-sm text-[#5D5C61]">
                   <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8E6E6E] mt-1.5 shrink-0"></span>
                      <span><strong>個人即政治：</strong>認識政治社會因素對個人的衝擊。批判意識。</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8E6E6E] mt-1.5 shrink-0"></span>
                      <span><strong>社會改變承諾：</strong>不只個人改變，更邁向社會行動。</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8E6E6E] mt-1.5 shrink-0"></span>
                      <span><strong>重視女性聲音：</strong>肯定邊緣化經驗的價值。</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8E6E6E] mt-1.5 shrink-0"></span>
                      <span><strong>平等的諮商關係：</strong>權力從治療師轉移至當事人。關注權力運作。</span>
                   </li>
                </ul>
             </div>
          </div>
        </section>

        {/* --- 3. 治療歷程 (Process) --- */}
        <section className={`${colors.card} rounded-2xl overflow-hidden shadow-sm border border-[#E8E6E1]`}>
           <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E8E6E1]">
              
              {/* Goals */}
              <div className="p-8 space-y-4">
                 <div className="flex items-center gap-2 mb-2">
                    <Activity className={`w-5 h-5 ${colors.accentGreenText}`} />
                    <h3 className={`font-bold ${colors.primaryText}`}>治療目標</h3>
                 </div>
                 <p className="text-sm text-[#5D5C61]">
                    賦權 (Empowerment)、肯定差異、改變局勢而非順應、社會改變、自我充電。
                 </p>
                 <p className="text-xs text-[#938E96]">協助成為積極的行動者。</p>
              </div>

              {/* Therapist Role */}
              <div className="p-8 space-y-4">
                 <div className="flex items-center gap-2 mb-2">
                    <Eye className={`w-5 h-5 ${colors.accentBlueText}`} />
                    <h3 className={`font-bold ${colors.primaryText}`}>治療者角色</h3>
                 </div>
                 <p className="text-sm text-[#5D5C61]">
                    強調社會公平。信任當事人能改變。
                 </p>
                 <p className="text-xs text-[#938E96]">
                    <strong>內在控制取向：</strong>不認為治療關係本身是改變的充分條件，內省只是行動跳板。
                 </p>
              </div>

              {/* Client Experience */}
              <div className="p-8 space-y-4">
                 <div className="flex items-center gap-2 mb-2">
                    <Heart className={`w-5 h-5 ${colors.accentPinkText}`} />
                    <h3 className={`font-bold ${colors.primaryText}`}>當事人經驗</h3>
                 </div>
                 <p className="text-sm text-[#5D5C61]">
                    獲得全新看待世界的方式。共同經歷賦權的旅程。
                 </p>
                 <p className="text-xs text-[#938E96]">
                    男性也可探索性別角色的特權與限制，體驗悲傷、溫柔等情緒。
                 </p>
              </div>
           </div>
        </section>

        {/* --- 4. 技術與程序 (Techniques) --- */}
        <section className="space-y-8">
           <div className="flex items-center gap-3 mb-4">
            <Zap className={`w-6 h-6 ${colors.accentGreenText}`} />
            <h2 className={`text-3xl font-bold ${colors.primaryText}`}>應用：技術與程序</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
             {/* Technique List */}
             <div className="space-y-4">
                {[
                  { title: "賦權 (Empowerment)", desc: "核心策略。「此時此刻你能為自己做最有權力的事是什麼？」打破無能為力迷思。" },
                  { title: "自我揭露", desc: "營造平等關係，示範女性共有經驗的常態性。" },
                  { title: "性別角色分析", desc: "辨識社會化對價值、思想的影響。與內化壓迫共存。" },
                  { title: "權力分析 (Power Analysis)", desc: "了解不平等權力如何影響個人現實。學習挑戰限制。" },
                  { title: "自我肯定訓練", desc: "意識人際權利，超越刻板印象，改變負面信念。" },
                  { title: "重構 (Reframing)", desc: "將問題從內部歸因轉向外在社會因素。不怪罪受害者。" },
                  { title: "社會行動", desc: "投身參與社會改變。成長團體提供賦權環境。" }
                ].map((tech, idx) => (
                   <div key={idx} className="flex gap-4 p-3 bg-white rounded-lg shadow-sm border border-[#F0F0F0]">
                      <div className={`w-8 h-8 rounded-full ${colors.accentGreen} flex items-center justify-center shrink-0 text-[#6B7A6B] font-bold text-xs`}>
                         {idx + 1}
                      </div>
                      <div>
                         <h4 className="font-bold text-[#5D5C61] text-sm">{tech.title}</h4>
                         <p className="text-xs text-[#938E96] mt-1">{tech.desc}</p>
                      </div>
                   </div>
                ))}
             </div>

             {/* Diagnosis & Male Role */}
             <div className="space-y-6">
                <div className={`${colors.card} p-6 rounded-xl border-l-4 border-[#C8C3D8] shadow-sm`}>
                   <h3 className={`font-bold ${colors.accentPurpleText} mb-2`}>診斷的限制</h3>
                   <ul className="list-disc ml-4 space-y-1 text-xs text-[#5D5C61]">
                      <li>著重症狀，忽視社會因素。</li>
                      <li>強化主流文化規範，可能成為壓迫工具。</li>
                      <li>反應不適當權力運用。</li>
                      <li>標籤化導致去人性化。</li>
                   </ul>
                </div>

                <div className={`${colors.card} p-6 rounded-xl border-l-4 border-[#B4C4C8] shadow-sm`}>
                   <h3 className={`font-bold ${colors.accentBlueText} mb-2`}>男性在女性主義治療</h3>
                   <p className="text-xs text-[#5D5C61] leading-relaxed">
                      男性治療者需承認特權，勇於面質性別歧視。
                      <br/>
                      社會對男性氣質（克制感情、權力控制）同樣是限制。男性得以反映苦痛與冀望。
                   </p>
                </div>
                
                {/* Image Placeholder: Power Analysis Diagram */}
                <div className="bg-[#EAEAEA] h-40 rounded-xl flex items-center justify-center opacity-80">
                   {/*  */}
                   <p className="text-[#938E96] text-xs">[Image: Power Analysis Diagram]</p>
                </div>
             </div>
          </div>
        </section>

        {/* --- Footer Note --- */}
        <section className={`${colors.card} p-8 rounded-2xl shadow-sm bg-[#F9F9F9] mt-8`}>
           <div className="flex items-start gap-3">
              <BookOpen className={`w-5 h-5 ${colors.accentPinkText} shrink-0 mt-1`} />
              <div className="space-y-2 text-sm text-[#5D5C61]">
                 <p><strong>Noted:</strong> 多元文化、女性主義及社會正義諮商有共同理路：促成社會改變、解構問題、合作設定目標。</p>
                 <p><strong>限制與批評：</strong>治療者不應替當事人做選擇，應避免給予特定成長方向。需尊重當事人理解後所做的選擇。</p>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default FeministTherapyChapter;