import { useState, useRef, useEffect } from "react"
import './styles/Image.css'

const Image = ({
    image,
    alt,
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const imageRef = useRef(null)

    useEffect(() => {
        if (imageRef.current) {
            imageRef.current.addEventListener("load", () => {
                setIsImageLoaded(true)
            })
        }

        return () => {
            if (imageRef.current) {
                imageRef.current.removeEventListener("load", () => {
                    setIsImageLoaded(false)
                });
            }
        }
    }, [])

    return (
        <>
        <img
            className={`image-main${className ? ` ${className}` : ""}${isImageLoaded ? '' : ' opacity-0'}`}
            src={image}
            alt={alt}
            ref={imageRef}
            onClick={onClick}
            decoding="async"
            title={alt}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        />
        </>
    )
}

export default Image