export default function Logo({ className = '', as: Tag = 'span' }) {
  return (
    <Tag
      className={`logo-text bg-gradient-to-r from-[#7b6fff] to-[#4fd6ea] bg-clip-text font-black tracking-tight text-transparent ${className}`}
    >
      insy8.ai
    </Tag>
  )
}
