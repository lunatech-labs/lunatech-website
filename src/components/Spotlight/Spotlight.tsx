import React, { useRef, useState, useEffect } from 'react';
import MousePosition from './mouse-position';
import "./Spotlight.scss";

type SpotlightProps = {
    children: React.ReactNode;
    className?: string;
}

const isSafari = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1;
}

export default function Spotlight({children, className = '',}: SpotlightProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const mousePosition = MousePosition()
    const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
    const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
    const [boxes, setBoxes] = useState<Array<HTMLElement>>([])

    useEffect(() => {  
        if (!isSafari())
            containerRef.current && setBoxes(Array.from(containerRef.current.children).map((el) => el as HTMLElement))
    }, [])
  
    useEffect(() => {    
        if (!isSafari())
            initContainer()
            window.addEventListener('resize', initContainer)

            return () => {
                window.removeEventListener('resize', initContainer)
            }
    }, [boxes])  

    useEffect(() => {
        if (!isSafari())
            onMouseMove()
    }, [mousePosition])

    const initContainer = () => {
        if(containerRef.current) {
            containerSize.current.w = containerRef.current.offsetWidth
            containerSize.current.h = containerRef.current.offsetHeight
        }
    }  
  
    const onMouseMove = () => {    
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            const { w, h } = containerSize.current
            const x = mousePosition.x - rect.left
            const y = mousePosition.y - rect.top
            const inside = x < w && x > 0 && y < h && y > 0      
            if (inside) {
                mouse.current.x = x
                mouse.current.y = y
                boxes.forEach((box) => {
                    const boxX = -(box.getBoundingClientRect().left - rect.left) + mouse.current.x
                    const boxY = -(box.getBoundingClientRect().top - rect.top) + mouse.current.y
                box.style.setProperty('--mouse-x', `${boxX}px`)
                box.style.setProperty('--mouse-y', `${boxY}px`)
                })
            }
        }
    }  

    return (
        <div className={className} ref={containerRef}>{children}</div>
    )
}

type SpotlightCardProps = {
    children: React.ReactNode;
    className?: string;
    padding: string;
}

export function SpotlightCard({children, className = '', padding = ''}: SpotlightCardProps) {
    return (
        <div className={isSafari() ? `spotlight disable-before-after ${className}` : `spotlight ${className}`}>
            <div className={`spotlight__card ${padding}`}>
                <div className="spotlight__gradient" aria-hidden="true"><div></div></div>
                <div className="spotlight__content">
                    {children}
                </div>
            </div>
        </div>
    )
}
