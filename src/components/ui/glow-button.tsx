import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'live' | 'cached'
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = 'live', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "px-6 py-2 text-sm font-medium transition-all",
          "bg-transparent border rounded-md",
          "hover:shadow-[0_0_15px_rgba(255,165,0,0.5)]",
          variant === 'live' 
            ? "border-orange-500 text-orange-500 hover:bg-orange-500/10" 
            : "border-blue-500 text-blue-500 hover:bg-blue-500/10",
          className
        )}
  
        {...props}
      >
        {children}
      </button>
    )
  }
)
GlowButton.displayName = "GlowButton"

export { GlowButton }
