// Thin wrapper over the Paystack REST API. Node 18+ has global fetch, so no extra dependency
// is needed. Only the "verify transaction" call is used — the actual charge happens client-side
// via the Paystack Inline popup, and we treat the server-side verify call as the source of truth
// (never trust a client-reported "payment succeeded" on its own).

const PAYSTACK_BASE_URL = 'https://api.paystack.co';

async function verifyTransaction(reference) {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    throw new Error('PAYSTACK_SECRET_KEY is not set on the server');
  }

  const res = await fetch(`${PAYSTACK_BASE_URL}/transaction/verify/${encodeURIComponent(reference)}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${secretKey}`,
    },
  });

  const data = await res.json();
  if (!res.ok) {
    const message = data?.message || `Paystack verify failed with status ${res.status}`;
    const err = new Error(message);
    err.statusCode = 502;
    throw err;
  }
  return data; // { status: true, message: 'Verification successful', data: { status: 'success', amount, ... } }
}

module.exports = { verifyTransaction };
