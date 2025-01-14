import { subtitle } from "@/components/primitives";
import { MyCard } from "@/components/card";
import { MyTable } from "@/components/table";
import MyChart from "@/components/grafica";

export default function Home() {
  return (
    <section className="flex flex-col gap-4 md:py-10 px-4">
      <div className="inline-block w-full text-right justify-right">
        <span className={subtitle()}>Hola, Marcos A. Daniel&nbsp;</span>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <MyCard
          balance={1200000}
          roi={36}
          subtitle="anual"
          title="Cartera Actual"
        />

        <MyCard
          balance={3000}
          roi={3}
          subtitle="mensual"
          title={"Ingreso Mensual"}
        />
      </div>
      <MyChart />
      <MyTable />
    </section>
  );
}
