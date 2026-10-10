"use client";

import { useLanguage } from '@/app/context/LanguageContext';
import { DICTIONARY, type Dict } from '@/lib/dictionary';
import AuthorSignature from '@/components/AuthorSignature';

export default function Academic() {
  const { language } = useLanguage();
  const dict = DICTIONARY[language] as Dict[typeof language];

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-slate-900">{(dict['eis-heauton'] as { title: string })?.title ?? 'Academic'}</h1>
      <div className="bg-yellow-100 border-2 border-yellow-400 p-8 rounded-lg text-center">
        <div className="text-6xl mb-4">🚧</div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">施工中</h2>
        <p className="text-slate-700">{(dict['eis-heauton'] as { description: string })?.description ?? 'Under construction.'}</p>
      </div>
      <AuthorSignature />
    </div>
  );
}
