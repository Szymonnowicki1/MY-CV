import { Facebook, Github, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Dzięki za wiadomość! Odpiszę jak najszybciej.");
    }
    return(
        <section id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
            

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Jeśli wpadłem ci w oko lub chcesz ze mną współpracować to śmiało pisz!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Dane kontaktowe</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Email</h4>
                                    <a href="mailto:ardwin1234300@wp.pl" className="text-muted-foreground hover:text-primary transition-colors">
                                        ardwin1234300@wp.pl
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Numer</h4>
                                    <a href="tel:+48535027007" className="text-muted-foreground hover:text-primary transition-colors">
                                        +48 535-027-007
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Lokalizacja</h4>
                                    <a  className="text-muted-foreground hover:text-primary transition-colors">
                                        Polska, Gdańsk
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Skontaktuj się ze mną</h4>
                            <div className=" flex space-x-4 justify-center">
                                <a href="https://github.com/Szymonnowicki1" target="_blank">
                                    <Github/>
                                </a>
                                <a href="https://www.instagram.com/szymonowicki/" target="_blank">
                                    <Instagram/>
                                </a>
                                <a href="https://www.facebook.com/szymon.nowicki.144/" target="_blank">
                                    <Facebook/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-sx" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">Wyślij wiadomość</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">Imię</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Szymon Nowicki"
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="ardwin1234300@wp.pl"
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">Wiadomość</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Witam, napisz jakie masz pytania..."
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="button w-full flex items-center justify-center gap-2 cursor-pointer"
                                >
                                Wyślij <Send size={16}/>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact;