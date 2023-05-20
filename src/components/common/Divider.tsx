function Divider({ num }: { num: number }) {
  return (
    <div
      className={`w-[7.4375rem] h-[1px] bg-divider ${
        num % 2 == 0 ? "opacity-80" : "opacity-100"
      }`}
    >
      Divider
    </div>
  )
}

export default Divider
