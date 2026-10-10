import React from 'react';
import { 
  Brain, 
  Scale, 
  Shield, 
  Users, 
  Baby, 
  Activity, 
  Eye, 
  Ghost, 
  Layers, 
  ArrowRight,
  Sparkles,
  Anchor
} from 'lucide-react';

const PsychoanalysisChapter = () => {
  // Morandi Color Palette
  const colors = {
    bg: "bg-[#F5F5F0]", // Oatmeal
    card: "bg-[#FFFFFF]",
    primaryText: "text-[#5D5D5D]", // Dark Grey
    secondaryText: "text-[#8E8E93]", // Light Grey
    accentBlue: "bg-[#B4C5CF]", // Dusty Blue
    accentBlueText: "text-[#7B909A]",
    accentGreen: "bg-[#C3CDC3]", // Sage Green
    accentGreenText: "text-[#7A8A7A]",
    accentPink: "bg-[#DBCBCB]", // Dusty Pink
    accentPinkText: "text-[#9A8484]",
    accentBrown: "border-[#D6Cfc7]", // Warm Grey Border
  };

  return (
    <div className={`min-h-screen ${colors.bg} p-6 md:p-12 font-sans tracking-wide`}>
      <div className="max-w-5xl mx-auto space-y-12">

        {/* --- Header Section --- */}
        <header className="text-center space-y-4 mb-16">
          <div className="inline-block p-4 rounded-full bg-white shadow-sm mb-4">
            <Brain className={`w-12 h-12 ${colors.accentBlueText}`} />
          </div>
          <h1 className={`text-4xl md:text-5xl font-serif font-bold ${colors.primaryText}`}>
            精神分析治療
          </h1>
          <div className={`flex justify-center items-center gap-6 ${colors.secondaryText} text-lg font-serif italic`}>
            <span>Sigmund Freud</span>
            <span>•</span>
            <span>Erik Erikson</span>
          </div>
        </header>

        {/* --- 1. 導論 & 人性觀 --- */}
        <section className={`${colors.card} rounded-2xl shadow-sm border border-[#EBEBEB] overflow-hidden`}>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 space-y-6">
              <h2 className={`text-2xl font-bold ${colors.primaryText} flex items-center gap-3`}>
                <Sparkles className="w-6 h-6" />
                導論與人性觀
              </h2>
              <p className={`${colors.primaryText} leading-relaxed`}>
                Freud 為心理治療帶來新的視野與範疇，聚焦於潛意識的影響作用。個體受潛意識與早年經驗影響，困擾來自於潛意識與早年經驗被壓抑，形成三我協調的衝突。
              </p>
              <div className="bg-[#F9F9F9] p-4 rounded-xl border-l-4 border-[#B4C5CF]">
                <p className={`text-sm ${colors.primaryText}`}>
                  <strong>決定論：</strong>行為是由各種非理性力量、潛意識動機，於生命的前六年在心理發展的關鍵時期所演變出來的。
                </p>
              </div>
              <ul className={`space-y-3 ${colors.secondaryText} text-sm`}>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span> 
                  人何以受困？過多能量被壓抑凍結於潛意識無法釋放。
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  唯有釋放潛意識的記憶，強化「自我」ego，才能朝向適應人格。
                </li>
              </ul>
            </div>
            {/* Image Placeholder */}
            <div className="bg-[#EAEAEA] min-h-[300px] flex items-center justify-center relative group">
              {/* 請在此處插入照片：Freud 照片或冰山理論圖 */}
              <div className="text-center p-6">
                <p className="text-[#8E8E93] font-medium">

[Image of Sigmund Freud or Iceberg Model]
</p>
                <p className="text-xs text-[#8E8E93] mt-2">建議插入：冰山理論圖示，顯示意識與潛意識的比例</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. 本能與人格結構 --- */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Layers className={`w-6 h-6 ${colors.accentPinkText}`} />
            <h2 className={`text-2xl font-bold ${colors.primaryText}`}>本能與人格結構</h2>
          </div>
          
          {/* Instincts */}
          <div className={`${colors.card} p-6 rounded-xl shadow-sm mb-6`}>
            <h3 className={`text-lg font-bold mb-3 ${colors.accentBlueText}`}>本能 Instincts</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-[#5D5D5D]">
              <div>
                <strong className="block mb-1 text-lg">生之本能 (Life Instincts)</strong>
                <p>由性慾力 Libido 擴展。導向成長、發展與創造。目標為趨樂避苦。</p>
              </div>
              <div>
                <strong className="block mb-1 text-lg">死之本能 (Death Instincts)</strong>
                <p>解釋攻擊驅力。人們常以攻擊行為呈現潛意識中的死之意願或傷人意願 (Thanatos)。</p>
              </div>
            </div>
          </div>

          {/* Id, Ego, Superego Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Id */}
            <div className={`${colors.card} p-6 rounded-xl shadow-sm border-t-4 border-[#DBCBCB]`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-[#9A8484]">本我 Id</h3>
                <Baby className="w-5 h-5 text-[#9A8484]" />
              </div>
              <p className="text-sm text-[#5D5D5D] leading-relaxed mb-4">
                人格的原初系統，盲目、渴求。由<strong>享樂原則 (Pleasure Principle)</strong> 支配。
              </p>
              <div className="text-xs text-[#8E8E93] bg-[#FAF9F6] p-3 rounded">
                <strong>Primary Process:</strong> 形成對事物想像以降低受挫敗驅力（如嬰兒幻想乳頭）。
              </div>
            </div>

            {/* Ego */}
            <div className={`${colors.card} p-6 rounded-xl shadow-sm border-t-4 border-[#B4C5CF]`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-[#7B909A]">自我 Ego</h3>
                <Scale className="w-5 h-5 text-[#7B909A]" />
              </div>
              <p className="text-sm text-[#5D5D5D] leading-relaxed mb-4">
                人格的執行者，接觸現實。由<strong>現實原則 (Reality Principle)</strong> 支配。
              </p>
              <div className="text-xs text-[#8E8E93] bg-[#FAF9F6] p-3 rounded">
                <strong>Secondary Process:</strong> 邏輯性思考，驗證並發展滿足需求的計畫。
              </div>
            </div>

            {/* Superego */}
            <div className={`${colors.card} p-6 rounded-xl shadow-sm border-t-4 border-[#C3CDC3]`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-[#7A8A7A]">超我 Superego</h3>
                <Shield className="w-5 h-5 text-[#7A8A7A]" />
              </div>
              <p className="text-sm text-[#5D5D5D] leading-relaxed mb-4">
                道德誡律與判斷標準。追求完美而非享樂。由<strong>道德原則 (Moral Principle)</strong> 支配。
              </p>
              <div className="text-xs text-[#8E8E93] bg-[#FAF9F6] p-3 rounded">
                包含理想自我 (Ego Ideal) 與良心 (Conscience)。
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. 意識、潛意識與焦慮 --- */}
        <section className={`${colors.card} rounded-2xl p-8 shadow-sm`}>
           <div className="flex flex-col md:flex-row gap-12">
             <div className="flex-1 space-y-6">
                <h2 className={`text-2xl font-bold ${colors.primaryText} flex items-center gap-3`}>
                  <Ghost className="w-6 h-6" />
                  焦慮 Anxiety
                </h2>
                <p className="text-[#5D5D5D]">當自我無法以理性的方式控制焦慮，就需要倚靠自我防衛。三我的衝突造成焦慮。</p>
                <div className="space-y-4">
                  {[
                    { title: "現實焦慮", desc: "來自外界危險的恐懼感。" },
                    { title: "神經質焦慮", desc: "害怕本能失控導致受罰。" },
                    { title: "道德焦慮", desc: "害怕受到良心譴責（罪惡感）。" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#B4C5CF]"></div>
                      <div>
                        <span className="font-bold text-[#5D5D5D]">{item.title}：</span>
                        <span className="text-[#8E8E93] text-sm">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-[#F5F5F0] rounded-lg">
                   <h4 className="font-bold text-[#5D5D5D] mb-2">自我防衛機轉 Ego-Defense</h4>
                   <p className="text-xs text-[#8E8E93]">否認與扭曲現實，且在潛意識層面運作。適度使用是正常的，過度則帶來困擾。</p>
                </div>
             </div>
             
             {/* Image Placeholder */}
             <div className="flex-1 bg-[#F9F9F9] rounded-xl border border-dashed border-[#D6Cfc7] flex items-center justify-center p-4">
                {/* 請在此處插入照片：三我衝突圖示 或 焦慮示意圖 */}
               <div className="text-center">
                  <p className="text-[#8E8E93] font-medium">

[Image of Id, Ego, Superego Conflict]
</p>
                  <p className="text-xs text-[#8E8E93] mt-2">本我、自我、超我相互拉扯的示意圖</p>
               </div>
             </div>
           </div>
        </section>

        {/* --- 4. 人格發展 (Timeline Style) --- */}
        <section className="space-y-8">
           <div className="flex items-center gap-3">
            <Activity className={`w-6 h-6 ${colors.accentGreenText}`} />
            <h2 className={`text-2xl font-bold ${colors.primaryText}`}>人格發展：早期發展的重要性</h2>
          </div>

          {/* Image Placeholder for Stages */}
          <div className="w-full bg-[#EAEAEA] h-48 rounded-xl flex items-center justify-center mb-8 relative overflow-hidden">
             {/* 請在此處插入照片：佛洛伊德性心理發展階段圖 */}
             <div className="text-center z-10">
                <p className="text-[#5D5D5D] font-medium"></p>
             </div>
             <div className="absolute inset-0 bg-gradient-to-r from-[#B4C5CF] to-[#C3CDC3] opacity-20"></div>
          </div>

          <div className="space-y-0 relative border-l-2 border-[#D6Cfc7] ml-4 md:ml-8">
            {[
              { 
                stage: "口腔期 Oral Stage", time: "0-18M", 
                desc: "議題：信任與依賴。若不滿足則產生不安全感、害怕親密、低自尊。",
                color: colors.accentBlueText
              },
              { 
                stage: "肛門期 Anal Stage", time: "18M-3Y", 
                desc: "議題：排便控制、自主感。過度愛整潔 (Anal retentive) 或破壞 (Anal expulsive)。",
                color: colors.accentPinkText
              },
              { 
                stage: "性蕾期 Phallic Stage", time: "3Y-6Y", 
                desc: "議題：閹割焦慮、性別認同。Penis envy。發展困難影響未來性別認同。",
                color: colors.accentGreenText
              },
              { 
                stage: "潛伏期 Latency", time: "6Y-12Y", 
                desc: "能量被壓抑，專注於學校與交友。",
                color: colors.secondaryText
              },
              { 
                stage: "性器期 Genital Stage", time: "12Y+", 
                desc: "能量焦點轉移到異性。心理成熟的階段。",
                color: colors.primaryText
              }
            ].map((item, index) => (
              <div key={index} className="mb-8 ml-8 relative">
                <span className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#D6Cfc7]`}></span>
                <h3 className={`text-lg font-bold ${item.color}`}>{item.stage} <span className="text-xs text-[#8E8E93] font-normal ml-2">{item.time}</span></h3>
                <p className="text-[#5D5D5D] text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className={`${colors.card} p-6 rounded-xl border border-[#EBEBEB]`}>
            <h3 className="text-lg font-bold text-[#5D5D5D] mb-2">Erikson 心理社會發展論</h3>
            <p className="text-sm text-[#8E8E93]">
              強調自我在人的一生中，追求精進與圓熟勝任的能力。危機 (Crisis) 是生命的轉捩點。Erikson 補足了 Freud 對社會環境與自我作用解釋的不足。
            </p>
          </div>
        </section>

        {/* --- 5. 治療歷程與技術 --- */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Goals & Role */}
          <div className={`${colors.card} p-8 rounded-2xl shadow-sm space-y-6`}>
            <h2 className={`text-xl font-bold ${colors.primaryText} mb-4`}>治療目標與角色</h2>
            <ul className="space-y-4 text-sm text-[#5D5D5D]">
              <li className="flex gap-3">
                <Eye className="w-5 h-5 shrink-0 text-[#B4C5CF]" />
                <span>
                  <strong>目標：</strong>將潛意識化為意識，強化自我功能。不僅是智性領悟，更要「重新經驗與自我了解相關聯的感受」。
                </span>
              </li>
              <li className="flex gap-3">
                <Users className="w-5 h-5 shrink-0 text-[#B4C5CF]" />
                <span>
                  <strong>空白螢幕 (Blank-screen)：</strong>治療師維持匿名、中立，不自我揭露，讓當事人產生移情關係。
                </span>
              </li>
              <li className="flex gap-3">
                <ArrowRight className="w-5 h-5 shrink-0 text-[#B4C5CF]" />
                <span>
                  <strong>徹底修通 (Working-through)：</strong>探索潛意識題材與防衛，重新選擇生活方式。
                </span>
              </li>
            </ul>
          </div>

          {/* Techniques */}
          <div className={`${colors.card} p-8 rounded-2xl shadow-sm space-y-6 bg-[#F9F9F9]`}>
            <h2 className={`text-xl font-bold ${colors.primaryText} mb-4`}>六大基本技術</h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                "維持分析的架構 (Maintaining framework)",
                "自由聯想 (Free Association)",
                "詮釋 (Interpretation)",
                "夢的解析 (Dream Analysis)",
                "抗拒的分析 (Resistance)",
                "移情作用的分析 (Transference)"
              ].map((tech, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-white rounded shadow-sm">
                  <span className="text-[#C3CDC3] font-bold">0{i+1}.</span>
                  <span className="text-[#5D5D5D] text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 6. 當代發展：客體關係與 BPT --- */}
        <section className="space-y-6">
           <div className="flex items-center gap-3">
            <Anchor className={`w-6 h-6 ${colors.accentBlueText}`} />
            <h2 className={`text-2xl font-bold ${colors.primaryText}`}>當代發展：客體關係與其他</h2>
          </div>

          <div className={`${colors.card} rounded-2xl overflow-hidden border border-[#EBEBEB]`}>
             <div className="p-8">
                <h3 className="text-lg font-bold text-[#5D5D5D] mb-4">Margret Mahler 自體發展階段</h3>
                <div className="grid md:grid-cols-4 gap-4 text-sm text-[#8E8E93] text-center">
                  <div className="p-4 bg-[#F5F5F0] rounded">
                    <strong className="block text-[#5D5D5D] mb-2">1. 正常自閉</strong>
                    <span className="text-xs">0-4週<br/>混屯未分化</span>
                  </div>
                  <div className="p-4 bg-[#F5F5F0] rounded">
                    <strong className="block text-[#5D5D5D] mb-2">2. 共生</strong>
                    <span className="text-xs">3-8月<br/>依賴、情緒共鳴</span>
                  </div>
                  <div className="p-4 bg-[#F5F5F0] rounded">
                    <strong className="block text-[#5D5D5D] mb-2">3. 分離/個體化</strong>
                    <span className="text-xs">脫離共生<br/>矛盾衝突</span>
                  </div>
                  <div className="p-4 bg-[#F5F5F0] rounded">
                    <strong className="block text-[#5D5D5D] mb-2">4. 客體恆存</strong>
                    <span className="text-xs">3歲左右<br/>穩固自我感</span>
                  </div>
                </div>
                
                {/* Image Placeholder */}
                <div className="mt-8 bg-[#EAEAEA] h-40 rounded flex items-center justify-center">
                   {/* 請在此處插入照片：Mahler 分離個體化圖解 */}
                   <p className="text-[#8E8E93] text-sm font-medium"></p>
                </div>
             </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-[#DBCBCB] bg-opacity-20 p-6 rounded-xl">
               <h3 className="font-bold text-[#9A8484] mb-2">自戀型 (NPD) vs 邊緣型 (BPD)</h3>
               <p className="text-sm text-[#5D5D5D] leading-relaxed">
                 <strong>NPD：</strong>誇大、剝削、渴望讚賞、掩飾脆弱。<br/>
                 <strong>BPD：</strong>個體化遭拒、情緒不穩、衝動、無法忍受焦慮。
               </p>
             </div>
             <div className="bg-[#B4C5CF] bg-opacity-20 p-6 rounded-xl">
               <h3 className="font-bold text-[#7B909A] mb-2">短期動力心理治療 (BPT)</h3>
               <p className="text-sm text-[#5D5D5D] leading-relaxed">
                 約 10-25 次。不強求自由聯想，採用較主動與面質性技巧。不適用於嚴重個案，適合有動機的精神官能症者。
               </p>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default PsychoanalysisChapter;