import MaterialTable from "material-table";

export default function Table() {
  const columns = [
    { title: "ID", field: "id" },
    { title: "Fecha Nacimiento", field: "birthdate" },
    { title: "Edad", field: "age", type: "numeric" },
    {
      title: "Sexo",
      field: "sex",
      lookup: { 1: "Hombre", 2: "Mujer" },
    },
    { title: "Raza", field: "breed" },
    { title: "Marca", field: "brand" },
    { title: "Peso", field: "weight" },
  ];
  const data = [
    {
      id: 1,
      birthdate: "01/23/1990",
      age: 2,
      sex: 1,
      breed: "Brahaman",
      brand: "OV",
      weight: 19,
    },
    {
      id: 2,
      birthdate: "01/23/1990",
      age: 4,
      sex: 2,
      breed: "Brahaman",
      brand: "OV",
      weight: 20,
    },
  ];
  return <MaterialTable columns={columns} data={data} title="Bovino" />;
}
