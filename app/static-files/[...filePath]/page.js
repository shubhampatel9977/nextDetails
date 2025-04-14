export default async function CatchAllRoute({ params }) {

  const { filePath } = await params;

console.log('filePath', filePath);

  return (
    <>
      <h1>Catch All Route Page</h1>
      <p>File Path :- /{filePath?.join("/")}</p>
    </>
  );
}
