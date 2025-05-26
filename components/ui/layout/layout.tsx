"use client"

import { type HTMLAttributes, forwardRef } from "react"
import { cn } from "~/lib/utils"

// Base types
export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

// Box
export const Box = forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn(className)} {...props} />
  }
)
Box.displayName = "Box"

// Center
export const Center = forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center", className)}
        {...props}
      />
    )
  }
)
Center.displayName = "Center"

// HStack
export const HStack = forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-row items-center", className)}
        {...props}
      />
    )
  }
)
HStack.displayName = "HStack"

// VStack
export const VStack = forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-center", className)}
        {...props}
      />
    )
  }
)
VStack.displayName = "VStack"

// Stack (with gap prop)
interface StackProps extends LayoutProps {
  direction?: "row" | "column"
  spacing?: number
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction = "column", spacing = 4, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          direction === "column" ? "flex-col" : "flex-row",
          `gap-${spacing}`,
          className
        )}
        {...props}
      />
    )
  }
)
Stack.displayName = "Stack"

// Grid
interface GridProps extends LayoutProps {
  columns?: number
  gap?: number
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, columns = 1, gap = 4, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid",
          `grid-cols-${columns}`,
          `gap-${gap}`,
          className
        )}
        {...props}
      />
    )
  }
)
Grid.displayName = "Grid"

// Flex
interface FlexProps extends LayoutProps {
  direction?: "row" | "column"
  align?: "start" | "center" | "end" | "stretch"
  justify?: "start" | "center" | "end" | "between" | "around"
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      direction = "row",
      align = "stretch",
      justify = "start",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          direction === "column" ? "flex-col" : "flex-row",
          `items-${align}`,
          `justify-${justify}`,
          className
        )}
        {...props}
      />
    )
  }
)
Flex.displayName = "Flex"

// Container
export const Container = forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"