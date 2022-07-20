import React from 'react'
import Layout from '../components/layout'


export default function page() {
  return (
    <Layout backgroundColor="#223847" headerFontColor={'white'} hideLogoOnLoad={false}>
      <div className="min-h-screen pt-32 text-white px-6 ">
        <div className="container mx-auto max-w-5xl justify-center text-lg">
          <h1 className=" text-6xl text-white">a history of this, that, and me</h1>
        </div>
        <div className="max-w-3xl mx-auto mt-16 text-white text-2xl justify-center">
          <p><span className="text-4xl">First things first.</span> Let's get a few important items out of the way.</p>
          <p className="my-3 max-w-2xl mx-auto">1. yes, I was born with the last name Miracle. </p>
          <p className="my-3 max-w-2xl mx-auto">2. My name is pronounced "Stee phen" not "Stefen". It's the historically accurate way. Sorry, Gen Z.</p>
          <p className="my-3 max-w-2xl mx-auto">3. Yes, this quirky website matches my personality. You've been warned. I'm a little <span className="font-cursive text-secondary">"odd"</span></p>
          <p className="my-3 max-w-2xl mx-auto">4. Don't confuse quirky with clownish. I am personable, but I am also driven and hyper-focused on the <span className="font-cursive">"details"</span>.</p>
        </div>
        <div className="mx-auto text-white lg:mt-24 mt-16 mb-24">
          <p className="max-w-6xl mx-auto text-2xl lg:text-6xl leading-relaxe">What others have said<span className="text-secondary">:</span></p>
          <div className="lg:block max-w-6xl mx-auto">
            <div className="w-full lg:w-4/5 px-4">
              <div className="rounded-lg px-8 py-8">
                <p className="font-cursive text-xl lg:text-2xl leading-relaxed">"Working with Stephen on several different projects showed me not only his time management skills and his ability to deliver within agreed upon deadlines, but also his ability to learn and adapt quickly. He is always a resource that I can count on and working with him has been a pleasure. His work is always top notch."</p>
                <p className="text-xl lg:text-xl leading-relaxed">- <span className="text-secondary">Carolyn Stork - Digital Project Manager</span></p>
              </div> 
            </div> 
          </div>
          <div className="lg:block max-w-6xl mx-auto justify-center">
            <div className="w-full lg:w-4/5 px-4 justify-center mx-auto">
              <div className="rounded-lg px-8 py-8">
                <p className="font-cursive text-xl lg:text-2xl leading-relaxed">"Stephen is the most brilliant mentor I've had the pleasure of working with. His knowledge covers a wide array of topics and goes much deeper than I could've imagined. He taught me so much during my time on his team, and some important life lessons. He's inspired me to work hard and to be a better developer and leader every day!"</p>
                <p className="text-xl lg:text-xl leading-relaxed">- <span className="text-secondary">Adam Alicki - Senior Fullstack Engineer</span></p>
              </div> 
            </div> 
          </div>
          <div className="lg:block max-w-6xl mx-auto justify-center">
            <div className="w-full lg:w-3/5 px-4 justify-center">
              <div className="rounded-lg px-8 py-8">
                <p className="font-cursive text-xl lg:text-2xl leading-relaxed">"Stephen's ability to lead brought me success beyond what I thought was possible. I recommend Stephen when ever possible - I trust him and his talents and abilities."</p>
                <p className="text-xl lg:text-xl leading-relaxed">- <span className="text-secondary">John O'Keefe - Digital Media</span></p>
              </div> 
            </div> 
          </div>
        </div>
      </div>
    </Layout>
  )
}