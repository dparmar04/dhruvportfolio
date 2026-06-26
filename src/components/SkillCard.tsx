import BorderGlow from "../../components/reactbits/BorderGlow";

export default function SkillCard({ category, items, className = "" }: { category: string; items: string[]; className?: string }) {
  return (
    <BorderGlow
      backgroundColor="var(--paper-elevated)"
      glowColor="40 80 80"
      colors={["var(--accent)", "color-mix(in srgb, var(--accent) 60%, #f59e0b)", "color-mix(in srgb, var(--accent) 40%, #fbbf24)"]}
      borderRadius={16}
      glowRadius={30}
      className={className}
    >
      <div className="p-5 h-full" style={{ background: "var(--paper-elevated)", borderRadius: 16 }}>
        <h3 className="text-sm font-semibold tracking-wider uppercase mb-3" style={{ color: "var(--accent)" }}>
          {category}
        </h3>
        <div className="flex flex-wrap gap-2">
          {items.map((skill) => (
            <span key={skill} className="tag">{skill}</span>
          ))}
        </div>
      </div>
    </BorderGlow>
  );
}
