interface Props {
  text: string;
  source: string;
}

export default function QuoteCard({ text, source }: Props) {
  return (
    <div className="bg-white/80 backdrop-blur-sm border-l-4 border-rose-400 p-4 mb-4 rounded-xl shadow-md">
      <p className="text-md font-medium text-pink-800">💬 {text}</p>
      <p className="text-sm text-rose-700 mt-1">📖 {source}</p>
    </div>
  );
}
