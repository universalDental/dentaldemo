import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import {
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Microscope,
  BadgeDollarSign,
  Siren,
  Stethoscope,
  Smile,
  Sun,
  Layers,
  Wrench,
  Scissors,
  Braces,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  ArrowUpRight,
  ChevronDown,
  Check,
  X,
  Quote,
} from "lucide-react";

const Tooth3D = lazy(() => import("@/components/site/Tooth3D"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Dental Demo",
      },
      {
        name: "description",
        content:
          "Dental Demo",
      },
      {
        property: "og:title",
        content: "Dental Demo",
      },
      {
        property: "og:description",
        content:
          "Dental Demo",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      {/* <SmoothScroll /> */}
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Dentist />
        <Tips />
        <WhyUs />
        <Services />
        <Process />
        <Testimonials />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Nav                                                                        */
/* -------------------------------------------------------------------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#dentist", label: "The Dentist" },
    { href: "#process", label: "Process" },
    { href: "#faqs", label: "FAQs" },
  ];
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
      className="fixed top-0 inset-x-0 z-50 px-4 pt-4"
    >
      <div
        className={`mx-auto max-w-7xl h-14 rounded-full flex items-center justify-between px-4 sm:px-6 transition-all ${
          scrolled ? "glass shadow-glass" : "bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <span className="relative grid place-items-center size-8 rounded-full gradient-primary">
            <span className="absolute inset-0.5 rounded-full bg-background/90" />
            <span className="relative size-3 rounded-full gradient-primary" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Aethera <span className="italic text-primary">Dental</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="tel:+15550128888"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-foreground/80 hover:text-foreground"
          >
            <Phone className="size-3.5" />
            <span className="font-mono">(555) 012-8888</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            Book<span className="hidden sm:inline">&nbsp;visit</span>
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] gradient-dawn overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
      {/* orbs */}
      <div
        aria-hidden
        className="absolute -top-32 -left-24 size-[520px] rounded-full blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle at 30% 30%, oklch(0.9 0.06 165), transparent 60%)" }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 -right-40 size-[560px] rounded-full blur-3xl opacity-50"
        style={{
          background: "radial-gradient(circle at 60% 40%, oklch(0.86 0.09 82), transparent 60%)",
          animationDelay: "-6s",
        }}
      />

      <motion.div
        style={{ y, scale, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 md:pt-48 md:pb-32 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-12 items-center"
      >
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] tracking-[0.18em] uppercase text-primary font-semibold"
          >
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Precision oral health · Est. 2012
          </motion.div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.02] text-balance-fine">
            <SplitHeading text="Gentle, modern dental care" />
            <span className="block italic text-primary font-medium mt-2">
              for your whole family.
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            A calm, sunlit studio where advanced clinical technology meets a
            genuinely gentle approach. Preventive, cosmetic, restorative and
            orthodontic care — all under one roof.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-medium shadow-float hover:shadow-glass transition-all"
            >
              Book appointment
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="tel:+15550128888"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full glass font-medium hover:bg-background/80 transition-colors"
            >
              <Phone className="size-4" />
              Call (555) 012-8888
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "15+", v: "Years caring" },
              { k: "9.4k", v: "Smiles restored" },
              { k: "4.98", v: "Patient rating" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display text-2xl font-semibold text-foreground">{s.k}</div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Tooth stage */}
        <div className="relative">
          <div className="relative aspect-square w-full max-w-[520px] mx-auto">
            <div className="absolute inset-6 rounded-[2.5rem] glass shadow-glass" />
            <div className="absolute inset-6 rounded-[2.5rem] overflow-hidden">
              <Suspense fallback={<div className="h-full w-full bg-primary-soft/40 animate-pulse" />}>
                <Tooth3D />
              </Suspense>
            </div>
            {/* floating chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="absolute -bottom-3 left-2 glass rounded-2xl px-4 py-3 shadow-glass"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary">
                Enamel scan
              </div>
              <div className="text-sm font-semibold">99.8% integrity</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.9 }}
              className="absolute -top-2 -right-2 glass rounded-2xl px-4 py-3 shadow-glass"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-accent-foreground/80">
                Digital twin
              </div>
              <div className="text-sm font-semibold">Live preview</div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
        <span>Scroll</span>
        <ChevronDown className="size-4 animate-bounce" />
      </div>
    </section>
  );
}

function SplitHeading({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <span className="inline-block overflow-hidden">
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.15 + i * 0.08,
            duration: 0.9,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Marquee                                                                    */
/* -------------------------------------------------------------------------- */

function Marquee() {
  const items = [
    "ADA Certified",
    "3D iTero scanning",
    "Sedation dentistry",
    "Laser precision",
    "Same-day crowns",
    "Family friendly",
    "Insurance accepted",
    "Emergency care",
  ];
  return (
    <section className="border-y border-border bg-surface/60 overflow-hidden">
      <div className="relative flex overflow-hidden py-5">
        <motion.div
          className="flex shrink-0 gap-10 pr-10 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {[...items, ...items, ...items, ...items].map((t, i) => (
            <div key={i} className="flex items-center gap-4 text-sm text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" />
              <span className="uppercase tracking-[0.22em] text-xs">{t}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Dentist                                                                    */
/* -------------------------------------------------------------------------- */

function Dentist() {
  return (
    <section id="dentist" className="relative py-24 md:py-36 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-primary-soft">
            {/* Layered portrait placeholder */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 80% at 50% 20%, oklch(0.94 0.03 165) 0%, oklch(0.88 0.05 165) 50%, oklch(0.75 0.06 175) 100%)",
              }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative">
                <div className="size-56 rounded-full bg-background/70 backdrop-blur-md grid place-items-center shadow-glass animate-float">
                  <Smile className="size-24 text-primary" strokeWidth={1.2} />
                </div>
                <div className="absolute -bottom-2 -right-3 rounded-full glass px-3 py-1 text-[10px] font-mono uppercase tracking-widest">
                  DDS · MSD
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="absolute -bottom-8 -left-4 md:-left-8 max-w-xs glass rounded-3xl p-6 shadow-glass"
          >
            <Quote className="size-5 text-accent" />
            <p className="mt-3 text-sm italic text-foreground/80 leading-relaxed">
              "A dental visit should feel like a moment of self-care — quiet,
              considered, restorative."
            </p>
            <div className="mt-4 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Dr. Elara Vance
            </div>
          </motion.div>
        </motion.div>

        <div>
          <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-primary">
            Meet the dentist
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            Dr. Elara Vance —{" "}
            <span className="italic text-muted-foreground font-normal">
              guided by precision, inspired by calm.
            </span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-lg">
            Over fifteen years of clinical excellence in restorative and
            cosmetic dentistry. Dr. Vance blends biomimetic technique with a
            warm, patient-first approach — where every visit is measured in
            comfort, not just clinical outcomes.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              { k: "Harvard DDS", v: "School of Dental Medicine" },
              { k: "MSD Prosthodontics", v: "UCSF Advanced Program" },
              { k: "AACD Fellow", v: "Cosmetic Dentistry" },
              { k: "ADA Member", v: "Board Certified" },
            ].map((c) => (
              <div
                key={c.k}
                className="rounded-2xl border border-border p-5 hover:bg-surface transition-colors"
              >
                <div className="text-sm font-semibold">{c.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <StatCounter to={15} suffix="+" label="Years" />
            <StatCounter to={9400} label="Patients" format={(n) => `${(n / 1000).toFixed(1)}k`} />
            <StatCounter to={42} label="Awards" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCounter({
  to,
  suffix = "",
  label,
  format,
}: {
  to: number;
  suffix?: string;
  label: string;
  format?: (n: number) => string;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now();
            const dur = 1400;
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(to * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <div ref={ref}>
      <div className="font-display text-3xl font-semibold">
        {format ? format(n) : n}
        {suffix}
      </div>
      <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Tips — Myth vs Fact flip cards                                             */
/* -------------------------------------------------------------------------- */

function Tips() {
  const cards = [
    {
      myth: "Sugar is the only cause of cavities.",
      fact: "Acidic foods, dry mouth and poor brushing habits all contribute equally to enamel breakdown.",
    },
    {
      myth: "Brushing harder cleans better.",
      fact: "Pressure damages enamel and gums. A soft brush at 45° with gentle strokes is far more effective.",
    },
    {
      myth: "You only need a dentist when something hurts.",
      fact: "Most dental issues develop silently. A checkup every six months prevents 90% of common problems.",
    },
    {
      myth: "Whitening damages your teeth.",
      fact: "Professionally supervised whitening is enamel-safe and delivers longer-lasting results than DIY.",
    },
  ];
  return (
    <section className="relative py-24 md:py-32 px-6 bg-surface">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-primary">
              Patient tips
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] max-w-2xl">
              Myth <span className="italic text-muted-foreground">vs.</span> Fact.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
            Tap any card to reveal the clinical reality. Grounded in evidence,
            explained without the jargon.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c, i) => (
            <FlipCard key={i} myth={c.myth} fact={c.fact} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ myth, fact, delay = 0 }: { myth: string; fact: string; delay?: number }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.button
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: [0.19, 1, 0.22, 1] }}
      onClick={() => setFlipped((v) => !v)}
      className="relative aspect-[4/5] w-full text-left [perspective:1200px] group"
    >
      <div
        className={`absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* front — myth */}
        <div className="absolute inset-0 rounded-3xl bg-card border border-border p-6 flex flex-col [backface-visibility:hidden] shadow-glass">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-destructive">
            <X className="size-3.5" />
            Myth
          </div>
          <p className="mt-6 font-display text-xl md:text-2xl leading-snug flex-1">
            "{myth}"
          </p>
          <div className="mt-4 text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            Tap to reveal
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
        {/* back — fact */}
        <div className="absolute inset-0 rounded-3xl gradient-primary p-6 flex flex-col text-primary-foreground [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-float">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-primary-foreground/80">
            <Check className="size-3.5" />
            Fact
          </div>
          <p className="mt-6 text-base md:text-lg leading-relaxed flex-1">
            {fact}
          </p>
          <div className="mt-4 text-[11px] uppercase tracking-widest text-primary-foreground/70">
            Tap to flip back
          </div>
        </div>
      </div>
    </motion.button>
  );
}

/* -------------------------------------------------------------------------- */
/* Why us                                                                     */
/* -------------------------------------------------------------------------- */

function WhyUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Sterile equipment",
      body: "Hospital-grade sterilization and HEPA-filtered treatment rooms.",
    },
    {
      icon: HeartPulse,
      title: "Gentle care",
      body: "Sedation, headphones, and pace set by you — not the clock.",
    },
    {
      icon: Microscope,
      title: "Modern technology",
      body: "3D intraoral scans, laser precision, same-day ceramic crowns.",
    },
    {
      icon: BadgeDollarSign,
      title: "Transparent pricing",
      body: "Digital estimates before treatment. No surprise line items.",
    },
    {
      icon: Siren,
      title: "Emergency care",
      body: "Same-day emergency slots reserved every clinic day.",
    },
    {
      icon: Stethoscope,
      title: "Experienced dentist",
      body: "15+ years, board certified, thousands of restored smiles.",
    },
  ];
  return (
    <section className="relative py-24 md:py-36 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-primary">
            Why Aethera
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            The standard,{" "}
            <span className="italic text-primary">quietly redefined.</span>
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-[2rem] overflow-hidden border border-border">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.19, 1, 0.22, 1] }}
              className="relative bg-card p-8 md:p-10 group overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-dawn" />
              <div className="relative">
                <div className="size-12 rounded-2xl bg-primary-soft grid place-items-center text-primary group-hover:rotate-6 transition-transform duration-500">
                  <f.icon className="size-5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {f.body}
                </p>
                <div className="mt-8 flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                  <span>0{i + 1}</span>
                  <div className="flex-1 h-px hairline" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Services                                                                   */
/* -------------------------------------------------------------------------- */

const SERVICES = [
  {
    tag: "Preventive",
    title: "Preventive care",
    body: "Cleanings, screenings, sealants — the foundation of a healthy smile.",
    icon: Sun,
  },
  {
    tag: "Restorative",
    title: "Restorative dentistry",
    body: "Biocompatible fillings, crowns and bridges that disappear into your bite.",
    icon: Layers,
  },
  {
    tag: "Cosmetic",
    title: "Cosmetic artistry",
    body: "Porcelain veneers and clinical whitening designed around your face.",
    icon: Sparkles,
  },
  {
    tag: "Orthodontics",
    title: "Clear aligners",
    body: "Discreet, digitally-planned alignment for adults and teens.",
    icon: Braces,
  },
  {
    tag: "Implants",
    title: "Dental implants",
    body: "Titanium implants engineered to last a lifetime, placed with precision.",
    icon: Wrench,
  },
  {
    tag: "Surgery",
    title: "Oral surgery",
    body: "Wisdom teeth, extractions and bone grafting with sedation options.",
    icon: Scissors,
  },
];

function Services() {
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="relative py-24 md:py-36 px-6 bg-foreground text-background">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-accent">
              Services
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
              Every service you'll ever need,
              <span className="italic text-accent/90 block">
                delivered with intention.
              </span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
          <div className="rounded-[2rem] glass-dark p-2">
            <ul>
              {SERVICES.map((s, i) => (
                <li key={s.title}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`w-full text-left px-6 py-5 rounded-2xl flex items-center justify-between gap-4 transition-all ${
                      active === i
                        ? "bg-background text-foreground shadow-float"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span className={`size-10 rounded-xl grid place-items-center shrink-0 ${active === i ? "bg-primary-soft text-primary" : "bg-white/5"}`}>
                        <s.icon className="size-4" strokeWidth={1.6} />
                      </span>
                      <div className="min-w-0">
                        <div className="font-display text-lg md:text-xl font-semibold truncate">
                          {s.title}
                        </div>
                        <div className={`text-[10px] font-mono uppercase tracking-widest ${active === i ? "text-muted-foreground" : "text-white/50"}`}>
                          {s.tag}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className={`size-4 shrink-0 transition-transform ${active === i ? "rotate-0" : "-rotate-45 opacity-40"}`} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[420px] rounded-[2rem] overflow-hidden gradient-primary p-10 md:p-14 flex flex-col justify-between">
            <div aria-hidden className="absolute -top-24 -right-24 size-[380px] rounded-full bg-white/10 blur-3xl" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                className="relative"
              >
                <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-primary-foreground/70">
                  {String(active + 1).padStart(2, "0")} — {SERVICES[active].tag}
                </div>
                <h3 className="mt-6 font-display text-4xl md:text-5xl font-semibold text-primary-foreground leading-tight">
                  {SERVICES[active].title}
                </h3>
                <p className="mt-6 max-w-md text-primary-foreground/85 leading-relaxed">
                  {SERVICES[active].body}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="relative mt-10 flex items-center justify-between">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-background text-foreground font-medium text-sm hover:opacity-90"
              >
                Book this service
                <ArrowUpRight className="size-4" />
              </a>
              <div className="font-mono text-xs text-primary-foreground/70">
                {String(active + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Process — scroll pinned timeline                                           */
/* -------------------------------------------------------------------------- */

function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const height = useSpring(useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]), {
    stiffness: 80,
    damping: 20,
  });
  const steps = [
    { k: "Consultation", body: "A conversation about your goals, history, comfort and expectations." },
    { k: "Diagnosis", body: "3D intraoral scanning and AI-assisted evaluation — no surprises." },
    { k: "Planning", body: "Transparent digital treatment plan with visual smile preview." },
    { k: "Treatment", body: "Gentle execution using the least invasive proven technique." },
    { k: "Review", body: "Follow-up, refinements and a long-term maintenance roadmap." },
  ];
  return (
    <section id="process" ref={ref} className="relative py-24 md:py-36 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-16">
          <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-primary">
            The pathway
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            Five quiet steps to a{" "}
            <span className="italic text-primary">confident smile.</span>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-[120px_1fr] gap-6 md:gap-14">
          <div className="relative hidden md:block">
            <div className="sticky top-32">
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4">
                Progress
              </div>
              <div className="relative h-64 w-px bg-border ml-4">
                <motion.div
                  style={{ height }}
                  className="absolute top-0 left-0 w-px gradient-primary origin-top"
                />
              </div>
            </div>
          </div>
          <ol className="space-y-14 md:space-y-24">
            {steps.map((s, i) => (
              <motion.li
                key={s.k}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
                className="relative grid grid-cols-[auto_1fr] items-start gap-6 md:gap-10"
              >
                <div className="font-display text-5xl md:text-7xl font-semibold text-transparent [-webkit-text-stroke:1px_var(--color-primary)] leading-none tabular-nums">
                  0{i + 1}
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold">
                    {s.k}
                  </h3>
                  <p className="mt-3 text-muted-foreground max-w-xl leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Testimonials — stacked cards carousel                                      */
/* -------------------------------------------------------------------------- */

const TESTIMONIALS = [
  {
    quote:
      "Aethera isn't a clinic — it's a sanctuary. My smile has never looked more like me.",
    name: "Julian Devereaux",
    role: "Patient since 2021",
  },
  {
    quote:
      "The most calming dental experience of my life. My kids actually ask to go back.",
    name: "Amara Okafor",
    role: "Family of four",
  },
  {
    quote:
      "Transparent pricing, zero pressure, and results I'd stake my career on.",
    name: "Dr. Miles Halberg",
    role: "Physician, longtime patient",
  },
  {
    quote:
      "I dreaded the dentist for years. Dr. Vance changed that in a single visit.",
    name: "Priya Sundaram",
    role: "Veneers, 2023",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative py-24 md:py-36 px-6 bg-surface overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 items-center">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-primary">
              Voices
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              A quiet chorus of{" "}
              <span className="italic text-primary">confidence.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
              Real words from real patients across a decade of care.
            </p>
            <div className="mt-8 flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-primary" : "w-4 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative h-[380px]">
            {TESTIMONIALS.map((t, idx) => {
              const offset = (idx - i + TESTIMONIALS.length) % TESTIMONIALS.length;
              const visible = offset < 3;
              return (
                <motion.div
                  key={t.name}
                  initial={false}
                  animate={{
                    opacity: visible ? 1 : 0,
                    y: offset * 22,
                    x: offset * -14,
                    scale: 1 - offset * 0.05,
                    rotate: offset * -1.5,
                    zIndex: TESTIMONIALS.length - offset,
                  }}
                  transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                  className="absolute inset-0 rounded-[2rem] bg-card border border-border p-8 md:p-10 shadow-glass flex flex-col"
                >
                  <Quote className="size-8 text-accent" />
                  <p className="mt-6 font-display text-2xl md:text-3xl leading-snug flex-1 text-balance-fine">
                    "{t.quote}"
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="size-11 rounded-full gradient-primary" />
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FAQs                                                                       */
/* -------------------------------------------------------------------------- */

function Faqs() {
  const faqs = [
    {
      q: "Do you accept insurance?",
      a: "We accept most major PPO plans and file claims on your behalf. We'll verify your benefits before your first visit and provide a written estimate.",
    },
    {
      q: "What if I'm nervous about the dentist?",
      a: "You're not alone — many of our patients arrive anxious. We offer noise-cancelling headphones, weighted blankets, nitrous oxide sedation and (for longer procedures) oral sedation. We move at your pace, always.",
    },
    {
      q: "How often should I have a checkup?",
      a: "For most healthy adults, every six months. If you have gum disease, orthodontic work, or specific risk factors, we may recommend a customized cadence.",
    },
    {
      q: "Do you see children?",
      a: "Yes — we care for families from ages 2 to 92. Our pediatric-friendly hygienists are specifically trained to make first visits feel like play.",
    },
    {
      q: "Do you offer emergency appointments?",
      a: "Yes. We reserve same-day slots every clinic day for genuine dental emergencies. Call our main line and we'll get you in as soon as possible.",
    },
    {
      q: "How much does whitening cost?",
      a: "In-office whitening starts at $499 and includes a custom tray for at-home maintenance. All pricing is transparent and quoted before treatment.",
    },
  ];
  return (
    <section id="faqs" className="relative py-24 md:py-36 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-primary">
            FAQs
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            The questions we hear{" "}
            <span className="italic text-primary">most.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6 data-[state=open]:shadow-glass data-[state=open]:bg-surface transition-all"
            >
              <AccordionTrigger className="text-left font-display text-lg md:text-xl font-semibold hover:no-underline py-6">
                <span className="flex items-start gap-4">
                  <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                  {f.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pl-6 pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Contact                                                                    */
/* -------------------------------------------------------------------------- */

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 md:py-36 px-6 bg-foreground text-background overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-[0.08]" />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 size-[600px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.1 165), transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16">
        <div>
          <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-accent">
            Contact
          </p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] text-balance-fine">
            Begin your{" "}
            <span className="italic text-accent">journey</span> with us.
          </h2>
          <p className="mt-6 text-background/70 max-w-md leading-relaxed">
            Book your visit, ask a question, or drop by the studio for a coffee
            and a tour. We reply within one business hour.
          </p>

          <div className="mt-10 space-y-6">
            <ContactRow icon={MapPin} title="Studio" lines={["888 Serenity Drive, Suite 100", "San Francisco, CA 94110"]} />
            <ContactRow icon={Phone} title="Call or text" lines={["+1 (555) 012-8888"]} link="tel:+15550128888" />
            <ContactRow
              icon={Clock}
              title="Hours"
              lines={["Mon–Thu · 8:00 – 19:00", "Friday · 8:00 – 16:00", "Weekends · By appointment"]}
            />
          </div>

          <div className="mt-10 aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 relative">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 80% at 30% 30%, oklch(0.35 0.05 220) 0%, oklch(0.2 0.03 220) 100%)",
              }}
            />
            <div className="relative h-full grid place-items-center">
              <div className="text-center">
                <div className="mx-auto size-12 rounded-full gradient-primary grid place-items-center shadow-float">
                  <MapPin className="size-5 text-primary-foreground" />
                </div>
                <div className="mt-3 font-display text-lg">Serenity Drive Studio</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-background/60 mt-1">
                  Interactive map · 37.7749° N, 122.4194° W
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] bg-background text-foreground p-8 md:p-10 shadow-float">
            <div className="flex items-center justify-between mb-6">
              <div className="font-display text-2xl font-semibold">Request a visit</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary">
                Step 1 / 1
              </div>
            </div>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="py-12 text-center"
                >
                  <div className="mx-auto size-16 rounded-full gradient-primary grid place-items-center shadow-float">
                    <Check className="size-7 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">Request received</h3>
                  <p className="mt-2 text-muted-foreground text-sm">
                    We'll be in touch within one business hour to confirm your slot.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full name">
                      <Input required placeholder="Jane Doe" className="h-12 rounded-xl" />
                    </Field>
                    <Field label="Phone">
                      <Input required type="tel" placeholder="(555) 000-0000" className="h-12 rounded-xl" />
                    </Field>
                  </div>
                  <Field label="Email">
                    <Input required type="email" placeholder="you@email.com" className="h-12 rounded-xl" />
                  </Field>
                  <Field label="Service">
                    <Select defaultValue="general">
                      <SelectTrigger className="h-12 rounded-xl w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General checkup</SelectItem>
                        <SelectItem value="cosmetic">Cosmetic consultation</SelectItem>
                        <SelectItem value="ortho">Clear aligners</SelectItem>
                        <SelectItem value="implant">Implants</SelectItem>
                        <SelectItem value="emergency">Emergency visit</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Anything we should know?">
                    <Textarea placeholder="A quick note about your goals or comfort preferences..." className="min-h-24 rounded-xl" />
                  </Field>
                  <Button type="submit" size="lg" className="w-full h-12 rounded-full text-base font-medium gradient-primary hover:opacity-95">
                    Request appointment
                    <ArrowUpRight className="size-4 ml-1" />
                  </Button>
                  <p className="text-[11px] text-muted-foreground text-center">
                    By submitting you agree to our privacy policy. We never share your data.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </div>
      {children}
    </label>
  );
}

function ContactRow({
  icon: Icon,
  title,
  lines,
  link,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  link?: string;
}) {
  const Inner = (
    <div className="flex gap-4 items-start group">
      <div className="size-11 rounded-2xl bg-white/5 border border-white/10 grid place-items-center shrink-0 group-hover:bg-primary/20 transition-colors">
        <Icon className="size-4 text-accent" />
      </div>
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-background/60">
          {title}
        </div>
        <div className="mt-1 text-base leading-snug">
          {lines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
  return link ? (
    <a href={link} className="block">
      {Inner}
    </a>
  ) : (
    Inner
  );
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="relative border-t border-border py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative grid place-items-center size-9 rounded-full gradient-primary">
                <span className="absolute inset-0.5 rounded-full bg-background/90" />
                <span className="relative size-3 rounded-full gradient-primary" />
              </span>
              <span className="font-display text-xl font-semibold tracking-tight">
                Aethera <span className="italic text-primary">Dental</span>
              </span>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
              A calm, sunlit dental studio blending advanced clinical technology
              with genuinely gentle care.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Instagram, Facebook, Twitter].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-9 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <I className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <FooterCol
            title="Practice"
            links={["Services", "The dentist", "Technology", "Testimonials"]}
          />
          <FooterCol title="Visit" links={["Contact", "Directions", "Insurance", "New patients"]} />
          <FooterCol title="Legal" links={["Privacy", "Accessibility", "HIPAA", "Cookies"]} />
        </div>
        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Aethera Clinical Group. All rights reserved.
          </div>
          <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            Designed for calm · Built for care
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-4">
        {title}
      </div>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
