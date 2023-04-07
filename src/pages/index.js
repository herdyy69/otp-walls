/* eslint-disable unused-imports/no-unused-vars */
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Meta } from '@/Layouts/Meta'
import { Main } from '@/components/Templates/Main'
import { AppConfig } from '@/Utils/AppConfig'

import db from './db.json'

const Index = () => {
  const [dbs, setDb] = useState(db.data)
  console.log(dbs)

  const ThousandSeparator = ({ money }) => {
    return (
      <span className="text-[15px] font-bold text-white">
        {new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(money)}
      </span>
    )
  }
  const daftarHarga = [
    {
      id: 1,
      title: 'CHOCO MAGMA',
      price: 200000,
      pcs: 42,
      description: 'Chocolate Magma',
      image: '/images/choco_magma.jpeg',
    },
    {
      id: 1,
      title: 'CHOCO MAGMA',
      price: 200000,
      pcs: 42,
      description: 'Chocolate Magma',
      image: '/images/choco_magma.jpeg',
    },
  ]

  return (
    <Main>
      <Meta
        title={`${AppConfig.title} | Daftar Harga`}
        description={AppConfig.description}
      />

      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-row flex-wrap items-center justify-center gap-2">
          {dbs.map((item, index) => {
            return (
              <div className="card w-[330px] h-[450px] bg-[#e50108] shadow-xl border-2 border-white">
                <figure>
                  <Image
                    src={
                      item.image === '/images/'
                        ? '/images/logo-walls.webp'
                        : item.image
                    }
                    alt={item.title}
                    width={280}
                    height={250}
                    className="rounded-b-md border-x-2 border-b-2 border-white object-cover object-center"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <span className="text-[15px] font-bold text-white">
                    <ThousandSeparator money={item.price} />
                    <span className="ml-2 pl-2 first-letter:text-[15px] font-bold text-white border-l-2 border-white">
                      {item.pcs} pcs
                    </span>
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Main>
  )
}

export default Index
