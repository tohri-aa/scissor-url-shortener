import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react"
import { useNavigate } from "react-router"

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState()
  const navigate = useNavigate()

  const handleShorten = (e) => {
    e.preventDefault()
    if(longUrl)navigate(`/auth?createNew=${longUrl}`)
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:sy-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">The Only URL Shortener You'll Ever Need!</h2>
      <form onSubmit={handleShorten} className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2">
        <Input 
        type= 'url'
        value={longUrl} 
        placeholder='Enter your long URL'
        onChange={(e) => setLongUrl(e.target.value)}
        className='h-full flex-1 py-4 px-4'
        />
        <Button className='h-full' type='submit' variant='destructive'>Shorten!</Button>
      </form>
      {/* <img src="" alt="" /> */}

      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>
          How does the Scissor URL Shortener work?
          </AccordionTrigger>
          <AccordionContent>
          When you enter a long URL, our system generates a shorter version of that URL. This shortened URL redirects to the original long URL when accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do I need an account to use the app?
          </AccordionTrigger>
          <AccordionContent>
            Yes. Creating an account allows you manage your URLS, view analytics and customize your short URLS.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What analytics are available for my shortened URLS?
          </AccordionTrigger>
          <AccordionContent>
            You can view the number of clicks, geolocation data of the clicks and device types for each of your shortened URLs. 
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default LandingPage