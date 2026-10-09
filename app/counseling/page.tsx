import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "心理諮商", description:"任祈蔚諮商心理師的個別諮商、伴侶與關係諮商、心理測驗與評估專業介紹。" };
export default function Counseling() {
  return <div className="xq">
    <header className="xq-pagehead"><div className="xq-shell">
      <p className="xq-overline">Counseling / Practice</p><h1>心理諮商</h1>
      <p>從情緒與關係的經驗出發，理解正在經歷的困難。</p>
    </div></header>
    <section className="xq-section"><div className="xq-shell">
      <div className="xq-section-header"><div><p className="xq-overline">Areas of Practice</p><h2>諮商與評估</h2></div></div>
      <div className="xq-services">
        <article className="xq-service-card"><p className="xq-overline">01 / Individual</p><h2>個別心理諮商</h2>
          <p>情緒辨識與調節、生活適應、心理困擾、自我理解，以及人格與人際關係議題。</p></article>
        <article className="xq-service-card"><p className="xq-overline">02 / Relationships</p><h2>伴侶與關係諮商</h2>
          <p>關注關係中的情緒經驗、互動循環、親密需求與溝通模式。</p></article>
        <article className="xq-service-card"><p className="xq-overline">03 / Assessment</p><h2>心理測驗與評估</h2>
          <p>運用心理計量工具，討論情緒歷程、人格特質、心理健康及適應功能。</p></article>
      </div>
    </div></section>
    <section className="xq-section"><div className="xq-shell xq-two-col">
      <div><p className="xq-overline">The therapeutic relationship</p>
        <h2 className="xq-serif" style={{fontSize:38,lineHeight:1.7}}>諮商是共同理解<br/>經驗的工作。</h2></div>
      <div className="xq-copy"><p>我的工作重視當事人所經驗的情緒與其生活脈絡。理解當事人如何感受、回應，以及如何在關係中與他人互動，是諮商歷程的一部分。</p>
        <p>臨床工作以人本與情緒取向為基礎，依諮商需求討論適合的工作方向。</p>
        <p style={{marginTop:29}}><Link href="/about" className="xq-action">了解我的諮商理念　↗</Link></p></div>
    </div></section>
    <section className="xq-counseling-banner"><div className="xq-shell">
      <p className="xq-overline">Appointment information</p>
      <h2 className="xq-serif" style={{fontSize:31,margin:"13px 0"}}>合作機構與預約資訊</h2>
      <p style={{fontSize:13,color:"#607066",lineHeight:2}}>預約安排依各合作諮商所之服務資訊辦理。</p>
    </div></section>
  </div>;
}
