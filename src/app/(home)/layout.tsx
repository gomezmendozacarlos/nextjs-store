import Hero  from "app/components/home/Hero"
import Description from "app/components/home/Description"
import { JSX } from "react"

export default function HomeLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div>
      <Hero />
      <Description />
      {children}
    </div>
  )
}