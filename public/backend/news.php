<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$apiKey = "pub_9265dde688a44ff2955ff608aa3f9297";
$url = "https://newsdata.io/api/1/news?apikey=$apiKey&country=ph&language=en&category=top";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 
$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo json_encode(["error" => "Failed to fetch news: " . curl_error($ch)]);
    curl_close($ch);
    exit;
}

curl_close($ch);


echo $response;
?>