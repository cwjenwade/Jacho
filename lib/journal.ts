export type JournalCategory = "我的觀點" | "研究筆記" | "關係與生活";
export type JournalArticle = {
  slug: string;
  title: string;
  category: JournalCategory;
  summary: string;
  paragraphs: string[];
  draft: boolean;
};
export const journalArticles: JournalArticle[] = [
  {
    slug: "emotion-language",
    title: "當情緒還沒有名字",
    category: "我的觀點",
    summary: "情緒的存在與情緒的表達，並不總是同一件事。",
    draft: true,
    paragraphs: [
      "有些感受在還沒被說出來以前，已經以身體緊繃、沉默或不易解釋的不舒服被經驗到。描述情緒，是一項涉及辨識與語言組織的心理歷程。",
      "心理學研究將情緒辨識、情緒描述及情緒調節視為可以區分的構念。這些區分有助於討論人們經驗感受的差異。",
      "在諮商歷程中，談論情緒不只是為了找到一個正確的詞，也與理解感受發生的情境與人際關係有關。"
    ]
  },
  {
    slug: "relationship-patterns",
    title: "為什麼我們總在關係裡重複同一段對話？",
    category: "關係與生活",
    summary: "從伴侶互動循環思考那些似曾相識的爭執。",
    draft: true,
    paragraphs: [
      "在親密關係中，互動常具有循環特性。一方的回應會影響另一方接下來的反應，雙方於是共同形成熟悉的互動模式。",
      "只討論某一次爭執的內容，可能不足以理解為什麼相似的衝突不斷出現。伴侶治療常將情緒經驗與互動歷程放在一起討論。",
      "理解關係中的重複模式，涉及辨識彼此的反應、期待與需要。"
    ]
  },
  {
    slug: "alexithymia",
    title: "述情障礙：感受與語言之間",
    category: "研究筆記",
    summary: "情緒辨識困難與情緒描述困難，是相關但不同的研究面向。",
    draft: true,
    paragraphs: [
      "述情障礙（alexithymia）通常涉及辨識情緒的困難、描述感受的困難，以及偏向外在導向的思考方式。這些面向在研究中各有不同的測量方法。",
      "研究述情障礙時，需要區分構念定義、量表分數與實際臨床經驗。單一測驗分數不等於完整的個人心理評估。",
      "從心理計量到心理治療歷程，述情障礙提供一個理解情緒加工差異的研究方向。"
    ]
  },
  {
    slug: "counseling-process",
    title: "心理諮商，究竟談些什麼？",
    category: "我的觀點",
    summary: "諮商內容不只涉及困擾，也涉及情緒、生活脈絡與關係。",
    draft: true,
    paragraphs: [
      "前來諮商的人，可能正面對具體的心理困擾，也可能希望理解自己在生活與關係中的經驗。",
      "心理諮商是一項有專業架構的工作。評估、治療關係、共同形成目標與持續討論，都可能構成諮商的一部分。",
      "不同取向對治療歷程的理解有所差異。以情緒經驗為焦點的工作，特別重視感受的辨識、表達及其人際脈絡。"
    ]
  }
];
export const journalCategories: ("全部" | JournalCategory)[] = ["全部", "我的觀點", "研究筆記", "關係與生活"];
