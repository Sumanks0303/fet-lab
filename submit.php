<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $cropName = $_POST["cropName"];
    $cropType = $_POST["cropType"];
    $plantingDate = $_POST["plantingDate"];
    $harvestDate = $_POST["harvestDate"];
    $quantity = $_POST["quantity"];
    $location = $_POST["location"];
    $notes = $_POST["notes"];
    echo "<!DOCTYPE html>";
    echo "<html>";
    echo "<head>";
    echo "<title>Submitted Form Data</title>";
    echo '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">';
    echo "</head>";
    echo "<body class='d-flex justify-content-center align-items-center' style='height: 100vh;'>";
    echo "<div class='container'>";
    echo "<div class='card'>";
    echo "<div class='card-header'>";
    echo "<h2 class='card-title'>Submitted Form Data:</h2>";
    echo "</div>"; // Close card-header
    echo "<div class='card-body'>";
    echo "<p><b>Crop Name:</b> $cropName</p>";
    echo "<p><b>Crop Type:</b> $cropType</p>";
    echo "<p><b>Planting Date:</b> $plantingDate</p>";
    echo "<p><b>Harvest Date:</b> $harvestDate</p>";
    echo "<p><b>Quantity:</b> $quantity kg</p>";
    echo "<p><b>Location:</b> $location</p>";
    echo "<p><b>Notes:</b> $notes</p>";
    echo "</div>"; // Close card-body
    echo "</div>"; // Close card
    echo "</div>"; // Close container
    echo "</body>";
    echo "</html>";
} else {
    echo "Error: Access Denied";
}
?>
