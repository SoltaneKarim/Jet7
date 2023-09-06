import fav from "../../public/favicon.ico";
export default function Head() {
  return (
    <>
      <title>Jet7</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href={fav.src} />
    </>
  )
}