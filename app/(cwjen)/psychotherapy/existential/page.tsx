import React from 'react';
import { 
  BookOpen, 
  Compass, 
  Feather, 
  Users, 
  Eye, 
  Unlock, 
  Fingerprint, 
  Search, 
  Hourglass, 
  Heart,
  Anchor,
  Activity
} from 'lucide-react';

const ExistentialTherapyChapter = () => {
  // Morandi Color Palette
  const colors = {
    bg: "bg-[#F5F5F0]", // Warm Rice Paper
    card: "bg-[#FFFFFF]",
    primaryText: "text-[#5B5B5B]", // Dark Grey
    secondaryText: "text-[#8C8C8C]", // Light Grey
    accentGreen: "bg-[#9DAD9F]", // Sage Green
    accentGreenText: "text-[#5F7161]",
    accentBlue: "bg-[#A4B0BE]", // Dusty Blue
    accentBlueText: "text-[#57606F]",
    accentPink: "bg-[#D2B48C]", // Muted Tan/Pink
    accentPinkText: "text-[#8D6E63]",
    accentPurple: "bg-[#BFAEBC]", // Muted Mauve
    accentPurpleText: "text-[#6D5A68]",
    border: "border-[#E0E0E0]"
  };

  return (
    <div className={`min-h-screen ${colors.bg} p-6 md:p-12 font-sans tracking-wide text-[#4A4A4A]`}>
      <div className="max-w-6xl mx-auto space-y-16">

        {/* --- Header Section --- */}
        <header className="text-center space-y-6 mb-16">
          <div className="inline-block p-5 rounded-full bg-white shadow-sm mb-2">
            <Feather className={`w-14 h-14 ${colors.accentGreenText}`} />
          </div>
          <h1 className={`text-4xl md:text-6xl font-serif font-bold ${colors.primaryText}`}>
            存在主義治療
          </h1>
          <div className={`flex flex-wrap justify-center gap-6 ${colors.secondaryText} text-lg font-serif italic`}>
            <span>Victor Frankl</span>
            <span>•</span>
            <span>Rollo May</span>
            <span>•</span>
            <span>Irvin Yalom</span>
          </div>
          <p className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed mt-4 text-[#6B6B6B]">
            治療目標在幫助當事人探索「生命的賜予」。我們並非環境的犧牲者，我們是藉由自己的選擇成為現在的樣子。
          </p>
        </header>

        {/* --- 1. 歷史背景與代表人物 (Grid Layout) --- */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className={`w-6 h-6 ${colors.accentBlueText}`} />
            <h2 className={`text-2xl font-bold ${colors.primaryText}`}>歷史背景與代表人物</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cards for Philosophers */}
            <div className={`${colors.card} p-6 rounded-xl shadow-sm border-t-4 border-[#9DAD9F]`}>
              <h3 className="font-bold text-lg mb-2 text-[#5F7161]">Soren Kierkegaard</h3>
              <p className="text-xs text-[#8C8C8C] mb-2">丹麥哲學家 / 存在主義之父</p>
              <p className="text-sm leading-relaxed">
                關心 <strong>Angst (不安)</strong>。焦慮是養成自我的情境，沒有焦慮則會如神遊般生活。人是思考的主體，體驗「對我為真」的主觀真實。
              </p>
            </div>

            <div className={`${colors.card} p-6 rounded-xl shadow-sm border-t-4 border-[#A4B0BE]`}>
              <h3 className="font-bold text-lg mb-2 text-[#57606F]">Friedrich Nietzsche</h3>
              <p className="text-xs text-[#8C8C8C] mb-2">權力意志 / 上帝已死</p>
              <p className="text-sm leading-relaxed">
                強調主體性與意志。提出「永劫回歸」與虛無主義。在無意義的有限性之下，追求生命的意義並為其負責，是為自由。
              </p>
            </div>

            <div className={`${colors.card} p-6 rounded-xl shadow-sm border-t-4 border-[#D2B48C]`}>
              <h3 className="font-bold text-lg mb-2 text-[#8D6E63]">Martin Heidegger</h3>
              <p className="text-xs text-[#8C8C8C] mb-2">在世存有 (Dasein)</p>
              <p className="text-sm leading-relaxed">
                我們常以膚淺填滿生活。情緒讓我們了解是否真誠生活。提出「在世存有」，時間存在於「存有」之間。個人需時時刻刻體認存在。
              </p>
            </div>

             <div className={`${colors.card} p-6 rounded-xl shadow-sm border-t-4 border-[#BFAEBC]`}>
              <h3 className="font-bold text-lg mb-2 text-[#6D5A68]">Martin Buber</h3>
              <p className="text-xs text-[#8C8C8C] mb-2">I-Thou vs I-It</p>
              <p className="text-sm leading-relaxed">
                強調當下同在 (presence)。區分 I-It (物化) 與 I-Thou (真實關係)。許諾了能讓意義存在的情境。
              </p>
            </div>

            <div className={`${colors.card} p-6 rounded-xl shadow-sm border border-[#E0E0E0]`}>
              <h3 className="font-bold text-lg mb-2 text-[#5B5B5B]">Jean-Paul Sartre</h3>
              <p className="text-sm leading-relaxed">
                「存在先於本質」。我們的價值來自選擇。無法認清自由造成情緒問題。Bad-Faith (壞信念)：藉口「我無法改變，因為我的過去」。
              </p>
            </div>

             <div className={`${colors.card} p-6 rounded-xl shadow-sm border border-[#E0E0E0]`}>
              <h3 className="font-bold text-lg mb-2 text-[#5B5B5B]">Ludwig Binswanger</h3>
              <p className="text-sm leading-relaxed">
                現象學方法探索自我獨特性。「我們被拋擲在世界中」但依舊有責任計畫未來。治療危機是選擇的轉捩點。
              </p>
            </div>
          </div>
          
          {/* Image Placeholder: Philosophers Timeline or Portraits */}
          <div className="w-full bg-[#EAEAEA] h-48 rounded-xl flex items-center justify-center relative overflow-hidden group mt-6">
             
             <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
             <p className="absolute bottom-2 right-4 text-xs text-[#8C8C8C]">建議插入：存在主義哲學家時間軸圖示</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-[#F9F9F9] p-6 rounded-xl">
                 <h4 className="font-bold mb-2">當代人物</h4>
                 <ul className="space-y-2 text-sm">
                    <li><strong>James Bugental:</strong> 強調當下同在，幫助當事人對當下自我產生新發現。「抗拒」是生命課題，包含過度理智、好爭論、討好。</li>
                    <li><strong>Emmy Van Deurzen:</strong> 人不是生病，是「對生命厭倦或拙於生活」。面對生命矛盾，解決兩難。</li>
                 </ul>
              </div>
              <div className="bg-[#F9F9F9] p-6 rounded-xl">
                 <h4 className="font-bold mb-2">三巨頭共通點</h4>
                 <p className="text-sm mb-2">Victor Frankl (意義治療), Rollo May (焦慮與孤獨), Irvin Yalom (終極關懷)</p>
                 <div className="p-3 bg-white rounded border border-[#E0E0E0] text-center text-sm font-serif italic text-[#5F7161]">
                    「命定的存在 being，自由的本質，存在先於本質。」
                 </div>
              </div>
          </div>
        </section>

        {/* --- 2. 六大命題 (Core Concepts) --- */}
        <section className="space-y-12">
           <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className={`text-3xl font-bold ${colors.primaryText} mb-4`}>存在主義六大命題</h2>
              <p className="text-sm text-[#8C8C8C]">人之所以受困，與覺察、存在、回應終極關懷的姿態有關。</p>
           </div>

           <div className="grid md:grid-cols-2 gap-8">
              
              {/* Prop 1: Self-Awareness */}
              <div className={`${colors.card} p-8 rounded-2xl shadow-sm border-l-8 border-[#9DAD9F]`}>
                 <div className="flex items-center gap-3 mb-4">
                    <Eye className={`w-6 h-6 ${colors.accentGreenText}`} />
                    <h3 className="text-xl font-bold text-[#5F7161]">1. 自我覺察的能力</h3>
                 </div>
                 <p className="text-sm leading-relaxed mb-4">
                    自由、選擇、責任構成了自我覺察。我們本質是孤獨的，但可與他人連結。
                    <br/>
                    <strong>逃避：</strong>放棄選擇換取依賴的安全感。
                    <br/>
                    <strong>成長：</strong>接受限制，仍感到自己有價值。未來不需複製過去。
                 </p>
              </div>

              {/* Prop 2: Freedom & Responsibility */}
              <div className={`${colors.card} p-8 rounded-2xl shadow-sm border-l-8 border-[#A4B0BE]`}>
                 <div className="flex items-center gap-3 mb-4">
                    <Unlock className={`w-6 h-6 ${colors.accentBlueText}`} />
                    <h3 className="text-xl font-bold text-[#57606F]">2. 自由與責任</h3>
                 </div>
                 <p className="text-sm leading-relaxed mb-4">
                    我們渴望自由，卻常把自己定義成固定的存在以逃避自由 (Inauthenticity 不真誠)。
                    <br/>
                    <strong>存在的罪惡感 (Existential Guilt)：</strong>覺察到自己在逃避承諾，放棄選擇權。這是自我轉化的動力來源。
                    <br/>
                    <strong>真誠：</strong>忠於自己的價值，不讓他人替自己做決定。
                 </p>
              </div>

              {/* Prop 3: Identity & Relationship */}
              <div className={`${colors.card} p-8 rounded-2xl shadow-sm border-l-8 border-[#D2B48C]`}>
                 <div className="flex items-center gap-3 mb-4">
                    <Fingerprint className={`w-6 h-6 ${colors.accentPinkText}`} />
                    <h3 className="text-xl font-bold text-[#8D6E63]">3. 追求自我認同與他人關係</h3>
                 </div>
                 <p className="text-sm leading-relaxed mb-4">
                    <strong>存在的勇氣：</strong>脫下面具，面對「空無一物」的恐懼。
                    <br/>
                    <strong>孤獨感：</strong>必須獨自賦予意義。唯有能獨自站立，關係才是建立在自我實現而非剝奪上。
                    <br/>
                    治療者需分辨關係是「神經質依附」還是「生命肯定」。
                 </p>
              </div>

              {/* Prop 4: Meaning */}
              <div className={`${colors.card} p-8 rounded-2xl shadow-sm border-l-8 border-[#BFAEBC]`}>
                 <div className="flex items-center gap-3 mb-4">
                    <Compass className={`w-6 h-6 ${colors.accentPurpleText}`} />
                    <h3 className="text-xl font-bold text-[#6D5A68]">4. 意義的追尋</h3>
                 </div>
                 <p className="text-sm leading-relaxed mb-4">
                    <strong>無意義感：</strong>存在精神官能症 (Existential Neurosis) 與 存在的虛無 (Existential Vacuum)。
                    <br/>
                    <strong>意義治療 (Logotherapy)：</strong>即便受苦仍能探索意義。意義來自人與有價值事物的約定。愈理性追尋愈容易失之交臂。
                 </p>
              </div>

              {/* Prop 5: Anxiety */}
              <div className={`${colors.card} p-8 rounded-2xl shadow-sm border-l-8 border-[#8C8C8C]`}>
                 <div className="flex items-center gap-3 mb-4">
                    <Activity className="w-6 h-6 text-[#5B5B5B]" />
                    <h3 className="text-xl font-bold text-[#5B5B5B]">5. 焦慮是一種生存狀態</h3>
                 </div>
                 <p className="text-sm leading-relaxed mb-4">
                    <strong>正常焦慮：</strong>面對抉擇、自由與死亡的正常反應。是成長動力，不需被抑制。
                    <br/>
                    <strong>神經質焦慮：</strong>未被覺察，產生無力感。
                    <br/>
                    學習忍受曖昧與不確定，是從依賴到獨立的必經之路。
                 </p>
              </div>

              {/* Prop 6: Death */}
              <div className={`${colors.card} p-8 rounded-2xl shadow-sm border-l-8 border-[#5B5B5B]`}>
                 <div className="flex items-center gap-3 mb-4">
                    <Hourglass className="w-6 h-6 text-[#5B5B5B]" />
                    <h3 className="text-xl font-bold text-[#5B5B5B]">6. 覺察死亡與無存</h3>
                 </div>
                 <p className="text-sm leading-relaxed mb-4">
                    拒絕死亡，生命會走味。重視死亡才能重視現在。
                    <br/>
                    對死亡的覺察是對生命、對創造力產生熱情的泉源。
                 </p>
              </div>
           </div>

           {/* Image Placeholder: Four Ultimate Concerns */}
           <div className="bg-[#F0F2F5] rounded-xl p-8 flex flex-col items-center justify-center text-center">
              
              <p className="text-xs text-[#8C8C8C] mt-2">死亡、自由、孤獨、無意義</p>
           </div>
        </section>

        {/* --- 3. 治療歷程 (Therapy Process) --- */}
        <section className={`${colors.card} rounded-3xl overflow-hidden shadow-sm border border-[#E0E0E0]`}>
           <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E0E0E0]">
              
              <div className="p-8 space-y-6">
                 <div className="flex items-center gap-3">
                    <Anchor className={`w-6 h-6 ${colors.accentGreenText}`} />
                    <h3 className={`text-2xl font-bold ${colors.primaryText}`}>治療目標與脫困</h3>
                 </div>
                 <ul className="space-y-3 text-sm list-disc pl-5">
                    <li><strong>目標：</strong>邁向真誠 (Authenticity)，承擔責任，創造有價值的存在。</li>
                    <li><strong>脫困：</strong>首重覺察「當下」。接受命定與有限，做出符合意義的選擇。</li>
                    <li><strong>人為何受困：</strong>未能覺察，逃避終極關懷 (邊界處境)，無法接受生命有限性。</li>
                 </ul>
              </div>

              <div className="p-8 space-y-6">
                 <div className="flex items-center gap-3">
                    <Users className={`w-6 h-6 ${colors.accentPinkText}`} />
                    <h3 className={`text-2xl font-bold ${colors.primaryText}`}>治療關係</h3>
                 </div>
                 <div className="space-y-4">
                    <div className="bg-[#FAF8F5] p-4 rounded-lg">
                       <strong className="block text-[#8D6E63] mb-1">I-It 關係</strong>
                       <p className="text-xs">個人與時空的關係，了解自我的起點。</p>
                    </div>
                    <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#D2B48C]">
                       <strong className="block text-[#8D6E63] mb-1">I-Thou 關係</strong>
                       <p className="text-xs">自我與心靈聯繫，真正的對話。治療者自我揭露，作為模範。</p>
                    </div>
                    <p className="text-sm">治療者需具備誠實、統整、勇氣。共鳴能力需時常鍛鍊。</p>
                 </div>
              </div>
           </div>
        </section>

        {/* --- 4. 技術與程序 (Techniques & Phases) --- */}
        <section className="space-y-8">
           <div className="flex items-center gap-3 mb-4">
             <Search className={`w-6 h-6 ${colors.accentPurpleText}`} />
             <h2 className={`text-2xl font-bold ${colors.primaryText}`}>治療技術與程序</h2>
           </div>

           <div className={`${colors.card} p-8 rounded-2xl shadow-sm border border-[#E0E0E0]`}>
              <p className="text-sm mb-6 text-center italic">
                 「非技術取向，哲學共存。治療者最深的自我與當事人最深的部分相會時，治療歷程才會達到巔峰。」
              </p>
              
              <div className="relative border-l-2 border-[#BFAEBC] ml-4 md:ml-8 space-y-8 pl-8 py-2">
                 <div className="relative">
                    <span className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full ${colors.accentPurple} flex items-center justify-center text-xs text-white`}>1</span>
                    <h4 className="font-bold text-[#6D5A68]">初始階段</h4>
                    <p className="text-sm text-[#8C8C8C]">辨別和澄清對世界的假設。當事人常覺得「都是別人的問題」。</p>
                 </div>
                 <div className="relative">
                    <span className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full ${colors.accentPurple} flex items-center justify-center text-xs text-white`}>2</span>
                    <h4 className="font-bold text-[#6D5A68]">中期階段</h4>
                    <p className="text-sm text-[#8C8C8C]">檢視價值系統來源。自我探索與頓悟。重新建構價值。</p>
                 </div>
                 <div className="relative">
                    <span className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full ${colors.accentPurple} flex items-center justify-center text-xs text-white`}>3</span>
                    <h4 className="font-bold text-[#6D5A68]">最後階段</h4>
                    <p className="text-sm text-[#8C8C8C]">將諮商所學付諸行動。重新連結生命。</p>
                 </div>
              </div>
           </div>
           
           {/* Image Placeholder: Therapy Phases Visual */}
           <div className="w-full bg-[#F5F5F0] h-32 rounded-xl flex items-center justify-center border border-dashed border-[#BFAEBC]">
              
           </div>
        </section>

        {/* --- 5. 團體諮商與適用對象 --- */}
        <section className="grid md:grid-cols-2 gap-6">
           <div className={`${colors.card} p-6 rounded-xl border-t-4 border-[#5B5B5B]`}>
              <h3 className="font-bold mb-3 flex items-center gap-2">
                 <Users className="w-5 h-5" /> 團體諮商應用
              </h3>
              <ul className="text-sm space-y-2 list-disc pl-5">
                 <li>人為一生旅程許下自我探索承諾。</li>
                 <li>重新探討嚴肅議題（選擇、焦慮、死亡）。</li>
                 <li>透過回饋，從他人眼中看到自己。</li>
                 <li>提供有力環境檢視自己，決定什麼才是最真誠的。</li>
              </ul>
           </div>

           <div className={`${colors.card} p-6 rounded-xl border-t-4 border-[#9DAD9F]`}>
              <h3 className="font-bold mb-3 flex items-center gap-2">
                 <Heart className="w-5 h-5" /> 適合對象
              </h3>
              <p className="text-sm leading-relaxed">
                 處於發展危機、經驗悲傷和失落、面臨死亡、或是面對重要生命抉擇的當事人。
              </p>
           </div>
        </section>

      </div>
    </div>
  );
};

export default ExistentialTherapyChapter;