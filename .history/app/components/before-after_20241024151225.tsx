"use client";

export default function BeforeAfter() {
  return (
    <section className="bg-white dark:bg-[#000000]">
      <div className="mx-auto max-w-5xl px-8 py-16 md:py-24 dark:bg-[#000000]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white shadow-lg ring-2 ring-inset ring-[#ff9501] dark:bg-[#000000] dark:shadow-2xl dark:shadow-black/50">
            <div className="p-8 sm:p-12">
              <div className="inline-flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-slate-500 dark:text-slate-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M232,184a8,8,0,0,1-16,0A88,88,0,0,0,67.47,120.16l26.19,26.18A8,8,0,0,1,88,160H24a8,8,0,0,1-8-8V88a8,8,0,0,1,13.66-5.66l26.48,26.48A104,104,0,0,1,232,184Z"></path>
                </svg>
                <span className="text-base font-semibold text-slate-700 dark:text-slate-300">
                  Before
                </span>
              </div>
              <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-200">
                Struggling to connect with sneaker enthusiasts and vintage clothing collectors
              </h3>
              <ul className="mt-6 space-y-3 text-base text-slate-600 sm:text-lg dark:text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 py-1.5">
                    <svg
                      className="h-4 w-4 text-slate-600 dark:text-slate-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </span>
                  <span>Limited reach to potential buyers and sellers</span>
                </li>
                {/* Repeat the same pattern for other list items */}
                <li className="flex items-start gap-3">
                  <span className="shrink-0 py-1.5">
                    <svg
                      className="h-4 w-4 text-slate-600 dark:text-slate-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </span>
                  <span>Difficulty in organizing and promoting events</span>
                </li>
                {/* Continue with the same pattern for remaining items */}
              </ul>
            </div>
          </div>
          
          {/* After section */}
          <div className="relative rounded-2xl bg-[#ff9501] shadow-lg ring-2 ring-inset ring-white dark:ring-white dark:shadow-2xl dark:shadow-black/50">
            <div className="relative p-8 sm:p-12">
              <div className="inline-flex items-center gap-2">
                <span className="text-base font-semibold text-blue-100">After</span>
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-blue-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L212.69,104,170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Zm-48-11.32-48-48A8,8,0,0,0,120,56V96.3A104.15,104.15,0,0,0,24,200a8,8,0,0,0,16,0,88.11,88.11,0,0,1,80-87.63V152a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,181.66,98.34Z"></path>
                </svg>
              </div>
              <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Empowering the sneaker and vintage clothing community
              </h3>
              <ul className="mt-6 space-y-3 text-base text-gray-200 sm:text-lg">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 py-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183L215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </span>
                  <span>Connect with a global network of enthusiasts and collectors</span>
                </li>
                {/* Repeat the same pattern for other list items */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}