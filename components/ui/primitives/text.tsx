import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import * as React from "react"

type BaseProps<T> = {
  asChild?: boolean
  children?: React.ReactNode
  className?: string
} & React.HTMLAttributes<T>

export type TextProps = BaseProps<HTMLParagraphElement> & {
  maxLines?: number
}
export type SpanProps = BaseProps<HTMLSpanElement>
export type HeadingProps = BaseProps<HTMLHeadingElement> & {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const headingStyles = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  h5: "scroll-m-20 text-lg font-semibold tracking-tight",
  h6: "scroll-m-20 text-base font-semibold tracking-tight"
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ asChild, as, className, ...props }, ref) => {
    const Comp = asChild ? Slot : as
    return (
      <Comp
        ref={ref}
        className={cn(headingStyles[as], className)}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ asChild, style, maxLines, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "p"
    return (
      <Comp
        ref={ref}
        className={cn("leading-7", className)}
        style={{
          ...style,
          ...(maxLines
            ? {
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: maxLines
              }
            : {})
        }}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"

export const Span = React.forwardRef<HTMLSpanElement, SpanProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "span"
    return (
      <Comp
        ref={ref}
        className={cn("leading-none", className)}
        {...props}
      />
    )
  }
)
Span.displayName = "Span"

export const Kbd = React.forwardRef<HTMLElement, SpanProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "kbd"
    return (
      <Comp
        ref={ref}
        className={cn(
          "pointer-events-none h-5 select-none rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100",
          className
        )}
        {...props}
      />
    )
  }
)
Kbd.displayName = "Kbd"