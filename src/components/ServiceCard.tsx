import { FC, JSX } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon: JSX.Element
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-oyolloo-blue flex justify-center text-4xl mb-4">{icon}</div>
      <h3 className="text-xl text-black font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default ServiceCard