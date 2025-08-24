import { useState } from "react";

const skills = [
    {name:"HTML", level:95, category: "frontend"},
    {name:"CSS", level:60, category: "frontend"},
    {name:"JavaScript", level:60, category: "frontend"},
    {name:"React", level:35, category: "frontend"},
    {name:"Tailwind CSS", level:40, category: "frontend"},
    {name:"Next.js", level:30, category: "frontend"},

    {name:"Node.js", level:20, category: "backend"},
    {name:"MongoDB", level:20, category: "backend"},

    {name:"Git", level:70, category: "tools"},
    {name:"GitHub", level:80, category: "tools"},
    {name:"VSC", level:90, category: "tools"},
    {name:"Figma", level:70, category: "tools"},

]

const categories = ["all", "frontend", "backend", "tools"]

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filterSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return(
        <section 
        id="skills"
         className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl dont-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-start gap-4 mb-12">
                    {categories.map((category,key) => (
                        <button 
                            key={key} 
                            className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer 
                                ${activeCategory === category ? "bg-primary text-primary-foregroound" : "text-foreground hover:bd-secondary"}`}
                            onClick={() => {setActiveCategory(category)}}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterSkills.map((skill,key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]" style={{width: skill.level + "%"}}/>
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;