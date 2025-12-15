

export default function Review({ sizeX, sizeY, children }) {
  const customStyle = {
    height: sizeY ? sizeY + 'px' : 'max-content',
    width: sizeX ? sizeY + 'px' : 'auto'
  }

  return (
    <>
      <div
        id="review-mainbody"
        style={customStyle}
      >
        {children}
      </div>
    </>
  )
}