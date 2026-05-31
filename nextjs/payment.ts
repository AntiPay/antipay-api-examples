'use server';

export async function createPlanPaymentSession(userId: string, planId: string, amount: number) {
  const apiKey = process.env.ANTIPAY_GATEWAY_API_KEY!;
  const gatewayUrl = process.env.ANTIPAY_GATEWAY_URL!; // https://pay.antipay.site/v1
  const domain = process.env.APP_DOMAIN!;

  const val_id = `${userId}|${planId}`;
  const webhook_url = `${domain}/api/webhook`;
  

  const response = await fetch(`${gatewayUrl}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
    body: JSON.stringify({
      amount,
      val_id,
      webhook_url,
      
    }),
  });

  return await response.json();
}
