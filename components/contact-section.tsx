"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { Mail, Calendar } from "lucide-react" // Removed Download icon

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  // Generic Google Calendar event creation link
  // You can customize this further with specific event details if needed
  const googleCalendarLink =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting%20with%20Natnael%20Ayele&details=Discussion%20about%20software%20engineering%20opportunities.&dates=20250720T090000Z/20250720T100000Z"

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            You can reach me directly through my email or schedule a meeting:
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              asChild
            >
              <a href="mailto:natnaelayele80@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                natnaelayele80@gmail.com
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
              asChild
            >
              <a href={googleCalendarLink} target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Meeting
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
