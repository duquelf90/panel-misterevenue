function getLastTwelveMonths() {
  const months = [];
  const now = new Date();

  for (let i = 0; i < 12; i++) {
    const pastDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthString = pastDate.toISOString().slice(0, 7); // Formato YYYY-MM
    months.unshift(monthString); // Agrega el mes al inicio del arreglo
  }

  return months;
}

export const generateSaldoData = (inicial, porcentajeAumento) => {
  const months = getLastTwelveMonths();

  const data = [];
  let saldoActual = inicial;

  for (let i = 0; i < months.length; i++) {
    const aumentoMensual = (porcentajeAumento / 100 * inicial) / 12;
    saldoActual += aumentoMensual;

    data.push({
      fecha: months[i],
      saldo_inicial: (i === 0) ? inicial : data[i - 1].saldo_actual,
      saldo_actual: saldoActual
    });
  }

  return { data };
}

export const generateTransactions = () => {
  const transactions = [];
  const now = new Date();

  for (let i = 0; i < 4; i++) {
    const month = now.getMonth() - i * 3; // Restar 3 meses por cada iteración
    const date = new Date(now.getFullYear(), month, 1);
    transactions.push({
      name: "MisterRevenue",
      date: date.toLocaleDateString(),
      amount: 30000, // Monto aleatorio
    });
  }

  return transactions;
};

