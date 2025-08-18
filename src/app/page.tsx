import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background mx-auto">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Alimaa Tsermaa</div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/altsermaa?tab=repositories" target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Full Stack Developer</h1>
              <p className="text-xl text-muted-foreground">
                Building modern web applications with React, Node.js, and cloud technologies
              </p>
            </div>
            <p className="text-lg text-muted-foreground max-w-[600px]">
               I am passionate about software development and eager to build scalable web applications. As a proactive self-learner, I strongly believe in continuous growth and learning.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/image.jpg"
                alt="Alimaa"
                width={400}
                height={400}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-24 bg-muted/50">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
          <p className="text-lg text-muted-foreground">
            "I have over 5 years of experience in banking technology solutions, with a strong focus on fintech. My background includes analyzing and developing business processes, and I hold a Project Management Professional (PMP) certification. More recently, I’ve transitioned into software development, building several projects across both frontend and backend technologies."
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container py-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Skills & Technologies</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">ShadCN UI</Badge>
                <Badge variant="secondary">Framer motion</Badge>
                <Badge variant="secondary">Formik Yup</Badge>
                <Badge variant="secondary">Zod</Badge>
                
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Express.js</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Prisma ORM</Badge>
                <Badge variant="secondary">JWT</Badge>
                <Badge variant="secondary">Bcrypt</Badge>
                <Badge variant="secondary">Cloudinary</Badge>
                <Badge variant="secondary">Rest API</Badge>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Tools & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Git</Badge>
                <Badge variant="secondary">Vercel</Badge>
                <Badge variant="secondary">Render</Badge>
                <Badge variant="secondary">Figma</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-24 bg-muted/50">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/foodDelivery.png"
                  alt="E-commerce Dashboard"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
              </CardHeader>
              <CardContent className="space-y-4">
                <CardTitle>E-commerce website</CardTitle>
                <CardDescription>
                  "A full-featured e-commerce website for food ordering. It includes user registration with login, sign-up, input validation, and password reset functionality. Customers can browse and select food items, enter delivery addresses, and manage their cart. An admin panel enables product and order management with real-time updates.  Login via email:admin@gmail.com password:123123 to test admin page."                   </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://github.com/altsermaa/foodDelivery.git" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://food-delivery-3nze.vercel.app/" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/movieApp.png"
                  alt="Movie Application"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
              </CardHeader>
              <CardContent className="space-y-4">
                <CardTitle>Movie Web Application</CardTitle>
                <CardDescription>
                  "A fully responsive website showcasing the latest and highest-rated movies. Users can browse by genre, search for specific titles, and watch video trailers. The site integrates with external APIs, dynamically fetching data through query parameters to enable seamless navigation across different sections and genres."
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Axios</Badge>
                  <Badge variant="outline">Shadcn UI</Badge>
                  <Badge variant="outline">Typescript</Badge>
                  <Badge variant="outline">React-Youtube</Badge>
                  <Badge variant="outline">TMDB API</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://github.com/altsermaa/movieApp.git" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://movie-app-5spa.vercel.app/" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/onlineShop.png"
                  alt="Weather App"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
              </CardHeader>
              <CardContent className="space-y-4">
                <CardTitle>E-commerce App</CardTitle>
                <CardDescription>
                  "A simple, fully responsive e-commerce website that allows customers to place orders without requiring a login. Orders are submitted with contact details and sent directly to the admin panel. The admin can manage products and update order statuses as needed. The site is easily customizable for any type of business by simply modifying the products and categories. Change path to /admin to test admin page."
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Express</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://github.com/altsermaa/onlineshop.git" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://onlineshop-cwno.vercel.app/" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container py-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Experience</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Business Analyst</CardTitle>
                    <CardDescription>Golomt Bank of Mongolia</CardDescription>
                  </div>
                  <Badge variant="outline">2023 - 2024</Badge>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Financial Planning Officer</CardTitle>
                    <CardDescription>TTGS Railway Project</CardDescription>
                  </div>
                  <Badge variant="outline">2019 - 2023</Badge>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Digital Channel Manager</CardTitle>
                    <CardDescription>Golomt Bank of Mongolia</CardDescription>
                  </div>
                  <Badge variant="outline">2015 - 2019</Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-24 bg-muted/50">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              I'm always interested in new opportunities and interesting projects. Let's connect!
            </p>
          </div>
          <Card>
            <CardHeader className="flex justify-evenly gap-15">
              <div>
                              <CardTitle>Email</CardTitle>
              <CardDescription>altsermaa@gmail.com</CardDescription>
              </div>
              <div>
                              <CardTitle>Phonenumber</CardTitle>
              <CardDescription>976-99929224</CardDescription>
              </div>


            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Alimaa Tsermaa.</p>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/altsermaa?tab=repositories" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
