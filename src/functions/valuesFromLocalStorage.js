export function getAllValues() {
    const { averagePF, title } = JSON.parse(localStorage.getItem("averagePF"));
    const allValues = {
      VPFSA: localStorage.getItem("vpfsa-value"),
      TDI: localStorage.getItem("influencepoints-value"),
      VPFA: localStorage.getItem("adjusted-influence-value"),
      "Horas PF Promedio": averagePF,
      "Horas diarias": localStorage.getItem("dailyHours"),
      Desarrolladores: localStorage.getItem("developersNumber"),
    };
    return allValues;
  }