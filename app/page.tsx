import type { Metadata } from "next";
import Link from "next/link";
import { journalArticles } from "@/lib/journal";
export const metadata: Metadata = { title: "首頁", description: "小祈叔叔的心理學研究。任祈蔚諮商心理師的觀點書寫、諮商工作與學術研究。" };

export default function Home() {
  return <div className="xq">
    <section className="xq-hero">
      <div className="xq-shell xq-hero-inner">
        <div className="xq-hero-copy">
          <p className="xq-overline">A personal collection of thoughts</p>
          <h1><span>小祈叔叔的</span><span>心理學研究</span></h1>
          <p className="xq-role">任祈蔚 · 諮商心理師</p>
          <Link className="xq-action" href="/about">關於我 <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="xq-hero-art" role="img" aria-label="鼠尾草綠與赭棕色的植物水彩抽象畫">
          <span className="xq-art-note">Fragments of feeling.</span>
        </div>
      </div>
    </section>
    <div className="xq-miniline"><div className="xq-shell">
      <p><strong>諮商心理師</strong>　／　情緒・人格・關係</p>
      <p>國立清華大學諮商碩士　／　2025 年度優秀論文獎首獎</p>
    </div></div>
    <section className="xq-section">
      <div className="xq-shell">
        <div className="xq-section-header"><div><p className="xq-overline">Selected writing</p><h2>近期書寫</h2></div>
          <Link href="/journal" className="xq-action">所有文章 <span aria-hidden="true">↗</span></Link></div>
        <div className="xq-stories">
          {journalArticles.slice(0,3).map((post) => (
            <Link className="xq-story" href={"/journal/"+post.slug} key={post.slug}>
              <small>{post.category}</small>
              <h3>{post.title}</h3><p>{post.summary}</p>
              <span>閱讀文章　↗</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <section className="xq-lastband"><div className="xq-shell">
      <div><p className="xq-overline">Practice & Research</p>
        <h2>從心理學研究，<br/>到人的生活。</h2>
        <p>臨床工作與研究，是我理解心理經驗的兩種途徑。</p></div>
      <div><Link href="/counseling" className="xq-action">心理諮商　↗</Link>
        <span style={{display:"inline-block",width:24}}/>
        <Link href="/research" className="xq-action">學術研究　↗</Link></div>
    </div></section>
  </div>;
}
