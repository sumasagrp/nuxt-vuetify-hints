<script setup>
definePageMeta({
  hideFooter: true,
})

const headers = [
  { title: 'Boat Type', align: 'start', key: 'name' },
  { title: 'Speed (knots)', align: 'end', key: 'speed' },
  { title: 'Length (m)', align: 'end', key: 'length' },
  { title: 'Price ($)', align: 'end', key: 'price' },
  { title: 'Year', align: 'end', key: 'year' },
  { title: 'Rented', align: 'end', key: 'rented' },

]

const boats = [
  {
    name: 'Speedster',
    speed: 35,
    length: 22,
    price: 300000,
    year: 2021,
    rented: false,
  },
  {
    name: 'OceanMaster',
    speed: 25,
    length: 35,
    price: 500000,
    year: 2020,
    rented: false,

  },
  {
    name: 'Voyager',
    speed: 20,
    length: 45,
    price: 700000,
    year: 2019,
    rented: false,

  },
  {
    name: 'WaveRunner',
    speed: 40,
    length: 19,
    price: 250000,
    year: 2022,
    rented: false,

  },
  {
    name: 'SeaBreeze',
    speed: 28,
    length: 31,
    price: 450000,
    year: 2018,
    rented: false,

  },
  {
    name: 'HarborGuard',
    speed: 18,
    length: 50,
    price: 800000,
    year: 2017,
    rented: false,

  },
  {
    name: 'SlickFin',
    speed: 33,
    length: 24,
    price: 350000,
    year: 2021,
    rented: false,

  },
  {
    name: 'StormBreaker',
    speed: 22,
    length: 38,
    price: 600000,
    year: 2020,
    rented: false,

  },
  {
    name: 'WindSail',
    speed: 15,
    length: 55,
    price: 900000,
    year: 2019,
    rented: false,

  },
  {
    name: 'FastTide',
    speed: 37,
    length: 20,
    price: 280000,
    year: 2022,
    rented: false,

  },
]

function virtualBoats() {
  return [...Array(1200).keys()].map((i) => {
    const boat = { ...boats[i % boats.length] }
    boat.name = `${boat.name} #${i}`
    return boat
  })
}
</script>

<template>
  <v-data-table
    :headers="headers"
    :items="virtualBoats()"
    height="400"
    item-value="name"
    items-per-page="1200"
  >
    <template #item.rented="{ value }">
      <v-checkbox />
    </template>
  </v-data-table>
</template>
