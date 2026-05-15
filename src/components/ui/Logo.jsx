export default function Logo({ className = '', as: Tag = 'span' }) {
  return (
    <Tag className={`logo-text text-brand-gradient tracking-tight ${className}`}>
      insy8.ai
    </Tag>
  )
}
