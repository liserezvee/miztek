"use client"
import { FC } from 'react'
import ServiceCard from './ServiceCard'
import Lottie from 'lottie-react'

import mbl from '../assets/mbl.json'
import web from '../assets/web.json'
import uuid from '../assets/uiux.json'
import ai from '../assets/ai.json'
import business from '../assets/business.json'

const ServicesSection: FC = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications tailored to your business needs.',
      icon: <Lottie className='w-25 h-25' animationData={web} loop={true} />,
    },
    {
      title: 'Mobile App Development',
      description: 'iOS and Android apps built with native or cross-platform technologies.',
      icon: <Lottie className='w-25 h-25' animationData={mbl} loop={true} />,
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that enhance user experience.',
      icon: <Lottie className='w-25 h-25 ' animationData={uuid} loop={true} />,
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side solutions for your applications.',
      icon: <Lottie className='w-25 h-25' animationData={mbl} loop={true} />,
    },
    {
      title: 'AI & Machine Learning',
      description: 'Implement intelligent solutions to automate and optimize processes.',
      icon: <Lottie className='w-25 h-25' animationData={ai} loop={true} />,
    },
    {
      title: 'Business Analytics',
      description: 'Data-driven insights to help you make better decisions.',
      icon: <Lottie className='w-25 h-25' animationData={business} loop={true} />,
    },
  ]

  return (
    <section id='devservices' className="py-16 bg-[#F2E3DB] ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-black font-bold mb-4">Our Development Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of software development services to meet all your digital needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection