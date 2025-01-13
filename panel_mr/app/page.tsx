import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import { MyCard } from "@/components/card";
import { MyTable } from "@/components/table";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 md:py-10">
      <div className="inline-block max-w-xl text-right justify-right">
        <span className={subtitle()}>Hola, Marcos Daniel&nbsp;</span>
      </div>

      <div className="flex flex-col gap-2">
        {/* Card del Balance total */}
        <MyCard />
        {/* Card del rendimiento mensual */}
        <MyCard />
      </div>

      {/* aqui ira el chart no se si sera el cart de anillo de lo sectores*/}

      {/* y un grafico de que me muestre hasta un año solo grafica mensual */}

      {/* aca las transacciones  */}
      <MyTable />
    </section>
  );
}
