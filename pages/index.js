import Layout from '@/components/layout'
import Header from '@/components/header'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />

      <Header logoWhite menuWhite />
      
      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          
          <m.div variants={fade}>

            <div className="relative flex flex-wrap items-end justify-center w-full min-h-screen bg-black bg-center bg-cover">
              <div className="absolute inset-0 z-0">
                <video loop autoPlay muted className="w-full h-full object-center object-cover">
                  <source src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_2MB.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
              </div>

              <h1 className="w-full text-center mb-0 font-display text-[10vw] lg:text-[4.5vw] 3xl:text-[4vw] italic text-white mix-blend-difference">Experts in creative communication.</h1>
              
              <div className="w-full self-end pb-[32px] lg:pb-[64px] relative z-10">
                <Container>
                  <div className="flex flex-wrap items-center justify-between w-full text-sm uppercase">
                    <Link href="/about">
                      <a className="w-1/2 md:w-auto text-white text-center">
                        About
                      </a>
                    </Link>

                    <Link href="/work">
                      <a className="w-1/2 md:w-auto text-white text-center">
                        Work
                      </a>
                    </Link>

                    <Link href="/clients">
                      <a className="w-1/2 md:w-auto text-white text-center">
                        Clients
                      </a>
                    </Link>

                    <a href="https://digitalshowroom.l52.world/" target="_blank" rel="noopener noreferrer" className="w-1/2 md:w-auto text-white text-center">
                      Digital Showroom
                    </a>

                    <Link href="/contact">
                      <a className="w-1/2 md:w-auto text-white text-center">
                        Contact
                      </a>
                    </Link>
                  </div>
                </Container>
              </div>

            </div>
          </m.div>
          
        </m.div>

      </LazyMotion>
      
    </Layout>
  )
}
