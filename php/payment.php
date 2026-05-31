<?php

function createPaymentSession($apiKey, $amount, $valId) {
    $url = "https://pay.antipay.site/v1/create";

    $data = [
        "amount" => $amount,
        "val_id" => $valId,
        "webhook_url" => $webhookUrl,
        
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Content-Type: application/json",
        "x-api-key: $apiKey"
    ]);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

    $response = curl_exec($ch);
    curl_close($ch);

    return $response;
}
