const API_KEY = process.env.ANTIPAY_API_KEY;
const BASE_URL = "https://pay.antipay.site/v1";

async function createPayment() {
  const res = await fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY
    },
    body: JSON.stringify({
      amount: 145,
      val_id: "ORDER_88721",
      webhook_url: "https://your-site.com/api/webhook",
    })
  });

  return await res.json();
}

async function verifyPayment(sessionId, trxId) {
  const res = await fetch(`${BASE_URL}/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY
    },
    body: JSON.stringify({
      sessionId,
      trxId
    })
  });

  return await res.json();
}

(async () => {
  const session = await createPayment();
  console.log("Payment URL:", session.paymentUrl);

  // Example verify call
  // const result = await verifyPayment("SESS_123", "8J9A1X7K");
  // console.log(result);
})();
