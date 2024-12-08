<?php

// Binance API kulcsok
$apiKey = 'XmKVJjLRhsZU7g00svgnbx3HhZ80iFvIZjHdarBqpsfufNGg8Q43lG2r7GYkXRfu';
$secretKey = 'EFfuShstzyxn8zNjI8Rh1WV6dGnEYSWZVWGd2kxtX2DlVCDsjLDySZ6tVHRoYc47';

// API endpoint
$endpoint = 'https://api.binance.com/sapi/v1/pay';

// Tranzakció indítása
function initiatePayment($price) {
    global $apiKey, $secretKey, $endpoint;

    // API hívás paraméterei
    $data = [
        'totalAmount' => $price,  // A fizetési összeg
        'currency' => 'TON',      // A fizetett kriptovaluta
        // Egyéb szükséges paraméterek itt...
    ];

    // cURL hívás készítése a Binance API-hoz
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $endpoint);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'X-MBX-APIKEY: ' . $apiKey,
        'Content-Type: application/json'
    ]);

    $response = curl_exec($ch);
    curl_close($ch);

    if (!$response) {
        die('Error: "' . curl_error($ch) . '" - "' . curl_errno($ch) . '"');
    }

    // API válasz feldolgozása
    return json_decode($response, true);
}

// API kérés feldolgozása
$request = json_decode(file_get_contents('php://input'), true);

if ($request) {
    $price = $request['price'];
    $paymentData = initiatePayment($price);

    if ($paymentData['status'] == 'success') {
        echo json_encode(['success' => true, 'paymentLink' => $paymentData['paymentLink']]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Payment initiation failed']);
    }
}
?>
