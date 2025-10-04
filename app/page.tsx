"use client"

import { Badge } from "@/components/ui/badge"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import {
  Calendar,
  Mail,
  Phone,
  MessageSquare,
  FileText,
  BarChart3,
  Globe,
  Clock,
  CheckCircle,
  ArrowRight,
  Calculator,
  Timer,
  Play,
  Pause,
  RotateCcw,
  BookOpen,
  ShowerHeadIcon as Swimmer,
  Megaphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function VirtualAssistantPortfolio() {
  const { scrollYProgress } = useScroll()

  // Interactive Activities State
  const [productivityScore, setProductivityScore] = useState([50])
  const [emailCount, setEmailCount] = useState("")
  const [timeSpent, setTimeSpent] = useState("")
  const [calculatedSavings, setCalculatedSavings] = useState(0)

  // Pomodoro Timer State
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60) // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false)
  const [isBreak, setIsBreak] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Task Tracker State
  const [tasks, setTasks] = useState([
    { id: 1, text: "Check emails", completed: false },
    { id: 2, text: "Schedule meetings", completed: false },
    { id: 3, text: "Update calendar", completed: false },
  ])
  const [newTask, setNewTask] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  // Pomodoro Timer Effect
  useEffect(() => {
    if (!mounted) return // Add this line to prevent the effect from running on the server or before hydration

    let interval: NodeJS.Timeout
    if (isRunning && pomodoroTime > 0) {
      interval = setInterval(() => {
        setPomodoroTime((time) => time - 1)
      }, 1000)
    } else if (pomodoroTime === 0) {
      setIsRunning(false)
      setIsBreak(!isBreak)
      setPomodoroTime(isBreak ? 25 * 60 : 5 * 60) // 25 min work, 5 min break
    }
    return () => clearInterval(interval)
  }, [isRunning, pomodoroTime, isBreak, mounted])

  // Calculate Productivity Savings
  const calculateSavings = () => {
    const emails = Number.parseInt(emailCount) || 0
    const hours = Number.parseFloat(timeSpent) || 0
    const hourlyRate = 25 // Average hourly rate
    const timeSavedPerEmail = 2 // minutes saved per email
    const totalTimeSaved = (emails * timeSavedPerEmail) / 60 // convert to hours
    const savings = Math.round(totalTimeSaved * hourlyRate)
    setCalculatedSavings(savings)
  }

  // Task Management
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask("")
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const services = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Administrative & Business Support",
      description: "Comprehensive administrative support to keep your business running smoothly.",
      features: ["Data Entry & Research", "Calendar & Email Management", "File Organization & Conversions", "Appointment Scheduling & Follow-ups", "Invoicing & Reporting"],
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Project & Operations Management",
      description: "Streamlined project management and operational support for better efficiency.",
      features: ["Task Tracking & Timeline Monitoring", "SOP & Workflow Creation", "Team Coordination & Communication", "Quality & Risk Management"],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Digital Marketing & Automation",
      description: "Complete digital marketing solutions with automation for scalable growth.",
      features: ["Email Campaign Setup (Mailchimp, Klaviyo, ActiveCampaign)", "Lead Generation & Nurturing (LinkedIn, Apollo, Hunter.io)", "CRM Setup & Automation (HubSpot, Zoho, GoHighLevel)", "Pipeline Cleanup & Optimization", "Marketing Automation (Email, CRM, Ads, Social Media)", "Ads Setup & Performance Monitoring (Meta Ads, Google Ads)"],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Creative & Tech Support",
      description: "Professional creative and technical support for your business needs.",
      features: ["Graphic Design (Canva, Photoshop)", "Video Editing (CapCut, Adobe Premiere Pro)", "Website Support (Wix, WordPress, Shopify)"],
    },
  ]

  const projects = [
    {
      image: "/images/Email/email.JPG",
      title: "Gmail Inbox Organization & Labeling",
      description:
        "I structured a Gmail inbox using custom labels, tabs, and filters to categorize emails by topic, priority, and source. This setup streamlined communication, reduced clutter, and enabled faster access to business-critical messages.",
      link: "https://drive.google.com/drive/folders/1W8OmD08Q3o0ThMQwK_a9l4rX5A3feHZK?usp=drive_link",
    },
    {
      image: "/images/SalesNav/SalesNavigator.jpg",
      title: "Sales Navigator – B2B Lead Generation & Outreach",
      description: "Sourced 50 high-quality B2B leads using LinkedIn Sales Navigator with filters based on client ICP (industry, company size, location, and title). Exported data to Excel and created 3 personalized outreach message templates.",
      link: "https://drive.google.com/drive/folders/1Ow-pPWqSVDXTDMyZK_v-Le5SDuQn1LDz?usp=drive_link",
    },
    {
      image: "/images/GoogleWorkspace/Google workspace.JPG",
      title: "Google Workspace Forms, Slides & Workflow Setup",
      description:
        "I designed and implemented Google Forms for data collection, Google Slides for client presentations, and integrated these tools into broader workflows using Google Workspace. This setup enhanced usability, reduced manual effort, and supported scalable client-facing systems.",
      link: "https://drive.google.com/drive/folders/1nfon4E24ygnbrb3VFzwnp179MelU5NMG?usp=drive_link",
    },
    {
      image: "/images/project-lead-generation.png",
      title: "Lead Generation - Real Estate USA",
      description: "Conducted in-depth market research and compiled a detailed report for a new product launch.",
      link: "https://drive.google.com/drive/folders/1D08HzlQRSDCgRRfZCh8N-rHvob9tSRRP?usp=drive_link",
    },
    {
      image: "/images/project-excel-reporting.png",
      title: "Excel Reporting - Sales Dashboard",
      description:
        "Managed logistics and attendee communication for a successful virtual conference, ensuring smooth execution.",
      link: "https://drive.google.com/drive/folders/1c-_d_2mo7SV128ga4jk7-_TiDe9zu78x?usp=drive_link",
    },
    {
      image: "/images/ProjectManagement/1. agile - notion.JPG",
      title: "Business Project Management Systems",
      description:
        "I designed and implemented structured project management systems using Notion, Trello, and monday.com to support business operations. Each platform was customized to organize tasks by phase, assign team roles, track progress, and visualize timelines.",
      link: "https://drive.google.com/drive/folders/1RIIgxndLVmkZVXQe_ER7Z8Yx38MkvCX0?usp=drive_link",
    },
    {
      image: "/images/Klaviyo/klaviyo.JPG",
      title: "Klaviyo Workflow – Automated Welcome Series for New Subscribers",
      description:
        "I built a multi-step welcome series in Klaviyo to automate subscriber engagement for Theday Digital. The flow included timed email sequences triggered by list sign-up, designed to deliver onboarding messages, collect feedback, and drive social media follow-through.",
      link: "https://drive.google.com/drive/folders/120PlLvtjtwrh78UuttKxYDEmJJwyrJwe?usp=drive_link",
    },
    {
      image: "/images/TravelManagement/Travel Managemnt Service.JPG",
      title: "Travel Management & Booking Support",
      description: "This project involved managing international travel logistics, including flight research, price comparison, booking optimization, and itinerary documentation. I used platforms like KAYAK to filter options, secure cost-effective deals, and coordinate round-trip flights with baggage and discount configurations.",
      link: "https://drive.google.com/drive/folders/17kPeCk7z9lBXmEAx44FdB0EHiGYpahMX?usp=drive_link",
    },
    {
      image: "/images/PipedriveCRM/pipdrive.webp",
      title: "Pipedrive CRM Setup & Workflow Automation",
      description:
        "Configured Pipedrive for lead tracking, deal stages, and team visibility. Automated pipeline actions using custom filters, labels, and integrations with Google Workspace. Delivered a clean, scalable CRM system with documentation for client onboarding and sales reporting.",
      link: "#",
    },
  ]

  const testimonials = [
    {
      logo: "/images/theday.jpeg",
      name: "TheDay Digital Marketing Agency",
      content:
        "Natnael consistently delivers accurate and well-organized data. His speed and attention to detail saved us hours of work every week.",
    },
    {
      logo: "/images/insight.jpeg",
      name: "Insight Software",
      content:
        "Great experience working with Natnael on our lead generation project. He was responsive, thorough, and delivered exactly what we needed — on time.",
    },
    {
      logo: "/images/allagi.jpeg",
      name: "Allagi Travel Agency",
      content:
        "Natnael handled our product listings and web research with professionalism and precision. Heʼs dependable, fast, and gets the job done right.",
    },
  ]

  const certifications = [
    {
      image: "/images/certifications/adama.png",
      title: "Software Engineering Degree - Adama Science and Technology University",
    },
    {
      image: "/images/certifications/alx.png",
      title: "Virtual Assistant - ALX",
    },
    {
      image: "/images/certifications/google.png",
      title: "Digital Marketing - Google",
    },
    {
      image: "/images/certifications/alison.png",
      title: "Email Marketing - Allison",
    },
    {
      image: "/images/certifications/dereja.png",
      title: "Soft Skill and Career Guidance - Derja Academy",
    },
    {
      image: "/images/certifications/edi-ethiopia.png",
      title: "Entrepreneurship - EDI",
    },
  ]

  const hobbies = [
    {
      icon: <Megaphone className="w-8 h-8" />,
      image: "/images/events.jpeg",
      title: "Events",
      description: "Engaging with communities and learning from diverse perspectives at various events.",
    },
    {
      icon: <Swimmer className="w-8 h-8" />,
      image: "/images/swimming.jpeg",
      title: "Swimming",
      description: "Staying active and refreshed with regular swimming sessions.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      image: "/images/book.jpeg",
      title: "Books",
      description: "Expanding knowledge and gaining new insights through reading a variety of books.",
    },
  ]

  const stats = [
    { number: "5+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Availability" },
    { number: "1+", label: "Years Experience" }, // Changed from 3+ to 1+
  ]

  return (
    <>
      {!mounted ? (
        <div className="min-h-screen flex items-center justify-center bg-subtle-gradient-animated text-white">
          Loading portfolio...
        </div>
      ) : (
        <div className="min-h-screen bg-subtle-gradient-animated">
          {/* Intro Video Section (very top) */}
          <section id="intro" className="pt-16 pb-6 px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Video Introduction</h2>
              <div className="rounded-2xl overflow-hidden border-8 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-2">
                <div className="relative w-full h-0 pt-[56.25%] rounded-xl overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/uF5Exr2fPnQ?rel=0&modestbranding=1"
                    title="Introduction video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Hero Section */}
          <section id="home" className="pt-16 py-16 px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col items-center text-center gap-12">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border-8 border-gradient-to-r from-blue-500 to-purple-500 shadow-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-2">
                    <div className="relative w-full h-0 pt-[56.25%] rounded-xl overflow-hidden">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/uF5Exr2fPnQ"
                        title="Introduction video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute top-10 right-10 bg-slate-800 border border-slate-600 p-4 rounded-lg shadow-lg"
                  >
                    <Mail className="w-6 h-6 text-blue-600" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    className="absolute bottom-10 left-10 bg-slate-800 border border-slate-600 p-4 rounded-lg shadow-lg"
                  >
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-3xl mx-auto"
                >
                  <motion.h1
                    className="text-5xl lg:text-7xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Your Professional
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                      Virtual Assistant
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-xl text-slate-300 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Streamline your business operations with expert virtual assistance. From email management to content
                    creation, I help entrepreneurs and businesses focus on what matters most.
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {/* "Get Started Today" button now links to Contact section */}
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      Get Started Today
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                    {/* "View My Services" button now links to Services section */}
                    <a
                      href="#services"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 border border-slate-400 text-slate-300 hover:bg-slate-800 bg-transparent"
                    >
                      View My Services
                    </a>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    {stats.map((stat, index) => (
                      <motion.div key={index} whileHover={{ scale: 1.05 }} className="text-center">
                        <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                        <div className="text-slate-400 text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">About Me</h2>

                  <p className="text-lg text-slate-300 mb-6">
                    I'm Natnael Ayele, a virtual assistant with over one year of experience helping busy entrepreneurs
                    and growing businesses streamline their operations. I combine precision, speed, and clear
                    communication to free up your time and unlock momentum.
                  </p>

                  <p className="text-lg text-slate-300 mb-8">
                    From email management and calendar optimization to research, reporting, and client support, I deliver
                    reliable, professional outcomes you can count on. Whether you need ongoing support or a one-off
                    project, let's make your next week lighter and your goals closer.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-blue-600 text-white">
                          Email Management
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-600 text-white">
                          Web Research
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-600 text-white">
                          Project Management
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-600 text-white">
                          Email Marketing Support
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-600 text-white">
                          Lead Generation
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-slate-400 text-slate-300">
                          Google Workspace
                        </Badge>
                        <Badge variant="outline" className="border-slate-400 text-slate-300">
                          Microsoft Office
                        </Badge>
                        <Badge variant="outline" className="border-slate-400 text-slate-300">
                          Slack & Teams
                        </Badge>
                        <Badge variant="outline" className="border-slate-400 text-slate-300">
                          Trello
                        </Badge>
                        <Badge variant="outline" className="border-slate-400 text-slate-300">
                          Notion
                        </Badge>
                        <Badge variant="outline" className="border-slate-400 text-slate-300">
                          Zoom
                        </Badge>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-slate-700 border border-slate-600 p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center mb-6">
                      <Clock className="w-6 h-6 text-blue-400 mr-3" />
                      <span className="font-semibold text-white">Available 24/7</span>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Response Time</span>
                        <span className="font-semibold text-green-400">{"< 2 hours"}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Project Completion</span>
                        <span className="font-semibold text-green-400">On Time</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Communication</span>
                        <span className="font-semibold text-green-400">Daily Updates</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">My Services</h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Comprehensive virtual assistance solutions tailored to your business needs
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-slate-700 border-slate-600">
                      <CardContent className="p-8">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6"
                        >
                          {service.icon}
                        </motion.div>

                        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>

                        <p className="text-slate-300 mb-6">{service.description}</p>

                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                              <span className="text-slate-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">My Recent Projects</h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Showcasing a selection of my work and successful collaborations.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.a
                    key={index}
                    href={project.link} // Use the project link
                    target="_blank" // Open in new tab
                    rel="noopener noreferrer" // Security best practice
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="block" // Make the entire motion.a block clickable
                  >
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-slate-700 border-slate-600">
                      <CardContent className="p-6">
                        <img
                          src={project.image || "/placeholder.svg"} // Use the actual image path
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-slate-300">{project.description}</p>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">My Certifications</h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Showcasing my commitment to continuous learning and professional development.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-slate-700 border-slate-600">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <img
                          src={cert.image || "/placeholder.svg"}
                          alt={`${cert.title} logo`}
                          className="w-24 h-24 object-contain mb-4 rounded-full"
                        />
                        <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Hobbies Section */}
          <section id="hobbies" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">My Hobbies & Interests</h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">A glimpse into what I enjoy outside of work.</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-slate-700 border-slate-600">
                      <CardContent className="p-6">
                        <div className="w-full h-48 overflow-hidden rounded-md mb-4">
                          <img
                            src={hobby.image || "/placeholder.svg"}
                            alt={hobby.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mr-4">
                            {hobby.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-white">{hobby.title}</h3>
                        </div>
                        <p className="text-slate-300">{hobby.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Client Testimonials</h2>
                <p className="text-xl text-slate-300">Here are some of the feedback from my clients:</p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-slate-700 border-slate-600">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          {testimonial.logo && (
                            <img
                              src={testimonial.logo || "/placeholder.svg"}
                              alt={`${testimonial.name} logo`}
                              className="w-12 h-12 object-contain mr-4 rounded-full"
                            />
                          )}
                          <div className="font-semibold text-white">{testimonial.name}</div>
                        </div>

                        <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>


          {/* Contact Section */}
          <section id="contact" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-xl mb-12 text-slate-300">
                  Let's discuss how I can help streamline your business operations
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  >
                    <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-slate-300">natnaelayele80@gmail.com</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  >
                    <Phone className="w-8 h-8 mx-auto mb-4 text-green-400" />
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-slate-300">+251935189776</p>
                    <p className="text-slate-300">+251947626239</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  >
                    <MessageSquare className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                    <h3 className="font-semibold mb-2">Live Chat</h3>
                    <p className="text-slate-300">Telegram: @natnael80</p>
                    <p className="text-slate-300">Signal: natnael80.40</p>
                  </motion.div>
                </div>

                <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Free%20Virtual%20Assistant%20Consultation&details=Schedule%20a%20free%20consultation%20to%20discuss%20your%20virtual%20assistant%20needs%20with%20Natnael%20Ayele.&sf=true&output=xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    Schedule a Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-slate-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Natnael Ayele
                </div>
                <p className="text-slate-400 mb-6">Professional Virtual Assistant Services</p>
                <p className="text-slate-500 text-sm">© 2025 Natnael Ayele. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  )
}
