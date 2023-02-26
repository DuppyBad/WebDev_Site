import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import BigButton from '@/shared/BigButton'
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = (props: Props) => {
  return (
    <div>Home</div>
  )
}

export default Home