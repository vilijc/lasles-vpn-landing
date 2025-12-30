type StatItemProps = {
  value: string
  label: string
  imageSrc?: string
}

function StatItem({ value, label, imageSrc }: StatItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
        <img src={imageSrc || "/src/assets/logo.png"} alt="logo" className="h-5 w-5" />
      </div>

      <div>
        <p className="text-lg font-semibold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  )
}

export function StatsBar() {
  return (
    <section className="w-full flex justify-center px-2">
      <div
        className="w-full max-w-[820px] h-auto md:h-[114px] rounded-2xl bg-white px-2 sm:px-6 py-4 md:py-6 shadow-lg flex items-center"
        style={{ minHeight: 80 }}
      >
        <div
          className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0"
        >
          <StatItem value="90+" label="Users" imageSrc="/users.png" />
          <div className="hidden md:block h-10 w-px bg-gray-200" />
          <StatItem value="30+" label="Locations" imageSrc="/locations.png" />
          <div className="hidden md:block h-10 w-px bg-gray-200" />
          <StatItem value="50+" label="Servers" imageSrc="/servers.png" />
        </div>
      </div>
    </section>
  )
}
