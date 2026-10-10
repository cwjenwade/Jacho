import React from 'react';
import { 
  Leaf, 
  Layers, 
  Activity, 
  MessageSquare, 
  Eye, 
  Zap, 
  Shield, 
  Users,
  Box
} from 'lucide-react';

const GestaltTherapyChapter = () => {
  // Morandi Color Palette
  const colors = {
    bg: "bg-[#F4F5F0]", // Warm Rice Paper
    card: "bg-[#FFFFFF]",
    primaryText: "text-[#5C5C5C]", // Charcoal
    secondaryText: "text-[#8A8A85]", // Warm Grey
    accentGreen: "bg-[#AABCB1]", // Sage Green
    accentGreenText: "text-[#5A6E63]",
    accentClay: "bg-[#C8B0A5]", // Muted Clay
    accentClayText: "text-[#7D6358]",
    accentBlue: "bg-[#A7B2B8]", // Foggy Blue
    accentBlueText: "text-[#58646B]",
    accentYellow: "bg-[#DAD3C1]", // Dried Wheat
    accentYellowText: "text-[#7A725E]",
    border: "border-[#E6E4DD]"
  };

  return (
    <div className={`min-h-screen ${colors.bg} p-6 md:p-12 font-sans tracking-wide`}>
      <div className="max-w-6xl mx-auto space-y-16">

        {/* --- Header Section --- */}
        <header className="text-center space-y-8 mb-16 relative">
          <div className="inline-block p-5 rounded-full bg-white shadow-sm mb-4">
            <Leaf className={`w-14 h-14 ${colors.accentGreenText}`} />
          </div>
          
          <div className="relative z-10">
            <h1 className={`text-4xl md:text-6xl font-serif font-bold ${colors.primaryText} mb-6`}>
              完形治療
            </h1>
            <div className={`flex flex-wrap justify-center gap-4 ${colors.secondaryText} text-sm font-medium uppercase tracking-widest`}>
              <span className="px-3 py-1 bg-white rounded shadow-sm">Fritz Perls</span>
              <span className="px-3 py-1 bg-white rounded shadow-sm">Erving Polster</span>
              <span className="px-3 py-1 bg-white rounded shadow-sm">Miriam Polster</span>
            </div>
          </div>

          {/* Quote Block */}
          <div className="max-w-3xl mx-auto mt-8 relative">
             <div className="absolute -top-6 -left-4 text-6xl text-[#E6E4DD] font-serif">“</div>
             <blockquote className={`text-lg md:text-xl font-serif italic ${colors.primaryText} bg-white p-8 rounded-2xl shadow-sm border border-[#E6E4DD]`}>
               Perls 提醒我們要認真當自己，玫瑰花要發展成玫瑰花，椰子樹要發展成椰子樹，人只有透過自己的真實本質，才能超越自己。我就是我...
               <footer className="text-sm text-[#8A8A85] mt-4 text-right">— Perls, 1973</footer>
             </blockquote>
          </div>
          
          {/* Image Placeholder: Fritz Perls Portrait */}
          <div className="mt-8 flex justify-center">
             <div className="w-32 h-32 rounded-full bg-[#E6E4DD] overflow-hidden flex items-center justify-center relative group">
                {/*  */}
                <p className="text-xs text-[#8A8A85] z-10">[Image: Fritz Perls]</p>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
             </div>
          </div>
        </header>

        {/* --- 1. 導論 & 核心哲學 --- */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className={`${colors.card} p-8 rounded-2xl shadow-sm border border-[#E6E4DD] space-y-6`}>
            <div className="flex items-center gap-3">
              <Eye className={`w-6 h-6 ${colors.accentBlueText}`} />
              <h2 className={`text-2xl font-bold ${colors.primaryText}`}>導論：現象學與存在主義</h2>
            </div>
            <p className={`${colors.primaryText} leading-relaxed text-sm`}>
              著重於當事人對現實的知覺。採存在主義觀點，認為人們不斷地形塑、蛻變及再發現自我的歷程。
              <br/><br/>
              <strong>核心聚焦：</strong>此時此地 (Here and Now)，正在做什麼和如何做。
              <br/>
              <strong>場地論 (Field Theory)：</strong>場地為獨立於觀察者而存在的事物，需透過觀察者的觀點而被認識。重視「整體大於部分之和」。
            </p>
            {/* Image Placeholder: Figure-Ground Principle */}
            <div className="w-full h-32 bg-[#F4F5F0] rounded-xl flex items-center justify-center border border-dashed border-[#A7B2B8]">
               {/*  */}
               <p className="text-xs text-[#58646B]">[Image: Gestalt Figure-Ground Illustration]</p>
            </div>
          </div>

          <div className={`${colors.card} p-8 rounded-2xl shadow-sm border border-[#E6E4DD] space-y-6`}>
             <div className="flex items-center gap-3">
              <Layers className={`w-6 h-6 ${colors.accentClayText}`} />
              <h2 className={`text-2xl font-bold ${colors.primaryText}`}>人性觀：剝洋蔥的層次</h2>
            </div>
            <p className="text-sm text-[#5C5C5C]">
               Perls 主張個體要具備成熟的心理，需如同剝洋蔥般依序經歷五個層次：
            </p>
            <div className="space-y-2 relative pl-4 border-l-2 border-[#C8B0A5]">
               {[
                 { layer: "1. 虛假層 (Phony)", desc: "以非本真或規劃好的方式互動 (如：你好嗎)。" },
                 { layer: "2. 恐懼層 (Phobic)", desc: "迴避心理層次的苦痛，不願承認關係已結束。" },
                 { layer: "3. 僵局層 (Impasse)", desc: "害怕改變或移動的點，覺得被侷限，卡住了。" },
                 { layer: "4. 內爆層 (Implosive)", desc: "開始知覺到真實感受，但不太處理情感。" },
                 { layer: "5. 外爆層 (Explosive)", desc: "脫去虛假，活出真實自我。" }
               ].map((item, i) => (
                 <div key={i} className="relative pl-6 py-1">
                    <span className={`absolute left-0 top-3 w-3 h-3 rounded-full ${colors.accentClay}`}></span>
                    <strong className="text-[#7D6358]">{item.layer}</strong>
                    <p className="text-xs text-[#8A8A85]">{item.desc}</p>
                 </div>
               ))}
            </div>
            {/* Image Placeholder: Layers of Neurosis Onion Model */}
            <div className="absolute right-8 top-8 opacity-10 w-24 h-24">
               {/*  */}
            </div>
          </div>
        </section>

        {/* --- 2. 完形循環與接觸 (Cycle of Experience) --- */}
        <section className={`${colors.card} p-8 rounded-2xl shadow-sm border border-[#E6E4DD]`}>
           <div className="flex items-center gap-3 mb-8">
            <Activity className={`w-6 h-6 ${colors.accentGreenText}`} />
            <h2 className={`text-3xl font-bold ${colors.primaryText}`}>完形循環：接觸與抗拒</h2>
          </div>

          <div className="space-y-8">
             <div className="grid md:grid-cols-5 gap-4 text-center">
                {[
                  { step: "1. 感知/覺察", desc: "Sensation & Awareness", color: colors.accentGreen },
                  { step: "2. 動員能量", desc: "Mobilization", color: colors.accentGreen },
                  { step: "3. 接觸", desc: "Contact", color: colors.accentClay },
                  { step: "4. 解決/完成", desc: "Resolution/Closure", color: colors.accentBlue },
                  { step: "5. 消退", desc: "Withdrawal", color: colors.accentYellow }
                ].map((s, i) => (
                  <div key={i} className="flex flex-col items-center group">
                     <div className={`w-full p-4 rounded-xl ${s.color} bg-opacity-20 border border-opacity-30 border-gray-400 mb-2 transition-all group-hover:bg-opacity-40`}>
                        <span className="font-bold text-[#5C5C5C] text-sm block">{s.step}</span>
                     </div>
                     <span className="text-xs text-[#8A8A85]">{s.desc}</span>
                     {i < 4 && <div className="hidden md:block w-full h-0.5 bg-[#E6E4DD] mt-2 relative"><div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-[#E6E4DD]"></div></div>}
                  </div>
                ))}
             </div>
             
             {/* Image Placeholder: Gestalt Cycle Diagram */}
             <div className="w-full h-40 bg-[#F9F9F7] rounded-xl flex items-center justify-center border border-[#E6E4DD] relative">
                {/*  */}
                <p className="text-[#5A6E63] text-sm font-medium">[Image: Gestalt Cycle of Experience & Blockages]</p>
             </div>

             <div className="bg-[#F4F5F0] p-6 rounded-xl">
                <h3 className={`text-xl font-bold ${colors.primaryText} mb-4 flex items-center gap-2`}>
                   <Shield className="w-5 h-5" /> 抗拒接觸機轉 (Boundary Disturbances)
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                   {[
                     { name: "內攝 (Introjection)", desc: "不加思索，未經消化就接受他人的信念。" },
                     { name: "投射 (Projection)", desc: "把部分自我屏除丟給外在。反向歸因。" },
                     { name: "迴攝 (Retroflection)", desc: "想對別人做的事，轉回對自己做 (如自傷)。" },
                     { name: "解離/折射 (Deflection)", desc: "以幽默、抽象概括迴避直接接觸。" },
                     { name: "融合 (Confluence)", desc: "界線不清，沒有衝突，盲從他人。" },
                     { name: "自我中心 (Egotism)", desc: "僵化保持界限，觀看自己而非投入體驗。" }
                   ].map((mech, i) => (
                      <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-[#E6E4DD]">
                         <strong className="block text-[#5C5C5C] text-sm mb-1">{mech.name}</strong>
                         <p className="text-xs text-[#8A8A85]">{mech.desc}</p>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* --- 3. 治療歷程 (Therapy Process) --- */}
        <section className="grid md:grid-cols-2 gap-8">
           <div className={`${colors.card} p-8 rounded-2xl shadow-sm border-t-4 border-[#C8B0A5]`}>
              <div className="flex items-center gap-3 mb-4">
                 <Zap className={`w-6 h-6 ${colors.accentClayText}`} />
                 <h2 className={`text-2xl font-bold ${colors.primaryText}`}>治療目標與覺察</h2>
              </div>
              <p className="text-sm text-[#5C5C5C] mb-4">
                 目標：協助當事人獲得更多<strong>覺察 (Awareness)</strong>，進而擁有更多選擇。
                 <br/>
                 Zinker 指出，個人應充分發展對身體、感受與環境的覺察，並承認自己的經驗。
              </p>
              <div className="bg-[#F4F5F0] p-4 rounded-lg">
                 <strong className="text-[#7D6358] text-sm block mb-2">未竟事宜 (Unfinished Business)</strong>
                 <p className="text-xs text-[#8A8A85]">
                    未解決的情緒（怨恨、憤怒、罪惡感）形成情緒殘渣，阻礙當下覺察。能量被凍結。
                 </p>
              </div>
           </div>

           <div className={`${colors.card} p-8 rounded-2xl shadow-sm border-t-4 border-[#A7B2B8]`}>
              <div className="flex items-center gap-3 mb-4">
                 <Users className={`w-6 h-6 ${colors.accentBlueText}`} />
                 <h2 className={`text-2xl font-bold ${colors.primaryText}`}>治療關係 (I-Thou)</h2>
              </div>
              <p className="text-sm text-[#5C5C5C] mb-4">
                 <strong>我/汝 (I-Thou) 對話：</strong>治療者真誠地存在於當下，不以面質逼使改變，而是邀請當事人實驗。
              </p>
              <div className="space-y-2">
                 <div className="flex items-center gap-2 text-xs text-[#58646B]">
                    <Box className="w-4 h-4" /> <span><strong>語言風格：</strong>將「它」改為「我」，將「你」改為「我」。</span>
                 </div>
                 <div className="flex items-center gap-2 text-xs text-[#58646B]">
                    <Box className="w-4 h-4" /> <span><strong>問問題：</strong>改為直述句，負起責任。</span>
                 </div>
                 <div className="flex items-center gap-2 text-xs text-[#58646B]">
                    <Box className="w-4 h-4" /> <span><strong>捕捉瞬間：</strong>Fleshing out a flash。</span>
                 </div>
              </div>
               {/* Image Placeholder: I-Thou Relationship */}
               <div className="mt-4 h-20 bg-[#F4F5F0] rounded flex items-center justify-center">
                  {/*  */}
                  <p className="text-xs text-[#8A8A85]">[Image: I-Thou Relationship Concept]</p>
               </div>
           </div>
        </section>

        {/* --- 4. 治療技術 (Techniques) --- */}
        <section className="space-y-8">
           <div className="flex items-center gap-3 mb-4">
            <Box className={`w-6 h-6 ${colors.accentYellowText}`} />
            <h2 className={`text-3xl font-bold ${colors.primaryText}`}>完形實驗與技術</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Technique 1: Empty Chair */}
             <div className={`${colors.card} p-6 rounded-xl border border-[#E6E4DD] hover:shadow-md transition-shadow`}>
                <h3 className={`text-lg font-bold ${colors.primaryText} mb-2`}>空椅技術 (Empty Chair)</h3>
                <p className="text-xs text-[#8A8A85] mb-4">
                   角色互換工具。將幻想的「重要他人」帶入意識層面。「外化」內心投射，接觸被否認的部分。
                </p>
                {/* Image Placeholder: Empty Chair Setup */}
                <div className="w-full h-24 bg-[#F4F5F0] rounded flex items-center justify-center mb-2">
                   {/*  */}
                   <p className="text-xs text-[#5C5C5C]">[Image: Empty Chair Setup]</p>
                </div>
             </div>

             {/* Technique 2: Internal Dialogue */}
             <div className={`${colors.card} p-6 rounded-xl border border-[#E6E4DD] hover:shadow-md transition-shadow`}>
                <h3 className={`text-lg font-bold ${colors.primaryText} mb-2`}>內在對話 (Topdog/Underdog)</h3>
                <p className="text-xs text-[#8A8A85] mb-2">
                   <strong>優勝者 (Topdog)：</strong>正直、權威、命令、「應該」。
                   <br/>
                   <strong>劣敗者 (Underdog)：</strong>受害者、軟弱、無助、找藉口。
                </p>
                <p className="text-xs text-[#5C5C5C]">兩者爭奪控制權，導致問題無法解決。</p>
             </div>

             {/* Other Techniques */}
             <div className={`${colors.card} p-6 rounded-xl border border-[#E6E4DD] hover:shadow-md transition-shadow space-y-3`}>
                <div>
                   <h3 className={`text-sm font-bold ${colors.primaryText}`}>倒轉練習 (Reversal)</h3>
                   <p className="text-xs text-[#8A8A85]">扮演與自己相反的角色（如膽怯者扮演愛出風頭）。</p>
                </div>
                <div>
                   <h3 className={`text-sm font-bold ${colors.primaryText}`}>誇大練習 (Exaggeration)</h3>
                   <p className="text-xs text-[#8A8A85]">重複誇大動作或姿勢，強化背後的感覺。</p>
                </div>
                <div>
                   <h3 className={`text-sm font-bold ${colors.primaryText}`}>停留在感覺中</h3>
                   <p className="text-xs text-[#8A8A85]">鼓勵當事人留在想逃離的痛苦感覺中。</p>
                </div>
             </div>
          </div>
        </section>

        {/* --- Footer Note --- */}
        <section className={`${colors.card} p-8 rounded-2xl shadow-sm bg-[#F9F9F7] mt-8 text-center`}>
           <MessageSquare className={`w-8 h-8 ${colors.accentClayText} mx-auto mb-4`} />
           <p className={`text-sm ${colors.primaryText} italic max-w-2xl mx-auto`}>
              「實驗給人們系統化從經驗中學習的機會。完形實驗本身沒什麼意義，一切都是為了使當事人變得更有自覺，且願意朝自己所要的方向去改變。」
           </p>
           <p className="text-xs text-[#8A8A85] mt-4">
              注意：完形治療會引發情緒高度張力，治療師需具備敏銳的調和能力，避免僅引發戲劇性宣洩而無覺察。
           </p>
        </section>

      </div>
    </div>
  );
};

export default GestaltTherapyChapter;