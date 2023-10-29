import Card from "./Card.jsx";

export function SelectService() {
  const servicos = ["Serviço A", "Serviço B", "Serviço C"];



  return (
    <div className="flex flex-col justify-center items-center basis-8/12 w-full py-14 px-14">
      <h2 className="title-font mb-4 text-base-100">SERVIÇO</h2>
      <div className="flex">
        <div className="flex w-full space-x-4">
            <Card title="TÍTULO"></Card>
            <Card title="TÍTULO"></Card>
            <Card title="TÍTULO"></Card>
        </div>
      </div>
    </div>
  );
}
