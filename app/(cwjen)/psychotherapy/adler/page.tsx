import React from 'react';
import { 
  User, 
  Users, 
  Target, 
  Compass, 
  Brain, 
  Activity, 
  Flag, 
  Feather,
  Anchor,
  MessageCircle,
  AlertTriangle
} from 'lucide-react';

const AdlerianTherapyChapter = () => {
  // Morandi Color Palette
  const colors = {
    bg: "bg-[#F4F4F0]", // Oatmeal
    card: "bg-[#FFFFFF]",
    primaryText: "text-[#5E5C5C]", // Dark Warm Grey
    secondaryText: "text-[#8C8A88]", // Light Warm Grey
    accentBlue: "bg-[#B4C4C8]", // Dusty Blue
    accentBlueText: "text-[#7A8A90]",
    accentGreen: "bg-[#CCD5C8]", // Sage Green
    accentGreenText: "text-[#7C8A7C]",
    accentPink: "bg-[#DBC8C6]", // Dusty Pink
    accentPinkText: "text-[#9A7E7C]",
    accentYellow: "bg-[#E6DCC3]", // Muted Yellow
    accentYellowText: "text-[#998F73]",
    border: "border-[#E0E0DB]"
  };

  return (
    <div className={`min-h-screen ${colors.bg} p-6 md:p-12 font-sans tracking-wide`}>
      <div className="max-w-6xl mx-auto space-y-16">

        {/* --- Header Section --- */}
        <header className="text-center space-y-6 mb-16">
          <div className="inline-block p-5 rounded-full bg-white shadow-sm mb-2">
            <Feather className={`w-14 h-14 ${colors.accentBlueText}`} />
          </div>
          <h1 className={`text-4xl md:text-6xl font-serif font-bold ${colors.primaryText}`}>
            阿德勒治療
          </h1>
          <div className={`flex flex-wrap justify-center items-center gap-4 ${colors.secondaryText} text-lg font-serif italic`}>
            <span>Alfred Adler</span>
            <span>•</span>
            <span>Rudolf Dreikurs</span>
            <span>•</span>
            <span>Jon D. Carlson</span>
          </div>
        </header>

        {/* --- 1. 導論 & 核心哲學 --- */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className={`${colors.card} p-8 rounded-2xl shadow-sm border border-[#EBEBEB] space-y-6`}>
            <div className="flex items-center gap-3">
              <Compass className={`w-6 h-6 ${colors.accentBlueText}`} />
              <h2 className={`text-2xl font-bold ${colors.primaryText}`}>導論：社會心理與目的論</h2>
            </div>
            <p className={`${colors.primaryText} leading-relaxed`}>
              脫離了 Freud 的生物取向與決定論，Adler 更強調社會脈絡與目的論。
              <br/><br/>
              <strong>整體觀 (Holism)：</strong>只有從整體、全面的觀點來看，才能對人有所了解。個體持續在創造自己，且總是處在轉化的過程中。
            </p>
            <div className={`p-4 ${colors.accentBlue} bg-opacity-20 rounded-xl border-l-4 border-[#B4C4C8]`}>
              <h3 className={`font-bold ${colors.accentBlueText} mb-2`}>虛構目的論 (Fictional Finalism)</h3>
              <p className={`text-sm ${colors.primaryText}`}>
                個體行為具目標導向，自卑是基本原動力，促使個體朝向設定的生活目標，以達到超越之目的。
              </p>
            </div>
          </div>

          {/* Image Placeholder: Adler Portrait or Social Context Diagram */}
          <div className="bg-[#EAEAE5] rounded-2xl flex items-center justify-center min-h-[300px] relative overflow-hidden group">
             {/* 請在此處插入照片：Adler 照片 或 社會脈絡示意圖 */}
             <div className="text-center z-10">
                <p className={`${colors.secondaryText} font-medium`}></p>
                <p className="text-xs text-[#8C8A88] mt-2">建議插入：Alfred Adler 肖像或強調社會連結的插圖</p>
             </div>
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </div>
        </section>

        {/* --- 2. 主要概念 (Cards Grid) --- */}
        <section className="space-y-8">
           <div className="flex items-center gap-3 mb-4">
            <Target className={`w-6 h-6 ${colors.accentPinkText}`} />
            <h2 className={`text-3xl font-bold ${colors.primaryText}`}>主要概念</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: 人性觀 */}
            <div className={`${colors.card} p-6 rounded-xl shadow-sm border-t-4 border-[#DBC8C6]`}>
               <h3 className={`text-xl font-bold ${colors.accentPinkText} mb-3 flex items-center gap-2`}>
                 <User className="w-5 h-5" /> 人性觀
               </h3>
               <p className={`text-sm ${colors.primaryText} leading-relaxed`}>
                 重點置於個人對過往的知覺及詮釋。意識而非潛意識才是焦點。自卑感並非病態，而是<strong>創造的泉源</strong>，促使我們力求卓越。
               </p>
            </div>

            {/* Card 2: 社會興趣 */}
            <div className={`${colors.card} p-6 rounded-xl shadow-sm border-t-4 border-[#CCD5C8]`}>
               <h3 className={`text-xl font-bold ${colors.accentGreenText} mb-3 flex items-center gap-2`}>
                 <Users className="w-5 h-5" /> 社會興趣
               </h3>
               <p className={`text-sm ${colors.primaryText} leading-relaxed`}>
                 <strong>Gemeinschaftsgefuhl (社群感)：</strong>感知自己是社群一份子。成功與快樂來自與社會的連結。包含三個階段：態度、能力與次級動力特質。
               </p>
            </div>

             {/* Card 3: 現象學 */}
            <div className={`${colors.card} p-6 rounded-xl shadow-sm border-t-4 border-[#E6DCC3]`}>
               <h3 className={`text-xl font-bold ${colors.accentYellowText} mb-3 flex items-center gap-2`}>
                 <Brain className="w-5 h-5" /> 現象學取向
               </h3>
               <p className={`text-sm ${colors.primaryText} leading-relaxed`}>
                 重視當事人對外界看法的<strong>主觀現實 (Subjective Reality)</strong>。包含個人的知覺、想法、價值觀與信念。
               </p>
            </div>
          </div>
          
          {/* Sub-section: 生活風格 & 出生序 */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
             <div className={`${colors.card} p-8 rounded-2xl border border-[#E0E0DB]`}>
                <h3 className={`text-xl font-bold ${colors.primaryText} mb-4`}>生活風格 (Lifestyle)</h3>
                <p className={`text-sm ${colors.secondaryText} mb-4`}>
                  4-5歲成形。反映個體如何與他人連結及達成目標的方式。
                </p>
                <div className="space-y-3">
                   {[
                     {type: "支配型 Ruling", desc: "支配他人以保護優越感 (False)"},
                     {type: "獲得型 Getting", desc: "依賴他人滿足，較少付出 (False)"},
                     {type: "逃避型 Avoiding", desc: "迴避困難以避免失敗 (False)"},
                     {type: "有益社會型 Socially Useful", desc: "具備社會情感，有助發展 (True)"}
                   ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-[#F9F9F9] rounded-lg">
                         <span className="font-bold text-[#5E5C5C] text-sm">{item.type}</span>
                         <span className="text-xs text-[#8C8A88]">{item.desc}</span>
                      </div>
                   ))}
                </div>
             </div>

             <div className={`${colors.card} p-8 rounded-2xl border border-[#E0E0DB]`}>
                <h3 className={`text-xl font-bold ${colors.primaryText} mb-4`}>出生序與手足關係</h3>
                <p className={`text-sm ${colors.secondaryText} mb-4`}>
                  處理家庭動力關鍵。心理地位比實際出生序更重要。
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                   <div className="p-3 bg-[#F4F4F0] rounded"><strong className="block text-[#5E5C5C]">長子</strong><span className="text-xs text-[#8C8A88]">模範、追求成就、可能覺得愛被搶走。</span></div>
                   <div className="p-3 bg-[#F4F4F0] rounded"><strong className="block text-[#5E5C5C]">老二</strong><span className="text-xs text-[#8C8A88]">競賽選手、超越老大、唱反調。</span></div>
                   <div className="p-3 bg-[#F4F4F0] rounded"><strong className="block text-[#5E5C5C]">中間</strong><span className="text-xs text-[#8C8A88]">受壓迫感、「可憐的我」、調和者。</span></div>
                   <div className="p-3 bg-[#F4F4F0] rounded"><strong className="block text-[#5E5C5C]">老么</strong><span className="text-xs text-[#8C8A88]">驕縱、自行其是、家裡的寶貝。</span></div>
                   <div className="p-3 bg-[#F4F4F0] rounded col-span-2"><strong className="block text-[#5E5C5C]">獨生</strong><span className="text-xs text-[#8C8A88]">高成就驅力、缺乏分享機會、擅長與成人相處。</span></div>
                </div>
             </div>
          </div>
        </section>

        {/* --- 3. 受困與脫困 (Problem & Solution) --- */}
        <section className={`${colors.card} rounded-2xl overflow-hidden shadow-sm`}>
           <div className="grid md:grid-cols-2">
              {/* Problem Side */}
              <div className="p-8 md:p-12 bg-[#DBC8C6] bg-opacity-20">
                 <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className={`w-6 h-6 ${colors.accentPinkText}`} />
                    <h3 className={`text-2xl font-bold ${colors.accentPinkText}`}>受困的原因</h3>
                 </div>
                 <ul className="space-y-4 text-sm text-[#5E5C5C]">
                    <li><strong>失去勇氣：</strong>環境未鼓勵，無勇氣邁向目標。</li>
                    <li><strong>自卑情結：</strong>無法超越自卑感，未培養社群情感。</li>
                    <li><strong>基本錯誤 (Basic Mistakes)：</strong>
                       <ul className="pl-4 mt-2 space-y-1 list-disc text-[#8C8A88]">
                          <li>過度類化</li>
                          <li>虛無的安全感</li>
                          <li>錯誤的知覺與價值觀</li>
                          <li>自貶價值</li>
                       </ul>
                    </li>
                 </ul>
              </div>

              {/* Solution Side */}
              <div className="p-8 md:p-12 bg-[#CCD5C8] bg-opacity-20">
                 <div className="flex items-center gap-3 mb-6">
                    <Flag className={`w-6 h-6 ${colors.accentGreenText}`} />
                    <h3 className={`text-2xl font-bold ${colors.accentGreenText}`}>脫困之道</h3>
                 </div>
                 <ul className="space-y-4 text-sm text-[#5E5C5C]">
                    <li><strong>建立合作關係：</strong>探索早期回憶、夢境、家庭星座。</li>
                    <li><strong>導正主觀知覺：</strong>讓主觀現實與客觀現實一致。</li>
                    <li><strong>發展社群情感：</strong>增加歸屬感，關懷他人。</li>
                    <li><strong>修正人生目標：</strong>重點是修正目標，信念系統隨之改變。</li>
                 </ul>
              </div>
           </div>
        </section>

        {/* --- 4. 治療歷程 (Process) --- */}
        <section className="space-y-8">
           <div className="flex items-center gap-3 mb-4">
            <Activity className={`w-6 h-6 ${colors.accentBlueText}`} />
            <h2 className={`text-3xl font-bold ${colors.primaryText}`}>治療歷程：四大階段</h2>
          </div>

          <div className="relative border-l-2 border-[#E0E0DB] ml-6 space-y-12">
             
             {/* Stage 1 */}
             <div className="relative pl-8">
                <span className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${colors.accentBlue}`}></span>
                <h3 className={`text-xl font-bold ${colors.accentBlueText} mb-2`}>階段一：建立關係</h3>
                <p className={`${colors.primaryText} text-sm mb-2`}>
                   建立正向的<strong>合作關係 (Person to Person)</strong>。幫助當事人覺察優點而非缺陷。
                </p>
                <div className="bg-white p-3 rounded border border-[#E0E0DB] inline-block text-xs text-[#8C8A88]">
                   技術：專注、同理傾聽、指出症狀下的目的。
                </div>
             </div>

             {/* Stage 2 */}
             <div className="relative pl-8">
                <span className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${colors.accentPink}`}></span>
                <h3 className={`text-xl font-bold ${colors.accentPinkText} mb-2`}>階段二：評估心理動力</h3>
                <p className={`${colors.primaryText} text-sm mb-4`}>
                   生活型態評估 (Lifestyle Assessment)。包含主觀式晤談（生命故事）與客觀式晤談。
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                   <div className={`${colors.card} p-4 rounded shadow-sm border border-[#E0E0DB]`}>
                      <strong className="text-[#5E5C5C] text-sm block mb-2">家庭星座 Family Constellation</strong>
                      <p className="text-xs text-[#8C8A88]">透過原生家庭互動，形成獨特自我概念。心理地位比出生序重要。</p>
                   </div>
                   <div className={`${colors.card} p-4 rounded shadow-sm border border-[#E0E0DB]`}>
                      <strong className="text-[#5E5C5C] text-sm block mb-2">早期回憶 Early Recollection</strong>
                      <p className="text-xs text-[#8C8A88]">投射出「基本信念」與「基本錯誤」。了解生活目標與動機。</p>
                   </div>
                </div>
                {/* Image Placeholder: Family Constellation Map */}
                <div className="mt-4 bg-[#EAEAE5] h-32 rounded flex items-center justify-center">
                   {/* 請在此處插入照片：家庭星座圖 或 早期回憶分析圖 */}
                   <p className="text-[#8C8A88] text-xs"></p>
                </div>
             </div>

             {/* Stage 3 */}
             <div className="relative pl-8">
                <span className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${colors.accentYellow}`}></span>
                <h3 className={`text-xl font-bold ${colors.accentYellowText} mb-2`}>階段三：鼓勵自我了解與領悟</h3>
                <p className={`${colors.primaryText} text-sm mb-2`}>
                   <strong>領悟 (Insight)：</strong>了解行為背後的目的。
                </p>
                <p className={`text-xs text-[#8C8A88] italic`}>
                   「我的看法可能是錯的，但對我來說好像是...」<br/>
                   詮釋焦點：此時此地的行為動機與基本錯誤的形成。
                </p>
             </div>

             {/* Stage 4 */}
             <div className="relative pl-8">
                <span className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${colors.accentGreen}`}></span>
                <h3 className={`text-xl font-bold ${colors.accentGreenText} mb-2`}>階段四：重新定向與再教育</h3>
                <p className={`${colors.primaryText} text-sm mb-2`}>
                   行動導向。將領悟化為行動。<strong>鼓勵 (Encouragement)</strong> 是關鍵解毒劑。
                </p>
                <ul className="list-disc pl-4 text-xs text-[#8C8A88] space-y-1">
                   <li>演出「彷彿我就是我想成為的那個人」 (Acting as if)。</li>
                   <li>製造不同：在生活中做些不同既往的行為。</li>
                </ul>
             </div>
          </div>
        </section>

        {/* --- 5. 應用與總結 --- */}
        <section className="grid md:grid-cols-2 gap-8">
           <div className={`${colors.card} p-8 rounded-2xl shadow-sm space-y-4`}>
              <div className="flex items-center gap-3">
                 <Anchor className={`w-5 h-5 ${colors.accentBlueText}`} />
                 <h3 className={`text-xl font-bold ${colors.primaryText}`}>應用範圍</h3>
              </div>
              <div className="space-y-4 text-sm text-[#5E5C5C]">
                 <div>
                    <strong>家庭諮商：</strong>重視家庭氣氛 (Family Atmosphere) 與星座。父母關係是子女成長的榜樣。
                 </div>
                 <div>
                    <strong>團體諮商：</strong>團體是「形塑價值觀」的媒介。提供歸屬感與社會聯繫，消除自卑感。
                 </div>
              </div>
           </div>

           <div className={`${colors.card} p-8 rounded-2xl shadow-sm bg-[#F9F9F9] space-y-4`}>
              <div className="flex items-center gap-3">
                 <MessageCircle className={`w-5 h-5 ${colors.accentPinkText}`} />
                 <h3 className={`text-xl font-bold ${colors.primaryText}`}>總結</h3>
              </div>
              <p className="text-sm text-[#5E5C5C] leading-relaxed">
                 個體心理學假定人們受社會因素驅動，是自己生活型態的<strong>創造者</strong>。
                 治療不在於治癒疾病，而在於<strong>恢復勇氣</strong>，修正錯誤信念，並充分融入社會事務。
              </p>
           </div>
        </section>

        {/* ================= AUTHOR SIGNATURE ================= */}
        <section className="py-12 bg-[#F4F4F0] text-center border-t border-[#E0E0DB]">
          <p className="text-sm text-[#5E5C5C]">
            本文由任祈蔚 Wade Jen 諮商心理師撰寫
          </p>
        </section>

      </div>
    </div>
  );
};

export default AdlerianTherapyChapter;