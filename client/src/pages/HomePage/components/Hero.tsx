export default function Hero() {
  return (
    <section
      className="p-page h-[80vh] relative overflow-hidden bg-gradient-to-br from-secondary to-primary before:absolute before:content-blank before:bottom-0 before:left-0 
      before:h-[90%] before:w-[70%] before:bg-secondary before:brightness-110 before:rounded-circle before:z-[1] before:-translate-x-1/2 before:translate-y-3/4 after:absolute
      after:content-blank after:top-0 after:right-0 after:rounded-circle after:h-[120%] after:w-[110%] after:z-[1] after:translate-x-1/2 after:-translate-y-1/2
      after:bg-gradient-to-r after:from-secondary after:to-primary flex"
    >
      <div className="basis-1/2 text-back flex flex-col gap-y-4 justify-center">
        <h1 className="text-back text-5xl font-medium">Looking for Talent ?</h1>
        <p className="text-lg">
          Signup with our most advanced applicant tracking system with built in
          tools to help you filter out the best candidates for your job needs.
        </p>
        <button className="bg-brand w-max px-8 py-3 text-xl rounded-full border-2 border-brand duration-300 hover:bg-background hover:text-brand">
          Get Started
        </button>
      </div>
      <div className="basis-1/2 flex flex-col justify-center">
        <img
          src="/images/home-hero.png"
          className="z-[2] relative w-full aspect-auto"
        />
      </div>
    </section>
  );
}
