import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import * as ReactDOM from "react-dom";

const NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
] as const;

type Primitives = {
  [E in (typeof NODES)[number]]: PrimitiveForwardRefComponent<E>;
};

type PrimitivePropsWithRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E> & {
    asChild?: boolean;
  };

interface PrimitiveForwardRefComponent<E extends React.ElementType>
  extends React.ForwardRefExoticComponent<PrimitivePropsWithRef<E>> {}

export const Primitive = NODES.reduce((primitive, node) => {
  const Node = React.forwardRef(
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    (props: PrimitivePropsWithRef<typeof node>, forwardedRef: any) => {
      const { asChild, ...primitiveProps } = props;
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      const Comp: any = asChild ? Slot : node;

      if (typeof window !== "undefined") {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        (window as any)[Symbol.for("radix-ui")] = true;
      }

      return <Comp {...primitiveProps} ref={forwardedRef} />;
    }
  );

  Node.displayName = `Primitive.${node}`;

  // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
  return { ...primitive, [node]: Node };
}, {} as Primitives);

export const dispatchDiscreteCustomEvent = <E extends CustomEvent>(
  target: E["target"],
  event: E
) => {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
};
