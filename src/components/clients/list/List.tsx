const List = () => {
  const list = [
    {
      id: window.crypto.randomUUID(),
      name: "Javascript Remote",
      logo: "/assets/jsr_logo.svg",
      url: "//javascriptremote.com",
    },
    {
      id: window.crypto.randomUUID(),
      name: "Cyrillic Software",
      logo: "/assets/cyrillic_logo.jpg",
      url: "//cyrillicsoftware.net",
    },
    {
      id: window.crypto.randomUUID(),
      name: "LibraFire",
      logo: "/assets/libra_logo.svg",
      url: "//librafire.com",
    },
    {
      id: window.crypto.randomUUID(),
      name: "HTEC Group",
      logo: "/assets/htec_logo.svg",
      url: "//htecgroup.com",
    },
  ];

  return (
    <>
    {
      list.map(({ id, name, logo, url }) => (
        <a href={url} target="_blank" rel="noreferrer" key={id}>
          <img src={logo} alt={name} width={100} height={100} loading="lazy" />
        </a>
      ))
    }
    </>
  )
};

export default List;
