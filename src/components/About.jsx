import { Briefcase, Code, User } from "lucide-react"
const About = () => {
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md_text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6"> 
                        <h3 className="text-2xl font-semibold">Pasjonat Web Developmentu </h3>
                        <p className="text-muted-foreground">Poza programowaniem cenię sobie pracę zespołową, wymianę pomysłów i wspólne rozwiązywanie problemów. Jestem osobą komunikatywną, ambitną i wytrwałą – lubię stawiać sobie cele i konsekwentnie do nich dążyć. Chętnie angażuję się w nowe projekty, gdzie mogę nie tylko rozwijać swoje umiejętności techniczne, ale także wnieść świeże spojrzenie i pozytywną energię do zespołu.</p>
                        <p>W wolnym czasie śledzę nowinki technologiczne, rozwijam własne projekty oraz poszerzam wiedzę poprzez kursy online i praktyczne eksperymenty z nowymi frameworkami. Lubię również sport i gry zespołowe, które uczą współpracy i szybkiego reagowania – umiejętności, które z powodzeniem przenoszę do pracy w IT.</p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="button">Skontaktuj się ze mną</a>
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Pobierz CV</a>
                        </div>
                    </div>
                   
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover bg-primary/4">
                            <div className="flex gap-4 items-start">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Tworzę nowoczesne i responsywne aplikacje internetowe.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover bg-primary/4">
                            <div className="flex gap-4 items-start">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">Projektuję intuicyjne interfejsy z naciskiem na użyteczność.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover bg-primary/4">
                            <div className="flex gap-4 items-start">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Projekty i doświadczenie</h4>
                                    <p className="text-muted-foreground">Realizuję projekty rozwijające moje umiejętności w IT.</p>
                                </div>
                            </div>
                        </div>

                   </div>
                </div>
            </div>
        </section>
    )
}

export default About