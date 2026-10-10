import Link from "next/link";
import Providers from "@/components/Providers";
const nav = [
  ["心理治療","/psychotherapy"],["團體治療","/group-therapy"],["伴侶治療","/couple-therapy"],
  ["思想起","/eis-heauton"],["專案計畫","/project"],["完整履歷","/profile"],["舊站首頁","/archive"]
];
export default function ImportedLayout({children}:{children:React.ReactNode}) {
  return <Providers><section className="min-h-screen bg-[#FAF9F6] text-stone-800">
    <div className="mx-auto max-w-7xl px-6 pt-10">
      <Link href="/" className="text-sm text-stone-500 hover:text-stone-800">← 小祈叔叔的心理學研究</Link>
      <nav aria-label="原 cwjen 內容導覽" className="flex flex-wrap gap-x-5 gap-y-3 border-b border-stone-200 py-6 mb-8 text-sm">
        {nav.map(([label,href])=><Link key={href} href={href} className="text-stone-600 hover:text-stone-950">{label}</Link>)}
      </nav>
    </div>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">{children}</div>
  </section></Providers>;
}