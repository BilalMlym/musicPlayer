import React from 'react'


export const DashboardCard = ({icon, name, count}) => {
  return (
    <div className='p-4 w-40 gap-3 h-auto rounded-lg shadow-md bg-red-400'>
      {icon}
      <p className='text-xl text-textColor font-semibold'>{name} </p>
      <p className='text-xl text-textColor font-semibold'>{count} </p>
    </div>
  )
}

function DashboardHome() {
  return (
    <div className='w-full flex items-center p-6 justify-evenly flex-wrap'>
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
    </div>
  )
}

export default DashboardHome