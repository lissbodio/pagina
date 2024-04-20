<?php
// Conectar a la base de datos
$servername = "localhost";
$username = "root"; // Usuario predeterminado de XAMPP
$password = ""; // Contraseña predeterminada de XAMPP
$dbname = "tortas";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Obtener los datos de la compra enviados desde el frontend
$data = json_decode(file_get_contents("php://input"), true);

// Preparar y ejecutar la consulta SQL para insertar la compra en la base de datos
$productos = json_encode($data['productos']); // Convertir el array de productos a formato JSON
$total = $data['total'];

$sql = "INSERT INTO compras (productos, total) VALUES ('$productos', '$total')";
if ($conn->query($sql) === TRUE) {
    echo "Compra guardada en la base de datos correctamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
