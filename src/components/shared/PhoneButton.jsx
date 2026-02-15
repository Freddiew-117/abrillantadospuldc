import { useConversionTracking } from '@/hooks/useConversionTracking'

const PHONE_1 = '+34615434956'
const PHONE_2 = '+34679478500'

export default function PhoneButton({ 
  number = PHONE_1, 
  label = null, 
  variant = 'link',
  className = '' 
}) {
  const { trackPhoneClick } = useConversionTracking()
  
  const displayNumber = number === PHONE_1 ? '+34 615 43 49 56' : '+34 679 47 85 00'
  const ariaLabel = label || `Llamar al ${displayNumber}`

  const handleClick = () => {
    trackPhoneClick()
  }

  if (variant === 'button') {
    return (
      <a
        href={`tel:${number}`}
        className={`btn btn-call ${className}`}
        onClick={handleClick}
        aria-label={ariaLabel}
      >
        📞 {label || 'Llamar ahora'}
      </a>
    )
  }

  return (
    <a
      href={`tel:${number}`}
      className={className}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {label || displayNumber}
    </a>
  )
}
