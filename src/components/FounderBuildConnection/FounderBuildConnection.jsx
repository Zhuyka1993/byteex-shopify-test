import { useEffect, useState } from 'react'
import './FounderBuildConnection.css'
import { getTalkAboutYou } from '../../sanity/getTalkAboutYou'
import CustomizeButton from '../CustomizeButton/CustomizeButton'

import image1 from '../../assets/founder-build-connection/image-1.webp'
import image2 from '../../assets/founder-build-connection/image-2.webp'
import image3 from '../../assets/founder-build-connection/image-3.webp'

function FounderBuildConnection() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function loadFounderData() {
      const founderData = await getTalkAboutYou()
      setData(founderData)
    }

    loadFounderData()
  }, [])

  if (!data) return null

  return (
    <section className="founder-build-connection">

  <div className="founder-build-connection__gallery">
    <img
      src={image1}
      alt=""
      className="founder-build-connection__image founder-build-connection__image--1"
    />

    <img
      src={image2}
      alt=""
      className="founder-build-connection__image founder-build-connection__image--2"
    />

    <img
      src={image3}
      alt=""
      className="founder-build-connection__image founder-build-connection__image--3"
    />
  </div>

  <div className="founder-build-connection__right">

    <h2 className="founder-build-connection__title">
      Be your best self.
    </h2>

    <div className="founder-build-connection__content">

      <p>
        Hi! My name's {data.name}, and I founded {data.brand} in {data.year}.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
        felis finibus consequat.
      </p>

      <p>
        Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
        placerat volutpat ligula, ac consectetur felis varius non. Aliquam a
        nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu
        congue, faucibus libero nec, placerat ligula.
      </p>

      <p>
        Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
      </p>

      <p>
        Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis,
        sapien eget lobortis fringilla, eros ipsum tristique tellus, ac
        convallis urna massa at nibh.
      </p>

      <p>
        Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod
        leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in
        sapien.
      </p>

      <p>
        Cras mattis varius mollis.
      </p>

      <CustomizeButton />

    </div>

  </div>

</section>
  )
}

export default FounderBuildConnection