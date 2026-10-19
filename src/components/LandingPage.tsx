import React from 'react';
import { 
  ArrowRight, 
  HelpCircle, 
  Camera, 
  Scan, 
  Wrench, 
  Clock, 
  Tag, 
  Package, 
  CheckCircle2, 
  Heart, 
  Sparkles, 
  RefreshCw, 
  ShieldAlert, 
  Headphones, 
  Recycle, 
  TrendingDown, 
  Award,
  ChevronRight
} from 'lucide-react';
import { ChalmersLogo, IkeaLogo, LarsOlofAvatar } from './Logos';

interface LandingPageProps {
  onOpenDemo: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onOpenDemo }) => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#111111] font-sans selection:bg-[#ffdb00] selection:text-black">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-black/5 px-6 lg:px-16 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-6">
            <ChalmersLogo className="h-9 w-9 shrink-0" />
            <div className="h-5 w-[1px] bg-neutral-300" />
            <div className="flex items-center gap-2.5">
              <IkeaLogo className="h-6" />
              <span className="font-semibold text-sm lg:text-base tracking-tight text-neutral-800">
                Lars-Olof <span className="text-neutral-400 font-normal">· Smart Repair Coach</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 bg-[#0058a3] hover:bg-[#004785] text-white text-xs lg:text-sm font-medium px-4 lg:px-5 py-2 lg:py-2.5 rounded-full transition-all shadow-sm hover:shadow"
            >
              <span>Explore the concept</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="px-6 lg:px-16 pt-10 pb-16 lg:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100/70 border border-amber-300/60 rounded-full text-xs font-semibold text-amber-900">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Group 13 - TEK830</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.08] text-neutral-900">
              Take a picture.<br />
              <span className="text-[#0058a3]">Lars-Olof</span> tells you<br />
              how to fix it.
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 max-w-lg leading-relaxed">
              Meet Lars-Olof, your Smart Repair Coach. A little guidance could turn &ldquo;is it broken?&rdquo; into &ldquo;I can fix this.&rdquo;
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 bg-[#0058a3] hover:bg-[#004785] active:scale-95 text-white font-semibold text-base px-7 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg group"
              >
                <span>See the demo</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image with Floating Story Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-neutral-200 aspect-[4/4.2] group">
              <img
                src="/assets/Home-life_photograph_1.png"
                alt="HEMNES bedside table with loose knob"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              {/* Overlay card at the bottom */}
              <div className="absolute inset-x-4 bottom-4 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/60 shadow-xl">
                <span className="text-[10px] font-bold tracking-wider text-[#0058a3] uppercase block mb-1">
                  SMALL PROBLEM, NEW POSSIBILITIES.
                </span>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">
                  One loose knob. Not a lost cause.
                </h3>
                <p className="text-xs text-neutral-600 leading-normal">
                  Our demo follows a HEMNES bedside table from a photo to a simple fix.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Yellow Banner Bar */}
      <div className="bg-[#ffdb00] text-neutral-950 font-bold py-4 px-6 lg:px-16 border-y border-amber-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2 text-sm sm:text-base">
          <div>Less figuring it out. More keeping it going.</div>
          <div className="flex items-center gap-2 font-semibold">
            <span>A photo</span>
            <ArrowRight className="w-4 h-4 inline" />
            <span>A guided repair</span>
          </div>
        </div>
      </div>

      {/* 4. Section: The hardest part of repair? */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900">
            The hardest part of repair?<br />Knowing where to start.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-7 border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-full bg-[#e8f4fd] text-[#0058a3] flex items-center justify-center font-bold text-base mb-6">
              ?
            </div>
            <h3 className="text-xl font-bold text-neutral-900">What&apos;s wrong?</h3>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-7 border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-full bg-[#e8f4fd] text-[#0058a3] flex items-center justify-center font-bold text-base mb-6">
              ?
            </div>
            <h3 className="text-xl font-bold text-neutral-900">Can I fix it?</h3>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-7 border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-full bg-[#e8f4fd] text-[#0058a3] flex items-center justify-center font-bold text-base mb-6">
              ?
            </div>
            <h3 className="text-xl font-bold text-neutral-900">Is it worth my time?</h3>
          </div>
        </div>

        {/* The Design Insight */}
        <div className="flex items-start gap-4 pt-2">
          <span className="text-[11px] font-bold tracking-widest text-[#0058a3] uppercase mt-1 shrink-0">
            THE DESIGN INSIGHT
          </span>
          <p className="text-base font-medium text-neutral-700">
            Sustainability interest isn&apos;t necessarily the problem. Friction is!
          </p>
        </div>
      </section>

      {/* 5. Section: From a photo to a way forward */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto border-t border-neutral-200/70">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 mb-2">
            From a photo to a way forward.
          </h2>
          <p className="text-neutral-500 text-base">
            You don&apos;t need to know what&apos;s wrong before asking for help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Step 01 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <span className="text-4xl font-extrabold text-[#0058a3] tracking-tight">01</span>
              <Camera className="w-6 h-6 text-[#0058a3]" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Show us the problem</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Take a photo &amp; explain the problem. The proposed AI helps identify the IKEA product; you confirm it.
            </p>
          </div>

          {/* Step 02 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <span className="text-4xl font-extrabold text-[#0058a3] tracking-tight">02</span>
              <Scan className="w-6 h-6 text-[#0058a3]" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Get a diagnosis</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              A likely diagnosis, a few checks, and a clear view of time, tools, parts and cost.
            </p>
          </div>

          {/* Step 03 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <span className="text-4xl font-extrabold text-[#0058a3] tracking-tight">03</span>
              <Wrench className="w-6 h-6 text-[#0058a3]" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Fix it, one step at a time</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Follow a simple, checked repair guide or get help when repair isn&apos;t the right route.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Section: No mystery tools. No surprise effort. */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto border-t border-neutral-200/70">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 mb-2">
            No mystery tools. No surprise effort.
          </h2>
          <p className="text-neutral-500 text-base">
            The coach answers the practical questions that make a repair feel possible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm space-y-3">
            <Clock className="w-5 h-5 text-[#0058a3]" />
            <div className="text-[11px] font-semibold text-neutral-500">Is it worth my time?</div>
            <div className="text-2xl font-black text-neutral-900">5-10 min</div>
            <p className="text-xs text-neutral-500">A short, beginner-friendly repair.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm space-y-3">
            <Tag className="w-5 h-5 text-[#0058a3]" />
            <div className="text-[11px] font-semibold text-neutral-500">How much will it cost?</div>
            <div className="text-2xl font-black text-neutral-900">£0</div>
            <p className="text-xs text-neutral-500">If the existing parts are intact.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm space-y-3">
            <Wrench className="w-5 h-5 text-[#0058a3]" />
            <div className="text-[11px] font-semibold text-neutral-500">Do I need special tools?</div>
            <div className="text-2xl font-black text-neutral-900">One screwdriver</div>
            <p className="text-xs text-neutral-500">A cross-head driver that fits snugly.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm space-y-3">
            <Package className="w-5 h-5 text-[#0058a3]" />
            <div className="text-[11px] font-semibold text-neutral-500">Do I need spare parts?</div>
            <div className="text-2xl font-black text-neutral-900">No new parts</div>
            <p className="text-xs text-neutral-500">Only if the parts are undamaged.</p>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-medium text-emerald-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>&ldquo;Worth a try.&rdquo; A clear overview reduces hesitation.</span>
        </div>
      </section>

      {/* 7. Section: One small step. Then the next. (Split Section) */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto border-t border-neutral-200/70">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Hand repair image */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/4.5] bg-neutral-200">
              <img
                src="/assets/Hands-on_repair.png"
                alt="Hands tightening a knob on HEMNES bedside table"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Step by step checklist & coach message */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900">
              One small step.<br />Then the next.
            </h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#ffdb00] text-black font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  1
                </div>
                <div>
                  <h4 className="text-base font-bold text-neutral-900">Inspect for damage</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    If there is significant damage, contact IKEA support.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#ffdb00] text-black font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  2
                </div>
                <div>
                  <h4 className="text-base font-bold text-neutral-900">Execute</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Step-by-step guide through the repair.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#ffdb00] text-black font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  3
                </div>
                <div>
                  <h4 className="text-base font-bold text-neutral-900">Test the result</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Ensure that the repair is successful
                  </p>
                </div>
              </div>
            </div>

            {/* Coach Message Banner */}
            <div className="bg-[#e8f4fd] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 border border-sky-100">
              <LarsOlofAvatar size="w-8 h-8" />
              <div>
                <span className="text-xs font-bold text-neutral-900 block">
                  Lars-Olof <span className="text-neutral-500 font-normal">· Your repair coach</span>
                </span>
                <p className="text-xs text-neutral-700 mt-1 leading-relaxed">
                  I provide the enjoyable process of building IKEA products, even in repair!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Section: Business Value */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto border-t border-neutral-200/70">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 mb-10">
          Business value
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Card 1: For Customers */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase">
                FOR CUSTOMERS
              </span>
              <Heart className="w-4 h-4 text-[#0058a3]" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900">More confidence.</h3>
            <ul className="space-y-2.5 text-xs text-neutral-600 leading-normal pt-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span>Understand whether a repair is manageable.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span>See effort and cost before committing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span>Keep a familiar piece useful for longer.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: For IKEA */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase">
                FOR IKEA
              </span>
              <Wrench className="w-4 h-4 text-[#0058a3]" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900">Care that continues after purchase.</h3>
            <ul className="space-y-2.5 text-xs text-neutral-600 leading-normal pt-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span>Explore a new route to after-sales help.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span>Strengthen IKEA&apos;s brand in terms of sustainability.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span>Gather repair-data for future innovation.</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-[11px] text-neutral-400 leading-normal">
          These are not proven outcomes. Product recognition, repair success and any sustainability benefit would need evaluation.
        </p>
      </section>

      {/* 9. Section: A good coach also knows its limits. */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto border-t border-neutral-200/70">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Heading & Privacy Notice */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900">
                A good coach also knows its limits.
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Trust comes from clear boundaries, not a promise that AI can fix everything.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm space-y-2">
              <h4 className="text-sm font-bold text-neutral-900">Your home is personal.</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Lars-Olof should ask for photo consent, minimise personal details and define retention clearly.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Boundaries */}
          <div className="lg:col-span-7 space-y-6">
            {/* Limit 1 */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm flex items-start gap-4">
              <RefreshCw className="w-5 h-5 text-[#0058a3] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-neutral-900">Likely is not certain</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Confirm the product and ask a few checks. If the image is unclear, request another photo rather than guessing.
                </p>
              </div>
            </div>

            {/* Limit 2 */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm flex items-start gap-4">
              <ShieldAlert className="w-5 h-5 text-[#0058a3] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-neutral-900">Know when to stop</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Start with low-risk furniture fixes. Exclude electrical work and safety-critical structural repairs. Damage or doubt means stop.
                </p>
              </div>
            </div>

            {/* Limit 3 */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm flex items-start gap-4">
              <Headphones className="w-5 h-5 text-[#0058a3] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-neutral-900">A path to human help</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  If tightening fails or parts are damaged, direct the customer to IKEA customer support. Parts fit and availability must be verified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Section: Sustainability (Soft Green Background) */}
      <section className="bg-[#e4f3e6] py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Heading & Carbon Footprint Quote */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 mb-2">
                Sustainability
              </h2>
              <p className="text-sm text-neutral-700">
                Lars-Olof keeps functional furniture out of landfills.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-emerald-200/60 shadow-sm space-y-3">
              <span className="text-[11px] font-bold text-emerald-800 tracking-wider uppercase block">
                EXTENDING FURNITURE LIFESPAN
              </span>
              <p className="text-xs text-neutral-700 leading-relaxed italic">
                &ldquo;Extending the life of a piece of furniture by just 2 years reduces its overall carbon footprint by over 40%.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: 3 Points */}
          <div className="lg:col-span-7 space-y-6">
            {/* Point 1 */}
            <div className="flex items-start gap-4">
              <Recycle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-neutral-900">Circular consumption = Less waste</h4>
                <p className="text-xs text-neutral-700 mt-1 leading-relaxed">
                  Prevents bulky home goods and hardware components from ending up prematurely in municipal waste.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex items-start gap-4">
              <TrendingDown className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-neutral-900">Reduce resource demand</h4>
                <p className="text-xs text-neutral-700 mt-1 leading-relaxed">
                  Directly lowers demand for raw timber and manufacturing energy by preserving existing products.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex items-start gap-4">
              <Award className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-neutral-900">Start a movement</h4>
                <p className="text-xs text-neutral-700 mt-1 leading-relaxed">
                  Builds consumers confidence, accountability and hopefully desire to reduce waste. All while strengthening customers trust for IKEA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="bg-[#0b202c] text-white py-14 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-bold text-sm tracking-wide text-neutral-100">
              IKEA Smart Repair Coach
            </h3>
            <p className="text-xs text-neutral-400">Lars-Olof</p>
          </div>

          <div className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
            GROUP 13 CONCEPT / 2026
          </div>
        </div>
      </footer>
    </div>
  );
};
