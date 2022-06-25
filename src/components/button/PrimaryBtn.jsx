export const PrimaryBtn = ({text}) => {
  return (
    <button class="inline-flex items-center bg-black text-white border-0 py-2 px-4 focus:outline-none rounded text-base mt-4 md:mt-0">{text}</button>
  )
}
PrimaryBtn.defaultProps = {
    text:"Btn Text"
}