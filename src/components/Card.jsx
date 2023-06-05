import React from 'react'

export const Card = ({img,title,children}) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg">
        <img className="w-full h-96 object-cover" src={img} alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
                {children}
            </p>
        </div>
    </div>
  )
}
