'use client'

import { useEffect, useRef } from "react"

function AnimatedBackground () {
    const blobRefs = useRef([])

    const initialPositions = [
        { x: -4, y: 0 },
        { x: -4, y: 0 },
        { x: 20, y: -8 },
        { x: 20, y: -8 },
    ]

    useEffect(() => {
        let currentScroll = 0
        let animationFrameId

        const updateBlobs = () => {
            const newScroll = window.pageYOffset
            currentScroll = newScroll

            blobRefs.current.forEach((blob, index) => {
                if (!blob) return

                const initialPos = initialPositions[index]

                const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 340
                const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40

                const x = initialPos.x + xOffset
                const y = initialPos.y + yOffset

                blob.style.transform = `translate(${x}px, ${y}px)`
            })

            animationFrameId = requestAnimationFrame(updateBlobs)
        }

        animationFrameId = requestAnimationFrame(updateBlobs)

        return () => {
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    const blobClass = "absolute rounded-full mix-blend-multiply filter blur-[128px] transition-transform duration-700 ease-out"

    return (
        <div className="fixed inset-0 -z-10 bg-radial from-[#00032A] to-bg-dark">
            <div className="absolute inset-0">
                <div
                    ref={(ref) => (blobRefs.current[0] = ref)}
                    className={`${blobClass} top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-red-500 opacity-100 md:opacity-20`}
                />
                <div
                    ref={(ref) => (blobRefs.current[1] = ref)}
                    className={`${blobClass} top-0 -right-4 w-96 h-96 bg-red-500 opacity-100 md:opacity-20 sm:block`}
                />
                <div
                    ref={(ref) => (blobRefs.current[2] = ref)}
                    className={`${blobClass} -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-red-500 opacity-20 md:opacity-20`}
                />
                <div
                    ref={(ref) => (blobRefs.current[3] = ref)}
                    className={`${blobClass} -bottom-10 right-20 w-96 h-96 bg-red-500 opacity-100 md:opacity-100 hidden sm:block`}
                />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
    )
}

export {AnimatedBackground};

