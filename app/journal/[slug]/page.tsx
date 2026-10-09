import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { journalArticles } from "@/lib/journal";
export function generateStaticParams() {
  return journalArticles.map(article => ({ slug: article.slug }));
}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata> {
  const {slug}=await params;
  const article=journalArticles.find(p=>p.slug===slug);
  return article ? { title:article.title, description:article.summary, robots:{index:!article.draft,follow:true} } : {};
}
export default async function JournalArticlePage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const article=journalArticles.find(p=>p.slug===slug);
  if(!article) notFound();
  return <div className="xq">
    <header className="xq-article-pagehead"><div className="xq-shell">
      <p className="xq-overline">{article.category} / Journal</p>
      <h1>{article.title}</h1>
      <p style={{fontSize:13,color:"#738073"}}>任祈蔚 · 諮商心理師　/　{article.draft ? "試讀稿" : "文章"}</p>
    </div></header>
    <article className="xq-essay">
      {article.paragraphs.map((paragraph,index)=><p key={index}>{paragraph}</p>)}
      {article.draft && <p className="xq-notice">本篇為網站版型試讀稿，尚未作為作者正式發表文章。</p>}
      <Link href="/journal" className="xq-action" style={{marginTop:40}}>← 返回觀點書寫</Link>
    </article>
  </div>;
}
