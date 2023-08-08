export const TIPOS_FUNCIONES = [
    {
        id: 0,
        tipo: "Entrada Externa",
        descripcion: "Pantallas donde el usuario ingresa datos",
        baja: 3,
        media: 4,
        alta: 6,
    },
    {
        id: 1,
        tipo: "Salida externa",
        descripcion: "Informes, gráficos, listados de datos",
        baja: 4,
        media: 5,
        alta: 7,
    },
    {
        id: 2,
        tipo: "Consulta externa",
        descripcion: "Recuperar y mostrar datos al usuario (Buscar)",
        baja: 3,
        media: 4,
        alta: 6,
    },
    {
        id: 3,
        tipo: "Fichero de interfaz externa",
        descripcion: "Datos referenciados y relacionados a otros sistemas / Datos mantenidos por otros sistemas, pero usados por el sistema actual.",
        baja: 5,
        media: 7,
        alta: 10,
    },
]
export const ILF_FUNCTION = {
    id: 4,
    tipo: "Fichero lógico interno",
    descripcion: "Archivos del punto de vista lógico / tablas en la base de datos.",
    baja: 7,
    media: 10,
    alta: 15,
}