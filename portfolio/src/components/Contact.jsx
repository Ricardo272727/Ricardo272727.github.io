import { SimpleBox } from "./SimpleBox";
import { Title } from "./Title";

export const Contact = () => {
  return (
    <SimpleBox id="contact" className="bg-white text-black py-36">
      <Title className="text-3xl my-12">Contacto</Title>

      <p className="text-gray-500">Envia un correo electrónico a: </p>
      <a className="text-gray-700 text-2xl" href="mailto:cuanaloricardo@outlook.com">cuanaloricardo@outlook.com</a>
    </SimpleBox>
  );
};
