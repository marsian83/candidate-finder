export default function Footer() {
  return (
    <footer className="px-16 bg-[#e8e8e8] flex flex-row justify-around gap-x-16 py-8">
      <div className="basis-1/4">
        <img src="/logo.png" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          voluptas eligendi omnis architecto possimus commodi inventore placeat
          eos accusamus aliquid aut veritatis, neque quas, consequuntur mollitia
          excepturi tenetur optio quae?
        </p>
      </div>
      <div className="flex flex-col basis-1/4">
        <h5>Latest News</h5>
        <a>Lorem Ipsum News1</a>
        <a>Lorem Ipsum News1</a>
        <a>Lorem Ipsum News1</a>
        <a>Lorem Ipsum News1</a>
      </div>
      <div className="flex flex-col basis-1/4">
        <h5>Useful Links</h5>
        <a>Useful Link1</a>
        <a>Useful Link1</a>
        <a>Useful Link1</a>
        <a>Useful Link1</a>
      </div>
      <div className="flex flex-col basis-1/4">
        <h5>Information</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quis
          vel officia similique hic dicta quia dolorem non sit? Nulla voluptatem
          excepturi ratione mollitia sint iure, iusto unde dolore sunt!
        </p>
      </div>
    </footer>
  );
}
