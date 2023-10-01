import { Text } from "../../components/atoms/Text";

export const Dashboard = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1200px] py-24 flex flex-col">
        <Text size="large">Hi, Bruno</Text>
        <Text size="small" color="secondary">bem-vindo de volta ao espaço de trabalho. nós sentimos saudades de você</Text>
        <div className="mt-12 flex items-center">
          <Text size="medium">Lista de lotes</Text>
          <span className="ml-2">
            <Text size="medium" color="secondary">(12)</Text>
          </span>
        </div>
      </div>
    </div>
  )
}