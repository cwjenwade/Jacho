"use client";
import Link from "next/link";
import { useState } from "react";
import { journalArticles, journalCategories, type JournalCategory } from "@/lib/journal";

export function JournalFilter() {
  const [category,setCategory] = useState<"全部" | JournalCategory>("全部");
  const [query,setQuery] = useState("");
  const visible = journalArticles.filter(post => (category==="全部" || post.category===category) &&
    (post.title+" "+post.summary+" "+post.category).toLowerCase().includes(query.trim().toLowerCase()));
  return <>
    <div className="xq-journal-tools">
      <div className="xq-journal-filters" role="group" aria-label="文章分類">
        {journalCategories.map(item=><button key={item} type="button" aria-pressed={category===item} onClick={()=>setCategory(item)}>{item}</button>)}
      </div>
      <input className="xq-search" aria-label="搜尋文章" placeholder="搜尋文章" value={query} onChange={e=>setQuery(e.target.value)}/>
    </div>
    <div className="xq-journal-grid">
      {visible.map((post,i)=><Link className="xq-article-card" key={post.slug} href={"/journal/"+post.slug}>
        <div className={"xq-article-art variant-"+(i%4)} role="img" aria-label="藝術主題插畫"/>
        <div className="xq-article-inner"><small>{post.category} · 試讀稿</small>
          <h2>{post.title}</h2><p>{post.summary}</p><span>閱讀文章 ↗</span></div>
      </Link>)}
    </div>
    {visible.length===0 && <p style={{paddingBottom:80,color:"#667169"}}>目前沒有符合的文章。</p>}
  </>;
}
