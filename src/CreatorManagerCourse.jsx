import { useState } from "react";

const ACCENT = "#E8651A";
const ACCENT_DARK = "#C4521A";
const SURFACE = "#0F0F0F";
const CARD_BG = "#161616";
const CARD_BORDER = "#2A2A2A";
const TEXT_PRIMARY = "#F5F0E8";
const TEXT_MUTED = "#8A8580";
const TEXT_DIM = "#555250";
const GREEN = "#3DAA6E";
const BLUE = "#3A8FD4";
const PURPLE = "#8B6FD4";
const AMBER = "#D4A03A";
const RED = "#D44A4A";

const curriculum = [
  {
    id: "foundations",
    icon: "🏗️",
    title: "Foundations of Creator Management",
    color: PURPLE,
    colorLight: "#2A2040",
    duration: "Week 1–2",
    modules: [
      {
        title: "The Creator Economy Landscape",
        lessons: [
          {
            title: "How the creator economy works",
            content: `The creator economy is a $250B+ industry built on individuals monetizing audiences across YouTube, Instagram, TikTok, Twitch, podcasts, and newsletters. As a marketing manager, you sit at the intersection of talent, brands, and platforms.\n\n**Three pillars of the creator economy:**\n\n1. **Platforms** — YouTube, TikTok, Instagram, Twitch, Spotify. Each has unique monetization features, audience demographics, and CPM rates. YouTube ads pay $2–8 CPM; TikTok branded content commands premium rates per 1,000 views.\n\n2. **Creators** — The talent. They range from nano (1K–10K followers) to mega (1M+). Your job is understanding their brand, audience, and growth trajectory.\n\n3. **Brands** — Companies paying to reach creator audiences. They care about: reach, engagement rate, audience demographics, brand safety, and ROI.\n\n**Your role as marketing manager:** You're the bridge. Brands come to you wanting access to creators. You negotiate rates, manage deliverables, ensure brand safety, and build long-term partnerships that benefit both sides. The best managers are part agent, part strategist, part legal advisor, and part psychologist.`
          },
          {
            title: "Creator tiers and their deal economics",
            content: `Understanding creator tiers determines your entire deal structure approach:\n\n**Nano Creators (1K–10K followers)**\n- Average engagement: 5–8%\n- Sponsorship rate: ₹5,000–₹25,000 / $100–$500 per post\n- Best for: niche product launches, high-engagement campaigns\n- Common mistake: undervaluing them. A 5K cooking channel with 7% engagement outperforms a 500K celebrity at 0.3% for food brands\n\n**Micro Creators (10K–100K)**\n- Average engagement: 3–5%\n- Sponsorship rate: ₹25,000–₹2,00,000 / $500–$3,000 per post\n- Best for: targeted campaigns, CPG brands, apps\n- Management tip: These creators are easiest to work with, most professional, and deliver the highest ROI for brands per rupee spent\n\n**Mid-tier Creators (100K–1M)**\n- Average engagement: 1–3%\n- Sponsorship rate: ₹2,00,000–₹15,00,000 / $3,000–$30,000 per post\n- Best for: brand awareness, product launches, mid-budget campaigns\n\n**Macro/Mega Creators (1M+)**\n- Average engagement: 0.5–2%\n- Sponsorship rate: ₹15,00,000+ / $30,000+ per post\n- Best for: mass market brands, launches with huge budgets\n- Reality check: rates are negotiated as packages — integration + dedicated + story + repost\n\n**The engagement rate formula:**\n(Likes + Comments + Shares) / Total Followers × 100\n\nAnything above 3% across 100K+ is excellent. Below 1% is a red flag.`
          },
          {
            title: "Your role: what a creator marketing manager actually does",
            content: `This role has no single job description. You'll wear multiple hats daily:\n\n**Talent Relations (30% of your time)**\n- Regular check-ins with creators\n- Understanding their content calendar\n- Aligning brand deals with creator's brand identity\n- Managing their expectations on rates and deliverables\n\n**Brand Outreach and Sales (25%)**\n- Identifying brands that fit the creator's niche\n- Cold outreach, warm intros, inbound inquiries\n- Pitching media kits, negotiating rates\n- Building relationships with brand marketing teams\n\n**Deal Execution (25%)**\n- Writing contracts and deal memos\n- Briefing creators on deliverable requirements\n- Reviewing content before it goes live\n- Ensuring payment and tracking invoices\n\n**Strategy and Analytics (20%)**\n- Reading campaign performance reports\n- Advising creators on which deals to take\n- Long-term brand partnership strategy\n- Competitive benchmarking\n\n**Key truth:** The best managers protect their creators. You say no to bad deals. You say yes to deals that build the creator's reputation even at lower rates. Your long-term reputation is your most valuable asset.`
          }
        ]
      },
      {
        title: "Building Your Foundation",
        lessons: [
          {
            title: "Essential tools and software",
            content: `Your tech stack as a creator manager:\n\n**CRM & Outreach**\n- HubSpot Free / Notion CRM — track brand contacts, deal status, follow-up dates\n- Apollo.io / Hunter.io — find brand marketing managers' emails\n- LinkedIn Sales Navigator — warm outreach to brand decision-makers\n\n**Contract & Payments**\n- HelloSign / DocuSign — e-signatures for contracts\n- QuickBooks / FreshBooks — invoice tracking\n- Razorpay / Stripe — payment processing\n- Deel — international payments if working with global brands\n\n**Analytics**\n- Social Blade — track creator growth metrics\n- HypeAuditor / Modash — audience quality analysis, fake follower detection\n- Creator.co / Aspire — influencer marketplace analytics\n- Google Sheets — your best friend for campaign tracking\n\n**Communication**\n- Slack — internal team communication\n- Notion — project management and brief documentation\n- Calendly — scheduling brand calls\n\n**Content Review**\n- Frame.io — video review and approval\n- Google Drive — brief and asset sharing\n\n**Pro tip:** Start with free tools. Master Google Sheets, Gmail, Notion, and LinkedIn before spending ₹50,000/month on SaaS tools. The fundamentals don't require expensive software.`
          },
          {
            title: "Understanding creator contracts: basics",
            content: `Every deal needs a written agreement. Here's what must be in every creator contract:\n\n**1. Parties and scope**\nFull legal names of creator (or their company) and the brand. Be specific: "3 Instagram Reels, 2 YouTube integrations (minimum 60 seconds), 5 Instagram Stories"\n\n**2. Deliverables**\nExact specifications:\n- Video length (e.g., "minimum 45-second brand mention")\n- Placement (pre-roll, mid-roll, dedicated)\n- Platform (YouTube, Instagram, TikTok)\n- Format (Reel, Story, Long-form, Shorts)\n\n**3. Timeline**\n- Content submission deadline\n- Brand review period (typically 3–5 business days)\n- Go-live date\n- Always build 48-hour buffer between submission and review deadline\n\n**4. Exclusivity clause**\nDoes the brand want exclusivity in their category? For how long? Exclusivity commands 25–50% premium. A food brand wanting 3-month exclusivity in the food/nutrition category should pay significantly more.\n\n**5. Usage rights**\nCan the brand reuse the content in their own ads? How long? Usage rights are separate from the creation fee. Paid media usage (ads) adds 30–100% to the rate.\n\n**6. FTC/ASA Disclosure**\nLegal requirement: all sponsored content must be disclosed. "#ad", "#sponsored", "Paid partnership" in the first line of description. Non-disclosure is a legal liability for both the creator and brand.\n\n**7. Payment terms**\nTypical: 50% upfront, 50% on deliverable approval. Never 100% post. Net-30 maximum. Include late payment penalties (1.5–2% monthly).`
          }
        ]
      }
    ]
  },
  {
    id: "brand-deals",
    icon: "🤝",
    title: "Brand Deals & Sponsorships",
    color: ACCENT,
    colorLight: "#2A1A0A",
    duration: "Week 3–5",
    modules: [
      {
        title: "Finding and Approaching Brands",
        lessons: [
          {
            title: "Identifying the right brand partners",
            content: `The biggest mistake new managers make is pitching any brand to any creator. Brand fit is everything.\n\n**The Brand Fit Matrix**\nBefore approaching a brand, score them on:\n\n1. **Audience alignment** — Do the brand's target customers match the creator's audience? A gaming channel should pitch gaming chairs, peripherals, energy drinks, and online education — not luxury watches or premium skincare.\n\n2. **Content authenticity** — Would the creator naturally use this product? Forced endorsements destroy trust. The creator's audience will notice immediately.\n\n3. **Budget alignment** — Can this brand afford the creator? A bootstrapped startup cannot afford a 5M subscriber creator. Research the brand's marketing budget tier before pitching.\n\n4. **Category exclusivity** — Is the creator already locked into a competitor deal? If your creator has a 1-year exclusive with Pepsi, you cannot pitch Coca-Cola.\n\n**Where to find brands actively looking for creators:**\n\n- **Creator marketplaces:** Wobb (India-focused), Plixxo, Qoruz, Aspire.io, Grin\n- **Brand direct:** Look at competitor creator sponsorships. Who's already paying creators in this niche? Reach out directly.\n- **Agency relationships:** Many brands route creator buys through media agencies (Dentsu, GroupM, WPP). Build agency contacts.\n- **Warm intros:** The creator's brand mentions — if they organically recommend something, that brand is a natural fit to pitch.\n- **Industry events:** Vidcon, Creator Camp, Marketing conferences — where brand managers and managers meet.\n\n**The research checklist before any pitch:**\n□ Who is their current marketing manager?\n□ Have they done creator deals before?\n□ What creators have they worked with?\n□ What's their approximate marketing budget?\n□ What campaign objective are they likely targeting?`
          },
          {
            title: "Cold outreach that actually works",
            content: `Cold outreach is 90% about the opening line and positioning.\n\n**The 5-line framework for cold email:**\n\nLine 1: Personal hook (research-based)\nLine 2: What you do and for whom\nLine 3: The specific opportunity\nLine 4: Social proof / why it works\nLine 5: Single clear CTA\n\n**Example (bad):**\n"Hi, I manage [Creator Name] who has 500K subscribers. We're looking for brand partnerships. Please let me know if you're interested in collaborating."\n\n**Example (good):**\n"Hi Priya — saw Mamaearth just launched a men's grooming line. I manage Rohan Sharma (450K YT subs, 4.2% engagement, 82% male 18–28 audience). His 'Grooming on a budget' series gets 800K+ views per video — exactly your target demographic. Happy to share a full deck. Are you the right person to connect with on creator partnerships, or should I reach out to someone else on your team?"\n\n**LinkedIn DM approach:**\n- Connect first with a personalized note\n- Wait 3–5 days, then message\n- Reference something specific about their brand or recent campaign\n- Keep it under 150 words\n\n**Follow-up sequence:**\n- Day 1: Initial email\n- Day 4: Follow-up email (add one new data point)\n- Day 8: LinkedIn DM\n- Day 14: Final follow-up ("closing the loop")\n- After that: move to your 3-month follow-up CRM drip\n\n**Conversion reality:** Expect 1–3% reply rates on cold email. 10–15% from warm intros. Invest in building relationships at events and through mutual connections.`
          },
          {
            title: "Building a media kit that converts",
            content: `The media kit is your sales document. It should answer every question a brand has before they ask it.\n\n**Essential media kit components:**\n\n**1. Cover/Hero page**\n- Creator name, handle, niche in one line\n- Hero image (professional quality)\n- Platform icons with follower counts\n\n**2. The "Who is [Creator]?" page**\n- Bio in 3 sentences max\n- Content niche and tone\n- Why audiences trust them\n\n**3. Audience demographics**\n- Age breakdown (pie chart)\n- Gender split\n- Top countries/cities\n- Key interests\nSource: Pull from YouTube Studio or Instagram Insights screenshots. Authenticity matters — brands will ask for verification.\n\n**4. Performance metrics**\n- Average views per video (last 90 days)\n- Average reach per post\n- Engagement rate\n- Average watch time / completion rate\n- Monthly impressions across all platforms\n\n**5. Past brand partnerships**\n- Logos of brands worked with\n- 2–3 case studies with results ("Campaign for Brand X drove 1,200 swipe-ups, 4.1% CTR")\n\n**6. Content samples**\n- 3–5 best brand integrations\n- Show range: product reviews, tutorials, vlogs with integrations\n\n**7. Rate card**\n- Platforms and formats with base rates\n- Note: "Rates are subject to campaign scope and deliverables"\n- Optional: bundle pricing for multi-platform packages\n\n**8. Contact / Booking CTA**\n- Your email and name\n- Link to booking calendar\n\n**Tools:** Canva (good), Adobe Express (better), Figma (best). Keep it 8–12 pages. PDF format. Rename the file: "CreatorName_MediaKit_2025.pdf"`
          }
        ]
      },
      {
        title: "Negotiation Mastery",
        lessons: [
          {
            title: "How to price creator deals",
            content: `Pricing is both art and science. Here's the framework:\n\n**The CPM-based pricing model:**\nFor YouTube dedicated videos, industry standard CPM (cost per 1,000 views) for sponsorships is $20–$60 (₹1,500–₹5,000).\n\nFormula: Expected views × CPM rate / 1,000 = deal value\n\nExample: 200,000 expected views × ₹3,000 CPM / 1,000 = ₹6,00,000\n\n**Pricing by deliverable type:**\n\n| Format | Premium Multiplier |\n|--------|-------------------|\n| Dedicated video | 1.0× (baseline) |\n| 60s mid-roll integration | 0.5× |\n| Pre-roll mention | 0.3× |\n| Instagram Reel | 0.4–0.7× of YT rate |\n| Instagram Story (swipe-up) | 0.15–0.2× |\n| TikTok dedicated | 0.3–0.5× |\n| Newsletter mention | 0.2–0.3× |\n\n**Premium add-ons:**\n- Exclusivity (category, 1–3 months): +25–50%\n- Paid media usage rights: +30–100%\n- Whitelisting (brand runs ads from creator's handle): +50–75%\n- Rush timeline (<7 days): +20–30%\n- Product involvement in thumbnail: +15%\n\n**The anchor strategy:**\nAlways quote 20–30% above your target number. Brands expect to negotiate. If you want ₹3,00,000, open at ₹4,00,000. If they come back at ₹2,50,000, you settle at ₹3,20,000.\n\n**When brands lowball:**\n"I appreciate the interest. Our rates reflect [Creator's] average of [X] views per video with [Y]% engagement in your exact target demographic. The closest comparison in the market charges [higher rate]. We can look at adjusting deliverables if budget is a hard constraint — perhaps a shorter integration or reduced exclusivity window."\n\n**Know your floor:** Have a minimum acceptable rate per deliverable. Never go below it. Walking away is leverage.`
          },
          {
            title: "Negotiation tactics for creator deals",
            content: `Master these tactics to close better deals:\n\n**1. BATNA (Best Alternative to Negotiated Agreement)**\nAlways know your alternatives before negotiating. If you have 3 competing brands interested, mention it casually: "We have a couple of active conversations in this space, so I'd love to lock something in before the calendar fills up."\n\n**2. The Silence technique**\nAfter stating your price, go silent. Don't justify. Don't elaborate. The first person to speak usually concedes. On email: send the number and wait 48 hours before following up.\n\n**3. Conditional concession**\nNever give something without getting something. "We can come down on rate if we reduce exclusivity from 3 months to 6 weeks." Not: "Okay, we'll do it for less."\n\n**4. Unbundling**\nIf a brand wants to negotiate down, break the package into components. "The integration alone is ₹2,00,000. Story repost is ₹30,000. Community post is ₹20,000. If you want to reduce budget, we could remove the community post."\n\n**5. The "Manager card"**\nIf you need time or cover to decline: "This looks interesting. Let me check with [Creator] on availability and circle back by Thursday." Use it to buy time, never to ghost.\n\n**6. Long-term deal leverage**\nIf a brand wants to lower the rate: "We'd consider more competitive rates for a longer commitment — a 3-video or 6-month package instead of one-off." Brands love predictability. You get volume and guaranteed revenue.\n\n**Red flags — deals to decline:**\n- "Can you do this for product-only or exposure?"\n- Contract clauses giving brands unlimited usage rights in perpetuity\n- Payment terms beyond Net-30\n- Brands that want creative control over the entire script\n- Brands with active lawsuits or controversies\n- Unrealistic performance guarantees ("if it doesn't get 500K views, we don't pay")`
          }
        ]
      },
      {
        title: "Deal Types & Structures",
        lessons: [
          {
            title: "Types of sponsorship deals",
            content: `Know every deal type so you can pitch and structure the right one:\n\n**1. Dedicated/Sponsored Video**\nEntire video is about the brand. Highest rate, clearest message. Best for product launches, explainer-type products (VPNs, apps, services). Rate: Full rate.\n\n**2. Integrated Sponsorship (Mid-roll)**\nBrand mention within an existing video. The "standard" deal. Creator makes their content, adds 60–90 second brand segment. Rate: 50–70% of dedicated.\n\n**3. Pre/Post-roll Mention**\n"This video is sponsored by..." 15–30 seconds at start or end. Lower engagement but wide awareness. Rate: 25–35% of dedicated.\n\n**4. Series Sponsorship**\nBrand sponsors an entire content series (e.g., "Presented by Brand X"). Strong recall and association. Best for 4+ episode series. Rate: Per-episode rate × episodes × 10–15% series premium.\n\n**5. Product Placement / Organic Integration**\nBrand product appears naturally in the content without a dedicated segment. Subtle but effective. Rate: 30–50% of integration rate.\n\n**6. Brand Deals with Affiliate Component**\nBase fee + commission on sales. The creator gets a trackable link or code. Works when the creator has high trust and buyers in their audience. Affiliate rates: 5–15% per sale.\n\n**7. Ambassador/Long-term Partnership**\nCreator becomes the face of the brand for 3–12 months. Multiple deliverables, exclusivity, brand events, social media representation. Rate: Premium — negotiate as an annual retainer.\n\n**8. Licensing Deals**\nBrand licenses the creator's likeness, name, or content for their own marketing. The creator doesn't create new content — they allow use of existing content or their brand. Rate: Highly variable, typically ₹5–25L+ for known creators.\n\n**9. Co-created Products / Brand Collabs**\nCreator co-designs a product with a brand (e.g., Carry Minati × boAt). Equity or revenue share structure. Complex but lucrative. Requires legal counsel.`
          },
          {
            title: "Handling multiple brands and exclusivity",
            content: `Managing multiple brand relationships on one creator is like managing a portfolio — everything must be balanced.\n\n**The exclusivity spectrum:**\n\n- **Broad category exclusivity:** "No competitor brands in the personal finance category for 3 months." Most common.\n- **Platform exclusivity:** "Only one software brand on YouTube for 2 months." Platform-limited.\n- **Campaign exclusivity:** "No competing brand posts 2 weeks before and after go-live."\n- **No exclusivity:** "We sponsor this video but creator can work with competitors." Cheapest.\n\n**Managing your calendar:**\nMaintain a master deal calendar in Notion or Google Sheets:\n- Creator name | Brand | Deal type | Go-live date | Exclusivity period | Category\n\nBefore accepting any deal, check:\n□ Does this conflict with an existing exclusivity period?\n□ Does this creator currently have a competing brand deal?\n□ Is the go-live date 2+ weeks before any conflicting content?\n\n**The competitor conflict conversation:**\n"Brand A has an active exclusivity in the supplements category through March. We can offer you a Q2 start, or we can structure this as an integration with a lighter exclusivity clause so it doesn't block the current partnership."\n\n**Multiple brands in the same video:**\nGenerally avoid it. If it happens, ensure brands are in different categories and both have agreed (in writing) that other sponsors may appear in the same video. Label each integration clearly.\n\n**Category management strategy:**\nFor large creators, maintain relationships with 2–3 brands per major category. When one brand's contract ends, you have ready replacements. This prevents revenue gaps and gives you negotiation leverage.`
          }
        ]
      }
    ]
  },
  {
    id: "campaigns",
    icon: "🎯",
    title: "Campaign Execution & Management",
    color: GREEN,
    colorLight: "#0A2015",
    duration: "Week 6–7",
    modules: [
      {
        title: "From Deal to Delivery",
        lessons: [
          {
            title: "The brief: setting campaigns up to succeed",
            content: `A bad brief = a bad campaign. The brief is the most important document in the deal execution process.\n\n**The perfect creative brief template:**\n\n**Campaign overview**\n- Brand name and product/service being promoted\n- Campaign objective (awareness, conversions, app downloads, website visits)\n- Target audience (who should respond)\n- Key messaging (1–3 core messages, no more)\n\n**Deliverable specifications**\n- Format: Dedicated video / Integration / Reel / Story\n- Length: Minimum and maximum\n- Platform: YouTube, Instagram, TikTok\n- Placement: Pre-roll / Mid-roll / Post-roll\n- Must-include elements (CTA, promo code, link, product demo)\n- Must-avoid elements (competitor mentions, sensitive topics, etc.)\n\n**Brand guidelines**\n- Tone: Energetic / Professional / Casual / Authoritative\n- Brand assets: logos, products, fonts (where applicable)\n- Approved claims (what can be said about the product)\n- Prohibited claims (what cannot be said — legal requirement for pharma, finance, supplements)\n\n**FTC/Disclosure requirements**\n- Exact disclosure wording required\n- Where in the content it must appear\n\n**Approval process**\n- Who approves on the brand side? Name and email.\n- Review window: how many business days?\n- How many rounds of revisions included?\n- What happens if revisions are needed after the deadline?\n\n**Performance tracking**\n- Tracking link / UTM parameters\n- Promo code (if applicable)\n- Reporting deadline\n\n**Pro tip:** Have the brand sign off on the brief before the creator starts production. It eliminates revision disputes and protects the creator from scope creep.`
          },
          {
            title: "Content review and approval workflow",
            content: `The review process is where most campaigns fall apart. Set up a bulletproof system.\n\n**The approval workflow:**\n\nStep 1: Creator submits draft (3–5 days before go-live)\nStep 2: You review for brief compliance\nStep 3: You submit to brand for approval\nStep 4: Brand provides feedback or approval (2–3 business days)\nStep 5: Creator makes revisions if needed\nStep 6: Final approval\nStep 7: Content goes live\nStep 8: You confirm live link and send to brand\n\n**Your review checklist before brand submission:**\n□ Is the brand name/product mentioned correctly?\n□ Is the disclosure (#ad or #sponsored) in the first line?\n□ Is the promo code / tracking link correct?\n□ Is the CTA delivered clearly?\n□ Does the content meet minimum length?\n□ Is anything factually incorrect about the product?\n□ Does it violate any brand guidelines (competitors mentioned, prohibited claims)?\n□ Is the overall tone on-brand?\n\n**Handling revision requests:**\nBrands sometimes ask for unreasonable changes — scripted lines, inauthentic messaging, character changes. Your job is to protect creative integrity:\n\n"Brand XYZ has requested [specific change]. In my experience, this type of scripted language reads as inauthentic to [Creator]'s audience and can actually hurt campaign performance. The current version clearly communicates the key message in [Creator]'s voice. I'd recommend testing it as is — we can always optimize future campaigns based on performance data."\n\n**Revision limits:**\nYour contract should specify the number of included revisions (standard: 2 rounds). After that, additional revisions are billable (₹10,000–₹50,000 per round depending on creator level).\n\n**Emergency escalation:**\nIf brand and creator cannot agree on content, escalate with a three-way call. Most issues are resolved in 30 minutes when both parties hear each other directly.`
          }
        ]
      },
      {
        title: "Performance Tracking",
        lessons: [
          {
            title: "Metrics that matter — and what to ignore",
            content: `Brand marketing teams receive performance reports from you. Know what to measure.\n\n**Primary campaign metrics:**\n\n**Reach / Impressions**\nHow many unique people saw the content. Impressions = total views including repeat. Reach = unique viewers. Report both.\n\n**Views (YouTube specific)**\nTotal views, views in first 24h (momentum indicator), views at 30 days. The 30-day view count is the standard for performance reporting.\n\n**Engagement rate**\nFor the specific sponsored video: (Likes + Comments + Shares) / Views × 100. Compare to creator's baseline rate. If baseline is 3% and sponsored post got 4%, that's a win.\n\n**Click-through rate (CTR)**\nFor trackable links: unique link clicks / impressions. Industry benchmark: 0.5–2% for branded content. Above 2% is excellent.\n\n**Conversion rate**\nClicks that resulted in purchases, sign-ups, or downloads. The brand cares most about this. Track via UTM parameters or brand-provided tracking links.\n\n**Promo code redemptions**\nCounts actual purchases. Clean, attributable data.\n\n**Watch time (YouTube)**\nAverage percentage watched on the video. If a sponsored video has 60%+ average watch time, the audience is highly engaged. Under 40% on a dedicated video is concerning.\n\n**Metrics to contextualize, not obsess over:**\n- Raw subscriber count (engagement matters more)\n- Instagram follower count (reach and stories views matter)\n- Likes only (too gameable)\n\n**Post-campaign report format:**\n1. Executive summary (3 bullet points)\n2. Reach and impressions\n3. Engagement metrics\n4. Conversion/action metrics\n5. Comparison to industry benchmarks\n6. Recommendations for future campaigns`
          }
        ]
      }
    ]
  },
  {
    id: "legal-finance",
    icon: "⚖️",
    title: "Legal, Finance & Compliance",
    color: BLUE,
    colorLight: "#0A1520",
    duration: "Week 8–9",
    modules: [
      {
        title: "Contracts and Legal Protection",
        lessons: [
          {
            title: "Contract essentials every manager must know",
            content: `You don't need to be a lawyer. You need to know enough to spot problems and know when to call one.\n\n**The 10 clauses every creator contract needs:**\n\n1. **Scope of work** — Exact deliverables with platform, format, length, placement\n2. **Timeline** — Production deadline, review window, go-live date\n3. **Compensation** — Total fee, payment schedule, method\n4. **Intellectual property** — Who owns the content after creation?\n5. **Usage rights** — How and where can the brand use the content?\n6. **Exclusivity** — Category, duration, platform\n7. **Morality/termination clause** — Brand can terminate if creator engages in behavior damaging to brand image\n8. **FTC compliance** — Creator must disclose the paid partnership\n9. **Revision limits** — How many revisions are included before additional fees apply\n10. **Dispute resolution** — Jurisdiction (which state/country's law governs), arbitration vs. litigation\n\n**The kill fee:**\nIf a brand cancels after content creation has begun, the creator should receive a kill fee. Standard: 50% of total deal value if cancelled after brief but before production; 75–100% if cancelled after content is delivered.\n\n**Watch out for:**\n- Perpetual, worldwide usage rights in the initial fee (always negotiate limits)\n- Clauses that allow brands to repurpose content as paid ads without additional compensation\n- Non-compete clauses broader than the campaign category\n- "Performance guarantees" — never agree to guarantee views or conversions\n- Liability clauses that hold the creator responsible for brand's losses\n\n**When to use a lawyer:**\n- Any deal above ₹5,00,000 / $10,000\n- Ambassador or long-term partnership agreements\n- Licensing deals\n- Co-created product deals\n- Any contract with unusual clauses you don't understand\n\nFor smaller deals, use contract templates (available from creator economy communities) and modify as needed.`
          },
          {
            title: "FTC guidelines and disclosure laws",
            content: `This is non-negotiable. FTC violations can result in fines of up to $50,000 per violation. In India, ASCI (Advertising Standards Council of India) governs disclosure.\n\n**Core rule:**\nAny material connection between a creator and a brand must be clearly disclosed. This includes: payment, free products, discounts, affiliate relationships, gifts.\n\n**FTC/ASCI compliant disclosure:**\n✅ "#ad" or "#sponsored" in first line of description\n✅ "Paid partnership" tag on Instagram\n✅ "Sponsored" card on YouTube\n✅ Verbal disclosure in video: "This video is sponsored by [Brand]"\n✅ For long videos: disclose verbally at the beginning and in description\n\n**Non-compliant disclosure:**\n❌ "#ad" buried among 20 other hashtags\n❌ "Thanks to Brand X" without clarifying it's paid\n❌ Disclosure only in description without verbal mention\n❌ "Sp" or "Spon" abbreviations\n❌ Disclosure that's only visible on desktop, not mobile\n\n**Your responsibility as manager:**\nIt's your job to ensure creators comply. Build disclosure requirements into every contract. Review every piece of content before it goes live for compliance. If the creator posts non-compliant content, it reflects on you.\n\n**Special categories requiring extra care:**\n- Health and wellness claims: supplement brands, fitness products\n- Financial services: trading apps, investment platforms\n- Alcohol: age restrictions, consumption messaging\n- Children's content: COPPA compliance\n- Pharmaceutical: cannot make disease claims without clinical evidence\n\nFor finance and health brands, consult a compliance lawyer for the specific claims the creator is allowed to make.`
          }
        ]
      },
      {
        title: "Financial Management",
        lessons: [
          {
            title: "Invoicing, payments and managing creator finances",
            content: `Money management separates professional managers from amateurs.\n\n**The payment lifecycle:**\n\n1. Deal signed → Invoice sent to brand (50% advance)\n2. Advance received → Creator notified to begin production\n3. Content approved → Invoice sent for remaining 50%\n4. Final payment received → Creator paid (minus management fee)\n\n**Invoice essentials:**\n- Invoice number (sequential, for tracking)\n- Your company name and address / PAN (India) or SSN/EIN (US)\n- Client company name and billing address\n- GST number (India: mandatory for B2B above ₹20L turnover)\n- Line items with descriptions\n- Bank transfer details or payment link\n- Due date (Net-15 or Net-30)\n- Late payment policy\n\n**GST in India:**\nContent creation services fall under SAC code 998364. GST rate: 18%. If you're registered, charge GST on all invoices. If not, you cannot charge GST. Consider registering if annual revenue exceeds ₹20L.\n\n**Your management fee:**\nIndustry standard: 15–20% of gross deal value.\nExample: ₹3,00,000 brand deal → ₹45,000–₹60,000 management fee → Creator receives ₹2,40,000–₹2,55,000.\n\n**Payment tracking spreadsheet columns:**\n- Deal ID | Creator | Brand | Invoice # | Invoice Date | Amount | Due Date | Status | Notes\n\n**Chasing late payments:**\nDay 1 past due: Friendly reminder\nDay 7: Firm email with invoice attached, mention late payment clause\nDay 14: Phone call or LinkedIn message to the brand POC\nDay 21: Escalate to brand's finance department\nDay 30+: Formal legal notice, consider collections\n\n**Never deliver final content until you have 50% advance. This is non-negotiable.** Once content is live, your leverage disappears.`
          },
          {
            title: "Taxes, TDS and creator income",
            content: `India-specific tax knowledge every manager needs:\n\n**TDS (Tax Deducted at Source):**\nBrands deduct TDS when paying creators/managers:\n- Section 194J: Professional/technical services — 10% TDS\n- Section 194C: Contractual services — 1% (individual) or 2% (company)\n\nPractical impact: If a deal is ₹3,00,000 and 10% TDS applies, the brand pays ₹2,70,000 and deposits ₹30,000 with the government. The creator/manager gets credit for that ₹30,000 when filing taxes.\n\n**Your tax obligations:**\n- Income tax filing mandatory if income exceeds ₹2,50,000/year\n- GST registration if turnover exceeds ₹20L (₹10L for some states)\n- Advance tax payments if total tax liability exceeds ₹10,000/year\n- 26AS reconciliation — check TDS credits match what's been paid\n\n**For creators:**\nIncome from brand deals is "Income from Business and Profession." Expenses like equipment, software, travel for shoots are deductible. Advise your creators to maintain expense records and work with a CA.\n\n**Structure recommendation:**\nFor serious managers handling 10+ deals per year, consider forming a Private Limited company or LLP:\n- Better credibility with large brands\n- Lower effective tax rate (22% flat for companies vs. progressive individual rates)\n- Limited liability protection\n- Easier to scale with employees\n\n**International payments:**\nIf working with foreign brands: receive via Wise, Payoneer, or bank wire (SWIFT). INR equivalent is taxable in India. FEMA compliance required for regular international payments.`
          }
        ]
      }
    ]
  },
  {
    id: "growth-strategy",
    icon: "📈",
    title: "Growth, Strategy & Long-term Success",
    color: AMBER,
    colorLight: "#201500",
    duration: "Week 10–12",
    modules: [
      {
        title: "Building a Roster",
        lessons: [
          {
            title: "Signing new creators strategically",
            content: `Your roster is your product. Build it deliberately.\n\n**The ideal creator profile to sign:**\n\n1. **Growth trajectory > Current size**\nA creator at 50K subscribers growing 10% month-over-month is worth more than a stagnant 500K creator. Brands pay for momentum and authentic engagement.\n\n2. **Clear niche**\nGeneralist channels are hard to sell. Finance, tech, gaming, beauty, fitness — clear niches have clear brand buyers. Before signing a creator, ask: "Which 10 brands would pay to reach this audience?"\n\n3. **Production quality floor**\nVideos don't need to be cinematic, but they must be watchable. Audio quality matters more than video. A poorly shot video with clear audio outperforms a beautifully shot video with echo.\n\n4. **Creator's commitment level**\nAre they posting consistently? Do they respond to messages within 24 hours? Do they take their channel seriously? Flaky creators destroy brand relationships.\n\n5. **Clean brand history**\nGoogle the creator. Check their past content. Any controversies, past scandals, or problematic content? Brands will do this check — do it before you sign them.\n\n**The signing conversation:**\nDon't sell yourself. Ask questions:\n- "What does brand partnership look like for you right now?"\n- "What's held you back from doing more deals?"\n- "What types of brands feel authentic to you?"\n- "What does success look like in 12 months?"\n\nThen present how you solve their specific problems.\n\n**Management agreement essentials:**\n- Term: 1–2 years (with 30-90 day exit clause)\n- Scope: which platforms you manage\n- Commission rate: 15–20% of gross deal value\n- Exclusivity: you're their sole manager for the covered platforms\n- Expense reimbursement: who covers media kit production, lawyer fees\n- Termination: conditions under which either party can exit`
          },
          {
            title: "Roster diversification and risk management",
            content: `Don't put all your revenue in one creator. Build a resilient portfolio.\n\n**Portfolio diversification strategy:**\n\n**Tier 1 (1–2 creators):** Your flagship creators. 500K+ subscribers, proven brand track record. These generate 60–70% of your revenue. Risk: if they leave or go quiet, you're in trouble.\n\n**Tier 2 (3–5 creators):** Growing mid-tier creators. 100K–500K range. 30–40% of revenue. These are your pipeline to Tier 1.\n\n**Tier 3 (2–5 creators):** Nano/micro creators you're developing. Little revenue now, but you're building the relationship early. The 50K subscriber creator today may be 2M in 2 years.\n\n**Niche diversification:**\nDon't sign 5 gaming channels. Brands buying gaming content won't diversify across your roster — they'll pick one. Have creators in 3–4 different niches so you can serve different brand categories.\n\n**Creator burnout risk:**\nThe biggest threat to your revenue. Warning signs:\n- Posting frequency drops\n- Engagement falling faster than typical fluctuation\n- Creator mentions stress or burnout in conversations\n- Long gaps between responses to your messages\n\nYour response: Proactively lighten their brand deal load before they burn out. One fewer deal keeps the creator healthy, which keeps them on your roster for years.\n\n**Platform risk:**\nIf all your creators are YouTube-only, a YouTube algorithm change can devastate revenue. Encourage creators to diversify platforms. YouTube + Instagram + newsletter is a resilient setup.\n\n**Contract risk:**\nIf a creator's management contract expires and they don't renew, you lose that revenue overnight. Track contract renewal dates. Have renewal conversations 3 months before expiry, not at the deadline.`
          }
        ]
      },
      {
        title: "Career Development",
        lessons: [
          {
            title: "Building your reputation and network",
            content: `Your reputation in the creator economy is your only real asset. Protect it obsessively.\n\n**The 5 reputation-building behaviors:**\n\n1. **Always deliver what you promise**\nIf you tell a brand a video goes live on Tuesday, it goes live on Tuesday. No exceptions. Brands have campaign calendars, media plans, and reporting deadlines. Missing go-live dates damages trust that takes months to rebuild.\n\n2. **Be honest about performance**\nWhen a campaign underperforms, report it honestly and pair it with context and learnings. Brands respect honesty. They distrust managers who spin bad data.\n\n3. **Protect creators from bad deals**\nYour creator will remember the deals you turned down on their behalf. A creator who trusts you stays with you.\n\n4. **Refer competitors when it's right**\nIf a brand asks about a creator you don't manage who's a perfect fit, say so. "We don't manage [Creator], but they'd be perfect for this. I'd recommend reaching out to their manager at [contact]." This builds massive goodwill and comes back as referrals.\n\n5. **Pay people on time, every time**\nCreators talk to each other. If you have a reputation for slow payments or payment disputes, you'll struggle to sign quality creators.\n\n**Network building:**\n- Attend VidCon, YouTube events, Brand Week events, influencer marketing conferences\n- Join creator economy communities: Creator Economy Club, Influencer Marketing Hub, Indian Creator Economy groups on LinkedIn\n- Build genuine relationships with 3–5 brand marketing managers at companies in your niche\n- Connect with talent agency scouts — they can refer overflow clients\n\n**Online presence:**\n- LinkedIn: Document your deals (with permission), share insights, comment on creator economy content\n- Twitter/X: Quick takes on industry trends\n- Newsletter: Monthly roundup of creator economy trends for brands — positions you as an expert\n\n**The long game:** This industry is a decade-long reputation game. The managers who've been around since 2015–2018 have relationships, shortcuts, and deal flow that no amount of hustle can shortcut. Start building relationships now.`
          },
          {
            title: "Scaling from solo manager to agency",
            content: `Most managers plateau at managing 3–5 creators alone. Scaling requires a system.\n\n**The scaling roadmap:**\n\n**Phase 1: Solo Manager (0–₹50L annual revenue)**\n- You do everything: outreach, contracts, briefing, billing\n- Focus on: mastering the process, building brand relationships, signing quality creators\n- Tools: Google Sheets, Gmail, Notion, Canva, HelloSign\n- Team: just you\n\n**Phase 2: Manager + Assistant (₹50L–₹1.5Cr)**\n- Hire a virtual assistant or part-time coordinator\n- Delegate: outreach research, invoice tracking, scheduling, media kit updates\n- You focus on: strategy, negotiations, brand relationships\n- Sign 2–3 more creators; you can now manage 6–8 total\n\n**Phase 3: Small Agency (₹1.5Cr–₹5Cr)**\n- Dedicated roles: Campaign Manager, Brand Partnerships Lead, Creator Relations\n- Add talent tiers: you handle Tier 1 personally; team handles Tier 2–3\n- Build an agency brand identity\n- Start pitching agency retainers to brands (monthly fee for guaranteed creator access)\n\n**Phase 4: Full Agency (₹5Cr+)**\n- 10+ creators, multiple verticals\n- Agency retainer model + deal commissions\n- Dedicated accounts, legal, finance staff\n- Co-investment in creator businesses\n\n**Key insight:** Don't hire until you've documented your process. Your systems should be in Notion before your first hire. A new employee without a process manual creates chaos.\n\n**Revenue diversification beyond commissions:**\n- Brand consulting retainers (help brands build creator strategies: ₹1–5L/month)\n- Media kit production services\n- Creator analytics reports\n- Workshops for brands on creator marketing\n- White-label campaigns (manage creator campaigns end-to-end for agencies)`
          }
        ]
      }
    ]
  }
];

const allLessons = curriculum.flatMap(section =>
  section.modules.flatMap(mod =>
    mod.lessons.map(lesson => ({ ...lesson, section: section.title, sectionId: section.id }))
  )
);

function ProgressBar({ completed, total, color }) {
  const pct = Math.round((completed / total) * 100);
  return (
    <div style={{ background: "#2A2A2A", borderRadius: 99, height: 6, overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 99, transition: "width 0.4s ease" }} />
    </div>
  );
}

function Badge({ children, color }) {
  return (
    <span style={{
      fontSize: 11, fontWeight: 600, letterSpacing: "0.06em",
      padding: "3px 8px", borderRadius: 4,
      background: color + "22", color: color,
      textTransform: "uppercase"
    }}>{children}</span>
  );
}

function LessonContent({ lesson, onComplete, isCompleted }) {
  const lines = lesson.content.split("\n").filter(Boolean);
  return (
    <div style={{ padding: "0 2px" }}>
      <div style={{ marginBottom: 20 }}>
        {lines.map((line, i) => {
          if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
            const text = line.slice(2, -2);
            return <p key={i} style={{ fontWeight: 600, color: TEXT_PRIMARY, margin: "18px 0 6px", fontSize: 15 }}>{text}</p>;
          }
          if (line.match(/^\d+\.\s\*\*/)) {
            const num = line.match(/^(\d+)\.\s\*\*(.+?)\*\*(.*)$/);
            if (num) return (
              <p key={i} style={{ margin: "10px 0 4px", fontSize: 14, color: TEXT_PRIMARY }}>
                <span style={{ color: ACCENT, fontWeight: 700, marginRight: 8 }}>{num[1]}.</span>
                <span style={{ fontWeight: 600 }}>{num[2]}</span>
                <span style={{ color: TEXT_MUTED }}>{num[3]}</span>
              </p>
            );
          }
          if (line.startsWith("- ") || line.startsWith("✅") || line.startsWith("❌") || line.startsWith("□")) {
            const isGood = line.startsWith("✅");
            const isBad = line.startsWith("❌");
            return (
              <div key={i} style={{
                display: "flex", gap: 8, margin: "5px 0", fontSize: 13.5,
                color: isGood ? GREEN : isBad ? RED : TEXT_MUTED,
                paddingLeft: 4
              }}>
                <span style={{ marginTop: 1, minWidth: 12 }}>{isGood ? "✅" : isBad ? "❌" : line.startsWith("□") ? "☐" : "•"}</span>
                <span>{line.replace(/^[-✅❌□]\s*/, "").replace(/\*\*(.+?)\*\*/g, (_, m) => m)}</span>
              </div>
            );
          }
          if (line.startsWith("|")) {
            return null;
          }
          if (line.match(/^#+\s/)) {
            const text = line.replace(/^#+\s/, "");
            return <p key={i} style={{ fontSize: 13, color: ACCENT, fontWeight: 600, margin: "16px 0 4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{text}</p>;
          }
          const parsed = line.replace(/\*\*(.+?)\*\*/g, (_, m) => `<strong style="color:${TEXT_PRIMARY};font-weight:600">${m}</strong>`);
          return <p key={i} style={{ fontSize: 14, lineHeight: 1.75, color: TEXT_MUTED, margin: "6px 0" }} dangerouslySetInnerHTML={{ __html: parsed }} />;
        })}
        {/* render table if exists */}
        {lesson.content.includes("|") && (() => {
          const tableLines = lines.filter(l => l.startsWith("|"));
          if (tableLines.length < 2) return null;
          const headers = tableLines[0].split("|").filter(Boolean).map(s => s.trim());
          const rows = tableLines.slice(2).map(r => r.split("|").filter(Boolean).map(s => s.trim()));
          return (
            <div key="table" style={{ overflowX: "auto", margin: "16px 0" }}>
              <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 13 }}>
                <thead>
                  <tr>{headers.map((h, i) => <th key={i} style={{ padding: "8px 12px", textAlign: "left", borderBottom: `1px solid ${CARD_BORDER}`, color: TEXT_MUTED, fontWeight: 500 }}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: `1px solid ${CARD_BORDER}22` }}>
                      {row.map((cell, j) => <td key={j} style={{ padding: "8px 12px", color: j === 0 ? TEXT_PRIMARY : TEXT_MUTED }}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })()}
      </div>
      <button onClick={onComplete} style={{
        background: isCompleted ? GREEN + "22" : ACCENT,
        color: isCompleted ? GREEN : "#fff",
        border: isCompleted ? `1px solid ${GREEN}44` : "none",
        borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 600,
        cursor: "pointer", display: "flex", alignItems: "center", gap: 8
      }}>
        {isCompleted ? "✓ Completed" : "Mark as Complete"}
      </button>
    </div>
  );
}

export default function CreatorManagerCourse() {
  const [activeSection, setActiveSection] = useState("foundations");
  const [activeLesson, setActiveLesson] = useState(null);
  const [completed, setCompleted] = useState(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

  const isMobile = window.innerWidth <= 768;

  const section = curriculum.find(s => s.id === activeSection);
  const currentLesson = activeLesson
    ? allLessons.find(l => l.title === activeLesson)
    : null;

  const sectionLessons = section
    ? section.modules.flatMap(m => m.lessons)
    : [];

  const totalLessons = allLessons.length;
  const completedCount = completed.size;

  function toggleComplete(title) {
    setCompleted(prev => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  }

  return (
    <div style={{
      background: SURFACE, minHeight: "100vh", fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
      color: TEXT_PRIMARY, display: "flex", flexDirection: "column"
    }}>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{
        borderBottom: `1px solid ${CARD_BORDER}`,
        padding: isMobile ? "0 12px" : "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 56, background: "#0B0B0B", flexShrink: 0
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {isMobile && (
  <button
    onClick={() => setSidebarOpen(!sidebarOpen)}
    style={{
      background: "none",
      border: "none",
      color: "#fff",
      fontSize: 22,
      cursor: "pointer"
    }}
  >
    ☰
  </button>
)}
          <div style={{ width: 28, height: 28, borderRadius: 6, background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🎬</div>
          <span style={{
  fontSize: isMobile ? 11 : 14,
  fontWeight: 600, letterSpacing: "-0.01em" }}>Creator Manager Masterclass</span>
          <span style={{ fontSize: 11, color: TEXT_DIM, padding: "2px 6px", borderRadius: 4, border: `1px solid ${CARD_BORDER}` }}>v1.0</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ fontSize: 12, color: TEXT_MUTED }}>
            <span style={{ color: TEXT_PRIMARY, fontWeight: 600 }}>{completedCount}</span> / {totalLessons} lessons
          </div>
          {!isMobile && (
  <div style={{ width: 100 }}>
            <ProgressBar completed={completedCount} total={totalLessons} color={ACCENT} />
          </div>)}
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Sidebar */}
        <div style={{
         width: sidebarOpen
  ? (isMobile ? 280 : 280)
  : 0, flexShrink: 0, overflow: "hidden",
          transition: "width 0.25s ease", borderRight: `1px solid ${CARD_BORDER}`,
          background: "#0B0B0B", display: "flex", flexDirection: "column"
        }}>
          <div style={{ overflowY: "auto", flex: 1, padding: "12px 0" }}>
            {curriculum.map(sec => {
              const secLessons = sec.modules.flatMap(m => m.lessons);
              const secCompleted = secLessons.filter(l => completed.has(l.title)).length;
              const isActive = activeSection === sec.id;
              return (
                <div key={sec.id} style={{ marginBottom: 2 }}>
                  <button
                    onClick={() => { setActiveSection(sec.id); setActiveLesson(null); }}
                    style={{
                      width: "100%", textAlign: "left", padding: "10px 16px",
                      background: isActive ? sec.colorLight : "transparent",
                      border: "none", cursor: "pointer", borderLeft: isActive ? `2px solid ${sec.color}` : "2px solid transparent",
                      display: "flex", flexDirection: "column", gap: 4
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 15 }}>{sec.icon}</span>
                      <span style={{ fontSize: 12.5, fontWeight: isActive ? 600 : 400, color: isActive ? TEXT_PRIMARY : TEXT_MUTED }}>{sec.title}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, paddingLeft: 24 }}>
                      <div style={{ flex: 1 }}>
                        <ProgressBar completed={secCompleted} total={secLessons.length} color={sec.color} />
                      </div>
                      <span style={{ fontSize: 10, color: TEXT_DIM }}>{secCompleted}/{secLessons.length}</span>
                    </div>
                  </button>
                  {isActive && sec.modules.map(mod => (
                    <div key={mod.title} style={{ padding: "4px 0" }}>
                      <div style={{ padding: "4px 16px 2px 40px", fontSize: 10.5, color: TEXT_DIM, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>{mod.title}</div>
                      {mod.lessons.map(lesson => (
                        <button
                          key={lesson.title}
                          onClick={() => {
  setActiveLesson(lesson.title);

  if (isMobile) {
    setSidebarOpen(false);
  }
}}
                          style={{
                            width: "100%", textAlign: "left",
                            padding: "7px 16px 7px 40px",
                            background: activeLesson === lesson.title ? CARD_BG : "transparent",
                            border: "none", cursor: "pointer",
                            display: "flex", alignItems: "center", gap: 8
                          }}
                        >
                          <div style={{
                            width: 14, height: 14, borderRadius: "50%",
                            border: `1.5px solid ${completed.has(lesson.title) ? GREEN : CARD_BORDER}`,
                            background: completed.has(lesson.title) ? GREEN + "33" : "transparent",
                            flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center"
                          }}>
                            {completed.has(lesson.title) && <div style={{ width: 6, height: 6, borderRadius: "50%", background: GREEN }} />}
                          </div>
                          <span style={{ fontSize: 12.5, color: activeLesson === lesson.title ? TEXT_PRIMARY : TEXT_MUTED, lineHeight: 1.4 }}>{lesson.title}</span>
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, overflowY: "auto", background: SURFACE }}>
          {!currentLesson ? (
            // Section overview
<div style={{
  width: "100%",
  padding: "40px 60px"
}}>
           
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 32 }}>
                <div style={{ fontSize: 36 }}>{section?.icon}</div>
                <div>
                  <Badge color={section?.color || ACCENT}>{section?.duration}</Badge>
                  <h1 style={{ fontSize: isMobile ? 20 : 26, fontWeight: 700, margin: "8px 0 6px", letterSpacing: "-0.02em" }}>{section?.title}</h1>
                  <p style={{ fontSize: 14, color: TEXT_MUTED, margin: 0 }}>
                    {sectionLessons.filter(l => completed.has(l.title)).length} of {sectionLessons.length} lessons completed
                  </p>
                </div>
              </div>

              {section?.modules.map((mod, mi) => (
                <div key={mod.title} style={{ marginBottom: 28 }}>
                  <h2 style={{ fontSize: 13, color: TEXT_DIM, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 12px" }}>Module {mi + 1} — {mod.title}</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {mod.lessons.map((lesson, li) => (
                      <button
                        key={lesson.title}
                        onClick={() => {
  setActiveLesson(lesson.title);

  if (isMobile) {
    setSidebarOpen(false);
  }
}}
                        style={{
                          background: CARD_BG, border: `1px solid ${CARD_BORDER}`,
                          borderRadius: 10, padding: "14px 18px",
                          display: "flex", alignItems: "center", gap: 14,
                          cursor: "pointer", textAlign: "left",
                          transition: "border-color 0.15s"
                        }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = section?.color || ACCENT}
                        onMouseLeave={e => e.currentTarget.style.borderColor = CARD_BORDER}
                      >
                        <div style={{
                          width: 32, height: 32, borderRadius: 8,
                          background: completed.has(lesson.title) ? GREEN + "22" : (section?.colorLight || "#1A1A1A"),
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 13, color: completed.has(lesson.title) ? GREEN : TEXT_DIM,
                          fontWeight: 600, flexShrink: 0, fontFamily: "'IBM Plex Mono', monospace"
                        }}>
                          {completed.has(lesson.title) ? "✓" : `${li + 1}`}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 14, fontWeight: 500, color: TEXT_PRIMARY, marginBottom: 2 }}>{lesson.title}</div>
                          <div style={{ fontSize: 12, color: TEXT_DIM }}>Lesson {li + 1}</div>
                        </div>
                        <span style={{ color: TEXT_DIM, fontSize: 16 }}>›</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Lesson view
           <div style={{
  width: "100%",
  padding: isMobile
  ? "20px 16px"
  : "40px 60px"
}}>
              <button onClick={() => setActiveLesson(null)} style={{
                background: "none", border: "none", color: TEXT_DIM, cursor: "pointer",
                fontSize: 13, padding: "0 0 20px", display: "flex", alignItems: "center", gap: 6
              }}>
                ← Back to {section?.title}
              </button>

              <div style={{ marginBottom: 24 }}>
                <Badge color={section?.color || ACCENT}>{currentLesson.sectionId}</Badge>
                <h1 style={{ fontSize: isMobile ? 18 : 22, fontWeight: 700, margin: "10px 0 4px", letterSpacing: "-0.02em" }}>{currentLesson.title}</h1>
                <p style={{ fontSize: 13, color: TEXT_DIM, margin: 0 }}>{currentLesson.section}</p>
              </div>

              <div style={{ height: 1, background: CARD_BORDER, marginBottom: 28 }} />

              <LessonContent
                lesson={currentLesson}
                isCompleted={completed.has(currentLesson.title)}
                onComplete={() => toggleComplete(currentLesson.title)}
              />

              {/* Next lesson */}
              {(() => {
                const idx = allLessons.findIndex(l => l.title === currentLesson.title);
                const next = allLessons[idx + 1];
                if (!next) return null;
                return (
                  <div style={{ marginTop: 40, borderTop: `1px solid ${CARD_BORDER}`, paddingTop: 24 }}>
                    <p style={{ fontSize: 12, color: TEXT_DIM, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.07em" }}>Up next</p>
                    <button
                      onClick={() => {
                        setActiveSection(next.sectionId);
                        setActiveLesson(next.title);
                      }}
                      style={{
                        background: CARD_BG, border: `1px solid ${CARD_BORDER}`, borderRadius: 10,
                        padding: "14px 18px", cursor: "pointer", textAlign: "left", width: "100%",
                        display: "flex", alignItems: "center", justifyContent: "space-between"
                      }}
                    >
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 500, color: TEXT_PRIMARY }}>{next.title}</div>
                        <div style={{ fontSize: 12, color: TEXT_DIM, marginTop: 2 }}>{next.section}</div>
                      </div>
                      <span style={{ color: ACCENT, fontSize: 20 }}>→</span>
                    </button>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        {/* Right stats panel — only on section view */}
        {!currentLesson && !isMobile && (
          <div style={{
            width: 220, flexShrink: 0, borderLeft: `1px solid ${CARD_BORDER}`,
            background: "#0B0B0B", padding: "24px 16px",
            display: "flex", flexDirection: "column", gap: 20
          }}>
            <div>
              <p style={{ fontSize: 11, color: TEXT_DIM, margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.07em" }}>Your progress</p>
              {curriculum.map(sec => {
                const secLessons = sec.modules.flatMap(m => m.lessons);
                const done = secLessons.filter(l => completed.has(l.title)).length;
                return (
                  <div key={sec.id} style={{ marginBottom: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 11.5, color: TEXT_MUTED }}>{sec.icon} {sec.title.split(" ")[0]}</span>
                      <span style={{ fontSize: 11, color: TEXT_DIM, fontFamily: "'IBM Plex Mono', monospace" }}>{done}/{secLessons.length}</span>
                    </div>
                    <ProgressBar completed={done} total={secLessons.length} color={sec.color} />
                  </div>
                );
              })}
            </div>

            <div style={{ borderTop: `1px solid ${CARD_BORDER}`, paddingTop: 16 }}>
              <p style={{ fontSize: 11, color: TEXT_DIM, margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.07em" }}>Quick stats</p>
              {[
                { label: "Total lessons", value: totalLessons, color: TEXT_PRIMARY },
                { label: "Completed", value: completedCount, color: GREEN },
                { label: "Remaining", value: totalLessons - completedCount, color: ACCENT },
              ].map(({ label, value, color }) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 12, color: TEXT_DIM }}>{label}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color, fontFamily: "'IBM Plex Mono', monospace" }}>{value}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: `1px solid ${CARD_BORDER}`, paddingTop: 16 }}>
              <p style={{ fontSize: 11, color: TEXT_DIM, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.07em" }}>Sections</p>
              {curriculum.map(sec => (
                <button
                  key={sec.id}
                  onClick={() => { setActiveSection(sec.id); setActiveLesson(null); }}
                  style={{
                    width: "100%", textAlign: "left", background: activeSection === sec.id ? sec.colorLight : "none",
                    border: "none", borderRadius: 6, padding: "6px 8px", cursor: "pointer",
                    fontSize: 12, color: activeSection === sec.id ? TEXT_PRIMARY : TEXT_MUTED,
                    marginBottom: 2, display: "flex", alignItems: "center", gap: 6
                  }}
                >
                  <span>{sec.icon}</span> {sec.duration}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
