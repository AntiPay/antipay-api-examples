<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PaymentController extends Controller
{
    public function create(Request $request)
    {
        $response = Http::withHeaders([
            'x-api-key' => env('ANTIPAY_API_KEY'),
        ])->post('https://pay.antipay.site/v1/create', [
            'amount' => $request->amount,
            'val_id' => $request->val_id,
            'webhook_url' => $request->webhook_url,
            
        ]);

        return $response->json();
    }
}
