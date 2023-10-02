import React from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function PaintCorrectionGallery() {

  return (
    <section className='gallery-content-container'>
      <Head>
        <title>Car Wash Gallery | Dirt-Less Detailing</title>
        <Metatags
          title='Car Wash Gallery | Dirt-Less Detailing'
          description='Take a look at our showcase of our exterior wash services to get a preview of what we are capable of doing to your car, no matter the current condition!'
          image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/55dcbdac-12df-4f37-2058-f3aaf8a6b600/public'
          canonical='/gallery/exterior'
        />
      </Head>
      <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/55dcbdac-12df-4f37-2058-f3aaf8a6b600/cover')`}}></div>
      <div className="servicepage-header" style={{transform: 'translate(7%, 10vh)'}}>
        <div style={{alignItems: 'center'}}>
          <h1><span className='accent-orange bold text-shadow'>Exterior Decon Wash Gallery</span></h1>
          <h2 className='page-subheading' style={{textAlign: 'center'}}>This is a showcase of our Exterior Wash service. Take a look at our <a href="/services/exterior" className='aside-link'>Exterior Decon Wash</a> page for more details and pricing.</h2>
          <div className='header-buttons'>
            <a href="/Contact" className='top-quote-btn'><img src='../assets/icons/clipboard.png' alt='clipboard' className='btn-icon' /> Book Now!</a>
            <a href="tel:2532529758" className='top-quote-btn btn-secondary'><img src='../assets/icons/phoneMessage.png' alt='call or message' className='btn-icon' /> (253) 252-9758</a>
          </div>
        </div>
      </div>

      <br className="extra-space" />
      <div className="mini-grid">
        <Zoom>
          <div className="card card-tall" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3924445d-d294-4c5c-4a8f-1e608144bb00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card card-tall" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f33cbb52-1621-49e7-7656-ba47d7ff2700/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card card-tall" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/894dc2de-4f19-4630-df46-ba533c677d00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card card-tall" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/80c839d6-2d5c-4650-e5b1-08cc22e8cb00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card card-tall" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ca21f366-3a0c-46f9-b7bd-a82cde2c2500/public')`}}></div>
        </Zoom>
      </div>

      <br className="extra-space" />

      <h2 className="text-large text-white">More Images from our <span className='accent-orange'>Exterior Decon Wash</span> Service</h2>
      <div className="mini-grid">
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5ccc928a-c036-489b-fec8-e674a9d0ae00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/55dcbdac-12df-4f37-2058-f3aaf8a6b600/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a7b4af9c-97db-42dc-3b72-452a6221aa00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b5859464-3c0e-4fcf-8332-17155eb86d00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6649be49-1ef8-475a-6610-695cc8619a00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/196dd0db-52b4-4ece-8e28-47723f548b00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e7077cc3-0548-4eea-4846-c76ee44d2200/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/9137fff7-f82e-4335-cba8-cc069f79d000/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e4f03bb9-3976-4e00-e94d-89ee3a375f00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b814f739-3846-4796-3093-c34675a32c00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/bb93d530-727a-488e-cbd1-0d600322b200/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/82ea1adf-76c8-4ac0-e292-3713c60dd600/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b380fa7c-bc37-4936-3090-e699be40c300/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/eafb50f4-8027-4c5b-8f25-8a3f4e68bd00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/de7d3d63-8a46-4909-181f-7e3560be1d00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/8e720a1d-bebe-4512-9039-155931253200/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/926e9a72-211b-4d26-e627-f76660e35100/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/19257a98-2e8c-45ef-70c2-44748a5d7600/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/19226e28-a8ae-45a7-4743-1dd8b11c4900/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ae28b372-25f1-498b-5a24-c05774ffb500/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1388f951-7a9b-49da-526b-39d8ccdbbe00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6667c959-e20c-4ec4-03a8-c9219eb78c00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e35e3b8c-213d-456c-e8e6-1dbf2e2a0a00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/dfcc9990-ee88-465d-de08-97f94b37b000/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/52d87171-14af-476c-503a-1b2e7b5dc300/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/abad4059-5853-4e69-d9ca-bd3717588a00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/cfe10ac7-b437-47a5-4e92-8e2c93e69200/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/8eae56ed-af04-4346-0486-ab8b39551a00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3c5ebd25-6830-4a01-7b42-642f13790600/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/02bfdebc-f1e8-48a2-e543-6a3236298600/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/147c3ec4-2b37-47ed-d8f2-dacd223a3d00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/776ba643-08c5-44d3-612e-b4154533be00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/079071c2-451b-4dab-9603-33d3620bd300/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3db5b356-a6ac-4e19-6ba8-c094ba117300/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3945e495-8e00-40cf-9b92-8519b6c67f00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/65eea438-142c-4422-24fe-16ec7eac3700/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c274c919-595c-4283-2d10-c5a47e569700/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b1136594-a8fc-48a2-9c6f-6b94d123c000/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/741cf4dc-9ff4-431b-faa5-0ee043959600/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a33a454b-ac45-4972-91f7-3d80eda98900/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/aa8e36e7-b22d-45d7-9add-b4ccccb21300/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d8b99543-bf33-46c4-9795-a1ecb55c0400/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ab71ce90-9668-4ae9-30fb-f12a9d7a5a00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ecf3450f-32ca-4b8b-875f-af31496c1000/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/abfa2236-a08d-4f22-3766-53b148cb9d00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/fa4b1452-9c70-4f81-779e-d7c010341500/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ed7a689e-bd1f-445d-1648-b70ba5be3600/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/67276280-d496-4545-b796-b73cff07d500/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/edc1159d-4a1a-4309-2caa-57dc676c7d00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/fe0c1c1d-4c2b-4bd4-d959-e5d325d87b00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2b4f72db-a0cc-4f91-ed15-66d8a1b4c400/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4d96d540-305a-4b82-ac36-a45a55889300/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/607e611c-ff17-4626-8e4a-2a2d18514200/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/abd4b7ca-ee1b-493e-4ae0-2c4e86f94c00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ccc88fac-e8ba-4768-b452-fa1ca2227800/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5794cb73-4054-4a66-30bc-bb31ea833500/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0a118c00-eb44-4de0-e584-46e07c17a800/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/89cde8ad-b8a8-4d15-5a65-786ad9772d00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/942172f8-bb7a-4858-9165-fc94b7dbfc00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/52f174e6-b845-457b-9249-ca2d53cc9900/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e4833336-a1de-4443-2603-21721fed2200/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/de70cff5-0f74-4839-d319-a9d805158c00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/fbacbf21-f27a-4389-de9d-aa470df43000/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/14c28fdc-5ffa-4b61-696f-31e3afde9400/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ca33e36e-1ee2-454e-84a3-7d53c8397a00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/8d0fdc90-2463-4bce-ca3d-3ebb0730ef00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/766b6381-60a8-403a-90f8-c781816dd100/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/eb8099ef-8be3-4be2-77bc-ec6b65a7fc00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/968f206e-69c5-4caf-0516-066635f49300/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/29eb684e-a1c5-4590-6aa1-e3bd5f7f5d00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b94c976f-1d15-43bb-2370-2a11cae79d00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/57c19bd3-e805-4718-1058-3b06d9039000/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/aefa9e3f-cdda-4ff7-3aa5-8f39c8035500/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/40124dfe-3a15-46bb-4017-4abbacf6b000/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/eb7ab094-6509-4f2e-2166-a7a143815500/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/cc5ed73c-7c7c-4bbe-73a5-64b687e40b00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/275209f1-197a-41be-c64c-d94817a44000/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6bb810de-45bd-40ea-bd8f-8c72dff61e00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/fb257dd1-ee29-4721-2d59-ad017238cd00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/907e80c4-04bf-4ce8-92ee-9b2ab22d4000/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d4f1595e-a058-4e98-4644-4eff8ce08b00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/dcb8ea42-e32b-49cf-2fc9-3529cb75af00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7352d265-8a1d-4b7d-32ac-15358eb9b800/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c1bf41d1-5f60-454f-ecd2-1887f2172400/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/96138506-01f7-40ce-dede-e6dc8143e800/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a21bdf2-eb2c-4e59-7949-297aac1f2c00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a63e4d0f-d6bb-4815-ded0-d802a089d500/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c0bdc93c-37a1-41f8-60cc-4eba27e9a100/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/31265123-5fa7-4f81-af49-d224e86beb00/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5e5a1366-292c-4c52-3983-98f2e0b2d600/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/8f189b34-d8a0-41de-f607-42ffc20e8600/public')`}}></div>
        </Zoom>
        <Zoom>
          <div className="card" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b097bffc-4ed9-48c6-63ee-f1fa12f7bf00/public')`}}></div>
        </Zoom>
      </div>
      <h2 style={{ color: 'white' }}>Check out our <a href="/services/exterior" className='aside-link'>Exterior Decon Wash</a> page for more details!</h2>
    </section>
  )
}