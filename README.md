# Sola

**Get paid. Sola does the rest.**

Sola is a concept website for a bank account built for freelancers. It sets aside tax and savings the moment money lands. Sola isn't a real bank. The site exists to show what a website can feel like when it moves.

Designed and built by [Deepanshu Labs](https://deepanshulathar.com/labs/). Live at [sola.143.lat](https://sola.143.lat).

---

## What makes it different

Most websites sit still. Sola has three moving layers, and each one moves for a reason.

| Layer | What you see | How it's made |
|---|---|---|
| **Living hero** | A glass cabin on a sea cliff at dawn, with mist that slowly breathes | AI-generated footage, looped forwards and back so the loop has no seam. Phones get their own portrait cut. |
| **Scroll film** | One unbroken camera move, from the cliff into the cabin and onto the laptop screen, driven by your scroll | Chained AI keyframes turned into video clips. Each clip is checked for hidden cuts, then split into frames that the page draws as you scroll. |
| **Living diagram** | A payment lands, and Sola splits it into Tax, Savings and Spend, round after round | Drawn in code (SVG). It runs forever, pauses off screen, and holds still for visitors who prefer reduced motion. |

## How it was built

1. **Design system first.** The type scale, colours, spacing and components were fixed before any content was made.
2. **One camera move.** The film was planned as a single continuous push-in, never a slideshow of scenes.
3. **Every frame checked.** Each clip was scanned for hidden cuts and for soft or blurry frames. The film stops on its last sharp frame.
4. **Judged on phones.** Every section was compared side by side against a best-in-class reference site, at 360 px and 390 px wide.

## Built to perform

- **Light on phones:** the first screen loads about 0.4 MB.
- **Film frames load late:** they download only as you scroll near the film, and phones get a lighter cropped set.
- **Easy to use:** every tap target is at least 44 px, there's no sideways scroll, and the page respects reduced-motion settings.
- **No framework:** plain HTML, CSS and JavaScript.

## The email form

When a visitor enters their email, `api/subscribe.mjs` (a Vercel function) sends them a short note about Deepanshu Labs, with WhatsApp and email contacts, and CCs the owner. Bots are filtered out with a hidden trap field, plus origin and format checks.

**Setup on Vercel:**
- Set `RESEND_API_KEY` to an API key from [Resend](https://resend.com).
- Verify the sending domain (`143.lat`) in Resend.
- Optional: `RESEND_FROM` (defaults to `Deepanshu Labs <hello@143.lat>`) and `OWNER_EMAIL` (defaults to `deepanshulathar@gmail.com`).

## Run it locally

```bash
python3 -m http.server 8080
```

The email form needs the Vercel function, so on a plain local server it shows a friendly "could not send" message.

## Work with me

Want a site like this?

- WhatsApp: [+91 99996 02901](https://wa.me/919999602901)
- Email: [deepanshulathar@gmail.com](mailto:deepanshulathar@gmail.com)
- Labs: [deepanshulathar.com/labs](https://deepanshulathar.com/labs/)
