import getConnection from "../db/database.js"

const getClientes = async (req ,res) => {
  try {
    const connection =  await getConnection();
    const result  = await connection.query("SELECT ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax from clientes")
    res.json(result);
  } catch (error) {
    console.error("ERROR 500");
  }

}


export const methodHTTP = {
    getClientes
}