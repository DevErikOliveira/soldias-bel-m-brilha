import nosMove from "../assets/nos-move.jpg";

const NosMove = () => {
  return (
    <section
      className="py-24 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${nosMove})` }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center md:justify-start">
        <div className="max-w-3xl mx-auto md:mx-0 md:mr-auto text-center md:text-left text-white">
          <h2 className="font-bold mb-4">
            <span className="block text-[32px] md:text-[38px] text-solar-orange mb-2">O Sol que Nos Move</span>
            <span className="block text-[30px] md:text-[36px]">O Potencial de um Sol que Ninguém Mais Tem</span>
          </h2>

          <p className="text-base md:text-lg opacity-95 mb-4">
            Em Belém, a natureza nos agraciou com uma força inigualável.
          </p>

          <p className="text-base md:text-lg opacity-90 mb-4">
            É o sol que abraça a Baía do Guajará, que faz a mangueira florescer e que dita o ritmo quente da nossa vida na Amazônia.
          </p>

          <p className="text-base md:text-lg opacity-90 mb-4">
            Na região Norte, esse astro poderoso não é apenas luz e calor; ele é uma fonte inesgotável de economia e vida para sua casa ou negócio.
          </p>

          <p className="text-base md:text-lg opacity-90 mb-4">
            Nós, da <strong>SolDias</strong>, transformamos essa potência, que já é sua por direito, em Energia Solar de alta performance. Não é só sobre ter um sol forte. É sobre ter a tecnologia que canaliza essa intensidade para:
          </p>

          <ul className="list-disc list-inside text-base md:text-lg opacity-90 mb-4">
            <li>Alimentar cada canto da sua casa com eletricidade limpa.</li>
            <li>Garantir o conforto do seu ar-condicionado sem medo do susto na conta.</li>
            <li>Transformar o sol que dá vida às coisas no sol que dá vida às suas finanças.</li>
          </ul>

          <p className="text-base md:text-lg opacity-90">
            Aqui, no Pará, a energia solar não é um luxo; é um investimento inteligente no nosso clima e no seu bolso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NosMove;
