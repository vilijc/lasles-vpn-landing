import React from "react"

interface TitleProps {
  text: string
  highlight: string
}

const Title: React.FC<TitleProps> = ({ text, highlight }) => {
  const [before, after] = text.split(highlight)
  return (
    <h1 className="text-4xl lg:text-5xl font-light text-left">
      {before}
      <span className="font-bold">{highlight}</span>
      {after}
    </h1>
  )
}

export default Title
