import { FunctionComponent, PropsWithChildren } from 'react'

const HousingList: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="housing-list">{children}</div>
}

export default HousingList
