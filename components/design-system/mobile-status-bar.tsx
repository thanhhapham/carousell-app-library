/**
 * MobileStatusBar
 *
 * Renders a simulated iOS-style status bar with time, signal dots, and battery icon.
 * Used at the top of prototype pages to mimic a real mobile screen.
 */
export function MobileStatusBar({ time = "9:41" }: { time?: string }) {
  return (
    <div className="h-11 bg-background-base flex items-center justify-between px-4 text-sm font-medium">
      <span>{time}</span>
      <div className="flex items-center gap-1">
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-1 h-1 bg-black rounded-full"></div>
        </div>
        <div className="w-6 h-3 border border-black rounded-sm">
          <div className="w-4 h-2 bg-black rounded-sm m-0.5"></div>
        </div>
      </div>
    </div>
  )
}
