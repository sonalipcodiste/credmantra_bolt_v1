"use client";

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import canvasConfetti from "canvas-confetti";

export interface ConfettiProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLCanvasElement>,
    HTMLCanvasElement
  > {
  /**
   * If true, will fire the confetti as soon as the component mounts.
   * @default false
   */
  fireOnMount?: boolean;
}

export interface ConfettiRef {
  /**
   * Fire the confetti with the given options.
   */
  fire: (options?: canvasConfetti.Options) => void;
}

export const Confetti = forwardRef<ConfettiRef, ConfettiProps>(
  function Confetti({ fireOnMount = false, ...props }, ref) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const confettiRef = useRef<ReturnType<typeof canvasConfetti> | null>(null);

    useImperativeHandle(
      ref,
      () => ({
        fire: (opts = {}) => {
          const options = {
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            ...opts,
          };

          confettiRef.current?.(options);
        },
      }),
      []
    );

    React.useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const myConfetti = canvasConfetti.create(canvas, {
        resize: true,
        useWorker: true,
      });

      confettiRef.current = myConfetti;

      if (fireOnMount) {
        myConfetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }

      return () => {
        myConfetti.reset();
      };
    }, [fireOnMount]);

    return <canvas ref={canvasRef} {...props} />;
  }
);