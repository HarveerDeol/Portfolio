import { useState } from "react";
import { cn } from "@/lib/utils";
import { Award, Clock } from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Redux", level: 70, category: "frontend" },

  // Backend
  { name: "JavaScript", level: 90, category: "backend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 90, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },
  { name: "AWS", level: 85, category: "backend" },
  { name: "Supabase", level: 80, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 80, category: "tools" },
  { name: "Figma", level: 65, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },

  // Certifications
  { 
    name: "AWS Certified Solutions Architect - Associate", 
    level: 100, 
    category: "certifications",
    verified: true 
  },
  { 
    name: "CompTIA Security+", 
    level: 0, 
    category: "certifications",
    comingSoon: true 
  },
];

const categories = ["all", "frontend", "backend", "tools", "certifications"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className={cn(
                "bg-card p-6 rounded-lg shadow-xs card-hover relative",
                skill.comingSoon && "border border-primary/30"
              )}
            >
              {/* Coming Soon Badge */}
              {skill.comingSoon && (
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 border border-primary/40">
                  <Clock size={12} className="text-primary" />
                  <span className="text-xs text-primary font-medium">
                    Coming Soon
                  </span>
                </div>
              )}

              {/* Verified Badge */}
              {skill.verified && (
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 border border-primary/40">
                  <Award size={12} className="text-primary" />
                  <span className="text-xs text-primary font-medium">
                    Verified
                  </span>
                </div>
              )}

              <div className="text-left mb-4">
                <h3
                  className={cn(
                    "font-semibold text-lg",
                    skill.comingSoon && "text-foreground/60"
                  )}
                >
                  {skill.name}
                </h3>
              </div>

              {/* Progress bar - only show for non-coming-soon items or show empty for coming soon */}
              {!skill.comingSoon ? (
                <>
                  <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                      style={{ width: skill.level + "%" }}
                    />
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary/30 h-2 rounded-full w-0" />
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-sm text-primary/60 italic">
                      In Progress
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};