// POST /api/subscribe — a visitor typed their email into the hero form. We email them who built Sola and how to
// reach Deepanshu Labs, with the owner on CC so every lead lands in his inbox too.
// Needs RESEND_API_KEY and a verified sending domain in Resend. RESEND_FROM and OWNER_EMAIL override the defaults.
// shortcut: no rate limit store (only a honeypot, origin and format checks), add Upstash/Vercel KV limits if abused.

const OWNER = process.env.OWNER_EMAIL || 'deepanshulathar@gmail.com';
const FROM = process.env.RESEND_FROM || 'Deepanshu Labs <hello@143.lat>';
const WHATSAPP = '+91 99996 02901';
const WA_LINK = 'https://wa.me/919999602901';
const LABS = 'https://deepanshulathar.com/labs/';
const ALLOWED = [/^https:\/\/sola\.143\.lat$/, /^https:\/\/[a-z0-9-]+\.vercel\.app$/, /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/];
const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[a-z]{2,}$/i;

const json = (status, obj) => new Response(JSON.stringify(obj), {
  status,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
});

export const SUBJECT = "You found Sola. Here's who built it.";

export const TEXT = `Hi,

You just entered your email on Sola. Sola isn't a real bank. It's a concept site I designed and built to show what a website can feel like when it moves: a living hero, a scroll film, and motion drawn in code.

I'm Deepanshu Lathar. Through Deepanshu Labs I build websites and AI products for founders and businesses.

Want a site like this for your business?

  WhatsApp  ${WHATSAPP}  (${WA_LINK})
  Email     ${OWNER}
  Labs      ${LABS}

Reply to this email and it comes straight to me.

Deepanshu
Deepanshu Labs`;

export const HTML = `<!doctype html><html><body style="margin:0;background:#f4f4f7;padding:32px 16px;font-family:Inter,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#14141c">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:16px;padding:36px 32px;border:1px solid #e6e6ee">
<tr><td style="font-size:15px;line-height:1.6">
<p style="margin:0 0 16px">Hi,</p>
<p style="margin:0 0 16px">You just entered your email on <strong>Sola</strong>. Sola isn't a real bank. It's a concept site I designed and built to show what a website can feel like when it moves: a living hero, a scroll film, and motion drawn in code.</p>
<p style="margin:0 0 24px">I'm <strong>Deepanshu Lathar</strong>. Through Deepanshu Labs I build websites and AI products for founders and businesses.</p>
<p style="margin:0 0 12px;font-weight:600">Want a site like this for your business?</p>
<p style="margin:0 0 24px">
<a href="${WA_LINK}" style="display:inline-block;background:#25d366;color:#fff;text-decoration:none;font-weight:600;padding:12px 20px;border-radius:999px;margin:0 8px 8px 0">WhatsApp ${WHATSAPP}</a>
<a href="mailto:${OWNER}" style="display:inline-block;background:#5266eb;color:#fff;text-decoration:none;font-weight:600;padding:12px 20px;border-radius:999px;margin:0 8px 8px 0">Email me</a>
</p>
<p style="margin:0 0 24px;color:#5b5e6e">Or see more work at <a href="${LABS}" style="color:#5266eb">deepanshulathar.com/labs</a>. Reply to this email and it comes straight to me.</p>
<p style="margin:0">Deepanshu<br><span style="color:#5b5e6e">Deepanshu Labs</span></p>
</td></tr></table></td></tr></table></body></html>`;

export async function POST(request) {
  const origin = request.headers.get('origin') || '';
  if (!ALLOWED.some((re) => re.test(origin))) return json(403, { error: 'forbidden' });

  let body;
  try { body = await request.json(); } catch { return json(400, { error: 'bad-json' }); }
  const email = String(body?.email || '').trim();
  // bots fill every field; people never see this one
  if (body?.company) return json(200, { ok: true });
  if (email.length > 254 || !EMAIL_RE.test(email)) return json(400, { error: 'invalid-email' });
  if (!process.env.RESEND_API_KEY) return json(503, { error: 'not-configured' });

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: FROM, to: [email], cc: [OWNER], reply_to: OWNER, subject: SUBJECT, text: TEXT, html: HTML }),
    signal: AbortSignal.timeout(8000),
  }).catch(() => null);
  if (!r || !r.ok) return json(502, { error: 'send-failed' });
  return json(200, { ok: true });
}
