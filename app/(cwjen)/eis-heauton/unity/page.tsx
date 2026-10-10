import React from 'react';
import { BookOpen, Calendar, Layers, Feather, Heart, AlertCircle } from 'lucide-react';

const AcademicNewsletter = () => {
  // Theme: Natural Morandi Collage (NextPure Style)
  const theme = {
    bg: "bg-[#FFFDF6]",             // Base: Cream White
    textMain: "text-[#2F3532]",     // Deep Dark Green-Grey
    textSec: "text-[#5C5C5C]",      // Warm Grey
    textLight: "text-[#7A807C]",    // Light Grey for captions
    
    // The Palette
    color1: "bg-[#DDE0CC]", // 淺豆沙綠
    color2: "bg-[#A6ACA7]", // 灰泥色
    color3: "bg-[#A3B8B1]", // 霧霾藍綠
    color4: "bg-[#B3C1B7]", // 灰綠色
    
    border: "border-[#E0E0D5]",
  };

  return (
    <div className={`min-h-screen ${theme.bg} font-sans selection:bg-[#DDE0CC] selection:text-[#2F3532] pb-24`}>
      
      {/* ================= HEADER ================= */}
      <header className="relative pt-24 pb-20 px-6 overflow-hidden">
        {/* Decorative Blobs */}
        <div className={`absolute top-[-10%] right-[-5%] w-96 h-96 ${theme.color1} rounded-full opacity-60 blur-3xl -z-10`}></div>
        <div className={`absolute top-[20%] left-[-10%] w-72 h-72 ${theme.color3} rounded-full opacity-50 blur-3xl -z-10`}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 mb-6 bg-white rounded-2xl shadow-sm border border-[#E0E0D5]">
            <Feather className="w-8 h-8 text-[#8FA39D]" />
          </div>
          <h1 className={`text-5xl md:text-6xl font-serif font-bold tracking-wide ${theme.textMain} mb-4`}>
            合一
          </h1>
          <p className={`text-xl font-serif italic ${theme.textSec} mb-8 tracking-wider`}>
            The Experience of Union
          </p>
          
          <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
            <span className="flex items-center gap-2 px-4 py-1.5 bg-white/80 rounded-full text-xs font-bold tracking-widest text-[#7A807C] uppercase border border-[#E0E0D5]">
              <Calendar className="w-3 h-3" /> 2026 Research
            </span>
            <span className="flex items-center gap-2 px-4 py-1.5 bg-white/80 rounded-full text-xs font-bold tracking-widest text-[#7A807C] uppercase border border-[#E0E0D5]">
              <Layers className="w-3 h-3" /> Psychology & Philosophy
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-32">

        {/* ================= SECTION 1: 最初的合一 ================= */}
        {/* Layout: Text Left, Small Image Right (Collage Style) */}
        <section className="relative">
          <div className="flex items-baseline gap-4 mb-8">
             <span className="text-[#A3B8B1] font-serif text-6xl font-bold opacity-30">01</span>
             <h2 className={`text-3xl font-bold ${theme.textMain}`}>最初的合一</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            {/* Text Content */}
            <div className="md:col-span-8 space-y-6">
              <div className={`${theme.textMain} text-lg leading-loose text-justify`}>
                <p className="mb-6">
                  當小寶寶還在媽媽肚子裡的時候，他和媽媽就像是一個人。他吃的東西、呼吸的空氣、長大的力量，全都來自媽媽。那時候，整個世界就是媽媽的肚子。媽媽和寶寶共用一個身體，也共用一個家。這是生命最最一開始的「合在一起」——人、媽媽、和自己，全部都變成一個整體。
                </p>
                <p className="mb-6">
                  出生以後，寶寶離開媽媽的身體，開始用自己的方式呼吸、哭、吃東西。這時有一位心理學家叫 克萊恩（Klein），她觀察很多小嬰兒，發現一件有趣的事：
                </p>
                
                <div className={`p-6 rounded-tr-[2rem] rounded-bl-[2rem] ${theme.color1} bg-opacity-30 border-l-4 border-[#A3B8B1] mb-6`}>
                  <h4 className="font-bold text-[#5E6663] mb-1">全能的幻想 (Omnipotent Fantasy)</h4>
                  <p className="text-sm italic text-[#707875]">寶寶常常以為自己有「全能的幻想」，意思是——他以為自己很有魔法。</p>
                </div>

                <p>
                  只要一哭，媽媽就會馬上出現、給奶喝。寶寶覺得世界會聽他的話，好像自己是小小的神一樣。可是慢慢地，寶寶會發現事情不是這樣。媽媽有時候沒那麼快來，或是在做別的事。這時他開始懂得：「原來媽媽是一個客體（object），是和我不一樣的人。我是我，媽媽是媽媽。」當他明白這件事時，心裡會有各種感覺：他可能生氣、覺得媽媽不好，也可能害怕、難過。這些情緒在心理學裡叫做<span className={`mx-1 px-2 py-0.5 ${theme.color1} rounded text-sm font-bold`}>「投射（projection）」</span>——就是把心裡的感覺丟到別人身上。
                </p>
                <p>
                  雖然這樣的心情很複雜，但這正是人開始長大的過程。當寶寶發現自己和媽媽不同，他就慢慢進入所謂的「個體化（individuation）」——意思是，他開始變成一個有自己想法、自己感覺的人。
                </p>
              </div>

              {/* English Ref */}
              <div className="p-6 bg-white border border-[#E0E0D5] rounded-xl text-sm text-[#888] font-serif leading-relaxed">
                 <div className="flex items-center gap-2 mb-2 text-[#A3B8B1] uppercase text-xs font-bold tracking-widest">
                   <BookOpen className="w-3 h-3" /> English Reference
                 </div>
                 <p>When the baby is still inside the mother’s womb, he and his mother are like one single being... After birth, the baby leaves his mother’s body... Melanie Klein observed... “omnipotent fantasy.”... But gradually, the baby begins to realize... “Mother is an object...”</p>
              </div>
            </div>

            {/* Image H1 (Small Portrait) - Polaroid Style */}
            <div className="md:col-span-4 flex justify-center md:justify-end relative">
               {/* Background Blob for H1 */}
               <div className={`absolute top-[-20px] right-[-20px] w-48 h-48 ${theme.color2} rounded-full opacity-40 -z-10`}></div>
               
               <div className="bg-white p-3 pb-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rotate-2 hover:rotate-0 transition-transform duration-500 w-fit">
                  <div className="w-[200px] bg-[#F5F5F0] overflow-hidden">
                    <img 
                      src="/Photos/H1.png" 
                      alt="Mother and Child: The First Union" 
                      className="w-full h-auto object-contain"
                      width={164}
                      height={212}
                    />
                  </div>
                  <p className="text-center text-xs text-[#999] mt-3 font-serif italic">Mother & Child</p>
               </div>
            </div>

          </div>
        </section>

        {/* ================= SECTION 2: 追尋的合一 ================= */}
        {/* Layout: 3 Columns Cards with Color Blocking */}
        <section>
          <div className="flex items-baseline gap-4 mb-12">
             <span className="text-[#A3B8B1] font-serif text-6xl font-bold opacity-30">02</span>
             <h2 className={`text-3xl font-bold ${theme.textMain}`}>追尋的合一</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
             {/* Card 1 */}
             <div className="group relative">
                <div className={`absolute inset-0 ${theme.color1} rounded-[2rem] transform translate-x-2 translate-y-2 -z-10`}></div>
                <div className="bg-white border border-[#E0E0D5] rounded-[2rem] p-4 h-full flex flex-col items-center">
                   <div className="w-full rounded-2xl overflow-hidden mb-4 bg-[#F2F2F0]">
                      <img src="/Photos/H2.png" alt="我與父原為一" className="w-full h-auto object-cover" width={649} height={800} />
                   </div>
                   <h3 className={`font-bold ${theme.textMain} text-lg font-serif`}>我與父原為一</h3>
                   <p className="text-xs text-[#888] font-serif italic mt-1">“I and the Father are one.”</p>
                </div>
             </div>

             {/* Card 2 */}
             <div className="group relative mt-8 md:mt-0">
                <div className={`absolute inset-0 ${theme.color3} rounded-[2rem] transform translate-x-2 translate-y-2 -z-10`}></div>
                <div className="bg-white border border-[#E0E0D5] rounded-[2rem] p-4 h-full flex flex-col items-center">
                   <div className="w-full rounded-2xl overflow-hidden mb-4 bg-[#F2F2F0]">
                      <img src="/Photos/H3.png" alt="天地與我並生" className="w-full h-auto object-cover" width={637} height={800} />
                   </div>
                   <h3 className={`font-bold ${theme.textMain} text-lg font-serif`}>天地與我並生</h3>
                   <p className="text-xs text-[#888] font-serif italic mt-1">“All things and I are one.”</p>
                </div>
             </div>

             {/* Card 3 */}
             <div className="group relative mt-8 md:mt-0">
                <div className={`absolute inset-0 ${theme.color4} rounded-[2rem] transform translate-x-2 translate-y-2 -z-10`}></div>
                <div className="bg-white border border-[#E0E0D5] rounded-[2rem] p-4 h-full flex flex-col items-center">
                   <div className="w-full rounded-2xl overflow-hidden mb-4 bg-[#F2F2F0]">
                      <img src="/Photos/H4.png" alt="因緣所生" className="w-full h-auto object-cover" width={637} height={800} />
                   </div>
                   <h3 className={`font-bold ${theme.textMain} text-lg font-serif`}>因緣所生</h3>
                   <p className="text-xs text-[#888] font-serif italic mt-1">“Dependent origination.”</p>
                </div>
             </div>
          </div>

          <div className={`${theme.textMain} text-lg leading-loose text-justify max-w-4xl mx-auto`}>
             <p className="mb-6">
               有一種經驗，藏在人類很久很久的歷史裡，叫做「合一」。... 從以前的原始部落開始，人們就一起生活、一起打獵、一起跳舞。... 到了現在的學校、社區、公司裡，我們也一樣要學著合作。...
             </p>
             <p className="mb-8">
               有一位心理學家叫 佛洛姆（Fromm），他研究「愛」。他說，真正的愛不是要把對方變成自己的一部分，而是兩個人都保留自己，但又能在心裡相遇。
             </p>
             
             <div className="relative p-10 bg-white rounded-3xl shadow-sm border border-[#E0E0D5] mb-8">
               <span className="absolute top-4 left-6 text-6xl text-[#DDE0CC] font-serif">“</span>
               <p className="text-xl font-serif text-[#5E6663] italic text-center relative z-10">
                 就像你有一顆星星，我也有一顆星星，當我們牽起手的時候，兩顆星星的光就會交錯在一起。這種「我和你在一起」的感覺，就是愛裡的「合一」。
               </p>
             </div>

             <p>
               還有更深的一種「合一」，是人和整個世界的。在《聖經》裡，有一句話說「我和天父是一體的」；在中國古書《莊子》裡也有說「天地和我一起出生，萬物和我是一家人」。... 所以，「合一」不只是書裡的哲學，也不只是宗教的故事。它還是我們心裡很深的願望。
             </p>
          </div>
        </section>

        {/* ================= SECTION 3: 呼喚的合一 ================= */}
        {/* Layout: Zig-Zag with Organic Blobs */}
        <section>
          <div className="flex items-baseline gap-4 mb-16">
             <span className="text-[#A3B8B1] font-serif text-6xl font-bold opacity-30">03</span>
             <h2 className={`text-3xl font-bold ${theme.textMain}`}>呼喚的合一</h2>
          </div>

          <div className="space-y-24">
             
             {/* Anime 1: Spirited Away (Img Left) */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
                {/* Image Side */}
                <div className="relative">
                   <div className={`absolute top-[-20px] left-[-20px] w-full h-full ${theme.color1} rounded-[3rem] opacity-60 -z-10`}></div>
                   <img 
                     src="/Photos/H5.png" 
                     alt="Spirited Away" 
                     className="w-full h-auto rounded-[3rem] shadow-sm object-cover"
                     width={680} height={800}
                   />
                </div>
                {/* Text Side */}
                <div className="space-y-4">
                   <h3 className="text-2xl font-bold text-[#4A5752] font-serif">千與千尋 (Spirited Away)</h3>
                   <div className={`${theme.textMain} text-lg leading-relaxed text-justify space-y-4`}>
                      <p>「合一」並非思維所能抵達之處，而是一種內心深處隱蔽的運動——它發生於潛意識之中，往往先於意識的覺察。</p>
                      <p>在《神隱少女》中，千尋進入了一個被剝奪名字的世界。當她成為「小千」時，為了生存，她與湯屋的體制形成了某種假性的融合（pseudo-union）。這是一種暫時性的自我消解，以適應強大的外部系統。然而，透過與白龍的相遇——一位理解並協助她找回自我的存在——她展現了成熟的愛之合一：這不是兩個人的相互消融，而是兩個完整個體在理解與尊重中的真實相遇。</p>
                   </div>
                </div>
             </div>

             {/* Anime 2: Evangelion (Img Right) */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
                {/* Text Side */}
                <div className="order-2 md:order-1 space-y-4">
                   <h3 className="text-2xl font-bold text-[#4A5752] font-serif">新世紀福音戰士 (Evangelion)</h3>
                   <div className={`${theme.textMain} text-lg leading-relaxed text-justify space-y-4`}>
                      <p>另一部動畫《新世紀福音戰士》中描繪的「人類補完計畫」，試圖將全人類的心靈融為一體，彷彿所有人的心都熔化在一起。這看似完美的統一，實則是一種合一的幻象（illusion of union）——一個不再有「你」與「我」之分的世界。</p>
                      <p>若無差異，便無距離；若無距離，便無從產生愛、渴望與成長。主角真嗣最終拒絕了此計畫，因為他意識到：儘管差異帶來痛苦，但唯有保有分離，真實的連結才成為可能。</p>
                   </div>
                </div>
                {/* Image Side */}
                <div className="order-1 md:order-2 relative">
                   <div className={`absolute bottom-[-20px] right-[-20px] w-full h-full ${theme.color2} rounded-[3rem] opacity-60 -z-10`}></div>
                   <img 
                     src="/Photos/H6.png" 
                     alt="Neon Genesis Evangelion" 
                     className="w-full h-auto rounded-[3rem] shadow-sm object-cover"
                     width={671} height={800}
                   />
                </div>
             </div>

             {/* Anime 3: Princess Mononoke (Img Left) */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
                {/* Image Side */}
                <div className="relative">
                   <div className={`absolute top-[-20px] left-[-20px] w-full h-full ${theme.color4} rounded-[3rem] opacity-60 -z-10`}></div>
                   <img 
                     src="/Photos/H7.png" 
                     alt="Princess Mononoke" 
                     className="w-full h-auto rounded-[3rem] shadow-sm object-cover"
                     width={671} height={800}
                   />
                </div>
                {/* Text Side */}
                <div className="space-y-4">
                   <h3 className="text-2xl font-bold text-[#4A5752] font-serif">魔法公主 (Princess Mononoke)</h3>
                   <div className={`${theme.textMain} text-lg leading-relaxed text-justify space-y-4`}>
                      <p>在《魔法公主》中，小桑與山犬、森林精靈及山脈本身共生，生活在另一種形式的合一之中——人與自然的生命連結（living bond）。</p>
                      <p>她能聽見森林的聲音，與大地一同呼吸。這是一種創造性的、賦予生命的合一，一種既保留了連結，也尊重了彼此差異的關係。透過這些動畫，我們看見了合一的不同面貌：有些是虛假且吞噬性的，有些則是真實且肯定生命的。作為人類的成長，便在於學會分辨：哪一種「在一起」，能讓我們更接近真實的自己。</p>
                   </div>
                </div>
             </div>

          </div>
        </section>

        {/* ================= SECTION 4: 真實與假性的合一 ================= */}
        {/* Layout: Wide Cards stacked */}
        <section>
          <div className="flex items-baseline gap-4 mb-12">
             <span className="text-[#A3B8B1] font-serif text-6xl font-bold opacity-30">04</span>
             <h2 className={`text-3xl font-bold ${theme.textMain}`}>真實與假性的合一</h2>
          </div>

          <div className="space-y-16">
             
             {/* True Union - Greenish Theme */}
             <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E0E0D5]">
                <div className={`h-2 ${theme.color3}`}></div>
                <div className="flex flex-col lg:flex-row">
                   <div className="lg:w-1/2 relative bg-[#F0F2EE]">
                      <img src="/Photos/H8.png" alt="True Union" className="w-full h-full object-cover" width={800} height={452}/>
                   </div>
                   <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                         <div className={`p-2 rounded-full ${theme.color3} bg-opacity-30 text-[#5E6663]`}><Heart className="w-5 h-5"/></div>
                         <h3 className="text-2xl font-serif font-bold text-[#4A5752]">真實合一 Union</h3>
                      </div>
                      <div className={`${theme.textMain} text-lg leading-relaxed space-y-4`}>
                         <p>佛洛姆（Fromm）常常思考一個問題：「人怎麼樣，才能在愛裡面，真的和別人連結在一起？」他說，真正的愛不是只想抓住別人，也不是讓自己消失。而是一種成熟的愛——這種愛有一種積極的力量。</p>
                         <p>在這種愛裡，我們可以跟別人靠近，但也不會失去自己。你還是「你」，我還是「我」，我們的心能在中間相遇，就像兩棵樹的枝葉，在風裡輕輕碰在一起。</p>
                      </div>
                   </div>
                </div>
             </div>

             {/* False Union - Greyish Theme */}
             <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E0E0D5]">
                <div className={`h-2 ${theme.color2}`}></div>
                <div className="flex flex-col lg:flex-row-reverse">
                   <div className="lg:w-1/2 relative bg-[#F2F2F2]">
                      <img src="/Photos/H9.png" alt="False Union" className="w-full h-full object-cover" width={800} height={446}/>
                   </div>
                   <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                         <div className={`p-2 rounded-full ${theme.color2} bg-opacity-30 text-[#5E6663]`}><AlertCircle className="w-5 h-5"/></div>
                         <h3 className="text-2xl font-serif font-bold text-[#4A5752]">假性合一 Fusion</h3>
                      </div>
                      <div className={`${theme.textMain} text-lg leading-relaxed space-y-4`}>
                         <p>有時候，人太害怕孤單，就會選擇一種「假性的合一」。意思是：看起來很親近，其實只是為了逃避自由和害怕孤獨。</p>
                         <ul className="list-disc pl-5 space-y-2 text-base">
                            <li><strong className="text-[#5E6663]">順從權威</strong>：讓別人替自己決定一切，失去了自己的聲音。</li>
                            <li><strong className="text-[#5E6663]">社會同化</strong>：只想要和大家一樣，卻慢慢忘了「我是誰」。</li>
                            <li><strong className="text-[#5E6663]">佔有式的愛</strong>：把「愛」誤會成「抓緊不放」，害怕被拋下。</li>
                         </ul>
                      </div>
                   </div>
                </div>
             </div>

          </div>
        </section>

      </main>

      {/* ================= AUTHOR SIGNATURE ================= */}
      <section className="py-12 bg-[#FFFDF6] text-center border-t border-[#E0E0D5]">
        <p className="text-sm text-[#2F3532]">
          本文由任祈蔚 Wade Jen 諮商心理師撰寫
        </p>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#F2F2F0] py-16 text-center mt-20 border-t border-[#E0E0D5]">
        <div className="max-w-2xl mx-auto px-6">
          <Feather className="w-6 h-6 text-[#A6ACA7] mx-auto mb-6" />
          <p className="text-sm font-serif text-[#888] tracking-widest">
            © 2026 Academic Research Note. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default AcademicNewsletter;