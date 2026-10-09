import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = { title: "關於小祈", description:"任祈蔚諮商心理師的專業背景、諮商理念與研究經歷。" };
export default function About() {
  return <div className="xq">
    <header className="xq-pagehead"><div className="xq-shell"><p className="xq-overline">About / Wade Jen</p>
      <h1>關於小祈</h1><p>任祈蔚，諮商心理師。關注人的情緒經驗、人格與關係。</p></div></header>
    <section className="xq-section"><div className="xq-shell xq-two-col">
      <div className="xq-photo-frame"><Image src="/wade.png" alt="任祈蔚諮商心理師" width={600} height={800} priority={false}/></div>
      <div className="xq-copy">
        <p className="xq-overline">Counseling Psychologist</p>
        <h2>我所關注的，是人的經驗。</h2>
        <p>情緒如何被辨識、表達與調節，始終是我在臨床工作與研究中關切的問題。人的感受與生活處境、關係經驗及人格特質彼此交織。</p>
        <p>我的諮商工作以人本取向為基礎，結合情緒取向的理解，關注當事人的主體經驗、互動模式與治療關係。</p>
        <div className="xq-divider"/>
        <h2>臨床與研究並行</h2>
        <p>我的研究涉及述情障礙、情緒加工、心理治療歷程，以及團體與伴侶諮商。研究方法涵蓋心理計量、量化分析與質性研究。</p>
        <p>研究讓臨床問題得以接受系統性檢驗；諮商工作則持續帶來值得探究的問題。</p>
        <p style={{marginTop:28}}><Link href="/counseling" className="xq-action">了解心理諮商　↗</Link></p>
      </div>
    </div></section>
    <section className="xq-section" style={{background:"#edf0e9"}}><div className="xq-shell">
      <div className="xq-section-header"><div><p className="xq-overline">Selected credentials</p><h2>專業背景</h2></div><Link href="/research" className="xq-action">完整學術資料　↗</Link></div>
      <div className="xq-credentials">
        <article><p className="xq-overline">Education</p><h3>國立清華大學</h3><p>教育心理與諮商研究所碩士</p></article>
        <article><p className="xq-overline">Recognition</p><h3>2025 年度優秀論文獎</h3><p>臺灣諮商心理學會首獎</p></article>
        <article><p className="xq-overline">Research</p><h3>心理治療研究</h3><p>國際學術研討會研究發表與期刊研究</p></article>
      </div>
    </div></section>
  </div>;
}
