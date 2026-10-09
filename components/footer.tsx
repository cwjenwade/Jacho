import Link from "next/link";
export function Footer() {
  return <footer className="xq-footer">
    <div className="xq-footer-inner">
      <div><Link href="/">小祈叔叔的心理學研究</Link><p>任祈蔚 · 諮商心理師</p></div>
      <nav aria-label="頁尾導覽">
        <Link href="/journal">觀點書寫</Link>
        <Link href="/research">學術研究</Link>
        <Link href="/counseling">心理諮商</Link>
      </nav>
      <small>© {new Date().getFullYear()} 任祈蔚</small>
    </div>
  </footer>;
}
