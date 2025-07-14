 export const Heading = ({heading , className}) => {
  return (
     <h2 className={`text-2xl text-center font-bold mb-2 ${className}`}>{heading}</h2>
  )
}