import type { Metadata } from "next";
import { JournalFilter } from "@/components/journal-filter";
export const metadata: Metadata = { title: "觀點書寫", description:"心理學、情緒、關係與心理治療歷程的研究筆記與個人書寫。" };
export default function Journal() {
 return <div className="xq">
    <header className="xq-pagehead"><div className="xq-shell">
      <p className="xq-overline">Journal / Essays & notes</p><h1>觀點書寫</h1>
      <p>關於情緒、人格、關係與心理學研究的持續思考。</p>
    </div></header>
    <div className="xq-shell"><JournalFilter/></div>
  </div>;
}
