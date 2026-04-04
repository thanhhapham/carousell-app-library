"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ShoppingCart, MessageCircle, Settings, ChevronRight, X, Info, ArrowRight } from "lucide-react"
import { Button } from "@/components/design-system/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/design-system/tabs"
import { BottomBarTab } from "@/components/design-system/bottom-bar/tab"

export default function MePage() {
  const [activeTab, setActiveTab] = useState("selling")
  const [activeBottomTab, setActiveBottomTab] = useState("me")
  const router = useRouter()

  return (
    <div className="w-full max-w-[475px] mx-auto bg-background-base min-h-screen relative">
      {/* Status bar */}
      <div className="h-11 bg-background-base flex items-end px-4 pb-1">
        <div className="flex justify-between w-full items-center">
          <div className="text-xs">9:41</div>
          <div className="flex items-center gap-1">
            <div className="h-2.5 w-2.5 rounded-full bg-black"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-black"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-black"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="px-4 pt-4 pb-2 flex justify-between items-start">
        <h1 className="text-title2 font-bold">My account</h1>
        <div className="flex items-center gap-4">
          <ShoppingCart className="h-6 w-6" />
          <MessageCircle className="h-6 w-6" />
          <Settings className="h-6 w-6" />
        </div>
      </div>

      {/* Scrollable Main Content - with calculated height to account for bottom bar */}
      <main style={{ height: "calc(100vh - 140px)", overflowY: "auto" }}>
        {/* Profile section */}
        <div className="px-4 flex items-center gap-3 mb-4">
          <div className="relative">
            <div className="h-12 w-12 rounded-full bg-background-display overflow-hidden">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="Profile"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-middle-callout font-medium">@username</span>
              <div className="h-4 w-4 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 text-white text-xs">✓</div>
              </div>
            </div>
            <div className="flex items-center text-small-reg text-content-secondary">
              <span className="text-core-success">★ 5.0</span>
              <span className="ml-1">(324 reviews)</span>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-stroke-boundary mx-4 mb-4"></div>

        {/* Upgrade banner */}
        <div className="mx-4 mb-4 bg-background-base border border-stroke-boundary rounded-lg p-3 flex justify-between items-center">
          <div className="flex-1">
            <p className="font-medium">Me page just got an upgrade!</p>
            <p className="text-small-reg text-content-secondary">Check out to see what's new.</p>
            <div className="flex items-center text-core-primary1 mt-1">
              <span className="text-small-reg font-medium">Start</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative w-12 h-10">
              <div className="absolute bottom-0 left-0 h-3 w-3 rounded-full bg-blue-500"></div>
              <div className="absolute bottom-1 left-3 h-4 w-4 rounded-full bg-teal-400"></div>
              <div className="absolute top-0 right-0 h-8 w-8 bg-red-500 rounded-lg transform rotate-12 flex items-center justify-center">
                <span className="text-white text-xs">❤️</span>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-stroke-boundary mx-4 mb-4"></div>

        {/* Selling/Buying tabs */}
        <div className="px-4 mb-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="selling">Selling</TabsTrigger>
              <TabsTrigger value="buying">Buying</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Separator */}
        <div className="h-px bg-stroke-boundary mx-4 mb-4"></div>

        {/* Conditional content based on active tab */}
        {activeTab === "selling" ? (
          <>
            {/* Insights section */}
            <div className="px-4 mb-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-large-callout font-bold">Insights</h2>
                <ChevronRight className="h-5 w-5 text-content-secondary" />
              </div>

              {/* Horizontal scrollable cards */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {/* Revenue vs spend card */}
                <div className="flex-shrink-0 bg-background-display border border-stroke-boundary rounded-lg p-4 min-w-fit">
                  <div className="flex items-center gap-1 text-small-reg text-content-secondary mb-3">
                    <span>Revenue vs spend (Feb)</span>
                    <Info className="h-4 w-4" />
                  </div>

                  <div className="flex gap-4 whitespace-nowrap">
                    {/* Revenue */}
                    <div className="flex-1">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold">$1,999</span>
                        <ChevronRight className="h-4 w-4 text-content-secondary" />
                      </div>
                      <div className="text-small-reg text-content-secondary">Revenue (AI-estimated)</div>
                    </div>

                    {/* Spend */}
                    <div className="flex-1">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold">$150</span>
                        <ChevronRight className="h-4 w-4 text-content-secondary" />
                      </div>
                      <div className="text-small-reg text-content-secondary">Spend</div>
                    </div>
                  </div>
                </div>

                {/* Account stats card */}
                <div className="flex-shrink-0 bg-background-display border border-stroke-boundary rounded-lg p-4 min-w-fit">
                  <div className="text-small-reg text-content-secondary mb-3">Account stats (last 7 days)</div>

                  <div className="flex gap-4">
                    {/* Total listing clicks */}
                    <div className="flex-1 min-w-fit">
                      <div className="text-xl font-bold">1,233</div>
                      <div className="text-small-reg text-content-secondary whitespace-nowrap">
                        Total listing clicks
                      </div>
                    </div>

                    {/* Profile visits */}
                    <div className="flex-1">
                      <div className="text-xl font-bold">61</div>
                      <div className="text-small-reg text-content-secondary">Profile visits</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="h-px bg-stroke-boundary mx-4 mb-4"></div>

            {/* My sales section */}
            <div className="px-4 mb-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-large-callout font-bold">My sales</h2>
                <ChevronRight className="h-5 w-5 text-content-secondary" />
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-small-reg text-content-secondary mt-1">To start</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 flex items-center justify-center relative">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <div className="absolute -top-1 -right-1 bg-core-primary2 text-content-on-dark text-tiny-reg font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                      3
                    </div>
                  </div>
                  <span className="text-small-reg text-content-secondary mt-1">In progress</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 flex items-center justify-center relative">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 7L5 7M12 17V7M5 17L19 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute -top-1 -right-1 bg-core-primary2 text-content-on-dark text-tiny-reg font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                      1
                    </div>
                  </div>
                  <span className="text-small-reg text-content-secondary mt-1">Returns</span>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="h-px bg-stroke-boundary mx-4 mb-4"></div>

            {/* My listings section */}
            <div className="px-4 mb-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-large-callout font-bold">My listings</h2>
                <div className="flex items-center">
                  <span className="text-small-reg text-content-secondary mr-1">865 listings</span>
                  <ChevronRight className="h-5 w-5 text-content-secondary" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="relative rounded-lg overflow-hidden aspect-square">
                    <Image
                      src={`/placeholder.svg?height=120&width=120&text=Item${item}`}
                      alt={`Listing ${item}`}
                      width={120}
                      height={120}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 bg-background-base bg-opacity-80 px-1">
                      <span className="text-small-reg font-medium">$50</span>
                    </div>
                    <div className="absolute top-1 right-1 text-tiny-reg text-content-on-dark bg-black bg-opacity-50 px-1 rounded">
                      2 days ago
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Separator */}
            <div className="h-px bg-stroke-boundary mx-4 mb-4"></div>

            {/* My collections section */}
            <div className="px-4 mb-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-large-callout font-bold">My collections</h2>
                <span className="text-small-reg text-content-secondary">2 collections</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[1, 2].map((item) => (
                  <div key={item} className="rounded-lg overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        src={`/placeholder.svg?height=160&width=160&text=Collection${item}`}
                        alt={`Collection ${item}`}
                        width={160}
                        height={160}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="mt-1">
                      <p className="font-medium">Dresses & Tops</p>
                      <p className="text-small-reg text-content-secondary">Last updated 2w ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Separator */}
            <div className="h-px bg-stroke-boundary mx-4 mb-4"></div>

            {/* Growth & Marketing section */}
            <div className="px-4 mb-6">
              <h2 className="text-large-callout font-bold mb-3">Growth & Marketing</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      C
                    </div>
                    <span className="font-medium">Coins</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-small-reg text-content-secondary mr-1">120 (low)</span>
                    <ChevronRight className="h-5 w-5 text-content-secondary" />
                  </div>
                </div>

                {/* Separator */}
                <div className="h-px bg-stroke-boundary"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                      P
                    </div>
                    <span className="font-medium">Promotions</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-small-reg text-content-secondary mr-1">2 Promos</span>
                    <ChevronRight className="h-5 w-5 text-content-secondary" />
                  </div>
                </div>

                {/* Separator */}
                <div className="h-px bg-stroke-boundary"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
                      S
                    </div>
                    <span className="font-medium">Shoutout</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-small-reg text-content-secondary mr-1">2 ongoing</span>
                    <ChevronRight className="h-5 w-5 text-content-secondary" />
                  </div>
                </div>

                {/* Separator */}
                <div className="h-px bg-stroke-boundary"></div>

                <div className="bg-background-base border border-stroke-boundary rounded-lg p-3">
                  <p className="text-small-reg text-content-secondary">10% off on all shoutouts</p>
                </div>

                {/* Separator */}

                <div className="h-px bg-stroke-boundary"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-red-500 flex items-center justify-center text-white">Biz</div>
                    <span className="font-medium">CarouBiz</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-small-reg text-content-secondary mr-1">Super CarouBiz</span>
                    <ChevronRight className="h-5 w-5 text-content-secondary" />
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="h-px bg-stroke-boundary mx-4 mb-4"></div>

            {/* Manage section */}
            <div className="px-4 mb-6">
              <h2 className="text-large-callout font-bold mb-3">Manage</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-red-500 flex items-center justify-center text-white">$</div>
                    <span className="font-medium">Balance</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-small-reg text-content-secondary mr-1">$1,220</span>
                    <ChevronRight className="h-5 w-5 text-content-secondary" />
                  </div>
                </div>

                {/* Separator */}
                <div className="h-px bg-stroke-boundary"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-blue-500 flex items-center justify-center text-white">SP</div>
                    <span className="font-medium">Selling Preferences</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-content-secondary" />
                </div>

                {/* Separator */}
                <div className="h-px bg-stroke-boundary"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-blue-500 flex items-center justify-center text-white">QR</div>
                    <span className="font-medium">Quick / auto reply</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-content-secondary" />
                </div>

                {/* Separator */}
                <div className="h-px bg-stroke-boundary"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-blue-500 flex items-center justify-center text-white">CP</div>
                    <span className="font-medium">Address and Collection Point</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-content-secondary" />
                </div>

                {/* Separator */}
                <div className="h-px bg-stroke-boundary"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-blue-500 flex items-center justify-center text-white">BI</div>
                    <span className="font-medium">Business info</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-content-secondary" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Buying tab content */}
            {/* My purchases section */}
            <div className="px-4 mb-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-large-callout font-bold">My purchases</h2>
                <ChevronRight className="h-5 w-5 text-content-secondary" />
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                      <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" />
                      <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <span className="text-small-reg text-content-secondary mt-1">To pay</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 flex items-center justify-center relative">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="3" width="15" height="13" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M16 8a4 4 0 0 1 8 0v7a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-7a4 4 0 0 0-4-4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle cx="8.5" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <div className="absolute -top-1 -right-1 bg-red-500 text-white text-tiny-reg font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                      1
                    </div>
                  </div>
                  <span className="text-small-reg text-content-secondary mt-1">In progress</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9 12l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <span className="text-small-reg text-content-secondary mt-1">Completed</span>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="h-px bg-stroke-boundary mx-4 mb-4"></div>

            {/* My likes section */}
            <div className="px-4 mb-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-large-callout font-bold">My likes</h2>
                <ChevronRight className="h-5 w-5 text-content-secondary" />
              </div>

              {/* Horizontal scrollable liked items */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {/* Black hoodie */}
                <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-32 h-32">
                  <Image
                    src="/images/nike-jordan.jpg"
                    alt="Black hoodie"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-2 py-1 rounded-tr">
                    <span className="text-small-reg font-medium">$50</span>
                  </div>
                  <div className="absolute top-1 left-1 text-tiny-reg text-white bg-black bg-opacity-50 px-1 rounded">
                    23 mins
                  </div>
                </div>

                {/* Nike sneakers */}
                <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-32 h-32">
                  <Image
                    src="/images/sony-headphones.jpg"
                    alt="Nike sneakers"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-2 py-1 rounded-tr">
                    <span className="text-small-reg font-medium">$50</span>
                  </div>
                  <div className="absolute top-1 left-1 text-tiny-reg text-white bg-black bg-opacity-50 px-1 rounded">
                    50 mins
                  </div>
                </div>

                {/* Third item */}
                <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-32 h-32">
                  <Image
                    src="/images/ikea-dresser.jpg"
                    alt="Third liked item"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-2 py-1 rounded-tr">
                    <span className="text-small-reg font-medium">$50</span>
                  </div>
                  <div className="absolute top-1 left-1 text-tiny-reg text-white bg-black bg-opacity-50 px-1 rounded">
                    23 mins
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="h-px bg-stroke-boundary mx-4 mb-4"></div>

            {/* My offers section */}
            <div className="px-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 relative">
                    <div className="absolute top-0 left-0 h-6 w-6 bg-red-500 rounded"></div>
                    <div className="absolute bottom-0 right-0 h-6 w-6 bg-green-500 rounded"></div>
                  </div>
                  <span className="text-large-callout font-bold">My offers</span>
                </div>
                <ChevronRight className="h-5 w-5 text-content-secondary" />
              </div>
            </div>

            {/* Separator */}
            <div className="h-px bg-stroke-boundary mx-4 mb-4"></div>

            {/* My garage section */}
            <div className="px-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-blue-500 rounded flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 22V12H15V22"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-large-callout font-bold">My garage</span>
                </div>
                <ChevronRight className="h-5 w-5 text-content-secondary" />
              </div>
            </div>
          </>
        )}
      </main>

      {/* Bottom Navigation - Positioned within container */}
      <div className="absolute bottom-0 left-0 right-0 bg-background-base">
        <BottomBarTab
          variant="homefeed"
          activeTab={activeBottomTab}
          onTabChange={(tab) => {
            setActiveBottomTab(tab)
            if (tab === "explore") {
              router.push("/prototype/explore")
            } else if (tab === "updates") {
              router.push("/prototype/updates")
            }
          }}
        />
      </div>
    </div>
  )
}
