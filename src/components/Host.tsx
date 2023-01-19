import { HostDataType } from '../scripts/types/Types'

type Props = {
  host: HostDataType
}

const Tag = ({ host }: Props) => {
  return (
    <div className="host">
      <div className="host__name">
        <p className="host__name__first-name">{host.name.split(' ')[0]}</p>
        <p className="host__name__last-name">{host.name.split(' ')[1]}</p>
      </div>
      <img className="host__picture" src={host.picture} alt="Hôte" />
    </div>
  )
}

export default Tag
