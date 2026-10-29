# Sola

**Get paid. Sola does the rest.**

Sola is a concept website for a bank account built for freelancers. It sets aside tax and savings the moment money lands. Sola isn't a real bank. The site exists to show what a website can feel like when it moves.

Designed and built by [Deepanshu Labs](https://deepanshulathar.com/labs/). Live at [sola.143.lat](https://sola.143.lat).

[![Sola launch video: a payment lands, Sola splits it into Tax, Savings and Spend](media/sola-launch-preview.gif)](media/sola-launch-16x9.mp4)

**Launch video (30 s, with sound):** [16:9](media/sola-launch-16x9.mp4) · [9:16](media/sola-launch-9x16.mp4) · [1:1](media/sola-launch-1x1.mp4)

---

## What makes it different

Most websites sit still. Sola has three moving layers, and each one moves for a reason.

| Layer | What you see | How it's made |
|---|---|---|
| **Living hero** | A glass cabin on a green sea cliff at golden hour, with only the sky moving | A sharp still photo for the land, with a short AI sky clip laid over it and played forwards and back, so the loop has no cut. Phones get their own portrait cut, and slow connections keep the still. |
| **Scroll film** | One unbroken camera move, from the cliff into the cabin and onto the laptop screen, driven by your scroll | Chained AI keyframes turned into video clips. Each clip is checked for hidden cuts, then split into frames that the page draws as you scroll. |
| **Living diagram** | A payment lands, and Sola splits it into Tax, Savings and Spend, round after round | Drawn in code (SVG). It runs forever, pauses off screen, and holds still for visitors who prefer reduced motion. |

## Also on the page

- **Logo grid:** the platforms freelancers already get paid through. Scrolling makes the tiles rise into place while a band of light passes over them in each brand's colour. On a laptop the cursor carries a soft spotlight too.
- **The app:** four concept screens (pots, invoices, a tax date, card rules). They step on their own every few seconds while in view. Hovering holds a screen, and the tabs work with the arrow keys.
- **Melting button:** the top button drips on hover, drawn with an SVG goo filter that only runs while it is hovered.
- **Questions:** short, honest answers, including that Sola is not a bank.

## How it was built

1. **Design system first.** The type scale, colours, spacing and components were fixed before any content was made.
2. **One camera move.** The film was planned as a single continuous push-in, never a slideshow of scenes.
3. **Every frame checked.** Each clip was scanned for hidden cuts and for soft or blurry frames. The film stops on its last sharp frame.
4. **Judged on phones.** Every section was compared side by side against a best-in-class reference site, at 360 px and 390 px wide.

## The launch video

A 30-second launch film in five beats: money lands, the tab-hopping grind, one rule turned on, everything sorted, then the logo.

- **Made entirely in code** with [Remotion](https://www.remotion.dev) at 60 fps. Every frame is worked out from the frame number, so nothing is filmed and nothing drifts.
- **Vector UI, not screenshots.** The browser, the Sola app, the cursor and the counters are all built as components, so they stay sharp through every camera zoom.
- **Motion with intent.** The cursor moves in arcs and hesitates between tabs. Cards land one by one before their checkmarks, and the camera pulls back the moment the counter hits zero.
- **Sound made in code too.** The music bed and the light click sounds are synthesised, with the beat timed to the moment the split is turned on. There's no voiceover.
- **Three cuts from one source.** Everything is placed from the centre of the frame, so the same scenes render at 16:9, 9:16 and 1:1.

## Built to perform

- **Light on phones:** the first screen loads under 1 MB, and the film keeps only about a second of decoded frames in memory.
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
