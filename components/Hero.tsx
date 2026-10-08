"use client";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const roles = [
  "full-stack developer",
  "AI app builder",
  "Next.js enthusiast",
  "pixel pusher",
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const delay = deleting ? 35 : text === word ? 1400 : 80;
    const timer = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        return setIndex((index + 1) % words.length);
      }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(roles);

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
        &gt; hello, world
      </p>
      <h2 className="glitch bg-gradient-to-r from-blue-500 via-fuchsia-500 to-amber-400 bg-clip-text text-6xl font-black tracking-tighter text-transparent sm:text-8xl md:text-9xl">
        DANA
        <br />
        SHARON
      </h2>
      <p className="mt-8 h-8 font-mono text-lg md:text-2xl">
        I&apos;m a <span className="text-blue-500">{role}</span>
        <span className="caret">|</span>
      </p>

      <div className="mt-12 w-full max-w-lg overflow-hidden rounded-lg border border-slate-300 bg-white/70 text-left font-mono text-xs shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80 sm:text-sm">
        <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-2 dark:border-slate-700">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-2 text-slate-400">dana@portfolio ~</span>
        </div>
        <div className="space-y-1 p-4">
          <p>
            <span className="text-green-500">$</span> whoami
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            builds things for the web, powered by too much coffee
          </p>
          <p>
            <span className="text-green-500">$</span> ls projects/
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            habit-tracker/ daily-digest/ promptly/
          </p>
          <p>
            <span className="text-green-500">$</span>{" "}
            <span className="caret">_</span>
          </p>
        </div>
      </div>

      <a
        href="#work"
        className="mt-12 flex flex-col items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500 transition-colors hover:text-blue-500"
      >
        scroll to explore
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
