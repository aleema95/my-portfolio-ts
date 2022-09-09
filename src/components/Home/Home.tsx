
interface Props {
  greeting: string
}

export default function Home(props: Props) {
  return (
    <div>
      <h1>
        {props.greeting}
      </h1>
    </div>
  )
}
