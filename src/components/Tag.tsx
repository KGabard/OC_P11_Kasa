type Props = {
  label: string
}

const Tag = ({ label }: Props) => {
  return (
    <div className='tag'>
      <p className="tag__label">{label}</p>
    </div>
  )
}

export default Tag