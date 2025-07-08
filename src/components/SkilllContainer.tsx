'use client';

import { useEffect, useState } from "react";
enum SkillCategory {
    Language = 'Language',
    Framework = 'Framework',
    Tool = 'Tool',
    Databases = 'Database',
    Embedded_Systems = "Embedded System"
}

type Skill = {
    name: string;
    usage: string;
    category: SkillCategory;
};


export default function SkillSection() {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

    useEffect(
        () => {
            fetch('/api/v1/skills')
                .then(res => res.json())
                .then(data => setSkills(data || []));
        }, []
    );

    const languages = skills.filter(skill => skill.category === 'Language');
    const frameworks = skills.filter(skill => skill.category === 'Framework');
    const tools = skills.filter(skill => skill.category === 'Tool');
    const databases = skills.filter(skill => skill.category === 'Database');
    const embedded_systems = skills.filter(skill => skill.category === 'Embedded System');

    return (
        <section className="bg-slate-100 max-w-6xl mx-auto rounded-[15] md:px-10 px-4 py-5">
            <div className="max-w-6xl mt-5 mx-auto">

                <div className="grid grid-cols-1 mb-10 md:grid-cols-2 gap-5">

                    {/* Left column */}
                    <div>
                        {/* <h1 className="text-4xl font-bold text-amber-500 mb-6 text-left ">
  Skills
</h1> */}

                        <div className="py-5">
                            <h3 className="text-xl font-semibold font-poppins text-gray-700 uppercase tracking-wide pl-2 border-l-4 border-amber-400">
  Languages
</h3>

                            {/* Skills + categories */}


                            <div className="flex flex-wrap gap-3">
                                {
                                    languages.map((skill) => (
                                        <span key={skill.name} onClick={ () => setSelectedSkill(skill)} className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-4 py-2 rounded-full cursor-pointer  hover:scale-105 transition duration-200 ease-in-out">{skill.name} </span>
                                    )
                                    )
                                }
                            </div>

                        </div>
                        <div >
                            <h3 className="text-xl font-semibold font-poppins text-gray-700 uppercase tracking-wide pl-2 border-l-4 border-blue-300">Frameworks</h3>
                            {/* Skills + categories */}
                            <div className="flex flex-wrap gap-3">
                                {
                                    frameworks.map((skill) => (
                                        <span key={skill.name} onClick={ () => setSelectedSkill(skill)} className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-4 py-2 rounded-full cursor-pointer  hover:scale-105 transition duration-200 ease-in-out">{skill.name} </span>
                                    )
                                    )
                                }
                            </div>

                        </div>
                                                                       <div >
                            <h3 className="text-xl font-semibold font-poppins text-gray-700 uppercase tracking-wide pl-2 border-l-4 border-blue-300">Databases</h3>
                            {/* Skills + categories */}
                            <div className="flex flex-wrap gap-3">
                                {
                                    databases.map((skill) => (
                                        <span key={skill.name} onClick={ () => setSelectedSkill(skill)} className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-4 py-2 rounded-full cursor-pointer  hover:scale-105 transition duration-200 ease-in-out">{skill.name} </span>
                                    )
                                    )
                                }
                            </div>

                        </div>
                                         
                        <div >
                            <h3 className="text-xl font-semibold font-poppins text-gray-700 uppercase tracking-wide pl-2 border-l-4 border-purple-300">Embedded Systems</h3>
                            {/* Skills + categories */}
                            <div className="flex flex-wrap gap-3">
                                {
                                    embedded_systems.map((skill) => (
                                        <span key={skill.name} onClick={ () => setSelectedSkill(skill)} className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-4 py-2 rounded-full cursor-pointer  hover:scale-105 transition duration-200 ease-in-out">{skill.name} </span>
                                    )
                                    )
                                }
                            </div>

                        </div>
                        
 
                        <div className="pt-4" >
                            <h3 className="text-xl font-semibold font-poppins text-gray-700 uppercase tracking-wide pl-2 border-l-4 border-red-300">Tools</h3>
                            {/* Skills + categories */}
                            <div className="flex flex-wrap gap-3">
                                {
                                    tools.map((skill) => (
                                        <span key={skill.name} onClick={ () => setSelectedSkill(skill)} className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-4 py-2 rounded-full cursor-pointer  hover:scale-105 transition duration-200 ease-in-out">{skill.name} </span>
                                    )
                                    )
                                }
                            </div>

                        </div>
                    </div>

                    {/* Right column */}
                    <div className="flex justify-center items-center h-full">
                        {selectedSkill ? (

                        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-2 w-full max-w-lg flex flex-col justify-center">

                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded-full bg-purple-600"></div>
                                <h4 className="text-lg font-bold text-gray-900">{selectedSkill.name}</h4>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {selectedSkill.usage}
                            </p>
                        </div>
                        // show something
                        ) : (
                                                    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-2">
                            <div className="flex items-center gap-3">
                                <h4 className="text-lg font-bold text-gray-900">Click a skill to see details</h4>
                            </div>
                          
                        </div>
                        
                        )
                        }

                    </div>
                </div>


            </div>

        </section>
    );
}