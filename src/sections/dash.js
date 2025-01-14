import React, { useState, useEffect } from 'react';
import FeatureCard from 'components/card';
import MyTable from 'components/table';
import MyChart from 'components/chart';

const Dashboard = () => {
  return (
    <section id="home" className="flex flex-col gap-4 md:py-10 px-4">
      <div className="container mx-auto px-4">
        <div className="inline-block w-full text-right justify-right my-5">
          <span className='my-2 text-lg lg:text-xl text-default-600 block max-w-full'>Hola, Marcos A. Daniel&nbsp;</span>
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
          <FeatureCard
            balance={1200000}
            roi={36}
            subtitle="anual"
            title="Cartera Actual"
          />

          <FeatureCard
            balance={3000}
            roi={3}
            subtitle="mensual"
            title={"Ingreso Mensual"}
          />
        </div>
        <MyChart />
        <MyTable />
      </div>
    </section>
  )
}

export default Dashboard
