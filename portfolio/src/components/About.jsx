import { SimpleBox } from "./SimpleBox";
import { Title } from "./Title";

export const About = () => {
  return (
    <section className="w-full bg-white flex justify-start items-center flex-col text-center py-20">
      <h1 className="text-4xl font-bold mb-16">
        Our priorities is patience quality trust
      </h1>

      <div className="md:w-[60vw] w-[90vw] flex justify-center gap-8">
        <SimpleBox className="w-full md:w-[33%]">
          <Title className="text-black">What we do?</Title>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics.
          </p>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics.
          </p>
        </SimpleBox>
        <div className="w-full md:w-[33%] flex justify-around items-center flex-col gap-7">
          <SimpleBox className="border-blue-600 bg-blue-600 text-white h-[25vh]">
            <Title>How can we do?</Title>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
          </SimpleBox>
          <SimpleBox className="border-green-500 bg-green-500 text-white h-[25vh]">
            <Title>How can we do?</Title>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
          </SimpleBox>
        </div>
        <SimpleBox className="w-full md:w-[33%]">
          <Title>What we do?</Title>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics.
          </p>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics.
          </p>
        </SimpleBox>
      </div>

      <div className="md:w-[60vw] w-[90vw] flex justify-around gap-8 mt-36">
        <div className="flex justify-center w-[70%]">
          <SimpleBox className="w-[50%] border-none px-0 py-0">
            <img src="/credentials-system.webp" alt="Last project" className="w-full" />
          </SimpleBox>
          <SimpleBox className="w-[50%] text-white border-blue-500 bg-blue-500">
            <Title>This is our last project</Title>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia ...</p>
          </SimpleBox>
        </div>
        <SimpleBox className="text-white border-gray-800 bg-gray-800 w-[30%]">
          <Title>As a final word:</Title>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </SimpleBox>
      </div>
    </section>
  );
};
