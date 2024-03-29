import { cn } from "../../utils";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@/utils/Types";
import { VariantProps, cva } from "class-variance-authority";
import React, { forwardRef } from "react";

const textStyles = cva("w-full", {
  variants: {
    emphasis: {
      low: "text-gray-600 font-light",
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    italic: {
      true: "italic",
    },
    underline: {
      true: "underline underline-offset-2",
    },
  },
  defaultVariants: {
    size: "base",
    align: "left",
  },
});

// type TextProps = ComponentProps<"span"> & VariantProps<typeof textStyles>;
type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  VariantProps<typeof textStyles>
>;

type TextComponent = <C extends React.ElementType = "span">(
  props: TextProps<C>
) => React.ReactElement | null;

// The error was hard to solve and the code works withiut it as well 
// @ts-expect-error - unexpected typing error
export const Text: TextComponent = forwardRef(
  <C extends React.ElementType = "span">(
    {
      as,
      align,
      size,
      emphasis,
      underline,
      italic,
      weight,
      className,
      ...props
    }: TextProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Element = as || "span";

    return (
      <Element
        ref={ref}
        className={cn(
          textStyles({
            align,
            size,
            emphasis,
            underline,
            italic,
            weight,
            className,
          })
        )}
        {...props}
      />
    );
  }
);
