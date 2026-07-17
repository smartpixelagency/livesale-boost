import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Comment = { id: number; user: string; text: string };
type Reservation = { id: number; user: string; sku: string; price: string };

const COMMENT_POOL: Omit<Comment, "id">[] = [
  { user: "@lea_m", text: "MINE 🙋" },
  { user: "@tomk", text: "+1 rot M" },
  { user: "@sofia", text: "Nehm 2!" },
  { user: "@jana", text: "sold?" },
  { user: "@marc", text: "SKU 042 bitte" },
  { user: "@nina", text: "reserviert!" },
  { user: "@ben", text: "+1" },
  { user: "@ela", text: "MINE size L" },
];

const SKUS = [
  { sku: "SKU-042 · Hoodie Rot", price: "€ 89,00", was: "€ 129,00" },
  { sku: "SKU-118 · Sneaker Wht", price: "€ 149,00", was: "€ 199,00" },
  { sku: "SKU-207 · Cap Black", price: "€ 29,00", was: "€ 39,00" },
  { sku: "SKU-311 · Tee Vintage", price: "€ 39,00", was: "€ 55,00" },
];

export const LiveVisualizer = ({ viewersLabel }: { viewersLabel: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [stock, setStock] = useState(24);
  const [viewers, setViewers] = useState(1247);

  useEffect(() => {
    let cid = 0;
    let rid = 0;
    const commentTimer = setInterval(() => {
      const pick = COMMENT_POOL[Math.floor(Math.random() * COMMENT_POOL.length)];
      cid += 1;
      setComments((prev) => [...prev.slice(-4), { id: cid, ...pick }]);
    }, 1400);

    const reservationTimer = setInterval(() => {
      const sku = SKUS[Math.floor(Math.random() * SKUS.length)];
      const user = COMMENT_POOL[Math.floor(Math.random() * COMMENT_POOL.length)].user;
      rid += 1;
      setReservations((prev) => [{ id: rid, user, sku: sku.sku, price: sku.price }, ...prev].slice(0, 3));
      setStock((s) => (s <= 3 ? 24 : s - 1));
    }, 2200);

    const viewerTimer = setInterval(() => {
      setViewers((v) => v + Math.floor(Math.random() * 7) - 2);
    }, 1800);

    return () => {
      clearInterval(commentTimer);
      clearInterval(reservationTimer);
      clearInterval(viewerTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-[280px] md:h-[420px] bg-ink text-paper overflow-hidden font-display">
      {/* Grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #faf8f5 1px, transparent 1px), linear-gradient(to bottom, #faf8f5 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      <div className="relative h-full grid grid-cols-12 gap-0">
        {/* LEFT — Stream frame with comments */}
        <div className="col-span-7 md:col-span-5 border-r border-paper/10 p-4 md:p-6 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
              LIVE
            </div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-paper/60 tabular-nums">
              {viewers.toLocaleString("de-DE")} {viewersLabel}
            </div>
          </div>

          {/* Faux video frame */}
          <div className="relative flex-1 border border-paper/15 overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 40%, rgba(234,88,12,0.25), transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(250,248,245,0.08), transparent 55%)",
              }}
              aria-hidden
            />
            {/* Scanning line */}
            <motion.div
              className="absolute left-0 right-0 h-px bg-ember/60"
              initial={{ top: "0%" }}
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              aria-hidden
            />

            {/* Product tag floating */}
            <motion.div
              className="absolute left-3 bottom-3 bg-paper text-ink px-2 py-1 text-[10px] uppercase tracking-widest"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              SKU-042 · <span className="text-ember">€89</span>
              <span className="line-through text-ink/40 ml-1">€129</span>
            </motion.div>

            {/* Stock ticker */}
            <div className="absolute right-3 top-3 bg-paper/10 backdrop-blur-sm border border-paper/20 px-2 py-1 text-[10px] uppercase tracking-widest">
              Bestand{" "}
              <motion.span
                key={stock}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-ember tabular-nums font-semibold"
              >
                {stock}
              </motion.span>
            </div>

            {/* Floating comments overlay */}
            <div className="absolute inset-x-0 bottom-12 px-3 flex flex-col gap-1">
              <AnimatePresence initial={false}>
                {comments.map((c) => (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.35 }}
                    className="text-[11px] text-paper/90"
                  >
                    <span className="text-ember">{c.user}</span>{" "}
                    <span className="text-paper/70">{c.text}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* MIDDLE — Flow arrow (desktop only) */}
        <div className="hidden md:flex col-span-2 items-center justify-center relative">
          <div className="w-full h-px bg-paper/20 relative overflow-hidden">
            <motion.div
              className="absolute top-0 h-px w-1/3 bg-ember"
              animate={{ left: ["-33%", "100%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-8 text-[9px] uppercase tracking-widest text-paper/50">
            Reserviert
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-6 text-[9px] uppercase tracking-widest text-ember">
            Draft Order ↦
          </div>
        </div>

        {/* RIGHT — Draft order stack */}
        <div className="col-span-5 p-4 md:p-6 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-paper/60">
              Shopify · Draft Orders
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-ember">
              #{String(reservations[0]?.id ?? 0).padStart(4, "0")}
            </span>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <AnimatePresence initial={false}>
              {reservations.map((r, idx) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, x: 30, scale: 0.98 }}
                  animate={{ opacity: idx === 0 ? 1 : 0.5 - idx * 0.15, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                  className="border border-paper/15 bg-paper/[0.03] p-2.5 md:p-3"
                >
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-paper/50 mb-1">
                    <span>{r.user}</span>
                    <span className="flex items-center gap-1 text-ember">
                      <span className="w-1.5 h-1.5 rounded-full bg-ember" />
                      Reserved
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-xs md:text-sm text-paper truncate">{r.sku}</span>
                    <span className="text-xs md:text-sm text-ember tabular-nums">{r.price}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-3 pt-3 border-t border-paper/15 flex items-center justify-between text-[10px] md:text-xs uppercase tracking-widest">
            <span className="text-paper/60">Bestand gesichert</span>
            <span className="text-ember">Atomic ✓</span>
          </div>
        </div>
      </div>
    </div>
  );
};
