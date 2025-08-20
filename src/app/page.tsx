"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { ThemeToggle } from "./_components/ThemeToggle"


// ✅ Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ["easeOut"] },
  },
}

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground mx-auto">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: ["easeOut"] }}
            className="font-bold text-xl"
          >
            Alimaa Tsermaa
          </motion.div>
          <div className="hidden md:flex items-center space-x-6">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/altsermaa?tab=repositories" target="_blank">
                <Github className="h-5 w-5 hover:text-primary transition-colors" />
              </Link>
            </Button>
            <ThemeToggle />
</div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-24 md:py-32" id="about">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="grid gap-12 lg:grid-cols-2 items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Full Stack Developer
            </h1>
            <p className="text-lg text-muted-foreground">
              Building modern web applications with React, Node.js, and cloud technologies
            </p>
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-[600px]">
              I am passionate about software development and eager to build scalable web applications.
              As a proactive self-learner, I strongly believe in continuous growth and learning.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button asChild>
                <Link href="#projects">🚀 View My Work</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center lg:justify-end"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative group">
              <Image
                src="/image.jpg"
                alt="Alimaa"
                width={400}
                height={400}
                className="rounded-2xl object-cover shadow-xl group-hover:shadow-2xl transition"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/30 to-gray-700/30 opacity-0 group-hover:opacity-100 transition" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="skills" className="py-16">
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="max-w-5xl mx-auto text-center"
  >
    <h2 className="text-3xl font-bold mb-8">Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {[
        "JavaScript (ES6+)",
        "TypeScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Prisma ORM",
        "JWT",
        "Bcrypt",
        "Cloudinary",
        "Tailwind CSS",
        "ShadCN UI",
        "Framer motion",
        "Formik Yup", 
        "Zod",
        "REST API",
        "GitHub",
        "Agile / Scrum",
        "Cloud (Render / Vercel)",
      ].map((skill, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          className="bg-white shadow-md rounded-xl p-4 text-gray-800 font-medium hover:shadow-lg transition"
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


      {/* Projects Section */}
      <section id="projects" className="container py-24 bg-muted/50">
        <motion.div initial="hidden" whileInView="show" variants={staggerContainer} viewport={{ once: true }}>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12"
          >
            Featured Projects
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-commerce website",
                image: "/foodDelivery.png",
                desc: "A full-featured e-commerce website for food ordering. It includes user registration with login, sign-up, input validation, and password reset functionality. Customers can browse and select food items, enter delivery addresses, and manage their cart. An admin panel enables product and order management with real-time updates. Login via email:admin@gmail.com password:123123 to test admin page.",
                tech: ["React", "Node.js", "MongoDB"],
                code: "https://github.com/altsermaa/foodDelivery.git",
                live: "https://food-delivery-3nze.vercel.app/",
              },
              {
                title: "Movie Web Application",
                image: "/movieApp.png",
                desc: "A fully responsive website showcasing the latest and highest-rated movies. Users can browse by genre, search for specific titles, and watch video trailers. The site integrates with external APIs, dynamically fetching data through query parameters to enable seamless navigation across different sections and genres.",
                tech: ["Next.js", "Axios", "Typescript"],
                code: "https://github.com/altsermaa/movieApp.git",
                live: "https://movie-app-5spa.vercel.app/",
              },
              {
                title: "E-commerce App",
                image: "/onlineShop.png",
                desc: "A simple, fully responsive e-commerce website that allows customers to place orders without requiring a login. Orders are submitted with contact details and sent directly to the admin panel. The admin can manage products and update order statuses as needed. The site is easily customizable for any type of business by simply modifying the products and categories. Change path to /admin to test admin page.",
                tech: ["Next.js", "Express", "MongoDB"],
                code: "https://github.com/altsermaa/onlineshop.git",
                live: "https://onlineshop-cwno.vercel.app/",
              },
            ].map((proj, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ y: -6 }}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  <CardHeader className="p-0">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-48"
                    />
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between flex-grow p-6 space-y-4">
                    <div>
                      <CardTitle>{proj.title}</CardTitle>
                      <CardDescription>{proj.desc}</CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((t) => (
                        <Badge key={t} variant="outline">{t}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={proj.code} target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={proj.live} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container py-24">
        <motion.div initial="hidden" whileInView="show" variants={staggerContainer} viewport={{ once: true }}>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12"
          >
            Experience
          </motion.h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                role: "Contract Developer",
                company: "Private Projects",
                period: "2024 - Present",
                desc: "Developing and delivering web applications for private clients, including full-stack solutions with React, Next.js, and MongoDB.",
              },
              {
                role: "Business Analyst",
                company: "Golomt Bank",
                period: "2023 - 2024",
                desc: "Designed sofware development documents",
              },
              {
                role: "Financial Planning Officer",
                company: "TTGS railway project",
                period: "2019 - 2023",
                desc: "Evaluated financial performance to assess project profitability.",
              },
              {
                role: "Digital Channel Manager",
                company: "Golomt Bank",
                period: "2013 - 2019",
                desc: "Analyzed business processes and led digital product initiatives such as internet banking and mobile banking applications.",
              },
            ].map((exp, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-6 rounded-xl border bg-card">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-sm">
                  {exp.company} • {exp.period}
                </p>
                <p className="mt-2 text-muted-foreground">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="container py-24 bg-muted/50">
        <motion.div initial="hidden" whileInView="show" variants={staggerContainer} viewport={{ once: true }}>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12"
          >
            Get In Touch
          </motion.h2>

          <motion.div variants={fadeInUp} className="max-w-xl mx-auto text-center space-y-6">
            <p className="text-muted-foreground">
              I’m open to exciting opportunities and collaborations. Let’s build something amazing together!
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="mailto:alimaa@example.com" className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-5 w-5" /> altsermaa@gmail.com
              </Link>
              <Link href="tel:+97688000000" className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-5 w-5" /> +976 99929224
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
