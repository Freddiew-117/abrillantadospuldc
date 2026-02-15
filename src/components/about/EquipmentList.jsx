export default function EquipmentList() {
  const equipment = [
    'Pulidoras de alta revolución para trabajos específicos',
    'Pulidoras para hormigón',
    'Pulidoras pequeñas para trabajos menores (220W)',
    'Pulidoras grandes para grandes superficies (380W)',
    'Maquinaria específica para rincones, peldaños y espacios pequeños',
    'Máquinas rotativas de alta calidad para el acristalado',
  ]

  return (
    <section className="equipment-list section section--alt">
      <div className="section__inner">
        <h2>Todo tipo de máquinas para trabajos de todo tipo</h2>
        <ul className="equipment-list__items">
          {equipment.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
