'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface ScrollAnimationOptions {
    threshold?: number;
    once?: boolean;
    margin?: string;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
    const { threshold = 0.15, once = true, margin = '0px 0px -80px 0px' } = options;
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        amount: threshold,
        once,
        margin: margin as `${number}px ${number}px ${number}px ${number}px`,
    });

    return { ref, isInView };
}
