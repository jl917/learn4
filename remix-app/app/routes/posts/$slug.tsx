import { useLoaderData, LoaderFunction } from "remix";

export const loader: LoaderFunction = (props) => {
  console.log(props);
  return props.params.slug;
}

export default function Index () {
  const slug = useLoaderData<any>();
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
