import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const team = [
  {
    name: "Thomas Marge",
    position: "Co-Founder, CEO",
    image: "/thomas.avif",
    description: "Previously founded inBalance (YC W21), acquired by Stem (NYSE: STEM) in 2023. Led battery storage optimization at Stem. Left Pure Mathematics PhD at University of Cambridge to build inBalance. Holds Masters in Applied Mathematics and B.S.E. in Pure and Applied Mathematics from Johns Hopkins.",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    name: "Derek Modzelewski",
    position: "Co-Founder, CTO",
    image: "/derek.avif",
    description: "Placed first energy commodity trades 10 years ago. Adept's first technical hire; built AI models used to raise $400m+. Previously worked with early foundation models at Meta as ML engineer. Holds Masters in C.S. and B.S.E. in C.S. & Applied Mathematics from Johns Hopkins.",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-muted/20 to-muted/60">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The brilliant minds behind our AI innovations
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {team.map((member) => (
            <div 
              key={member.name} 
              className="bg-background p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-muted/50 hover:border-primary/20"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6 group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-muted group-hover:border-primary transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">{member.name}</h3>
                <p className="text-primary/90 mb-3 font-medium">{member.position}</p>
                <p className="text-muted-foreground mb-6 max-w-md">{member.description}</p>
                <div className="flex gap-4">
                  <Link 
                    href={member.social.twitter} 
                    className="hover:text-primary transition-colors duration-300"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link 
                    href={member.social.linkedin} 
                    className="hover:text-primary transition-colors duration-300"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link 
                    href={member.social.github} 
                    className="hover:text-primary transition-colors duration-300"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}