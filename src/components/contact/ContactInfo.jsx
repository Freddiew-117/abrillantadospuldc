import PhoneButton from '@/components/shared/PhoneButton'

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <h3>Contacto</h3>
      <p>
        <strong>Dos Hermanas, Sevilla 41702</strong>
      </p>
      <p>
        <PhoneButton number="+34615434956" /> <br />
        <PhoneButton number="+34679478500" />
      </p>
    </div>
  )
}
