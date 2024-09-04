import { SimpleBox } from "./SimpleBox";

export const About = () => {
  return (
    <section className="w-full bg-white flex justify-start items-center flex-col text-center py-20">
      <h1 className="text-4xl font-bold mb-16">
        Our priorities is patience quality trust
      </h1>

      <div className="md:w-[60vw] w-[90vw] flex justify-around items-center gap-8">
        <SimpleBox>
          <h3 className="text-2xl text-black font-bold">What we do?</h3>
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
        <div className="flex justify-around items-center flex-col gap-7">
          <SimpleBox className="border-blue-600 bg-blue-600 text-white">
            <h3>How can we do?</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
          </SimpleBox>
          <SimpleBox className="border-blue-600 bg-blue-600 text-white">
            <h3>How can we do?</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
          </SimpleBox>
        </div>
        <SimpleBox>
          <h3 className="text-2xl text-black font-bold">What we do?</h3>
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
    </section>
  );
};
