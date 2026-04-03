"use client"
import { ChevronRight } from "lucide-react"
import { useState, useCallback } from "react"
import { Button } from "@/components/design-system/button"
import { TopNav } from "@/components/design-system/top-nav/title-action"
import { BottomBarTask } from "@/components/design-system/bottom-bar/task"
import { CoinIcon } from "@/components/design-system/icons/coin-icon"
import { Snackbar } from "@/components/design-system/snackbar"
import { Dialog } from "@/components/design-system/dialog"

export default function GamificationStreaksPage() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [pointerRotation, setPointerRotation] = useState(0)
  const [selectedReward, setSelectedReward] = useState<string | null>(null)
  const [hasListed, setHasListed] = useState(false) // Track if user has listed an item
  const [showListingDialog, setShowListingDialog] = useState(false) // Control dialog visibility
  const [hasCheckedIn, setHasCheckedIn] = useState(false) // Track if user has checked in
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false) // Control snackbar visibility
  const [coinBalance, setCoinBalance] = useState(0) // Track coin balance
  const [showRewardDialog, setShowRewardDialog] = useState(false)

  const rewards = [
    { label: "Free delivery", type: "text", color: "bg-chart-1-subtle" },
    { label: "150", type: "coin", color: "bg-chart-2-subtle" },
    { label: "50", type: "coin", color: "bg-chart-3-subtle" },
    { label: "5", type: "coin", color: "bg-chart-4-subtle" },
    { label: "50", type: "coin", color: "bg-chart-5-subtle" },
    { label: "50", type: "coin", color: "bg-chart-1-subtle" },
    { label: "$5", type: "cash", color: "bg-chart-2-subtle" },
    { label: "1", type: "coin", color: "bg-chart-3-subtle" },
  ]

  const handleCheckIn = useCallback(() => {
    setHasCheckedIn(true)
    setCoinBalance(10)
    setShowSuccessSnackbar(true)
  }, [])

  const handleButtonClick = useCallback(() => {
    if (!hasListed) {
      // Show listing dialog
      setShowListingDialog(true)
    } else {
      // Spin the wheel
      spinWheel()
    }
  }, [hasListed])

  const handleBottomBarClick = useCallback(() => {
    if (!hasListed) {
      // Show listing dialog
      setShowListingDialog(true)
    } else {
      // Spin the wheel
      spinWheel()
    }
  }, [hasListed])

  const spinWheel = useCallback(() => {
    if (isSpinning || !hasListed) return

    setIsSpinning(true)
    setSelectedReward(null)

    // Generate random rotation (multiple full rotations + random angle)
    const randomAngle = Math.floor(Math.random() * 360)
    const fullRotations = 5 + Math.floor(Math.random() * 3) // 5-7 full rotations
    const totalRotation = pointerRotation + fullRotations * 360 + randomAngle

    setPointerRotation(totalRotation)

    // Determine which reward was selected based on final angle
    setTimeout(() => {
      const finalAngle = (360 - (totalRotation % 360)) % 360
      const segmentAngle = 360 / rewards.length
      const selectedIndex = Math.floor(finalAngle / segmentAngle)
      const reward = rewards[selectedIndex]

      if (reward.type === "coin") {
        setSelectedReward(`${reward.label} Coins`)
      } else if (reward.type === "cash") {
        setSelectedReward(`${reward.label} Cash`)
      } else {
        setSelectedReward(reward.label)
      }
      setIsSpinning(false)
      setShowRewardDialog(true)
    }, 3000)
  }, [isSpinning, pointerRotation, rewards, hasListed])

  const handleList = useCallback(() => {
    setHasListed(true)
    setShowListingDialog(false)
  }, [])

  const handleCancel = useCallback(() => {
    setShowListingDialog(false)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Navigation */}
      <TopNav
        title="Daily check in"
        showBackButton={true}
        showProfile={false}
        showMoreActions={false}
        onBack={() => console.log("Back clicked")}
      />

      <div className="flex-1 px-4 py-4 space-y-6 pb-32">
        {/* Current Balance Card */}
        <div className="w-full rounded-lg border-2 border-gray-200 bg-white p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-600">Current balance</span>
            <Button variant="text" textVariant="teal" className="flex items-center p-0 h-auto">
              <span>Coin history</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-4xl font-bold text-black">{coinBalance}</span>
            <CoinIcon size="lg" />
          </div>

          {!hasCheckedIn ? (
            <Button variant="primary" primaryVariant="task" fullWidth onClick={handleCheckIn}>
              Check in today to get 10 Coins
            </Button>
          ) : (
            <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-lg">
              <CoinIcon size="sm" />
              <span className="text-sm text-gray-600">Come back tomorrow to get free 10 Coins!</span>
            </div>
          )}
        </div>

        {/* Spin & Win Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Spin & Win</h2>
          <p className="text-gray-600">
            List 1 item today to spin for a reward—easy! Coins, discounts, even free delivery up for grabs.
          </p>

          {/* Improved Spin Wheel */}
          <div className="relative flex items-center justify-center py-8">
            <div className="relative w-80 h-80">
              {/* Wheel with segments */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-gray-300 bg-white">
                {rewards.map((reward, index) => {
                  const angle = (360 / rewards.length) * index
                  const nextAngle = (360 / rewards.length) * (index + 1)

                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 ${reward.color}`}
                      style={{
                        clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos(((angle - 90) * Math.PI) / 180)}% ${50 + 50 * Math.sin(((angle - 90) * Math.PI) / 180)}%, ${50 + 50 * Math.cos(((nextAngle - 90) * Math.PI) / 180)}% ${50 + 50 * Math.sin(((nextAngle - 90) * Math.PI) / 180)}%)`,
                      }}
                    >
                      {/* Content positioned in the middle of each segment */}
                      <div
                        className="absolute flex flex-col items-center justify-center text-center"
                        style={{
                          left: `${50 + 30 * Math.cos(((angle + 360 / rewards.length / 2 - 90) * Math.PI) / 180)}%`,
                          top: `${50 + 30 * Math.sin(((angle + 360 / rewards.length / 2 - 90) * Math.PI) / 180)}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {reward.type === "coin" ? (
                          <div className="flex items-center gap-1">
                            <span className="text-sm font-bold text-gray-800">{reward.label}</span>
                            <CoinIcon size="sm" />
                          </div>
                        ) : reward.type === "cash" ? (
                          <div className="w-6 h-4 bg-green-500 rounded-sm flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{reward.label}</span>
                          </div>
                        ) : (
                          <div className="text-xs font-semibold text-center leading-tight text-gray-800">
                            {reward.label.split(" ").map((word, i) => (
                              <div key={i}>{word}</div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Bigger spinning pointer using clip-path instead of borders */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 z-20"
                style={{
                  transform: `translateX(-50%) translateY(-4px) rotate(${pointerRotation}deg)`,
                  transition: isSpinning ? "transform 3s cubic-bezier(0.23, 1, 0.32, 1)" : "none",
                  transformOrigin: "50% 160px",
                }}
              >
                <div
                  className="w-6 h-4 bg-red-500"
                  style={{
                    clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)",
                  }}
                ></div>
              </div>

              {/* Center button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Button
                  variant="primary"
                  primaryVariant="task"
                  onClick={handleButtonClick}
                  disabled={isSpinning}
                  className="w-20 h-20 rounded-full text-sm"
                >
                  {isSpinning ? "..." : hasListed ? "SPIN" : "LIST TO SPIN"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Hot in demand Section */}
        <div className="bg-gray-50 p-4 rounded-lg space-y-3">
          <div className="flex items-center gap-2">
            <span>🔥</span>
            <h2 className="text-xl font-bold">Hot in demand</h2>
          </div>
          <p className="text-gray-600">If you've got it, list it!</p>

          <div className="grid grid-cols-2 gap-3 mt-4">
            {/* Jellycat Card */}
            <div className="relative rounded-lg overflow-hidden bg-black">
              <img
                src="/placeholder.svg?height=200&width=180"
                alt="Jellycat plush toy"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                <h3 className="text-lg font-bold mb-1">Jellycat</h3>
                <p className="text-sm mb-2">More than 6000 searches for it lately</p>
                <Button variant="primary" primaryVariant="task" size="small">
                  List this
                </Button>
              </div>
            </div>

            {/* Molly Card */}
            <div className="relative rounded-lg overflow-hidden bg-black">
              <img
                src="/placeholder.svg?height=200&width=180"
                alt="Molly collectible"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                <h3 className="text-lg font-bold mb-1">Molly</h3>
                <p className="text-sm mb-2">More than 1600 searches for it lately</p>
                <Button variant="primary" primaryVariant="task" size="small">
                  List this
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Dynamic Text */}
      <BottomBarTask
        primaryButton={{
          text: hasListed ? "Spin" : "List now",
          onClick: handleBottomBarClick,
          disabled: isSpinning,
        }}
        className="bg-white border-t border-gray-200"
      />

      {/* Native-style Dialog */}
      {showListingDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm mx-auto">
            <h3 className="text-lg font-semibold text-center mb-4">Listing an item</h3>
            <div className="flex flex-col gap-3">
              <Button variant="primary" primaryVariant="task" onClick={handleList} fullWidth>
                List
              </Button>
              <Button variant="secondary" onClick={handleCancel} fullWidth>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Success Snackbar */}
      {showSuccessSnackbar && (
        <Snackbar
          message="🎉 You earned 10 Coins!"
          onDismiss={() => setShowSuccessSnackbar(false)}
          autoHideDuration={3000}
        />
      )}
      {/* Reward Dialog */}
      {showRewardDialog && selectedReward && (
        <Dialog
          open={showRewardDialog}
          onClose={() => setShowRewardDialog(false)}
          title="🎉 Congratulations!"
          subtitle={`You won: ${selectedReward}`}
          illustration={
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <div className="text-3xl">🎁</div>
            </div>
          }
          primaryAction={{
            text: "Awesome!",
            onClick: () => setShowRewardDialog(false),
            variant: "primary",
            primaryVariant: "task",
          }}
        />
      )}
    </div>
  )
}
