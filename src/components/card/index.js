import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';

export const CapitalDisplay = ({ initialCapital }) => {
  const formattedCapital = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "MXN", // Cambia a 'USD' o cualquier otra moneda según necesites
  }).format(initialCapital);

  return <p>{formattedCapital}</p>;
};

export const FeatureCard = ({ title, subtitle, balance, roi }) => {
  return (
    <Card className="w-full rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-2xl font-semibold">
        <CapitalDisplay initialCapital={balance} />
      </CardBody>
      <CardFooter className="flex items-end justify-between gap-1">
        <p className="font-bold text-small text-default-400">Rentabilidad {subtitle}</p>
        <span className="flex items-center gap-1.5 font-medium  text-green-600">{roi}%
          <svg className="fill-current" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.35716 2.3925L0.908974 5.745L5.0443e-07 4.86125L5 -5.1656e-07L10 4.86125L9.09103 5.745L5.64284 2.3925L5.64284 10L4.35716 10L4.35716 2.3925Z" fill=""></path></svg>
        </span>
      </CardFooter>
    </Card>
  )
}

