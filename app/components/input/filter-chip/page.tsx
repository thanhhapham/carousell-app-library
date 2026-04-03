"use client"

import { ComponentPage } from "@/components/design-system/component-page"
import { Chip } from "@/components/design-system/input/chip"
import { BottomSheet } from "@/components/design-system/bottom-sheet"
import { Button } from "@/components/design-system/button"
import { useState } from "react"

interface FilterOption {
  id: string
  label: string
  selected: boolean
}

export default function FilterChipPage() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
  const [currentFilter, setCurrentFilter] = useState<string>("")
  const [filterOptions, setFilterOptions] = useState<Record<string, FilterOption[]>>({
    Filters: [
      { id: "new", label: "New", selected: false },
      { id: "used", label: "Used", selected: false },
      { id: "refurbished", label: "Refurbished", selected: false },
    ],
    Sort: [
      { id: "price-low", label: "Price: Low to High", selected: false },
      { id: "price-high", label: "Price: High to Low", selected: false },
      { id: "newest", label: "Newest First", selected: false },
    ],
    "On sale": [
      { id: "discount-10", label: "10% or more", selected: false },
      { id: "discount-25", label: "25% or more", selected: false },
      { id: "discount-50", label: "50% or more", selected: false },
    ],
    Brand: [
      { id: "apple", label: "Apple", selected: false },
      { id: "samsung", label: "Samsung", selected: false },
      { id: "google", label: "Google", selected: false },
    ],
  })

  const getAppliedFiltersCount = (filterName: string) => {
    return filterOptions[filterName]?.filter((option) => option.selected).length || 0
  }

  const getFilterState = (filterName: string) => {
    const count = getAppliedFiltersCount(filterName)
    if (count === 0) return "default"
    return count > 1 ? "multiple" : "selected"
  }

  const handleFilterClick = (filterName: string) => {
    setCurrentFilter(filterName)
    setIsBottomSheetOpen(true)
  }

  const handleOptionToggle = (optionId: string) => {
    setFilterOptions((prev) => ({
      ...prev,
      [currentFilter]: prev[currentFilter].map((option) =>
        option.id === optionId ? { ...option, selected: !option.selected } : option,
      ),
    }))
  }

  const handleApplyFilters = () => {
    setIsBottomSheetOpen(false)
  }

  const handleClearFilters = () => {
    setFilterOptions((prev) => ({
      ...prev,
      [currentFilter]: prev[currentFilter].map((option) => ({ ...option, selected: false })),
    }))
  }

  return (
    <ComponentPage
      title="Filter Chip"
      description="Filter chips are used to filter content and can have multiple selection states. They show a chevron icon and display the number of applied filters using badges."
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Filter States</h3>
          <div className="flex flex-wrap gap-2">
            <Chip variant="filter" filterState="default" label="Label" />
            <Chip variant="filter" filterState="selected" label="Selected value" appliedFiltersCount={1} />
            <Chip variant="filter" filterState="multiple" label="Label" appliedFiltersCount={3} />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Interactive Example</h3>
          <div className="flex flex-wrap gap-2">
            {Object.keys(filterOptions).map((filterName) => (
              <Chip
                key={filterName}
                variant="filter"
                filterState={getFilterState(filterName)}
                label={filterName}
                appliedFiltersCount={getAppliedFiltersCount(filterName)}
                onClick={() => handleFilterClick(filterName)}
              />
            ))}
          </div>
          <p className="text-sm text-content-secondary mt-2">Tap on any filter to open the selection bottom sheet</p>
        </div>
      </div>

      {/* Filter Selection Bottom Sheet */}
      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
        title={`Select ${currentFilter}`}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            {filterOptions[currentFilter]?.map((option) => (
              <label
                key={option.id}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-background-secondary cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={option.selected}
                  onChange={() => handleOptionToggle(option.id)}
                  className="w-4 h-4 text-background-interactive-tint border-stroke-input rounded focus:ring-background-interactive-tint"
                />
                <span className="text-content-primary">{option.label}</span>
              </label>
            ))}
          </div>

          <div className="flex gap-3 pt-4 border-t border-stroke-boundary">
            <Button variant="outline" onClick={handleClearFilters} className="flex-1">
              Clear
            </Button>
            <Button onClick={handleApplyFilters} className="flex-1">
              Apply
            </Button>
          </div>
        </div>
      </BottomSheet>
    </ComponentPage>
  )
}
