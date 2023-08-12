export function calculateDays(HH, horasDiarias, diasLaborables = 20) {
    const horasHombre = Math.round(HH * 10) / 10;
    const diasSinRedondear = horasHombre / horasDiarias;
    const dias = Math.floor(diasSinRedondear * 10) / 10;
    const mesesSinRedondear = dias / diasLaborables;
    const meses = Math.round(mesesSinRedondear * 100) / 100;
    return [dias, meses];
  }
  