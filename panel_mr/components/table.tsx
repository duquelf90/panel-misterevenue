/* eslint-disable prettier/prettier */

export const MyTable = () => {
  return (
    <>
      <div>Transacciones</div>
      {/* aca el div principal */}

      <div className="flex gap-2">
        <div className="avatar">icon</div>
        <div className="flex flex-col">
          <span>Mister Revenue LLC</span>
          <span className="text-gray-500">enviado 3/2/2025</span>
        </div>
        <div className="text-right">
          <p className="font-semibold text-green-700">
            +11,588.69 MXN
          </p>
        </div>
      </div>
    </>
  );
};
