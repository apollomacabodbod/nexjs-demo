"use server"



export default async function getData() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = res.json()
  return data;

}
